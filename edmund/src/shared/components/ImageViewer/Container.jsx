import { isEmpty } from "lodash";
import Component from "./Component";
import { useEffect, useState } from "react";
import { downloadDocument } from "screens/node_new/actions";
import { useDispatch, useSelector } from "react-redux";
import nodeSelector from "screens/node_new/selector";
import useCarousel from "shared/hooks/useCarousel";
import useFileStore from "shared/hooks/useFileStore";

const Container = ({ images = [], width = 300, handleReupload, defaultIndex = 0, fileKey, className }) => {
   const dispatch = useDispatch();
   const { documents } = useSelector(nodeSelector);
   const [previewVisible, setPreviewVisible] = useState(false);
   const { removeFile } = useFileStore();
   const { currentIndex, goPrev, goNext, handleChange } = useCarousel({
      items: documents?.data?.[fileKey],
      defaultIndex,
   });

   useEffect(() => {
      return () => {
         removeFile(fileKey);
      };
   }, [fileKey]);

   useEffect(() => {
      if (images.length) {
         if (!isEmpty(fileKey) && !documents?.data?.[fileKey]?.length) {
            images.filter(Boolean).forEach((item) => {
               // might have multiple images in the item comma speararted
               if (isEmpty(item) || typeof item !== "string") return;
               const fileURLs = item?.split(",");
               fileURLs.forEach((fileURL) => {
                  dispatch(downloadDocument({ fileURL, isMultiple: true, fileKey }));
               });
            });
         }
      }
   }, [JSON.stringify(images), documents?.data?.[fileKey]]);

   return (
      <Component
         images={documents?.data?.[fileKey] ?? []}
         isPDF={typeof images?.[0] === "string" && (images?.[0]?.endsWith(".pdf") || images?.[0]?.endsWith(".PDF"))}
         width={width}
         currentIndex={currentIndex}
         previewVisible={previewVisible}
         setPreviewVisible={setPreviewVisible}
         handleChange={handleChange}
         goPrev={goPrev}
         goNext={goNext}
         handleReupload={handleReupload}
         className={className}
      />
   );
};

export default Container;

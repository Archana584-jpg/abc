import { useCallback, useEffect, useState } from "react";
import { ApplicationComponent } from "../components";
import { useRouter } from "shared/hooks/useRouter";
import { useDispatch, useSelector } from "react-redux";
import applicationSelector from "../selector";
import { fetchApplicationById, documentDownload, clearDocumentDownload, clearApplicationById } from "../actions";
import { tabOptions } from "../constants";
import ChangeApplicationStatusPopup from "../containers/ChangeApplicationStatusPopup";
import { isEmpty } from "lodash";
import ViewActivityPopup from "../containers/ViewActivityPopup";
import { CustomSpinner } from "shared/components";

const Application = () => {
   const { params, goBack } = useRouter();
   const dispatch = useDispatch();
   const { applicationById, downloadedDocuments, applicationStatusHistory, changeApplicationStatus } =
      useSelector(applicationSelector);
   const [activeTab, setActiveTab] = useState(tabOptions.USER_JOURNEY);
   const [showActivityPopup, setShowActivityPopup] = useState(false);
   const [showChangeApplicationStatusPopup, setShowChangeApplicationStatusPopup] = useState(false);

   useEffect(() => {
      dispatch(fetchApplicationById({ applicationId: params?.id }));
   }, [dispatch]);

   useEffect(() => {
      return () => {
         dispatch(clearDocumentDownload());
         dispatch(clearApplicationById());
      };
   }, []);

   useEffect(() => {
      if (!isEmpty(applicationById.data)) {
         handleDocumentDownloads();
      }
   }, [applicationById]);

   const handleChange = useCallback(
      (key, value) => {
         switch (key) {
            case "activeTab":
               setActiveTab(value);
               return;
            case "showActivityPopup":
               setShowActivityPopup(value);
               return;
            case "showChangeApplicationStatusPopup":
               setShowChangeApplicationStatusPopup(value);
               return;
            default:
               return;
         }
      },
      [activeTab]
   );

   const downloadFile = useCallback(
      (list, parentKey) => {
         list?.forEach((element) => {
            if (element?.key?.includes("urls") && element?.value !== downloadedDocuments.data[element?.value]?.url) {
               if (element?.value?.includes(",")) {
                  const urls = element?.value?.split(",");
                  urls.forEach((url) => {
                     dispatch(
                        documentDownload({
                           fileURL: url,
                           isMultiple: true,
                           ...(parentKey ? { parentKey: parentKey } : {}),
                           fileKey: `${parentKey ? `${parentKey}.` : ""}${element?.key}`,
                        })
                     );
                  });
               } else {
                  dispatch(
                     documentDownload({
                        isMultiple: false,
                        fileURL: element?.value,
                        ...(parentKey ? { parentKey: parentKey } : {}),
                        fileKey: `${parentKey ? `${parentKey}.` : ""}${element?.key}`,
                     })
                  );
               }
            }
         });
      },
      [dispatch]
   );

   const handleDocumentDownloads = useCallback(() => {
      applicationById?.data?.parent_node_data_mapping?.forEach((item) => {
         downloadFile(item.label_value_mappings, item.parent_key);
         // if label value mappings have list entities then loop through them and download the files
         if (item?.label_value_mappings?.filter((item) => item.list_entities)?.length) {
            item?.label_value_mappings
               ?.filter((item) => item?.list_entities)
               ?.forEach((element) => {
                  element?.list_entities?.forEach((listEntity) => {
                     downloadFile(listEntity?.label_value_mappings, listEntity?.key);
                     listEntity?.label_value_mappings?.forEach((mapping) => {
                        if (mapping?.sub_mapping_data?.length) {
                           downloadFile(mapping?.sub_mapping_data, mapping?.key);
                        }
                     });
                  });
                  item.list_entities?.forEach((element) => {
                     downloadFile(element.label_value_mappings, item.parent_key);
                     element.label_value_mappings?.forEach((mapping) => {
                        if (mapping.sub_mapping_data?.length) {
                           downloadFile(mapping.sub_mapping_data, mapping.key);
                        }
                     });
                  });
               });
         }
         item.list_entities?.forEach((element) => {
            downloadFile(element.label_value_mappings, item.parent_key);
            element.label_value_mappings?.forEach((mapping) => {
               if (mapping.sub_mapping_data?.length) {
                  downloadFile(mapping.sub_mapping_data, mapping.key);
               }
            });
         });
      });
   }, [dispatch, applicationById.data, downloadedDocuments.data]);

   const handleBack = () => {
      goBack();
   };

   return (
      <CustomSpinner
         loading={
            applicationById.loading ||
            downloadedDocuments.loading ||
            applicationStatusHistory.loading ||
            changeApplicationStatus.loading
         }
      >
         <ApplicationComponent
            activeTab={activeTab}
            handleBack={handleBack}
            handleChange={handleChange}
            application={applicationById.data}
         />
         {showChangeApplicationStatusPopup ? (
            <ChangeApplicationStatusPopup
               application={applicationById.data}
               handleClose={() => handleChange("showChangeApplicationStatusPopup", false)}
            />
         ) : null}
         {showActivityPopup && (
            <ViewActivityPopup handleClose={() => handleChange("showActivityPopup", false)}></ViewActivityPopup>
         )}
      </CustomSpinner>
   );
};

export default Application;

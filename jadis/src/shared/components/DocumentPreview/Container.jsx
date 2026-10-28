import { useMemo, useState } from "react";
import Component from "./Component";
import DocumentPreviewPopup from "./DocumentPreviewPopup";
import { useSelector } from "react-redux";
import applicationSelector from "screens/application/selector";
import { isEmpty } from "lodash";

const Container = ({ data }) => {
   const [selectedData, setSelectedData] = useState(null);
   const { downloadedDocuments } = useSelector(applicationSelector);

   const handleChange = (key, value) => {
      switch (key) {
         case "selectedData":
            setSelectedData(value);
            break;

         default:
            break;
      }
   };

   return (
      <>
         <Component data={data} handleChange={handleChange} downloadedDocuments={downloadedDocuments.data} />
         {selectedData ? (
            <DocumentPreviewPopup
               data={data}
               selectedData={selectedData}
               downloadedDocuments={downloadedDocuments.data}
               handleClose={() => handleChange("selectedData", null)}
            />
         ) : null}
      </>
   );
};

export default Container;

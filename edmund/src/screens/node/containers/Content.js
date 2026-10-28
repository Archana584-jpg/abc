import { useCallback, useState } from "react";
import { ContentComponent } from "../components";

const Content = ({ data, steps, header, currentRecord, currentStepIndex }) => {
   const handleSubmit = useCallback(() => {}, []);
   const [fileList, setFileList] = useState({});

   const handleFileList = (fieldName, newFileList, index) => {
      if (fieldName) {
         if (index !== undefined && index !== null) {
            if (!fileList[fieldName]) {
               fileList[fieldName] = [];
            }
            if (!fileList[fieldName]?.[index]) {
               fileList[fieldName].push(newFileList);
            } else {
               fileList[fieldName][index] = newFileList;
            }
            setFileList({ ...fileList });
         } else {
            setFileList({ ...fileList, [fieldName]: newFileList });
         }
      } else {
         setFileList({});
      }
   };

   return (
      <ContentComponent
         data={data}
         steps={steps}
         header={header}
         fileList={fileList}
         handleSubmit={handleSubmit}
         currentRecord={currentRecord}
         handleFileList={handleFileList}
         currentStepIndex={currentStepIndex}
      />
   );
};

export default Content;

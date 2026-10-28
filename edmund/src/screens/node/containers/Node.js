import React, { useCallback, useEffect, useState } from "react";
import { NodeComponent } from "../components";
import { cloneDeep, isArray, isEmpty, isObject } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import nodeSelector from "../selector";
import { CustomSpinner } from "shared/components";
import { documentDownload } from "../actions";
import { getCurrentNodeRecord } from "utils/helper";
import { business_pan_upload_and_ocr } from "assets/resources/pan_node";

const Node = () => {
   const dispatch = useDispatch();
   const { actionExecuted, applicationById, documentUploaded, downloadedDocuments } = useSelector(nodeSelector);
   const [steps, setSteps] = useState([]);
   const [currentNode, setCurrentNode] = useState({});
   const [currentRecord, setCurrentRecord] = useState({});
   const [currentStepIndex, setCurrentStepIndex] = useState(null);

   useEffect(() => {
      if (!isEmpty(applicationById.data)) {
         const node = business_pan_upload_and_ocr || {};
         const steps = node?.stepper || [];
         setSteps(steps);
         setCurrentNode(cloneDeep(node));
         if (node.dataExtractor) {
            const currentRecord = getCurrentNodeRecord({ node: node.dataExtractor, data: applicationById.data.data });
            setCurrentRecord(cloneDeep(currentRecord));
            handleDocumentDownloads(currentRecord);
         } else {
            handleDocumentDownloads();
            setCurrentRecord({});
         }
      }
   }, [applicationById.data]);

   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }, [applicationById.data?.ui_config?.id]);

   useEffect(() => {
      setCurrentStepIndex(steps.findIndex((item) => item.id === currentNode.id));
   }, [steps]);

   const downloadFile = useCallback(
      (data, parentKey, recordId) => {
         Object.keys(data)?.forEach((item) => {
            if (
               item?.includes("urls") &&
               data[item] !== downloadedDocuments.data[`${parentKey ? `${parentKey}.` : ""}${item}`]?.url
            ) {
               if (data[item]?.includes(",")) {
                  const urls = data[item]?.split(",");
                  urls.forEach((url) => {
                     dispatch(
                        documentDownload({
                           fileURL: url,
                           isMultiple: true,
                           ...(recordId ? { recordId: recordId } : {}),
                           ...(parentKey ? { parentKey: parentKey } : {}),
                           fileKey: `${parentKey ? `${parentKey}.` : ""}${item}`,
                        })
                     );
                  });
               } else {
                  dispatch(
                     documentDownload({
                        isMultiple: false,
                        fileURL: data[item],
                        ...(recordId ? { recordId: recordId } : {}),
                        ...(parentKey ? { parentKey: parentKey } : {}),
                        fileKey: `${parentKey ? `${parentKey}.` : ""}${item}`,
                     })
                  );
               }
            }
         });
      },
      [dispatch, downloadedDocuments.data]
   );

   const handleDocumentDownloads = useCallback(
      (currentRecord) => {
         downloadFile(applicationById?.data?.data?.generic_data || {});
         Object.entries(applicationById?.data?.data?.additional_data || {})?.forEach(([key, item]) => {
            if (isArray(item)) {
               item
                  ?.filter?.((element) => (currentRecord?.id && element.id ? element.id === currentRecord?.id : true))
                  ?.forEach((element) => {
                     downloadFile(element, key, element.id);
                  });
            }
            if (isObject(item)) {
               downloadFile(item);
            }
         });
      },
      [dispatch, applicationById.data, downloadedDocuments.data]
   );

   return (
      <CustomSpinner
         loading={
            actionExecuted.loading || applicationById.loading || documentUploaded.loading || downloadedDocuments.loading
         }
      >
         <NodeComponent
            steps={steps}
            currentNode={currentNode}
            currentRecord={currentRecord}
            currentStepIndex={currentStepIndex}
            applicationData={applicationById.data}
         />
      </CustomSpinner>
   );
};

export default Node;

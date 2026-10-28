import React, { useEffect, useState } from "react";
import Component from "./Component";
import { useSelector } from "react-redux";
import nodeSelector from "screens/node/selector";
import { isEmpty } from "lodash";
import { business_pan_dedupe, business_pan_review_and_verification } from "assets/resources/pan_node";

const Container = () => {
   const { applicationById } = useSelector(nodeSelector);
   const [currentStepIndex, setCurrentStepIndex] = useState(null);

   useEffect(() => {
      if (!isEmpty(applicationById.data)) {
         const appData = applicationById.data;
         const currentStep = appData?.ui_config?.id;
         switch (currentStep) {
            case business_pan_dedupe.id: {
               const index = findIndexByKey(business_pan_review_and_verification.id);
               setCurrentStepIndex(index);
               break;
            }
            default: {
               const index = findIndexByKey();
               setCurrentStepIndex(index);
               break;
            }
         }
      }
   }, [applicationById.data]);

   const findIndexByKey = (nodeID) => {
      const appData = applicationById.data;
      const currentStep = nodeID || appData?.ui_config?.id || appData.active_node_key;
      const data = appData?.metadata?.node_metadata;

      return data.findIndex((item) => {
         if (item.key === currentStep) {
            return true;
         }
         if (item.sub_node_metadata) {
            return item.sub_node_metadata.some((subItem) => subItem.key === currentStep);
         }
         return false;
      });
   };

   return <Component currentStepIndex={currentStepIndex} data={applicationById.data} />;
};

export default Container;

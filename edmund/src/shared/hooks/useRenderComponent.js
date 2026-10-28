import { useMemo } from "react";
import { componentTypes } from "shared/constants";
import {
   CustomStepper,
   ActionableLabel,
   CustomModal,
   CustomAlert,
   CustomList,
   CustomImageViewer,
   CustomForm,
   CustomButton,
   CustomCollapsibleList,
   CustomTable,
   CustomOTPModal,
   CustomImage,
} from "shared/components";
import useConfigToProps from "./useConfigToProps";
import CustomLabel from "shared/components/Label";
import { Divider } from "antd";

const useRenderComponent = ({ config, data, dataSourcePath }) => {
   const props = useConfigToProps({ config, data, dataSourcePath });

   const renderedComponent = useMemo(() => {
      const { type } = config;
      switch (type) {
         case componentTypes.STEPPER:
            return <CustomStepper {...props} />;
         case componentTypes.ACTIONABLE_LABEL:
            return <ActionableLabel {...props} />;
         case componentTypes.MODAL:
            return <CustomModal {...props} />;
         case componentTypes.ALERT:
            return <CustomAlert {...props} />;
         case componentTypes.LIST:
            return <CustomList {...props} />;
         case componentTypes.COLLAPSIBLE_LIST:
            return <CustomCollapsibleList {...props} />;
         case componentTypes.IMAGE_VIEWER:
            return <CustomImageViewer {...props} />;
         case componentTypes.FORM:
            return <CustomForm {...props} />;
         case componentTypes.BUTTON:
            return <CustomButton {...props} />;
         case componentTypes.TEXT:
            return <CustomLabel {...props} />;
         case componentTypes.DIVIDER:
            return <Divider {...props} />;
         case componentTypes.TABLE:
            return <CustomTable {...props} />;
         case componentTypes.OTP_MODAL:
            return <CustomOTPModal {...props} />;
         case componentTypes.IMAGE:
            return <CustomImage {...props} />;
         default:
            return null;
      }
   }, [config, props]);

   return renderedComponent;
};

export default useRenderComponent;

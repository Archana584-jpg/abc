import { regexMapping, validationMessage } from "screens/node/constants";
import { isFileSizeValid, isFileTypeValid } from "utils/helper";
import HelperText from "./HelperText";
import { InfoCircleFilled } from "@ant-design/icons";
import { formFieldTypes } from "shared/constants";
import { isEmpty } from "lodash";

export const formatErrorMessage = (message) => {
   const helperText = {
      className: "text-xs text-calypsoCoral",
      text: message,
      icon: InfoCircleFilled,
   };
   return <HelperText helperText={helperText} />;
};

export const generateFieldRules = ({ validation, isEditable, type, customRules, file }) => {
   const rules = [
      validation?.required && {
         required:
            type === formFieldTypes.UPLOAD || type === formFieldTypes.DRAG_AND_DROP
               ? validation?.required?.isRequired && isEmpty(file)
               : validation?.required?.isRequired,
         message: formatErrorMessage(validation?.required?.message),
      },
      validation?.min && {
         min: validation?.min?.min,
         message: formatErrorMessage(validation?.min?.message),
      },
      validation?.max && {
         max: validation?.max?.max,
         message: formatErrorMessage(validation?.max?.message),
      },
      validation?.pattern &&
         isEditable && {
            pattern: validation?.pattern?.key
               ? new RegExp(regexMapping[validation?.pattern?.key])
               : new RegExp(validation.pattern.regex),
            message: formatErrorMessage(
               validation?.pattern?.key ? validationMessage[validation?.pattern?.key] : validation.pattern.message
            ),
         },
      (validation?.allowedTypes || validation?.maxAllowedSize) &&
         (() => ({
            validator: async (_, value) => {
               const isValidSize = isFileSizeValid(validation, value?.fileList);
               const isValidType = isFileTypeValid(validation, value?.fileList);
               if (!isValidSize) {
                  return Promise.reject(formatErrorMessage(validation.maxAllowedSize.message));
               }
               if (!isValidType) {
                  return Promise.reject(formatErrorMessage(validation.allowedTypes.message));
               }
               return Promise.resolve();
            },
         })),
      ...customRules,
   ];
   return rules.filter(Boolean);
};

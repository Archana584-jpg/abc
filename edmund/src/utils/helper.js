import { get, isArray, isEmpty, isObject, trim } from "lodash";
import {
   customBooleanFunctions,
   logicalOperatorFunctions,
   logicalOperatorMaps,
   operatorFunctions,
   operatorMaps,
   recordTypes,
   regexValidations,
} from "./constants";
import { message } from "antd";
import { applicationStatusReverse, cellTypes, fileTypes, formFieldTypes } from "../shared/constants";
import { s3ResourceBucketUrl } from "./config";
import CustomLabel from "shared/components/Label";
import moment from "moment";

export const formatDate = (date, format) => {
   return moment(date).format(format || "DD-MMM-YYYY HH:mm");
};

export const getFlagLogoUrl = (code) => {
   return `https://flagcdn.com/${(code || "").toLowerCase()}.svg`;
};

export const customValidator = (item, value, type) => {
   const trimmedValue = trim(value);
   if (!trimmedValue) {
      if (item.required) return "Required";
      else return "";
   }
   return !type
      ? ""
      : !regexValidations[type].validCharacters.test(trimmedValue)
      ? regexValidations[type].invalidCharMessage
      : !regexValidations[type].pattern.test(trimmedValue)
      ? regexValidations[type].invalidPatternMessage
      : "";
};

export const customValidatorWithPromise = (item, value, type) => {
   const error = customValidator(item, value, type);
   return error ? Promise.reject(error) : Promise.resolve();
};

export const errorhandling = (error) => {
   if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
      message.error(error.response.data.error.message, 10);
      return error.response.data.error.message;
   }
   return "Something went wrong. Please try again later.";
};

export const parseAuthToken = (token) => {
   if (token) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
   }
   return {};
};

export const replacePlaceholders = (string, data) => {
   if (isArray(data)) {
      return string?.replace(/{(.*?)}/g, (_, key) => data?.[0]?.[key] || "");
   }
   return string?.replace(/{(.*?)}/g, (_, key) => {
      // Use lodash get for safe property access with dot notation
      return get(data, key, "") || "";
   });
};

export const evaluateConditions = (
   conditions,
   data,
   logicalOperator = logicalOperatorMaps.AND,
   fileList,
   downloadedDocuments
) => {
   let isVisible = logicalOperator === logicalOperatorMaps.AND ? true : false;
   let mappedValue = null;
   // Iterate over conditions
   conditions.forEach((condition) => {
      const { dependOn, operator, value, type, options } = condition;
      const dependencyValue = get(data, dependOn);
      let conditionMet = false;
      switch (operator) {
         case operatorMaps.EQUALS:
            conditionMet = dependencyValue === value;
            break;
         case operatorMaps.NOT_EQUALS:
            conditionMet = dependencyValue !== value;
            break;
         case operatorMaps.IS_EMPTY:
            conditionMet = isEmpty(dependencyValue);
            break;
         case operatorMaps.IS_NOT_EMPTY:
            if (type === formFieldTypes.FILE) {
               if (!isEmpty(fileList?.[dependOn])) {
                  conditionMet = true;
               } else if (!isEmpty(downloadedDocuments?.[`${dependOn}_urls`])) {
                  conditionMet = true;
               }
            } else {
               conditionMet = !isEmpty(dependencyValue);
            }
            break;
         case operatorMaps.LESS_THAN:
            conditionMet = dependencyValue
               ? isArray(dependencyValue)
                  ? dependencyValue?.length < value
                  : dependencyValue < value
               : false;
            break;
         case operatorMaps.MORE_THAN:
            conditionMet = dependencyValue
               ? isArray(dependencyValue)
                  ? dependencyValue?.length > value
                  : dependencyValue > value
               : false;
            break;
         case operatorMaps.LESS_THAN_EQUALS:
            conditionMet = dependencyValue
               ? isArray(dependencyValue)
                  ? dependencyValue?.length <= value
                  : dependencyValue <= value
               : false;
            break;
         case operatorMaps.MORE_THAN_EQUALS:
            conditionMet = dependencyValue
               ? isArray(dependencyValue)
                  ? dependencyValue?.length >= value
                  : dependencyValue >= value
               : false;
            break;
         case operatorMaps.MAP:
            mappedValue = options?.[data[dependOn]];
            break;
         case operatorMaps.CUSTOM:
            conditionMet = customBooleanFunctions[value] ? customBooleanFunctions[value](dependencyValue) : false;
            break;
         default:
            console.error(`Unsupported operator: ${operator}`);
      }

      switch (logicalOperator) {
         case logicalOperatorMaps.AND:
            isVisible = isVisible && conditionMet;
            break;
         case logicalOperatorMaps.OR:
            isVisible = isVisible || conditionMet;
            break;
         default:
            console.error(`Unsupported logicalOperator: ${logicalOperator}`);
      }
   });

   return mappedValue || isVisible;
};

export const getActionType = (actionType, data) => {
   const { dependOn, operator, value, options } = actionType?.condition || {};
   switch (operator) {
      case operatorMaps.EQUALS:
         return data[dependOn] === value ? actionType.onSuccess : actionType.onFailure;
      case operatorMaps.IS_NOT_EMPTY:
         return !isEmpty(data[dependOn]) ? actionType.onSuccess : actionType.onFailure;
      case operatorMaps.MAP:
         return options?.[data[dependOn]];
      default:
         return actionType.onSuccess;
   }
};

export const getEvaluatedValue = (conditionConfig, data, file) => {
   if (!isObject(conditionConfig)) return conditionConfig;

   const { conditions = [], onValidCondition, onInvalidCondition } = conditionConfig;

   if (conditions.length === 0) return onValidCondition;

   let accumulatedResult = false;
   let pendingLogicalOp = "";

   for (const condition of conditions) {
      const { operator, dependOn, value } = condition;

      if (operator in operatorMaps) {
         const dependentFieldValue = get(data, dependOn);
         const currentResult = operatorFunctions[operator]({ dependentFieldValue: dependentFieldValue, value, file });

         if (pendingLogicalOp) {
            accumulatedResult = logicalOperatorFunctions[pendingLogicalOp](accumulatedResult, currentResult);
            pendingLogicalOp = "";
         } else {
            accumulatedResult = currentResult;
         }
      } else if (operator in logicalOperatorMaps) {
         pendingLogicalOp = operator;
      } else {
         console.warn(`Unsupported operator: ${operator}`);
      }
   }

   return accumulatedResult ? onValidCondition : onInvalidCondition;
};

export const isFileTypeValid = (validation, fileList) => {
   let isValid = false;
   if (fileList?.length) {
      isValid = fileList?.every((file) => validation.allowedTypes.types.includes(file.type));
   } else {
      isValid = true;
   }
   return isValid;
};

export const isFileSizeValid = (validation, fileList) => {
   let isValid = false;
   if (fileList?.length) {
      isValid = fileList?.every((file) => file.size / 1024 / 1024 <= validation.maxAllowedSize.size);
   } else {
      isValid = true;
   }
   return isValid;
};

export const downloadFile = async (url, fileName) => {
   const link = document.createElement("a");
   link.href = url;
   link.download = fileName;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
};

export const getCurrentNodeRecord = ({ node, data }) => {
   let record = {};
   const records = getNestedProperty(data, node.parentKey);
   const value = getNestedProperty(data, node.extractorKey);
   switch (node.type) {
      case recordTypes.LIST:
         record = records?.find((item) => item.id == value) || {};
         break;
   }
   return record;
};

export const getNestedProperty = (obj, path) => {
   if (!path) return null;
   const parts = path.split(".");
   return parts.reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
};

export const getFileAndType = ({ fileList, fieldName, formFields, downloadedDocuments, isMultiple }) => {
   let file = null;
   let type = null;
   if (fileList[fieldName]) {
      file = fileList[fieldName];
   } else if (downloadedDocuments?.[`${fieldName}_urls`]) {
      if (isArray(downloadedDocuments?.[`${fieldName}_urls`])) {
         if (downloadedDocuments?.[`${fieldName}_urls`].some((item) => item.recordId === formFields.id)) {
            file = downloadedDocuments?.[`${fieldName}_urls`].map((item) => item.file);
            type = downloadedDocuments?.[`${fieldName}_urls`].map((item) =>
               item.url?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE
            );
         }
      } else {
         if (formFields.id) {
            if (downloadedDocuments?.[`${fieldName}_urls`]?.recordId === formFields.id) {
               file = downloadedDocuments?.[`${fieldName}_urls`]?.file;
               type = downloadedDocuments?.[`${fieldName}_urls`]?.url?.includes(".pdf")
                  ? fileTypes.PDF
                  : fileTypes.IMAGE;
            }
         } else {
            file = downloadedDocuments?.[`${fieldName}_urls`]?.file;
            type = downloadedDocuments?.[`${fieldName}_urls`]?.url?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
         }
      }
   }

   return { file: isMultiple && !isArray(file) ? [file] : file, type: isMultiple && !isArray(type) ? [type] : type };
};

export const getSourceAndType = ({ key, item, formFields, downloadedDocuments }) => {
   let type = item?.content?.src?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
   let source = item?.content?.src;
   if (key) {
      if (downloadedDocuments?.[key]) {
         if (isArray(downloadedDocuments?.[key])) {
            if (downloadedDocuments?.[key].some((item) => item.recordId === formFields.id)) {
               source = downloadedDocuments?.[key];
            }
         } else {
            if (formFields.id) {
               if (downloadedDocuments?.[key]?.recordId === formFields.id) {
                  source = downloadedDocuments?.[key]?.file;
                  type = downloadedDocuments?.[key]?.url?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
               }
            } else {
               source = downloadedDocuments?.[key]?.file;
               type = downloadedDocuments?.[key]?.url?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
            }
         }
      }
   }
   return { type, source };
};

export const fetchJsonFromS3 = async (s3Url) => {
   try {
      const response = await fetch(`${s3ResourceBucketUrl}ui-config/${s3Url}.json`);
      if (!response.ok) {
         throw new Error(`Failed to fetch JSON from S3: ${response.statusText}`);
      }
      return await response.json();
   } catch (error) {
      console.error("Error fetching JSON from S3:", error);
      throw error;
   }
};

export const cellRenderer = ({ renderContent, item, record, index }) => {
   switch (renderContent.type) {
      case cellTypes.SR_NUMBER:
         return <CustomLabel label={{ text: `${index + 1}`, className: renderContent.className }} />;
      case cellTypes.DATE:
         return (
            <CustomLabel
               label={{
                  text: item ? formatDate(item * 1000, renderContent.format) : "",
                  className: renderContent.className,
               }}
            />
         );
      case cellTypes.STATUS:
         return (
            <CustomLabel
               label={{
                  text: item,
                  icon: { src: `${s3ResourceBucketUrl}assets/${item}.svg` },
                  className: `${renderContent.className ? renderContent.className : ""} ${
                     applicationStatusReverse[item]
                  }`,
               }}
            />
         );
      default:
         return null;
   }
};

export function orderListByKey(data, key, order) {
   const compareValues =
      (key, order = 1) =>
      (elemA, elemB) => {
         if (!elemA.hasOwnProperty(key) || !elemB.hasOwnProperty(key)) return 0;
         const comparison = elemA[key].localeCompare(elemB[key]);
         return comparison * order;
      };
   return data.sort(compareValues(key, order));
}

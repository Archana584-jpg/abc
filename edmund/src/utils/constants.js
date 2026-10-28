import { isArray, isEmpty, isEqual } from "lodash";

export const regexType = {
   EMAIL: "EMAIL",
   PHONE: "PHONE",
};

export const operatorMaps = {
   MAP: "MAP",
   MIN: "MIN",
   MAX: "MAX",
   EQUALS: "EQUALS",
   LENGTH: "LENGTH",
   CUSTOM: "CUSTOM",
   IS_EMPTY: "IS_EMPTY",
   LESS_THAN: "LESS_THAN",
   MORE_THAN: "MORE_THAN",
   NOT_EQUALS: "NOT_EQUALS",
   IS_NOT_EMPTY: "IS_NOT_EMPTY",
   LESS_THAN_EQUALS: "LESS_THAN_EQUALS",
   MORE_THAN_EQUALS: "MORE_THAN_EQUALS",
   HAS_FILE_CHANGED: "HAS_FILE_CHANGED",
};

export const operatorFunctions = {
   [operatorMaps.EQUALS]: ({ dependentFieldValue, value }) => {
      return isEqual(dependentFieldValue, value);
   },
   [operatorMaps.NOT_EQUALS]: ({ dependentFieldValue, value }) => {
      return !isEqual(dependentFieldValue, value);
   },
   [operatorMaps.IS_EMPTY]: (dependentFieldValue) => {
      return isEmpty(dependentFieldValue);
   },
   [operatorMaps.IS_NOT_EMPTY]: (dependentFieldValue) => {
      return !isEmpty(dependentFieldValue);
   },
   [operatorMaps.LESS_THAN]: ({ dependentFieldValue, value }) => {
      return dependentFieldValue
         ? isArray(dependentFieldValue)
            ? dependentFieldValue?.length < value
            : dependentFieldValue < value
         : true;
   },
   [operatorMaps.MORE_THAN]: ({ dependentFieldValue, value }) => {
      return dependentFieldValue
         ? isArray(dependentFieldValue)
            ? dependentFieldValue?.length > value
            : dependentFieldValue > value
         : true;
   },
   [operatorMaps.LESS_THAN_EQUALS]: ({ dependentFieldValue, value }) => {
      return dependentFieldValue
         ? isArray(dependentFieldValue)
            ? dependentFieldValue?.length <= value
            : dependentFieldValue <= value
         : true;
   },
   [operatorMaps.MORE_THAN_EQUALS]: ({ dependentFieldValue, value }) => {
      return dependentFieldValue
         ? isArray(dependentFieldValue)
            ? dependentFieldValue?.length >= value
            : dependentFieldValue >= value
         : true;
   },
   [operatorMaps.LENGTH]: ({ dependentFieldValue, value }) => {
      return dependentFieldValue.length === value;
   },
   [operatorMaps.HAS_FILE_CHANGED]: ({ file }) => {
      return Array.isArray(file) && file.length > 0
         ? file.some((item) => !isEmpty(item?.originFileObj))
         : !isEmpty(file?.originFileObj);
   },
   [operatorMaps.CUSTOM]: ({ dependentFieldValue, value }) => {
      return customBooleanFunctions[value] ? customBooleanFunctions[value](dependentFieldValue) : false;
   },
};

export const logicalOperatorMaps = {
   OR: "OR",
   AND: "AND",
};

export const logicalOperatorFunctions = {
   [logicalOperatorMaps.AND]: (a, b) => a && b,
   [logicalOperatorMaps.OR]: (a, b) => a || b,
};

export const regexValidations = {
   [regexType.EMAIL]: {
      validCharacters: /^[A-Za-z0-9\._%+-@]*$/,
      pattern: /^[A-Za-z0-9\._%+-]{1,64}@(?:[A-Z0-9a-z-]{1,63}\.){1,125}[A-Za-z]{2,63}$/,
      invalidCharMessage: "Invalid character entered",
      invalidPatternMessage: "Invalid email",
   },
   [regexType.PHONE]: {
      validCharacters: /^[0-9]*$/,
      pattern: /.*/,
      invalidCharMessage: "Only numbers are allowed",
      invalidPatternMessage: "Invalid phone number",
   },
};

export const recordTypes = {
   LIST: "LIST",
};

export const customBooleanFunctions = {
   isDisabled: (data) => {
      return data?.length ? data?.some((item) => item.status === "PENDING") : true;
   },
   allInactive: (data) => {
      return data?.length ? data?.every((item) => item.status === "Inactive") : true;
   },
   allActive: (data) => {
      return data?.length ? data?.every((item) => item.status === "Active") : false;
   },
   activeInactive: (data) => {
      return data?.length
         ? data?.some((item) => item.status === "Active") && data?.some((item) => item.status === "Inactive")
         : false;
   },
};

export const defaultFileTypes = {
   PDF: "PDF",
   IMAGE: "IMAGE",
};

export const actionMapper = {
   onClick: "handleClick",
   onChange: "handleChange",
   onClose: "handleClose",
   onReupload: "handleReupload",
   onUpload: "handleUpload",
};

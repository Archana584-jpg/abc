import { message } from "antd";
import { MessageTypes } from "./constants";
import dayjs from "dayjs";
import { find } from "lodash";

export const errorhandling = (error) => {
   if (error.response && error.response.data && error.response.data.error) {
      const errorData = error.response.data.error;
      if (errorData.metadata) {
         const errorMessages = Object.keys(errorData.metadata).flatMap((key) =>
            errorData.metadata[key].map((field) => field.message)
         );
         errorMessages.map((error) =>
            showMessage({
               type: MessageTypes.ERROR,
               content: error,
            })
         );
      } else if (errorData.message) {
         showMessage({
            type: MessageTypes.ERROR,
            content: errorData.message,
         });
      }
   }
};

// duration is seconds after which it should be disappeared (if set to 0 it won't dismiss)
// onClose is a callback, that will be called when the message is closed
export const showMessage = ({ content, type = MessageTypes.INFO, duration = 3, onClose }) => {
   message.open({
      content: content,
      type: type.type,
      className: type.className,
      duration: duration,
      onClose: onClose,
   });
};

export const formatDate = (date, format) => {
   if (date) return dayjs(date).format(format || "YYYY-MM-DD");
   else return "";
};

export const formPasswordCriteriaMatchValidator = () => ({
   validator(_, value) {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%#?&]{8,30}$/.test(value)) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Password entered doesn't meet all the criteria!"));
   },
});

export const formConfirmPasswordMatchValidator = (getFieldValue) => ({
   validator(_, value) {
      if (!value || getFieldValue("password") === value) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("The two passwords that you entered do not match!"));
   },
});

export const formBusinessEmailMatchValidator = () => ({
   validator(_, value) {
      if (
         /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)(?!digiwabot.com)(?!digiekycpan.com)(?!digieapi.xyz)(?!proton.me)([\w-]+\.)+[\w-]{2,})?$/.test(
            value
         )
      ) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Please provide your business email ID"));
   },
});

export const findInCollection = (collection, { key, value }) => {
   if (!collection || !key) {
      return {};
   }
   return find(collection, { [key]: value });
};

export const copyToClipboard = (str) => {
   if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(str);
   }
};

export const getFlagLogoUrl = (code) => {
   return `https://flagcdn.com/${(code || "").toLowerCase()}.svg`;
};

export const transformOptionsList = (list, labelKey, valueKey) => {
   if (!Array.isArray(list)) {
      throw new Error("The first argument must be an array.");
   }

   return list.map((item) => ({
      label: item[labelKey],
      value: item[valueKey],
   }));
};

export const atleastOneFieldRequiredValidator = (getFieldValue, dependentFieldsName, currentFieldName) => ({
   validator(_, value) {
      const hasDependentFieldValue =
         dependentFieldsName.some((field) => Boolean(getFieldValue(field))) || Boolean(value);

      if (hasDependentFieldValue) return Promise.resolve();
      const message = `Please enter at least ${currentFieldName} to proceed.`;
      return Promise.reject(new Error(message));
   },
});

export const dedupeKeyValidator = () => {
   return {
      validator(_, value) {
         if (!value) {
            return Promise.resolve();
         }
         if (value.length > 50) {
            return Promise.reject(new Error("Dedupe Key must not exceed 50 characters."));
         }

         if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
            return Promise.reject(new Error("Dedupe Key contains invalid characters."));
         }

         return Promise.resolve();
      },
   };
};

export const formPhoneNumberValidator = () => ({
   validator(_, value) {
      if (/^[6-9]\d{9}$/.test(value)) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Invalid Phone Number"));
   },
});

export const formNameValidtor = () => ({
   validator(_, value) {
      if (/^[a-zA-Z0-9' ,.-]*$/.test(value)) {
         return Promise.resolve();
      }
      return Promise.reject(new Error("Invalid Name"));
   },
});

export const formEmailValidtor = () => ({
   validator(_, value) {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(value)) {
         return Promise.resolve();
      }
      return Promise.reject(new Error("Invalid Email"));
   },
});

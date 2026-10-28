import { formUIElements } from "utils/constants";
import {
   CustomInput,
   CustomInputPassword,
   CustomCheckBox,
   CustomButton,
   CustomDatePicker,
   CustomUpload,
   CustomRadio,
   CustomDropdown,
} from "shared";

export const renderFormItems = (formItem, form) => {
   const element = typeof formItem.uiElement === "function" ? formItem.uiElement(form) : formItem.uiElement;
   const elementAttributes = element.attributes;
   if (element.nestedFormItems) {
      return element.nestedFormItems;
   }

   switch (element.type) {
      case formUIElements.INPUT.DEFAULT:
         return <CustomInput {...elementAttributes} />;

      case formUIElements.INPUT.PASSWORD:
         return <CustomInputPassword {...elementAttributes} />;

      case formUIElements.CHECKBOX:
         return <CustomCheckBox {...elementAttributes} />;

      case formUIElements.BUTTON:
         return <CustomButton {...elementAttributes} />;

      case formUIElements.UPLOAD:
         return <CustomUpload {...elementAttributes} />;

      case formUIElements.DATE_PICKER:
         return <CustomDatePicker {...elementAttributes} />;

      case formUIElements.RADIO:
         return <CustomRadio {...elementAttributes} />;

      case formUIElements.DROPDOWN:
         return <CustomDropdown {...elementAttributes} />;

      default:
         break;
   }
};

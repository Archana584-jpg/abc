import { formUIElements } from "utils/constants";
import {
   CustomInput,
   CustomInputPassword,
   CustomCheckbox,
   CustomButton,
   CustomDatePicker,
   CustomRadio,
   CustomDropdown,
   PhoneCountryCodeSelctor,
} from "..";
import { countries } from "assets/resources";

export const renderFormItems = (formItem, form) => {
   switch (formItem.type) {
      case formUIElements.INPUT.DEFAULT:
         return <CustomInput {...formItem.uiAttributes} />;

      case formUIElements.INPUT.PASSWORD:
         return <CustomInputPassword {...formItem.uiAttributes} />;

      case formUIElements.CHECKBOX:
         return <CustomCheckbox {...formItem.uiAttributes} />;

      case formUIElements.DATE_PICKER:
         return <CustomDatePicker {...formItem.uiAttributes} />;

      case formUIElements.RADIO:
         return <CustomRadio {...formItem.uiAttributes} />;

      case formUIElements.DROPDOWN:
         return <CustomDropdown {...formItem.uiAttributes} />;

      case formUIElements.BUTTON:
         return <CustomButton {...formItem.uiAttributes} />;

      case formUIElements.INPUT.PHONE_NUMBER:
         return (
            <CustomInput
               addonBefore={
                  <PhoneCountryCodeSelctor uiElementProps={formItem?.prefixAttributes}></PhoneCountryCodeSelctor>
               }
               {...formItem.uiAttributes}
               prefix={
                  countries?.[form?.getFieldValue(formItem?.prefixAttributes?.name)]?.countryCode ||
                  countries["IN"].countryCode
               }
            />
         );

      default:
         break;
   }
};

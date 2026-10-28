import { useMemo } from "react";
import { componentTypes, formFieldTypes } from "shared/constants";
import {
   CustomFormItem,
   SelectableList,
   CustomPhoneNumber,
   CustomCheckbox,
   CustomTextarea,
   CustomSelect,
   CustomDatePicker,
   CustomInput,
   CustomRadio,
   CustomUpload,
   CustomOTPInput,
} from "shared/components";
import useConfigToProps from "./useConfigToProps";
import { getDisabledDateRange } from "screens/node/helper";
import useActionHandler from "./useActionHandler";
import { evaluateConditions, getNestedProperty, replacePlaceholders } from "utils/helper";
import { useFormContext } from "screens/node_new/formManagerContext";
import { isEmpty, isObject } from "lodash";

const useRenderField = ({ field, data, formId }) => {
   const formItemProps = useConfigToProps({ config: { ...field, type: componentTypes.FORM_ITEM }, data });
   const actionHandler = useActionHandler({ action: field?.action, data });
   const { getFormRef } = useFormContext();

   const renderedField = useMemo(() => {
      let children = null;
      const {
         props: {
            isEditable = true,
            validation,
            minDate,
            maxDate,
            format,
            mode,
            rows,
            className,
            variant,
            fileKey,
            size,
            style,
         } = {},
         content: { placeHolder, options } = {},
      } = field || {};
      switch (field.type) {
         case formFieldTypes.RADIO_GROUP: {
            const { name, size, direction } = field?.props;
            children = <CustomRadio name={name} size={size} options={options} direction={direction} />;
            break;
         }
         case formFieldTypes.INPUT: {
            children = (
               <CustomInput
                  placeholder={placeHolder?.text}
                  className={placeHolder?.className}
                  disabled={!isEditable}
                  maxLength={validation?.maxLength}
                  onChange={() => {}}
                  variant={variant}
               />
            );
            break;
         }
         case formFieldTypes.DATE: {
            children = (
               <CustomDatePicker
                  format={format}
                  placeholder={placeHolder?.text}
                  disabled={!isEditable}
                  className={placeHolder?.className}
                  disabledDate={getDisabledDateRange(minDate, maxDate)}
                  style={field?.props?.style} //as of now not able to give 100% width via tailwind hence using style
               />
            );
            break;
         }

         case formFieldTypes.SELECT: {
            const formRef = getFormRef(formId);
            const formData = formRef?.getFieldsValue();
            const visibleOptions = options.filter((option) =>
               !isEmpty(option.visibilityCondition)
                  ? evaluateConditions(
                       option.visibilityCondition.conditions,
                       formData,
                       option?.visibilityCondition?.logicalOperator
                    )
                  : true
            );
            children = (
               <CustomSelect
                  placeholder={placeHolder?.text}
                  options={visibleOptions}
                  className={placeHolder?.className}
                  mode={mode}
               />
            );
            break;
         }
         case formFieldTypes.TEXTAREA: {
            children = <CustomTextarea rows={rows} placeholder={placeHolder?.text} />;
            break;
         }

         case formFieldTypes.CHECKBOX: {
            children = <CustomCheckbox label={placeHolder?.text} className={className} />;
            break;
         }

         case formFieldTypes.PHONE_NUMBER: {
            children = (
               <CustomPhoneNumber
                  inputClassName={field?.props?.inputClassName || "!w-5/6"}
                  selectClassName={field?.props?.selectClassName || "!w-1/6"}
                  placeholder={field?.props?.placeholder || "00000 00000"}
               />
            );
            break;
         }

         case formFieldTypes.SELECTABLE_LIST: {
            const dataSrc = getNestedProperty(data, field?.dataSource) || [];
            const { label, value, subTitle, isActive, disabled } = field?.optionMapper || {};
            const options = field.optionMapper
               ? dataSrc.map((item) => {
                    return {
                       value: item[value],
                       label: isObject(label) ? replacePlaceholders(label.string, item) : item[label],
                       status: item[isActive],
                       subTitle: isObject(subTitle) ? replacePlaceholders(subTitle.string, item) : item[subTitle],
                       disabled: !isEmpty(disabled) ? evaluateConditions(disabled.conditions, item) : false,
                    };
                 })
               : options;
            children = (
               <SelectableList
                  name={field.props.name}
                  options={options}
                  itemClassName={field.props.itemClassName}
                  className={field.wrapper.className}
                  {...actionHandler}
               />
            );
            break;
         }

         case formFieldTypes.UPLOAD: {
            children = (
               <CustomUpload
                  name={field?.props.name}
                  title={field?.content?.title}
                  subtitle={field?.content?.subtitle}
                  disabled={!field?.props?.isEditable}
                  validation={field?.props?.validation}
                  multiple={field?.props?.multiple}
                  mode={field?.props?.mode}
                  type={field?.type}
                  fileKey={fileKey}
                  fileIndex={field?.props?.fileIndex}
                  formId={formId}
                  {...actionHandler}
               />
            );
            break;
         }

         case formFieldTypes.OTP_INPUT: {
            children = (
               <CustomOTPInput
                  length={field?.props?.length}
                  placeholder={placeHolder}
                  disabled={!isEditable}
                  variant={variant}
                  className={className}
                  style={style}
               />
            );
            break;
         }

         default: {
            break;
         }
      }

      return children ? <CustomFormItem {...formItemProps}>{children}</CustomFormItem> : null;
   }, [data, field, formItemProps, formId]);

   return renderedField;
};

export default useRenderField;

import { Form, Col, Row } from "antd";
import { debounce, get, isEmpty, keys } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFormContext } from "screens/node_new/formManagerContext";
import CustomFormList from "./FormList";
import { componentTypes } from "shared/constants";
import { CustomFormField } from ".";
import { evaluateConditions } from "utils/helper";

const CustomForm = ({
   title,
   formId,
   requiredMark = false,
   className,
   layout = "horizontal",
   fields = [],
   data,
   variant,
}) => {
   const { registerForm, unregisterForm } = useFormContext();
   const [form] = Form.useForm();
   const [visibleFields, setVisibleFields] = useState([]);
   const debouncedHandleFieldsVisibility = useRef(null);
   const handleFieldsVisibility = useCallback(() => {
      const filteredFields = fields.filter((field) => {
         return isEmpty(field.visibilityCondition)
            ? true
            : evaluateConditions(
                 field.visibilityCondition.conditions,
                 { ...data, ...form.getFieldsValue(true) },
                 field?.visibilityCondition?.logicalOperator
              );
      });
      setVisibleFields(filteredFields);
   }, [JSON.stringify(data), JSON.stringify(fields), form]);

   useEffect(() => {
      debouncedHandleFieldsVisibility.current = debounce(handleFieldsVisibility, 300);

      return () => {
         debouncedHandleFieldsVisibility.current.cancel(); // Cleanup debounce on unmount or dependency change
      };
   }, [handleFieldsVisibility]);

   useEffect(() => {
      debouncedHandleFieldsVisibility.current(); // Trigger the debounced function
   }, [JSON.stringify(data), JSON.stringify(fields)]);

   useEffect(() => {
      if (!isEmpty(fields) && !isEmpty(data)) {
         const filteredFields = [];
         fields
            .filter((item) => item.type !== componentTypes.BUTTON)
            .forEach((field) => {
               const defaultValue = get(data, field.props.value);

               // Handle impacted fields
               if (!isEmpty(field.impactedFields)) {
                  Object.keys(field.impactedFields).forEach((key) => {
                     const impactField = field.impactedFields[key];
                     if (typeof impactField === "object" && impactField.dependOn) {
                        if (impactField.dataSource && impactField.lookupKey) {
                           const dataSourceValue = get(data, impactField.dataSource);
                           if (Array.isArray(dataSourceValue)) {
                              const matchedItem =
                                 dataSourceValue.find(
                                    (item) => item[impactField.lookupKey] === get(data, field.props.value)
                                 ) || {};
                              const impactedValue =
                                 typeof matchedItem === "object" && matchedItem !== null
                                    ? matchedItem[impactField.key] || get(data, field.props.value)
                                    : get(data, field.props.value);
                              const index = filteredFields.findIndex((f) => f.name === key);
                              if (index !== -1) {
                                 filteredFields[index].value = impactedValue ?? "";
                              } else {
                                 filteredFields.push({
                                    name: key,
                                    value: impactedValue ?? "",
                                 });
                              }
                           }
                        }
                     }
                  });
               }
               filteredFields.push({
                  name: field.props.name,
                  value: field.repeatableField
                     ? Array.isArray(defaultValue) && defaultValue.length
                        ? defaultValue
                        : [""]
                     : typeof defaultValue === "boolean"
                     ? defaultValue.toString()
                     : defaultValue ?? "",
               });
            });

         const valuesToSet = {};
         filteredFields.forEach((field) => {
            valuesToSet[field.name] = field.value;
         });

         form.setFieldsValue(valuesToSet);
      }
   }, [JSON.stringify(data), JSON.stringify(fields), form]);

   useEffect(() => {
      registerForm(formId, form);
      return () => unregisterForm(formId, null);
   }, [formId]);

   const handleFormValuesChange = useCallback(
      (changedValues) => {
         const changedFields = fields.filter(
            (field) => keys(changedValues).includes(field?.props?.name) && !isEmpty(field?.impactedFields)
         );

         changedFields.forEach((field) => {
            const updatedFields = {};
            Object.keys(field.impactedFields).forEach((key) => {
               const impactField = field.impactedFields[key];
               if (typeof impactField === "object" && impactField.dependOn) {
                  if (impactField.dataSource && impactField.lookupKey) {
                     const dataSourceValue = get(data, impactField.dataSource);
                     if (Array.isArray(dataSourceValue)) {
                        const matchedItem =
                           dataSourceValue.find(
                              (item) => item[impactField.lookupKey] === form.getFieldValue(impactField.dependOn)
                           ) || {};
                        updatedFields[key] =
                           typeof matchedItem === "object" && matchedItem !== null
                              ? matchedItem[impactField.key] || form.getFieldValue(impactField.dependOn)
                              : form.getFieldValue(impactField.dependOn);
                     } else {
                        updatedFields[key] = form.getFieldValue(impactField.dependOn);
                     }
                  } else {
                     updatedFields[key] = form.getFieldValue(impactField.dependOn);
                  }
               } else {
                  updatedFields[key] = impactField;
               }
            });
            form.setFieldsValue(updatedFields);
         });
         debouncedHandleFieldsVisibility.current();
      },
      [fields, data, form, debouncedHandleFieldsVisibility]
   );

   return (
      <Form
         requiredMark={requiredMark}
         form={form}
         variant={variant || "outlined"}
         className={className}
         layout={layout}
         onValuesChange={handleFormValuesChange}
      >
         {title ? title : null}
         <Row gutter={[16, 8]}>
            {visibleFields.map((field, index) => {
               return (
                  <Col
                     xs={field?.wrapper?.style?.col?.xs}
                     md={field?.wrapper?.style?.col?.md}
                     lg={field?.wrapper?.style?.col?.lg}
                     className={field?.wrapper?.className}
                     key={index}
                  >
                     {field.repeatableField ? (
                        <CustomFormList field={field} data={data}></CustomFormList>
                     ) : (
                        <CustomFormField field={field} data={data} formId={formId}></CustomFormField>
                     )}
                  </Col>
               );
            })}
         </Row>
      </Form>
   );
};

export default CustomForm;

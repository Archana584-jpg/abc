import { Col, Form, Button, Row, Typography } from "antd";
import React from "react";
import { renderField } from "../helper";
import { find, isEmpty, keys } from "lodash";
import { evaluateConditions, replacePlaceholders } from "utils/helper";
import { CustomFormItem } from "shared/components";

const FormComponent = ({
   data,
   state,
   index,
   formRef,
   fileList,
   dataSource,
   formFields,
   handleAction,
   handleChange,
   handleSubmit,
   handleFileList,
   handleStateChange,
   downloadedDocuments,
}) => {
   const [form] = Form.useForm();
   form.setFieldsValue({ ...formFields });
   const { fields = [], action = {} } = data || {};
   return (
      <Col xs={data?.style?.col?.xs} md={data?.style?.col?.md} lg={data?.style?.col?.lg}>
         <Form
            layout={data?.properties?.layout}
            requiredMark={false}
            onFinish={() => {
               handleSubmit({ action, fields });
            }}
            className={`w-full ${data?.properties?.className}`}
            wrapperCol={data?.properties?.wrapperCol}
            labelCol={data?.properties?.labelCol}
            labelAlign={data?.properties?.labelAlign}
            form={form}
            ref={formRef}
            onValuesChange={(changedValues) => {
               const changedFields = fields.filter(
                  (field) => keys(changedValues).includes(field.name) && !isEmpty(field.impactingFields)
               );

               changedFields.forEach((field) => {
                  field.impactingFields.forEach((key) => handleChange(key, null));
               });
            }}
         >
            {data.description ? (
               <>
                  <Typography className={data.description.title?.className}>
                     {replacePlaceholders(data.description.title?.text, { index })}
                  </Typography>
                  <Typography className={data.description.subtitle?.className}>
                     {data.description.subtitle?.text}
                  </Typography>
               </>
            ) : null}
            <Row>
               {fields
                  ?.filter((field) => {
                     return !isEmpty(field.visibilityCondition)
                        ? evaluateConditions(
                             field.visibilityCondition.conditions,
                             formFields,
                             field.visibilityCondition.logicalOperator,
                             fileList
                          )
                        : true;
                  })
                  ?.map((field, index) => {
                     return (
                        <Col
                           xs={field?.style?.col?.xs}
                           md={field?.style?.col?.md}
                           lg={field?.style?.col?.lg}
                           className={field?.className}
                           key={index}
                        >
                           {renderField({
                              field,
                              state,
                              fileList,
                              dataSource,
                              formFields,
                              handleAction,
                              handleChange,
                              handleFileList,
                              handleStateChange,
                              downloadedDocuments,
                           })}
                        </Col>
                     );
                  })}
            </Row>
            {!isEmpty(action) ? (
               <Col span={24} className="flex justify-center mt-12">
                  <CustomFormItem>
                     <Button
                        type="primary"
                        htmlType="submit"
                        className={action?.label?.className}
                        size={action?.style?.size}
                     >
                        {action?.label?.text}
                     </Button>
                  </CustomFormItem>
               </Col>
            ) : null}
         </Form>
      </Col>
   );
};

export default FormComponent;

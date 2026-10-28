import React, { useCallback } from "react";
import { Form, Row, Col } from "antd";
import { debounce, toArray } from "lodash";
import { formValidateMessages } from "./constants";
import { renderFormItems } from "./helper";
import { Typography } from "antd";
import { formUIElements } from "utils/constants";

const CustomFormComponent = ({ formFieldItems, handleFormSubmit, initialValues, errors, handleChange, formRef }) => {
   const [form] = Form.useForm();
   const formSubmit = useCallback(
      debounce(handleFormSubmit ? (data) => handleFormSubmit(data, form) : () => {}, 1000, {
         leading: true,
         trailing: false,
      }),
      []
   );
   return (
      <Form
         form={form}
         name="basic-form"
         onFinish={formSubmit}
         layout="vertical"
         style={{ width: "100%", marginTop: "1rem" }}
         validateMessages={formValidateMessages}
         initialValues={initialValues || {}}
         validateTrigger={"onSubmit"}
         onValuesChange={(changedValues) =>
            handleChange(Object.keys(changedValues)[0], Object.values(changedValues)[0])
         }
         ref={formRef}
      >
         <Row gutter={[16, 8]}>
            {/* Render Form Items */}
            {(formFieldItems || []).map((formItem, index) => (
               <React.Fragment key={index}>
                  {/* Render Form Item */}
                  <Col
                     className={`flex flex-col gap-2 ${formItem?.wrapperAttributes?.className}`}
                     xs={((formItem || {}).wrapperAttributes?.style || {}).col || 24}
                     {...formItem.wrapperAttributes}
                  >
                     {/* Render Label */}
                     {formItem?.label && formItem.type !== formUIElements.BUTTON && (
                        <Typography.Text className={`text-sm  ${formItem?.label?.className}`}>
                           {formItem?.label?.showRequired && (
                              <Typography.Text className={"text-sm text-error mr-1"}>*</Typography.Text>
                           )}
                           {formItem?.label?.text}
                        </Typography.Text>
                     )}
                     <Form.Item
                        {...(errors && {
                           help: errors[formItem.name],
                           validateStatus: errors[formItem.name] ? "error" : undefined,
                        })}
                        {...formItem.formItemAttributes}
                        rules={[
                           ...toArray(formItem?.formItemAttributes?.rules),
                           formItem.type === formUIElements.INPUT.DEFAULT && {
                              message: `${formItem?.label?.text} cannot be a blank character`,
                              whitespace: true,
                           },
                        ]}
                     >
                        {renderFormItems(formItem, form)}
                     </Form.Item>
                  </Col>
               </React.Fragment>
            ))}
         </Row>
      </Form>
   );
};

export default CustomFormComponent;

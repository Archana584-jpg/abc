import { useCallback } from "react";
import { Form, Row, Col } from "antd";
import { debounce } from "lodash";
import { CustomButton, CustomPasswordStrength } from "shared";
import { formAdditionalUiFieldPosition, formValidateMessages } from "shared/components/Form/constants";
import { renderFormItems } from "shared/components/Form/helper";
import "./style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { reCaptchaV2Key } from "utils/config";

const CustomFormComponent = ({
   formFieldItems,
   handleFormSubmit,
   initialValues,
   errors,
   handleChange,
   passwordStrengthVisisble,
   password,
   showV2Captcha,
   handleCaptchaChange,
   formRef,
}) => {
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
         style={{ width: "100%" }}
         validateMessages={formValidateMessages}
         onValuesChange={(item) =>
            Object.keys(item)[0] === "password" && handleChange("password", Object.values(item)[0])
         }
         initialValues={initialValues || {}}
         validateTrigger={"onSubmit"}
         ref={formRef}
      >
         <Row gutter={[8, 8]}>
            {((formFieldItems || {}).items || []).map((formItem, index) => {
               return (
                  <Col
                     xs={(((formItem || {}).formItemAttributes || {}).style || {}).col || 24}
                     className={(formItem || {}).parentClassName || ""}
                     key={index}
                  >
                     {formItem.additionalField &&
                        formItem.additionalField.uiPosition === formAdditionalUiFieldPosition.Pre &&
                        (formItem.additionalField.render
                           ? formItem.additionalField.render({
                                form: form,
                                initialValues: initialValues,
                                handleChange: handleChange,
                             })
                           : formItem.additionalField.uiElement)}

                     {formItem.uiElement.passwordStrength ? (
                        <div
                           style={{ position: "relative" }}
                           onFocus={() => !passwordStrengthVisisble && handleChange("passwordStrengthVisisble", true)}
                           onBlur={() => passwordStrengthVisisble && handleChange("passwordStrengthVisisble", false)}
                        >
                           {passwordStrengthVisisble && password ? (
                              <div className="passwordStrengthBox">
                                 <CustomPasswordStrength password={password} />
                              </div>
                           ) : null}
                           <Form.Item
                              key={index}
                              {...(errors && {
                                 help: errors[((formItem || {}).formItemAttributes || {}).name],
                                 validateStatus: errors[((formItem || {}).formItemAttributes || {}).name] && "error",
                              })}
                              {...formItem.formItemAttributes}
                           >
                              {renderFormItems(formItem)}
                           </Form.Item>
                        </div>
                     ) : (
                        <Form.Item
                           key={index}
                           {...(errors && {
                              help: errors[((formItem || {}).formItemAttributes || {}).name],
                              validateStatus: errors[((formItem || {}).formItemAttributes || {}).name] && "error",
                           })}
                           {...formItem.formItemAttributes}
                        >
                           {formItem.formItemAttributes.shouldUpdate
                              ? () => renderFormItems(formItem, form)
                              : renderFormItems(formItem, form)}
                        </Form.Item>
                     )}
                     {formItem.additionalField &&
                        formItem.additionalField.uiPosition === formAdditionalUiFieldPosition.Post &&
                        (formItem.additionalField.render
                           ? formItem.additionalField.render({
                                form: form,
                                initialValues: initialValues,
                                handleChange: handleChange,
                             })
                           : formItem.additionalField.uiElement)}
                  </Col>
               );
            })}
            {showV2Captcha ? (
               <Col>
                  <ReCAPTCHA sitekey={reCaptchaV2Key} onChange={handleCaptchaChange} />
               </Col>
            ) : null}
            <Col xs={(((formFieldItems || {}).submitButton || {}).style || {}).col || 24}>
               <Form.Item {...formFieldItems.submitButtonFormItemAttributes}>
                  <CustomButton type="primary" htmlType="submit" {...formFieldItems.submitButton} />
               </Form.Item>
            </Col>
         </Row>
      </Form>
   );
};

export default CustomFormComponent;

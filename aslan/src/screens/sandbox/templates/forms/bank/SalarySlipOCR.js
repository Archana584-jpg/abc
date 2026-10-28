import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { Form } from "antd";
import { CustomInput, CustomUpload } from "../../../../../shared";

const { BANK_VERIFICATION } = productsMapping;

const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];

export const salarySlipOCROfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      selected_form_type: "upload",
   },
   STEPS: {
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.SALARY_SLIP_OCR]
         .INITIAL_FORM]: {
         items: [
            {
               formItemAttributes: {
                  name: "selected_form_type",
                  label: "Select any approach",
               },
               uiElement: {
                  type: formUIElements.RADIO,
                  attributes: {
                     options: [
                        {
                           value: "upload",
                           label: "Upload",
                        },
                        {
                           value: "url",
                           label: "URL",
                        },
                        {
                           value: "base64",
                           label: "Base64",
                        },
                     ],
                     size: "large",
                     defaultValue: "upload",
                  },
               },
            },
            {
               formItemAttributes: {
                  noStyle: true,
                  shouldUpdate: true,
               },
               uiElement: (form) => {
                  const selectedOption = form.getFieldValue("selected_form_type");
                  switch (selectedOption) {
                     case "url": {
                        return {
                           nestedFormItems: (
                              <Form.Item
                                 name="file_url"
                                 label="File URL"
                                 className="tw-w-3/5"
                                 rules={[{ required: true, message: "Please enter file URL" }]}
                              >
                                 <CustomInput size="large" placeholder="Enter file URL here" />
                              </Form.Item>
                           ),
                        };
                     }
                     case "base64": {
                        return {
                           nestedFormItems: (
                              <Form.Item
                                 name="base64_data"
                                 label="Base64 code"
                                 className="tw-w-3/5"
                                 rules={[{ required: true, message: "Please enter base64 code" }]}
                              >
                                 <CustomInput size="large" placeholder="Enter base64 code here" />
                              </Form.Item>
                           ),
                        };
                     }
                     default: {
                        return {
                           nestedFormItems: (
                              <Form.Item
                                 name="base64_data"
                                 label="Upload Salary Slip"
                                 rules={[{ required: true, message: "Please upload Salary Slip" }]}
                              >
                                 <CustomUpload
                                    beforeUpload={() => false}
                                    UploadButtonLabel="Click to upload Salary Slip"
                                    uploadButtonSize="large"
                                    maxCount={1}
                                 />
                              </Form.Item>
                           ),
                        };
                     }
                  }
               },
            },
            sandboxConsentSchema,
         ],
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Submit",
            key: "submit",
            size: "large",
            className: "tw-w-full",
         },
      },
      [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.SALARY_SLIP_OCR]
         .FINAL_FORM]: {
         submitButtonFormItemAttributes: {
            wrapperCol: { span: 8 },
            className: "tw-w-full",
         },
         submitButton: {
            label: "Reset",
            key: "reset",
            size: "large",
            className: "tw-w-full",
         },
      },
   },
};

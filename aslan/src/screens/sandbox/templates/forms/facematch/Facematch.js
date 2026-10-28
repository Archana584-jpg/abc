import { formUIElements, productsOfferingsMapping, productsMapping } from "utils/constants";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { sandboxConsentSchema } from "screens/sandbox/templates/forms/shared";
import { Form } from "antd";
import { CustomInput, CustomUpload } from "../../../../../shared";

const { FACE_MATCH_VERIFICATION } = productsMapping;

const faceMatchVerificationService = productsOfferingsMapping[FACE_MATCH_VERIFICATION];

export const facematchOfferingSchemaWRTSteps = {
   INITIAL_VALUES: {
      selected_form_type: "upload",
   },
   STEPS: {
      [productOfferingFormSteps[faceMatchVerificationService.key][
         faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION
      ].INITIAL_FORM]: {
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
                     case "upload": {
                        return {
                           nestedFormItems: (
                              <>
                                 <Form.Item
                                    name="file_1_base64"
                                    label="Upload first image"
                                    rules={[{ required: true, message: "Please upload an image" }]}
                                 >
                                    <CustomUpload
                                       beforeUpload={() => false}
                                       UploadButtonLabel="Click to upload image"
                                       uploadButtonSize="large"
                                       maxCount={1}
                                    />
                                 </Form.Item>
                                 <Form.Item
                                    name="file_2_base64"
                                    label="Upload second image"
                                    rules={[{ required: true, message: "Please upload an image" }]}
                                 >
                                    <CustomUpload
                                       beforeUpload={() => false}
                                       UploadButtonLabel="Click to upload image"
                                       uploadButtonSize="large"
                                       maxCount={1}
                                    />
                                 </Form.Item>
                              </>
                           ),
                        };
                     }
                     case "base64": {
                        return {
                           nestedFormItems: (
                              <>
                                 <Form.Item
                                    name="file_1_base64"
                                    label="First base64 code"
                                    className="tw-w-3/5"
                                    rules={[{ required: true, message: "Please enter base64 code" }]}
                                 >
                                    <CustomInput size="large" placeholder="Enter base64 code here" />
                                 </Form.Item>
                                 <Form.Item
                                    name="file_1_base64"
                                    label="Second base64 code"
                                    className="tw-w-3/5"
                                    rules={[{ required: true, message: "Please enter base64 code" }]}
                                 >
                                    <CustomInput size="large" placeholder="Enter base64 code here" />
                                 </Form.Item>
                              </>
                           ),
                        };
                     }
                     default: {
                        return {
                           nestedFormItems: (
                              <>
                                 <Form.Item
                                    name="file_1_url"
                                    label="First file URL"
                                    className="tw-w-3/5"
                                    rules={[{ required: true, message: "Please enter file url" }]}
                                 >
                                    <CustomInput size="large" placeholder="Enter file URL here" />
                                 </Form.Item>
                                 <Form.Item
                                    name="file_2_url"
                                    label="Second file URL"
                                    className="tw-w-3/5"
                                    rules={[{ required: true, message: "Please enter file url" }]}
                                 >
                                    <CustomInput size="large" placeholder="Enter file URL here" />
                                 </Form.Item>
                              </>
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
      [productOfferingFormSteps[faceMatchVerificationService.key][
         faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION
      ].FINAL_FORM]: {
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

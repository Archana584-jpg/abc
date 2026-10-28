export const init_business_owner_id_proof_verification = {
   id: "init_business_owner_id_proof_verification",
   name: "Init Business Owner ID Proof Verification",
   description: {
      title: { text: "Verify Business Owner ID Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Provide a valid Identity proof of the Business Owner.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/signing_authority.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer mr-2", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_business_owner_id_proof_verification",
         name: "Init Business Owner ID Proof Verification",
         title: { text: "Upload ID Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Select the ID proof type and upload the document",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_owner_address_review_and_verification",
         name: "Business Owner ID Proof Review and Verification",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required, then proceed",
            className: "text-xs font-normal text-subtitle",
         },
      },
   ],
   node: {
      content: {
         form: {
            properties: {
               layout: "vertical",
               className: "m-auto",
            },
            style: { col: { xs: 24, md: 24 } },
            fields: [
               {
                  name: "business_owner_id_verification_document_type",
                  preserve: false,
                  placeHolder: { text: "Select any one document", className: "" },
                  type: "SELECT",
                  options: [
                     { label: "Aadhaar", value: "AADHAAR" },
                     { label: "Driving License", value: "DL" },
                     { label: "Passport", value: "PASSPORT" },
                     { label: "Voter ID", value: "VOTER" },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 12 },
                  },
                  className: "m-auto",
               },
               {
                  name: "aadhaar_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "AADHAAR",
                        },
                     ],
                  },
                  inputType: "FILE",
                  type: "DRAG_AND_DROP",
                  isEditable: true,
                  multiple: {
                     file_1: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        validation: {
                           required: {
                              isRequired: true,
                              message: "This field is required",
                           },
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Front Side of Aadhaar Card", className: "" },
                        },
                     },
                     file_2: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        visibilityCondition: {
                           conditions: [
                              {
                                 dependOn: "aadhaar_document_file",
                                 operator: "IS_NOT_EMPTY",
                                 type: "FILE",
                              },
                           ],
                        },
                        validation: {
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Back Side of Aadhaar Card", className: "" },
                        },
                     },
                  },
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
               },
               {
                  name: "dl_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "DL",
                        },
                     ],
                  },
                  inputType: "FILE",
                  type: "DRAG_AND_DROP",
                  isEditable: true,
                  multiple: {
                     file_1: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        validation: {
                           required: {
                              isRequired: true,
                              message: "This field is required",
                           },
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Front Side of Driving License", className: "" },
                        },
                     },
                     file_2: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        visibilityCondition: {
                           conditions: [
                              {
                                 dependOn: "dl_document_file",
                                 operator: "IS_NOT_EMPTY",
                                 type: "FILE",
                              },
                           ],
                        },
                        validation: {
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Back Side of Driving License", className: "" },
                        },
                     },
                  },
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
               },
               {
                  name: "voter_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "VOTER",
                        },
                     ],
                  },
                  inputType: "FILE",
                  type: "DRAG_AND_DROP",
                  isEditable: true,
                  multiple: {
                     file_1: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        validation: {
                           required: {
                              isRequired: true,
                              message: "This field is required",
                           },
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Front Side of Voter ID", className: "" },
                        },
                     },
                     file_2: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        visibilityCondition: {
                           conditions: [
                              {
                                 dependOn: "voter_document_file",
                                 operator: "IS_NOT_EMPTY",
                                 type: "FILE",
                              },
                           ],
                        },
                        validation: {
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Back Side of Voter ID", className: "" },
                        },
                     },
                  },
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
               },
               {
                  name: "passport_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "PASSPORT",
                        },
                     ],
                  },
                  inputType: "FILE",
                  type: "DRAG_AND_DROP",
                  isEditable: true,
                  multiple: {
                     file_1: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        validation: {
                           required: {
                              isRequired: true,
                              message: "This field is required",
                           },
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Front Side of Passport", className: "" },
                        },
                     },
                     file_2: {
                        description: {
                           title: { text: "Drag file to this area to upload", className: "" },
                           subtitle: {
                              text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                              className: "",
                           },
                           image: { key: "InboxOutlined", className: "" },
                        },
                        multiple: false,
                        visibilityCondition: {
                           conditions: [
                              {
                                 dependOn: "passport_document_file",
                                 operator: "IS_NOT_EMPTY",
                                 type: "FILE",
                              },
                           ],
                        },
                        validation: {
                           maxAllowedSize: {
                              size: 2,
                              message: "Please check the file size",
                           },
                           allowedTypes: {
                              types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                              message: "Please check the file type",
                           },
                        },
                        action: {
                           label: { text: "Upload Back Side of Passport", className: "" },
                        },
                     },
                  },
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
               },
               {
                  type: "TEXT",
                  style: { col: { xs: 24, md: 12 } },
                  className: "m-auto mt-6",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "AADHAAR",
                        },
                        {
                           dependOn: "aadhaar_document_file",
                           operator: "IS_NOT_EMPTY",
                           type: "FILE",
                        },
                     ],
                  },
                  content: {
                     label: {
                        text: "If there is no information on the back of the document, or if you have already uploaded both sides in the front-side upload, you can skip the back-side upload and proceed.",
                        className: "text-sm font-normal text-subtitle",
                     },
                  },
               },
               {
                  type: "TEXT",
                  style: { col: { xs: 24, md: 12 } },
                  className: "m-auto mt-6",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "DL",
                        },
                        {
                           dependOn: "dl_document_file",
                           operator: "IS_NOT_EMPTY",
                           type: "FILE",
                        },
                     ],
                  },
                  content: {
                     label: {
                        text: "If there is no information on the back of the document, or if you have already uploaded both sides in the front-side upload, you can skip the back-side upload and proceed.",
                        className: "text-sm font-normal text-subtitle",
                     },
                  },
               },
               {
                  type: "TEXT",
                  style: { col: { xs: 24, md: 12 } },
                  className: "m-auto mt-6",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "VOTER",
                        },
                        {
                           dependOn: "voter_document_file",
                           operator: "IS_NOT_EMPTY",
                           type: "FILE",
                        },
                     ],
                  },
                  content: {
                     label: {
                        text: "If there is no information on the back of the document, or if you have already uploaded both sides in the front-side upload, you can skip the back-side upload and proceed.",
                        className: "text-sm font-normal text-subtitle",
                     },
                  },
               },
               {
                  type: "TEXT",
                  style: { col: { xs: 24, md: 12 } },
                  className: "m-auto mt-6",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "PASSPORT",
                        },
                        {
                           dependOn: "passport_document_file",
                           operator: "IS_NOT_EMPTY",
                           type: "FILE",
                        },
                     ],
                  },
                  content: {
                     label: {
                        text: "If there is no information on the back of the document, or if you have already uploaded both sides in the front-side upload, you can skip the back-side upload and proceed.",
                        className: "text-sm font-normal text-subtitle",
                     },
                  },
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: {
                     condition: {
                        dependOn: "business_owner_id_verification_document_type",
                        operator: "MAP",
                        options: {
                           AADHAAR: "AADHAAR_OCR_ACTION",
                           DL: "DL_OCR_ACTION",
                           VOTER: "VOTER_OCR_ACTION",
                           PASSPORT: "PASSPORT_OCR_ACTION",
                        },
                     },
                  },
                  requestType: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
               },
               style: { type: "primary", col: { xs: 24, md: 1 } },
            },
         },
      },
   },
};

export const business_owner_aadhaar_review_and_verify = {
   id: "business_owner_aadhaar_review_and_verify",
   name: "Business Owner Aadhaar Review And Verify",
   description: {
      title: { text: "Verify Business Owner ID Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Provide a valid Identity proof of the Business Owner.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/signing_authority.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer mr-2", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_business_owner_id_proof_verification",
         name: "Init Business Owner ID Proof Verification",
         title: { text: "Upload ID Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Select the ID proof type and upload the document",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_owner_aadhaar_review_and_verify",
         name: "Business Owner Aadhaar Review And Verify",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required, then proceed",
            className: "text-xs font-normal text-subtitle",
         },
      },
   ],
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 12 } },
            contents: [
               {
                  type: "IMAGE_VIEWER",
                  style: { col: { xs: 24, md: 24 } },
                  content: {
                     src: "",
                     multiple: true,
                     key: "aadhaar_document_file_urls",
                  },
                  action: {
                     api: {
                        type: "EXECUTE_ACTION",
                        executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                        requestType: "EXECUTE_ACTION",
                     },
                  },
               },
            ],
         },
         form: {
            style: { col: { xs: 24, md: 12 } },
            properties: {
               layout: "vertical",
            },
            fields: [
               {
                  name: "aadhaar_name",
                  label: { text: "Name", className: "" },
                  placeHolder: { text: "Enter Name", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "aadhaar_number",
                  label: { text: "Uid", className: "" },
                  placeHolder: { text: "Enter Aadhaar Number", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "AADHAAR_NUMBER",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "aadhaar_date_of_birth",
                  label: { text: "Date of Birth", className: "" },
                  placeHolder: { text: "Enter Date of Birth", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  className: "lg:pr-4 md:pr-2",
                  style: { col: { xs: 24, md: 12 } },
               },
               {
                  name: "aadhaar_gender",
                  label: { text: "Gender", className: "" },
                  placeHolder: { text: "Enter Gender", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  className: "md:pl-2 lg:pl-4",
                  style: { col: { xs: 24, md: 12 } },
               },
               {
                  name: "aadhaar_address",
                  label: { text: "Address", className: "" },
                  placeHolder: { text: "Enter Address", className: "text-subtitle" },
                  type: "TEXTAREA",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "ADDRESS",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  type: "OTP_MODAL",
                  key: "aadhaarOTPPopupVisibility",
                  style: { col: { xs: 24, md: 24 } },
                  className: "mx-4",
                  content: {
                     length: 6,
                     className: "mt-8 text-center",
                     maskClosable: true,
                     closable: true,
                     label: {
                        text: "Please enter the OTP sent by UIDAI to your Aadhaar linked mobile number.",
                        className: "text-base",
                     },
                     name: "aadhaar_verify_otp",
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                     resend: {
                        className: "mb-6 flex items-center justify-center",
                        label: {
                           text: "Didn't get the OTP?",
                           className: "text-base",
                        },
                        action: {
                           duration: 60,
                           label: { text: "Resend OTP", className: "font-semibold" },
                           style: { color: "primary", type: "link" },
                           api: {
                              type: "EXECUTE_ACTION",
                              requestType: "EXECUTE_ACTION",
                              executeActionType: "INIT_AADHAAR_VERIFICATION_ACTION",
                           },
                        },
                     },
                     action: {
                        label: { text: "Submit", className: "" },
                        style: { type: "primary" },
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "AADHAAR_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                        },
                        onChange: {
                           key: "aadhaarOTPPopupVisibility",
                           value: false,
                        },
                     },
                  },
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "INIT_AADHAAR_VERIFICATION_ACTION",
               },
               onAPISuccess: {
                  key: "aadhaarOTPPopupVisibility",
                  value: true,
               },
               onAPIError: {
                  key: "aadhaarOTPPopupVisibility",
                  value: false,
               },
            },
         },
      },
   },
};

export const business_owner_dl_review_and_verify = {
   id: "business_owner_dl_review_and_verify",
   name: "Business Owner DL Review And Verify",
   description: {
      title: { text: "Verify Business Owner ID Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Provide a valid Identity proof of the Business Owner.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/signing_authority.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer mr-2", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_business_owner_id_proof_verification",
         name: "Init Business Owner ID Proof Verification",
         title: { text: "Upload ID Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Select the ID proof type and upload the document",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_owner_dl_review_and_verify",
         name: "Business Owner DL Review And Verify",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required, then proceed",
            className: "text-xs font-normal text-subtitle",
         },
      },
   ],
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 12 } },
            contents: [
               {
                  type: "IMAGE_VIEWER",
                  style: { col: { xs: 24, md: 24 } },
                  content: {
                     src: "",
                     multiple: true,
                     key: "dl_document_file_urls",
                  },
                  action: {
                     api: {
                        type: "EXECUTE_ACTION",
                        executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                        requestType: "EXECUTE_ACTION",
                     },
                  },
               },
            ],
         },
         form: {
            style: { col: { xs: 24, md: 12 } },
            properties: {
               layout: "vertical",
            },
            fields: [
               {
                  name: "dl_name",
                  label: { text: "Name", className: "" },
                  placeHolder: { text: "Enter Name", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "dl_number",
                  label: { text: "DL Number", className: "" },
                  placeHolder: { text: "Enter Driving License Number", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "dl_issue_date",
                  label: { text: "Date of Issue", className: "" },
                  placeHolder: { text: "Enter Date of Issue", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "dl_expiry_date",
                  label: { text: "Expiry Date", className: "" },
                  placeHolder: { text: "Enter Expiry Date", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "dl_date_of_birth",
                  label: { text: "Date of Birth", className: "" },
                  placeHolder: { text: "Enter Date of Birth", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "dl_address",
                  label: { text: "Address", className: "" },
                  placeHolder: { text: "Enter Address", className: "text-subtitle" },
                  type: "TEXTAREA",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "DL_VERIFY_ACTION",
               },
            },
         },
      },
   },
};

export const business_owner_voter_review_and_verify = {
   id: "business_owner_voter_review_and_verify",
   name: "Business Owner Voter Review And Verify",
   description: {
      title: { text: "Verify Business Owner ID Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Provide a valid Identity proof of the Business Owner.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/signing_authority.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer mr-2", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_business_owner_id_proof_verification",
         name: "Init Business Owner ID Proof Verification",
         title: { text: "Upload ID Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Select the ID proof type and upload the document",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_owner_voter_review_and_verify",
         name: "Business Owner Voter Review And Verify",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required, then proceed",
            className: "text-xs font-normal text-subtitle",
         },
      },
   ],
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 12 } },
            contents: [
               {
                  type: "IMAGE_VIEWER",
                  style: { col: { xs: 24, md: 24 } },
                  content: {
                     src: "",
                     multiple: true,
                     key: "voter_document_file_urls",
                  },
                  action: {
                     api: {
                        type: "EXECUTE_ACTION",
                        executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                        requestType: "EXECUTE_ACTION",
                     },
                  },
               },
            ],
         },
         form: {
            style: { col: { xs: 24, md: 12 } },
            properties: {
               layout: "vertical",
            },
            fields: [
               {
                  name: "voter_name",
                  label: { text: "Name", className: "" },
                  placeHolder: { text: "Enter Name", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "voter_id_number",
                  label: { text: "Voter ID", className: "" },
                  placeHolder: { text: "Enter Voter ID", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "voter_date_of_birth",
                  label: { text: "Date of Birth", className: "" },
                  placeHolder: { text: "Enter Date of Birth", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  className: "lg:pr-4 md:pr-2",
                  style: { col: { xs: 24, md: 12 } },
               },
               {
                  name: "voter_issue_date",
                  label: { text: "Issue Date", className: "" },
                  placeHolder: { text: "Issue Date", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  className: "lg:pl-4 md:pl-2",
                  style: { col: { xs: 24, md: 12 } },
               },
               {
                  name: "voter_gender",
                  label: { text: "Gender", className: "" },
                  placeHolder: { text: "Enter Gender", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "voter_address",
                  label: { text: "Address", className: "" },
                  placeHolder: { text: "Enter Address", className: "text-subtitle" },
                  type: "TEXTAREA",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "VOTER_VERIFY_ACTION",
               },
            },
         },
      },
   },
};

export const business_owner_passport_review_and_verify = {
   id: "business_owner_passport_review_and_verify",
   name: "Business Owner Passport Review And Verif",
   description: {
      title: { text: "Verify Business Owner ID Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Provide a valid Identity proof of the Business Owner.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/signing_authority.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer mr-2", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_business_owner_id_proof_verification",
         name: "Init Business Owner ID Proof Verification",
         title: { text: "Upload ID Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Select the ID proof type and upload the document",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_owner_passport_review_and_verify",
         name: "Business Owner Passport Review And Verif",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required, then proceed",
            className: "text-xs font-normal text-subtitle",
         },
      },
   ],
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 12 } },
            contents: [
               {
                  type: "IMAGE_VIEWER",
                  style: { col: { xs: 24, md: 24 } },
                  content: {
                     src: "",
                     multiple: true,
                     key: "passport_document_file_urls",
                  },
                  action: {
                     api: {
                        type: "EXECUTE_ACTION",
                        executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                        requestType: "EXECUTE_ACTION",
                     },
                  },
               },
            ],
         },
         form: {
            style: { col: { xs: 24, md: 12 } },
            properties: {
               layout: "vertical",
            },
            fields: [
               {
                  name: "passport_first_name",
                  label: { text: "First Name", className: "" },
                  placeHolder: { text: "Enter First Name", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 12 } },
                  className: "lg:pr-4 md:pr-2",
               },
               {
                  name: "passport_last_name",
                  label: { text: "Last Name", className: "" },
                  placeHolder: { text: "Enter Last Name", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 12 } },
                  className: "lg:pl-4 md:pl-2",
               },
               {
                  name: "passport_number",
                  label: { text: "Passport Number", className: "" },
                  placeHolder: { text: "Enter Passport Number", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "passport_file_number",
                  label: { text: "File Number", className: "" },
                  placeHolder: { text: "Enter File Number", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "passport_issue_date",
                  label: { text: "Date of Issue", className: "" },
                  placeHolder: { text: "Enter Date of Issue", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "passport_expiry_date",
                  label: { text: "Expiry Date", className: "" },
                  placeHolder: { text: "Enter Expiry Date", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "passport_date_of_birth",
                  label: { text: "Date of Birth", className: "" },
                  placeHolder: { text: "Enter Date of Birth", className: "" },
                  type: "DATE",
                  mode: "date",
                  format: "YYYY-MM-DD",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
               {
                  name: "passport_address",
                  label: { text: "Address", className: "" },
                  placeHolder: { text: "Enter Address", className: "text-subtitle" },
                  type: "TEXTAREA",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "ADDRESS",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "PASSPORT_VERIFY_ACTION",
               },
            },
         },
      },
   },
};

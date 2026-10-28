export const verify_bank_account_upload = {
   id: "verify_bank_account_upload",
   name: "Verify Bank Account Upload",
   description: {
      title: { text: "Bank Account Verification", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please upload a valid bank document for verification.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/bank_account_verification.png",
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
         id: "verify_bank_account_upload",
         name: "Verify Bank Account Upload",
         title: { text: "Upload Document", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Please upload a canceled cheque or statement of your bank account",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "bank_account_review_and_proceed",
         name: "Bank Account Review and Proceed",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required then proceed",
            className: "text-xs font-normal text-subtitle",
         },
      },
   ],
   node: {
      content: {
         form: {
            properties: {
               className: "p-3",
               layout: "vertical",
            },
            fields: [
               {
                  name: "bank_verification_upload_type",
                  label: {
                     text: "Choose one of the options",
                     className: "text-base mb-2 text-title",
                  },
                  preserve: true,
                  size: 14,
                  direction: "vertical",
                  options: [
                     {
                        label: "Upload Cancelled Cheque",
                        value: "upload_cheque",
                        subTitle: "Please upload a cancelled cheque of your bank account",
                     },
                     {
                        label: "Upload Bank Statement ",
                        value: "upload_bank_statement",
                        subTitle: "Upload the first page of your bank account statement",
                     },
                  ],
                  type: "RADIO_GROUP",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { md: 18, xs: 24 },
                  },
               },
               {
                  name: "cheque_document_file",
                  className: "m-auto mt-4",
                  placeHolder: { text: "Drag file to this area to upload", className: "block" },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
                  type: "DRAG_AND_DROP",
                  isEditable: true,
                  multiple: false,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     maxAllowedSize: {
                        size: 5,
                        message: "Please check the file size",
                     },
                     allowedTypes: {
                        types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                        message: "Please check the file type",
                     },
                  },

                  style: {
                     col: { md: 11, xs: 24 },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "bank_verification_upload_type",
                           operator: "EQUALS",
                           value: "upload_cheque",
                        },
                     ],
                  },
                  action: {
                     label: { text: "Upload Cheque", className: "" },
                  },
               },

               {
                  name: "bank_statement_document_file",
                  className: "m-auto mt-4",
                  label: { text: "", className: "" },
                  placeHolder: { text: "Drag file to this area to upload", className: "block" },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
                  type: "DRAG_AND_DROP",
                  isEditable: true,
                  multiple: false,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     maxAllowedSize: {
                        size: 5,
                        message: "Please check the file size",
                     },
                     allowedTypes: {
                        types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                        message: "Please check the file type",
                     },
                  },

                  style: {
                     col: { md: 11, xs: 24 },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "bank_verification_upload_type",
                           operator: "EQUALS",
                           value: "upload_bank_statement",
                        },
                     ],
                  },
                  action: {
                     label: { text: "Upload Bank Statement", className: "" },
                  },
               },
            ],
            action: {
               label: { text: "Next", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: {
                     condition: {
                        dependOn: "bank_verification_upload_type",
                        operator: "EQUALS",
                        value: "upload_cheque",
                     },

                     onFailure: "BANK_STATEMENT_OCR_ACTION",
                     onSuccess: "CHEQUE_OCR_ACTION",
                  },
                  requestType: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
                  fileKey: {
                     condition: {
                        dependOn: "bank_verification_upload_type",
                        operator: "EQUALS",
                        value: "upload_cheque",
                     },
                     onFailure: "bank_statement_document_file",
                     onSuccess: "cheque_document_file",
                  },
               },
            },
            style: { col: { xs: 24, md: 24 } },
         },
      },
   },
};

export const bank_account_review_and_proceed = {
   id: "bank_account_review_and_proceed",
   name: "Bank Account Review and Proceed",
   description: {
      title: { text: "Bank Account Verification", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please upload a valid bank document for verification.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/bank_account_verification.png",
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
         id: "verify_bank_account_upload",
         name: "Verify Bank Account Upload",
         title: { text: "Upload Document", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Please upload a canceled cheque or statement of your bank account",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "bank_account_review_and_proceed",
         name: "Bank Account Review and Proceed",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required then proceed",
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
                     key: {
                        condition: {
                           dependOn: "bank_verification_upload_type",
                           operator: "EQUALS",
                           value: "upload_cheque",
                        },

                        onFailure: "bank_statement_document_file_urls",
                        onSuccess: "cheque_document_file_urls",
                     },
                  },
                  action: {
                     api: {
                        type: "EXECUTE_ACTION",
                        executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                        requestType: "EXECUTE_ACTION",
                     },
                  },
               },
               {
                  type: "ALERT",
                  properties: {
                     type: "warning",
                  },
                  style: { col: { xs: 24, md: 24 } },
                  className: "ml-1 inline-block flex justify-center",
                  content: {
                     description: {
                        title: {
                           text: "An amount of Rs. 1.01 will be transferred to your account",
                           className: "",
                        },
                        image: { src: "", className: "", key: "ExclamationCircleFilled" },
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
                  name: "account_holder_name",
                  preserve: true,
                  label: { text: "Name", className: "" },
                  placeHolder: { text: "Enter Name", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "NAME",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },

               {
                  name: "account_number",
                  preserve: true,
                  label: { text: "Account Number", className: "" },
                  placeHolder: { text: "Enter Account Number", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "NUMERIC",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },

               {
                  name: "ifsc",
                  preserve: true,
                  label: { text: "IFSC", className: "" },
                  placeHolder: { text: "Enter IFSC Number", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "IFSC",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },

               {
                  name: "bank_name",
                  preserve: true,
                  label: { text: "Bank Name", className: "" },
                  placeHolder: { text: "Enter Bank Name", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "NAME",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },

               {
                  name: "branch_name",
                  label: { text: "Branch Name", className: "" },
                  placeHolder: { text: "Enter Branch Name", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "NAME",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },

               {
                  name: "branch_address",
                  label: { text: "Address", className: "" },
                  placeHolder: { text: "Enter Address", className: "text-subtitle" },
                  type: "TEXTAREA",
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "ADDRESS",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },

               {
                  name: "consent",
                  preserve: true,
                  placeHolder: {
                     text: "I hereby give my consent to credit the aforementioned account for the purpose of verification of my account details",
                     className: "text-xs",
                  },
                  type: "CHECKBOX",
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
               style: { size: "large", type: "primary" },
               className: "mt-5",
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "BANK_ACCOUNT_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const bank_account_review_and_proceed_proprietorship = {
   id: "bank_account_review_and_proceed_proprietorship",
   name: "Bank Account Review and Proceed",
   node: {
      content: {
         form: {
            style: {
               col: {
                  md: 12,
                  xs: 24,
               },
            },
            action: {
               api: {
                  type: "EXECUTE_ACTION",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "BANK_ACCOUNT_VERIFY_ACTION",
               },
               label: {
                  text: "Save and Submit",
                  className: "",
               },
               style: {
                  size: "large",
                  type: "primary",
               },
               className: "mt-5",
            },
            fields: [
               {
                  name: "account_holder_name",
                  type: "INPUT",
                  label: {
                     text: "Name",
                     className: "",
                  },
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  preserve: true,
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "NAME",
                     },
                     required: {
                        message: "This field is required",
                        isRequired: true,
                     },
                  },
                  placeHolder: {
                     text: "Enter Name",
                     className: "text-subtitle",
                  },
               },
               {
                  name: "account_number",
                  type: "INPUT",
                  label: {
                     text: "Account Number",
                     className: "",
                  },
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  preserve: true,
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "NUMERIC",
                     },
                     required: {
                        message: "This field is required",
                        isRequired: true,
                     },
                  },
                  placeHolder: {
                     text: "Enter Account Number",
                     className: "text-subtitle",
                  },
               },
               {
                  name: "ifsc",
                  type: "INPUT",
                  label: {
                     text: "IFSC",
                     className: "",
                  },
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  preserve: true,
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "IFSC",
                     },
                     required: {
                        message: "This field is required",
                        isRequired: true,
                     },
                  },
                  placeHolder: {
                     text: "Enter IFSC Number",
                     className: "text-subtitle",
                  },
               },
               {
                  name: "bank_name",
                  type: "INPUT",
                  label: {
                     text: "Bank Name",
                     className: "",
                  },
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  preserve: true,
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "NAME",
                     },
                     required: {
                        message: "This field is required",
                        isRequired: true,
                     },
                  },
                  placeHolder: {
                     text: "Enter Bank Name",
                     className: "text-subtitle",
                  },
               },
               {
                  name: "branch_name",
                  type: "INPUT",
                  label: {
                     text: "Branch Name",
                     className: "",
                  },
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "NAME",
                     },
                  },
                  placeHolder: {
                     text: "Enter Branch Name",
                     className: "text-subtitle",
                  },
               },
               {
                  name: "branch_address",
                  type: "TEXTAREA",
                  label: {
                     text: "Address",
                     className: "",
                  },
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  isEditable: true,
                  validation: {
                     pattern: {
                        key: "ADDRESS",
                     },
                  },
                  placeHolder: {
                     text: "Enter Address",
                     className: "text-subtitle",
                  },
               },
               {
                  name: "consent",
                  type: "CHECKBOX",
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  preserve: true,
                  isEditable: true,
                  validation: {
                     required: {
                        message: "This field is required",
                        isRequired: true,
                     },
                  },
                  placeHolder: {
                     text: "I hereby give my consent to credit the aforementioned account for the purpose of verification of my account details",
                     className: "text-xs",
                  },
               },
            ],
            properties: {
               layout: "vertical",
            },
         },
         components: {
            style: {
               col: {
                  md: 12,
                  xs: 24,
               },
            },
            contents: [
               {
                  type: "IMAGE_VIEWER",
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  action: {
                     api: {
                        type: "EXECUTE_ACTION",
                        requestType: "EXECUTE_ACTION",
                        executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                     },
                  },
                  content: {
                     key: {
                        condition: {
                           value: "upload_cheque",
                           dependOn: "bank_verification_upload_type",
                           operator: "EQUALS",
                        },
                        onFailure: "bank_statement_document_file_urls",
                        onSuccess: "cheque_document_file_urls",
                     },
                     src: "",
                  },
               },
               {
                  type: "ALERT",
                  style: {
                     col: {
                        md: 24,
                        xs: 24,
                     },
                  },
                  content: {
                     description: {
                        image: {
                           key: "ExclamationCircleFilled",
                           src: "",
                           className: "",
                        },
                        title: {
                           text: "An amount of Rs. 1.01 will be transferred to your account",
                           className: "",
                        },
                     },
                  },
                  className: "ml-1 inline-block flex justify-center",
                  properties: {
                     type: "warning",
                  },
               },
            ],
         },
      },
   },
   stepper: [
      {
         id: "verify_bank_account_upload",
         name: "Verify Bank Account Upload",
         title: {
            text: "Upload Document",
            className: "text-base font-normal text-title",
         },
         subtitle: {
            text: "Please upload a canceled cheque or statement of your bank account",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "bank_account_review_and_proceed",
         name: "Bank Account Review and Proceed",
         title: {
            text: "Review and Proceed",
            className: "text-base font-normal text-title",
         },
         subtitle: {
            text: "Review and edit the fields if required then proceed",
            className: "text-xs font-normal text-subtitle",
         },
      },
   ],
   description: {
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/bank_account_verification.png",
         className: "screen-header-image",
      },
      title: {
         text: "Bank Account Verification",
         className: "text-xl font-medium text-title",
      },
      action: {
         api: {
            type: "EXECUTE_ACTION",
            requestType: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
         },
         icon: {
            key: "ArrowLeftOutlined",
            src: "",
            className: "text-xl cursor-pointer mr-2",
         },
      },
      subtitle: {
         text: "Please upload a valid bank document for verification.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
   },
};

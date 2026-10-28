export const init_signatory_details_verification = {
   id: "init_signatory_details_verification",
   name: "Init Signatory Details Verification",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 24 } },
            contents: [
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 24 } },
                  className: "flex lg:mx-4 md:mx-2 my-4 justify-start",
                  content: {
                     label: {
                        text: "Add signatory details and verify PAN and address proof",
                        className: "text-base",
                     },
                  },
               },
               {
                  type: "TEXT_BUTTON",
                  name: "additional_data",
                  style: { col: { xs: 24, md: 24 } },
                  className: "lg:mx-4 md:mx-2",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "signatory_detail",
                           operator: "LESS_THAN",
                           value: 2,
                        },
                     ],
                  },
                  content: {
                     action: {
                        className: "font-medium text-base xs:text-sm w-full flex justify-between lg:p-7 md:p-7",
                        label: { text: "Add Signatory Details", className: "font-bold" },
                        icon: { key: "PlusOutlined", position: "end", className: "" },
                        style: { color: "primary", col: { xs: 24, md: 24 } },
                        onChange: {
                           key: "addSignatureDetailsVisibility",
                           value: true,
                        },
                     },
                  },
               },
               {
                  type: "MODAL",
                  key: "addSignatureDetailsVisibility",
                  style: { col: { xs: 24, md: 24 } },
                  className: "lg:mx-4 md:mx-2",
                  content: {
                     closable: true,
                     maskClosable: true,
                     components: {
                        style: { col: { xs: 24, md: 12 } },
                        contents: [
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 24, md: 24 } },
                              className: "mt-4 lg:ml-3 md:ml-3",
                              content: {
                                 label: {
                                    text: "Enter Signatory Details",
                                    className: "lg:text-base xs:text-sm",
                                 },
                              },
                           },
                        ],
                     },
                     form: {
                        style: { col: { xs: 24, md: 22 } },
                        properties: {
                           layout: "vertical",
                           className: "lg:ml-6 md:ml-6 mt-7",
                        },
                        fields: [
                           {
                              name: "name",
                              preserve: false,
                              label: { text: "Full Name", className: "xs:text-xs" },
                              placeHolder: { text: "Enter Name", className: "xs:text-xs" },
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
                              name: "email",
                              preserve: false,
                              label: { text: "Email Address", className: "xs:text-xs" },
                              placeHolder: { text: "Enter Email Address", className: "xs:text-xs" },
                              type: "INPUT",
                              isEditable: true,
                              validation: {
                                 required: {
                                    isRequired: true,
                                    message: "This field is required",
                                 },
                                 pattern: {
                                    key: "EMAIL",
                                 },
                              },
                              style: { col: { xs: 24, md: 24 } },
                           },
                        ],
                        action: {
                           label: { text: "Add Signer", className: "xs:text-xs" },
                           actionExecuteType: "onAddAction",
                           api: {
                              type: "EXECUTE_ACTION",
                              executeActionType: "SAVE_SIGNATORY_DETAILS_ACTION",
                              requestType: "EXECUTE_ACTION",
                              parentKey: "signatory_detail",
                           },
                        },
                     },
                     action: {
                        onChange: {
                           key: "addSignatureDetailsVisibility",
                           value: false,
                        },
                     },
                  },
               },
               {
                  type: "MODAL",
                  key: "updateSignatureDetailsVisibility",
                  style: { col: { xs: 24, md: 24 } },
                  className: "lg:mx-4 md:mx-2",
                  content: {
                     closable: true,
                     maskClosable: true,
                     components: {
                        style: { col: { xs: 24, md: 12 } },
                        contents: [
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 24, md: 24 } },
                              className: "mt-4 lg:ml-3 md:ml-3",
                              content: {
                                 label: {
                                    text: "Enter Signatory Details",
                                    className: "text-base",
                                 },
                              },
                           },
                        ],
                     },
                     form: {
                        style: { col: { xs: 24, md: 22 } },
                        properties: {
                           layout: "vertical",
                           className: "lg:ml-6 md:ml-6 mt-7",
                        },
                        fields: [
                           {
                              name: "name",
                              label: { text: "Full Name", className: "xs:text-xs" },
                              placeHolder: { text: "Enter Name", className: "xs:text-xs" },
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
                              name: "email",
                              label: { text: "Email Address", className: "xs:text-xs" },
                              placeHolder: { text: "Enter Email Address", className: "xs:text-xs" },
                              type: "INPUT",
                              isEditable: true,
                              validation: {
                                 required: {
                                    isRequired: true,
                                    message: "This field is required",
                                 },
                                 pattern: {
                                    key: "EMAIL",
                                 },
                              },
                              style: { col: { xs: 24, md: 24 } },
                           },
                        ],
                        action: {
                           label: { text: "Update Signer", className: "xs:text-xs" },
                           actionExecuteType: "onEditAction",
                           api: {
                              type: "EXECUTE_ACTION",
                              executeActionType: "SAVE_SIGNATORY_DETAILS_ACTION",
                              requestType: "EXECUTE_ACTION",
                              parentKey: "signatory_detail",
                           },
                        },
                     },
                     action: {
                        onChange: {
                           key: "updateSignatureDetailsVisibility",
                           value: false,
                        },
                     },
                  },
               },
               {
                  type: "DOCUMENT_STATUS_CARD",
                  style: { col: { xs: 24, md: 24 } },
                  className: "lg:mx-4 md:mx-2 my-3",
                  name: "additional_data.signatory_detail",
                  content: {
                     className: "lg:p-4 md:p-2 xs:p-2 flex justify-between w-full",
                     items: [
                        {
                           text: "Signer {index}",
                           className: "text-subtitle mb-1 xs:text-xs",
                        },
                        {
                           key: "name",
                           className: "font-bold mb-1 xs:text-xs",
                        },
                        {
                           key: "email",
                        },
                     ],
                     actions: [
                        {
                           className: "cursor-pointer lg:inline-block md:inline-block lg:mt-7 md:mt-7 xs:flex",
                           icon: { key: "EditOutlined", className: "text-xl" },
                           style: { color: "primary", type: "link" },
                           disabled: {
                              conditions: [
                                 {
                                    dependOn: "status",
                                    operator: "EQUALS",
                                    value: "COMPLETED",
                                 },
                              ],
                           },
                           onChange: {
                              key: "updateSignatureDetailsVisibility",
                              value: true,
                           },
                        },
                        {
                           className: "cursor-pointer lg:inline-block md:inline-block xs:flex",
                           icon: { key: "DeleteOutlined", className: "lg:m-5 md:m-5 text-xl" },
                           style: { color: "primary", type: "link" },
                           actionExecuteType: "onDeleteAction",
                           api: {
                              type: "EXECUTE_ACTION",
                              executeActionType: "SAVE_SIGNATORY_DETAILS_ACTION",
                              requestType: "EXECUTE_ACTION",
                              parentKey: "signatory_detail",
                           },
                        },
                     ],
                  },
                  footer: {
                     className: "p-4 flex justify-between",
                     items: [
                        {
                           text: "Status",
                           className: "text-subtitle mb-1 inline-block mr-3 mt-2 xs:text-xs",
                        },
                        {
                           key: "status",
                           text: "•",
                           className: {
                              condition: {
                                 dependOn: "status",
                                 operator: "EQUALS",
                                 value: "PENDING",
                              },
                              onSuccess: "font-bold mb-1 inline-block text-calypsoCoral xs:text-xs",
                              onFailure: "font-bold mb-1 inline-block text-libertyGreen xs:text-xs",
                           },
                        },
                     ],
                     actions: [
                        {
                           label: { text: "Verify PAN and Address", className: "" },
                           className: "xs:text-xs",
                           style: { type: "primary" },
                           actionExecuteType: "onSelectionAction",
                           name: "additional_data.signatory_detail",
                           disabled: {
                              conditions: [
                                 {
                                    dependOn: "status",
                                    operator: "EQUALS",
                                    value: "COMPLETED",
                                 },
                              ],
                           },
                           api: {
                              type: "EXECUTE_ACTION",
                              executeActionType: "INIT_SIGNATORY_INDIVIDUAL_PAN_VERIFY_ACTION",
                              requestType: "EXECUTE_ACTION",
                              dataKey: "currently_verified_signatory_id",
                           },
                        },
                     ],
                  },
               },
            ],
            actions: [
               {
                  label: { text: "Save and Submit", className: "" },
                  style: { size: "large", type: "primary" },
                  name: "additional_data",
                  disabled: {
                     conditions: [
                        {
                           dependOn: "signatory_detail",
                           operator: "IS_EMPTY",
                        },
                        {
                           dependOn: "signatory_detail",
                           operator: "CUSTOM",
                           value: "isDisabled",
                        },
                     ],
                  },
                  className: "mt-5",
                  api: {
                     type: "EXECUTE_ACTION",
                     executeActionType: "COMPLETE_SIGNATORY_VERIFICATION",
                     requestType: "EXECUTE_ACTION",
                  },
               },
            ],
         },
      },
   },
};

export const signatory_individual_pan_ocr = {
   id: "signatory_individual_pan_ocr",
   name: "Signatory Individual PAN OCR",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   header: {
      className: "py-4 px-4",
      style: { col: { xs: 24, md: 24 } },
      title: {
         text: "Signer: {name}",
         className: "text-base font-medium text-title",
      },
      subtitle: { text: "PAN Verification", className: "text-sm font-medium text-subtitle" },
   },

   stepper: [
      {
         id: "signatory_individual_pan_ocr",
         name: "Signatory Individual PAN OCR",
         title: { text: "Upload PAN", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload the front side of signer's PAN",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "signatory_individual_pan_data_review_and_verify",
         name: "Signatory Individual PAN Data Review and Verify",
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
            },
            style: { col: { xs: 24, md: 24 } },
            fields: [
               {
                  name: "signatory_detail.individual_pan_document_file",
                  preserve: false,
                  helperText: {
                     text: "Supported format: jpeg, jpg, png • Max size: 3MB",
                     className: "text-xs text-subtitle",
                  },
                  type: "DRAG_AND_DROP",
                  placeHolder: { text: "Drag file to this area to upload", className: "block" },
                  label: { text: "", className: "" },
                  style: {
                     col: { md: 12, xs: 24 },
                  },
                  className: "m-auto mt-8",
                  isEditable: true,
                  multiple: false,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     maxAllowedSize: {
                        size: 3,
                        message: "Please check the file size",
                     },
                     allowedTypes: {
                        types: ["image/jpeg", "image/jpg", "image/png"],
                        message: "Please check the file type",
                     },
                  },
                  action: {
                     label: { text: "Browse File", className: "" },
                  },
               },
            ],
            action: {
               label: { text: "Next", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SIGNATORY_INDIVIDUAL_PAN_OCR_ACTION",
                  requestType: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
                  parentKey: "signatory_detail",
               },
            },
         },
      },
   },
};

export const signatory_individual_pan_data_review_and_verify = {
   id: "signatory_individual_pan_data_review_and_verify",
   name: "Signatory Individual PAN Data Review and Verify",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   header: {
      className: "py-4 px-4",
      style: { col: { xs: 24, md: 24 } },
      title: { text: "Signer: {name}", className: "text-base font-medium text-title" },
      subtitle: { text: "PAN Verification", className: "text-sm font-medium text-subtitle" },
   },
   stepper: [
      {
         id: "signatory_individual_pan_ocr",
         name: "Signatory Individual PAN OCR",
         title: { text: "Upload PAN", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload the front side of signer's PAN",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "signatory_individual_pan_data_review_and_verify",
         name: "Signatory Individual PAN Data Review and Verify",
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
                     key: "signatory_detail.individual_pan_document_file_urls",
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
                  name: "individual_pan_name",
                  preserve: false,
                  label: { text: "Name", className: "" },
                  placeHolder: { text: "Enter PAN Name", className: "" },
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
                  name: "individual_pan_date_of_birth",
                  preserve: false,
                  label: { text: "Date of Birth", className: "" },
                  placeHolder: { text: "Enter date of birth", className: "" },
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
                  name: "individual_pan_number",
                  preserve: false,
                  label: { text: "PAN", className: "" },
                  placeHolder: { text: "Enter PAN number", className: "" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "PAN_NUMBER",
                     },
                  },
                  style: { col: { xs: 24, md: 24 } },
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  parentKey: "signatory_detail",
                  executeActionType: "SIGNATORY_INDIVIDUAL_PAN_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const init_signatory_address_verification = {
   id: "init_signatory_address_verification",
   name: "Init Signatory Address Verification",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   header: {
      className: "lg:py-4 lg:px-4 md:py-4 md:px-4",
      style: { col: { xs: 24, md: 24 } },
      title: { text: "Signer: {name}", className: "lg:text-base md:text-sm xs:text-xs font-medium text-title" },
      subtitle: { text: "Address Verification", className: "lg:text-sm xs:text-xs font-medium text-subtitle" },
   },
   stepper: [
      {
         id: "init_signatory_address_verification",
         name: "Init Signatory Address Verification",
         title: { text: "Upload Address Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload any one address proof document of the signer",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "signatory_address_review_and_verification",
         name: "step2",
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
                  name: "address_verification_document_type",
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
                  name: "signatory_detail.aadhaar_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "address_verification_document_type",
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
                                 dependOn: "signatory_detail.aadhaar_document_file",
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
                  name: "signatory_detail.dl_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "address_verification_document_type",
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
                                 dependOn: "signatory_detail.dl_document_file",
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
                  name: "signatory_detail.voter_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "address_verification_document_type",
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
                                 dependOn: "signatory_detail.voter_document_file",
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
                  name: "signatory_detail.passport_document_file",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "address_verification_document_type",
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
                                 dependOn: "signatory_detail.passport_document_file",
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
                           dependOn: "address_verification_document_type",
                           operator: "EQUALS",
                           value: "AADHAAR",
                        },
                        {
                           dependOn: "signatory_detail.aadhaar_document_file",
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
                           dependOn: "address_verification_document_type",
                           operator: "EQUALS",
                           value: "DL",
                        },
                        {
                           dependOn: "signatory_detail.dl_document_file",
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
                           dependOn: "address_verification_document_type",
                           operator: "EQUALS",
                           value: "VOTER",
                        },
                        {
                           dependOn: "signatory_detail.voter_document_file",
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
                           dependOn: "address_verification_document_type",
                           operator: "EQUALS",
                           value: "PASSPORT",
                        },
                        {
                           dependOn: "signatory_detail.passport_document_file",
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
                  parentKey: "signatory_detail",
                  executeActionType: {
                     condition: {
                        dependOn: "address_verification_document_type",
                        operator: "MAP",
                        options: {
                           AADHAAR: "SIGNATORY_AADHAAR_OCR_ACTION",
                           DL: "SIGNATORY_DL_OCR_ACTION",
                           PASSPORT: "SIGNATORY_PASSPORT_OCR_ACTION",
                           VOTER: "SIGNATORY_VOTER_OCR_ACTION",
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

export const signatory_aadhaar_review_and_verify = {
   id: "signatory_aadhaar_review_and_verify",
   name: "Signatory Aadhaar Review And Verify",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   header: {
      className: "py-4 px-4",
      style: { col: { xs: 24, md: 24 } },
      title: { text: "Signer: {name}", className: "text-base font-medium text-title" },
      subtitle: { text: "Address Verification", className: "text-sm font-medium text-subtitle" },
   },
   stepper: [
      {
         id: "init_signatory_address_verification",
         name: "Init Signatory Address Verification",
         title: { text: "Upload Address Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload any one address proof document of the signer",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "signatory_aadhaar_review_and_verify",
         name: "Signatory Aadhaar Review And Verify",
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
                     key: "signatory_detail.aadhaar_document_file_urls",
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
                  className: "lg:pr-4 md:pr-4",
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
                  className: "lg:pl-4 md:pl:4",
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
                              parentKey: "signatory_detail",
                              requestType: "EXECUTE_ACTION",
                              executeActionType: "INIT_SIGNATORY_AADHAAR_VERIFICATION_ACTION",
                           },
                        },
                     },
                     action: {
                        label: { text: "Submit", className: "" },
                        style: { type: "primary" },
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "SIGNATORY_AADHAAR_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           parentKey: "signatory_detail",
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
                  parentKey: "signatory_detail",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "INIT_SIGNATORY_AADHAAR_VERIFICATION_ACTION",
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

export const signatory_dl_review_and_verify = {
   id: "signatory_dl_review_and_verify",
   name: "Signatory DL Review And Verify",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   header: {
      className: "py-4 px-4",
      style: { col: { xs: 24, md: 24 } },
      title: { text: "Signer: {name}", className: "text-base font-medium text-title" },
      subtitle: { text: "Address Verification", className: "text-sm font-medium text-subtitle" },
   },
   stepper: [
      {
         id: "init_signatory_address_verification",
         name: "Init Signatory Address Verification",
         title: { text: "Upload Address Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload any one address proof document of the signer",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "signatory_dl_review_and_verify",
         name: "Signatory DL Review And Verif",
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
                     key: "signatory_detail.dl_document_file_urls",
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
                  className: "",
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
                  className: "",
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
                  className: "",
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
                  parentKey: "signatory_detail",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "SIGNATORY_DL_VERIFY_ACTION",
               },
            },
         },
      },
   },
};

export const signatory_voter_review_and_verify = {
   id: "signatory_voter_review_and_verify",
   name: "Signatory Voter Review And Verify",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   header: {
      className: "py-4 px-4",
      style: { col: { xs: 24, md: 24 } },
      title: { text: "Signer: {name}", className: "text-base font-medium text-title" },
      subtitle: { text: "Address Verification", className: "text-sm font-medium text-subtitle" },
   },
   stepper: [
      {
         id: "init_signatory_address_verification",
         name: "Init Signatory Address Verification",
         title: { text: "Upload Address Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload any one address proof document of the signer",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "signatory_voter_review_and_verify",
         name: "Signatory Voter Review And Verify",
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
                     key: "signatory_detail.voter_document_file_urls",
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
                  className: "lg:pr-4 md:pr-4",
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
                  className: "lg:pl-4 md:pl-4",
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
                  parentKey: "signatory_detail",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "SIGNATORY_VOTER_VERIFY_ACTION",
               },
            },
         },
      },
   },
};

export const signatory_passport_review_and_verify = {
   id: "signatory_passport_review_and_verify",
   name: "Signatory Passport Review And Verify",
   description: {
      title: { text: "Provide Signing Authority Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please provide the Authorized Signatory details and ensure the email address is correct, as the contract will be sent to this email for signing.",
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
   dataExtractor: {
      type: "LIST",
      parentKey: "additional_data.signatory_detail",
      extractorKey: "generic_data.currently_verified_signatory_id",
   },
   header: {
      className: "py-4 px-4",
      style: { col: { xs: 24, md: 24 } },
      title: { text: "Signer: {name}", className: "text-base font-medium text-title" },
      subtitle: { text: "Address Verification", className: "text-sm font-medium text-subtitle" },
   },
   stepper: [
      {
         id: "init_signatory_address_verification",
         name: "Init Signatory Address Verification",
         title: { text: "Upload Address Proof", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload any one address proof document of the signer",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "signatory_passport_review_and_verify",
         name: "Signatory Passport Review And Verify",
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
                     key: "signatory_detail.passport_document_file_urls",
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
                  parentKey: "signatory_detail",
                  requestType: "EXECUTE_ACTION",
                  executeActionType: "SIGNATORY_PASSPORT_VERIFY_ACTION",
               },
            },
         },
      },
   },
};

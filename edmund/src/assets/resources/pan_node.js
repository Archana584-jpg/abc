export const business_pan_upload_and_ocr = {
   id: "business_pan_upload_and_ocr",
   name: "Business PAN Upload And OCR",
   description: {
      title: { text: "Business PAN Verification", className: "text-base font-medium text-title" },
      subtitle: {
         text: "Upload a photo of your business PAN and verify details.",
         className: "text-xs font-normal text-subtitle",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/pan-verification-thumbnail.png",
         className: "screen-header-image",
      },
   },
   stepper: [
      {
         id: "business_pan_upload_and_ocr",
         name: "Business PAN Data Review and Verify",
         title: { text: "Upload PAN", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload the front side of your business PAN",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_pan_review_and_verification",
         name: "Business PAN Data Review and Verify",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required then proceed ",
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
                  name: "business_pan_document_file",
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
                  executeActionType: "BUSINESS_PAN_OCR_ACTION",
                  requestType: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const business_pan_review_and_verification = {
   id: "business_pan_review_and_verification",
   name: "Business PAN Data Review and Verify",
   description: {
      title: { text: "Business PAN Verification", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Upload a photo of your business PAN and verify details.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/pan-verification-thumbnail.png",
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
         id: "business_pan_upload_and_ocr",
         name: "Business PAN Data Review and Verify",
         title: { text: "Upload PAN", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload the front side of your business PAN",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_pan_review_and_verification",
         name: "Business PAN Data Review and Verify",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required then proceed ",
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
                     key: "business_pan_document_file_urls",
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
                  name: "business_pan_name",
                  label: { text: "Name", className: "" },
                  placeHolder: { text: "Enter PAN Name", className: "" },
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
                  name: "business_pan_date_of_issue",
                  label: { text: "Date of Issue", className: "" },
                  placeHolder: { text: "Enter date of issue", className: "" },
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
                  name: "business_pan_number",
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
                  executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const business_pan_dedupe = {
   id: "business_pan_dedupe",
   name: "Business PAN Dedupe",
   description: {
      title: { text: "Verify Business PAN", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Upload a photo of your business PAN card and verify details",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/pan-verification-thumbnail.png",
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
   node: {
      content: {
         components: {
            contents: [
               {
                  type: "ALERT",
                  properties: {
                     type: "warning",
                  },
                  style: { col: { xs: 24, md: 23 } },
                  className: "ml-1",
                  content: {
                     description: {
                        title: {
                           text: "We've found existing applications linked to the PAN you provided.",
                        },
                        image: { key: "ExclamationCircleFilled" },
                     },
                  },
               },
               {
                  type: "FORM",
                  dataSource: "dedupe_data",
                  isMultiple: true,
                  style: { col: { xs: 24, md: 24 } },
                  properties: {
                     layout: "vertical",
                     className: "mt-3 border-solid border border-border-silver px-4 py-2 rounded-lg",
                  },
                  description: {
                     title: { text: "Application {index}", className: "text-base font-medium mb-3" },
                  },
                  fields: [
                     {
                        name: "initiation_date",
                        label: { text: "Initiation Date", className: "text-subtitle" },
                        type: "DATE",
                        mode: "date",
                        format: "DD MMM YYYY",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                     {
                        name: "application_id",
                        label: { text: "Application ID", className: "text-subtitle" },
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                     {
                        name: "email_id",
                        label: { text: "User Email", className: "text-subtitle" },
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                     {
                        name: "application_status",
                        label: { text: "Application Status", className: "text-subtitle" },
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                  ],
               },
               {
                  type: "LIST",
                  style: { col: { xs: 24, md: 13 } },
                  className: "p-3",
                  content: {
                     description: {
                        title: {
                           text: "You have two options:",
                           className: "font-medium",
                        },
                     },
                     items: [
                        {
                           title: {
                              text: "1. Use an Existing Application",
                              className: "ml-2",
                           },
                           description: {
                              text: "You can discard this current application and connect with the user of one of the existing applications to use that account.",
                              className: "ml-6 text-subtitle",
                           },
                        },

                        {
                           title: {
                              text: "2. Continue with This Application",
                              className: "ml-2",
                           },
                           description: {
                              text: "If you'd like, you can continue with the current application.",
                              className: "ml-6 text-subtitle",
                           },
                        },
                     ],
                  },
               },

               {
                  type: "MODAL",
                  key: "continueApplicationVisibilty",
                  style: { col: { xs: 24, md: 24 } },
                  className: "mx-4",
                  content: {
                     closable: true,
                     maskClosable: true,
                     components: {
                        style: { col: { xs: 24, md: 24 } },
                        contents: [
                           {
                              type: "ALERT",
                              properties: {
                                 type: "none",
                              },
                              style: { col: { xs: 24, md: 24 } },
                              className: "lg:ml-7 mt-5",
                              content: {
                                 description: {
                                    title: {
                                       text: "Please confirm to continue with the current application",
                                    },
                                    image: { key: "ExclamationCircleFilled" },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-14 md:ml-14 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Go Back", className: "font-bold" },
                                    style: { color: "primary", variant: "outlined" },
                                    onChange: {
                                       key: "continueApplicationVisibilty",
                                       value: false,
                                    },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-4 md:ml-4 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Continue", className: "font-bold" },
                                    style: { type: "primary" },
                                    api: {
                                       type: "EXECUTE_ACTION",
                                       executeActionType: "MOVE_TO_NEXT_NODE_ACTION",
                                       requestType: "EXECUTE_ACTION",
                                    },
                                 },
                              },
                           },
                        ],
                     },
                     action: {
                        onChange: {
                           key: "continueApplicationVisibilty",
                           value: false,
                        },
                     },
                  },
               },

               {
                  type: "MODAL",
                  key: "discardApplicationVisibilty",
                  style: { col: { xs: 24, md: 24 } },
                  className: "mx-4",
                  content: {
                     closable: true,
                     maskClosable: true,
                     components: {
                        style: { col: { xs: 24, md: 24 } },
                        contents: [
                           {
                              type: "ALERT",
                              properties: {
                                 type: "none",
                              },
                              style: { col: { xs: 24, md: 24 } },
                              className: "lg:ml-7 mt-5",
                              content: {
                                 description: {
                                    title: {
                                       text: "Are you sure you want to discard this application? This action cannot be undone.",
                                    },
                                    image: { key: "ExclamationCircleFilled" },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-14 md:ml-14 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Go Back", className: "font-bold" },
                                    style: { color: "primary", variant: "outlined" },
                                    api: {
                                       type: "EXECUTE_ACTION",
                                       executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                                       requestType: "EXECUTE_ACTION",
                                    },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-14 md:ml-14 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Continue", className: "font-bold" },
                                    style: { type: "primary" },
                                    api: {
                                       type: "EXECUTE_ACTION",
                                       executeActionType: "DISCARD_ACTION",
                                       requestType: "EXECUTE_ACTION",
                                    },
                                 },
                              },
                           },
                        ],
                     },
                     action: {
                        onChange: {
                           key: "discardApplicationVisibilty",
                           value: false,
                        },
                     },
                  },
               },
            ],
            actions: [
               {
                  label: { text: "Discard This Application" },
                  onChange: {
                     key: "discardApplicationVisibilty",
                     value: true,
                  },
                  style: { color: "primary", variant: "outlined", col: { xs: 24, md: 6 } },
                  className: "mt-2",
               },
               {
                  label: { text: "Continue This Application" },
                  onChange: {
                     key: "continueApplicationVisibilty",
                     value: true,
                  },
                  style: { type: "primary", col: { xs: 24, md: 6 } },
                  className: "mt-2",
               },
            ],
         },
      },
   },
};

export const application_discarded = {
   id: "application_discarded",
   name: "Application Discarded",
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 24 } },
            contents: [
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 24 } },
                  className: "flex mt-6 justify-center mb-2",
                  content: {
                     label: {
                        text: "Application Discarded",
                        className: "text-xl text-title font-bold",
                     },
                  },
               },
               {
                  type: "IMAGE",
                  style: { col: { xs: 12, md: 24 } },
                  className: "flex justify-center mb-2",
                  content: {
                     src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/discard_app.png",
                  },
               },
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 24 } },
                  className: "mt-4 justify-items-center",
                  content: {
                     label: {
                        text: "You have discarded this application.",
                        className: "text-lg text-title font-medium",
                     },
                  },
               },
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 24 } },
                  className: "justify-items-center",
                  content: {
                     label: {
                        text: "Kindly reach out to the existing application users",
                        className: "text-lg text-title font-medium",
                     },
                  },
               },
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 24 } },
                  className: "justify-items-center",
                  content: {
                     label: {
                        text: "identified in the de-dupe check.",
                        className: "text-lg text-title font-medium",
                     },
                  },
               },
            ],
         },
      },
   },
};

export const business_owner_pan_upload_and_ocr = {
   id: "business_owner_pan_upload_and_ocr",
   name: "Business Owner PAN Upload And OCR",
   description: {
      title: { text: "Verify Business Owner PAN", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Upload a photo of the business owner's PAN card and verify details",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/pan-verification-thumbnail.png",
         className: "screen-header-image",
      },
   },
   stepper: [
      {
         id: "business_owner_pan_upload_and_ocr",
         name: "Business Owner PAN Upload And OCR",
         title: { text: "Upload PAN", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload the front side of your business owner PAN",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_owner_pan_data_review_and_verify",
         name: "Business Owner PAN Data Review and Verify",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required then proceed ",
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
                  name: "individual_pan_document_file",
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
                  executeActionType: "INDIVIDUAL_PAN_OCR_ACTION",
                  requestType: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const business_owner_pan_data_review_and_verify = {
   id: "business_owner_pan_data_review_and_verify",
   name: "Business Owner PAN Data Review and Verify",
   description: {
      title: { text: "Verify Business Owner PAN", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Upload a photo of the business owner's PAN card and verify details",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/pan-verification-thumbnail.png",
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
         id: "business_owner_pan_upload_and_ocr",
         name: "Business Owner PAN Upload And OCR",
         title: { text: "Upload PAN", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Upload the front side of your business owner PAN",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "business_owner_pan_data_review_and_verify",
         name: "Business Owner PAN Data Review and Verify",
         title: { text: "Review and Proceed", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Review and edit the fields if required then proceed ",
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
                     key: "individual_pan_document_file_urls",
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
                  label: { text: "Name", className: "" },
                  placeHolder: { text: "Enter PAN Name", className: "" },
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
                  name: "individual_pan_father_name",
                  label: { text: "Father's Name", className: "" },
                  placeHolder: { text: "Enter Father's Name", className: "" },
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
                  name: "individual_pan_date_of_birth",
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
                  executeActionType: "INDIVIDUAL_PAN_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const business_owner_pan_dedupe = {
   id: "business_owner_pan_dedupe",
   name: "Business Owner PAN Dedupe",
   description: {
      title: { text: "Verify Business Owner PAN", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Upload a photo of the business owner's PAN card and verify details",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/pan-verification-thumbnail.png",
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
   node: {
      content: {
         components: {
            contents: [
               {
                  type: "ALERT",
                  properties: {
                     type: "warning",
                  },
                  style: { col: { xs: 24, md: 23 } },
                  className: "ml-1",
                  content: {
                     description: {
                        title: {
                           text: "We've found existing applications linked to the PAN you provided.",
                        },
                        image: { key: "ExclamationCircleFilled" },
                     },
                  },
               },
               {
                  type: "FORM",
                  dataSource: "dedupe_data",
                  isMultiple: true,
                  style: { col: { xs: 24, md: 24 } },
                  properties: {
                     layout: "vertical",
                     className: "mt-3 border-solid border border-border-silver px-4 py-2 rounded-lg",
                  },
                  description: {
                     title: { text: "Application {index}", className: "text-base font-medium mb-3" },
                  },
                  fields: [
                     {
                        name: "initiation_date",
                        label: { text: "Initiation Date", className: "text-subtitle" },
                        type: "DATE",
                        mode: "date",
                        format: "DD MMM YYYY",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                     {
                        name: "application_id",
                        label: { text: "Application ID", className: "text-subtitle" },
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                     {
                        name: "email_id",
                        label: { text: "User Email", className: "text-subtitle" },
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                     {
                        name: "application_status",
                        label: { text: "Application Status", className: "text-subtitle" },
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 5 } },
                        className: "mr-8",
                     },
                  ],
               },
               {
                  type: "LIST",
                  style: { col: { xs: 24, md: 13 } },
                  className: "p-3",
                  content: {
                     description: {
                        title: {
                           text: "You have two options:",
                           className: "font-medium",
                        },
                     },
                     items: [
                        {
                           title: {
                              text: "1. Use an Existing Application",
                              className: "ml-2",
                           },
                           description: {
                              text: "You can discard this current application and connect with the user of one of the existing applications to use that account.",
                              className: "ml-6 text-subtitle",
                           },
                        },

                        {
                           title: {
                              text: "2. Continue with This Application",
                              className: "ml-2",
                           },
                           description: {
                              text: "If you'd like, you can continue with the current application.",
                              className: "ml-6 text-subtitle",
                           },
                        },
                     ],
                  },
               },

               {
                  type: "MODAL",
                  key: "continueApplicationVisibilty",
                  style: { col: { xs: 24, md: 24 } },
                  className: "mx-4",
                  content: {
                     closable: true,
                     maskClosable: true,
                     components: {
                        style: { col: { xs: 24, md: 24 } },
                        contents: [
                           {
                              type: "ALERT",
                              properties: {
                                 type: "none",
                              },
                              style: { col: { xs: 24, md: 24 } },
                              className: "lg:ml-7 mt-5",
                              content: {
                                 description: {
                                    title: {
                                       text: "Please confirm to continue with the current application",
                                    },
                                    image: { key: "ExclamationCircleFilled" },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-14 md:ml-14 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Go Back", className: "font-bold" },
                                    style: { color: "primary", variant: "outlined" },
                                    onChange: {
                                       key: "continueApplicationVisibilty",
                                       value: false,
                                    },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-4 md:ml-4 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Continue", className: "font-bold" },
                                    style: { type: "primary" },
                                    api: {
                                       type: "EXECUTE_ACTION",
                                       executeActionType: "MOVE_TO_NEXT_NODE_ACTION",
                                       requestType: "EXECUTE_ACTION",
                                    },
                                 },
                              },
                           },
                        ],
                     },
                     action: {
                        onChange: {
                           key: "continueApplicationVisibilty",
                           value: false,
                        },
                     },
                  },
               },

               {
                  type: "MODAL",
                  key: "discardApplicationVisibilty",
                  style: { col: { xs: 24, md: 24 } },
                  className: "lg:mx-4 md:mx-4",
                  content: {
                     closable: true,
                     maskClosable: true,
                     components: {
                        style: { col: { xs: 24, md: 24 } },
                        contents: [
                           {
                              type: "ALERT",
                              properties: {
                                 type: "none",
                              },
                              style: { col: { xs: 24, md: 24 } },
                              className: "lg:ml-7 md:ml-7 mt-5",
                              content: {
                                 description: {
                                    title: {
                                       text: "Are you sure you want to discard this application? This action cannot be undone.",
                                    },
                                    image: { key: "ExclamationCircleFilled" },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-14 md:ml-14 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Go Back", className: "font-bold" },
                                    style: { color: "primary", variant: "outlined" },
                                    api: {
                                       type: "EXECUTE_ACTION",
                                       executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                                       requestType: "EXECUTE_ACTION",
                                    },
                                 },
                              },
                           },
                           {
                              type: "TEXT_BUTTON",
                              style: { col: { xs: 12, md: 8 } },
                              className: "mt-5 lg:ml-4 md:ml-4 xs:flex xs:justify-center",
                              content: {
                                 action: {
                                    label: { text: "Continue", className: "font-bold" },
                                    style: { type: "primary" },
                                    api: {
                                       type: "EXECUTE_ACTION",
                                       executeActionType: "DISCARD_ACTION",
                                       requestType: "EXECUTE_ACTION",
                                    },
                                 },
                              },
                           },
                        ],
                     },
                     action: {
                        onChange: {
                           key: "discardApplicationVisibilty",
                           value: false,
                        },
                     },
                  },
               },
            ],
            actions: [
               {
                  label: { text: "Discard This Application" },
                  onChange: {
                     key: "discardApplicationVisibilty",
                     value: true,
                  },
                  style: { color: "primary", variant: "outlined", col: { xs: 24, md: 6 } },
                  className: "mt-2",
               },
               {
                  label: { text: "Continue This Application" },
                  onChange: {
                     key: "continueApplicationVisibilty",
                     value: true,
                  },
                  style: { type: "primary", col: { xs: 24, md: 6 } },
                  className: "mt-2",
               },
            ],
         },
      },
   },
};

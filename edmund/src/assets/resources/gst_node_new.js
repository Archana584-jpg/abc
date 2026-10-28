export const new_node_structure = {
   id: "gstin_data_review_and_submit",
   name: "GSTIN Data Review And Submit",
   header: {
      title: {
         text: "GST Verification",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details by providing a PAN number or GSTIN, along with uploading the GST certificate document",
         className: "text-sm font-normal text-subtitle mt-1 ",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
   },
   content: [
      {
         type: "STEPPER",
         wrapper: {
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
         },
         dataSource: {
            onValidCondition: "bank_statement_document_file_urls", // Path in state or context
            // onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
            // value: [], // Optional if static
            // condition: {
            //    dependOn: "bank_verification_upload_type",
            //    operator: "EQUALS",
            //    value: "upload_cheque",
            // },
         },
         content: {
            // for static steps,with some dynamic placeholders/values
            steps: [
               {
                  id: "init_gstin_verification",
                  name: "Init GSTIN Verification",
                  title: {
                     text: "{gstin_number}",
                     className: "text-base font-normal text-title",
                  },
                  subtitle: {
                     text: "Search your GST Details using GST Number or PAN number",
                     className: "text-xs font-normal text-subtitle",
                  },
               },
               {
                  id: "gstin_data_review_and_submit",
                  name: "GSTIN Data Review And Submit",
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
            //for dynamic steps, need a mapper
            // stepResolver: {
            //    title:{
            //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       condition: {
            //          dependOn: "bank_verification_upload_type",
            //          operator: "EQUALS",
            //          value: "upload_cheque",
            //       },
            //       className: "text-base font-normal text-title",
            //    },
            //    subtitle: {
            //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       condition: {
            //          dependOn: "bank_verification_upload_type",
            //          operator: "EQUALS",
            //          value: "upload_cheque",
            //       },
            //       className: "text-xs font-normal text-subtitle",
            //    },
            //    icon: {
            //       src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
            //       className: "screen-header-image",
            //       position: "left",
            //       style: {
            //          width: "24px",
            //          height: "24px",
            //       },
            //    },
            //    disabled:{
            //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       condition: {
            //          dependOn: "bank_verification_upload_type",
            //          operator: "EQUALS",
            //          value: "upload_cheque",
            //       },
            //    },
            //    status:{
            //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
            //       condition: {
            //          dependOn: "bank_verification_upload_type",
            //          operator: "EQUALS",
            //          value: "upload_cheque",
            //       },
            //    }
            // }
         },
         action: {
            // action structure
         },
      },
      {
         type: "ACTIONABLE_LABEL",
         wrapper: {
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
         },
         dataSource: {
            defaultPath: "state.genericData", // Path in state or context
         },
         content: {
            label: {
               text: "Showing GST information using GSTIN {gstin_number}",
               className: "text-sm text-subtitle",
               icon: {
                  src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
                  iconName: "ExclamationCircleFilled",
                  style: {
                     width: "24px",
                     height: "24px",
                  },
                  className: "screen-header-image",
               },
            },
            actionable: {
               label: {
                  text: "Change",
                  className: "font-bold",
               },
               props: {
                  size: "small",
                  type: "link",
                  color: "primary",
                  variant: "text",
               },
               icon: {
                  src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
                  iconName: "ExclamationCircleFilled",
                  style: {
                     width: "24px",
                     height: "24px",
                  },
                  className: "screen-header-image",
               },
               wrapper: {
                  style: {
                     col: {
                        xs: 24,
                        md: 6,
                     },
                  },
                  className: "flex items-center mb-2",
               },
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
         type: "IMAGE_VIEWER",
         wrapper: {
            style: {
               col: {
                  xs: 24,
                  md: 12,
               },
            },
         },
         props: {
            width: 300,
            preview: true,
            className: "rounded-lg",
            fallback: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
            alt: "GST Verification",
         },
         dataSource: {
            onValidCondition: [
               "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
               "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
               "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
               "adsd",
            ],
         },
         content: {},
      },
      {
         type: "ALERT",
         props: {
            type: "warning",
         },
         wrapper: {
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
            // className: "ml-1 inline-block flex justify-center",
         },
         dataSource: {
            defaultPath: "state.genericData", // Path in state or context
            value: [], // Optional if static
         },
         content: {
            title: {
               text: "GSTIN Number {gstin_number}",
               className: "text-base font-normal text-title",
            },
            description: {
               text: "GSTIN is a 15 digit number, unique to each GST registered business, used for filing GST returns and other GST-related activities.",
               className: "text-sm font-normal text-subtitle",
            },
            icon: {
               // using src
               src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
               // using icon name
               iconName: "ExclamationCircleFilled",
               className: "screen-header-image",
               position: "left", // left | right respective to the parent container, in this case it will be the alert
               style: {
                  width: "24px",
                  height: "24px",
               },
            },
         },
      },
      {
         type: "FORM",
         formId: "gstin_form",
         props: {
            layout: "vertical",
            className: "mb-4",
         },
         dataSource: {
            path: "state.genericData", // Path in state or context
         },
         content: {
            title: {
               text: "GSTIN Data",
               className: "text-base font-normal text-title",
               icon: {
                  src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
                  className: "screen-header-image",
                  position: "left",
                  style: {
                     width: "24px",
                     height: "24px",
                  },
               },
            },
            fields: [
               {
                  type: "INPUT",
                  content: {
                     label: {
                        text: "GSTIN",
                        className: "text-base font-normal text-title",
                        infoText:
                           "GSTIN is a 15 digit number, unique to each GST registered business, used for filing GST returns and other GST-related activities.",
                     },
                     placeholder: {
                        text: "Drag file to this area to upload",
                        className: "block",
                     },
                     // should we rename helperText to extra, as this is the name that antd uses?
                     helperText: {
                        text: "Upload GST certificate document",
                        className: "text-xs font-normal text-subtitle",
                     },
                     // for select, selectable list and radio buttons
                     // options: [
                     //    {
                     //       label: "Andhra Pradesh",
                     //       value: "Andhra Pradesh",
                     //       disabled: true,
                     //       tag: {
                     //          label: "Status",
                     //          value: true,
                     //       },
                     //    },
                     //    {
                     //       label: "Arunachal Pradesh",
                     //       value: "Arunachal Pradesh",
                     //       disabled: true,
                     //       tag: {
                     //          label: "Status",
                     //          value: true,
                     //       },
                     //    },
                     // ],
                  },
                  props: {
                     name: "gstin_number",
                     // isEditable: false,
                     // date level extra configs
                     // mode: "date",
                     // format: "YYYY-MM-DD",
                     // can we make it an array, instead of an object for the sake of consistency?
                     // validation: {
                     //    required: {
                     //       isRequired: true,
                     //       message: "This field is required",
                     //    },
                     //    maxLength: {
                     //       value: 24,
                     //       message: "Maximum length exceeded",
                     //    },
                     //    maxAllowedSize: {
                     //       size: 5,
                     //       message: "File size exceeds the allowed limit of 5MB",
                     //    },
                     //    allowedTypes: {
                     //       types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                     //       message: "Invalid file type. Allowed types: JPEG, JPG, PNG, PDF",
                     //    },
                     //    pattern: {
                     //       key: "NAME",
                     //    },
                     // },
                     // customRules:[
                     //    // any functions for handling validation
                     // ]
                     impactedFields: {},
                  },
                  // have kept style and classname inside wrapper, as these belongs to the col/wrapper enclsoing the field/formItem
                  wrapper: {
                     style: {
                        col: {
                           md: 12,
                           xs: 24,
                        },
                     },
                     className: "mb-4",
                  },
               },
            ],
         },
         action: {
            label: {
               text: "Save and Submit",
               className: "text-base font-semibold",
            },
            api: {
               type: "EXECUTE_ACTION",
               executeActionType: "SAVE_DATA_ACTION",
               requestType: "EXECUTE_ACTION",
               onSuccess: "",
               onFailure: "",
            },
         },
      },
   ],
};

export const new_business_pan_review_and_verification = {
   id: "business_pan_review_and_verification",
   name: "Business PAN Data Review and Verify",
   header: {
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
   layout: [
      {
         type: "STEPPER",
         wrapper: {
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
         },
         // dataSource: {
         //    onValidCondition: "bank_statement_document_file_urls", // Path in state or context
         //    // onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
         //    // value: [], // Optional if static
         //    // condition: {
         //    //    dependOn: "bank_verification_upload_type",
         //    //    operator: "EQUALS",
         //    //    value: "upload_cheque",
         //    // },
         // },
         content: {
            // for static steps,with some dynamic placeholders/values
            steps: [
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
         },
      },
      {
         type: "IMAGE_VIEWER",
         props: {
            style: { col: { xs: 24, md: 24 } },
         },
         wrapper: {
            style: { col: { xs: 24, md: 12 } },
         },
         dataSource: {
            onValidCondition: "business_pan_document_file_urls",
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
         type: "FORM",
         formId: "business_pan_form",
         wrapper: {
            style: { col: { xs: 24, md: 8 } },
         },
         props: {
            layout: "vertical",
            style: { col: { xs: 24, md: 12 } },
         },
         content: {
            title: {
               text: "PAN Verification Form",
               className: "",
            },
            fields: [
               {
                  type: "INPUT",
                  wrapper: {
                     style: { col: { xs: 24, md: 24 } },
                  },
                  props: {
                     name: "business_pan_name",
                     // value:"data.generic_data.business_pan_name",
                     isEditable: true,
                     validation: {
                        // required: {
                        //    isRequired: true,
                        //    message: "This field is required",
                        // },
                        pattern: {
                           key: "NAME",
                        },
                     },
                  },
                  impactedFields: {
                     business_pan_number: "HELLO",
                  },
                  // repeatableField:{
                  //    add:{
                  //       text:"Add More",
                  //       className:"",
                  //       // icon:{}
                  //    },
                  //    wrapper:{
                  //       className:""
                  //    },
                  //    remove:{
                  //       className:""
                  //    }
                  // },
                  content: {
                     label: { text: "Name", className: "" },
                     placeHolder: { text: "Enter PAN Name", className: "" },
                  },
               },
               {
                  type: "DATE",
                  props: {
                     name: "business_pan_date_of_issue",
                     // mode: "date",
                     // format: "YYYY-MM-DD",
                     style: {
                        width: "100%",
                     },
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                  },
                  content: {
                     label: { text: "Date of Issue", className: "" },
                     placeHolder: { text: "Enter date of issue", className: "" },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 24 } },
                  },
               },
               {
                  type: "INPUT",
                  props: {
                     name: "business_pan_number",
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
                  },
                  content: {
                     label: { text: "PAN", className: "" },
                     placeHolder: { text: "Enter PAN number", className: "" },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 24 } },
                  },
               },
            ],
         },
      },
      {
         type: "MODAL",
         props: {
            closable: true,
            maskClosable: true,
            className: "modal-class",
            visibilityDependsOn: "discardApplicationVisibilty",
         },
         content: {
            title: {
               text: "Discard Application",
               className: "text-base font-normal text-title",
               icon: {
                  src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
                  className: "screen-header-image",
                  style: {
                     width: "24px",
                     height: "24px",
                  },
               },
            },
            body: [
               {
                  type: "FORM",
                  formId: "business_pan_form",
                  wrapper: {
                     style: { col: { xs: 24, md: 24 } },
                  },
                  props: {
                     layout: "vertical",
                     style: { col: { xs: 24, md: 12 } },
                  },
                  content: {
                     fields: [
                        {
                           type: "INPUT",
                           wrapper: {
                              style: { col: { xs: 24, md: 24 } },
                           },
                           props: {
                              name: "business_pan_name",
                              value: "data.generic_data.business_pan_name",
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
                           },
                           content: {
                              label: { text: "Name", className: "" },
                              placeHolder: { text: "Enter PAN Name", className: "" },
                           },
                        },
                        {
                           type: "DATE",
                           props: {
                              name: "business_pan_date_of_issue",
                              mode: "date",
                              format: "YYYY-MM-DD",
                              isEditable: true,
                              validation: {
                                 required: {
                                    isRequired: true,
                                    message: "This field is required",
                                 },
                              },
                           },
                           content: {
                              label: { text: "Date of Issue", className: "" },
                              placeHolder: { text: "Enter date of issue", className: "" },
                           },
                           wrapper: {
                              style: { col: { xs: 24, md: 24 } },
                           },
                        },
                        {
                           type: "INPUT",
                           props: {
                              name: "business_pan_number",
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
                           },
                           content: {
                              label: { text: "PAN", className: "" },
                              placeHolder: { text: "Enter PAN number", className: "" },
                           },
                           wrapper: {
                              style: { col: { xs: 24, md: 24 } },
                           },
                        },
                     ],
                  },
               },
            ],
            footer: [],
         },
      },
      {
         type: "BUTTON",
         wrapper: {
            style: { col: { xs: 24, md: 24 } },
            className: "flex justify-end",
         },
         content: {
            label: { text: "Save and Submit", className: "" },
         },
         props: {},
         action: {
            onClick: {
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
                  onSuccess: {
                     // action
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "UPLOAD_DOCUMENT_NESTED",
                        requestType: "DOCUMENT_UPLOAD",
                     },
                  },
                  onError: {
                     // action
                     api: {
                        type: "EXECUTE_ACTION",
                        executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                        requestType: "EXECUTE_ACTION",
                     },
                  },
               },
            },
         },
      },
   ],
};

// const fieldNewNodeStructure = {
//    // common properties for every field
//    name: "gstin_number",
//    label: {
//       text: "GSTIN",
//       className: "text-base font-normal text-title",
//       info: { text: "string | DOM", className: "" },
//       infoText:
//          "GSTIN is a 15 digit number, unique to each GST registered business, used for filing GST returns and other GST-related activities.",
//    },
//    placeholder: {
//       text: "Drag file to this area to upload",
//       className: "block",
//    },
//    // should we rename helperText to extra, as this is the name that antd uses?
//    helperText: {
//       text: "Upload GST certificate document",
//       className: "text-xs font-normal text-subtitle",
//    },
//    type: "DATE_PICKER", // 'INPUT' | 'SELECT' | 'DATE_PICKER' | 'DATE_TIME_PICKER' | 'CHECKBOX' | 'RADIO_BUTTON' | 'TEXT_AREA'
//    format: "YYYY-MM-DD", // string|function
//    isEditable: false,
//    // can we make it an array, instead of an object for the sake of consistency?
//    validation: {
//       required: {
//          isRequired: true,
//          message: "This field is required",
//       },
//       maxLength: {
//          value: 24,
//          message: "Maximum length exceeded",
//       },
//       maxAllowedSize: {
//          size: 5,
//          message: "File size exceeds the allowed limit of 5MB",
//       },
//       allowedTypes: {
//          types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
//          message: "Invalid file type. Allowed types: JPEG, JPG, PNG, PDF",
//       },
//       pattern: {
//          key: "NAME",
//       },
//    },
//    // have kept style and classname inside wrapper, as these belongs to the col/wrapper enclsoing the field/formItem
//    "container/wrapper": {
//       style: {
//          col: {
//             md: 12,
//             xs: 24,
//          },
//       },
//       className: "mb-4",
//    },

//    // for select, selectable list and radio buttons
//    options: [
//       {
//          label: "Andhra Pradesh",
//          value: "Andhra Pradesh",
//          disabled: true,
//          tag: {
//             label: "Status", //style
//             value: true,
//          },
//       },
//       {
//          label: "Arunachal Pradesh",
//          value: "Arunachal Pradesh",
//          disabled: true,
//          tag: {
//             label: "Status",
//             value: true,
//          },
//       },
//    ],
// };

// Done
const actionableLabelNewNodeStructure = {
   type: "ACTIONABLE_LABEL",
   wrapper: {
      style: {
         col: {
            xs: 24,
            md: 24,
         },
      },
   },
   dataSource: {
      defaultPath: "state.genericData", // Path in state or context
   },
   content: {
      label: {
         text: "Showing GST information using GSTIN {gstin_number}",
         className: "text-sm text-subtitle",
         icon: {
            src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
            iconName: "ExclamationCircleFilled",
            style: {
               width: "24px",
               height: "24px",
            },
            className: "screen-header-image",
         },
      },
      actionable: {
         label: {
            text: "Change",
            className: "font-bold",
         },
         props: {
            size: "small",
            type: "link",
            color: "primary",
            variant: "text",
         },
         icon: {
            src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
            iconName: "ExclamationCircleFilled",
            style: {
               width: "24px",
               height: "24px",
            },
            className: "screen-header-image",
         },
         wrapper: {
            style: {
               col: {
                  xs: 24,
                  md: 6,
               },
            },
            className: "flex items-center mb-2",
         },
      },
   },
   action: {
      api: {
         type: "EXECUTE_ACTION",
         executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
         requestType: "EXECUTE_ACTION",
      },
   },
};

// Done
export const listComponentNewNodeStructure = {
   type: "LIST",
   // For now there are only these attrs which are required by the wrapper
   wrapper: {
      //define structure of the wrapper
      style: {
         col: {
            md: 12,
            xs: 24,
         },
      },
      className: "mb-4",
   },
   props: {
      // any props supported by antd
      bordered: false,
      grid: { gutter: 16, column: 12 },
      size: "large",
      pagination: false,
   },
   dataSource: {
      conditions: [
         {
            dependOn: "bank_verification_upload_type",
            operator: "EQUALS",
            value: "upload_cheque",
         },
      ],
      onValidCondition: "state.gstinData",
      onInvalidCondition: "state.gstinData", // Path in state or context
   },
   content: {
      title: {
         text: "GSTIN Data",
         className: "text-base font-normal text-title",
         icon: {
            // list of icons
            src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
            className: "screen-header-image mb-4",
            position: "left",
            style: {
               width: "24px",
               height: "24px",
            },
         },
      },
      // to show any custom component inside the list item
      body: {
         type: "custom", // 'default' | 'custom'
         className: "border-solid border border-border-silver pl-7 py-3 bg-insigniaWhite text-base rounded-md",
         // default: {
         //    avatar: {
         //       className: "text-base font-semibold",
         //       //   for static data
         //       src: "{avatarUrl}",
         //    },
         //    title: {
         //       className: "text-base font-semibold",
         //       // for dynamic data
         //       text: "{name}",
         //    },
         //    description: {
         //       className: "text-sm text-gray-500",
         //       //   for dynamic data
         //       text: "{description}",
         //    },
         // },
         // for custom list behaviour mapping of compoennets, structure would differ according to the component that we need to render
         custom: [
            {
               ...actionableLabelNewNodeStructure,
            },
            {
               ...actionableLabelNewNodeStructure,
            },
         ],
      },
   },
};
// Done
const imageViewerNewNodeStructure = {
   type: "IMAGE_VIEWER",
   wrapper: {
      style: {
         col: {
            xs: 24,
            md: 24,
         },
      },
   },
   props: {
      width: "300px",
      height: "300px",
      preview: true,
      className: "rounded-lg",
      fallback: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
      alt: "GST Verification",
   },
   dataSource: {
      onValidCondition: [], // Path in state or context
      onInvalidCondition: [], // Path in state or context
      condition: [
         {
            dependOn: "bank_verification_upload_type",
            operator: "EQUALS",
            value: "upload_cheque",
         },
      ],
   },
   content: {},
   action: {
      onReupload: {
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
};

// Done
const alertNewNodeStructure = {
   type: "ALERT",
   props: {
      type: "warning",
   },
   wrapper: {
      style: {
         col: {
            xs: 24,
            md: 24,
         },
      },
      className: "ml-1 inline-block flex justify-center",
   },
   dataSource: {
      defaultPath: "state.genericData", // Path in state or context
      value: [], // Optional if static
   },
   content: {
      title: {
         text: "GSTIN Number {gstin_number}",
         className: "text-base font-normal text-title",
      },
      description: {
         text: "GSTIN is a 15 digit number, unique to each GST registered business, used for filing GST returns and other GST-related activities.",
         className: "text-sm font-normal text-subtitle",
      },
      icon: {
         // using src
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         // using icon name
         iconName: "ExclamationCircleFilled",
         className: "screen-header-image",
         position: "left", // left | right respective to the parent container, in this case it will be the alert
         style: {
            width: "24px",
            height: "24px",
         },
      },
   },
};

// Done
export const modalNewNodeStructure = {
   type: "MODAL",
   props: {
      closable: true,
      maskClosable: true,
      className: "modal-class",
      visibilityDependsOn: "discardApplicationVisibilty",
   },
   content: {
      title: {
         text: "Discard Application",
         className: "text-base font-normal text-title",
         icon: {
            src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
            className: "screen-header-image",
            style: {
               width: "24px",
               height: "24px",
            },
         },
      },
      body: [
         {
            type: "ACTIONABLE_LABEL",
            wrapper: {
               style: {
                  col: {
                     xs: 24,
                     md: 24,
                  },
               },
            },
            dataSource: {
               defaultPath: "state.genericData", // Path in state or context
            },
            content: {
               label: {
                  text: "Showing GST information using GSTIN {gstin_number}",
                  className: "text-sm text-subtitle",
                  icon: {
                     src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
                     iconName: "ExclamationCircleFilled",
                     style: {
                        width: "24px",
                        height: "24px",
                     },
                     className: "screen-header-image",
                  },
               },
               actionable: {
                  label: {
                     text: "Change",
                     className: "font-bold",
                  },
                  props: {
                     size: "small",
                     type: "link",
                     color: "primary",
                     variant: "text",
                  },
                  icon: {
                     src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
                     iconName: "ExclamationCircleFilled",
                     style: {
                        width: "24px",
                        height: "24px",
                     },
                     className: "screen-header-image",
                  },
                  wrapper: {
                     style: {
                        col: {
                           xs: 24,
                           md: 12,
                        },
                     },
                     className: "flex items-center mb-2",
                  },
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
         // {
         //    // component structure
         // },
         // {
         //    // form structure
         // },
      ],
      footer: [
         // {
         //    // button structure
         // }
      ],
   },
   action: {
      // // think more around
      // setState: [
      //    {
      //       key: "discardApplicationVisibilty",
      //       value: false,
      //    },
      // ],
      // action structure
   },
};

const formNewNodeStructure = {
   type: "FORM",
   props: {
      layout: "vertical",
      className: "mb-4",
   },
   dataSource: {
      path: "state.genericData", // Path in state or context
   },
   content: {
      title: {
         text: "GSTIN Data",
         className: "text-base font-normal text-title",
         icon: {
            src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
            className: "screen-header-image",
            position: "left",
            style: {
               width: "24px",
               height: "24px",
            },
         },
      },
      fields: [
         {
            // field structure
         },
      ],
   },
   action: {
      label: {
         text: "Save and Submit",
         className: "text-base font-semibold",
      },
      api: {
         type: "EXECUTE_ACTION",
         executeActionType: "SAVE_DATA_ACTION",
         requestType: "EXECUTE_ACTION",
         onSuccess: "",
         onFailure: "",
      },
   },
};

// Done
export const collapsibleListNewNodeStructure = {
   type: "COLLAPSIBLE_LIST",
   props: {
      accordion: true,
      defaultActiveKey: ["1"],
      ghost: true,
      expandIconPosition: "right",
      expandIcon: "ExpansionPanel",
      bordered: true,
      destroyInactivePanel: true,
      size: "small",
   },
   content: {
      items: [
         {
            label: {
               text: "GSTIN Data",
            },
            content: [
               {
                  ...actionableLabelNewNodeStructure,
               },
               {
                  ...actionableLabelNewNodeStructure,
               },
            ],
         },
         {
            label: {
               text: "GSTIN Data",
            },
            content: [
               {
                  ...actionableLabelNewNodeStructure,
               },
               {
                  ...actionableLabelNewNodeStructure,
               },
            ],
         },
      ],
   },
};

const fieldNewNodeStructure2 = {
   type: "INPUT",
   content: {
      label: {
         text: "GSTIN",
         className: "text-base font-normal text-title",
         infoText:
            "GSTIN is a 15 digit number, unique to each GST registered business, used for filing GST returns and other GST-related activities.",
      },
      placeholder: {
         text: "Drag file to this area to upload",
         className: "block",
      },
      // should we rename helperText to extra, as this is the name that antd uses?
      helperText: {
         text: "Upload GST certificate document",
         className: "text-xs font-normal text-subtitle",
      },
      // for select, selectable list and radio buttons
      options: [
         {
            label: "Andhra Pradesh",
            value: "Andhra Pradesh",
            disabled: true,
            tag: {
               label: "Status",
               value: true,
            },
         },
         {
            label: "Arunachal Pradesh",
            value: "Arunachal Pradesh",
            disabled: true,
            tag: {
               label: "Status",
               value: true,
            },
         },
      ],
   },
   props: {
      name: "gstin_number",
      isEditable: false,
      // date level extra configs
      mode: "date",
      format: "YYYY-MM-DD",
      // can we make it an array, instead of an object for the sake of consistency?
      validation: {
         required: {
            isRequired: true,
            message: "This field is required",
         },
         maxLength: {
            value: 24,
            message: "Maximum length exceeded",
         },
         maxAllowedSize: {
            size: 5,
            message: "File size exceeds the allowed limit of 5MB",
         },
         allowedTypes: {
            types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
            message: "Invalid file type. Allowed types: JPEG, JPG, PNG, PDF",
         },
         pattern: {
            key: "NAME",
         },
      },
      customRules: [
         // any functions for handling validation
      ],
   },
   // have kept style and classname inside wrapper, as these belongs to the col/wrapper enclsoing the field/formItem
   wrapper: {
      style: {
         col: {
            md: 12,
            xs: 24,
         },
      },
      className: "mb-4",
   },
};

// Done
export const stepperNewNodeStructure = {
   type: "STEPPER",
   wrapper: {
      style: {
         col: {
            xs: 24,
            md: 24,
         },
      },
   },
   dataSource: {
      onValidCondition: "bank_statement_document_file_urls", // Path in state or context
      // onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
      // condition: {
      //    dependOn: "bank_verification_upload_type",
      //    operator: "EQUALS",
      //    value: "upload_cheque",
      // },
   },
   content: {
      // for static steps,with some dynamic placeholders/values
      //  not required, will be using the onValidCondition and onInvalidCondition to show the steps
      steps: [
         {
            id: "init_gstin_verification",
            name: "Init GSTIN Verification",
            title: {
               text: "{gstin_number}",
               className: "text-base font-normal text-title",
            },
            subtitle: {
               text: "Search your GST Details using GST Number or PAN number",
               className: "text-xs font-normal text-subtitle",
            },
         },
         {
            id: "gstin_data_review_and_submit",
            name: "GSTIN Data Review And Submit",
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
      //for dynamic steps, need a mapper
      // stepResolver: {
      //    title:{
      //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       condition: {
      //          dependOn: "bank_verification_upload_type",
      //          operator: "EQUALS",
      //          value: "upload_cheque",
      //       },
      //       className: "text-base font-normal text-title",
      //    },
      //    subtitle: {
      //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       condition: {
      //          dependOn: "bank_verification_upload_type",
      //          operator: "EQUALS",
      //          value: "upload_cheque",
      //       },
      //       className: "text-xs font-normal text-subtitle",
      //    },
      //    icon: {
      //       src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
      //       className: "screen-header-image",
      //       position: "left",
      //       style: {
      //          width: "24px",
      //          height: "24px",
      //       },
      //    },
      //    disabled:{
      //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       condition: {
      //          dependOn: "bank_verification_upload_type",
      //          operator: "EQUALS",
      //          value: "upload_cheque",
      //       },
      //    },
      //    status:{
      //       onValidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       onInvalidCondition: "bank_statement_document_file_urls", // Path in state or context
      //       condition: {
      //          dependOn: "bank_verification_upload_type",
      //          operator: "EQUALS",
      //          value: "upload_cheque",
      //       },
      //    }
      // }
   },
   action: {
      // action structure
   },
};

// previous structure
// layout -> private -> Home -> Node

// new structure
// instead of having a node as a wrapper, now stepper , will act as a wrapper for the node, if stepper existsx, so that we can implement onChnage of steps
// layout -> private -> Home -> Stepper -> Node -> Components
// stepper
//// node
///// content
/////// components

// Done
// structure of the action which can be performed on any actionable elements , like button, form, modal, list , etc.
const actionNewNodeStructure = {
   eventName: {
      // here eventName is the name of the event on which the action is performed, like onClick, onChange, etc.
      formId: "init_gst_form", // form id for which validation needs to be performed while submittiing.
      setState: [
         {
            key: "discardApplicationVisibilty",
            value: false,
         },
      ],
      api: {
         type: "EXECUTE_ACTION",
         // action that needs to be performed, required in BE
         executeActionType: {
            conditions: [
               {
                  expression: "(A EQUAL B) AND ",
                  dependOn: "bank_verification_upload_type",
                  operator: "EQUALS",
                  value: "upload_cheque",
               },
               {
                  operator: "OR",
               },
               {
                  expression: "(A EQUAL B) AND ",
                  dependOn: "bank_verification_upload_type",
                  operator: "EQUALS",
                  value: "upload_cheque",
               },
            ],
            onTrue: "BANK_STATEMENT_OCR_ACTION",
            onFalse: "CHEQUE_OCR_ACTION",
         },
         // request that needs to be called
         requestType: {
            condition: {
               dependOn: "upload_business_required_legal_proof",
               operator: "EQUALS",
               value: "udyam_certificate_document_file",
            },
            default: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
            onValidCondition: "EXECUTE_ACTION",
         },
         // params that needs to be passed in the request
         params: [
            {
               condition: {
                  dependOn: "bank_verification_upload_type",
                  operator: "EQUALS",
                  value: "upload_cheque",
               },
               default: "bank_statement_document_file",
               onValidCondition: "cheque_document_file",
               key: "file_key",
            },
         ],
      },
   },
};

// Node -> Content -> Will Render -> Component -> Form(-> Fields)/ActionableLabel/Alert/Stepper/List/ImageViewer/Modal/CollapsibleList
// Need to decouple the form submission and field validation from the form component
//// We can create an FormContextManager to manage all the form ref at a single place and provide the context at the Node level.
// Need to have an action handler , which will take action object and attach all the actions to the component/element.
//// Actions will be inside both the component/element.
// Need to have a data source handler, which will take  and attach all the data to the component/element.

export const init_gstin_details_new = {
   id: "init_gstin_details",
   name: "Init GSTIN Details",
   header: {
      title: { text: "Verify GSTIN Details", className: "text-md font-semibold text-title" },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         // className: "screen-header-image",
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
   layout: [
      {
         type: "FORM",
         formId: "init_gstin_details_form",
         wrapper: {
            style: { col: { xs: 24, md: 12 } },
         },
         props: {
            layout: "vertical",
            style: { col: { xs: 24, md: 24 } },
            requiredMark: true,
         },
         content: {
            fields: [
               {
                  type: "RADIO_GROUP",
                  wrapper: {
                     style: { col: { xs: 24, md: 24 } },
                  },
                  props: {
                     name: "gstin_document_present",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                     direction: "horizontal",
                     size: 16,
                  },
                  content: {
                     label: { text: "Do you have GSTIN for your business?", className: "font-medium text-title" },
                     options: [
                        {
                           label: {
                              text: "Yes, I have GSTIN",
                              className: "text-subtitle",
                           },
                           value: true,
                        },
                        {
                           label: {
                              text: "No, I don’t have GSTIN",
                              className: "text-subtitle",
                           },
                           value: false,
                        },
                     ],
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: true,
                        },
                     ],
                  },
                  props: {
                     name: "gstin_document_file",
                     isEditable: true,

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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload Address Proof", className: "text-subtitle" },
                     helperText: {
                        text: "The “Legal Name” in the GST document should match with the PAN name",
                        className: "text-xs font-normal text-subtitle",
                     },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "RADIO_GROUP",
                  wrapper: {
                     style: { col: { xs: 24, md: 24 } },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: false,
                        },
                     ],
                  },
                  props: {
                     name: "gstin_reason",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                     size: 16,
                  },
                  content: {
                     label: {
                        text: "Please select the reason below that best explains why your business does not have a GST registration.",
                        className: "font-medium text-title",
                     },
                     options: [
                        {
                           label: {
                              text: "My annual turnover is less than GST prescribed limit",
                              className: "text-subtitle",
                           },
                           value: "My annual turnover is less than GST prescribed limit",
                        },
                        {
                           label: {
                              text: "My business category is exempted from GST",
                              className: "text-subtitle",
                           },
                           value: "My business category is exempted from GST",
                        },
                     ],
                  },
               },
               {
                  type: "DIVIDER",
                  props: {
                     className: "mt-2 mb-4",
                  },
               },
               {
                  type: "RADIO_GROUP",
                  wrapper: {
                     style: { col: { xs: 24, md: 24 } },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: true,
                        },
                     ],
                  },
                  props: {
                     name: "is_gstin_operational_address_same",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                     direction: "horizontal",
                     size: 16,
                  },
                  content: {
                     label: {
                        text: "Is your operational address the same as the GST registered Principal and/or Additional address?",
                        className: "font-medium text-title",
                     },
                     options: [
                        {
                           label: {
                              text: "Yes, it’s same",
                              className: "text-subtitle",
                           },
                           value: true,
                        },
                        {
                           label: {
                              text: "No, it’s different",
                              className: "text-subtitle",
                           },
                           value: false,
                        },
                     ],
                  },
               },
               {
                  type: "SELECT",
                  props: {
                     name: "gstin_address_proof_document_type",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_operational_address_same",
                           operator: "EQUALS",
                           value: false,
                        },
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: true,
                        },
                     ],
                  },
                  content: {
                     label: { text: "Select Address Proof", className: "text-subtitle" },
                     placeHolder: { text: "Select Any One Document", className: "" },
                     options: [
                        {
                           label: "Electricity Bill",
                           value: "Electricity Bill",
                        },
                        {
                           label: "Telephone Bill",
                           value: "Telephone Bill",
                        },
                        {
                           label: "Rent Agreement",
                           value: "Rent Agreement",
                        },
                        {
                           label: "Other",
                           value: "Other",
                        },
                     ],
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 8 } },
                  },
               },
               {
                  type: "UPLOAD",
                  props: {
                     name: "gstin_address_proof_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_operational_address_same",
                           operator: "EQUALS",
                           value: false,
                        },
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: true,
                        },
                     ],
                  },
                  content: {
                     label: { text: "Upload Address Proof", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
            ],
         },
      },
      {
         type: "BUTTON",
         wrapper: {
            style: { col: { xs: 24, md: 24 } },
            className: "flex justify-center",
         },
         content: {
            label: { text: "Save and Proceed", className: "text-white" },
         },
         props: {
            className: "px-6 py-0",
            type: "primary",
         },
         action: {
            onClick: {
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
                  formId: "init_gstin_details_form",
               },
            },
         },
      },
   ],
};

export const init_roc_details_fetch_new = {
   id: "init_roc_details_fetch",
   name: "Init ROC Details Fetch",
   header: {
      title: { text: "Verify ROC Details", className: "text-md font-semibold text-title" },
      subtitle: {
         text: "Enter your CIN to fetch company details and verify information",
         className: "text-xs font-normal text-subtitle",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/roc-details-thumbnail.png",
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
   layout: [
      {
         type: "STEPPER",
         wrapper: {
            className: "mx-auto",
            style: {
               className: "block",
               col: {
                  xs: 24,
                  md: 12,
               },
            },
         },
         content: {
            steps: [
               {
                  id: "init_roc_details_fetch",
                  name: "Init ROC Details Fetch",
                  title: {
                     text: "Input CIN Number",
                     className: "text-base font-normal text-title",
                  },
               },
               {
                  id: "roc_details_review_and_submit",
                  name: "ROC Details Review and Submit",
                  title: {
                     text: "Review and Proceed",
                     className: "text-base font-normal text-title",
                  },
               },
            ],
         },
      },
      {
         type: "FORM",
         formId: "init_gstin_details_form",
         wrapper: {
            style: { col: { xs: 24, md: 13 } },
         },
         props: {
            layout: "vertical",
            style: { col: { xs: 24, md: 24 } },
            requiredMark: true,
         },
         content: {
            fields: [
               {
                  type: "INPUT",
                  wrapper: {
                     style: { col: { xs: 24, md: 8 } },
                  },
                  props: {
                     name: "gstin_document_present",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                     direction: "horizontal",
                     size: 16,
                  },
                  content: {
                     label: { text: "CIN Number", className: "text-subtitle" },
                     placeHolder: { text: "Enter CIN Number", className: "" },
                  },
               },
            ],
         },
      },
      {
         type: "BUTTON",
         wrapper: {
            style: { col: { xs: 24, md: 24 } },
            className: "flex justify-center",
         },
         content: {
            label: { text: "Save and Proceed", className: "text-white" },
         },
         props: {
            className: "px-6 py-0",
            type: "primary",
         },
         action: {
            onClick: {
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
                  formId: "init_gstin_details_form",
               },
            },
         },
      },
   ],
};

export const roc_details_review_and_submit_new = {
   id: "roc_details_review_and_submit",
   name: "ROC Details Review and Submit",
   header: {
      title: { text: "Verify ROC Details", className: "text-md font-semibold text-title" },
      subtitle: {
         text: "Enter your CIN to fetch company details and verify information",
         className: "text-xs font-normal text-subtitle",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/roc-details-thumbnail.png",
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
   layout: [
      {
         type: "STEPPER",
         wrapper: {
            className: "mx-auto",
            style: {
               className: "block",
               col: {
                  xs: 24,
                  md: 12,
               },
            },
         },
         content: {
            steps: [
               {
                  id: "init_roc_details_fetch",
                  name: "Init ROC Details Fetch",
                  title: {
                     text: "Input CIN Number",
                     className: "text-base font-normal text-title",
                  },
               },
               {
                  id: "roc_details_review_and_submit",
                  name: "ROC Details Review and Submit",
                  title: {
                     text: "Review and Proceed",
                     className: "text-base font-normal text-title",
                  },
               },
            ],
         },
      },
      {
         type: "TEXT",
         wrapper: {
            className: "mb-4",
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
         },
         props: {},
         content: {
            label: {
               text: "Showing company details of HANDY ONLINE SOLUTIONS PRIVATE LIMITED  using CIN 21AAACD1234EAAA",
               className: "text-sm text-subtitle",
            },
         },
      },
      {
         type: "COLLAPSIBLE_LIST",
         props: {
            accordion: true,
            defaultActiveKey: ["1"],
            expandIconPosition: "end",
            expandIcon: "ExpansionPanel",
            bordered: true,
            destroyInactivePanel: true,
            size: "small",
         },
         wrapper: {
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
         },
         content: {
            items: [
               {
                  label: {
                     text: "Company Details",
                  },
                  content: [
                     {
                        type: "FORM",
                        formId: "init_gstin_details_form",
                        wrapper: {
                           style: { col: { xs: 24, md: 13 } },
                        },
                        props: {
                           layout: "vertical",
                           style: { col: { xs: 24, md: 24 } },
                        },
                        content: {
                           fields: [
                              {
                                 type: "INPUT",
                                 wrapper: {
                                    style: { col: { xs: 24, md: 8 } },
                                 },
                                 props: {
                                    name: "gstin_document_present",
                                    isEditable: false,
                                    validation: {
                                       required: {
                                          isRequired: true,
                                          message: "This field is required",
                                       },
                                    },
                                    direction: "horizontal",
                                    size: 16,
                                    variant: "borderless",
                                 },
                                 content: {
                                    label: { text: "CIN Number", className: "text-subtitle" },
                                    placeHolder: { text: "Enter CIN Number", className: "" },
                                 },
                              },
                           ],
                        },
                     },
                  ],
               },
            ],
         },
      },
      {
         type: "COLLAPSIBLE_LIST",
         props: {
            accordion: true,
            defaultActiveKey: ["1"],
            expandIconPosition: "end",
            expandIcon: "ExpansionPanel",
            bordered: true,
            destroyInactivePanel: true,
            size: "small",
         },
         wrapper: {
            className: "mt-4",
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
         },
         content: {
            items: [
               {
                  label: {
                     text: "Company Details",
                  },
                  content: [
                     {
                        type: "TABLE",
                        wrapper: {
                           style: { col: { xs: 24, md: 24 } },
                        },
                        props: {
                           columns: [
                              {
                                 title: "Name",
                                 dataIndex: "name",
                                 key: "name",
                                 width: "30%",
                              },
                              {
                                 title: "Designation",
                                 dataIndex: "designation",
                                 key: "designation",
                                 width: "30%",
                              },
                              {
                                 title: "DIN Number",
                                 dataIndex: "din_number",
                                 key: "din_number",
                                 width: "30%",
                              },
                           ],
                        },
                     },
                  ],
               },
            ],
         },
      },
   ],
};

export const provide_business_proof_new = {
   id: "provide_business_proof",
   name: "Provide Business Proof",
   header: {
      title: { text: "Provide Business Proof", className: "text-md font-semibold text-title" },
      subtitle: {
         text: "Upload valid document(s) from the provided list.",
         className: "text-xs font-normal text-subtitle",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/roc-details-thumbnail.png",
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
   layout: [
      {
         type: "FORM",
         formId: "provide_business_proof_form",
         wrapper: {
            style: { col: { xs: 24, md: 24 } },
         },
         props: {
            layout: "vertical",
            style: { col: { xs: 24, md: 24 } },
            requiredMark: true,
         },
         dataSource: {
            onValidCondition: "data.generic_data",
         },
         content: {
            fields: [
               {
                  type: "SELECT",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: true,
                        },
                     ],
                  },
                  props: {
                     name: "business_proof_1st_document_type",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                  },
                  content: {
                     label: { text: "Select Document", className: "text-subtitle" },
                     placeHolder: { text: "Select Any One Document", className: "" },
                     options: [
                        {
                           label: "Certificate/Registration Document",
                           value: "Certificate/Registration Document",
                        },
                        {
                           label: "Complete Income Tax Return",
                           value: "Complete Income Tax Return",
                        },
                        {
                           label: "CST/VAT/GST Certificate",
                           value: "CST/VAT/GST Certificate",
                        },
                        {
                           label: "Importer Exporter Code (IEC)",
                           value: "Importer Exporter Code (IEC)",
                        },
                        {
                           label: "Sales and Income Tax Returns",
                           value: "Sales and Income Tax Returns",
                        },
                        {
                           label: "Shop and Establishment Certificate",
                           value: "Shop and Establishment Certificate",
                        },
                        {
                           label: "Registration Certificate",
                           value: "Registration Certificate",
                        },
                        {
                           label: "Utility Bills",
                           value: "Utility Bills",
                        },
                     ],
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 8 } },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: true,
                        },
                     ],
                  },
                  props: {
                     name: "business_proof_1st_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload Document", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "SELECT",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: false,
                        },
                     ],
                  },
                  props: {
                     name: "business_proof_1st_document_type",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                  },
                  content: {
                     label: { text: "Select Document 1", className: "text-subtitle" },
                     placeHolder: { text: "Select Any One Document", className: "" },
                     options: [
                        {
                           label: "Certificate/Registration Document",
                           value: "Certificate/Registration Document",
                        },
                        {
                           label: "Complete Income Tax Return",
                           value: "Complete Income Tax Return",
                        },
                        {
                           label: "CST/VAT/GST Certificate",
                           value: "CST/VAT/GST Certificate",
                        },
                        {
                           label: "Importer Exporter Code (IEC)",
                           value: "Importer Exporter Code (IEC)",
                        },
                        {
                           label: "Sales and Income Tax Returns",
                           value: "Sales and Income Tax Returns",
                        },
                        {
                           label: "Shop and Establishment Certificate",
                           value: "Shop and Establishment Certificate",
                        },
                        {
                           label: "Registration Certificate",
                           value: "Registration Certificate",
                        },
                        {
                           label: "Utility Bills",
                           value: "Utility Bills",
                        },
                     ],
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 8 } },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: false,
                        },
                     ],
                  },
                  props: {
                     name: "business_proof_1st_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload Document 1", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "DIVIDER",

                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: false,
                        },
                     ],
                  },
                  props: {
                     className: "mt-2 mb-4",
                  },
               },
               {
                  type: "SELECT",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: false,
                        },
                     ],
                  },
                  props: {
                     name: "business_proof_2nd_document_type",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                  },
                  content: {
                     label: { text: "Select Document 2", className: "text-subtitle" },
                     placeHolder: { text: "Select Any One Document", className: "" },
                     options: [
                        {
                           label: "Certificate/Registration Document",
                           value: "Certificate/Registration Document",
                        },
                        {
                           label: "Complete Income Tax Return",
                           value: "Complete Income Tax Return",
                        },
                        {
                           label: "CST/VAT/GST Certificate",
                           value: "CST/VAT/GST Certificate",
                        },
                        {
                           label: "Importer Exporter Code (IEC)",
                           value: "Importer Exporter Code (IEC)",
                        },
                        {
                           label: "Sales and Income Tax Returns",
                           value: "Sales and Income Tax Returns",
                        },
                        {
                           label: "Shop and Establishment Certificate",
                           value: "Shop and Establishment Certificate",
                        },
                        {
                           label: "Registration Certificate",
                           value: "Registration Certificate",
                        },
                        {
                           label: "Utility Bills",
                           value: "Utility Bills",
                        },
                     ],
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 8 } },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "gstin_document_present",
                           operator: "EQUALS",
                           value: false,
                        },
                     ],
                  },
                  props: {
                     name: "business_proof_2nd_document_file",
                     isEditable: true,

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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload Document 1", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
            ],
         },
      },
      {
         type: "BUTTON",
         wrapper: {
            style: { col: { xs: 24, md: 24 } },
            className: "flex justify-center",
         },
         content: {
            label: { text: "Save and Proceed", className: "text-white" },
         },
         props: {
            className: "px-6 py-0",
            type: "primary",
         },
         action: {
            onClick: {
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
                  formId: "init_gstin_details_form",
               },
            },
         },
      },
   ],
};

export const init_business_owner_id_proof_verification_new = {
   id: "init_business_owner_id_proof_verification",
   name: "Init Business Owner ID Proof Verification",
   header: {
      title: { text: "Verify Business Owner ID Proof", className: "text-md font-semibold text-title" },
      subtitle: {
         text: "Provide a valid Identity proof of the Business Owner.",
         className: "text-xs font-normal text-subtitle",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/roc-details-thumbnail.png",
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
   layout: [
      {
         type: "STEPPER",
         wrapper: {
            className: "mx-auto",
            style: {
               className: "block",
               col: {
                  xs: 24,
                  md: 12,
               },
            },
         },
         content: {
            steps: [
               {
                  id: "init_business_owner_id_proof_verification",
                  name: "Init Business Owner ID Proof Verification",
                  title: {
                     text: "Upload ID Proof",
                     className: "text-base font-normal text-title",
                  },
               },
               {
                  id: "business_owner_id_proof_review_and_submit",
                  name: "Business Owner ID Proof Review and Verification",
                  title: {
                     text: "Review and Proceed",
                     className: "text-base font-normal text-title",
                  },
               },
            ],
         },
      },
      {
         type: "FORM",
         formId: "init_business_owner_id_proof_verification_form",
         wrapper: {
            style: { col: { xs: 24, md: 24 } },
         },
         props: {
            layout: "vertical",
            style: { col: { xs: 24, md: 24 } },
            requiredMark: true,
         },
         content: {
            fields: [
               {
                  type: "SELECT",
                  props: {
                     name: "business_owner_id_verification_document_type",
                     isEditable: true,
                     validation: {
                        required: {
                           isRequired: true,
                           message: "This field is required",
                        },
                     },
                  },
                  content: {
                     label: { text: "Select ID Proof", className: "text-subtitle" },
                     placeHolder: { text: "Select any one document", className: "" },
                     options: [
                        {
                           label: "Aadhaar",
                           value: "Aadhaar",
                        },
                        {
                           label: "Driving License",
                           value: "Driving License",
                        },
                        {
                           label: "Voter ID",
                           value: "Voter ID",
                        },
                        {
                           label: "Passport",
                           value: "Passport",
                        },
                     ],
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 8 } },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Aadhaar",
                        },
                     ],
                  },
                  props: {
                     name: "aadhaar_document_file_1",
                     fileKey: "aadhaar_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Front Side of Aadhaar", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Aadhaar",
                        },
                     ],
                  },
                  props: {
                     name: "aadhaar_document_file_2",
                     fileKey: "aadhaar_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Back Side of Aadhaar", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Driving License",
                        },
                     ],
                  },
                  props: {
                     name: "dl_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Front Side of Driving License", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Driving License",
                        },
                     ],
                  },
                  props: {
                     name: "dl_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Back Side of Driving License", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Voter ID",
                        },
                     ],
                  },
                  props: {
                     name: "voter_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Front Side of Voter ID", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Voter ID",
                        },
                     ],
                  },
                  props: {
                     name: "voter_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Back Side of Voter ID", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Passport",
                        },
                     ],
                  },
                  props: {
                     name: "passport_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Front Side of Passport", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "UPLOAD",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Passport",
                        },
                     ],
                  },
                  props: {
                     name: "passport_document_file",
                     isEditable: true,
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
                     mode: "DRAG_AND_DROP",
                  },
                  content: {
                     label: { text: "Upload the Back Side of Passport", className: "text-subtitle" },
                     title: {
                        text: "Drag and drop or click 'Choose File' to upload",
                        className: "text-subtitle text-[12px]",
                     },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "text-subtitle text-[10px]",
                     },
                  },
                  wrapper: {
                     style: { col: { xs: 24, md: 12 } },
                  },
                  action: {
                     onUpload: {
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "BUSINESS_PAN_VERIFY_ACTION",
                           requestType: "EXECUTE_ACTION",
                           formId: "init_gstin_details_form",
                           fileKey: "business_pan_document_file",
                        },
                     },
                  },
               },
               {
                  type: "ALERT",
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_owner_id_verification_document_type",
                           operator: "EQUALS",
                           value: "Aadhaar",
                        },
                     ],
                  },
                  props: {
                     type: "warning",
                     className: "px-3 py-2 flex items-center",
                  },
                  wrapper: {
                     style: {
                        col: {
                           xs: 24,
                           md: 24,
                        },
                     },
                  },
                  content: {
                     title: {
                        text: "To verify Aadhaar details, you’ll need to enter an OTP, which will be sent to the mobile number linked to the Aadhaar.",
                        className: "text-[#AD8B00]",
                     },
                  },
               },
            ],
         },
      },
   ],
};

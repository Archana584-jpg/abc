export const init_gstin_details = {
   id: "init_gstin_details",
   name: "Init GSTIN Details",
   description: {
      title: {
         text: "Verify GSTIN Details",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details using PAN or GSTIN, or enter your business details if you don't have a GSTIN.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
      action: {
         icon: {
            src: "",
            className: "text-xl cursor-pointer mr-2",
            key: "ArrowLeftOutlined",
         },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   node: {
      content: {
         form: {
            properties: {
               layout: "vertical",
            },
            style: {
               col: {
                  md: 23,
                  xs: 24,
               },
            },
            fields: [
               {
                  name: "gstin_document_present",
                  label: {
                     text: "Do you have GSTIN for your business?",
                     className: "text-base text-title",
                  },
                  size: 8,
                  direction: "vertical",
                  options: [
                     {
                        label: "Yes",
                        value: "true",
                     },
                     {
                        label: "No",
                        value: "false",
                     },
                  ],
                  type: "RADIO_GROUP",
                  preserve: true,
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
            ],
            action: {
               label: {
                  text: "Next",
                  className: "text-base",
               },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const save_gst_business_details = {
   id: "save_gst_business_details",
   name: "GST Business Details",
   description: {
      title: {
         text: "Verify GSTIN Details",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details using PAN or GSTIN, or enter your business details if you don't have a GSTIN.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
      action: {
         icon: {
            src: "",
            className: "text-xl cursor-pointer mr-2",
            key: "ArrowLeftOutlined",
         },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   node: {
      content: {
         form: {
            properties: {
               layout: "vertical",
            },
            style: {
               col: {
                  md: 23,
                  xs: 24,
               },
            },
            fields: [
               {
                  name: "gst_reason",
                  label: {
                     text: "Which option best represents your business?",
                     className: "text-base text-title",
                  },
                  size: 8,
                  direction: "vertical",
                  options: [
                     {
                        label: "My annual turnover is less than GST prescribed limit",
                        value: "My annual turnover is less than GST prescribed limit",
                     },
                     {
                        label: "My business category is exempted from GST",
                        value: "My business category is exempted from GST",
                     },
                  ],
                  type: "RADIO_GROUP",
                  preserve: true,
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_business_registered_name",
                  label: {
                     text: "Business Registered Name",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type business registered name",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_business_address",
                  label: {
                     text: "Business Address",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type business address",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "INPUT",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_pincode",
                  label: {
                     text: "Pincode",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type pincode",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_city",
                  label: {
                     text: "City",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type city name",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_country",
                  label: {
                     text: "Country",
                     className: "",
                  },
                  placeHolder: {
                     text: "Select country",
                     className: "",
                  },
                  helperText: {
                     text: "",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
                  type: "SELECT",
                  options: [
                     {
                        label: "India",
                        value: "India",
                     },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_state",
                  label: {
                     text: "State",
                     className: "",
                  },
                  placeHolder: {
                     text: "Select state",
                     className: "",
                  },
                  helperText: {
                     text: "",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "SELECT",
                  options: [
                     {
                        label: "Andhra Pradesh",
                        value: "Andhra Pradesh",
                     },
                     {
                        label: "Arunachal Pradesh",
                        value: "Arunachal Pradesh",
                     },
                     {
                        label: "Assam",
                        value: "Assam",
                     },
                     {
                        label: "Bihar",
                        value: "Bihar",
                     },
                     {
                        label: "Chhattisgarh",
                        value: "Chhattisgarh",
                     },
                     {
                        label: "Goa",
                        value: "Goa",
                     },
                     {
                        label: "Gujarat",
                        value: "Gujarat",
                     },
                     {
                        label: "Haryana",
                        value: "Haryana",
                     },
                     {
                        label: "Himachal Pradesh",
                        value: "Himachal Pradesh",
                     },
                     {
                        label: "Jharkhand",
                        value: "Jharkhand",
                     },
                     {
                        label: "Karnataka",
                        value: "Karnataka",
                     },
                     {
                        label: "Kerala",
                        value: "Kerala",
                     },
                     {
                        label: "Madhya Pradesh",
                        value: "Madhya Pradesh",
                     },
                     {
                        label: "Maharashtra",
                        value: "Maharashtra",
                     },
                     {
                        label: "Manipur",
                        value: "Manipur",
                     },
                     {
                        label: "Meghalaya",
                        value: "Meghalaya",
                     },
                     {
                        label: "Mizoram",
                        value: "Mizoram",
                     },
                     {
                        label: "Nagaland",
                        value: "Nagaland",
                     },
                     {
                        label: "Odisha",
                        value: "Odisha",
                     },
                     {
                        label: "Punjab",
                        value: "Punjab",
                     },
                     {
                        label: "Rajasthan",
                        value: "Rajasthan",
                     },
                     {
                        label: "Sikkim",
                        value: "Sikkim",
                     },
                     {
                        label: "Tamil Nadu",
                        value: "Tamil Nadu",
                     },
                     {
                        label: "Telangana",
                        value: "Telangana",
                     },
                     {
                        label: "Tripura",
                        value: "Tripura",
                     },
                     {
                        label: "Uttar Pradesh",
                        value: "Uttar Pradesh",
                     },
                     {
                        label: "Uttarakhand",
                        value: "Uttarakhand",
                     },
                     {
                        label: "West Bengal",
                        value: "West Bengal",
                     },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
            ],
            action: {
               label: {
                  text: "Next",
                  className: "text-base",
               },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const init_gstin_verification = {
   id: "init_gstin_verification",
   name: "Init GSTIN Verification",
   description: {
      title: {
         text: "GST Verification",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details by providing a PAN number or GSTIN, alongwith upload the GST certificate document",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
      action: {
         icon: {
            src: "",
            className: "text-xl cursor-pointer mr-2",
            key: "ArrowLeftOutlined",
         },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_gstin_verification",
         name: "Init GSTIN Verification",
         title: {
            text: "Input your GST Details",
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
   node: {
      content: {
         form: {
            properties: {
               layout: "vertical",
            },
            style: {
               col: {
                  md: 23,
                  xs: 24,
               },
            },
            fields: [
               {
                  name: "is_gstin_verification_using_pan",
                  preserve: true,
                  label: {
                     text: "Choose one of the options to search GST details",
                     className: "text-base text-title",
                  },
                  size: 8,
                  direction: "vertical",
                  options: [
                     {
                        label: "Using GST Number",
                        value: "false",
                     },
                     {
                        label: "Using PAN",
                        value: "true",
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
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_number",
                  preserve: true,
                  label: {
                     text: "GST Number",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type your GST Number",
                     className: "xs:text-xs md:text-sm lg:text-base",
                  },
                  helperText: {
                     text: "Note: Please enter the GSTIN linked to your company's registered office Location.",
                     className: "",
                  },
                  className: "w-full",
                  type: "INPUT",
                  isEditable: true,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "EQUALS",
                           value: "false",
                        },
                     ],
                  },
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "GSTIN_NUMBER",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "business_pan_number",
                  preserve: true,
                  label: {
                     text: "PAN",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type your PAN",
                     className: "",
                  },
                  className: "w-full",
                  type: "INPUT",
                  isEditable: false,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "PAN_NUMBER",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_state",
                  preserve: true,
                  label: {
                     text: "",
                     className: "",
                  },
                  placeHolder: {
                     text: "Select state",
                     className: "",
                  },
                  helperText: {
                     text: "Note: Please select the State where your company's registered office is located.",
                     className: "",
                  },
                  className: "w-full",
                  type: "SELECT",
                  options: [
                     {
                        label: "Andhra Pradesh",
                        value: "Andhra Pradesh",
                     },
                     {
                        label: "Arunachal Pradesh",
                        value: "Arunachal Pradesh",
                     },
                     {
                        label: "Assam",
                        value: "Assam",
                     },
                     {
                        label: "Bihar",
                        value: "Bihar",
                     },
                     {
                        label: "Chhattisgarh",
                        value: "Chhattisgarh",
                     },
                     {
                        label: "Goa",
                        value: "Goa",
                     },
                     {
                        label: "Gujarat",
                        value: "Gujarat",
                     },
                     {
                        label: "Haryana",
                        value: "Haryana",
                     },
                     {
                        label: "Himachal Pradesh",
                        value: "Himachal Pradesh",
                     },
                     {
                        label: "Jharkhand",
                        value: "Jharkhand",
                     },
                     {
                        label: "Karnataka",
                        value: "Karnataka",
                     },
                     {
                        label: "Kerala",
                        value: "Kerala",
                     },
                     {
                        label: "Madhya Pradesh",
                        value: "Madhya Pradesh",
                     },
                     {
                        label: "Maharashtra",
                        value: "Maharashtra",
                     },
                     {
                        label: "Manipur",
                        value: "Manipur",
                     },
                     {
                        label: "Meghalaya",
                        value: "Meghalaya",
                     },
                     {
                        label: "Mizoram",
                        value: "Mizoram",
                     },
                     {
                        label: "Nagaland",
                        value: "Nagaland",
                     },
                     {
                        label: "Odisha",
                        value: "Odisha",
                     },
                     {
                        label: "Punjab",
                        value: "Punjab",
                     },
                     {
                        label: "Rajasthan",
                        value: "Rajasthan",
                     },
                     {
                        label: "Sikkim",
                        value: "Sikkim",
                     },
                     {
                        label: "Tamil Nadu",
                        value: "Tamil Nadu",
                     },
                     {
                        label: "Telangana",
                        value: "Telangana",
                     },
                     {
                        label: "Tripura",
                        value: "Tripura",
                     },
                     {
                        label: "Uttar Pradesh",
                        value: "Uttar Pradesh",
                     },
                     {
                        label: "Uttarakhand",
                        value: "Uttarakhand",
                     },
                     {
                        label: "West Bengal",
                        value: "West Bengal",
                     },
                  ],
                  isEditable: true,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_document_file",
                  placeHolder: {
                     text: "Upload GST document",
                     className: "lg:text-sm lg:text-title xs:text-xs",
                  },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 3MB",
                     className: "text-xs text-subtitle",
                  },
                  type: "UPLOAD",
                  isEditable: true,
                  multiple: false,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "IS_NOT_EMPTY",
                        },
                     ],
                  },
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
                        types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                        message: "Please check the file type",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
                  action: {
                     label: {
                        text: "Browse File",
                        className: "",
                     },
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "gstin_document_file",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                     },
                  },
               },
            ],
            action: {
               label: {
                  text: "Fetch Details",
                  className: "text-base",
               },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: {
                     condition: {
                        dependOn: "is_gstin_verification_using_pan",
                        operator: "EQUALS",
                        value: "true",
                     },
                     onSuccess: "GSTIN_BY_PAN_ACTION",
                     onFailure: "GSTIN_DETAILED_ACTION",
                  },
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const gstin_data_review_and_submit = {
   id: "gstin_data_review_and_submit",
   name: "GSTIN Data Review And Submit",
   description: {
      title: {
         text: "GST Verification",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details by providing a PAN number or GSTIN, alongwith upload the GST certificate document",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
      action: {
         icon: {
            src: "",
            className: "text-xl cursor-pointer mr-2",
            key: "ArrowLeftOutlined",
         },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_gstin_verification",
         name: "Init GSTIN Verification",
         title: {
            text: "Input your GST Details",
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
   node: {
      content: {
         components: {
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
            contents: [
               {
                  type: "TEXT_BUTTON",
                  style: {
                     col: {
                        xs: 24,
                        md: 24,
                     },
                  },
                  className: "flex items-center mb-2",
                  content: {
                     label: {
                        text: "Showing GST information using GSTIN {gstin_number}",
                        className: "text-sm text-subtitle",
                     },
                     action: {
                        label: {
                           text: "Change",
                           className: "font-bold",
                        },
                        style: {
                           color: "primary",
                           type: "link",
                           col: {
                              xs: 24,
                              md: 6,
                           },
                        },
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                           requestType: "EXECUTE_ACTION",
                        },
                     },
                  },
               },
            ],
         },
         form: {
            properties: {
               layout: "vertical",
            },
            fields: [
               {
                  name: "gstin_number",
                  label: {
                     text: "GSTIN",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
                  type: "INPUT",
                  isEditable: false,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "GSTIN_NUMBER",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_date_of_registration",
                  label: {
                     text: "Registration Date",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "DATE",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_legal_name",
                  label: {
                     text: "Legal Name",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_trade_name",
                  label: {
                     text: "Trade Name",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_principal_address",
                  label: {
                     text: "Address",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_type",
                  label: {
                     text: "Type",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: false,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
            ],
            action: {
               label: {
                  text: "Save and Submit",
                  className: "text-base",
               },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const init_gstin_verification_proprietorship = {
   id: "init_gstin_verification_proprietorship",
   name: "Init GSTIN Verification",
   description: {
      title: {
         text: "GST Verification",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details by providing a PAN number or GSTIN, alongwith upload the GST certificate document",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
      action: {
         icon: {
            src: "",
            className: "text-xl cursor-pointer mr-2",
            key: "ArrowLeftOutlined",
         },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_gstin_verification_proprietorship",
         name: "Init GSTIN Verification",
         title: {
            text: "Input your GST Details",
            className: "text-base font-normal text-title",
         },
         subtitle: {
            text: "Search your GST Details using GST Number or PAN number",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "gstin_data_review_and_submit_proprietorship",
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
   node: {
      content: {
         form: {
            properties: {
               layout: "vertical",
            },
            style: {
               col: {
                  md: 23,
                  xs: 24,
               },
            },
            fields: [
               {
                  name: "is_gstin_verification_using_pan",
                  preserve: true,
                  label: {
                     text: "Choose one of the options to search GST details",
                     className: "text-base text-title",
                  },
                  size: 8,
                  direction: "vertical",
                  options: [
                     {
                        label: "Using GST Number",
                        value: "false",
                     },
                     {
                        label: "Using PAN",
                        value: "true",
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
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_number",
                  preserve: true,
                  label: {
                     text: "GST Number",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type your GST Number",
                     className: "",
                  },
                  helperText: {
                     text: "Note: Please enter the GSTIN linked to your company's registered office Location.",
                     className: "",
                  },
                  className: "w-full",
                  type: "INPUT",
                  isEditable: true,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "EQUALS",
                           value: "false",
                        },
                     ],
                  },
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "GSTIN_NUMBER",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "individual_pan_number",
                  preserve: true,
                  label: {
                     text: "PAN",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type your PAN",
                     className: "",
                  },
                  className: "w-full",
                  type: "INPUT",
                  isEditable: false,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "PAN_NUMBER",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_state",
                  preserve: true,
                  label: {
                     text: "",
                     className: "",
                  },
                  placeHolder: {
                     text: "Select state",
                     className: "",
                  },
                  helperText: {
                     text: "Note: Please select the State where your company's registered office is located.",
                     className: "",
                  },
                  className: "w-full",
                  type: "SELECT",
                  options: [
                     {
                        label: "Andhra Pradesh",
                        value: "Andhra Pradesh",
                     },
                     {
                        label: "Arunachal Pradesh",
                        value: "Arunachal Pradesh",
                     },
                     {
                        label: "Assam",
                        value: "Assam",
                     },
                     {
                        label: "Bihar",
                        value: "Bihar",
                     },
                     {
                        label: "Chhattisgarh",
                        value: "Chhattisgarh",
                     },
                     {
                        label: "Goa",
                        value: "Goa",
                     },
                     {
                        label: "Gujarat",
                        value: "Gujarat",
                     },
                     {
                        label: "Haryana",
                        value: "Haryana",
                     },
                     {
                        label: "Himachal Pradesh",
                        value: "Himachal Pradesh",
                     },
                     {
                        label: "Jharkhand",
                        value: "Jharkhand",
                     },
                     {
                        label: "Karnataka",
                        value: "Karnataka",
                     },
                     {
                        label: "Kerala",
                        value: "Kerala",
                     },
                     {
                        label: "Madhya Pradesh",
                        value: "Madhya Pradesh",
                     },
                     {
                        label: "Maharashtra",
                        value: "Maharashtra",
                     },
                     {
                        label: "Manipur",
                        value: "Manipur",
                     },
                     {
                        label: "Meghalaya",
                        value: "Meghalaya",
                     },
                     {
                        label: "Mizoram",
                        value: "Mizoram",
                     },
                     {
                        label: "Nagaland",
                        value: "Nagaland",
                     },
                     {
                        label: "Odisha",
                        value: "Odisha",
                     },
                     {
                        label: "Punjab",
                        value: "Punjab",
                     },
                     {
                        label: "Rajasthan",
                        value: "Rajasthan",
                     },
                     {
                        label: "Sikkim",
                        value: "Sikkim",
                     },
                     {
                        label: "Tamil Nadu",
                        value: "Tamil Nadu",
                     },
                     {
                        label: "Telangana",
                        value: "Telangana",
                     },
                     {
                        label: "Tripura",
                        value: "Tripura",
                     },
                     {
                        label: "Uttar Pradesh",
                        value: "Uttar Pradesh",
                     },
                     {
                        label: "Uttarakhand",
                        value: "Uttarakhand",
                     },
                     {
                        label: "West Bengal",
                        value: "West Bengal",
                     },
                  ],
                  isEditable: true,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_document_file",
                  placeHolder: {
                     text: "Upload GST document",
                     className: "lg:text-sm lg:text-title xs:text-xs",
                  },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 3MB",
                     className: "text-xs text-subtitle",
                  },
                  type: "UPLOAD",
                  isEditable: true,
                  multiple: false,
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "is_gstin_verification_using_pan",
                           operator: "IS_NOT_EMPTY",
                        },
                     ],
                  },
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
                        types: ["image/jpeg", "image/jpg", "image/png", "application/pdf"],
                        message: "Please check the file type",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
                  action: {
                     label: {
                        text: "Browse File",
                        className: "",
                     },
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "gstin_document_file",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                     },
                  },
               },
            ],
            action: {
               label: {
                  text: "Fetch Details",
                  className: "text-base",
               },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: {
                     condition: {
                        dependOn: "is_gstin_verification_using_pan",
                        operator: "EQUALS",
                        value: "true",
                     },
                     onSuccess: "GSTIN_BY_PAN_ACTION",
                     onFailure: "GSTIN_DETAILED_ACTION",
                  },
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const gstin_data_review_and_submit_proprietorship = {
   id: "gstin_data_review_and_submit_proprietorship",
   name: "GSTIN Data Review And Submit",
   description: {
      title: {
         text: "GST Verification",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details by providing a PAN number or GSTIN, alongwith upload the GST certificate document",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
      action: {
         icon: {
            src: "",
            className: "text-xl cursor-pointer mr-2",
            key: "ArrowLeftOutlined",
         },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   stepper: [
      {
         id: "init_gstin_verification_proprietorship",
         name: "Init GSTIN Verification",
         title: {
            text: "Input your GST Details",
            className: "text-base font-normal text-title",
         },
         subtitle: {
            text: "Search your GST Details using GST Number or PAN number",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "gstin_data_review_and_submit_proprietorship",
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
   node: {
      content: {
         components: {
            style: {
               col: {
                  xs: 24,
                  md: 24,
               },
            },
            contents: [
               {
                  type: "TEXT_BUTTON",
                  style: {
                     col: {
                        xs: 24,
                        md: 24,
                     },
                  },
                  className: "flex items-center mb-2",
                  content: {
                     label: {
                        text: "Showing GST information using GSTIN {gstin_number}",
                        className: "text-sm text-subtitle",
                     },
                     action: {
                        label: {
                           text: "Change",
                           className: "font-bold",
                        },
                        style: {
                           color: "primary",
                           type: "link",
                           col: {
                              xs: 24,
                              md: 6,
                           },
                        },
                        api: {
                           type: "EXECUTE_ACTION",
                           executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
                           requestType: "EXECUTE_ACTION",
                        },
                     },
                  },
               },
            ],
         },
         form: {
            properties: {
               layout: "vertical",
            },
            fields: [
               {
                  name: "gstin_number",
                  label: {
                     text: "GSTIN",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
                  type: "INPUT",
                  isEditable: false,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "GSTIN_NUMBER",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_date_of_registration",
                  label: {
                     text: "Registration Date",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "DATE",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_legal_name",
                  label: {
                     text: "Legal Name",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_trade_name",
                  label: {
                     text: "Trade Name",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_principal_address",
                  label: {
                     text: "Address",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gstin_type",
                  label: {
                     text: "Type",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: false,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
            ],
            action: {
               label: {
                  text: "Save and Submit",
                  className: "text-base",
               },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const save_gst_business_details_proprietorship = {
   id: "save_gst_business_details_proprietorship",
   name: "GST Business Details",
   description: {
      title: {
         text: "Verify GSTIN Details",
         className: "text-xl font-medium text-title",
      },
      subtitle: {
         text: "Fetch your GST details using PAN or GSTIN, or enter your business details if you don't have a GSTIN.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
         className: "screen-header-image",
      },
      action: {
         icon: {
            src: "",
            className: "text-xl cursor-pointer mr-2",
            key: "ArrowLeftOutlined",
         },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   node: {
      content: {
         form: {
            properties: {
               layout: "vertical",
            },
            style: {
               col: {
                  md: 23,
                  xs: 24,
               },
            },
            fields: [
               {
                  name: "gst_reason",
                  label: {
                     text: "Which option best represents your business?",
                     className: "text-base text-title",
                  },
                  size: 8,
                  direction: "vertical",
                  options: [
                     {
                        label: "My annual turnover is less than GST prescribed limit",
                        value: "My annual turnover is less than GST prescribed limit",
                     },
                     {
                        label: "My business category is exempted from GST",
                        value: "My business category is exempted from GST",
                     },
                  ],
                  type: "RADIO_GROUP",
                  preserve: true,
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 14,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_business_registered_name",
                  label: {
                     text: "Business Registered Name",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type business registered name",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_business_address",
                  label: {
                     text: "Business Address",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type business address",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "INPUT",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_pincode",
                  label: {
                     text: "Pincode",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type pincode",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_city",
                  label: {
                     text: "City",
                     className: "",
                  },
                  placeHolder: {
                     text: "Type city name",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
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
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_country",
                  label: {
                     text: "Country",
                     className: "",
                  },
                  placeHolder: {
                     text: "Select country",
                     className: "",
                  },
                  helperText: {
                     text: "",
                     className: "",
                  },
                  className: "lg:pr-4 md:pr-4",
                  type: "SELECT",
                  options: [
                     {
                        label: "India",
                        value: "India",
                     },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
               {
                  name: "gst_address_state",
                  label: {
                     text: "State",
                     className: "",
                  },
                  placeHolder: {
                     text: "Select state",
                     className: "",
                  },
                  helperText: {
                     text: "",
                     className: "",
                  },
                  className: "lg:pl-4 md:pl-4",
                  type: "SELECT",
                  options: [
                     {
                        label: "Andhra Pradesh",
                        value: "Andhra Pradesh",
                     },
                     {
                        label: "Arunachal Pradesh",
                        value: "Arunachal Pradesh",
                     },
                     {
                        label: "Assam",
                        value: "Assam",
                     },
                     {
                        label: "Bihar",
                        value: "Bihar",
                     },
                     {
                        label: "Chhattisgarh",
                        value: "Chhattisgarh",
                     },
                     {
                        label: "Goa",
                        value: "Goa",
                     },
                     {
                        label: "Gujarat",
                        value: "Gujarat",
                     },
                     {
                        label: "Haryana",
                        value: "Haryana",
                     },
                     {
                        label: "Himachal Pradesh",
                        value: "Himachal Pradesh",
                     },
                     {
                        label: "Jharkhand",
                        value: "Jharkhand",
                     },
                     {
                        label: "Karnataka",
                        value: "Karnataka",
                     },
                     {
                        label: "Kerala",
                        value: "Kerala",
                     },
                     {
                        label: "Madhya Pradesh",
                        value: "Madhya Pradesh",
                     },
                     {
                        label: "Maharashtra",
                        value: "Maharashtra",
                     },
                     {
                        label: "Manipur",
                        value: "Manipur",
                     },
                     {
                        label: "Meghalaya",
                        value: "Meghalaya",
                     },
                     {
                        label: "Mizoram",
                        value: "Mizoram",
                     },
                     {
                        label: "Nagaland",
                        value: "Nagaland",
                     },
                     {
                        label: "Odisha",
                        value: "Odisha",
                     },
                     {
                        label: "Punjab",
                        value: "Punjab",
                     },
                     {
                        label: "Rajasthan",
                        value: "Rajasthan",
                     },
                     {
                        label: "Sikkim",
                        value: "Sikkim",
                     },
                     {
                        label: "Tamil Nadu",
                        value: "Tamil Nadu",
                     },
                     {
                        label: "Telangana",
                        value: "Telangana",
                     },
                     {
                        label: "Tripura",
                        value: "Tripura",
                     },
                     {
                        label: "Uttar Pradesh",
                        value: "Uttar Pradesh",
                     },
                     {
                        label: "Uttarakhand",
                        value: "Uttarakhand",
                     },
                     {
                        label: "West Bengal",
                        value: "West Bengal",
                     },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: {
                        md: 12,
                        xs: 24,
                     },
                  },
               },
            ],
            action: {
               label: {
                  text: "Next",
                  className: "text-base",
               },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

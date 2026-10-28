export const fatca_details_init = {
   id: "fatca_details_init",
   name: "Fatca Details Init",
   description: {
      title: { text: "Provide FATCA Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "FATCA and CRS are global tax compliance initiatives designed to combat tax evasion by individuals and entities",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/fatca.png",
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
         form: {
            properties: {
               className: "ml-4",
               layout: "vertical",
            },
            fields: [
               {
                  name: "fall_under_fatca",
                  label: {
                     text: "Do you fall under FATCA Details?",
                     className: "text-base mb-2 text-title",
                  },
                  size: 14,
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
                     col: { md: 18, xs: 24 },
                  },
               },
               {
                  name: "fatca_business_pan_name",
                  autofillSource: "business_pan_name",
                  label: { text: "Entity Name", className: "" },
                  placeHolder: { text: "Enter Entity Name", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: false,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "NAME",
                     },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_business_pan_number",
                  autofillSource: "business_pan_number",
                  label: { text: "Entity PAN", className: "" },
                  placeHolder: { text: "Enter Entity PAN", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: false,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "PAN_NUMBER",
                     },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_tax_purpose_account_type",
                  label: { text: "Account Type for TAX Purpose", className: "" },
                  placeHolder: { text: "Account Type for TAX Purpose", className: "" },
                  className: "w-full",
                  type: "SELECT",
                  options: [
                     { label: "Registered/Residence", value: "registered_residence" },
                     { label: "Business", value: "business" },
                     { label: "Communication/Local", value: "communication_local" },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_mobile",
                  label: { text: "Mobile", className: "" },
                  placeHolder: { text: "Enter Mobile Number", className: "text-subtitle" },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "PHONE_NUMBER",
                     },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_email_id",
                  label: { text: "Email ID", className: "" },
                  placeHolder: { text: "Enter Email ID", className: "text-subtitle" },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_tax_purpose_address",
                  label: { text: "Address for TAX Purpose", className: "" },
                  placeHolder: { text: "Address for TAX Purpose", className: "" },
                  className: "w-full",
                  type: "SELECT",
                  options: [
                     { label: "Same as Registered Address", value: "same_as_registered_address" },
                     { label: "Same as Communication Address", value: "same_as_communication_address" },
                     { label: "Others", value: "others" },
                  ],
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_address",
                  label: { text: "Address", className: "" },
                  placeHolder: { text: "Enter Address", className: "text-subtitle" },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_pincode",
                  label: { text: "Pin Code", className: "" },
                  placeHolder: { text: "Enter Pin Code", className: "text-subtitle" },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_city",
                  label: { text: "City", className: "" },
                  placeHolder: { text: "Enter City", className: "text-subtitle" },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_country",
                  label: { text: "Country", className: "" },
                  placeHolder: { text: "Enter City", className: "text-subtitle" },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
               {
                  name: "fatca_state",
                  label: { text: "State", className: "" },
                  placeHolder: { text: "Select state", className: "" },
                  className: "w-full",
                  type: "SELECT",
                  options: [
                     { label: "Andhra Pradesh", value: "Andhra Pradesh" },
                     { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
                     { label: "Assam", value: "Assam" },
                     { label: "Bihar", value: "Bihar" },
                     { label: "Chhattisgarh", value: "Chhattisgarh" },
                     { label: "Goa", value: "Goa" },
                     { label: "Gujarat", value: "Gujarat" },
                     { label: "Haryana", value: "Haryana" },
                     { label: "Himachal Pradesh", value: "Himachal Pradesh" },
                     { label: "Jharkhand", value: "Jharkhand" },
                     { label: "Karnataka", value: "Karnataka" },
                     { label: "Kerala", value: "Kerala" },
                     { label: "Madhya Pradesh", value: "Madhya Pradesh" },
                     { label: "Maharashtra", value: "Maharashtra" },
                     { label: "Manipur", value: "Manipur" },
                     { label: "Meghalaya", value: "Meghalaya" },
                     { label: "Mizoram", value: "Mizoram" },
                     { label: "Nagaland", value: "Nagaland" },
                     { label: "Odisha", value: "Odisha" },
                     { label: "Punjab", value: "Punjab" },
                     { label: "Rajasthan", value: "Rajasthan" },
                     { label: "Sikkim", value: "Sikkim" },
                     { label: "Tamil Nadu", value: "Tamil Nadu" },
                     { label: "Telangana", value: "Telangana" },
                     { label: "Tripura", value: "Tripura" },
                     { label: "Uttar Pradesh", value: "Uttar Pradesh" },
                     { label: "Uttarakhand", value: "Uttarakhand" },
                     { label: "West Bengal", value: "West Bengal" },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "fall_under_fatca",
                           operator: "EQUALS",
                           value: "true",
                        },
                     ],
                  },
                  style: { col: { xs: 24, md: 11 } },
                  className: "mr-8",
               },
            ],
            style: { col: { xs: 24, md: 24 } },
            action: {
               label: { text: "Save and Submit ", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "SAVE_DATA_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
               style: { type: "primary", col: { xs: 24, md: 1 } },
            },
         },
      },
   },
};

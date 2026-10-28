export const init_roc_details_fetch = {
   id: "init_roc_details_fetch",
   name: "Init ROC Details Fetch",
   description: {
      title: { text: "Verify ROC Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please enter your CIN to fetch ROC details and company information.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/roc-details-thumbnail.png",
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
         id: "init_roc_details_fetch",
         name: "Init ROC Details Fetch",
         title: { text: "Input CIN Number", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Input your CIN number to search ROC details",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "roc_details_review_and_submit",
         name: "ROC Details Review and Submit",
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
               layout: "vertical",
               className: "flex flex-col justify-items-center",
            },
            style: { col: { xs: 24, md: 24 } },
            fields: [
               {
                  name: "cin_number",
                  label: { text: "CIN Number", className: "" },
                  placeHolder: { text: "Type CIN Number", className: "" },
                  className: "w-full m-auto",
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "CIN_NUMBER",
                     },
                  },
                  style: { col: { xs: 24, md: 12 } },
               },
            ],
            action: {
               label: { text: "Search Details", className: "rounded" },
               style: { size: "large" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "FETCH_ROC_DETAILS_USING_CIN_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const roc_details_review_and_submit = {
   id: "roc_details_review_and_submit",
   name: "ROC Details Review and Submit",
   description: {
      title: { text: "Verify ROC Details", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please enter your CIN to fetch ROC details and company information.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/roc-details-thumbnail.png",
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
         id: "init_roc_details_fetch",
         name: "Init ROC Details Fetch",
         title: { text: "Input CIN Number", className: "text-base font-normal text-title" },
         subtitle: {
            text: "Input your CIN number to search ROC details",
            className: "text-xs font-normal text-subtitle",
         },
      },
      {
         id: "roc_details_review_and_submit",
         name: "ROC Details Review and Submit",
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
            style: { col: { xs: 24, md: 24 } },
            contents: [
               {
                  type: "TEXT_BUTTON",
                  name: "additional_data.company_detail",
                  style: { col: { xs: 24, md: 24 } },
                  className: "flex items-center mb-2",
                  content: {
                     label: {
                        text: "Showing company details of {name} using CIN {company_id}",
                        className: "text-sm text-subtitle",
                     },
                     action: {
                        label: { text: "Change CIN", className: "font-bold" },
                        style: { color: "primary", type: "link", col: { xs: 24, md: 6 } },
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
            type: "LIST",
            style: { col: { xs: 24, md: 24 } },
            properties: {
               layout: "horizontal",
               labelCol: { span: 8 },
               wrapperCol: { span: 15 },
               style: { col: { xs: 24, md: 24 } },
               labelAlign: "left",
            },
            items: [
               {
                  name: "company_detail",
                  label: { text: "Company Information", className: "" },
                  properties: {
                     layout: "horizontal",
                     labelCol: { span: 8 },
                     wrapperCol: { span: 15 },
                     style: { col: { xs: 24, md: 24 } },
                     labelAlign: "left",
                  },
                  fields: [
                     {
                        name: "sub_category",
                        preserve: true,
                        label: { text: "Sub-Category", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "class",
                        preserve: true,
                        label: { text: "Class", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "name",
                        preserve: true,
                        label: { text: "Company Name", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "paid_up_capital",
                        preserve: true,
                        label: { text: "Paid Up Capital", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "registered_address",
                        preserve: true,
                        label: { text: "Registered Address", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "incorporation_date",
                        preserve: true,
                        label: { text: "Incorporation Date", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "registration_number",
                        preserve: true,
                        label: { text: "Registration Number", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "company_id",
                        preserve: true,
                        label: { text: "CIN", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "email",
                        preserve: true,
                        label: { text: "Email Id", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "roc_code",
                        preserve: true,
                        label: { text: "ROC Office", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "efiling_status",
                        preserve: true,
                        label: { text: "Status", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        name: "listing",
                        preserve: true,
                        label: { text: "Listing", className: "" },
                        className: "w-full",
                        type: "INPUT",
                        isEditable: false,
                        style: { col: { xs: 24, md: 12 } },
                     },
                     {
                        className: "w-full",
                        items: [
                           {
                              name: "director_detail",
                              label: { text: "Director", className: "" },
                              properties: {
                                 layout: "horizontal",
                                 labelCol: { span: 8 },
                                 wrapperCol: { span: 15 },
                                 style: { col: { xs: 24, md: 24 } },
                                 labelAlign: "left",
                              },
                              fields: [
                                 {
                                    name: "din",
                                    preserve: true,
                                    label: { text: "Din", className: "" },
                                    className: "w-full",
                                    type: "INPUT",
                                    isEditable: false,
                                    style: { col: { xs: 24, md: 12 } },
                                 },
                                 {
                                    name: "begin_date",
                                    preserve: true,
                                    label: { text: "Begin Date", className: "" },
                                    className: "w-full",
                                    type: "INPUT",
                                    isEditable: false,
                                    style: { col: { xs: 24, md: 12 } },
                                 },
                                 {
                                    name: "name",
                                    preserve: true,
                                    label: { text: "Name", className: "" },
                                    className: "w-full",
                                    type: "INPUT",
                                    isEditable: false,
                                    style: { col: { xs: 24, md: 12 } },
                                 },
                              ],
                           },
                        ],
                     },
                  ],
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "rounded" },
               size: "large",
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

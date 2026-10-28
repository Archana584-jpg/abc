export const upload_business_address_proof = {
   id: "upload_business_address_proof",
   name: "Upload Business Address Proof",
   description: {
      title: { text: "Upload Business Address Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please select a document for business address verification(other than rent agreeements, must be issued within the last 3 months)",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/business_address_proof.png",
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
               className: "lg:ml-12 md:ml-12",
               layout: "vertical",
            },
            description: {
               title: {
                  text: "Select address proof to upload",
                  className: "text-base font-normal text-title",
               },
               subtitle: {
                  text: "Supported formats: .jpeg, .jpg, .png, .pdf • Max size: 5 MB",
                  className: "text-xs font-normal text-subtitle mt-1 mb-8",
               },
            },
            fields: [
               {
                  name: "upload_business_address_proof",
                  preserve: true,
                  placeHolder: { text: "Select any one document", className: "" },
                  className: "w-full",
                  type: "SELECT",
                  options: [
                     { label: "Electricity Bill", value: "electricity_bill_document_file" },
                     { label: "Telephone Bill", value: "telephone_bill_document_file" },
                     { label: "Rent Agreement", value: "rent_agreement_document_file" },
                     { label: "Other Address Proof", value: "other_document_file" },
                  ],
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                  },
                  style: {
                     col: { md: 9, xs: 24 },
                  },
               },
               {
                  name: "electricity_bill_document_file",
                  placeHolder: {
                     text: "Click to Upload",
                     className: "lg:text-sm md:text-sm xs:text-xs text-title lg:w-72 md:w-72 flex lg:justify-start",
                  },
                  type: "UPLOAD",
                  isEditable: true,
                  multiple: false,
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_address_proof",
                           operator: "EQUALS",
                           value: "electricity_bill_document_file",
                        },
                     ],
                  },
                  style: {
                     col: { md: 16, xs: 24 },
                  },
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "electricity_bill_document_file",
                     },
                  },
               },
               {
                  name: "telephone_bill_document_file",
                  placeHolder: {
                     text: "Click to Upload",
                     className: "lg:text-sm md:text-sm xs:text-xs text-title lg:w-72 md:w-72 flex justify-start",
                  },
                  type: "UPLOAD",
                  isEditable: true,
                  multiple: false,
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_address_proof",
                           operator: "EQUALS",
                           value: "telephone_bill_document_file",
                        },
                     ],
                  },
                  style: {
                     col: { md: 16, xs: 24 },
                  },
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "telephone_bill_document_file",
                     },
                  },
               },
               {
                  name: "rent_agreement_document_file",
                  placeHolder: {
                     text: "Click to Upload",
                     className: "lg:text-sm md:text-sm xs:text-xs text-title lg:w-72 md:w-72 flex justify-start",
                  },
                  type: "UPLOAD",
                  isEditable: true,
                  multiple: false,
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_address_proof",
                           operator: "EQUALS",
                           value: "rent_agreement_document_file",
                        },
                     ],
                  },
                  style: {
                     col: { md: 16, xs: 24 },
                  },
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "rent_agreement_document_file",
                     },
                  },
               },
               {
                  name: "other_document_file",
                  placeHolder: {
                     text: "Click to Upload",
                     className: "lg:text-sm md:text-sm xs:text-xs text-title lg:w-72 md:w-72 flex justify-start",
                  },
                  type: "UPLOAD",
                  isEditable: true,
                  multiple: false,
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
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
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_address_proof",
                           operator: "EQUALS",
                           value: "other_document_file",
                        },
                     ],
                  },
                  style: {
                     col: { md: 16, xs: 24 },
                  },
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "other_document_file",
                     },
                  },
               },
            ],
            style: { col: { xs: 24, md: 24 } },
            action: {
               label: { text: "Submit ", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "MOVE_TO_NEXT_NODE_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
               style: { type: "primary", col: { xs: 24, md: 1 } },
            },
         },
      },
   },
};

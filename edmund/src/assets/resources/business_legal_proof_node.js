export const upload_business_required_legal_proof = {
   id: "upload_business_required_legal_proof",
   name: "Upload Business Required Legal Proof",
   description: {
      title: { text: "Upload Business Legal Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please select a valid legal document from the provided list.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/business_legal_proof.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   node: {
      description: {
         title: {
            text: "Please upload one document from the provided list as proof of business legality.",
            className: "text-base font-medium",
         },
      },
      content: {
         form: {
            properties: {
               layout: "vertical",
               className: "m-auto",
            },
            style: { col: { xs: 24, md: 24 } },
            fields: [
               {
                  name: "upload_business_required_legal_proof",
                  preserve: true,
                  placeHolder: {
                     text: "Select any one legal document",
                     className: "",
                  },
                  type: "SELECT",
                  options: [
                     { label: "Udyam Certificate", value: "udyam_certificate_document_file" },
                     {
                        label: "Shop Act/Establisment Certificate/Shop Enlistment Certificate",
                        value: "shop_certificate_document_file",
                     },
                     {
                        label: "Service Tax Registration",
                        value: "service_tax_registration_document_file",
                     },
                     { label: "VAT Registration", value: "vat_registration_document_file" },
                     { label: "Trade License", value: "trade_license_document_file" },
                     {
                        label: "Certificate of Registration",
                        value: "certificate_of_registration_document_file",
                     },
                  ],
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
                  name: "udyam_certificate_document_file",
                  label: { text: "", className: "" },
                  placeHolder: { text: "", className: "" },
                  description: {
                     title: { text: "Drag file to this area to upload", className: "" },
                     subtitle: {
                        text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                        className: "",
                     },
                     image: { key: "InboxOutlined", className: "" },
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_required_legal_proof",
                           operator: "EQUALS",
                           value: "udyam_certificate_document_file",
                        },
                     ],
                  },
                  inputType: "FILE",
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     label: { text: "Upload Udyam Certificate", className: "" },
                  },
               },
               {
                  name: "shop_certificate_document_file",
                  placeHolder: {
                     text: "Upload Certificate",
                     classname: "",
                  },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_required_legal_proof",
                           operator: "EQUALS",
                           value: "shop_certificate_document_file",
                        },
                     ],
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "shop_certificate_document_file",
                     },
                  },
               },
               {
                  name: "service_tax_registration_document_file",
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
                  placeHolder: {
                     text: "Upload Service Tax Registration",
                     className: "",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_required_legal_proof",
                           operator: "EQUALS",
                           value: "service_tax_registration_document_file",
                        },
                     ],
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "service_tax_registration_document_file",
                     },
                  },
               },
               {
                  name: "vat_registration_document_file",
                  placeHolder: { text: "Upload VAT Registration", className: "" },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_required_legal_proof",
                           operator: "EQUALS",
                           value: "vat_registration_document_file",
                        },
                     ],
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "vat_registration_document_file",
                     },
                  },
               },
               {
                  name: "trade_license_document_file",
                  placeHolder: { text: "Upload Trade License", className: "" },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                     className: "text-xs text-subtitle",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_required_legal_proof",
                           operator: "EQUALS",
                           value: "trade_license_document_file",
                        },
                     ],
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "trade_license_document_file",
                     },
                  },
               },
               {
                  name: "certificate_of_registration_document_file",
                  placeHolder: { text: "Upload Certificate of Registration", className: "" },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 2MB",
                     className: "text-xs text-subtitle",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "upload_business_required_legal_proof",
                           operator: "EQUALS",
                           value: "certificate_of_registration_document_file",
                        },
                     ],
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     label: { text: "Upload Certificate of Registration", className: "" },
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "certificate_of_registration_document_file",
                     },
                  },
               },
            ],
            action: {
               label: { text: "Next", className: "rounded" },
               icon: { src: "", className: "" },
               style: { size: "large" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: {
                     condition: {
                        dependOn: "upload_business_required_legal_proof",
                        operator: "EQUALS",
                        value: "udyam_certificate_document_file",
                     },
                     onSuccess: "UDYAM_OCR_ACTION",
                     onFailure: "SAVE_DATA_ACTION",
                  },
                  requestType: {
                     condition: {
                        dependOn: "upload_business_required_legal_proof",
                        operator: "EQUALS",
                        value: "udyam_certificate_document_file",
                     },
                     onSuccess: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
                     onFailure: "EXECUTE_ACTION",
                  },
               },
            },
         },
      },
   },
};

export const upload_business_required_legal_proof_review = {
   id: "upload_business_required_legal_proof_review",
   name: "Upload Business Required Legal Proof Review",
   description: {
      title: { text: "Upload Business Legal Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please select a valid legal document from the provided list.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/business_legal_proof.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   node: {
      description: {
         title: {
            text: "Review and Proceed",
            className: "text-base font-medium",
         },
      },
      content: {
         components: {
            style: { col: { xs: 24, md: 12 } },
            contents: [
               {
                  type: "IMAGE_VIEWER",
                  style: { col: { xs: 24, md: 24 } },
                  content: {
                     src: "",
                     key: "udyam_certificate_document_file_urls",
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
               className: "w-auto",
            },
            fields: [
               {
                  name: "udyam_number",
                  label: { text: "Udyam Registration Number", className: "" },
                  placeHolder: { text: "Enter Udyam Registration Number", className: "" },
                  helperText: {
                     text: "Note: The Udyam Reference No must include dashes ('-') as mentioned in the certificate",
                     className: "",
                  },
                  type: "INPUT",
                  isEditable: true,
                  validation: {
                     required: {
                        isRequired: true,
                        message: "This field is required",
                     },
                     pattern: {
                        key: "UDYAM_NUMBER",
                     },
                  },
                  style: {
                     col: { xs: 24, md: 24 },
                  },
                  className: "w-auto",
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               style: { size: "large", type: "primary" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "UDYAM_VERIFY_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

export const upload_business_required_legal_proof_partnership = {
   id: "upload_business_required_legal_proof_partnership",
   name: "Upload Business Legal Proof",
   description: {
      title: { text: "Upload Business Legal Proof", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please select a valid legal document from the provided list.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/business_legal_proof.png",
         className: "screen-header-image",
      },
      action: {
         icon: { src: "", className: "text-xl cursor-pointer", key: "ArrowLeftOutlined" },
         api: {
            type: "EXECUTE_ACTION",
            executeActionType: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
            requestType: "EXECUTE_ACTION",
         },
      },
   },
   node: {
      description: {
         title: {
            text: "Please upload one document from the provided list as proof of business legality.",
            className: "text-base font-medium",
         },
      },
      content: {
         form: {
            properties: {
               layout: "vertical",
               className: "m-auto",
            },
            style: { col: { xs: 24, md: 24 } },
            fields: [
               {
                  name: "business_legal_proof_document_type",
                  preserve: true,
                  placeHolder: {
                     text: "Select any one legal document",
                     className: "",
                  },
                  type: "SELECT",
                  options: [
                     { label: "Partnership deed", value: "PARTNERSHIP_DEED" },
                     {
                        label: "Any Certificate of Registration issued by the state or centre",
                        value: "REGISTRATION_CERTIFICATE",
                     },
                  ],
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
                  name: "partnership_deed_document_file",
                  placeHolder: {
                     text: "Upload Partnership deed",
                     classname: "",
                  },
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_legal_proof_document_type",
                           operator: "EQUALS",
                           value: "PARTNERSHIP_DEED",
                        },
                     ],
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "partnership_deed_document_file",
                     },
                  },
               },
               {
                  name: "certificate_of_registration_document_file",
                  helperText: {
                     text: "Supported format: jpeg, jpg, png, pdf • Max size: 5MB",
                     className: "text-xs text-subtitle",
                  },
                  placeHolder: {
                     text: "Upload Service Tax Registration",
                     className: "",
                  },
                  visibilityCondition: {
                     conditions: [
                        {
                           dependOn: "business_legal_proof_document_type",
                           operator: "EQUALS",
                           value: "REGISTRATION_CERTIFICATE",
                        },
                     ],
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
                  style: { col: { xs: 24, md: 13 } },
                  className: "m-auto mt-5",
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "certificate_of_registration_document_file",
                     },
                  },
               },
            ],
            action: {
               label: { text: "Next", className: "rounded" },
               icon: { src: "", className: "" },
               style: { size: "large" },
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

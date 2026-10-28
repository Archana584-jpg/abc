export const upload_business_required_document = {
   id: "upload_business_required_document",
   name: "Upload Business Required Documents",
   description: {
      title: { text: "Upload Key Business Documents", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please upload all required business proof documents to proceed",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/other_bussiness_docs.png",
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
      description: {
         title: {
            text: "Please upload the required business documents",
            className: "text-base font-medium text-title",
         },
         subtitle: {
            text: "Supported formats: .jpeg, .jpg, .png, .pdf • Max size: 5 MB",
            className: "text-xs font-normal text-subtitle mt-1",
         },
      },
      content: {
         form: {
            properties: {
               className: "lg:ml-2 md:ml-2",
               layout: "vertical",
            },
            description: {
               title: {
                  text: "Key Business Document",
                  className: "text-md font-medium text-title mb-4",
               },
            },
            fields: [
               {
                  name: "certificate_of_incorporation_document_file",
                  placeHolder: {
                     text: "Ceritificate of Incorporation",
                     className: "lg:text-sm md:text-sm xs:text-xs text-title lg:w-80 md:w-80 flex justify-start",
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
                  style: {
                     col: { md: 14, xs: 24 },
                  },
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "certificate_of_incorporation_document_file",
                     },
                  },
               },
               {
                  name: "memorandum_of_association_document_file",
                  className: "w-full",
                  placeHolder: {
                     text: "Memorandum of Association",
                     className: "lg:text-sm md:text-sm xs:text-xs text-title lg:w-80 md:w-80 flex justify-start",
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
                  style: {
                     col: { md: 14, xs: 24 },
                  },
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "memorandum_of_association_document_file",
                     },
                  },
               },
               {
                  name: "article_of_association_document_file",
                  className: "w-full",
                  placeHolder: {
                     text: "Article of Association",
                     className: "lg:text-sm md:text-sm xs:text-xs text-title lg:w-80 md:w-80 flex justify-start",
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
                  style: {
                     col: { md: 14, xs: 24 },
                  },
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "article_of_association_document_file",
                     },
                  },
               },
            ],
            style: { col: { xs: 24, md: 24 } },
            action: {
               label: { text: "Save and Submit ", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "MOVE_TO_NEXT_NODE_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
               style: { type: "primary", col: { xs: 24, md: 2 } },
            },
         },
      },
   },
};

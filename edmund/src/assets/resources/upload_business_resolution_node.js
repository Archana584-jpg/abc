export const upload_business_resolution_document = {
   id: "upload_business_resolution_document",
   name: "Upload Business Resolution Document",
   description: {
      title: { text: "Upload Board Resolution Document", className: "text-xl font-medium text-title" },
      subtitle: {
         text: "Please upload duly signed Board Resolution document.",
         className: "text-sm font-normal text-subtitle mt-1",
      },
      image: {
         src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/upload_business_resolution_document.png",
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
            style: { col: { xs: 24, md: 24 } },
            contents: [
               {
                  type: "TEXT",
                  style: { col: { xs: 24, md: 24 } },
                  className: "mt-2 mb-2",
                  content: {
                     label: {
                        text: "Please download the provided Board Resolution document (BRD) template, fill in the required details, and upload the completed document.",
                        className: "text-sm font-normal text-title",
                     },
                  },
               },
               {
                  type: "TEXT",
                  style: { col: { xs: 24, md: 24 } },
                  className: "mb-6",
                  content: {
                     label: {
                        text: "Note: Application submitted with the BRD in this specific template will be accepted for processing.",
                        className: "text-sm font-medium text-title",
                     },
                  },
               },
               {
                  type: "DOCUMENT_CARD",
                  style: { col: { xs: 24, md: 24 } },
                  className: "border rounded-md p-4",
                  content: {
                     className: "flex items-center justify-between",
                     image: {
                        src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/board_of_resolution_letter.png",
                        className: "lg:!w-10 lg:!h-9 md:!w-10 md:!h-9",
                     },
                     label: {
                        text: "board_of_resolution_letter.docx",
                        className: "lg:text-base xs:text-xs lg:text-title lg:ml-2",
                     },
                     action: {
                        label: { text: "Download ", className: "font-bold" },
                        icon: { key: "DownloadOutlined", position: "end", className: "" },
                        style: { color: "primary", variant: "outlined", col: { xs: 24, md: 6 } },
                        file: {
                           url: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/Board+of+Resolution+Letter.docx",
                           fileName: "board_of_resolution_letter.docx",
                        },
                        className: "xs:text-xs lg:text-sm md:text-base",
                     },
                  },
               },
            ],
         },
         form: {
            properties: {
               layout: "vertical",
            },
            style: { col: { xs: 24, md: 24 } },
            fields: [
               {
                  name: "board_of_resolution_document_file",
                  placeHolder: {
                     text: "Board Resolution document (BRD)",
                     className:
                        "lg:text-sm lg:text-title md:text-sm md:text-title xs:text-xs  lg:w-80 flex justify-start",
                  },
                  label: {
                     text: "Please upload duly signed Board Resolution document (BRD) template",
                     className: "text-sm subtitle",
                  },
                  type: "UPLOAD",
                  isEditable: true,
                  multiple: false,
                  helperText: {
                     text: "Supported format: pdf • Max size: 5MB",
                     className: "text-xs xs:text-xs lg:text-subtitle",
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
                        types: ["application/pdf"],
                        message: "Please check the file type",
                     },
                  },
                  style: {
                     col: { md: 24, xs: 24 },
                  },
                  className: "lg:my-8",
                  action: {
                     api: {
                        type: "DOCUMENT_UPLOAD",
                        executeActionType: "DOCUMENT_UPLOAD_ACTION",
                        requestType: "DOCUMENT_UPLOAD",
                        fileKey: "board_of_resolution_document_file",
                     },
                  },
               },
            ],
            action: {
               label: { text: "Save and Submit", className: "" },
               api: {
                  type: "EXECUTE_ACTION",
                  executeActionType: "MOVE_TO_NEXT_NODE_ACTION",
                  requestType: "EXECUTE_ACTION",
               },
            },
         },
      },
   },
};

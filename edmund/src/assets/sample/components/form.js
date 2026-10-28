import { actionConfig } from "./action";
import { labelConfig } from "./label";

export const formDemoConfig = {
   type: "FORM",
   formId: "<form_id>",
   wrapper: {
      style: { col: { xs: 24, md: 8 } },
   },
   props: {
      layout: "vertical",
      style: { col: { xs: 24, md: 12 } },
   },
   content: {
      title: labelConfig,
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
               label: labelConfig,
               placeHolder: labelConfig,
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
               label: labelConfig,
               placeHolder: labelConfig,
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
               label: labelConfig,
               placeHolder: labelConfig,
            },
            wrapper: {
               style: { col: { xs: 24, md: 24 } },
            },
         },
         {
            type: "BUTTON",
            wrapper: {
               style: { col: { xs: 24, md: 24 } },
               className: "flex justify-end",
            },
            content: {
               label: labelConfig,
            },
            props: {},
            action: actionConfig,
         },
      ],
   },
};

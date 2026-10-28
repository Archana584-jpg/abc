import { labelConfig } from "./label";

export const stepperConfig = {
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
      conditions: [
         {
            dependOn: "<dependent_key>",
            operator: "EQUALS",
            value: "<dependent_value>",
         },
      ],
      onValidCondition: "<valid_path>",
      onInvalidCondition: "<invalid_path>",
   },
   content: {
      // for static steps, with some dynamic placeholders/values
      steps: [
         {
            id: "<business_pan_upload_and_ocr>",
            name: "Business PAN Data Review and Verify",
            title: labelConfig,
            subtitle: labelConfig,
         },
         {
            id: "business_pan_review_and_verification",
            name: "Business PAN Data Review and Verify",
            title: labelConfig,
            subtitle: labelConfig,
         },
      ],
      // for list of data vailable in data source
      stepResolver: {},
   },
};

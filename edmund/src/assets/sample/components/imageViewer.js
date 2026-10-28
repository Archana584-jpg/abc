export const imageViewerConfig = {
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
      conditions: [
         {
            dependOn: "<dependent_key>",
            operator: "EQUALS",
            value: "<dependent_value>",
         },
      ],
      onValidCondition: [],
      onInvalidCondition: [],
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

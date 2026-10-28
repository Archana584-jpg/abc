import { actionDemoConfig } from "./action";

export const buttonConfig = {
   label: {
      text: "Submit",
      className: "font-bold",
   },
   props: {
      size: "small",
      color: "primary",
   },
   icon: {
      src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/gst-verification-thumbnail.png",
      iconName: "ExclamationCircleFilled",
      style: {
         width: "12px",
         height: "12px",
      },
      className: "screen-header-image",
   },
   wrapper: {
      style: {
         col: {
            xs: 24,
            md: 6,
         },
      },
      className: "flex items-center mb-2",
   },
   action: actionDemoConfig,
};

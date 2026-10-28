import { labelConfig } from "./label";

export const modalConfig = {
   type: "MODAL",
   props: {
      closable: true,
      maskClosable: true,
      className: "modal-class",
      visibilityDependsOn: "discardApplicationVisibilty",
   },
   content: {
      title: labelConfig,
      body: [
         // any component config
      ],
      footer: [
         // list of button configs
      ],
   },
};

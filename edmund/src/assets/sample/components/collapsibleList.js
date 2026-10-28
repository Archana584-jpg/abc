import { labelConfig } from "./label";

export const collapsibleListConfig = {
   type: "COLLAPSIBLE_LIST",
   props: {
      accordion: true,
      defaultActiveKey: ["1"],
      ghost: true,
      expandIconPosition: "right",
      expandIcon: "ExpansionPanel",
      bordered: true,
      destroyInactivePanel: true,
      size: "small",
   },
   content: {
      items: [
         {
            // this is will be required as , it shows the label when it is in collpased state
            label: labelConfig,
            content: [
               //    any component config can be here
            ],
         },
         {
            label: labelConfig,
            content: [
               //    any component config can be here
            ],
         },
      ],
   },
};

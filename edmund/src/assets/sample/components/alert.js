import { iconConfig } from "./icon";
import { labelConfig } from "./label";

export const alertConfig = {
   type: "ALERT",
   props: {
      type: "warning",
   },
   wrapper: {
      style: {
         col: {
            xs: 24,
            md: 24,
         },
      },
      className: "ml-1 inline-block flex justify-center",
   },
   dataSource: {
      conditons: [],
      onValidCondition: "",
      onInvalidCondition: "",
   },
   content: {
      title: labelConfig,
      description: labelConfig,
      icon: iconConfig,
   },
};

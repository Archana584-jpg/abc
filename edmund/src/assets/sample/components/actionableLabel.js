import { buttonConfig } from "./button";
import { labelConfig } from "./label";

export const actionableLabelConfig = {
   type: "ACTIONABLE_LABEL",
   wrapper: {
      style: {
         col: {
            xs: 24,
            md: 12,
         },
      },
   },
   dataSource: {
      defaultPath: "state.genericData", // Path in state or context
   },
   content: {
      label: labelConfig,
      // here actionable is nothing but button
      actionable: buttonConfig,
   },
};

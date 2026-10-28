import { iconConfig } from "./icon";
import { labelConfig } from "./label";

export const listConfig = {
   type: "LIST",
   // For now there are only these attrs which are required by the wrapper
   wrapper: {
      //define structure of the wrapper
      style: {
         col: {
            md: 12,
            xs: 24,
         },
      },
      className: "mb-4",
   },
   props: {
      // any props supported by antd
      bordered: false,
      grid: { gutter: 16, column: 12 },
      size: "large",
      pagination: false,
   },
   dataSource: {
      conditions: [
         {
            dependOn: "bank_verification_upload_type",
            operator: "EQUALS",
            value: "upload_cheque",
         },
      ],
      onValidCondition: "state.gstinData",
      onInvalidCondition: "state.gstinData", // Path in state or context
   },
   content: {
      title: labelConfig,
      body: {
         className: "border-solid border border-border-silver pl-7 py-3 bg-insigniaWhite text-base rounded-md",
         //  default is used to show normal list with some or no du=ynamic valuees , fetched using the dataSource
         default: {
            avatar: iconConfig,
            title: labelConfig,
            description: labelConfig,
         },
         // for custom list behaviour mapping of compoennets, structure would differ according to the component that we need to render
         custom: [
            // any component can be kept here
         ],
      },
   },
};

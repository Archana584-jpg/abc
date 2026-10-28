export const start_journey = {
   id: "start_journey",
   name: "Start Journey",
   description: {
      title: {
         text: "Complete the following steps to finish your onboarding journey:",
         className: "text-base text-title px-2",
      },
      className: "!bg-transparent pb-0 ml-20",
   },
   className: "mt-0",
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 24 } },
            contents: [
               {
                  type: "LIST",
                  style: { col: { xs: 24, md: 24 } },
                  className: "px-4",
                  content: {
                     itemClassName: {
                        title: "border-solid border border-border-silver pl-7 py-3 bg-insigniaWhite text-base rounded-md",
                     },
                     items: "ONBOARDING_JOURNEY_ITEMS",
                  },
               },
            ],
            actions: [
               {
                  label: { text: "Next", className: "" },
                  api: {
                     type: "EXECUTE_ACTION",
                     executeActionType: "MOVE_TO_NEXT_NODE_ACTION",
                     requestType: "EXECUTE_ACTION",
                  },
                  style: { type: "primary", col: { xs: 24, md: 2 } },
                  className: "mt-2",
               },
            ],
         },
      },
   },
};

export const actionConfig = {
   onClick: {
      // here eventName is the name of the event on which the action is performed, like onClick, onChange, etc.
      formId: "<form_id>>", // form id for which validation needs to be performed while submittiing.
      payloadKey: "generic_data",
      setState: [
         {
            key: "<modal_state_key>",
            value: true, // used for visibility in case of modal
            stateChangeType: "MODAL_VISIBILITY",
         },
         {
            key: "<state_key>",
            value: false,
         },
      ],
      api: {
         type: "EXECUTE_ACTION",
         // action that needs to be performed, required in BE
         executeActionType: {
            conditions: [
               {
                  dependOn: "<dependent_key>",
                  operator: "EQUALS",
                  value: "<dependent_value>",
               },
               {
                  operator: "OR",
               },
               {
                  dependOn: "<dependent_key>",
                  operator: "EQUALS",
                  value: "<dependent_value>",
               },
            ],
            onValidCondition: "<valid_path>",
            onInvalidCondition: "<invalid_path>",
         },
         // request that needs to be called
         requestType: {
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
         // params that needs to be passed in the request
         params: [
            {
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
         ],
      },
   },
};

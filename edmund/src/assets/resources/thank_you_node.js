export const application_needs_review = {
   id: "application_needs_review",
   name: "Thank You",
   node: {
      content: {
         components: {
            style: { col: { xs: 24, md: 24 } },
            contents: [
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 24 } },
                  className: "flex mt-6 justify-center mb-2",
                  content: {
                     label: {
                        text: "Thank You",
                        className: "text-xl text-title font-bold",
                     },
                  },
               },
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 24 } },
                  className: "flex justify-center mb-2",
                  content: {
                     label: {
                        text: "Successfully submitted for further proccessing",
                        className: "text-lg text-title font-medium",
                     },
                  },
               },
               {
                  type: "IMAGE",
                  style: { col: { xs: 12, md: 24 } },
                  className: "flex justify-center mb-2",
                  content: {
                     src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/thank-you.svg",
                  },
               },
               {
                  type: "TEXT_BUTTON",
                  style: { col: { xs: 24, md: 15 } },
                  className: "flex justify-center ml-3",
                  content: {
                     label: {
                        text: "Next Steps",
                        className: "text-base",
                     },
                  },
               },
               {
                  type: "LIST",
                  style: { col: { xs: 24, md: 10 } },
                  className: "mx-auto",
                  content: {
                     itemClassName: {
                        title: "text-base",
                     },
                     items: "THANK_YOU_ITEMS",
                  },
               },
            ],
         },
      },
   },
};

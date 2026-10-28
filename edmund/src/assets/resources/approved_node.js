export const application_manually_approved = {
   id: "application_manually_approved",
   name: "Your application has been approved.",
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
                        text: "Your application has been approved.",
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
                        text: " Thank you for choosing us!",
                        className: "text-lg text-title font-medium",
                     },
                  },
               },
               {
                  type: "IMAGE",
                  style: { col: { xs: 12, md: 24 } },
                  className: "flex justify-center mt-16 mb-32",
                  content: {
                     src: "https://onboarding-resources-dev.s3.ap-south-1.amazonaws.com/application_approved.svg",
                  },
               },
            ],
         },
      },
   },
};

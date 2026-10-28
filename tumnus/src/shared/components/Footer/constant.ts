import { apiDocumentationUrl, blogUrl } from "@/utils/config";

export const externalLinkKeys = {
   ABOUT_US: "aboutUs",
   KNOWLEDGE_BASE: "knowledgeBase",
   STATUS_PAGE: "statusPage",
   API_DOCS: "apiDocs",
   BLOG: "blog",
   CAREERS: "careers",
};

export const footerNavItems = {
   Company: [
      {
         label: "About us",
         name: "aboutUs",
         path: "https://ongrid.in",
      },
      {
         path: "https://jobs.reczee.com/ongrid",
         label: "Careers",
         name: "careers",
      },
   ],

   Legal: [
      {
         path: "/terms-of-service",
         label: "Terms of Service",
         name: "termsOfService",
      },
      {
         path: "/privacy-policy",
         label: "Privacy Policy",
         name: "privacyPolicy",
      },
   ],

   Support: [
      {
         label: "Knowledge base",
         name: "knowledgeBase",
         path: "https://ongrid.freshdesk.com/support/home",
      },
      {
         label: "Status Page",
         name: "statusPage",
         path: "https://gridlines.freshstatus.io/",
      },
      {
         path: "/customer-support",
         label: "Customer support",
         name: "customerSupport",
      },
      {
         path: blogUrl,
         label: "Blog",
         name: "blog",
      },
   ],

   Developers: [
      {
         label: "API docs",
         name: "apiDocs",
         path: apiDocumentationUrl,
      },
   ],
};

import { apiDocumentationUrl, statusPageUrl, knowledgeBaseUrl, blogUrl, s3BucketUrl } from "@/utils/config";
import {
   onboardingAPILogo,
   gridCollectLogo,
   physicalVerificationLogo,
   alternateUnderwritingApiLogo,
   fintechStartupLogo,
   videoKYCLogo,
} from "@/assets/images";
import { useCasesScreenPathKey } from "@/screens/useCases/constants";

export const routingPathKeys = {
   TrustCentre: "trustCentre",
   Home: "home",
   CCRV: "criminal-court-record-verification",
   IndiaStack: "indiaStack",
   BANKING: useCasesScreenPathKey.BANKING,
   INSURANCE: useCasesScreenPathKey.INSURANCE,
   LENDING: useCasesScreenPathKey.LENDING,
   FINTECH: useCasesScreenPathKey.FINTECH,
   GAMING: useCasesScreenPathKey.GAMING,
   PAYMENT: useCasesScreenPathKey.PAYMENT,
   LOGISTICS: useCasesScreenPathKey.LOGISTICS,
   ONBOARDING: useCasesScreenPathKey.ONBOARDING,
   PHYSICAL_VERIFICATION: "physical-verification",
   PRODUCTS: "products",
   ONBOARDING_APIS: "onboarding-apis",
   FINTECH_APIS_STARTUPS: "fintech-apis-startups",
   VIDEO_KYC: "video-kyc",
   UNDERWRITING_APIS: "underwriting-apis",
};

export const headerSupportSectionPathsMapping = {
   TrustCentre: "/trust-centre",
   IndiaStack: "/india-stack",
};

export const headerSolutionsSectionPathMapping = {
   PHYSICAL_VERIFICATION: `/${routingPathKeys.PHYSICAL_VERIFICATION}`,
   PRODUCTS: `/${routingPathKeys.PRODUCTS}`,
   ONBOARDING_APIS: `/${routingPathKeys.ONBOARDING_APIS}`,
   FINTECH_APIS_STARTUPS: `/${routingPathKeys.FINTECH_APIS_STARTUPS}`,
   VIDEO_KYV: `/${routingPathKeys.VIDEO_KYC}`,
   UNDERWRITING_APIS: `/${routingPathKeys.UNDERWRITING_APIS}`,
};

export const supportMenu = [
   {
      isVisibleInSupportMenu: true,
      label: "Knowledge Centre",
      items: [
         {
            title: "Blog",
            key: "blog",
            subTitle: "Explore ideas, insights and updates",
            path: blogUrl,
            logo: `${s3BucketUrl}/resources/blog_icon.svg`,
         },
         {
            title: "India Stack",
            key: "indiaStack",
            subTitle: "Make onboarding, smooth & secure",
            path: "/india-stack",
            logo: `${s3BucketUrl}/resources/india_stack_icon.svg`,
         },
         {
            title: "API Documentation",
            key: "apiDocumentation",
            subTitle: "Guide to all our products",
            path: apiDocumentationUrl,
            logo: `${s3BucketUrl}/resources/api_doc_icon.svg`,
         },
      ],
   },
   {
      isVisibleInSupportMenu: true,
      label: "Help Centre",
      items: [
         {
            title: "Knowledge Base",
            key: "knowledgeBase",
            subTitle: "Support portal",
            path: knowledgeBaseUrl,
            logo: `${s3BucketUrl}/resources/knowledge_base_icon.svg`,
         },
         {
            title: "Contact Support",
            key: "contactSupport",
            subTitle: "Raise a ticket",
            logo: `${s3BucketUrl}/resources/contact_support_icon.svg`,
         },
         {
            title: "Status Page",
            key: "statusPage",
            subTitle: "Check health of services",
            path: statusPageUrl,
            logo: `${s3BucketUrl}/resources/status_page_icon.svg`,
         },
      ],
   },
   {
      isVisibleInSupportMenu: true,
      label: "Trust & Security",
      items: [
         {
            title: "Trust Centre",
            key: "trustCentre",
            subTitle: "Compliance, privacy and more",
            path: "/trust-centre",
            logo: `${s3BucketUrl}/resources/trust_centre_icon.svg`,
         },
      ],
   },
];

export const useCasesMenu = [
   {
      title: "Banking",
      key: useCasesScreenPathKey.BANKING,
      subTitle: "Prevent banking fraud with custom APIs",
      path: `/use-cases/${useCasesScreenPathKey.BANKING}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/bankingLogo.svg`,
   },
   {
      title: "Insurance",
      key: useCasesScreenPathKey.INSURANCE,
      subTitle: "Onboard customers with fraud prevention",
      path: `/use-cases/${useCasesScreenPathKey.INSURANCE}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/insuranceLogo.svg`,
   },
   {
      title: "Lending",
      key: useCasesScreenPathKey.LENDING,
      subTitle: "Minimize risk & simplify loan cycle with lending APIs",
      path: `/use-cases/${useCasesScreenPathKey.LENDING}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/lendingLogo.svg`,
   },
   {
      title: "Fintech",
      key: useCasesScreenPathKey.FINTECH,
      subTitle: "Smart onboarding in compliant manner",
      path: `/use-cases/${useCasesScreenPathKey.FINTECH}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/fintechLogo.svg`,
   },
   {
      title: "Gaming",
      key: useCasesScreenPathKey.GAMING,
      subTitle: "Enable secure & fraud-free gaming by ensuring compliance",
      path: `/use-cases/${useCasesScreenPathKey.GAMING}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/gamingLogo.svg`,
   },
   {
      title: "Payment",
      key: useCasesScreenPathKey.PAYMENT,
      subTitle: "Optimize payment approval for smooth onboarding",
      path: `/use-cases/${useCasesScreenPathKey.PAYMENT}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/paymentLogo.svg`,
   },
   {
      title: "Logistics",
      key: useCasesScreenPathKey.LOGISTICS,
      subTitle: "Verify instantly to boost logistic operations",
      path: `/use-cases/${useCasesScreenPathKey.LOGISTICS}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/logisticsLogo.svg`,
   },
   {
      title: "Onboarding",
      key: useCasesScreenPathKey.ONBOARDING,
      subTitle: "Seamless onboarding with instant data checks",
      path: `/use-cases/${useCasesScreenPathKey.ONBOARDING}`,
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/hrOnboardingLogo.svg`,
   },
];

export const solutionsMenu = [
   {
      title: "Physical Verification",
      key: routingPathKeys.PHYSICAL_VERIFICATION,
      subTitle: "One stop solution for contact point verification",
      path: `/${routingPathKeys.PHYSICAL_VERIFICATION}`,
      logo: physicalVerificationLogo,
      isNewItem: false,
   },
   {
      title: "Onboarding APIs",
      key: routingPathKeys.ONBOARDING_APIS,
      subTitle: "Simplify user onboarding with APIs",
      path: `/${routingPathKeys.ONBOARDING_APIS}`,
      logo: onboardingAPILogo,
      isNewItem: false,
   },
   {
      title: "Alternate Underwriting APIs ",
      key: routingPathKeys.UNDERWRITING_APIS,
      subTitle: "Drive smart lending decisions with innovative data insights",
      path: `/${routingPathKeys.UNDERWRITING_APIS}`,
      logo: alternateUnderwritingApiLogo,
      isNewItem: false,
   },
   {
      title: "Fintech APIs for Startups",
      key: routingPathKeys.FINTECH_APIS_STARTUPS,
      subTitle: "KYC/KYB & onboarding with free credits",
      path: `/${routingPathKeys.FINTECH_APIS_STARTUPS}`,
      logo: fintechStartupLogo,
      isNewItem: false,
   },
   {
      title: "Video KYC",
      key: routingPathKeys.VIDEO_KYC,
      subTitle: "Seamless, secure, and AI-powered solutions for faster, compliant onboarding.",
      path: `/${routingPathKeys.VIDEO_KYC}`,
      logo: videoKYCLogo,
      isNewItem: true,
   },
   {
      title: "GridCollect",
      key: useCasesScreenPathKey.BANKING,
      subTitle: "Uplift your debt collections",
      path: ``,
      logo: gridCollectLogo,
      isNewItem: false,
   },
];

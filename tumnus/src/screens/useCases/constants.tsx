import { homeUrl, s3BucketUrl } from "@/utils/config";
import { productMappingWRTKey, productsGroupKeyMapping, imageExtensionType } from "@/utils/constant";

const {
   AADHAAR_VERIFICATION,
   PAN_VERIFICATION,
   BANK_VERIFICATION,
   DIGILOCKER,
   DL_VERIFICATION,
   EPFO_VERIFICATION,
   FACE_MATCH_VERIFICATION,
   GSTIN_VERIFICATION,
   LIVENESS_VERIFICATION,
   MCA,
   MSME_VERIFICATION,
   RC_VERIFICATION,
   SHOP_AND_ESTABLISHMENT_VERIFICATION,
} = productsGroupKeyMapping;

export const useCasesScreenPathKey = {
   BANKING: "banking",
   INSURANCE: "insurance",
   LENDING: "lending",
   FINTECH: "fintech",
   GAMING: "gaming",
   PAYMENT: "payment",
   LOGISTICS: "logistics",
   ONBOARDING: "onboarding",
};

export const categories = {
   ASSET: "Asset",
   IDENTITY: "Identity",
   EMPLOYMENT: "Employment",
   BUSINESS: "Business",
   VACINATION: "Vacination",
   INCOME: "Income",
};

export const useCaseRecordMapping = [
   { title: "Lifetime API calls", recordNumbers: "500M+" },
   { title: "APIs", recordNumbers: "100+" },
   { title: "Positive verifications", recordNumbers: "100M+" },
   { title: "Fraud attempts highlighted", recordNumbers: "5M+" },
];

export const otherUseCasesCardContent = [
   {
      title: "Banking",
      description: "Smooth customer onboarding with advanced KYC solutions",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/bankingLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.BANKING}`,
      key: useCasesScreenPathKey.BANKING,
   },
   {
      title: "Insurance",
      description: "Customized solutions for insurance companies",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/insuranceLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.INSURANCE}`,
      key: useCasesScreenPathKey.INSURANCE,
   },
   {
      title: "Fintech",
      description: "Ensure fraud-free fintech with secure APIs",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/fintechLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.FINTECH}`,
      key: useCasesScreenPathKey.FINTECH,
   },
   {
      title: "Lending",
      description: "Unlock growth with secure lending & fast approvals",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/lendingLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.LENDING}`,
      key: useCasesScreenPathKey.LENDING,
   },
   {
      title: "Payment",
      description: "Accelerate digital payments with simplified onboarding process",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/paymentLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.PAYMENT}`,
      key: useCasesScreenPathKey.PAYMENT,
   },
   {
      title: "Gaming",
      description: "Combat fraud & ensure compliance with streamlined verification APIs for gaming industry",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/gamingLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.GAMING}`,
      key: useCasesScreenPathKey.GAMING,
   },
   {
      title: "Logistics",
      description: "Onboard delievery executives & drivers instantly with fast verifications",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/logisticsLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.LOGISTICS}`,
      key: useCasesScreenPathKey.LOGISTICS,
   },
   {
      title: "Onboarding",
      description: "Verified onboarding with instant data checks & flawless integrations",
      logo: `${s3BucketUrl}/useCases/otherUseCasesLogo/hrOnboardingLogo.${imageExtensionType.SVG}`,
      path: `${homeUrl}/use-cases/${useCasesScreenPathKey.ONBOARDING}`,
      key: useCasesScreenPathKey.ONBOARDING,
   },
];

export const useCasesScreen = {
   [useCasesScreenPathKey.BANKING]: {
      SECTION_1: {
         title: "Secure Customer Onboarding with Advanced KYC Solutions",
         description:
            "Enhance compliance, customer satisfaction with banking regulations and boost conversion rates through customized solutions",
         imageUri: `${s3BucketUrl}/useCases/banking/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [
            `${s3BucketUrl}/useCases/banking/clientsLogo/auSmallFinanceLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/banking/clientsLogo/cosmosLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/banking/clientsLogo/saurashtraLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/banking/clientsLogo/IDFCLogo.${imageExtensionType.SVG}`,
         ],
      },
      SECTION_2: {
         title: "Empowering Banking with Innovative API Solutions for Regulatory Excellence",
         description:
            "At Gridlines, we are committed to revolutionizing the banking sector through our specialized API solutions designed to seamlessly meet regulatory requirements. Our mission is to empower banks with cutting-edge solutions that enhance compliance, streamline operations, and facilitate frictionless interactions within the industry. With our modular approach, banks can seamlessly integrate our services into their existing infrastructure, allowing them to focus on their core competencies while ensuring regulatory adherence.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/banking/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Fraud Detection for Risk Mitigation",
            "Streamlined KYC Processes",
            "Integration with Existing Banking Systems",
            "Instant Verification",
            "Plug-and-Play Integration",
            "Enhanced Customer Experience",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS, categories.ASSET, categories.EMPLOYMENT],
         productsWRTCategories: {
            [categories.IDENTITY]: [
               productMappingWRTKey[AADHAAR_VERIFICATION],
               productMappingWRTKey[PAN_VERIFICATION],
               productMappingWRTKey[FACE_MATCH_VERIFICATION],
               productMappingWRTKey[LIVENESS_VERIFICATION],
               productMappingWRTKey[DIGILOCKER],
            ],
            [categories.BUSINESS]: [
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[MCA],
               productMappingWRTKey[GSTIN_VERIFICATION],
            ],
            [categories.EMPLOYMENT]: [productMappingWRTKey[EPFO_VERIFICATION]],
            [categories.ASSET]: [productMappingWRTKey[GSTIN_VERIFICATION], productMappingWRTKey[MSME_VERIFICATION]],
         },
      },
   },
   [useCasesScreenPathKey.INSURANCE]: {
      SECTION_1: {
         title: "Seamless Customer Onboarding with Simplified KYC Process",
         description:
            "Ensure smooth onboarding while minimizing risks. Streamlining insurance processes and seamlessly integrate customers with compliance at the core.",
         imageUri: `${s3BucketUrl}/useCases/insurance/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [
            `${s3BucketUrl}/useCases/insurance/clientsLogo/bajajAllianzLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/insurance/clientsLogo/bajajCapitalLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/insurance/clientsLogo/gromoLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/insurance/clientsLogo/paytmLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/insurance/clientsLogo/renewBuyLogo.${imageExtensionType.SVG}`,
         ],
      },
      SECTION_2: {
         title: "Efficient Customer Onboarding & Compliance Solutions for Insurers",
         description:
            "With a focus on seamless onboarding, fraud prevention analytics, and risk assessment, our APIs empower insurers to navigate regulatory complexities effortlessly. Our solutions assist with essential risk assessment and KYC processes, crucial for maintaining compliance within the insurance industry. Insurance companies can track regulatory changes, simplify KYC procedures, and ensure compliance with updated regulations.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/insurance/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Industry-specific Expertise in Insurance Compliance",
            "Scalable API Infrastructure for Growing Insurance Businesses",
            "Dedicated Support for Seamless Implementation and Integration",
            "Data security and with Evolving Industry Needs",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS, categories.ASSET],
         productsWRTCategories: {
            [categories.IDENTITY]: [productMappingWRTKey[AADHAAR_VERIFICATION], productMappingWRTKey[PAN_VERIFICATION]],
            [categories.BUSINESS]: [productMappingWRTKey[MSME_VERIFICATION], productMappingWRTKey[MCA]],
            [categories.ASSET]: [productMappingWRTKey[RC_VERIFICATION]],
         },
      },
   },
   [useCasesScreenPathKey.LENDING]: {
      SECTION_1: {
         title: "Increase Approvals with Secure Lending Experiences",
         description:
            "Minimize risk, optimize approvals and get higher conversion rates. Deliver frictionless, secure lending experiences with us.",
         imageUri: `${s3BucketUrl}/useCases/lending/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [
            `${s3BucketUrl}/useCases/lending/clientsLogo/kisshtLogo.${imageExtensionType.PNG}`,
            `${s3BucketUrl}/useCases/lending/clientsLogo/mintifiLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/lending/clientsLogo/mobikwikLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/lending/clientsLogo/nobrokerLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/lending/clientsLogo/snapmintLogo.${imageExtensionType.SVG}`,
         ],
      },
      SECTION_2: {
         title: "Transforming Lending with Data-Driven APIs",
         description:
            "Lending APIs are revolutionizing the industry, offering a smoother, faster journey for both lenders and borrowers. Imagine approvals within hours, not days, thanks to instant access to verified information. APIs seamlessly connect to credit bureaus, employment databases, and more, streamlining due diligence and speeding up the entire process. APIs empower lenders with the power of data-driven insights. With personalized risk assessments, offering competitive rates to low-risk individuals while managing potential risks for others.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/lending/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Effortless Onboarding and Scalability",
            "Data-driven Insights for Smarter Lending Practices",
            "Seamless Integration with Existing Lending Platforms",
            "Advanced Fraud Detection Mechanisms for Risk Mitigation",
            "Decidated Support team and API documentation",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS, categories.ASSET, categories.EMPLOYMENT],
         productsWRTCategories: {
            [categories.IDENTITY]: [
               productMappingWRTKey[AADHAAR_VERIFICATION],
               productMappingWRTKey[PAN_VERIFICATION],
               productMappingWRTKey[FACE_MATCH_VERIFICATION],
               productMappingWRTKey[LIVENESS_VERIFICATION],
               productMappingWRTKey[DIGILOCKER],
            ],
            [categories.ASSET]: [
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[GSTIN_VERIFICATION],
               productMappingWRTKey[RC_VERIFICATION],
            ],
            [categories.EMPLOYMENT]: [productMappingWRTKey[EPFO_VERIFICATION]],
            [categories.BUSINESS]: [
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[MCA],
               productMappingWRTKey[GSTIN_VERIFICATION],
            ],
         },
      },
   },
   [useCasesScreenPathKey.FINTECH]: {
      SECTION_1: {
         title: "Simplifying Fintech with Secure APIs",
         description:
            "Supercharge your fintech offerings with seamless onboarding, robust fraud detection, and risk-optimized decisions.",
         imageUri: `${s3BucketUrl}/useCases/fintech/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [
            `${s3BucketUrl}/useCases/fintech/clientsLogo/changeJarLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/fintech/clientsLogo/mobikwikLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/fintech/clientsLogo/paytmLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/fintech/clientsLogo/snapmintLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/lending/clientsLogo/kisshtLogo.${imageExtensionType.PNG}`,
            `${s3BucketUrl}/useCases/lending/clientsLogo/mintifiLogo.${imageExtensionType.SVG}`,
         ],
      },
      SECTION_2: {
         title: "Optimizing Fintech Operations with Gridlines' APIs",
         description:
            "Fintech APIs streamline critical processes like customer onboarding, identity verification, and transaction monitoring. These customised solutions help fintech firms achieve instant and accurate identity verifications, reducing the risk of fraud and identity theft. These APIs also facilitate seamless compliance with Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations, allowing fintech companies to uphold strict standards without compromising user experience.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/fintech/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Effortless Customer Onboarding with Seamless Integration",
            "Scalable Solutions to Support Growing Fintech Ventures",
            "Ease of Integration with detailed API documentation",
            "Actionable Data Insights for Informed Decision-Making",
            "Plug-and-Play Integration with Existing Fintech Infrastructure",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS, categories.ASSET, categories.INCOME],
         productsWRTCategories: {
            [categories.IDENTITY]: [
               productMappingWRTKey[AADHAAR_VERIFICATION],
               productMappingWRTKey[PAN_VERIFICATION],
               productMappingWRTKey[LIVENESS_VERIFICATION],
               productMappingWRTKey[FACE_MATCH_VERIFICATION],
            ],
            [categories.INCOME]: [productMappingWRTKey[PAN_VERIFICATION], productMappingWRTKey[GSTIN_VERIFICATION]],
            [categories.ASSET]: [
               productMappingWRTKey[GSTIN_VERIFICATION],
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[RC_VERIFICATION],
            ],
            [categories.BUSINESS]: [
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[MCA],
               productMappingWRTKey[GSTIN_VERIFICATION],
            ],
         },
      },
   },
   [useCasesScreenPathKey.GAMING]: {
      SECTION_1: {
         title: "Streamline Verification, Secure & Fraud-Free Gameplay with Industry Compliance",
         description:
            "Minimize risk and boost player engagement. Deliver responsible gaming with our Solutions built for the gaming industry",
         imageUri: `${s3BucketUrl}/useCases/gaming/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [`${s3BucketUrl}/useCases/gaming/clientsLogo/proboLogo.${imageExtensionType.SVG}`],
      },
      SECTION_2: {
         title: "Comprehensive API Solutions for Gaming Industry",
         description:
            "For gaming companies, we offer a one-stop solution for streamlined user registration, robust fraud protection, and seamless authentication. With real-time identity verification, platforms can ensure compliance and user eligibility while speeding up registration. Enhanced security measures safeguard accounts and boost user trust, while powerful fraud detection tools prevent account takeovers and payment fraud. Our API Solutions empower gaming companies to create secure, enjoyable experiences that attract and retain players, all while navigating the ever-changing regulatory landscape.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/gaming/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Advanced User Authentication for Enhanced Security",
            "Proactive Fraud Detection and Prevention Measures",
            "Compliance Checks for Age Verification and Regulatory Alignment",
            "Customizable Solutions to Suit Unique Gaming Requirements",
            "Enhanced Player Trust and Satisfaction through Reliable Verification",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS],
         productsWRTCategories: {
            [categories.IDENTITY]: [
               productMappingWRTKey[AADHAAR_VERIFICATION],
               productMappingWRTKey[PAN_VERIFICATION],
               productMappingWRTKey[FACE_MATCH_VERIFICATION],
               productMappingWRTKey[LIVENESS_VERIFICATION],
            ],
            [categories.BUSINESS]: [
               productMappingWRTKey[BANK_VERIFICATION],
               productMappingWRTKey[SHOP_AND_ESTABLISHMENT_VERIFICATION],
            ],
         },
      },
   },
   [useCasesScreenPathKey.PAYMENT]: {
      SECTION_1: {
         title: "Optimize Payment Approvals with Secure Transaction Solutions",
         description:
            "Use future-proof payments ecosystem for payment screening and unlock real time alerts with smarter risk management.",
         imageUri: `${s3BucketUrl}/useCases/payment/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [],
      },
      SECTION_2: {
         title: "Securing Payments: API Solutions for Enhanced Security and Efficiency",
         description:
            "Real-time verification APIs swiftly and accurately authenticate customer bank account and payment source identities, reducing the risk of fraudulent transactions and enhancing payment security. Our customized solutions provide powerful tools that streamline processes, mitigate risks, and uphold the highest standards of security and compliance within the payment industry. Our APIs facilitate the verification and retrieval of payment sources such as UPI IDs using mobile numbers, ensuring seamless and reliable transactions.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/payment/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Seamless Payment Processing with Real-time Verification",
            "Scalable Solutions to Handle Increased Transaction Volumes",
            "Actionable Transaction Insights for Informed Decision-Making",
            "Customizable Solutions to Suit Unique Payment Requirements",
            "Enhanced Trust and Customer Satisfaction through Reliable Verification",
            "Operational Efficiency and Cost Savings Enabled by Automated Processes",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS, categories.ASSET, categories.EMPLOYMENT],
         productsWRTCategories: {
            [categories.IDENTITY]: [
               productMappingWRTKey[AADHAAR_VERIFICATION],
               productMappingWRTKey[PAN_VERIFICATION],
               productMappingWRTKey[FACE_MATCH_VERIFICATION],
               productMappingWRTKey[LIVENESS_VERIFICATION],
            ],
            [categories.BUSINESS]: [
               productMappingWRTKey[BANK_VERIFICATION],
               productMappingWRTKey[MCA],
               productMappingWRTKey[GSTIN_VERIFICATION],
            ],
            [categories.EMPLOYMENT]: [productMappingWRTKey[EPFO_VERIFICATION]],
            [categories.ASSET]: [
               productMappingWRTKey[GSTIN_VERIFICATION],
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[RC_VERIFICATION],
            ],
         },
      },
   },
   [useCasesScreenPathKey.LOGISTICS]: {
      SECTION_1: {
         title: "Boost Logistics Efficiency with Frictionless Verification",
         description:
            "Streamline logistics, Automate document checks, minimize delays, and unlock a smoother, faster journey for your shipments and your business.",
         imageUri: `${s3BucketUrl}/useCases/logistics/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [
            `${s3BucketUrl}/useCases/logistics/clientsLogo/delhiveryLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/logistics/clientsLogo/gatiLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/logistics/clientsLogo/xpressbeesLogo.${imageExtensionType.SVG}`,
         ],
      },
      SECTION_2: {
         title: "Logistics Redefined: APIs Drive Efficiency, Visibility, and Growth",
         description:
            "Our logistics API solutions empower companies to streamline operations and improve efficiency. Real-time vehicle and driver tracking, combined with seamless customer access, boost satisfaction. Furthermore, API integrations unlock powerful data and third-party services, leading to informed decisions, cost reductions, and a competitive edge.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/logistics/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Smooth Operations with Real-time Tracking",
            "Scalable Solutions for Fluctuating Demands",
            "Actionable Insights for Efficient Logistics",
            "Integration with Supply Chain Systems",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS, categories.ASSET],
         productsWRTCategories: {
            [categories.IDENTITY]: [
               productMappingWRTKey[AADHAAR_VERIFICATION],
               productMappingWRTKey[PAN_VERIFICATION],
               productMappingWRTKey[DL_VERIFICATION],
            ],
            [categories.BUSINESS]: [
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[MCA],
               productMappingWRTKey[GSTIN_VERIFICATION],
            ],
            [categories.ASSET]: [productMappingWRTKey[RC_VERIFICATION]],
         },
      },
   },
   [useCasesScreenPathKey.ONBOARDING]: {
      SECTION_1: {
         title: "Make Informed Hiring Choices with Verified Onboarding",
         description:
            "Level up your hiring with us. Our Solutions streamline onboarding with instant data checks, automated compliance, and seamless integration.",
         imageUri: `${s3BucketUrl}/useCases/onboarding/processChart.${imageExtensionType.SVG}`,
         clientsLogo: [
            `${s3BucketUrl}/useCases/onboarding/clientsLogo/hireproLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/onboarding/clientsLogo/quessLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/onboarding/clientsLogo/teamleaseLogo.${imageExtensionType.SVG}`,
            `${s3BucketUrl}/useCases/onboarding/clientsLogo/v5Global.${imageExtensionType.SVG}`,
         ],
      },
      SECTION_2: {
         title: "Automate Identity Verification, Simplify Onboarding",
         description:
            "APIs ensure quick and accurate verification, meeting regulatory requirements and enhancing security. Our Customisable solutions help reduce manual effort, minimize errors, and provide comprehensive data for informed hiring decisions, modernizing HR practices and optimizing operational efficiency.",
      },
      SECTION_3: {
         imageUri: `${s3BucketUrl}/useCases/onboarding/verificationListIllustration.${imageExtensionType.SVG}`,
         checkList: [
            "Effortless Onboarding with Seamless Verification",
            "Scalable Solutions to Accommodate Growing Workforce Needs",
            "Actionable Insights for Informed Hiring",
            "Integration with HR Management Systems",
            "Advanced Identity Verification for Compliance",
         ],
      },
      SECTION_4: {
         categories: [categories.IDENTITY, categories.BUSINESS, categories.ASSET, categories.EMPLOYMENT],
         productsWRTCategories: {
            [categories.IDENTITY]: [
               productMappingWRTKey[AADHAAR_VERIFICATION],
               productMappingWRTKey[PAN_VERIFICATION],
               productMappingWRTKey[FACE_MATCH_VERIFICATION],
               productMappingWRTKey[LIVENESS_VERIFICATION],
               productMappingWRTKey[DIGILOCKER],
            ],
            [categories.ASSET]: [productMappingWRTKey[GSTIN_VERIFICATION], productMappingWRTKey[MSME_VERIFICATION]],
            [categories.BUSINESS]: [
               productMappingWRTKey[MSME_VERIFICATION],
               productMappingWRTKey[MCA],
               productMappingWRTKey[GSTIN_VERIFICATION],
            ],
            [categories.EMPLOYMENT]: [productMappingWRTKey[EPFO_VERIFICATION]],
         },
      },
   },
};

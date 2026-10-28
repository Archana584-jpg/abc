import {
   flexibilityLogo,
   apiLogo,
   instandDataAccessLogo,
   clockLogo,
   customizationNcompliance,
   efficiencyNautomation,
   enhancedSecurity,
   riskMitigation,
   streamlinedProcess,
   trustNreputation,
   leadingLogo,
   insuranceLogo,
   bankingLogo,
   fintechLogo,
   complianceAndSecurityLogo,
} from "../../assets/images";
import { s3BucketUrl } from "@/utils/config";

export const underwritingAPIsRecordsMapping = [
   { title: "Lifetime API calls", recordNumbers: "500M+" },
   { title: "APIs", recordNumbers: "100+" },
   { title: "Positive verifications", recordNumbers: "100M+" },
   { title: "Fraud attempts highlighted", recordNumbers: "5M+" },
];

export const underwritingKeyFeatures = [
   {
      title: "Versatile Solutions",
      description: `Our APIs cater to diverse sectors including lending, insurance, and banking, offering comprehensive solutions for all your underwriting needs.`,
      logo: flexibilityLogo,
   },
   {
      title: "Instant Data Access",
      description: `Instantly access and verify information from a vast database, facilitating quick and informed risk assessments.`,
      logo: instandDataAccessLogo,
   },
   {
      title: "Round-the-Clock Availability",
      description: `Our APIs and support team are available 24/7, ensuring continuous service and assistance.`,
      logo: clockLogo,
   },
   {
      title: "Data Security and Regulatory Compliance",
      description: `Adhering to ISO 27001 and SOC2 standards, Gridlines guarantees data protection and regulatory compliance.`,
      logo: complianceAndSecurityLogo,
   },
   {
      title: "Seamless System Integration",
      description: `Designed for easy integration with your existing systems, our APIs come with comprehensive documentation and integration support for a smooth process.`,
      logo: apiLogo,
   },
];

export const underwritingSectionFourRecords = [
   {
      title: "Enhanced Efficiency and Automation",
      description:
         "Automate the manual underwriting process, freeing up valuable time and resources for internal teams across various sectors.",
      logo: efficiencyNautomation,
   },
   {
      title: "Customized and Compliant Solutions",
      description:
         "Customize risk assessments based on your specific needs and ensure compliance with legal requirements in any sector.",
      logo: customizationNcompliance,
   },
   {
      title: "Proactive Risk Mitigation",
      description:
         "Identify potential risks before underwriting individuals, businesses, or assets, reducing the likelihood of incidents or legal issues.",
      logo: riskMitigation,
   },
   {
      title: "Build Trust and Reputation",
      description:
         "Build trust with clients, investors, and stakeholders by demonstrating due diligence in risk assessment practices, enhancing your company’s reputation across different industries.",
      logo: trustNreputation,
   },
   {
      title: "Streamlined Underwriting Processes",
      description:
         "Enhance operational efficiency and reduce underwriting times with automated verification, benefiting sectors from insurance to lending.",
      logo: streamlinedProcess,
   },
   {
      title: "Robust Security Measures",
      description:
         "Protect sensitive data with industry-leading encryption and compliance with ISO 27001 and SOC2 Type II standards, ensuring data security across all verification scenarios.",
      logo: enhancedSecurity,
   },
];

export const industryUseCases = [
   {
      title: "Lending",
      description:
         "Lenders can improve the credit assessment processes by integrating our APIs to verify borrower identities, employment details and the financial stability of the employers and for better risk management and debt collection efforts with verified addresses. This ensures a more accurate evaluation of creditworthiness and reduces the risk of defaults.",
      logo: leadingLogo,
   },
   {
      title: "Insurance",
      description:
         "Insurance companies can utilize Gridlines APIs to assess the risks associated with the applicant more accurately by verifying the identities, financial health of the applicant’s employer, past driving records, criminal records etc. This comprehensive verification helps insurers make more informed underwriting decisions and mitigate potential risks.",
      logo: insuranceLogo,
   },
   {
      title: "Banking",
      description:
         "Banks can utilize Gridlines APIs to strengthen their Know Your Customer(KYC) procedures and enhance fraud detection. Our APIs offer reliable verification of customer identities and financial statuses, facilitating smoother onboarding and compliance with regulatory requirements.",
      logo: bankingLogo,
   },
   {
      title: "Fintech",
      description:
         "Fintech companies can streamline customer onboarding with our KYC APIs, ensuring quick and compliant user verification. They can also leverage additional insights, such as validating the applicant’s past use of an address for better communication and debt collection efforts with verified addresses.",
      logo: fintechLogo,
   },
];

export const faqData = [
   {
      label: "What are Underwriting APIs and how do they work?",
      children:
         "Underwriting APIs are digital tools that verify identities, financial histories, and other relevant data in real-time, integrating with your systems to automate the underwriting process.",
   },
   {
      label: "Which industries can benefit from Gridlines' Underwriting APIs?",
      children:
         "Our APIs cater to fintech, lending, insurance, e-commerce, banking, gig economy platforms, and more, offering tailored verification solutions for each industry.",
   },
   {
      label: "How do Gridlines Underwriting APIs ensure data security?",
      children:
         "We adhere to ISO 27001 and SOC2 Type II standards, using TLS encryption and strict data handling protocols to ensure data security and confidentiality.",
   },
   {
      label: "What are the key features of Gridlines' Underwriting APIs?",
      children:
         "Our APIs ensure compliance with legal and industry standards and identify potential risks before they impact your business.",
   },
   {
      label: "How do real-time verifications benefit my business?",
      children:
         "Real-time verifications speed up the underwriting process, reducing delays and enhancing operational efficiency.",
   },
];

export const apiDescriptionParagraphs = [
   "Traditional underwriting is often slow and error-prone, causing delays and increased risk. Gridlines Underwriting APIs provide real-time data access and verification, enabling faster and more accurate risk assessments. This ensures compliance, speeds up workflows, and enhances security.",
   "Our APIs also incorporate unconventional data points, like employer financial health and address usage, for deeper insights. Transform your underwriting with Gridlines APIs to boost efficiency, reduce errors, and improve risk management.",
];

export const imageUrl = `${s3BucketUrl}/startupAcceleratorPage/whyGridlinesBackground.svg`;

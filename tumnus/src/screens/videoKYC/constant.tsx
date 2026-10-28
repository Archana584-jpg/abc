import {
   regulatoryComplianceIcon,
   storageAndRetentionIcon,
   userExperienceIcon,
   advanceTechIcon,
   scalabilityAndPerformanceIcon,
   platformFlexibilityIcon,
   costEffectiveIcon,
   quickKYCTATIcon,
   securityKYCIcon,
   customizationIcon,
   comprehensiveSupportIcon,
   quickGoLiveIcon,
   complianceRBILogo,
   preCallVerificationLogo,
   callInitiationLogo,
   documentPresentationLogo,
   realTimeAuditLogo,
} from "@/assets/images";

export const keyFeatureCards = [
   {
      label: "Regulatory Compliance",
      icon: regulatoryComplianceIcon,
      key: "1",
      descriptions: [
         "100% adherence to RBI guidelines, DPDP Act and industry standards",
         "In-built audit trails and secure storage to meet compliance requirements",
      ],
   },
   {
      label: "User Experience",
      icon: userExperienceIcon,
      key: "2",
      descriptions: [
         "Intuitive interface for agents and customers",
         "Multilingual support to cater to diverse geographies",
      ],
   },
   {
      label: "Advanced Technology",
      icon: advanceTechIcon,
      key: "3",
      descriptions: [
         "AI-powered OCR for document verification",
         "Facial recognition for photo match and liveness detection",
         "Spoofing & fraud detection capabilities for enhanced security",
      ],
   },
   {
      label: "Scalability and Performance",
      icon: scalabilityAndPerformanceIcon,
      key: "4",
      descriptions: [
         "Seamlessly handles high concurrency with minimal downtime",
         "Supports integration with CRMs and core banking systems",
         "Works flawlessly even in low network bandwidth environments",
      ],
   },
   {
      label: "Storage and Retention",
      icon: storageAndRetentionIcon,
      key: "5",
      descriptions: [
         "Flexible storage options for video recordings and documents",
         "Customizable purging timelines to meet compliance",
      ],
   },
   {
      label: "Platform Flexibility",
      icon: platformFlexibilityIcon,
      key: "6",
      descriptions: [
         "A dynamic agent allocation engine enables personalized discussions",
         "Customer risk rating drives tailored due diligence capabilities",
         "Rich customization supports the CDD process, ensuring the right brand visibility and trust",
      ],
   },
];

export const whyChooseGridlinesCards = [
   {
      label: "Cost-Effective",
      icon: costEffectiveIcon,
      key: "1",
      descriptions: [
         "Competitive pricing model with transparent costs",
         "Customization to support your customer due diligence policy",
      ],
   },
   {
      label: "Quick KYC Turnaround Time (TAT)",
      icon: quickKYCTATIcon,
      key: "2",
      descriptions: [
         "Complete KYC sessions in less than 2 minutes",
         "Optimized automated verification engine enables minimal efforts from agent",
      ],
   },
   {
      label: "Security",
      icon: securityKYCIcon,
      key: "3",
      descriptions: [
         "End-to-end encryption to ensure data protection in transit & rest",
         "100% compliant: ISO 27001:2022, SOC 2 Type II",
      ],
   },
   {
      label: "Customization",
      icon: customizationIcon,
      key: "4",
      descriptions: [
         "Tailored solutions for diverse use cases such as loans, insurance, accounts, wallet etc",
         "Ensure seamless brand trust and visibility for an enhanced customer experience",
      ],
   },
   {
      label: "Comprehensive Support",
      icon: comprehensiveSupportIcon,
      key: "5",
      descriptions: [
         "Dedicated onboarding and customer success teams",
         "Continuous engagement to drive your success metrics",
      ],
   },
   {
      label: "Quick Go-Live",
      icon: quickGoLiveIcon,
      key: "6",
      descriptions: [
         "Configurable journeys and checks for a fast setup and quicker go-live",
         "Easy integration with core banking and origination systems",
      ],
   },
];

export const steps = [
   {},
   {
      step: "Step 1",
      title: "Pre-Call Verification and Dynamic Customer Allocation",
      description:
         "Streamline the process with pre-call system checks, ensuring seamless scheduling and readiness for both agents and customers through parameter-driven allocation.",
      image: preCallVerificationLogo,
   },
   {
      step: "Step 2",
      title: "Call Initiation and Security Checks",
      description: "Automated security protocols ensure secure connections and compliance adherence.",
      image: callInitiationLogo,
   },
   {
      step: "Step 3",
      title: "Compliance with RBI Regulations",
      description:
         "Built to meet RBI’s stringent guidelines, guaranteeing regulatory adherence and secure data handling.",
      image: complianceRBILogo,
   },
   {
      step: "Step 4",
      title: "Document Presentation and Verification",
      description:
         "Customers present ID documents during the call, which are instantly verified using AI-driven OCR and fraud detection.",
      image: documentPresentationLogo,
   },
   {
      step: "Step 5",
      title: "Real-Time Audit and Completion",
      description:
         "Monitor calls live with real-time auditing to ensure accuracy, quality, and compliance at every step.",
      image: realTimeAuditLogo,
   },
   {},
];

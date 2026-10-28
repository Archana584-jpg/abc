import {
   reputationDamageIcon,
   financialLossIcon,
   regularityPenaltiesIcon,
   operationalInefficienciesIcon,
   auSmallBankLogo,
   cosmosBankLogo,
   gatiLogo,
   saurashtraGraminBankLogo,
   rupayBachaoLogo,
   panIndiaCoverageLogo,
   thoroughEvidenceCollectionLogo,
   tailoredVerificationLogo,
   fraudulentClaimsPreventionLogo,
   stringentQualityControlLogo,
   addressValidationLogo,
   trustBuildingLogo,
   geolocationDataCollectionLogo,
   fraudPreventionLogo,
   borrowerAssessmentLogo,
   incomeAssessmentLogo,
   geocodingLogo,
   verificationReportingLogo,
   kycCollectionLogo,
   addressInformationLogo,
   proofOfIdentityLogo,
} from "@/assets/images";

export const riskAndChallengesData = [
   {
      title: "Financial losses",
      description: "Improper due diligence can lead to significant financial losses due to fraud.",
      icon: financialLossIcon,
   },
   {
      title: "Regulatory penalties",
      description: "Non-compliance with regulations may result in fines and legal consequences.",
      icon: regularityPenaltiesIcon,
   },
   {
      title: "Reputation damage",
      description: "Lack of due diligence can harm a company's reputation and trust among customers.",
      icon: reputationDamageIcon,
   },
   {
      title: "Operational inefficiencies",
      description: "Without proper due diligence, businesses may waste resources on unproductive ventures.",
      icon: operationalInefficienciesIcon,
   },
];

export const pvRecordMapping = [
   { title: "Pincodes", recordNumbers: "18000+" },
   { title: "Verifications Per Month", recordNumbers: "1M+" },
   { title: "Field Verifiers", recordNumbers: "5000+" },
];

export const pvClientsLogo = [auSmallBankLogo, cosmosBankLogo, gatiLogo, saurashtraGraminBankLogo, rupayBachaoLogo];

export const pvFeaturesData = [
   {
      icon: panIndiaCoverageLogo,
      title: "Pan India Coverage",
      description: "Nationwide network of trained and vetted field verification agents across India",
   },
   {
      icon: tailoredVerificationLogo,
      title: "Tailored Verification",
      description: "Customizable checklists and requirements to verify data points per each client's specific needs",
   },
   {
      icon: fraudulentClaimsPreventionLogo,
      title: "Fraudulent Claims Prevention",
      description: "Enhanced verification crucial for secure insurance claims processing",
   },
   {
      icon: thoroughEvidenceCollectionLogo,
      title: "Thorough Evidence Collection",
      description:
         "Comprehensive evidence collection including photographs, video documentation and geolocation metadata",
   },
   {
      icon: stringentQualityControlLogo,
      title: "Stringent Quality Control",
      description:
         "Robust quality assurance process with multi-level auditing to ensure accurate and defensible results",
   },
];

export const useCasesData = [
   {
      id: "1",
      tab: "Contact Point Verification",
      childrenData: {
         description:
            "Contact point verification ensures the accuracy and authenticity of the physical information provided by individuals or businesses.",
         keyFeatures: [
            {
               title: "Address Validation",
               description:
                  "The primary feature involves validating the provided address by a physical visit by on-ground verifier.",
               logo: addressValidationLogo,
            },
            {
               title: "Trust Building",
               description:
                  "Fosters trust and credibility by ensuring accurate information collection in the field such as bank information, identity information, physical documents.",
               logo: trustBuildingLogo,
            },
            {
               title: "Geo-location Data Collection",
               description:
                  "Captures geo-location information like longitude & latitude to further validate the provided details.",
               logo: geolocationDataCollectionLogo,
            },
            {
               title: "Fraud Prevention",
               description:
                  "Minimizes the risk of fraudulent activities through thorough data collection and validation.",
               logo: fraudPreventionLogo,
            },
         ],
         additionalKeyFeatures: {
            title: "",
            keyFeatures: [],
         },
      },
   },
   {
      id: "2",
      tab: "Physical Address Verification",
      childrenData: {
         description:
            "Physical address verification is a process used to confirm the accuracy and legitimacy of a physical address provided by an individual or a business entity. This verification is crucial for various purposes, including identity verification, fraud prevention, data collection & document verification.",
         keyFeatures: [
            {
               title: "Address Validation",
               description:
                  "The primary feature involves validating the provided address by a physical visit by on-ground verifier.",
               logo: addressValidationLogo,
            },
            {
               title: "Borrower Assessment",
               description:
                  "Rigorous identity checks authenticate borrowers, mitigating fraud risks for secure lending practices.",
               logo: borrowerAssessmentLogo,
            },
            {
               title: "Income Assessment",
               description:
                  "Thorough assessment via physical KYC ensures accurate determination of income sources and amounts.",
               logo: incomeAssessmentLogo,
            },
            {
               title: "Geocoding",
               description:
                  "Our verification systems incorporate geocoding to pinpoint the exact location of the address on a map.",
               logo: geocodingLogo,
            },
            {
               title: "Verification Reporting",
               description:
                  "Detailed reports generated post-verification,provides information on the status of the address (valid, invalid, or incomplete) and any suggested corrections.",
               logo: verificationReportingLogo,
            },
            {
               title: "KYC Collection",
               description: "Collects details like officially valid documents & physical addresses.",
               logo: kycCollectionLogo,
            },
         ],
         additionalKeyFeatures: {
            title: "Documents Required for Collections",
            keyFeatures: [
               {
                  title: "Address Information",
                  description:
                     "The primary document required is the address itself, provided by the individual or business.",
                  logo: addressInformationLogo,
               },
               {
                  title: "Proof of Identity",
                  description:
                     "In some cases, supplementary documents such as government-issued IDs or utility bills may be required to verify the identity associated with the address.",
                  logo: proofOfIdentityLogo,
               },
            ],
         },
      },
   },
];

export const FAQSection = [
   {
      label: "What is physical verification, and why is it important for merchants?",
      children:
         "Physical verification confirms a location's existence and accuracy. It's vital for merchants to ensure accurate representation and logistical efficiency.",
   },
   {
      label: "How does physical address verification benefit individuals?",
      children:
         "It ensures mail and packages are delivered correctly and aids in verifying identity and residency for various purposes.",
   },
   {
      label: "Can physical verification be done remotely?",
      children: "While some aspects can be remote, on-site visits are often necessary for accuracy.",
   },
   {
      label: "How does contact point verification differ from physical address verification?",
      children:
         "Utility bills, lease agreements, or business licenses are typical requirements to confirm legitimacy. It confirms the validity of contact information like phone numbers or emails, essential for communication.",
   },
   {
      label: "Why do merchants need contact point verification?",
      children:
         "Merchants need contact point verification to prevent fraud, ensure accurate communication, and comply with data protection regulations.",
   },
   {
      label: "Is physical verification necessary for online businesses?",
      children: "Yes, it may be needed to verify the business address, legitimacy, or regulatory compliance.",
   },
   {
      label: "How long does physical verification for retail shops take?",
      children: "Duration varies but typically ranges from a few hours to a couple of days.",
   },
   {
      label: "How are individuals' privacy and security protected during physical verification?",
      children:
         "Strict protocols, including data encryption and access controls, ensure compliance with privacy regulations.",
   },
   {
      label: "Can physical verification services be customized?",
      children:
         "Yes, we offer customizable options to meet specific needs, including tailored checklists and scheduling.",
   },
];

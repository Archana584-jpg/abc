import { userFriendlyLogo, detailedApiLogo, clockLogo, complianceAndSecurityLogo } from "@/assets/images";
import { s3BucketUrl } from "@/utils/config";

export const cardData = [
   {
      title: "Trusted Compliance and Security",
      description:
         "We are ISO 27001 certified and adhere to SOC 2 Type II compliance, prioritizing the highest standards of protection for your data.",
      logo: complianceAndSecurityLogo,
      className: "ml-24",
   },
   {
      title: "Effortless Integration with Detailed API Docs",
      description:
         "Our APIs seamlessly Integrate into your existing systems, and our comprehensive API documentation is there to support you at every step.",
      logo: detailedApiLogo,
      className: "",
   },
   {
      title: "User-Friendly Interface",
      description: "Intuitive design for seamless navigation into the use of the API services in one click.",
      logo: userFriendlyLogo,
      className: "",
   },
   {
      title: "24/7 Seamless Accessibility",
      description:
         "Our multi-provider network is designed to ensure uninterrupted access to critical data around the clock, effectively mitigating downtime risks.",
      logo: clockLogo,
      className: "",
   },
];

export const imageUrl = `${s3BucketUrl}/startupAcceleratorPage/whyGridlinesBackground.svg`;

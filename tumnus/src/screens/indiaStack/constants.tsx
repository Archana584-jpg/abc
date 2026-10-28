import {
   shopLogo,
   fssaiLogo,
   livenessLogo,
   panLogoTBG,
   bankLogo,
   gstinLogoTBG,
   companyLogo,
   udyamLogo,
   aadhaarLogo,
   panLogo,
   dlLogo,
   rcLogo,
   digilockerWBG,
} from "@/assets/images";
import { homeUrl } from "@/utils/config";

export const gridlinesServicesCardsContent = [
   {
      title: "Shop And Establishment",
      logo: shopLogo,
      logoStyle: { height: 38, width: 38 },
      path: `${homeUrl}/products/shops-api`,
   },
   {
      title: "FSSAI License Verification",
      logo: fssaiLogo,
      logoStyle: { height: 46, width: 23 },
      path: `${homeUrl}/products/fssai-api`,
   },
   {
      title: "Liveness check",
      logo: livenessLogo,
      logoStyle: { height: 34, width: 34 },
      path: `${homeUrl}/products/liveness`,
   },
   {
      title: "PAN Verification",
      logo: panLogoTBG,
      logoStyle: { height: 26, width: 40 },
      path: `${homeUrl}/products/pan-api`,
   },
];

export const indiaStackProductGroupCards = [
   {
      title: "Company Verification",
      description: "Onboard new users any time of the day with round the clock access.",
      logo: companyLogo,
      logoStyle: { height: 64, width: 64 },
      path: `${homeUrl}/products/mca-api`,
   },
   {
      title: "GSTIN Verification",
      description: "Simple, easy to use APIs with exhaustive Documentation & integration support.",
      logo: gstinLogoTBG,
      logoStyle: { height: 64, width: 64 },
      path: `${homeUrl}/products/gstin-api`,
   },
   {
      title: "Udyam Registration",
      description: "Monitor high performing APIs with dashboards and status notifications.",
      logo: udyamLogo,
      logoStyle: { height: 86, width: 68 },
      path: `${homeUrl}/products/msme-api`,
   },
   {
      title: "Bank Account Verification",
      description: "Verify bank account details before sending money.",
      logo: bankLogo,
      logoStyle: { height: 58, width: 58 },
      path: `${homeUrl}/products/bank-api`,
   },
];

export const indiaStackAPICardsMapping = [
   { title: "Aadhaar Verification", logo: aadhaarLogo, link: `${homeUrl}/products/aadhaar-api` },
   { title: "PAN Verification", logo: panLogo, link: `${homeUrl}/products/pan-api` },
   { title: "Digilocker APIs", logo: digilockerWBG, link: `${homeUrl}/products/digilocker` },
   { title: "Driving License Verification", logo: dlLogo, link: `${homeUrl}/products/dl-api` },
   { title: "Vehicle RC Verification", logo: rcLogo, link: `${homeUrl}/products/rc-api` },
];

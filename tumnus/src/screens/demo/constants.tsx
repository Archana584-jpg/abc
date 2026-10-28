import { gstinLogo, aadhaarLogo, panLogo, epfoLogo, dlLogo, rcLogo } from "@/assets/images";
import { homeUrl } from "@/utils/config";

export const demoRecordsMapping = [
   { title: "Verifications", recordNumbers: "250 MN+" },
   { title: "APIs", recordNumbers: "100+" },
];

export const demoAPICardsMapping = [
   { title: "GSTIN Verification", logo: gstinLogo, link: `${homeUrl}/products/gstin-api` },
   { title: "Aadhaar Verification", logo: aadhaarLogo, link: `${homeUrl}/products/aadhaar-api` },
   { title: "PAN Verification", logo: panLogo, link: `${homeUrl}/products/pan-api` },
   { title: "Employment Verification", logo: epfoLogo, link: `${homeUrl}/products/epfo-api` },
   { title: "Driving License Verification", logo: dlLogo, link: `${homeUrl}/products/dl-api` },
   { title: "Vehicle RC Verification", logo: rcLogo, link: `${homeUrl}/products/rc-api` },
];

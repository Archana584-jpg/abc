import {
   olaLogo,
   myGlammLogo,
   noBrokerLogo,
   blinkitLogo,
   mobikwikLogo,
   justDialLogo,
   tapLogo,
   reliabilityLogo,
   timeLogo,
   clockLogo,
   securityLogo,
} from "../assets/images";

export const productsByKey: any = {
   "aadhaar-api": {
      productIntegrationCode: `<code>curl —request POST \\<br/>—url https://api.gridlines.io/aadhaar-api/verify \\<br/>—header ‘Content-Type: application/json’ \\<br/> —header ‘X-API-Key: ‘ \\<br/> —header ‘X-Auth-Type: ‘ \\<br/> —data ‘{<br/> “aadhaar_number”: “337XXXXXXX01”,<br/>“consent”: “Y”<br/> }’</code>`,
      key: "aadhaar-api",
   },

   "gstin-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/gstin-api/fetch-lite \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"gstin": "21AAXXXXXXXXXXX",<br/>"consent": "Y"<br/>}'</code>`,
      key: "gstin-api",
   },

   "bank-api": {
      productIntegrationCode: `<code>curl —request POST\\<br/>  —url https://api.gridlines.io/bank-api/verify \\<br/>—header ‘Content-Type: application/json’ \\<br\>—header ‘X-API-Key: ‘ \\<br/>—header ‘X-Auth-Type: ‘ \\<br/>—data ‘{<br/>“account_number”: “0262XXXXXXXXXXXXXX”,<br/>“ifsc”: “YESBXXXXXXXX”,<br/>“consent”: “Y”<br/>}’</code>`,
      key: "bank-api",
   },

   "dl-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/dl-api/fetch \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"driving_license_number": "TS12XXXXXXXXXXX",<br/>"date_of_birth": "1981-XX-XX",<br/>"consent": "Y"<br/>}'</code>`,
      key: "dl-api",
   },

   "rc-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/rc-api/fetch-lite \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"rc_number": "AP09XXXXXX",<br/>"consent": "Y"<br/>}'</code>`,
      key: "rc-api",
   },

   "epfo-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/epfo-api/fetch-uan \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"mobile_number": "968XXXX7X9",<br/>"consent": "Y"<br/>}'</code>`,
      key: "epfo-api",
   },

   "pan-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>  --url https://api.gridlines.io/pan-api/fetch-detailed \\<br/>  --header 'Content-Type: application/json' \\<br/>  --header 'X-API-Key: ' \\<br/> --header 'X-Auth-Type: ' \\<br/> --data '{<br/>"pan_number": "DQXXXXXXXX",<br/> "consent": "Y"<br/> }'</code>`,
      key: "pan-api",
   },

   "cowin-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/cowin-api/meson/certificate \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--header 'X-Transaction-ID: ' \\<br/>--data '{<br/>"beneficiary_id": "3041XXXXXXXXXX"<br/>}'</code>`,
      key: "cowin-api",
   },

   "credit-api": {
      productIntegrationCode: `<code>curl —request POST\\<br/>  —url https://api.gridlines.io/bank-api/verify \\<br/>—header ‘Content-Type: application/json’ \\<br\>—header ‘X-API-Key: ‘ \\<br/>—header ‘X-Auth-Type: ‘ \\<br/>—data ‘{<br/>“account_number”: “0262XXXXXXXXXXXXXX”,<br/>“ifsc”: “YESBXXXXXXXX”,<br/>“consent”: “Y”<br/>}’</code>`,
   },

   "voter-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/voter-api/boson/fetch \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"voter_id": "TDV1XXXXXX",<br/>"consent": "Y"<br/>}'</code>`,
      key: "voter-api",
   },

   "passport-api": {
      key: "passport-api",
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/passport-api/verify \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"file_number": "VS3XXXXXXXXXXXX",<br/>"passport_number": "NXXXXXXXX",<br/>"surname": "JOHN",<br/>"given_name": "DOE",<br/>"date_of_birth": "1994-XX-XX",<br/>"consent": "Y"<br/>}'</code>`,
   },

   "face-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/face-api/verify \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"file_1_url": "https://drive.google.com/file/d<br/>/0B7TM5QXXXXXXXXXXXXXZ0/<br/>view?usp=sharing",<br/>"file_2_url": "https://drive.google.com/file/d<br/>/0B7YYYYYYYYYYYvW/view?<br/>usp=sharing",<br/>"consent": "Y"<br/>}'</code>`,
      key: "face-api",
   },

   "irdai-api": {
      productIntegrationCode: `<code>curl --request POST \\<br/>--url https://api.gridlines.io/irdai-api/insurance-agent/fetch-by-pan \\<br/>--header 'Content-Type: application/json' \\<br/>--header 'X-API-Key: ' \\<br/>--header 'X-Auth-Type: ' \\<br/>--data '{<br/>"pan_number": "AJXXXXXXX",<br/>"consent": "Y"<br/>}'</code>`,
      key: "irdai-api",
   },

   "msme-api": {
      key: "msme-api",
      productIntegrationCode: `<code>curl --request POST \\<br/> --url https://api.gridlines.io/msme-api/udyam \\<br/> --header 'Content-Type: application/json' \\<br/> --header 'X-API-Key: ' \\<br/> --header 'X-Auth-Type: ' \\<br/> --data '{<br/> "udyam_reference_number": "",<br/> "consent": "Y"<br/> }'</code>`,
   },

   "fssai-api": {
      key: "fssai-api",
      productIntegrationCode: `<code>curl --request POST \\<br/> --url https://api.gridlines.io/fssai-api/fetch-license\\<br/> --header 'Content-Type: application/json' \\<br/> --header 'X-API-Key: ' \\<br/> --header 'X-Auth-Type: ' \\<br/> --data '{<br/>"license_number": "",<br/>"consent": "Y"<br/>}'</code>`,
   },

   "compliance-checks": {
      productIntegrationCode: `<code>curl --request POST \\<br/> --url https://api.gridlines.io/compliance-checks/itr-206 \\<br/> --header 'Content-Type: application/json' \\<br/> --header 'X-API-Key: ' \\<br/> --header 'X-Auth-Type: ' \\<br/> --data '{<br/>"pan_id": "DQRXXXXXXX",<br/>"consent": "Y"<br/>}</code>`,
      key: "compliance-checks",
   },
   liveness: {
      key: "liveness",
      productIntegrationCode: `<code>curl --request POST \\<br/> --url https://api.gridlines.io/liveness/passive-check \\<br/> --header 'Accept: application/json' \\<br/> --header 'Content-Type: application/json' \\<br/> --header 'X-API-Key: ' \\<br/> --header 'X-Auth-Type: ' \\<br/> --data '{<br/>"file_url": "string",<br/>"base64_data": "string",<br/>"consent": "Y"<br/>}</code>'`,
   },
   digilocker: {
      key: "digilocker",
      productIntegrationCode: `<code>xcurl --request POST \\<br/> --url https://api.gridlines.io/digilocker/issued-file \\<br/> --header 'Accept: application/json' \\<br/> --header 'Content-Type: application/json' \\<br/> --header 'X-API-Key: ' \\<br/> --header 'X-Auth-Type: ' \\<br/> --header 'X-Transaction-ID: ' \\<br/> --data '{<br/>"file_uri": "in.gov.transport-DRVLC-XXXX",<br/>"format": "XML"<br/>}'</code>`,
   },
   "mca-api": {
      key: "mca-api",
      productIntegrationCode: `<code>curl --request POST \\<br/> --url https://api.gridlines.io/mca-api/fetch-company \\<br/> --header 'Accept: application/json' \\<br/> --header 'Content-Type: application/json' \\<br/> --header 'X-API-Key: ' \\<br/> --header 'X-Auth-Type: ' \\<br/> --data '{<br/>"company_id": "L12345DL2000PLC088349",<br/>"consent": "Y"<br/>}'</code>`,
   },
   "shops-api": {
      key: "shops-api",
      productIntegrationCode: `<code>curl --location 'https://api.gridlines.io/shops-api/verify-registration' \\<br/> --header 'Accept: application/json' \\<br/> --header 'Content-Type: application/json' \\<br/> --header 'X-API-Key:' \\<br/> --header 'X-Auth-Type: API-Key' \\<br/> --data '{<br/>"registration_number" : "23234342424",<br/>"state" : "West Bengal",<br/>"consent" : "Y"<br/>}'</code>`,
   },
};

export const resourceOptions = {
   PRODUCT: "PRODUCT",
};

export const metaContent = {
   title: "Digital Verification API Suite | Gridlines",
   description:
      "APIs for digital identity verification, User KYC, and employment checks. Onboard customers, partners and merchants with Gridlines.",
   keyword: "Digital Verification APIs",
   image_path: "",
};

export const clientsLogo = [olaLogo, blinkitLogo, noBrokerLogo, mobikwikLogo, justDialLogo, myGlammLogo];

export const whyGridlinesCards = [
   {
      title: "Ease of use",
      description: "Simple, easy to use APIs with exhaustive Documentation & integration support",
      logo: tapLogo,
   },
   {
      title: "Reliable and error free",
      description: "Monitor high performing APIs with dashboards and status notifications",
      logo: reliabilityLogo,
   },
   {
      title: "Available",
      description: "Onboard new users any time of the day with round the clock access",
      logo: clockLogo,
   },
   {
      title: "Real Time",
      description: "Instantly retrieve and verify updated information from trusted sources",
      logo: timeLogo,
   },
   {
      title: "Security & Compliance",
      description: "We are ISO certified and SOC 2 Type II compliant to ensure data security",
      logo: securityLogo,
   },
];

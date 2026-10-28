export const sideMenuItems = [
   {
      path: "/aadhaar",
      label: "Aadhaar",
      children: [
         {
            path: "/",
            label: "Aadhaar eKYC",
         },
         {
            path: "/aadhaar/meson",
            label: "Aadhaar eKYC(M)",
         },
         {
            path: "/aadhaar/extract-data",
            label: "Extract Data",
         },
         {
            path: "/aadhaar/ocr",
            label: "OCR",
         },
         {
            path: "/aadhaar/verify",
            label: "Aadhaar Verify",
         },
      ],
   },

   {
      path: "/voter",
      label: "Voter",
   },

   {
      path: "/pan",
      label: "PAN Verification",
      children: [
         {
            path: "/pan/lite",
            label: "PAN Lite",
         },
         {
            path: "/pan/detailed",
            label: "PAN Detailed",
         },
         {
            path: "/pan/verify",
            label: "Verify PAN Details",
         },
         {
            path: "/pan/ocr",
            label: "OCR",
         },
         {
            path: "/pan/aadhaar-link",
            label: "Aadhaar Link Status",
         },
         // {
         //   path: "/pan/tds-certificate-verify",
         //   label: "Verify TDS Certificate",
         // },
         // {
         //   path: "/pan/fetch-tds-credit-details",
         //   label: "TDS Credit Details",
         // },
      ],
   },
   {
      path: "/dl",
      label: "Driving License",
      children: [
         {
            path: "/dl/fetch",
            label: "Fetch DL Details",
         },
      ],
   },
   {
      path: "/rc-verification",
      label: "RC Verification",
   },
   {
      path: "/bank-account-verification",
      label: "Bank Acc. Verification",
   },
   {
      path: "/face-match",
      label: "Face Match",
   },
   {
      path: "/gstin",
      label: "GSTIN",
   },
   // {
   //   path: "/credit-verification",
   //   label: "Credit Verification",
   // },
   {
      path: "/passport",
      label: "Passport Verification",
      children: [
         {
            path: "/passport/verify",
            label: "Verify Passport",
         },
         {
            path: "/passport/generate-mrz",
            label: "Generate MRZ",
         },
         {
            path: "/passport/verify-mrz",
            label: "Verify MRZ",
         },
      ],
   },
   {
      path: "/epfo",
      label: "EPFO Verification",
      children: [
         {
            path: "/epfo/uan",
            label: "Fetch UAN",
         },
         {
            path: "/epfo/uan-details",
            label: "Fetch Latest Employement",
         },
         {
            path: "/epfo/passbook",
            label: "Fetch Passbook",
         },
         {
            path: "/epfo/employment-history",
            label: "Fetch Employment History",
         },
      ],
   },
   {
      path: "/cowin-verification",
      label: "CoWIN Verification",
   },
   {
      path: "/insurance-agent",
      label: "Insurance Agent Verification",
   },
   {
      path: "/msme-verification",
      label: "MSME Verification",
      children: [
         {
            path: "/msme-verification/udyam",
            label: "Verify Udyam Reference",
         },
         {
            path: "/msme-verification/udyog-aadhaar",
            label: "Verify Udyog Aadhaar",
         },
      ],
   },
   {
      path: "/fssai-verification",
      label: "FSSAI Verification",
      children: [
         {
            path: "/fssai-verification/fetch-license",
            label: "Fetch License",
         },
      ],
   },
   {
      path: "/compliance-checks",
      label: "Compliance Checks",
   },
];

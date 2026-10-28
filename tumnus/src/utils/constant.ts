import { homeUrl, s3BucketUrl } from "./config";

export const productsGroupKeyMapping = {
   AADHAAR_VERIFICATION: "aadhaar-api",
   DIGILOCKER: "digilocker",
   COMPLIANCE_CHECKS: "compliance-checks",
   FSSAI: "fssai-api",
   MSME_VERIFICATION: "msme-api",
   EPFO_VERIFICATION: "epfo-api",
   COWIN_VERIFICATION: "cowin-api",
   BANK_VERIFICATION: "bank-api",
   RC_VERIFICATION: "rc-api",
   MCA: "mca-api",
   DL_VERIFICATION: "dl-api",
   VOTER_ID_VERIFICATION: "voter-api",
   GSTIN_VERIFICATION: "gstin-api",
   LIVENESS_VERIFICATION: "liveness",
   FACE_MATCH_VERIFICATION: "face-api",
   PASSPORT_VERIFICATION: "passport-api",
   PAN_VERIFICATION: "pan-api",
   CCRV: "criminal-court-record-verification",
   SHOP_AND_ESTABLISHMENT_VERIFICATION: "shops-api",
};

export const productMappingWRTKey = {
   [productsGroupKeyMapping.AADHAAR_VERIFICATION]: {
      name: "Aadhaar Verification",
      image_uri: `${s3BucketUrl}/products/aadhaar/icons/aadhaarLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.AADHAAR_VERIFICATION}`,
      key: productsGroupKeyMapping.AADHAAR_VERIFICATION,
   },
   [productsGroupKeyMapping.DIGILOCKER]: {
      name: "Digilocker",
      image_uri: `${s3BucketUrl}/products/digiLocker/icons/digiLockerLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.DIGILOCKER}`,
      key: productsGroupKeyMapping.DIGILOCKER,
   },
   [productsGroupKeyMapping.COMPLIANCE_CHECKS]: {
      name: "Compliance Checks",
      image_uri: `${s3BucketUrl}/products/incomeTax/icons/incomeTaxLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.COMPLIANCE_CHECKS}`,
      key: productsGroupKeyMapping.COMPLIANCE_CHECKS,
   },
   [productsGroupKeyMapping.FACE_MATCH_VERIFICATION]: {
      name: "Facematch",
      image_uri: `${s3BucketUrl}/products/faceMatch/icons/faceMatchLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.FACE_MATCH_VERIFICATION}`,
      key: productsGroupKeyMapping.FACE_MATCH_VERIFICATION,
   },
   [productsGroupKeyMapping.FSSAI]: {
      name: "FSSAI License Verification",
      image_uri: `${s3BucketUrl}/products/fssai/icons/fssaiLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.FSSAI}`,
      key: productsGroupKeyMapping.FSSAI,
   },
   [productsGroupKeyMapping.MSME_VERIFICATION]: {
      name: "MSME Verification",
      image_uri: `${s3BucketUrl}/products/msme/icons/msmeLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.MSME_VERIFICATION}`,
      key: productsGroupKeyMapping.MSME_VERIFICATION,
   },
   [productsGroupKeyMapping.EPFO_VERIFICATION]: {
      name: "Employment Verification",
      image_uri: `${s3BucketUrl}/products/epfo/icons/epfoLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.EPFO_VERIFICATION}`,
      key: productsGroupKeyMapping.EPFO_VERIFICATION,
   },
   [productsGroupKeyMapping.COWIN_VERIFICATION]: {
      name: "Cowin Verfication",
      image_uri: `${s3BucketUrl}/products/cowin/icons/cowinLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.COWIN_VERIFICATION}`,
      key: productsGroupKeyMapping.COWIN_VERIFICATION,
   },
   [productsGroupKeyMapping.BANK_VERIFICATION]: {
      name: "Bank Account Verification",
      image_uri: `${s3BucketUrl}/products/bankAccount/icons/bankLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.BANK_VERIFICATION}`,
      key: productsGroupKeyMapping.BANK_VERIFICATION,
   },
   [productsGroupKeyMapping.RC_VERIFICATION]: {
      name: "Vehicle RC Verification",
      image_uri: `${s3BucketUrl}/products/rc/icons/rcLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.RC_VERIFICATION}`,
      key: productsGroupKeyMapping.RC_VERIFICATION,
   },
   [productsGroupKeyMapping.MCA]: {
      name: "Company Verification",
      image_uri: `${s3BucketUrl}/products/companyVerfication/icons/companyVerificationLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.MCA}`,
      key: productsGroupKeyMapping.MCA,
   },
   [productsGroupKeyMapping.DL_VERIFICATION]: {
      name: "Driving License Verification",
      image_uri: `${s3BucketUrl}/products/dl/icons/dlLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.DL_VERIFICATION}`,
      key: productsGroupKeyMapping.DL_VERIFICATION,
   },
   [productsGroupKeyMapping.VOTER_ID_VERIFICATION]: {
      name: "Voter ID Verification",
      image_uri: `${s3BucketUrl}/products/voterId/icons/voterIdLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.VOTER_ID_VERIFICATION}`,
      key: productsGroupKeyMapping.VOTER_ID_VERIFICATION,
   },
   [productsGroupKeyMapping.GSTIN_VERIFICATION]: {
      name: "GSTIN Verification",
      image_uri: `${s3BucketUrl}/products/gstin/icons/gstinLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.GSTIN_VERIFICATION}`,
      key: productsGroupKeyMapping.GSTIN_VERIFICATION,
   },
   [productsGroupKeyMapping.LIVENESS_VERIFICATION]: {
      name: "Liveness Check",
      image_uri: `${s3BucketUrl}/products/liveness/icons/livenessLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.LIVENESS_VERIFICATION}`,
   },
   [productsGroupKeyMapping.PASSPORT_VERIFICATION]: {
      name: "Passport Verification",
      image_uri: `${s3BucketUrl}/products/passport/icons/passportLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.PASSPORT_VERIFICATION}`,
      key: productsGroupKeyMapping.PASSPORT_VERIFICATION,
   },
   [productsGroupKeyMapping.PAN_VERIFICATION]: {
      name: "PAN Verification",
      image_uri: `${s3BucketUrl}/products/pan/icons/panLogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.PAN_VERIFICATION}`,
      key: productsGroupKeyMapping.PAN_VERIFICATION,
   },
   [productsGroupKeyMapping.CCRV]: {
      name: "Criminal and court record verification",
      image_uri: `${s3BucketUrl}/products/ccrv/icons/ccrvLogo.svg`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.CCRV}`,
      key: productsGroupKeyMapping.CCRV,
   },
   [productsGroupKeyMapping.SHOP_AND_ESTABLISHMENT_VERIFICATION]: {
      name: "Shop and Establisments",
      image_uri: `${s3BucketUrl}/products/sne/icons/SNELogo.png`,
      path: `${homeUrl}/products/${productsGroupKeyMapping.SHOP_AND_ESTABLISHMENT_VERIFICATION}`,
      key: productsGroupKeyMapping.SHOP_AND_ESTABLISHMENT_VERIFICATION,
   },
};

export const imageExtensionType = {
   SVG: "svg",
   PNG: "png",
};

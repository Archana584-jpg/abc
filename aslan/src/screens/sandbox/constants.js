import { productsOfferingsMapping, productsMapping } from "utils/constants";

const {
   AADHAAR_VERIFICATION,
   DIGILOCKER,
   MSME_VERIFICATION,
   MCA,
   BANK_VERIFICATION,
   COMPLIANCE_CHECKS,
   FSSAI,
   RC_VERIFICATION,
   DL_VERIFICATION,
   VOTER_ID_VERIFICATION,
   GSTIN_VERIFICATION,
   LIVENESS_VERIFICATION,
   FACE_MATCH_VERIFICATION,
   PASSPORT_VERIFICATION,
   PAN_VERIFICATION,
   EPFO_VERIFICATION,
   SHOP_AND_ESTABLISHMENTS,
   ADDRESS_VERIFICATION,
   PROFILE_LOOKUP,
} = productsMapping;
const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];
const digilockerVerificationService = productsOfferingsMapping[DIGILOCKER];
const msmeVerificationService = productsOfferingsMapping[MSME_VERIFICATION];
const mcaVerificationService = productsOfferingsMapping[MCA];
const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];
const complianceChecksService = productsOfferingsMapping[COMPLIANCE_CHECKS];
const fssaiVerificationService = productsOfferingsMapping[FSSAI];
const rcVerificationService = productsOfferingsMapping[RC_VERIFICATION];
const dlVerificationService = productsOfferingsMapping[DL_VERIFICATION];
const voterIdVerificationService = productsOfferingsMapping[VOTER_ID_VERIFICATION];
const gstinVerificationService = productsOfferingsMapping[GSTIN_VERIFICATION];
const livenessVerificationService = productsOfferingsMapping[LIVENESS_VERIFICATION];
const faceMatchVerificationService = productsOfferingsMapping[FACE_MATCH_VERIFICATION];
const passportVerificationService = productsOfferingsMapping[PASSPORT_VERIFICATION];
const panVerificationService = productsOfferingsMapping[PAN_VERIFICATION];
const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];
const sneVerificationService = productsOfferingsMapping[SHOP_AND_ESTABLISHMENTS];
const addressVerificationService = productsOfferingsMapping[ADDRESS_VERIFICATION];
const profileService = productsOfferingsMapping[PROFILE_LOOKUP];

export const outputType = {
   OUTPUT: "OUTPUT",
   OUTPUT_WITH_IMAGE: "OUTPUT_WITH_IMAGE",
   OUTPUT_WITH_COLLAPSIBLE: "OUTPUT_WITH_COLLAPSIBLE",
};

export const outputViewOptions = {
   TABULAR: "TABULAR",
   JSON: "JSON",
};

export const productOfferingOutputSteps = {
   [digilockerVerificationService.key]: {
      [digilockerVerificationService.offerings.DIGILOCKER_KYC]: {
         INITIAL_OUTPUT: "INITIAL_OUTPUT",
         JSON_OUTPUT: "JSON_OUTPUT",
      },
   },
   [epfoVerificationService.key]: {
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: {
         INITIAL_OUTPUT: "INITIAL_OUTPUT",
         JSON_OUTPUT: "JSON_OUTPUT",
      },
   },
};

export const productOfferingFormSteps = {
   [aadhaarVerificationService.key]: {
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]: {
         INITIAL_FORM: "INITIAL_FORM",
         OTP_VERIFICATION_FORM: "OTP_VERIFICATION_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]: {
         INITIAL_FORM: "INITIAL_FORM",
         AADHAAR_INPUT_FORM: "AADHAAR_INPUT_FORM",
         CAPTCHA_VERIFICATION_FORM: "CAPTCHA_VERIFICATION_FORM",
         OTP_VERIFICATION_FORM: "OTP_VERIFICATION_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [aadhaarVerificationService.offerings.AADHAAR_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [aadhaarVerificationService.offerings.AADHAAR_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [aadhaarVerificationService.offerings.AADHAAR_OCR_V2]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [aadhaarVerificationService.offerings.AADHAAR_UID_MASKING]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [digilockerVerificationService.key]: {
      [digilockerVerificationService.offerings.DIGILOCKER_KYC]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [msmeVerificationService.key]: {
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: {
         INITIAL_FORM: "INITIAL_FORM",
         OTP_VERIFICATION_FORM: "OTP_VERIFICATION_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [mcaVerificationService.key]: {
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [mcaVerificationService.offerings.MCA_VERIFY_TAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [bankVerificationService.key]: {
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.UPI_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.UPI_ID_FETCH]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.BANK_STATEMENT_REPORT]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.BANK_CHEQUE_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.BANK_STATEMENT_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },

      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },

      [bankVerificationService.offerings.BANK_IFSC_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.SALARY_SLIP_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [bankVerificationService.offerings.UPI_VERIFY_ADVANCED]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [complianceChecksService.key]: {
      [complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [fssaiVerificationService.key]: {
      [fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [rcVerificationService.key]: {
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [dlVerificationService.key]: {
      [dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [dlVerificationService.offerings.DRIVING_LICENSE_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [voterIdVerificationService.key]: {
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON]: {
         INITIAL_FORM: "INITIAL_FORM",
         CAPTCHA_VERIFICATION_FORM: "CAPTCHA_VERIFICATION_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [voterIdVerificationService.offerings.VOTER_ID_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [gstinVerificationService.key]: {
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_LITE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_DETAILED]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_REPORT]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [livenessVerificationService.key]: {
      [livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [faceMatchVerificationService.key]: {
      [faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [passportVerificationService.key]: {
      [passportVerificationService.offerings.PASSPORT_MRZ_GENERATE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [passportVerificationService.offerings.PASSPORT_MRZ_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [passportVerificationService.offerings.PASSPORT_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [passportVerificationService.offerings.PASSPORT_FETCH]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [passportVerificationService.offerings.PASSPORT_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [panVerificationService.key]: {
      [panVerificationService.offerings.PAN_VERIFY_V2]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_DETAILED]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_LITE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_OCR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_BUSINESS_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_LITE_PLUS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_FATHER_NAME]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_VERIFY_V3]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_ADVANCED]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_ESSENTIALS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_AADHAAR]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_CARD_NAME]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [epfoVerificationService.key]: {
      [epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: {
         INITIAL_FORM: "INITIAL_FORM",
         OTP_VERIFICATION_FORM: "OTP_VERIFICATION_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [sneVerificationService.key]: {
      [sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [addressVerificationService.key]: {
      [addressVerificationService.offerings.ADDRESS_VALIDATION]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
   [profileService.key]: {
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_MOBILE_PREFILL]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: {
         INITIAL_FORM: "INITIAL_FORM",
         FINAL_FORM: "FINAL_FORM",
      },
   },
};

export const outputKeyMapping = {
   PHOTO_BASE64: "photo_base64",
   XML_BASE64: "xml_base64",
   MIME: "mime",
   AADHAAR_DATA: "aadhaar_data",
   OCR_DATA: "ocr_data",
   DOCUMENT: "document",
   ENTERPRISE_DATA: "enterprise_data",
   NIC_DATA: "nic_data",
   ENTERPRISE_UNITS: "enterprise_units",
   OWNER_DETAILS: "owner_details",
   BANK_DETAILS: "bank_details",
   CAPITAL_INVESTMENTS: "capital_investments",
   TOTAL_EMPLOYEES: "total_employees",
   MALE_EMPLOYEES: "male_employees",
   FEMALE_EMPLOYEES: "female_employees",
   COMPANIES: "companies",
   DIRECTOR_DATA: "director_data",
   COMPANY_DATA: "company_data",
   DOC_TYPE: "doc_type",
   BANK_ACCOUNT_DATA: "bank_account_data",
   UPI_DATA: "upi_data",
   ITR_206_COMPLIANCE_DATA: "itr_206_compliance_data",
   FSSAI_DATA: "fssai_data",
   RC_DATA: "rc_data",
   CHALLAN_DATA: "challan_data",
   DRIVING_LICENSE_DATA: "driving_license_data",
   VOTER_DATA: "voter_data",
   GSTIN_DATA: "gstin_data",
   RESULTS: "results",
   MESSAGE: "message",
   TRANSACTION_ID: "transaction_id",
   CONFIDENCE: "confidence",
   MRZ_DATA: "mrz_data",
   PAN_DATA: "pan_data",
   EMPLOYMENT_DATA: "employment_data",
   UAN_LIST: "uan_list",
   EMPLOYERS: "employers",
   UAN_NUMBER: "uan_number",
   PASSPORT_DATA: "passport_data",
   UPI_ACCOUNT_INFO: "upi_account_info",
   BUSINESS_DATA: "business_data",
   SHOP_ESTABLISHMENT_DATA: "shop_establishment_data",
   ESTABLISHMENT_DATA: "establishment_data",
   ADDRESS_VALIDATION_DATA: "address_validation_data",
   DELIVERY_DATA: "delivery_data",
   ADDRESS_PHONE_CORRELATION_DATA: "address_phone_correlation_data",
   UDYAM_CERTIFICATE_URL: "udyam_certificate_url",
   UDYAM_DETAILS: "udyam_details",
   PERSONAL_DATA: "personal_data",
   ADDRESS_DATA: "address_data",
   PERSONAL_INFORMATION: "personal_information",
   NATIONAL_DOCUMENT_DATA: "national_document_data",
   MOBILE_LOOKUP_DATA: "mobile_lookup_data",
   MOBILE_NUMBER_AGE_DATA: "mobile_number_age_data",
   BANK_ACCOUNT_VERIFICATION_DATA: "bank_account_verification_data",
   TAN_DETAILS: "tan_details",
   PAN_DETAILS: "pan_details",
   DIN_DETAILS: "din_details",
   ELECTRICITY_BILL_DATA: "electricity_bill_data",
   MASKED_AADHAAR_DATA: "masked_aadhaar_data",
   MASKED_ADHAAR_BASE64: "masked_base64",
   VEHICLE_DETAILS: "vehicle_details",
   UDYAM_NUMBER: "udyam_number",
   UDYAM_LIST: "udyam_list",
   UDYAM_SOURCE: "udyam_source",
   CIN_LIST: "cin_list",
   CIN_DETAILS: "cin_details",
   ENTITY_LINKAGE_DATA: "entity_linkage_data",
   TURNOVER_DETAILS: "turnover_details",
   CONTACT_DETAILS: "contact_details",
   GST_CERTIFICATE_LINK: "gst_certificate_link",
   PASSBOOK_DATA: "passbook_data",
   VEHICLE_FASTAG_DATA: "vehicle_fastag_data",
   BANK_IFSC_DATA: "bank_ifsc_data",
   NAME_LOOKUP_DATA: "name_lookup_data",
   VEHICLE_DATA: "vehicle_data",
   DIGITAL_PROFILE_DATA: "digital_profile_data",
   DATA: "data",
   UAN_PROFILE_DATA: "uan_profile_data",
   ENRICHMENT_DATA: "enrichment_data",
   DATA_VECTORS_REQUESTED: "data_vectors_requested",
   DATA_VECTORS_EFFECTIVE: "data_vectors_effective",
};

// this is used for excluding reult keys from tabular result
export const keysToExcludeInTabularOutput = [
   outputKeyMapping.PHOTO_BASE64,
   outputKeyMapping.XML_BASE64,
   outputKeyMapping.MIME,
];

export const displayComponents = {
   OUTPUT: "OUTPUT",
   SAMPLE_OUTPUT: "SAMPLE_OUTPUT",
   USER_INPUT: "USER_INPUT",
};

export const formActionsKeyMapping = {
   RESET: "RESET",
   RESEND_OTP: "RESEND_OTP",
   REGENERATE_CAPTCHA: "REGENERATE_CAPTCHA",
};

// Only states whose value should be reset to their initial state after a reset action should be mentioned in this object below
export const initialState = {
   offeringCurrentStep: "INITIAL_FORM",
   transactionalData: {
      loading: false,
      data: {},
      error: "",
   },
   result: {
      loading: false,
      data: {},
      error: "",
   },
   captchaResponse: {
      loading: false,
      data: {},
      error: "",
   },
   formDataInitialValuesWRTProductOfferingStep: {},
   issuedFile: {
      loading: false,
      data: {},
      error: "",
   },
};

export const activeDemoProducts = {
   [productsMapping.AADHAAR_VERIFICATION]: true,
   [productsMapping.DIGILOCKER]: true,
   [productsMapping.BANK_VERIFICATION]: true,
   [productsMapping.MSME_VERIFICATION]: true,
   [productsMapping.MCA]: true,
   [productsMapping.COMPLIANCE_CHECKS]: true,
   [productsMapping.FSSAI]: true,
   [productsMapping.RC_VERIFICATION]: true,
   [productsMapping.DL_VERIFICATION]: true,
   [productsMapping.VOTER_ID_VERIFICATION]: true,
   [productsMapping.GSTIN_VERIFICATION]: true,
   [productsMapping.LIVENESS_VERIFICATION]: true,
   [productsMapping.FACE_MATCH_VERIFICATION]: true,
   [productsMapping.PASSPORT_VERIFICATION]: true,
   [productsMapping.PAN_VERIFICATION]: true,
   [productsMapping.EPFO_VERIFICATION]: true,
   [productsMapping.SHOP_AND_ESTABLISHMENTS]: true,
   [productsMapping.ADDRESS_VERIFICATION]: true,
   [productsMapping.PROFILE_LOOKUP]: true,
};

export const userPreviousFormInputWRTProductOffering = {
   [aadhaarVerificationService.key]: {
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]: {
         steps: {
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
            ].OTP_VERIFICATION_FORM]: {
               userInputsKeysToView: ["aadhaar_number", "consent"],
            },
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
            ].FINAL_FORM]: {
               userInputsKeysToView: ["otp", "include_xml", "share_code"],
            },
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]: {
         steps: {
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
            ].AADHAAR_INPUT_FORM]: {
               userInputsKeysToView: ["consent"],
            },
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
            ].CAPTCHA_VERIFICATION_FORM]: {
               userInputsKeysToView: ["aadhaar_number"],
            },
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
            ].OTP_VERIFICATION_FORM]: {
               userInputsKeysToView: ["aadhaar_number", "captcha", "consent"],
            },
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
            ].FINAL_FORM]: {
               userInputsKeysToView: ["otp", "include_xml", "share_code"],
            },
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_OCR]: {
         steps: {
            [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR]
               .FINAL_FORM]: {
               userInputsKeysToView: ["base64_data", "consent"],
            },
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_VERIFY]: {
         steps: {
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["aadhaar_number", "consent"],
            },
         },
      },
      [aadhaarVerificationService.offerings.AADHAAREXTRACT_DATA_FROM_XML_ZIP_OCR]: {
         steps: {
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT
            ].FINAL_FORM]: {
               userInputsKeysToView: ["base64", "share_code", "consent"],
            },
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_OCR_V2]: {
         steps: {
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_OCR_V2
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file_front", "file_back", "consent"],
            },
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_UID_MASKING]: {
         steps: {
            [productOfferingFormSteps[aadhaarVerificationService.key][
               aadhaarVerificationService.offerings.AADHAAR_UID_MASKING
            ].FINAL_FORM]: {
               userInputsKeysToView: ["base64_data", "consent"],
            },
         },
      },
   },
   [digilockerVerificationService.key]: {
      [digilockerVerificationService.offerings.DIGILOCKER_KYC]: {
         steps: {
            [productOfferingFormSteps[digilockerVerificationService.key][
               digilockerVerificationService.offerings.DIGILOCKER_KYC
            ].FINAL_FORM]: {
               userInputsKeysToView: ["consent"],
            },
         },
      },
   },
   [msmeVerificationService.key]: {
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["udyam_reference_number", "consent"],
            },
         },
      },
      [msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["udyog_aadhaar_number", "consent"],
            },
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
            ].OTP_VERIFICATION_FORM]: {
               userInputsKeysToView: ["udyam_reference_number", "mobile_number", "consent"],
            },
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
            ].FINAL_FORM]: {
               userInputsKeysToView: ["otp"],
            },
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE
            ].FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED
            ].FINAL_FORM]: {
               userInputsKeysToView: ["udyam_reference_number", "consent"],
            },
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file_front", "consent"],
            },
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][
               msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "detailed_response", "consent"],
            },
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]: {
         steps: {
            [productOfferingFormSteps[msmeVerificationService.key][msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "pan_number", "email", "gstin", "consent"],
            },
         },
      },
   },
   [mcaVerificationService.key]: {
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][
               mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["company_id", "consent"],
            },
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][
               mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["din", "consent"],
            },
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][
               mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME
            ].FINAL_FORM]: {
               userInputsKeysToView: ["name", "consent"],
            },
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan", "consent"],
            },
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]
               .FINAL_FORM]: {
               userInputsKeysToView: ["din", "consent"],
            },
         },
      },
      [mcaVerificationService.offerings.MCA_VERIFY_TAN]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_VERIFY_TAN]
               .FINAL_FORM]: {
               userInputsKeysToView: ["tan", "consent"],
            },
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: {
         steps: {
            [productOfferingFormSteps[mcaVerificationService.key][
               mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN
            ].FINAL_FORM]: {
               userInputsKeysToView: ["din", "consent"],
            },
         },
      },
   },
   [bankVerificationService.key]: {
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.BANK_ACCOUNT_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["account_number", "ifsc", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.UPI_VERIFY]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY]
               .FINAL_FORM]: {
               userInputsKeysToView: ["upi", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.UPI_ID_FETCH]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_ID_FETCH]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.BANK_STATEMENT_REPORT]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.BANK_STATEMENT_REPORT
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file", "bank_name", "password", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2
            ].FINAL_FORM]: {
               userInputsKeysToView: ["account_number", "ifsc", "name", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.BANK_CHEQUE_OCR]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_CHEQUE_OCR]
               .FINAL_FORM]: {
               userInputsKeysToView: ["file_front", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.BANK_STATEMENT_OCR]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_CHEQUE_OCR]
               .FINAL_FORM]: {
               userInputsKeysToView: ["file_front", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["account_number", "ifsc", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID
            ].FINAL_FORM]: {
               userInputsKeysToView: ["account_number", "ifsc", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE
            ].FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI
            ].FINAL_FORM]: {
               userInputsKeysToView: ["upi", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.BANK_IFSC_VERIFY]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_IFSC_VERIFY]
               .FINAL_FORM]: {
               userInputsKeysToView: ["ifsc", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.SALARY_SLIP_OCR]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.SALARY_SLIP_OCR]
               .FINAL_FORM]: {
               userInputsKeysToView: ["file_url", "base64_data", "consent"],
            },
         },
      },
      [bankVerificationService.offerings.UPI_VERIFY_ADVANCED]: {
         steps: {
            [productOfferingFormSteps[bankVerificationService.key][
               bankVerificationService.offerings.UPI_VERIFY_ADVANCED
            ].FINAL_FORM]: {
               userInputsKeysToView: ["upi", "consent_text", "consent"],
            },
         },
      },
   },
   [complianceChecksService.key]: {
      [complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY]: {
         steps: {
            [productOfferingFormSteps[complianceChecksService.key][
               complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_id", "consent"],
            },
         },
      },
   },
   [fssaiVerificationService.key]: {
      [fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]: {
         steps: {
            [productOfferingFormSteps[fssaiVerificationService.key][
               fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH
            ].FINAL_FORM]: {
               userInputsKeysToView: ["license_number", "include_products", "consent"],
            },
         },
      },
   },
   [rcVerificationService.key]: {
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED
            ].FINAL_FORM]: {
               userInputsKeysToView: ["rc_number", "owner_name", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["rc_number", "owner_name", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN
            ].FINAL_FORM]: {
               userInputsKeysToView: ["rc_number", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN
            ].FINAL_FORM]: {
               userInputsKeysToView: ["rc_number", "chassis_number", "engine_number", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["chassis_number", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED
            ].FINAL_FORM]: {
               userInputsKeysToView: ["rc_number", "tag_id", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE
            ].FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["chassis_number", "consent"],
            },
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]: {
         steps: {
            [productOfferingFormSteps[rcVerificationService.key][
               rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT
            ].FINAL_FORM]: {
               userInputsKeysToView: ["rc_number", "consent"],
            },
         },
      },
   },
   [dlVerificationService.key]: {
      [dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS]: {
         steps: {
            [productOfferingFormSteps[dlVerificationService.key][
               dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["driving_license_number", "date_of_birth", "consent"],
            },
         },
      },
      [dlVerificationService.offerings.DRIVING_LICENSE_OCR]: {
         steps: {
            [productOfferingFormSteps[dlVerificationService.key][dlVerificationService.offerings.DRIVING_LICENSE_OCR]
               .FINAL_FORM]: {
               userInputsKeysToView: ["file_front", "file_back", "consent"],
            },
         },
      },
   },
   [voterIdVerificationService.key]: {
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON]: {
         steps: {
            [productOfferingFormSteps[voterIdVerificationService.key][
               voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
            ].FINAL_FORM]: {
               userInputsKeysToView: ["voter_id", "consent"],
            },
         },
      },
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON]: {
         steps: {
            [productOfferingFormSteps[voterIdVerificationService.key][
               voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
            ].CAPTCHA_VERIFICATION_FORM]: {
               userInputsKeysToView: ["consent"],
            },
            [productOfferingFormSteps[voterIdVerificationService.key][
               voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
            ].FINAL_FORM]: {
               userInputsKeysToView: ["voter_id", "captcha", "consent"],
            },
         },
      },
      [voterIdVerificationService.offerings.VOTER_ID_OCR]: {
         steps: {
            [productOfferingFormSteps[voterIdVerificationService.key][
               voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file_front", "file_back", "consent"],
            },
         },
      },
   },
   [gstinVerificationService.key]: {
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME
            ].FINAL_FORM]: {
               userInputsKeysToView: ["company_name", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_LITE]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_LITE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["gstin", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_DETAILED]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_DETAILED
            ].FINAL_FORM]: {
               userInputsKeysToView: ["gstin", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_REPORT]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_REPORT]
               .FINAL_FORM]: {
               userInputsKeysToView: ["username", "password", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["gstin", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES
            ].FINAL_FORM]: {
               userInputsKeysToView: ["gstin", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["gstin", "financial_year", "consent"],
            },
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE]: {
         steps: {
            [productOfferingFormSteps[gstinVerificationService.key][
               gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE
            ].FINAL_FORM]: {
               userInputsKeysToView: ["username", "password", "consent"],
            },
         },
      },
   },
   [livenessVerificationService.key]: {
      [livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK]: {
         steps: {
            [productOfferingFormSteps[livenessVerificationService.key][
               livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file_url", "base64_data", "consent"],
            },
         },
      },
   },
   [faceMatchVerificationService.key]: {
      [faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION]: {
         steps: {
            [productOfferingFormSteps[faceMatchVerificationService.key][
               faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file_1_url", "file_2_url", "file_1_base64", "file_2_base64", "consent"],
            },
         },
      },
   },
   [passportVerificationService.key]: {
      [passportVerificationService.offerings.PASSPORT_MRZ_GENERATE]: {
         steps: {
            [productOfferingFormSteps[passportVerificationService.key][
               passportVerificationService.offerings.PASSPORT_MRZ_GENERATE
            ].FINAL_FORM]: {
               userInputsKeysToView: [
                  "country_code",
                  "passport_number",
                  "surname",
                  "given_name",
                  "gender",
                  "date_of_birth",
                  "date_of_expiry",
                  "consent",
               ],
            },
         },
      },
      [passportVerificationService.offerings.PASSPORT_MRZ_VERIFY]: {
         steps: {
            [productOfferingFormSteps[passportVerificationService.key][
               passportVerificationService.offerings.PASSPORT_MRZ_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: [
                  "country_code",
                  "passport_number",
                  "surname",
                  "given_name",
                  "gender",
                  "date_of_birth",
                  "date_of_expiry",
                  "mrz_first_line",
                  "mrz_second_line",
                  "consent",
               ],
            },
         },
      },
      [passportVerificationService.offerings.PASSPORT_VERIFY]: {
         steps: {
            [productOfferingFormSteps[passportVerificationService.key][
               passportVerificationService.offerings.PASSPORT_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: [
                  "file_number",
                  "passport_number",
                  "surname",
                  "given_name",
                  "date_of_birth",
                  "consent",
               ],
            },
         },
      },
      [passportVerificationService.offerings.PASSPORT_FETCH]: {
         steps: {
            [productOfferingFormSteps[passportVerificationService.key][
               passportVerificationService.offerings.PASSPORT_FETCH
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file_number", "date_of_birth", "consent"],
            },
         },
      },
      [passportVerificationService.offerings.PASSPORT_OCR]: {
         steps: {
            [productOfferingFormSteps[passportVerificationService.key][
               passportVerificationService.offerings.PASSPORT_OCR
            ].FINAL_FORM]: {
               userInputsKeysToView: ["file_front", "file_back", "consent"],
            },
         },
      },
   },
   [panVerificationService.key]: {
      [panVerificationService.offerings.PAN_VERIFY_V2]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V2]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_id", "name", "date_of_birth", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_DETAILED]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_DETAILED]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_LITE]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_OCR]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_OCR].FINAL_FORM]:
               {
                  userInputsKeysToView: ["base64_data", "consent"],
               },
         },
      },
      [panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][
               panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "aadhaar_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_BUSINESS_VERIFY]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_BUSINESS_VERIFY]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_LITE_PLUS]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE_PLUS]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_FATHER_NAME]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][
               panVerificationService.offerings.PAN_FETCH_FATHER_NAME
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_VERIFY_V3]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V3]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_id", "name", "date_of_birth", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_AADHAAR]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_AADHAAR]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_ESSENTIALS]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ESSENTIALS]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][
               panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_id", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_ADVANCED]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ADVANCED]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_CARD_NAME]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_CARD_NAME]
               .FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent_text", "consent"],
            },
         },
      },
      [panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS]: {
         steps: {
            [productOfferingFormSteps[panVerificationService.key][
               panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
   },
   [epfoVerificationService.key]: {
      [epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT
            ].FINAL_FORM]: {
               userInputsKeysToView: ["uan", "consent"],
            },
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE
            ].FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "pan_number", "consent"],
            },
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN
            ].FINAL_FORM]: {
               userInputsKeysToView: ["uan", "consent"],
            },
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK
            ].OTP_VERIFICATION_FORM]: {
               userInputsKeysToView: ["uan", "consent"],
            },
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK
            ].FINAL_FORM]: {
               userInputsKeysToView: ["otp"],
            },
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN
            ].FINAL_FORM]: {
               userInputsKeysToView: ["pan_number", "consent"],
            },
         },
      },
      [epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["employer_name", "consent"],
            },
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP
            ].FINAL_FORM]: {
               userInputsKeysToView: ["uan", "consent"],
            },
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS]: {
         steps: {
            [productOfferingFormSteps[epfoVerificationService.key][
               epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["uan", "consent"],
            },
         },
      },
   },
   [sneVerificationService.key]: {
      [sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]: {
         steps: {
            [productOfferingFormSteps[sneVerificationService.key][
               sneVerificationService.offerings.SNE_REGISTRATION_VERIFY
            ].FINAL_FORM]: {
               userInputsKeysToView: ["registration_number", "state", "consent"],
            },
         },
      },
   },
   [addressVerificationService.key]: {
      [addressVerificationService.offerings.ADDRESS_VALIDATION]: {
         steps: {
            [productOfferingFormSteps[addressVerificationService.key][
               addressVerificationService.offerings.ADDRESS_VALIDATION
            ].FINAL_FORM]: {
               userInputsKeysToView: ["address", "city", "state", "pincode", "language", "consent"],
            },
         },
      },
      [addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION]: {
         steps: {
            [productOfferingFormSteps[addressVerificationService.key][
               addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION
            ].FINAL_FORM]: {
               userInputsKeysToView: ["address", "city", "state", "pincode", "phone_number", "consent_text", "consent"],
            },
         },
      },
      [addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION]: {
         steps: {
            [productOfferingFormSteps[addressVerificationService.key][
               addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION
            ].FINAL_FORM]: {
               userInputsKeysToView: ["address", "city", "state", "pincode", "phone_number", "consent_text", "consent"],
            },
         },
      },
   },
   [profileService.key]: {
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["phone", "first_name", "last_name", "pan", "consent_text", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: {
         steps: {
            [productOfferingFormSteps[profileService.key][
               profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["phone", "first_name", "last_name", "pan", "consent_text", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]
               .FINAL_FORM]: {
               userInputsKeysToView: ["phone", "first_name", "last_name", "pan", "consent_text", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]
               .FINAL_FORM]: {
               userInputsKeysToView: ["phone", "first_name", "last_name", "consent_text", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: {
         steps: {
            [productOfferingFormSteps[profileService.key][
               profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL
            ].FINAL_FORM]: {
               userInputsKeysToView: [
                  "electricity_provider",
                  "consumer_number",
                  "mobile_number",
                  "installation_number",
                  "operator_code",
                  "consent",
               ],
            },
         },
      },
      [profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile", "pan", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_MOBILE_PREFILL]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_MOBILE_PREFILL].FINAL_FORM]:
               {
                  userInputsKeysToView: ["mobile_number", "first_name", "last_name", "consent"],
               },
         },
      },
      [profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]
               .FINAL_FORM]: {
               userInputsKeysToView: ["mobile_number", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: {
         steps: {
            [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]
               .FINAL_FORM]: {
               userInputsKeysToView: ["phone", "email", "name", "consent"],
            },
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: {
         steps: {
            [productOfferingFormSteps[profileService.key][
               profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS
            ].FINAL_FORM]: {
               userInputsKeysToView: ["card", "phone", "vpa", "data_vectors", "consent"],
            },
         },
      },
   },
};

export const offeringsEndpointMapping = {
   UDYAM: "udyam",
   BOSON: "boson",
   MESON: "meson",
   UDYOG_AADHAAR: "udyog-aadhaar",
   ISSUED_FILES: "issued-files",
   VERIFY: "verify",
   ITR_206: "itr-206",
   FETCH_LICENSE: "fetch-license",
   FETCH_DETAILED: "fetch-detailed",
   FETCH_LITE: "fetch-lite",
   FETCH_DETAILED_CHALLAN: "fetch-detailed-challan",
   OCR: "ocr",
   EXTRACT_DATA: "extract-data",
   FETCH: "fetch",
   TRIGGER_REPORT: "trigger-report",
   FETCH_BY_NAME: "fetch-by-name",
   FETCH_BY_PAN: "fetch-by-pan",
   FETCH_VOTER_BOSON: "boson/fetch",
   FETCH_VOTER_MESON: "meson/fetch",
   PASSIVE_CHECK: "passive-check",
   GENERATE_MRZ: "generate-mrz",
   VERIFY_MRZ: "verify-mrz",
   V2_VERIFY: "v2/verify",
   CHECK_AADHAAR_LINK: "check-aadhaar-link",
   EMPLOYMENT_HISTORY_FETCH_LATEST: "employment-history/fetch-latest",
   EMPLOYERS_PASSBOOK: "passbook/employers",
   FETCH_PASSBOOK: "passbook/fetch",
   EMPLOYMENT_HISTORY_FETCH_BY_UAN: "employment-history/fetch-by-uan",
   FETCH_UAN_BY_MOBILE: "fetch-uan",
   PASSBOOK: "passbook",
   VALIDATE_OTP: "validate-otp",
   VERIFY_UPI: "verify-upi",
   UAN_FETCH_BY_PAN: "uan/fetch-by-pan",
   FETCH_DIRECTOR: "fetch-director",
   FETCH_COMPANY: "fetch-company",
   FETCH_UPI_ID: "fetch-upi-id",
   BUSINESS_VERIFY: "business-verify",
   ECHALLAN: "echallan",
   VERIFY_REGISTRATION: "verify-registration",
   FETCH_CONTACT_DETAILS: "fetch-contact-details",
   EMPLOYER_VERIFY: "employer-verify",
   FETCH_FATHER_NAME: "fetch-father-name",
   FETCH_LITE_PLUS: "fetch-lite-plus",
   VALIDATE: "validate",
   DELIVERY_CONFIRMATION: "delivery-confirmation",
   FETCH_PHONE_CORRELATION: "fetch-phone-correlation",
   V3_VERIFY: "v3/verify",
   BANK_STATEMENT_ANALYZER_UPLOAD: "bank-statement-analyzer/upload",
   MOBILE: "mobile",
   UDYAM_ADVANCED: "udyam-advanced",
   INDIVIDUAL_FETCH_PERSONAL_PROFILE: "individual/fetch-personal-profile",
   INDIVIDUAL_FETCH_PAN: "individual/fetch-pan",
   INDIVIDUAL_FETCH_ADDRESS: "individual/fetch-address",
   INDIVIDUAL_FETCH_NATIONAL_IDS: "individual/fetch-national-ids",
   OCR_V2: "ocr/v2",
   TELCO_MOBILE_LOOKUP: "telco/mobile-lookup",
   MOBILE_NUMBER_AGE: "mobile/number-age",
   FETCH_BY_MOBILE: "fetch-by-mobile",
   UDYAM_CERTIFICATE_OCR: "udyam-certificate-ocr",
   STATEMENT_OCR: "statement/ocr",
   CHEQUE_OCR: "cheque/ocr",
   VERIFY_TAN: "verify-tan",
   FETCH_PAN_BY_DIN: "fetch-pan-by-din",
   FETCH_DIN_BY_PAN: "fetch-din-by-pan",
   FETCH_AADHAAR: "fetch-aadhaar",
   FETCH_ESSENTIALS: "fetch-essentials",
   FETCH_ADVANCED: "fetch-advanced",
   COMPLIANCE_CHECKS_ITR_206: "compliance-checks/itr-206",
   UTILITY_FETCH_ELECTRICITY_BILL: "utility/fetch-electricity-bill",
   FETCH_MCC_CODES: "fetch-mcc-codes",
   UID_MASKING: "uid-masking",
   ADDRESS_LOOKUP: "address-lookup ",
   PENNILESS: "penniless",
   HYBRID: "hybrid",
   FETCH_REG_NUM_BY_CHASSIS: "fetch-reg-num-by-chassis",
   UDYAM_FETCH_BY_PAN: "udyam/fetch-by-pan",
   FETCH_NAME_ON_PAN_CARD: "fetch-card-name",
   UDYAM_LOOKUP: "udyam/lookup",
   FETCH_CIN_BY_PAN: "cin-by-pan",
   FETCH_BANK_ACCOUNT_BY_MOBILE: "account/fetch-by-mobile",
   FETCH_BANK_ACCOUNT_BY_UPI: "account/fetch-by-upi",
   CHECK_ENITY_LINKAGE: "check-entity-linkage",
   FETCH_TURNOVER_DETAILS: "fetch-turnover-details",
   FETCH_CONTACT_DETAILS_BY_DIN: "fetch-contact-details-by-din",
   FETCH_WITHOUT_OTP: "fetch-without-otp",
   FASTAG_FETCH_DETAILED: "fastag/fetch-detailed",
   FETCH_CERTIFICATE: "fetch-certificate",
   VERIFY_IFSC: "verify-ifsc",
   FETCH_CONTACT: "fetch-contact",
   PROFILE_DETAILS: "profile-details",
   PAN_LOOKUP: "pan-lookup",
   MOBILE_PREFILL: "mobile/prefill",
   MOBILE_NAME_LOOKUP: "name-lookup",
   LOOKUP_BY_MOBILE: "lookup-by-mobile",
   DIGITAL_FOOTPRINT: "mobile/digital-footprint",
   FETCH_DETAILED_BY_CHASSIS: "fetch-detailed-by-chassis",
   SALARY_SLIP_OCR: "salary-slip/ocr",
   FETCH_SPEND_INSIGHTS: "individual/fetch-spend-insights",
   VERIFY_UPI_ADVANCED: "verify-upi-advanced",
};

export const employmentHistoryPdfColumn = [
   {
      title: "S NO:",
      dataIndex: "index",
      key: "index",
      ellipsis: true,
      width: "10%",
      render: (_, record, index) => index + 1,
   },
   {
      title: "MEMBER ID",
      dataIndex: "member_id",
      key: "member_id",
      ellipsis: true,
      width: "25%",
      render: (item) => <div style={{ whiteSpace: "normal" }}>{item}</div>,
   },
   {
      title: "ESTABLISHMENT NAME",
      dataIndex: "establishment_name",
      key: "establishment_name",
      ellipsis: true,
      width: "25%",
      render: (item) => <div style={{ whiteSpace: "normal" }}>{item}</div>,
   },
   {
      title: "DATE OF JOINING",
      dataIndex: "date_of_joining",
      key: "date_of_joining",
      ellipsis: true,
      width: "20%",
   },
   {
      title: "DATE OF EXIT",
      dataIndex: "date_of_exit",
      key: "date_of_exit",
      ellipsis: true,
      width: "20%",
   },
];

export const errorMessagesWRTProductOfferings = {
   [msmeVerificationService.key]: {
      [msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]:
         "At least one of Mobile number or PAN number must be provided.",
   },
};

export const spendInsightsVectorsOptions = [
   { value: "affluence_score", label: "Affluence Score" },
   { value: "annual_spend", label: "Annual Spend" },
   { value: "big_ticket_purchases", label: "Big Ticket Purchases" },
   { value: "card_network", label: "Card Network" },
   { value: "essential_category_spends", label: "Essential Category Spends" },
   { value: "category_spends_on_card", label: "Category Spends On Card" },
   { value: "mcc_spend_analysis", label: "MCC Spend Analysis" },
   { value: "days_since_last_txn", label: "Days Since Last Transaction" },
   { value: "emi_purchases", label: "EMI Purchases" },
   { value: "first_15days_vs_second_15days", label: "First 15 Days Vs Second 15 Days" },
   { value: "min_max_amount", label: "Min Max Amount" },
   { value: "monthly_avg_spend", label: "Monthly Avg Spend" },
   { value: "num_of_card_owned", label: "Num Of Card Owned" },
   { value: "payment_share_of_wallet", label: "Payment Share Of Wallet" },
   { value: "preferred_card_network", label: "Preferred Card Network" },
   { value: "recent_3_txn_location", label: "Recent 3 Transaction Location" },
   { value: "mobile_recharge_amount", label: "Mobile Recharge Amount" },
   { value: "fuel_txn_spends", label: "Fuel Transaction Spends" },
   { value: "top_3_categories_by_txncnt", label: "Top 3 Categories By Transaction Count" },
   { value: "top_3_locations_txn_cnt", label: "Top 3 Locations Transaction Count" },
   { value: "volume_bucket_size", label: "Volume Bucket Size" },
   { value: "top3_spends_categories", label: "Top3 Spends Categories" },
   { value: "top3_recent_transacted_city_bycnt", label: "Top3 Recent Transacted City By Count" },
   { value: "top3_recent_transaction_spend_city", label: "Top3 Recent Transaction Spend City" },
   { value: "weekday_vs_weekend", label: "Weekday Vs Weekend" },
   { value: "top_3_spends_location", label: "Top 3 Spends Location" },
   { value: "income_estimator", label: "Income Estimator" },
];

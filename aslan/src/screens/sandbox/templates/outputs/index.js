import { productsOfferingsMapping, productsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";

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

export const outputWRTOffering = {
   [aadhaarVerificationService.key]: {
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]: outputType.OUTPUT_WITH_IMAGE,
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]: outputType.OUTPUT_WITH_IMAGE,
      [aadhaarVerificationService.offerings.AADHAAR_OCR]: outputType.OUTPUT,
      [aadhaarVerificationService.offerings.AADHAAR_VERIFY]: outputType.OUTPUT,
      [aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT]: outputType.OUTPUT_WITH_IMAGE,
      [aadhaarVerificationService.offerings.AADHAAR_OCR_V2]: outputType.OUTPUT,
      [aadhaarVerificationService.offerings.AADHAAR_UID_MASKING]: outputType.OUTPUT,
   },
   [digilockerVerificationService.key]: {
      [digilockerVerificationService.offerings.DIGILOCKER_KYC]: outputType.OUTPUT,
   },
   [msmeVerificationService.key]: {
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY]: outputType.OUTPUT,
      [msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY]: outputType.OUTPUT,
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: outputType.OUTPUT,
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: outputType.OUTPUT,
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE]: outputType.OUTPUT,
      [msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR]: outputType.OUTPUT,
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN]: outputType.OUTPUT_WITH_COLLAPSIBLE,
      [msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]: outputType.OUTPUT,
   },
   [mcaVerificationService.key]: {
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]: outputType.OUTPUT,
      [mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS]: outputType.OUTPUT,
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: outputType.OUTPUT,
      [mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]: outputType.OUTPUT,
      [mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]: outputType.OUTPUT,
      [mcaVerificationService.offerings.MCA_VERIFY_TAN]: outputType.OUTPUT,
      [mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]: outputType.OUTPUT,
      [mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: outputType.OUTPUT,
   },
   [bankVerificationService.key]: {
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]: outputType.OUTPUT,
      [bankVerificationService.offerings.UPI_VERIFY]: outputType.OUTPUT,
      [bankVerificationService.offerings.UPI_ID_FETCH]: outputType.OUTPUT,
      [bankVerificationService.offerings.BANK_STATEMENT_REPORT]: outputType.OUTPUT,
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2]: outputType.OUTPUT,
      [bankVerificationService.offerings.BANK_CHEQUE_OCR]: outputType.OUTPUT,
      [bankVerificationService.offerings.BANK_STATEMENT_OCR]: outputType.OUTPUT,
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS]: outputType.OUTPUT,
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID]: outputType.OUTPUT,
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE]: outputType.OUTPUT,
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI]: outputType.OUTPUT,
      [bankVerificationService.offerings.BANK_IFSC_VERIFY]: outputType.OUTPUT,
      [bankVerificationService.offerings.SALARY_SLIP_OCR]: outputType.OUTPUT,
      [bankVerificationService.offerings.UPI_VERIFY_ADVANCED]: outputType.OUTPUT,
   },
   [complianceChecksService.key]: {
      [complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY]: outputType.OUTPUT,
   },
   [fssaiVerificationService.key]: {
      [fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]: outputType.OUTPUT,
   },
   [rcVerificationService.key]: {
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: outputType.OUTPUT,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]: outputType.OUTPUT,
   },
   [dlVerificationService.key]: {
      [dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS]: outputType.OUTPUT_WITH_IMAGE,
      [dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS]: outputType.OUTPUT_WITH_IMAGE,
      [dlVerificationService.offerings.DRIVING_LICENSE_OCR]: outputType.OUTPUT_WITH_IMAGE,
   },
   [voterIdVerificationService.key]: {
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON]: outputType.OUTPUT,
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON]: outputType.OUTPUT,
      [voterIdVerificationService.offerings.VOTER_ID_OCR]: outputType.OUTPUT,
   },
   [gstinVerificationService.key]: {
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_LITE]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_DETAILED]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_REPORT]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS]: outputType.OUTPUT,
      [gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE]: outputType.OUTPUT,
   },
   [livenessVerificationService.key]: {
      [livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK]: outputType.OUTPUT,
   },
   [faceMatchVerificationService.key]: {
      [faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION]: outputType.OUTPUT,
   },
   [passportVerificationService.key]: {
      [passportVerificationService.offerings.PASSPORT_MRZ_GENERATE]: outputType.OUTPUT,
      [passportVerificationService.offerings.PASSPORT_MRZ_VERIFY]: outputType.OUTPUT,
      [passportVerificationService.offerings.PASSPORT_VERIFY]: outputType.OUTPUT,
      [passportVerificationService.offerings.PASSPORT_FETCH]: outputType.OUTPUT,
      [passportVerificationService.offerings.PASSPORT_OCR]: outputType.OUTPUT,
   },
   [panVerificationService.key]: {
      [panVerificationService.offerings.PAN_VERIFY_V2]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_DETAILED]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_LITE]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_OCR]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_BUSINESS_VERIFY]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_FATHER_NAME]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_LITE_PLUS]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_VERIFY_V3]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_AADHAAR]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_ADVANCED]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_ESSENTIALS]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_CARD_NAME]: outputType.OUTPUT,
      [panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS]: outputType.OUTPUT,
   },
   [epfoVerificationService.key]: {
      [epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT]: outputType.OUTPUT,
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]: outputType.OUTPUT,
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: outputType.OUTPUT,
      [epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: outputType.OUTPUT,
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]: outputType.OUTPUT,
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]: outputType.OUTPUT,
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: outputType.OUTPUT_WITH_COLLAPSIBLE,
      [epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS]: outputType.OUTPUT,
   },
   [sneVerificationService.key]: {
      [sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]: outputType.OUTPUT,
   },
   [addressVerificationService.key]: {
      [addressVerificationService.offerings.ADDRESS_VALIDATION]: outputType.OUTPUT,
      [addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION]: outputType.OUTPUT,
      [addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION]: outputType.OUTPUT,
   },
   [profileService.key]: {
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_MOBILE_PREFILL]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: outputType.OUTPUT,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: outputType.OUTPUT,
   },
};

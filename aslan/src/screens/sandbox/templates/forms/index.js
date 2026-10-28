import { productsOfferingsMapping, productsMapping } from "utils/constants";
import {
   BosonSchema,
   MesonSchema,
   aadhaarVerifySchema,
   aadhaarOCRSchema,
   aadhaarExtractDataSchema,
   aadhaarOCRV2Schema,
   uidMaskingSchema,
} from "screens/sandbox/templates/forms/aadhaar";
import digilockerSchema from "screens/sandbox/templates/forms/digilocker";
import {
   udyogAadhaarSchema,
   udyamSchema,
   udyamDetailedSchema,
   udyamAdvancedSchema,
   udyamByMobileSchema,
   udyamCertificateOCRSchema,
   udyamByPANSchema,
   udyamLookupSchema,
} from "screens/sandbox/templates/forms/msme";
import {
   companyByNameSchema,
   cinSchema,
   dinSchema,
   dinByPANSchema,
   panByDINSchema,
   tanVerifySchema,
   cinByPANSchema,
   contactDetailsByDINSchema,
} from "screens/sandbox/templates/forms/mca";
import {
   bankAccountVerificationSchema,
   upiVerificationSchema,
   upiIdSchema,
   statementAnalyzerOfferingSchema,
   statementOCRSchema,
   chequeOCRSchema,
   bankAccountVerificationV2Schema,
   bankVerificationPennilessSchema,
   bankAccountHybridVerificationSchema,
   bankAccountByMobileSchema,
   bankAccountByUPISchema,
   verifyIFSCSchema,
   salarySlipOCROfferingSchema,
   verifyUpiAdvancedSchema,
} from "./bank";
import { itrComplianceSchema } from "screens/sandbox/templates/forms/compliance";
import { fssaiLicenseSchema } from "screens/sandbox/templates/forms/fssai";
import {
   rcDetailedSchema,
   rcLiteSchema,
   rcDetailedWithChallanSchema,
   eChallanSchema,
   regNumByChassisSchema,
   rcFastagDetailedSchema,
   rcLookupByMobileSchema,
   rcDetailedByChassisSchema,
   rcContactDetailsSchema,
} from "screens/sandbox/templates/forms/rc";
import { dlOfferingSchema, dlOCRSchema } from "screens/sandbox/templates/forms/dl";
import { voterBosonSchema, voterMesonSchema, voterIDOCRSchema } from "screens/sandbox/templates/forms/voter";
import {
   gstinLiteSchema,
   gstinDetailedSchema,
   gstinByPANSchema,
   gstinByNameSchema,
   gstinReportSchema,
   gstinContactDetailsSchema,
   gstinByMobileSchema,
   gstinMCCCodesOfferingSchema,
   gstinTurnoverSchema,
   gstinCertificateSchema,
} from "screens/sandbox/templates/forms/gstin";
import { livenessOfferingSchema } from "screens/sandbox/templates/forms/liveness";
import { facematchOfferingSchema } from "screens/sandbox/templates/forms/facematch";
import {
   verifyMRZOfferingSchema,
   verifyPassportOfferingSchema,
   generateMRZOfferingSchema,
   passportFetchOfferingSchema,
   passportOCRSchema,
} from "./passport";
import {
   panOCRschema,
   panAadhaarLinkOfferingSchema,
   panDetailedOfferingSchema,
   panLiteOfferingSchema,
   panVerifyOfferingSchema,
   businessPANOfferingSchema,
   panLitePlusOfferingSchema,
   panFatherNameOfferingSchema,
   panVerifyV3OfferingSchema,
   panAdvancedOfferingSchema,
   panEssentialsOfferingSchema,
   ITRComplianceOfferingSchema,
   aadhaarByPANOfferingSchema,
   panNameOnCardOfferingSchema,
   panContactDetailsOfferingSchema,
} from "./pan";
import {
   epfoLatestEmploymentOfferingSchema,
   epfoUANOfferingSchema,
   epfoEmploymentHistoryByUANOfferingSchema,
   epfoPassbookOfferingSchema,
   epfoUANByPANOfferingSchema,
   epfoEmployerNameSchema,
   epfoPassbookWithoutOTPOfferingSchema,
   epfoUANProfileDetailsOfferingSchema,
} from "./epfo";
import { sneVerifyRegistrationOfferingSchema } from "./sne";
import {
   validationOfferingSchema,
   deliveryConfirmationOfferingSchema,
   phoneCorrelationOfferingSchema,
} from "./address";
import {
   personalProfileOfferingSchema,
   addressByPhoneOfferingSchema,
   PANByPhoneOfferingSchema,
   nationalIDsOfferingSchema,
   mobileLookupSchema,
   mobileNumberAgeSchema,
   electricityBillOfferingSchema,
   addressLookupByMobileOfferingSchema,
   entityLinkageOfferingSchema,
   PANLookupByMobileOfferingSchema,
   mobilePrefillOfferingSchema,
   nameLookupByMobileOfferingSchema,
   digitalFootprintOfferingSchema,
   spendInsightsOfferingSchema,
} from "./profileLookup";

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

export const offeringsSchema = {
   [aadhaarVerificationService.key]: {
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]: BosonSchema,
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]: MesonSchema,
      [aadhaarVerificationService.offerings.AADHAAR_VERIFY]: aadhaarVerifySchema,
      [aadhaarVerificationService.offerings.AADHAAR_OCR]: aadhaarOCRSchema,
      [aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT]: aadhaarExtractDataSchema,
      [aadhaarVerificationService.offerings.AADHAAR_OCR_V2]: aadhaarOCRV2Schema,
      [aadhaarVerificationService.offerings.AADHAAR_UID_MASKING]: uidMaskingSchema,
   },
   [digilockerVerificationService.key]: {
      [digilockerVerificationService.offerings.DIGILOCKER_KYC]: digilockerSchema,
   },
   [msmeVerificationService.key]: {
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY]: udyamSchema,
      [msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY]: udyogAadhaarSchema,
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: udyamDetailedSchema,
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: udyamAdvancedSchema,
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE]: udyamByMobileSchema,
      [msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR]: udyamCertificateOCRSchema,
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN]: udyamByPANSchema,
      [msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]: udyamLookupSchema,
   },
   [mcaVerificationService.key]: {
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]: cinSchema,
      [mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS]: dinSchema,
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: companyByNameSchema,
      [mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]: dinByPANSchema,
      [mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]: panByDINSchema,
      [mcaVerificationService.offerings.MCA_VERIFY_TAN]: tanVerifySchema,
      [mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]: cinByPANSchema,
      [mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: contactDetailsByDINSchema,
   },
   [bankVerificationService.key]: {
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]: bankAccountVerificationSchema,
      [bankVerificationService.offerings.UPI_VERIFY]: upiVerificationSchema,
      [bankVerificationService.offerings.UPI_ID_FETCH]: upiIdSchema,
      [bankVerificationService.offerings.BANK_STATEMENT_REPORT]: statementAnalyzerOfferingSchema,
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2]: bankAccountVerificationV2Schema,
      [bankVerificationService.offerings.BANK_CHEQUE_OCR]: chequeOCRSchema,
      [bankVerificationService.offerings.BANK_STATEMENT_OCR]: statementOCRSchema,
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS]: bankVerificationPennilessSchema,
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID]: bankAccountHybridVerificationSchema,
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE]: bankAccountByMobileSchema,
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI]: bankAccountByUPISchema,
      [bankVerificationService.offerings.BANK_IFSC_VERIFY]: verifyIFSCSchema,
      [bankVerificationService.offerings.SALARY_SLIP_OCR]: salarySlipOCROfferingSchema,
      [bankVerificationService.offerings.UPI_VERIFY_ADVANCED]: verifyUpiAdvancedSchema,
   },
   [complianceChecksService.key]: {
      [complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY]: itrComplianceSchema,
   },
   [fssaiVerificationService.key]: {
      [fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]: fssaiLicenseSchema,
   },
   [rcVerificationService.key]: {
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]: rcDetailedSchema,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]: rcLiteSchema,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: rcDetailedWithChallanSchema,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]: eChallanSchema,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: regNumByChassisSchema,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: rcFastagDetailedSchema,
      [rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]: rcLookupByMobileSchema,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: rcDetailedByChassisSchema,
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]: rcContactDetailsSchema,
   },
   [dlVerificationService.key]: {
      [dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS]: dlOfferingSchema,
      [dlVerificationService.offerings.DRIVING_LICENSE_OCR]: dlOCRSchema,
   },
   [voterIdVerificationService.key]: {
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON]: voterBosonSchema,
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON]: voterMesonSchema,
      [voterIdVerificationService.offerings.VOTER_ID_OCR]: voterIDOCRSchema,
   },
   [gstinVerificationService.key]: {
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]: gstinByNameSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]: gstinByPANSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_LITE]: gstinLiteSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_DETAILED]: gstinDetailedSchema,
      [gstinVerificationService.offerings.GSTIN_REPORT]: gstinReportSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS]: gstinContactDetailsSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE]: gstinByMobileSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES]: gstinMCCCodesOfferingSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS]: gstinTurnoverSchema,
      [gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE]: gstinCertificateSchema,
   },
   [livenessVerificationService.key]: {
      [livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK]: livenessOfferingSchema,
   },
   [faceMatchVerificationService.key]: {
      [faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION]: facematchOfferingSchema,
   },
   [passportVerificationService.key]: {
      [passportVerificationService.offerings.PASSPORT_MRZ_GENERATE]: generateMRZOfferingSchema,
      [passportVerificationService.offerings.PASSPORT_MRZ_VERIFY]: verifyMRZOfferingSchema,
      [passportVerificationService.offerings.PASSPORT_VERIFY]: verifyPassportOfferingSchema,
      [passportVerificationService.offerings.PASSPORT_FETCH]: passportFetchOfferingSchema,
      [passportVerificationService.offerings.PASSPORT_OCR]: passportOCRSchema,
   },
   [panVerificationService.key]: {
      [panVerificationService.offerings.PAN_OCR]: panOCRschema,
      [panVerificationService.offerings.PAN_FETCH_LITE]: panLiteOfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_DETAILED]: panDetailedOfferingSchema,
      [panVerificationService.offerings.PAN_VERIFY_V2]: panVerifyOfferingSchema,
      [panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]: panAadhaarLinkOfferingSchema,
      [panVerificationService.offerings.PAN_BUSINESS_VERIFY]: businessPANOfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_FATHER_NAME]: panFatherNameOfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_LITE_PLUS]: panLitePlusOfferingSchema,
      [panVerificationService.offerings.PAN_VERIFY_V3]: panVerifyV3OfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_ADVANCED]: panAdvancedOfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_AADHAAR]: aadhaarByPANOfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_ESSENTIALS]: panEssentialsOfferingSchema,
      [panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY]: ITRComplianceOfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_CARD_NAME]: panNameOnCardOfferingSchema,
      [panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS]: panContactDetailsOfferingSchema,
   },
   [epfoVerificationService.key]: {
      [epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT]: epfoLatestEmploymentOfferingSchema,
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]: epfoUANOfferingSchema,
      [epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]:
         epfoEmploymentHistoryByUANOfferingSchema,
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: epfoPassbookOfferingSchema,
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]: epfoUANByPANOfferingSchema,
      [epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]: epfoEmployerNameSchema,
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: epfoPassbookWithoutOTPOfferingSchema,
      [epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS]: epfoUANProfileDetailsOfferingSchema,
   },
   [sneVerificationService.key]: {
      [sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]: sneVerifyRegistrationOfferingSchema,
   },
   [addressVerificationService.key]: {
      [addressVerificationService.offerings.ADDRESS_VALIDATION]: validationOfferingSchema,
      [addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION]: deliveryConfirmationOfferingSchema,
      [addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION]: phoneCorrelationOfferingSchema,
   },
   [profileService.key]: {
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: personalProfileOfferingSchema,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: addressByPhoneOfferingSchema,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: nationalIDsOfferingSchema,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]: PANByPhoneOfferingSchema,
      [profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]: mobileLookupSchema,
      [profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: electricityBillOfferingSchema,
      [profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: addressLookupByMobileOfferingSchema,
      [profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: mobileNumberAgeSchema,
      [profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]: entityLinkageOfferingSchema,
      [profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]: PANLookupByMobileOfferingSchema,
      [profileService.offerings.PROFILE_MOBILE_PREFILL]: mobilePrefillOfferingSchema,
      [profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]: nameLookupByMobileOfferingSchema,
      [profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: digitalFootprintOfferingSchema,
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: spendInsightsOfferingSchema,
   },
};

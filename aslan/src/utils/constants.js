import { inputTypes } from "shared/components/Input/constants";
import { Form, Select } from "antd";
import { phoneCodes } from "assets/resources";

const { Option } = Select;

export const formUIElements = {
   INPUT: {
      ...inputTypes,
   },
   CHECKBOX: "checkbox",
   BUTTON: "button",
   UPLOAD: "upload",
   DATE_PICKER: "datePicker",
   RADIO: "radio",
   DROPDOWN: "dropdown",
};

export const phoneCountryCodePrefixSelector = (uiElementProps) => (
   <Form.Item name="prefix" noStyle>
      <Select style={{ background: "white" }} {...uiElementProps}>
         {Object.keys(phoneCodes).map((item, index) => (
            <Option key={index} value={phoneCodes[item]}>
               {item} +{phoneCodes[item]}
            </Option>
         ))}
      </Select>
   </Form.Item>
);

//will be added further based on discussion
export const gridlinesProducts = {
   identityAPIs: {
      label: "Identity APIs",
      items: {
         aadhaarVerification: "Aadhaar verification",
         drivingLicense: "Driving License",
         faceMatch: "Face Match",
         panVerification: "PAN verification",
         voterIdVerification: "Voter ID verification",
      },
   },

   vaccinationAPIs: {
      label: "Vaccination APIs",
      items: {
         cowinVerification: "CoWIN Verification",
      },
   },

   incomeAPIs: {
      label: "Income APIs",
      items: {
         bankAccountVerification: "Bank account verification",
         creditReport: "Credit Report",
      },
   },
};

export const filterInputOptions = {
   TEXT: "TEXT",
   DATE_EPOCH: "DATE_EPOCH",
   DATE_RANGE: "DATE_EPOCH_RANGE",
};

export const filterTypes = {
   EQUAL: "EQUAL",
   NOT_EQUAL: "NOT_EQUAL",
   CONTAINS: "CONTAINS",
   DOES_NOT_CONTAIN: "DOES_NOT_CONTAIN",
   RANGE: "RANGE",
};

export const resourceOptions = {
   PRODUCT: "PRODUCT",
   CATEGORY: "CATEGORY",
   EVENT_LOG: "EVENT_LOG",
   CREDENTIAL: "CREDENTIAL",
   MY_PRODUCT: "MY_PRODUCT",
   ORGANIZATION: "ORGANIZATION",
   GSTIN_REPORT_TRANSACTION: "GSTIN_REPORT_TRANSACTION",
   REQUEST_LOG: "REQUEST_LOG",
   BSA_REPORT_TRANSACTION: "BSA_REPORT_TRANSACTION",
};

export const freshWorksSupportActions = {
   HELP: "Help",
   REQUEST_APPROVAL: "requestApproval",
};
export const productsMapping = {
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
   SHOP_AND_ESTABLISHMENTS: "shops-api",
   ADDRESS_VERIFICATION: "address-api",
   PROFILE_LOOKUP: "profile-api",
};

export const aadhaarServiceOfferings = {
   AADHAAR_EKYC_BOSON: "aadhaar-ekyc-boson",
   AADHAAR_EKYC_MESON: "aadhaar-ekyc-meson",
   AADHAAR_OCR: "aadhaar-ocr",
   AADHAAR_VERIFY: "aadhaar-verify",
   AADHAAR_XML_ZIP_EXTRACT: "aadhaar-xml-zip-extract",
   AADHAAR_OCR_V2: "aadhaar-ocr-v2",
   AADHAAR_UID_MASKING: "aadhaar-uid-masking",
};

export const digilockerServiceOfferings = {
   DIGILOCKER_KYC: "digilocker-kyc",
};

export const msmeServiceOfferings = {
   MSME_UDYAM_REFERENCE_VERIFY: "msme-udyam-reference-verify",
   MSME_UDYOG_AADHAAR_VERIFY: "msme-udyog-aadhaar-verify",
   MSME_UDYAM_REFERENCE_VERIFY_DETAILED: "msme-udyam-reference-verify-detailed",
   MSME_UDYAM_FETCH_BY_MOBILE: "msme-udyam-fetch-by-mobile",
   MSME_UDYAM_REFERENCE_VERIFY_ADVANCED: "msme-udyam-reference-verify-advanced",
   MSME_UDYAM_CERTIFICATE_OCR: "msme-udyam-certificate-ocr",
   MSME_UDYAM_FETCH_BY_PAN: "msme-udyam-fetch-by-pan",
   MSME_UDYAM_LOOKUP: "msme-udyam-lookup",
};

export const mcaServiceOfferings = {
   MCA_FETCH_COMPANY_DETAILS: "mca-fetch-company-details",
   MCA_FETCH_DIRECTOR_DETAILS: "mca-fetch-director-details",
   MCA_FETCH_COMPANY_DETAILS_BY_NAME: "mca-fetch-company-details-by-name",
   MCA_FETCH_DIN_BY_PAN: "mca-fetch-din-by-pan",
   MCA_FETCH_PAN_BY_DIN: "mca-fetch-pan-by-din",
   MCA_VERIFY_TAN: "mca-verify-tan",
   MCA_FETCH_CIN_BY_PAN: "mca-fetch-cin-by-pan",
   MCA_FETCH_CONTACT_DETAILS_BY_DIN: "mca-fetch-contact-details-by-din",
};

export const bankServiceOfferings = {
   BANK_ACCOUNT_VERIFY: "bank-account-verify",
   UPI_VERIFY: "upi-verify",
   UPI_ID_FETCH: "upi-id-fetch",
   BANK_STATEMENT_REPORT: "bank-statement-report",
   BANK_ACCOUNT_VERIFY_V2: "bank-account-verify-v2",
   BANK_CHEQUE_OCR: "bank-cheque-ocr",
   BANK_STATEMENT_OCR: "bank-statement-ocr",
   BANK_ACCOUNT_VERIFY_PENNILESS: "bank-account-verify-penniless",
   BANK_ACCOUNT_VERIFY_HYBRID: "bank-account-verify-hybrid",
   FETCH_BANK_ACCOUNT_BY_MOBILE: "fetch-bank-account-by-mobile",
   FETCH_BANK_ACCOUNT_BY_UPI: "fetch-bank-account-by-upi",
   BANK_IFSC_VERIFY: "bank-ifsc-verify",
   SALARY_SLIP_OCR: "salary-slip-ocr",
   UPI_VERIFY_ADVANCED: "upi-verify-advanced",
};

export const complianceServiceOfferings = {
   ITR_206_COMPLIANCE_VERIFY: "itr-206-compliance-verify",
};

export const fssaiServiceOfferings = {
   FSSAI_LICENSE_FETCH: "fssai-license-fetch",
};

export const rcServiceOfferings = {
   VEHICLE_RC_FETCH_DETAILED: "vehicle-rc-fetch-detailed",
   VEHICLE_RC_FETCH_LITE: "vehicle-rc-fetch-lite",
   VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN: "vehicle-rc-fetch-detailed-with-challan",
   VEHICLE_RC_FETCH_CHALLAN: "vehicle-rc-fetch-challan",
   VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS: "vehicle-rc-fetch-reg-num-by-chassis",
   VEHICLE_RC_FETCH_FASTAG_DETAILED: "vehicle-rc-fetch-fastag-detailed",
   VEHICLE_RC_LOOKUP_BY_MOBILE: "vehicle-rc-lookup-by-mobile",
   VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS: "vehicle-rc-fetch-detailed-by-chassis",
   VEHICLE_RC_FETCH_CONTACT: "vehicle-rc-fetch-contact",
};

export const dlServiceOfferings = {
   DRIVING_LICENSE_FETCH_DETAILS: "driving-license-fetch-details",
   DRIVING_LICENSE_OCR: "driving-license-ocr",
};

export const voterIdServiceOfferings = {
   VOTER_FETCH_DETAILS_BOSON: "voter-fetch-details-boson",
   VOTER_FETCH_DETAILS_MESON: "voter-fetch-details-meson",
   VOTER_ID_OCR: "voter-id-ocr",
};

export const gstinServiceOfferings = {
   GSTIN_FETCH_BY_NAME: "gstin-fetch-by-name",
   GSTIN_FETCH_BY_PAN: "gstin-fetch-by-pan",
   GSTIN_FETCH_LITE: "gstin-fetch-lite",
   GSTIN_FETCH_DETAILED: "gstin-fetch-detailed",
   GSTIN_REPORT: "gstin-report",
   GSTIN_FETCH_CONTACT_DETAILS: "gstin-fetch-contact-details",
   GSTIN_FETCH_BY_MOBILE: "gstin-fetch-by-mobile",
   GSTIN_FETCH_MCC_CODES: "gstin-fetch-mcc-codes",
   GSTIN_FETCH_TURNOVER_DETAILS: "gstin-fetch-turnover-details",
   GSTIN_FETCH_CERTIFICATE: "gstin-fetch-certificate",
};

export const livenessServiceOfferings = {
   LIVENESS_PASSIVE_CHECK: "liveness-passive-check",
};

export const facematchServiceOfferings = {
   FACE_MATCH_VERIFICATION: "face-match",
};

export const passportServiceOfferings = {
   PASSPORT_MRZ_GENERATE: "passport-mrz-generate",
   PASSPORT_MRZ_VERIFY: "passport-mrz-verify",
   PASSPORT_VERIFY: "passport-verify",
   PASSPORT_FETCH: "passport-fetch",
   PASSPORT_OCR: "passport-ocr",
};

export const panServiceOfferings = {
   PAN_VERIFY_V2: "pan-verify-v2",
   PAN_FETCH_DETAILED: "pan-fetch-detailed",
   PAN_FETCH_LITE: "pan-fetch-lite",
   PAN_CHECK_AADHAAR_LINK: "pan-check-aadhaar-link",
   PAN_OCR: "pan-ocr",
   PAN_BUSINESS_VERIFY: "pan-business-verify",
   PAN_FETCH_LITE_PLUS: "pan-fetch-lite-plus",
   PAN_FETCH_FATHER_NAME: "pan-fetch-father-name",
   PAN_VERIFY_V3: "pan-verify-v3",
   PAN_ITR_206_COMPLIANCE_VERIFY: "pan-itr-206-compliance-verify",
   PAN_FETCH_ADVANCED: "pan-fetch-advanced",
   PAN_FETCH_ESSENTIALS: "pan-fetch-essentials",
   PAN_FETCH_AADHAAR: "pan-fetch-aadhaar",
   PAN_FETCH_CARD_NAME: "pan-fetch-card-name",
   PAN_FETCH_CONTACT_DETAILS: "pan-fetch-contact-details",
};

export const epfoServiceOfferings = {
   EPFO_FETCH_LATEST_EMPLOYMENT: "epfo-fetch-latest-employment",
   EPFO_FETCH_UAN_BY_MOBILE: "epfo-fetch-uan-by-mobile",
   EPFO_FETCH_PASSBOOK: "epfo-fetch-passbook",
   EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN: "epfo-fetch-employment-history-by-uan",
   EPFO_FETCH_UAN_BY_PAN: "epfo-fetch-uan-by-pan",
   EPFO_EMPLOYER_VERIFY: "epfo-employer-verify",
   EPFO_FETCH_PASSBOOK_WITHOUT_OTP: "epfo-fetch-passbook-without-otp",
   EPFO_FETCH_PROFILE_DETAILS: "epfo-fetch-profile-details",
};

export const sneServiceOfferings = {
   SNE_REGISTRATION_VERIFY: "sne-registration-verify",
};

export const addressServiceOfferings = {
   ADDRESS_VALIDATION: "address-validation",
   ADDRESS_DELIVERY_CONFIRMATION: "address-delivery-confirmation",
   ADDRESS_PHONE_CORRELATION: "address-phone-correlation",
};

export const profileServiceOfferings = {
   PROFILE_FETCH_INDIVIDUAL_PROFILE: "profile-fetch-individual-profile",
   PROFILE_FETCH_INDIVIDUAL_PAN: "profile-fetch-individual-pan",
   PROFILE_FETCH_INDIVIDUAL_ADDRESS: "profile-fetch-individual-address",
   PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS: "profile-fetch-individual-national-ids",
   PROFILE_TELCO_MOBILE_LOOKUP: "profile-telco-mobile-lookup",
   PROFILE_UTILITY_FETCH_ELECTRICITY_BILL: "profile-utility-fetch-electricity-bill",
   PROFILE_ADDRESS_LOOKUP_BY_MOBILE: "profile-address-lookup-by-mobile",
   PROFILE_FETCH_MOBILE_NUMBER_AGE: "profile-fetch-mobile-number-age",
   PROFILE_CHECK_ENTITY_LINKAGE: "profile-check-entity-linkage",
   PROFILE_PAN_LOOKUP_BY_MOBILE: "profile-pan-lookup-by-mobile",
   PROFILE_MOBILE_PREFILL: "profile-mobile-prefill",
   PROFILE_NAME_LOOKUP_BY_MOBILE: "profile-name-lookup-by-mobile",
   PROFILE_FETCH_DIGITAL_FOOTPRINT: "profile-fetch-digital-footprint",
   PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS: "profile-fetch-individual-spend-insights",
};

export const productsOfferingsMapping = {
   [productsMapping.AADHAAR_VERIFICATION]: {
      key: "aadhaar-api",
      offerings: aadhaarServiceOfferings,
   },
   [productsMapping.DIGILOCKER]: {
      key: "digilocker",
      offerings: digilockerServiceOfferings,
   },
   [productsMapping.COMPLIANCE_CHECKS]: {
      key: "compliance-checks",
      offerings: complianceServiceOfferings,
   },
   [productsMapping.FSSAI]: {
      key: "fssai-api",
      offerings: fssaiServiceOfferings,
   },
   [productsMapping.MSME_VERIFICATION]: {
      key: "msme-api",
      offerings: msmeServiceOfferings,
   },
   [productsMapping.EPFO_VERIFICATION]: {
      key: "epfo-api",
      offerings: epfoServiceOfferings,
   },
   [productsMapping.COWIN_VERIFICATION]: {
      key: "cowin-api",
   },
   [productsMapping.BANK_VERIFICATION]: {
      key: "bank-api",
      offerings: bankServiceOfferings,
   },
   [productsMapping.RC_VERIFICATION]: {
      key: "rc-api",
      offerings: rcServiceOfferings,
   },
   [productsMapping.MCA]: {
      key: "mca-api",
      offerings: mcaServiceOfferings,
   },
   [productsMapping.DL_VERIFICATION]: {
      key: "dl-api",
      offerings: dlServiceOfferings,
   },
   [productsMapping.VOTER_ID_VERIFICATION]: {
      key: "voter-api",
      offerings: voterIdServiceOfferings,
   },
   [productsMapping.GSTIN_VERIFICATION]: {
      key: "gstin-api",
      offerings: gstinServiceOfferings,
   },
   [productsMapping.LIVENESS_VERIFICATION]: {
      key: "liveness",
      offerings: livenessServiceOfferings,
   },
   [productsMapping.FACE_MATCH_VERIFICATION]: {
      key: "face-api",
      offerings: facematchServiceOfferings,
   },
   [productsMapping.PASSPORT_VERIFICATION]: {
      key: "passport-api",
      offerings: passportServiceOfferings,
   },
   [productsMapping.PAN_VERIFICATION]: {
      key: "pan-api",
      offerings: panServiceOfferings,
   },
   [productsMapping.EPFO_VERIFICATION]: {
      key: "epfo-api",
      offerings: epfoServiceOfferings,
   },
   [productsMapping.SHOP_AND_ESTABLISHMENTS]: {
      key: "shops-api",
      offerings: sneServiceOfferings,
   },
   [productsMapping.ADDRESS_VERIFICATION]: {
      key: "address-api",
      offerings: addressServiceOfferings,
   },
   [productsMapping.PROFILE_LOOKUP]: {
      key: "profile-api",
      offerings: profileServiceOfferings,
   },
};

export const apiResponseCodeWRTOfferings = {
   [productsMapping.AADHAAR_VERIFICATION]: {
      [aadhaarServiceOfferings.AADHAAR_EKYC_MESON]: {
         CAPTCHA_REGENERATED_SUCCESS: "1006",
         CAPTCHA_GENERATED_SUCCESS: "1000",
         OTP_GENERATED_SUCCESS: "1001",
         AADHAAR_XML_DATA_SUCCESS: "1002",
      },
      [aadhaarServiceOfferings.AADHAAR_EKYC_BOSON]: {
         OTP_GENERATED_SUCCESS: "1001",
         AADHAAR_XML_DATA_SUCCESS: "1002",
      },
      [aadhaarServiceOfferings.AADHAAR_OCR]: {
         AADHAAR_OCR_EXTRACTED_SUCCESS: "1014",
      },
      [aadhaarServiceOfferings.AADHAAR_VERIFY]: {
         AADHAAR_VERIFIED_SUCCESS: "1018",
      },
      [aadhaarServiceOfferings.AADHAAR_XML_ZIP_EXTRACT]: {
         AADHAAR_DATA_EXTRACTED_SUCCESS: "1002",
      },
      [aadhaarServiceOfferings.AADHAAR_OCR_V2]: {
         AADHAAR_DATA_EXTRACTED_SUCCESS: "1014",
      },
      [aadhaarServiceOfferings.AADHAAR_UID_MASKING]: {
         AADHAAR_UID_MASKED_SUCCESS: "1019",
         AADHAAR_UID_ALREADY_MASKED_SUCCESS: "1020",
         AADHAAR_UID_PARTIALLY_MASKED_SUCCESS: "1021",
      },
   },
   [productsMapping.DIGILOCKER]: {
      [digilockerServiceOfferings.DIGILOCKER_KYC]: {
         DIGILOCKER_AUTHORIZATION_SUCCESS: "1004",
         AUTHORIZATION_URL_GENERATED: "1000",
         ISSUED_FILES_SUCCESS: "1006",
         ISSUED_FILE_SUCCESS: "1008",
      },
   },
   [productsMapping.MSME_VERIFICATION]: {
      [msmeServiceOfferings.MSME_UDYAM_REFERENCE_VERIFY]: {
         ENTERPRISE_EXISTS_SUCCESS: "1000",
      },
      [msmeServiceOfferings.MSME_UDYOG_AADHAAR_VERIFY]: {
         ENTERPRISE_EXISTS_SUCCESS: "1002",
      },
      [msmeServiceOfferings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: {
         UDYAM_CERTIFICATE_GENERATED_SUCCESS: "1007",
         OTP_GENERATED_SUCCESS: "1004",
      },
      [msmeServiceOfferings.MSME_UDYAM_FETCH_BY_MOBILE]: {
         UDYAM_DETAILS_FETCHED_SUCCESS: "1010",
      },
      [msmeServiceOfferings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: {
         ENTERPRISE_EXISTS_SUCCESS: "1000",
      },
      [msmeServiceOfferings.MSME_UDYAM_CERTIFICATE_OCR]: {
         DATA_EXTRACTED_SUCCESS: "1013",
      },
      [msmeServiceOfferings.MSME_UDYAM_FETCH_BY_PAN]: {
         UDYAM_FETCHED_SUCCESS: "1014",
         UDYAM_DETAILS_FETCHED_SUCCESS: "1016",
      },
      [msmeServiceOfferings.MSME_UDYAM_LOOKUP]: {
         UDYAM_RECORDS_FOUND_SUCCESS: "1017",
      },
   },
   [productsMapping.MCA]: {
      [mcaServiceOfferings.MCA_FETCH_COMPANY_DETAILS]: {
         COMPANY_DETAILS_SUCCESS: "1000",
      },
      [mcaServiceOfferings.MCA_FETCH_DIRECTOR_DETAILS]: {
         DIRECTOR_DETAILS_SUCCESS: "1002",
      },
      [mcaServiceOfferings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: {
         COMPANY_RECORD_DETAILS_SUCCESS: "1004",
      },
      [mcaServiceOfferings.MCA_FETCH_DIN_BY_PAN]: {
         DIN_DETAILS_FETCHED_SUCCESS: "1006",
      },
      [mcaServiceOfferings.MCA_FETCH_PAN_BY_DIN]: {
         PAN_DETAILS_FETCHED_SUCCESS: "1009",
      },
      [mcaServiceOfferings.MCA_VERIFY_TAN]: {
         TAN_VERIFIED_SUCCESS: "1012",
      },
      [mcaServiceOfferings.MCA_FETCH_CIN_BY_PAN]: {
         CIN_DETAILS_FETCHED_SUCCESS: "1014",
      },
      [mcaServiceOfferings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: {
         CONTACT_DETAILS_FETCHED_SUCCESS: "1018",
      },
   },
   [productsMapping.BANK_VERIFICATION]: {
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY]: {
         BANK_VERIFICATION_SUCCESS: "1000",
      },
      [bankServiceOfferings.UPI_VERIFY]: {
         UPI_VERIFICATION_SUCCESS: "1013",
      },
      [bankServiceOfferings.UPI_ID_FETCH]: {
         UPI_FETCHED_SUCCESS: "1017",
      },
      [bankServiceOfferings.BANK_STATEMENT_REPORT]: {
         BANK_STATEMENT_UPLOADED_SUCCESS: "1019",
      },
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY_V2]: {
         BANK_VERIFICATION_SUCCESS: "1000",
      },
      [bankServiceOfferings.BANK_CHEQUE_OCR]: {
         DATA_EXTRACTED_SUCCESS: "1030",
      },
      [bankServiceOfferings.BANK_STATEMENT_OCR]: {
         DATA_EXTRACTED_SUCCESS: "1030",
      },
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY_PENNILESS]: {
         BANK_PENNILESS_VERIFICATION_SUCCESS: "1000",
      },
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY_HYBRID]: {
         BANK_HYBRID_VERIFICATION_SUCCESS: "1000",
      },
      [bankServiceOfferings.FETCH_BANK_ACCOUNT_BY_MOBILE]: {
         BANK_ACCOUNT_FETCHED_SUCCESS: "1030",
      },
      [bankServiceOfferings.FETCH_BANK_ACCOUNT_BY_UPI]: {
         BANK_ACCOUNT_FETCHED_BY_UPI_SUCCESS: "1030",
      },
      [bankServiceOfferings.BANK_IFSC_VERIFY]: {
         BANK_IFSC_VERIFIED_SUCCESS: "1041",
      },
      [bankServiceOfferings.SALARY_SLIP_OCR]: {
         SALARY_SLIP_OCR_EXTRACTED_SUCCESS: "1030",
      },
      [bankServiceOfferings.UPI_VERIFY_ADVANCED]: {
         UPI_VERIFY_ADVANCED_SUCCESS: "1050",
      },
   },
   [productsMapping.COMPLIANCE_CHECKS]: {
      [complianceServiceOfferings.ITR_206_COMPLIANCE_VERIFY]: {
         ITR_VERIFICATION_SUCCESS: "1000",
      },
   },
   [productsMapping.FSSAI]: {
      [fssaiServiceOfferings.FSSAI_LICENSE_FETCH]: {
         FSSAI_DETAILS_EXTRACTED_SUCCESS: "1000",
      },
   },
   [productsMapping.RC_VERIFICATION]: {
      [rcServiceOfferings.VEHICLE_RC_FETCH_DETAILED]: {
         RC_DETAILS_EXTRACTED_SUCCESS: "1000",
      },
      [rcServiceOfferings.VEHICLE_RC_FETCH_LITE]: {
         RC_DETAILS_EXTRACTED_SUCCESS: "1000",
      },
      [rcServiceOfferings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: {
         RC_DETAILS_EXTRACTED_SUCCESS: "1000",
         RC_DETAILS_EXTRACTED_WITH_CHALLAN_SUCCESS: "1003",
         RC_DETAILS_EXTRACTED_WITHOUT_CHALLAN_SUCCESS: "1004",
      },
      [rcServiceOfferings.VEHICLE_RC_FETCH_CHALLAN]: {
         CHALLAN_FETCHED_SUCESS: "1005",
      },
      [rcServiceOfferings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: {
         REG_NUM_FETCHED_SUCCESS: "1007",
      },
      [rcServiceOfferings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: {
         FASTAG_DETAILS_EXTRACTED_SUCCESS: "1009",
      },
      [rcServiceOfferings.VEHICLE_RC_LOOKUP_BY_MOBILE]: {
         RC_RECORDS_FOUND_SUCCESS: "1000",
      },
      [rcServiceOfferings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: {
         RC_DETAILS_EXTRACTED_SUCCESS: "1007",
      },
      [rcServiceOfferings.VEHICLE_RC_FETCH_CONTACT]: {
         CONTACT_FETCHED_SUCCESS: "1000",
      },
   },
   [productsMapping.GSTIN_VERIFICATION]: {
      [gstinServiceOfferings.GSTIN_FETCH_BY_NAME]: {
         GSTIN_RECORDS_DETAILS_SUCCESS: "1001",
      },
      [gstinServiceOfferings.GSTIN_FETCH_BY_PAN]: {
         GSTIN_RECORDS_DETAILS_SUCCESS: "1002",
      },
      [gstinServiceOfferings.GSTIN_FETCH_DETAILED]: {
         GSTIN_VALIDATION_SUCCESS: "1000",
      },
      [gstinServiceOfferings.GSTIN_FETCH_LITE]: {
         GSTIN_VALIDATION_SUCCESS: "1000",
      },
      [gstinServiceOfferings.GSTIN_REPORT]: {
         GSTIN_REPORT_TRIGGGERED_SUCCESS: "1007",
         GSTIN_REPORT_GENERATED_SUCCESS: "1009",
      },
      [gstinServiceOfferings.GSTIN_FETCH_CONTACT_DETAILS]: {
         GSTIN_CONTACT_DETAILS_SUCCESS: "1013",
      },
      [gstinServiceOfferings.GSTIN_FETCH_BY_MOBILE]: {
         GSTIN_RECORDS_FOUND_SUCCESS: "1017",
      },
      [gstinServiceOfferings.GSTIN_FETCH_MCC_CODES]: {
         GSTIN_MCC_CODES_FOUND_SUCCESS: "1015",
      },
      [gstinServiceOfferings.GSTIN_FETCH_TURNOVER_DETAILS]: {
         GSTIN_TURNOVER_DETAILS_SUCCESS: "1019",
      },
      [gstinServiceOfferings.GSTIN_FETCH_CERTIFICATE]: {
         GSTIN_CERTIFICATE_FETCHED_SUCCESS: "1021",
      },
   },
   [productsMapping.DL_VERIFICATION]: {
      [dlServiceOfferings.DRIVING_LICENSE_FETCH_DETAILS]: {
         DL_DETAILS_EXTRACTED_SUCCESS: "1000",
      },
      [dlServiceOfferings.DRIVING_LICENSE_OCR]: {
         DL_DATA_EXTRACTED_SUCCESS: "1002",
      },
   },
   [productsMapping.VOTER_ID_VERIFICATION]: {
      [voterIdServiceOfferings.VOTER_FETCH_DETAILS_BOSON]: {
         VOTER_DETAILS_EXTRACTED_SUCCESS: "1000",
      },
      [voterIdServiceOfferings.VOTER_FETCH_DETAILS_MESON]: {
         VOTER_DETAILS_EXTRACTED_SUCCESS: "1000",
         CAPTCHA_GENERATED_SUCCESS: "1001",
         CAPTCHA_REGENERATED_SUCCESS: "1003",
      },
      [voterIdServiceOfferings.VOTER_ID_OCR]: {
         DATA_EXTRACTION_SUCCESS: "1008",
      },
   },
   [productsMapping.LIVENESS_VERIFICATION]: {
      [livenessServiceOfferings.LIVENESS_PASSIVE_CHECK]: {
         DETAILS_EXTRACTED_FOR_LIVE_PERSON_SUCCESS: "1000",
         DETAILS_EXTRACTED_FOR_NOT_LIVE_PERSON_SUCCESS: "1001",
      },
   },
   [productsMapping.FACE_MATCH_VERIFICATION]: {
      [facematchServiceOfferings.FACE_MATCH_VERIFICATION]: {
         TWO_FACES_BELONGS_TO_SAME_PERSON_SUCCESS: "1000",
         TWO_FACES_BELONGS_TO_DIFFERENT_PEOPLE_SUCCESS: "1001",
      },
   },
   [productsMapping.PASSPORT_VERIFICATION]: {
      [passportServiceOfferings.PASSPORT_MRZ_GENERATE]: {
         MRZ_GENERATED_SUCCESS: "1000",
      },
      [passportServiceOfferings.PASSPORT_MRZ_VERIFY]: {
         MRZ_VALIDATED_SUCCESS: "1001",
         MRZ_VALIDATED_NOT_MATCHED_SUCCESS: "1002",
      },
      [passportServiceOfferings.PASSPORT_VERIFY]: {
         PASSPORT_VERIFIED_SUCCESS: "1004",
         PASSPORT_INVALID_DETAILS_SUCCESS: "1005",
         PASSPORT_INVALID_FILE_NUMBER: "1008",
      },
      [passportServiceOfferings.PASSPORT_FETCH]: {
         PASSPORT_DETAILS_EXTRACTED_SUCCESS: "1006",
      },
      [passportServiceOfferings.PASSPORT_OCR]: {
         DATA_EXTRACTED_SUCCESS: "1007",
      },
   },
   [productsMapping.PAN_VERIFICATION]: {
      [panServiceOfferings.PAN_CHECK_AADHAAR_LINK]: {
         AADHAAR_LINKED_SUCCESS: "1005",
         AADHAAR_NOT_LINKED_SUCCESS: "1006",
      },
      [panServiceOfferings.PAN_FETCH_DETAILED]: {
         PAN_VALIDATED_SUCCESS: "1000",
      },
      [panServiceOfferings.PAN_FETCH_LITE]: {
         PAN_VALIDATED_SUCCESS: "1000",
      },
      [panServiceOfferings.PAN_OCR]: {
         DATA_EXTRACTED_SUCCESS: "1009",
      },
      [panServiceOfferings.PAN_VERIFY_V2]: {
         PAN_VALIDATED_SUCCESS: "1001",
         DETAILS_PARTIALLY_MATCHED_SUCCESS: "1002",
         PAN_DETAILS_NOT_VALID_SUCCESS: "1003",
      },
      [panServiceOfferings.PAN_BUSINESS_VERIFY]: {
         PAN_VERIFICATION_SUCCESS: "1013",
      },
      [panServiceOfferings.PAN_FETCH_LITE_PLUS]: {
         PAN_VALIDATED_SUCCESS: "1016",
      },
      [panServiceOfferings.PAN_FETCH_FATHER_NAME]: {
         FATHER_NAME_FETCHED_SUCCESS: "1014",
      },
      [panServiceOfferings.PAN_VERIFY_V3]: {
         PAN_VALIDATED_SUCCESS: "1001",
         DETAILS_PARTIALLY_MATCHED_SUCCESS: "1002",
         PAN_DETAILS_NOT_VALID_SUCCESS: "1003",
      },
      [panServiceOfferings.PAN_ITR_206_COMPLIANCE_VERIFY]: {
         PAN_ITR_206_COMPLIANCE_DATA_EXTRACTED_SUCCESS: "1017",
      },
      [panServiceOfferings.PAN_FETCH_ADVANCED]: {
         PAN_VALIDATED_SUCCESS: "1000",
      },
      [panServiceOfferings.PAN_FETCH_ESSENTIALS]: {
         PAN_VALIDATED_SUCCESS: "1000",
      },
      [panServiceOfferings.PAN_FETCH_AADHAAR]: {
         PAN_VALIDATED_SUCCESS: "1016",
      },
      [panServiceOfferings.PAN_FETCH_CARD_NAME]: {
         NAME_FETCHED_SUCCESS: "1018",
      },
      [panServiceOfferings.PAN_FETCH_CONTACT_DETAILS]: {
         CONTACT_DETAILS_FETCHED_SUCCESS: "1020",
      },
   },
   [productsMapping.EPFO_VERIFICATION]: {
      [epfoServiceOfferings.EPFO_FETCH_LATEST_EMPLOYMENT]: {
         LATEST_EMPLOYMENT_FETCHED_SUCCESS: "1014",
      },
      [epfoServiceOfferings.EPFO_FETCH_UAN_BY_MOBILE]: {
         UAN_FETCHED_SUCCESS: "1016",
      },
      [epfoServiceOfferings.EPFO_FETCH_PASSBOOK]: {
         OTP_GENERATED_SUCCESS: "1017",
         OTP_VALIDATED_SUCCESS: "1018",
         EMPLOYERS_FETCHED_SUCCESS: "1021",
         PASSBOOK_FETCHED_SUCCESS: "1022",
      },
      [epfoServiceOfferings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: {
         EMPLOYMENT_HISTORY_FETCHED_SUCCESS: "1013",
      },
      [epfoServiceOfferings.EPFO_FETCH_UAN_BY_PAN]: {
         UAN_FETCHED_BY_PAN_SUCCESS: "1029",
      },
      [epfoServiceOfferings.EPFO_EMPLOYER_VERIFY]: {
         EMPLOYERS_DETAILS_FETCHED_SUCCESS: "1031",
      },
      [epfoServiceOfferings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: {
         PASSBOOK_FETCHED_SUCCESS: "1022",
      },
      [epfoServiceOfferings.EPFO_FETCH_PROFILE_DETAILS]: {
         PROFILE_DETAILS_FETCHED_SUCCESS: "1035",
      },
   },
   [productsMapping.SHOP_AND_ESTABLISHMENTS]: {
      [sneServiceOfferings.SNE_REGISTRATION_VERIFY]: {
         DETAILS_FETCHED_SUCCESS: "1000",
      },
   },
   [productsMapping.ADDRESS_VERIFICATION]: {
      [addressServiceOfferings.ADDRESS_VALIDATION]: {
         ADDRESS_VALIDATION_SUCCESS: "1000",
      },
      [addressServiceOfferings.ADDRESS_DELIVERY_CONFIRMATION]: {
         ADDRESS_CHECK_SUCCESS: "1001",
      },
      [addressServiceOfferings.ADDRESS_PHONE_CORRELATION]: {
         ADDRESS_AND_PHONE_CORRELATION_SUCCESS: "1002",
      },
   },
   [productsMapping.PROFILE_LOOKUP]: {
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: {
         PERSONAL_DATA_FETCHED_SUCCESS: "1000",
      },
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: {
         NATIONAL_DOCS_FETCHED_SUCCESS: "1001",
      },
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: {
         ADDRESS_FETCHED_SUCCESS: "1002",
      },
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_PAN]: {
         PAN_DATA_FETCHED: "1003",
      },
      [profileServiceOfferings.PROFILE_TELCO_MOBILE_LOOKUP]: {
         MOBILE_LOOKUP_DATA_FETCHED_SUCCESS: "1007",
      },
      [profileServiceOfferings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: {
         ELECTRICITY_BILL_FETCHED_SUCCESS: "1006",
      },
      [profileServiceOfferings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: {
         ADDRESS_LOOKUP_BY_MOBILE_SUCCESS: "1002",
      },
      [profileServiceOfferings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: {
         MOBILE_NUMBER_AGE_DATA_FETCHED_SUCCESS: "1008",
      },
      [profileServiceOfferings.PROFILE_CHECK_ENTITY_LINKAGE]: {
         ENTITY_LINKAGE_CHECK_SUCCESS: "1009",
      },
      [profileServiceOfferings.PROFILE_PAN_LOOKUP_BY_MOBILE]: {
         PAN_LOOKUP_BY_MOBILE_SUCCESS: "1003",
      },
      [profileServiceOfferings.PROFILE_MOBILE_PREFILL]: {
         MOBILE_PREFILL_FETCHED_SUCCESS: "1015",
      },
      [profileServiceOfferings.PROFILE_NAME_LOOKUP_BY_MOBILE]: {
         NAME_LOOKUP_BY_MOBILE_SUCCESS: "1014",
      },
      [profileServiceOfferings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: {
         DIGITAL_FOOTPRINT_LOOKUP_SUCCESS: "1030",
      },
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: {
         SPEND_INSIGHTS_FETCHED_SUCCESS: "1038",
      },
   },
};

export const apiCallMethodTypes = {
   POST: "POST",
   GET: "GET",
   PUT: "PUT",
   DELETE: "DELETE",
   PATCH: "PATCH",
   OPTIONS: "OPTIONS",
};

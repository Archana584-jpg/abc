import {
   productOfferingFormSteps,
   formActionsKeyMapping,
   userPreviousFormInputWRTProductOffering,
   offeringsEndpointMapping,
   errorMessagesWRTProductOfferings,
} from "screens/sandbox/constants";
import {
   generateOTPWRTProductOffering,
   submitTransactionalDataForOfferingResult,
   resetReducer,
   getCaptchaResponse,
   authenticateUserWRTProduct,
   getDataWRTProductOffering,
} from "screens/sandbox/actions";
import { productsOfferingsMapping, productsMapping, apiCallMethodTypes, formUIElements } from "utils/constants";
import moment from "moment";
import { consentTexts } from "./templates/constants";
import { userAgreementConsentValidator } from "utils/helper";
import { Typography } from "antd";

const { Text } = Typography;

export const handleUsersLastInputWRTCurrentStep = ({ productKey, offeringKey, formData, currentStep }) => {
   return (
      ((((userPreviousFormInputWRTProductOffering[productKey] || {})[offeringKey] || {}).steps || {})[currentStep] ||
         {})["userInputsKeysToView"] || []
   ).reduce((acc, item) => {
      if (((formData || {}).body || {})[item]) {
         return { ...acc, [item]: formData.body[item] };
      }
      return acc;
   }, {});
};

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
/*
Each mapping consists of various properties that describe the behavior of a form step. Here's a brief description of those properties:

submit: This property defines the action to be performed when the form is submitted. It typically refers to a function that handles the form submission.

nextStep: This property specifies the next step in the form after completing the current step. It is usually a reference to another form step within the same service and offering.

requestPayloadKeys: This property represents the keys that are sent in the API call's request body. It can vary depending on the specific form step and its requirements.

apiCallMethodType: This property indicates the HTTP method (e.g., POST, GET) used in the API call for the form step.

service: This property provides information about the product and offering related to the form step. It includes keys such as product and offering to identify the specific service and offering.

body: This property represents additional elements that are included in the request body for the API call. It can contain various data specific to the form step, such as a redirect URI.

*/

export const actionsMappingWRTOfferingForm = {
   [aadhaarVerificationService.key]: {
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]: {
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
         ].INITIAL_FORM]: {
            submit: (args) => generateOTPWRTProductOffering(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON,
               endpoint: offeringsEndpointMapping.BOSON,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
               ].OTP_VERIFICATION_FORM,
            requestPayloadKeys: ["aadhaar_number", "consent"],
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
         ].OTP_VERIFICATION_FORM]: {
            submit: (args) => submitTransactionalDataForOfferingResult(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON,
               endpoint: offeringsEndpointMapping.BOSON,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
               ].FINAL_FORM,
            actions: {
               [formActionsKeyMapping.RESET]: () => resetReducer(),
               [formActionsKeyMapping.RESEND_OTP]: (args) => generateOTPWRTProductOffering(args),
            },
            requestPayloadKeys: ["otp", "include_xml", "share_code"],
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
               ].INITIAL_FORM,
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]: {
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
         ].INITIAL_FORM]: {
            submit: (args) => getCaptchaResponse(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON,
               endpoint: offeringsEndpointMapping.MESON,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
               ].AADHAAR_INPUT_FORM,
            requestPayloadKeys: ["consent"],
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
         ].AADHAAR_INPUT_FORM]: {
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON,
               endpoint: offeringsEndpointMapping.MESON,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
               ].CAPTCHA_VERIFICATION_FORM,
            actions: {
               [formActionsKeyMapping.RESET]: (args) => resetReducer(args),
            },
            requestPayloadKeys: ["aadhaar_number"],
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
         ].CAPTCHA_VERIFICATION_FORM]: {
            submit: (args) => generateOTPWRTProductOffering(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON,
               endpoint: offeringsEndpointMapping.MESON,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
               ].OTP_VERIFICATION_FORM,
            actions: {
               [formActionsKeyMapping.RESET]: () => resetReducer(),
               [formActionsKeyMapping.REGENERATE_CAPTCHA]: (args) => getCaptchaResponse(args),
            },
            requestPayloadKeys: ["aadhaar_number", "captcha", "consent"],
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
         ].OTP_VERIFICATION_FORM]: {
            submit: (args) => submitTransactionalDataForOfferingResult(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON,
               endpoint: offeringsEndpointMapping.MESON,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
               ].FINAL_FORM,
            actions: {
               [formActionsKeyMapping.RESET]: () => resetReducer(),
            },
            requestPayloadKeys: ["otp", "include_xml", "share_code"],
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON
               ].INITIAL_FORM,
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_OCR]: {
         [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_OCR,
               endpoint: offeringsEndpointMapping.OCR,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_OCR
               ].FINAL_FORM,
            requestPayloadKeys: ["base64_data", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_OCR
               ].INITIAL_FORM,
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_VERIFY]: {
         [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_VERIFY]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_VERIFY,
               endpoint: offeringsEndpointMapping.VERIFY,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_VERIFY
               ].FINAL_FORM,
            requestPayloadKeys: ["aadhaar_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_VERIFY]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_VERIFY
               ].INITIAL_FORM,
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT]: {
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT,
               endpoint: offeringsEndpointMapping.EXTRACT_DATA,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT
               ].FINAL_FORM,
            requestPayloadKeys: ["base64", "share_code", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT
               ].INITIAL_FORM,
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_OCR_V2]: {
         [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR_V2]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               const form = new FormData();
               body["file_front"] = body.file_front.fileList[0];
               if (body.file_back) {
                  body["file_back"] = body.file_back.fileList[0];
                  form.append("file_back", ((body || {}).file_back || {}).originFileObj || {});
               }
               form.append("file_front", body.file_front.originFileObj || {});
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_OCR_V2,
               endpoint: offeringsEndpointMapping.OCR_V2,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_OCR_V2
               ].FINAL_FORM,
            requestPayloadKeys: ["file_front", "file_back", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][aadhaarVerificationService.offerings.AADHAAR_OCR_V2]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_OCR_V2
               ].INITIAL_FORM,
         },
      },
      [aadhaarVerificationService.offerings.AADHAAR_UID_MASKING]: {
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_UID_MASKING
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            service: {
               product: aadhaarVerificationService.key,
               offering: aadhaarVerificationService.offerings.AADHAAR_UID_MASKING,
               endpoint: offeringsEndpointMapping.UID_MASKING,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_UID_MASKING
               ].FINAL_FORM,
            requestPayloadKeys: ["base64_data", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[aadhaarVerificationService.key][
            aadhaarVerificationService.offerings.AADHAAR_UID_MASKING
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_UID_MASKING
               ].INITIAL_FORM,
         },
      },
   },
   [digilockerVerificationService.key]: {
      [digilockerVerificationService.offerings.DIGILOCKER_KYC]: {
         [productOfferingFormSteps[digilockerVerificationService.key][
            digilockerVerificationService.offerings.DIGILOCKER_KYC
         ].INITIAL_FORM]: {
            submit: (args) => authenticateUserWRTProduct(args),
            service: {
               product: digilockerVerificationService.key,
               offering: digilockerVerificationService.offerings.DIGILOCKER,
               endpoint: "init?pinless=true",
            },
            nextStep:
               productOfferingFormSteps[digilockerVerificationService.key][
                  digilockerVerificationService.offerings.DIGILOCKER_KYC
               ].FINAL_FORM,
            body: [
               {
                  //The redirect URI will be dynamically added for this key upon submission.
                  key: "redirect_uri",
               },
            ],
            requestPayloadKeys: ["redirect_uri", "consent"],
         },
         [productOfferingFormSteps[digilockerVerificationService.key][
            digilockerVerificationService.offerings.DIGILOCKER_KYC
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[digilockerVerificationService.key][
                  digilockerVerificationService.offerings.DIGILOCKER_KYC
               ].FINAL_FORM,
         },
      },
   },
   [msmeVerificationService.key]: {
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY]: {
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY
               ].FINAL_FORM,
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY,
               endpoint: offeringsEndpointMapping.UDYAM,
            },
            requestPayloadKeys: ["udyam_reference_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY
               ].INITIAL_FORM,
         },
      },
      [msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY]: {
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY
               ].FINAL_FORM,
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY,
               endpoint: offeringsEndpointMapping.UDYOG_AADHAAR,
            },
            requestPayloadKeys: ["udyog_aadhaar_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY
               ].INITIAL_FORM,
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: {
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
         ].INITIAL_FORM]: {
            submit: (args) => generateOTPWRTProductOffering(args),
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED,
               endpoint: offeringsEndpointMapping.UDYAM,
            },
            nextStep:
               productOfferingFormSteps[aadhaarVerificationService.key][
                  aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON
               ].OTP_VERIFICATION_FORM,
            requestPayloadKeys: ["udyam_reference_number", "mobile_number", "consent"],
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
         ].OTP_VERIFICATION_FORM]: {
            submit: (args) => submitTransactionalDataForOfferingResult(args),
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED,
               endpoint: offeringsEndpointMapping.UDYAM,
            },
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
               ].FINAL_FORM,
            actions: {
               [formActionsKeyMapping.RESET]: () => resetReducer(),
               [formActionsKeyMapping.RESEND_OTP]: (args) => generateOTPWRTProductOffering(args),
            },
            requestPayloadKeys: ["otp"],
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED
               ].INITIAL_FORM,
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE]: {
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE
               ].FINAL_FORM,
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE,
               endpoint: `${offeringsEndpointMapping.UDYAM}/${offeringsEndpointMapping.MOBILE}`,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE
               ].INITIAL_FORM,
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: {
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED
               ].FINAL_FORM,
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED,
               endpoint: offeringsEndpointMapping.UDYAM_ADVANCED,
            },
            requestPayloadKeys: ["udyam_reference_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED
               ].INITIAL_FORM,
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR]: {
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               const form = new FormData();
               body["file_front"] = body.file_front.fileList[0];
               form.append("file_front", body.file_front.originFileObj || {});
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR,
               endpoint: offeringsEndpointMapping.UDYAM_CERTIFICATE_OCR,
            },
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR
               ].FINAL_FORM,
            requestPayloadKeys: ["file_front", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR
               ].INITIAL_FORM,
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN]: {
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN
               ].FINAL_FORM,
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN,
               endpoint: offeringsEndpointMapping.UDYAM_FETCH_BY_PAN,
            },
            requestPayloadKeys: ["pan_number", "detailed_response", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[msmeVerificationService.key][
            msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN
               ].INITIAL_FORM,
         },
      },
      [msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]: {
         [productOfferingFormSteps[msmeVerificationService.key][msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_LOOKUP
               ].FINAL_FORM,
            service: {
               product: msmeVerificationService.key,
               offering: msmeVerificationService.offerings.MSME_UDYAM_LOOKUP,
               endpoint: offeringsEndpointMapping.UDYAM_LOOKUP,
            },
            requestPayloadKeys: ["mobile_number", "pan_number", "email", "gstin", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[msmeVerificationService.key][msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[msmeVerificationService.key][
                  msmeVerificationService.offerings.MSME_UDYAM_LOOKUP
               ].INITIAL_FORM,
         },
      },
   },
   [mcaVerificationService.key]: {
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]: {
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS
               ].FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS,
               endpoint: offeringsEndpointMapping.FETCH_COMPANY,
            },
            requestPayloadKeys: ["company_id", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS
               ].INITIAL_FORM,
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS]: {
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS
               ].FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS,
               endpoint: offeringsEndpointMapping.FETCH_DIRECTOR,
            },
            requestPayloadKeys: ["din", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS
               ].INITIAL_FORM,
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: {
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME
               ].FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME,
               endpoint: offeringsEndpointMapping.FETCH_BY_NAME,
            },
            requestPayloadKeys: ["name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME
               ].INITIAL_FORM,
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]: {
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN
               ].FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN,
               endpoint: offeringsEndpointMapping.FETCH_DIN_BY_PAN,
            },
            requestPayloadKeys: ["pan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN
               ].INITIAL_FORM,
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]: {
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN
               ].FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN,
               endpoint: offeringsEndpointMapping.FETCH_PAN_BY_DIN,
            },
            requestPayloadKeys: ["din", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN
               ].INITIAL_FORM,
         },
      },
      [mcaVerificationService.offerings.MCA_VERIFY_TAN]: {
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_VERIFY_TAN]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_VERIFY_TAN]
                  .FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_VERIFY_TAN,
               endpoint: offeringsEndpointMapping.VERIFY_TAN,
            },
            requestPayloadKeys: ["tan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_VERIFY_TAN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_VERIFY_TAN]
                  .INITIAL_FORM,
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]: {
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN
               ].FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN,
               endpoint: offeringsEndpointMapping.FETCH_CIN_BY_PAN,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN
               ].INITIAL_FORM,
         },
      },
      [mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: {
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN
               ].FINAL_FORM,
            service: {
               product: mcaVerificationService.key,
               offering: mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN,
               endpoint: offeringsEndpointMapping.FETCH_CONTACT_DETAILS_BY_DIN,
            },
            requestPayloadKeys: ["din", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[mcaVerificationService.key][
            mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[mcaVerificationService.key][
                  mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN
               ].INITIAL_FORM,
         },
      },
   },
   [bankVerificationService.key]: {
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_ACCOUNT_VERIFY,
               endpoint: offeringsEndpointMapping.VERIFY,
            },
            requestPayloadKeys: ["account_number", "ifsc", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.UPI_VERIFY]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY]
                  .FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.UPI_VERIFY,
               endpoint: offeringsEndpointMapping.VERIFY_UPI,
            },
            requestPayloadKeys: ["upi", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY]
                  .INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.UPI_ID_FETCH]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_ID_FETCH]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_ID_FETCH]
                  .FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.UPI_ID_FETCH,
               endpoint: offeringsEndpointMapping.FETCH_UPI_ID,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_ID_FETCH]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_ID_FETCH]
                  .INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.BANK_STATEMENT_REPORT]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_REPORT]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["file"] = body.file.fileList[0];
               const form = new FormData();
               form.append("file", body.file.originFileObj || {});
               form.append("bank_name", body.bank_name || "");
               form.append("password", body.password || "");
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_STATEMENT_REPORT
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_STATEMENT_REPORT,
               endpoint: offeringsEndpointMapping.BANK_STATEMENT_ANALYZER_UPLOAD,
            },
            requestPayloadKeys: ["file", "bank_name", "password"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_REPORT]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_STATEMENT_REPORT
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2]: {
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2,
               endpoint: offeringsEndpointMapping.V2_VERIFY,
            },
            requestPayloadKeys: ["account_number", "ifsc", "name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.BANK_CHEQUE_OCR]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_CHEQUE_OCR]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               const form = new FormData();
               body["file_front"] = body.file_front.fileList[0];
               form.append("file_front", body.file_front.originFileObj || {});
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_CHEQUE_OCR,
               endpoint: offeringsEndpointMapping.CHEQUE_OCR,
            },
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_CHEQUE_OCR]
                  .FINAL_FORM,
            requestPayloadKeys: ["file_front", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_CHEQUE_OCR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_CHEQUE_OCR]
                  .INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.BANK_STATEMENT_OCR]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_OCR]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               const form = new FormData();
               body["file_front"] = body.file_front.fileList[0];
               form.append("file_front", body.file_front.originFileObj || {});
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_STATEMENT_OCR,
               endpoint: offeringsEndpointMapping.STATEMENT_OCR,
            },
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_STATEMENT_OCR
               ].FINAL_FORM,
            requestPayloadKeys: ["file_front", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_STATEMENT_OCR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_STATEMENT_OCR
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS]: {
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS,
               endpoint: `${offeringsEndpointMapping.VERIFY}/${offeringsEndpointMapping.PENNILESS}`,
            },
            requestPayloadKeys: ["account_number", "ifsc", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID]: {
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID,
               endpoint: `${offeringsEndpointMapping.VERIFY}/${offeringsEndpointMapping.HYBRID}`,
            },
            requestPayloadKeys: ["account_number", "ifsc", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE]: {
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE,
               endpoint: offeringsEndpointMapping.FETCH_BANK_ACCOUNT_BY_MOBILE,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI]: {
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI,
               endpoint: offeringsEndpointMapping.FETCH_BANK_ACCOUNT_BY_UPI,
            },
            requestPayloadKeys: ["upi", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][
            bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI
               ].INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.BANK_IFSC_VERIFY]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_IFSC_VERIFY]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_IFSC_VERIFY]
                  .FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.BANK_IFSC_VERIFY,
               endpoint: offeringsEndpointMapping.VERIFY_IFSC,
            },
            requestPayloadKeys: ["ifsc", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_IFSC_VERIFY]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.BANK_IFSC_VERIFY]
                  .INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.SALARY_SLIP_OCR]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.SALARY_SLIP_OCR]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.SALARY_SLIP_OCR]
                  .FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.SALARY_SLIP_OCR,
               endpoint: offeringsEndpointMapping.SALARY_SLIP_OCR,
            },
            requestPayloadKeys: ["file_url", "base64_data", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.SALARY_SLIP_OCR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.SALARY_SLIP_OCR]
                  .INITIAL_FORM,
         },
      },
      [bankVerificationService.offerings.UPI_VERIFY_ADVANCED]: {
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY_ADVANCED]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[bankVerificationService.key][
                     bankVerificationService.offerings.UPI_VERIFY_ADVANCED
                  ].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.UPI_VERIFY_ADVANCED
               ].FINAL_FORM,
            service: {
               product: bankVerificationService.key,
               offering: bankVerificationService.offerings.UPI_VERIFY_ADVANCED,
               endpoint: offeringsEndpointMapping.VERIFY_UPI_ADVANCED,
            },
            requestPayloadKeys: ["upi", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[bankVerificationService.key][bankVerificationService.offerings.UPI_VERIFY_ADVANCED]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[bankVerificationService.key][
                  bankVerificationService.offerings.UPI_VERIFY_ADVANCED
               ].INITIAL_FORM,
         },
      },
   },
   [complianceChecksService.key]: {
      [complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY]: {
         [productOfferingFormSteps[complianceChecksService.key][
            complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[complianceChecksService.key][
                  complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY
               ].FINAL_FORM,
            service: {
               product: complianceChecksService.key,
               offering: complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY,
               endpoint: offeringsEndpointMapping.ITR_206,
            },
            requestPayloadKeys: ["pan_id", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[complianceChecksService.key][
            complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[complianceChecksService.key][
                  complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY
               ].INITIAL_FORM,
         },
      },
   },
   [fssaiVerificationService.key]: {
      [fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]: {
         [productOfferingFormSteps[fssaiVerificationService.key][fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[fssaiVerificationService.key][
                  fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH
               ].FINAL_FORM,
            service: {
               product: fssaiVerificationService.key,
               offering: fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH,
               endpoint: offeringsEndpointMapping.FETCH_LICENSE,
            },
            body: [
               {
                  include_products: true,
               },
            ],
            requestPayloadKeys: ["license_number", "include_products", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[fssaiVerificationService.key][fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[fssaiVerificationService.key][
                  fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH
               ].INITIAL_FORM,
         },
      },
   },
   [rcVerificationService.key]: {
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]: {
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED,
               endpoint: offeringsEndpointMapping.FETCH_DETAILED,
            },
            requestPayloadKeys: ["rc_number", "owner_name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]: {
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE,
               endpoint: offeringsEndpointMapping.FETCH_LITE,
            },
            requestPayloadKeys: ["rc_number", "owner_name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: {
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN,
               endpoint: offeringsEndpointMapping.FETCH_DETAILED_CHALLAN,
            },
            requestPayloadKeys: ["rc_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]: {
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN,
               endpoint: `${offeringsEndpointMapping.ECHALLAN}/${offeringsEndpointMapping.FETCH}`,
            },
            requestPayloadKeys: ["rc_number", "chassis_number", "engine_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: {
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS,
               endpoint: offeringsEndpointMapping.FETCH_REG_NUM_BY_CHASSIS,
            },
            requestPayloadKeys: ["chassis_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: {
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED,
               endpoint: offeringsEndpointMapping.FASTAG_FETCH_DETAILED,
            },
            requestPayloadKeys: ["rc_number", "tag_id", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]: {
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE,
               endpoint: offeringsEndpointMapping.LOOKUP_BY_MOBILE,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: {
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS,
               endpoint: offeringsEndpointMapping.FETCH_DETAILED_BY_CHASSIS,
            },
            requestPayloadKeys: ["chassis_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][
            rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS
               ].INITIAL_FORM,
         },
      },
      [rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]: {
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT
               ].FINAL_FORM,
            service: {
               product: rcVerificationService.key,
               offering: rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT,
               endpoint: offeringsEndpointMapping.FETCH_CONTACT,
            },
            requestPayloadKeys: ["rc_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[rcVerificationService.key][rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[rcVerificationService.key][
                  rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT
               ].INITIAL_FORM,
         },
      },
   },
   [dlVerificationService.key]: {
      [dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS]: {
         [productOfferingFormSteps[dlVerificationService.key][
            dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const { date_of_birth } = body;
               body["date_of_birth"] = moment(date_of_birth).format("YYYY-MM-DD");
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[dlVerificationService.key][
                  dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS
               ].FINAL_FORM,
            service: {
               product: dlVerificationService.key,
               offering: dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS,
               endpoint: offeringsEndpointMapping.FETCH,
            },
            requestPayloadKeys: ["driving_license_number", "date_of_birth", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[dlVerificationService.key][
            dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[dlVerificationService.key][
                  dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS
               ].INITIAL_FORM,
         },
      },
      [dlVerificationService.offerings.DRIVING_LICENSE_OCR]: {
         [productOfferingFormSteps[dlVerificationService.key][dlVerificationService.offerings.DRIVING_LICENSE_OCR]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               const form = new FormData();
               body["file_front"] = body.file_front.fileList[0];
               if (body.file_back) {
                  body["file_back"] = body.file_back.fileList[0];
                  form.append("file_back", ((body || {}).file_back || {}).originFileObj || {});
               }
               form.append("file_front", body.file_front.originFileObj || {});
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            service: {
               product: dlVerificationService.key,
               offering: dlVerificationService.offerings.DRIVING_LICENSE_OCR,
               endpoint: offeringsEndpointMapping.OCR,
            },
            nextStep:
               productOfferingFormSteps[dlVerificationService.key][dlVerificationService.offerings.DRIVING_LICENSE_OCR]
                  .FINAL_FORM,
            requestPayloadKeys: ["file_front", "file_back", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[dlVerificationService.key][dlVerificationService.offerings.DRIVING_LICENSE_OCR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[dlVerificationService.key][dlVerificationService.offerings.DRIVING_LICENSE_OCR]
                  .INITIAL_FORM,
         },
      },
   },
   [voterIdVerificationService.key]: {
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON]: {
         [productOfferingFormSteps[voterIdVerificationService.key][
            voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[voterIdVerificationService.key][
                  voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
               ].FINAL_FORM,
            service: {
               product: voterIdVerificationService.key,
               offering: voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON,
               endpoint: offeringsEndpointMapping.FETCH_VOTER_BOSON,
            },
            requestPayloadKeys: ["voter_id", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },

         [productOfferingFormSteps[voterIdVerificationService.key][
            voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[voterIdVerificationService.key][
                  voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON
               ].INITIAL_FORM,
         },
      },
      [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON]: {
         [productOfferingFormSteps[voterIdVerificationService.key][
            voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
         ].INITIAL_FORM]: {
            submit: (args) => getCaptchaResponse(args),
            nextStep:
               productOfferingFormSteps[voterIdVerificationService.key][
                  voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
               ].CAPTCHA_VERIFICATION_FORM,
            service: {
               product: voterIdVerificationService.key,
               offering: voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON,
               endpoint: offeringsEndpointMapping.MESON,
            },
            requestPayloadKeys: ["consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[voterIdVerificationService.key][
            voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
         ].CAPTCHA_VERIFICATION_FORM]: {
            submit: (args) => {
               const { service = {} } = args;
               service["endpoint"] = offeringsEndpointMapping.FETCH_VOTER_MESON;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[voterIdVerificationService.key][
                  voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
               ].FINAL_FORM,
            service: {
               product: voterIdVerificationService.key,
               offering: voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON,
               endpoint: offeringsEndpointMapping.FETCH_VOTER_MESON,
            },
            requestPayloadKeys: ["voter_id", "captcha", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
            actions: {
               [formActionsKeyMapping.RESET]: () => resetReducer(),
               [formActionsKeyMapping.REGENERATE_CAPTCHA]: (args) => {
                  const { service = {} } = args;
                  service["endpoint"] = offeringsEndpointMapping.MESON;
                  return getCaptchaResponse(args);
               },
            },
         },

         [productOfferingFormSteps[voterIdVerificationService.key][
            voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[voterIdVerificationService.key][
                  voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON
               ].INITIAL_FORM,
         },
      },
      [voterIdVerificationService.offerings.VOTER_ID_OCR]: {
         [productOfferingFormSteps[voterIdVerificationService.key][voterIdVerificationService.offerings.VOTER_ID_OCR]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               const form = new FormData();
               body["file_front"] = body.file_front.fileList[0];
               if (body.file_back) {
                  body["file_back"] = body.file_back.fileList[0];
                  form.append("file_back", ((body || {}).file_back || {}).originFileObj || {});
               }
               form.append("file_front", body.file_front.originFileObj || {});
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[voterIdVerificationService.key][
                  voterIdVerificationService.offerings.VOTER_ID_OCR
               ].FINAL_FORM,
            service: {
               product: voterIdVerificationService.key,
               offering: voterIdVerificationService.offerings.VOTER_ID_OCR,
               endpoint: offeringsEndpointMapping.OCR,
            },
            requestPayloadKeys: ["file_front", "file_back", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[voterIdVerificationService.key][voterIdVerificationService.offerings.VOTER_ID_OCR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[voterIdVerificationService.key][
                  voterIdVerificationService.offerings.VOTER_ID_OCR
               ].INITIAL_FORM,
         },
      },
   },
   [gstinVerificationService.key]: {
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]: {
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME,
               endpoint: offeringsEndpointMapping.FETCH_BY_NAME,
            },
            requestPayloadKeys: ["company_name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]: {
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN,
               endpoint: offeringsEndpointMapping.FETCH_BY_PAN,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_LITE]: {
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_LITE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_LITE
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_LITE,
               endpoint: offeringsEndpointMapping.FETCH_LITE,
            },
            requestPayloadKeys: ["gstin", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_FETCH_LITE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_LITE
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_DETAILED]: {
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_DETAILED
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_DETAILED
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_DETAILED,
               endpoint: offeringsEndpointMapping.FETCH_DETAILED,
            },
            requestPayloadKeys: ["gstin", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_DETAILED
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_DETAILED
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_REPORT]: {
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_REPORT]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_REPORT]
                  .FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_REPORT,
               endpoint: offeringsEndpointMapping.TRIGGER_REPORT,
            },
            requestPayloadKeys: ["username", "password", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_REPORT]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][gstinVerificationService.offerings.GSTIN_REPORT]
                  .INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS]: {
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS,
               endpoint: offeringsEndpointMapping.FETCH_CONTACT_DETAILS,
            },
            requestPayloadKeys: ["gstin", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE]: {
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE,
               endpoint: offeringsEndpointMapping.FETCH_BY_MOBILE,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES]: {
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES,
               endpoint: offeringsEndpointMapping.FETCH_MCC_CODES,
            },
            requestPayloadKeys: ["gstin", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS]: {
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const startYear = body.financial_year.year();
               const endYear = startYear + 1;
               body.financial_year = `${startYear}-${String(endYear).slice(-2)}`;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS,
               endpoint: offeringsEndpointMapping.FETCH_TURNOVER_DETAILS,
            },
            requestPayloadKeys: ["gstin", "financial_year", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS
               ].INITIAL_FORM,
         },
      },
      [gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE]: {
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE
               ].FINAL_FORM,
            service: {
               product: gstinVerificationService.key,
               offering: gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE,
               endpoint: offeringsEndpointMapping.FETCH_CERTIFICATE,
            },
            requestPayloadKeys: ["username", "password", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[gstinVerificationService.key][
            gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[gstinVerificationService.key][
                  gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE
               ].INITIAL_FORM,
         },
      },
   },
   [livenessVerificationService.key]: {
      [livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK]: {
         [productOfferingFormSteps[livenessVerificationService.key][
            livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[livenessVerificationService.key][
                  livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK
               ].FINAL_FORM,
            service: {
               product: livenessVerificationService.key,
               offering: livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK,
               endpoint: offeringsEndpointMapping.PASSIVE_CHECK,
            },
            requestPayloadKeys: ["base64_data", "file_url", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[livenessVerificationService.key][
            livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[livenessVerificationService.key][
                  livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK
               ].INITIAL_FORM,
         },
      },
   },
   [faceMatchVerificationService.key]: {
      [faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION]: {
         [productOfferingFormSteps[faceMatchVerificationService.key][
            faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[faceMatchVerificationService.key][
                  faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION
               ].FINAL_FORM,
            service: {
               product: faceMatchVerificationService.key,
               offering: faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION,
               endpoint: offeringsEndpointMapping.VERIFY,
            },
            requestPayloadKeys: ["file_1_url", "file_2_url", "file_1_base64", "file_2_base64", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[faceMatchVerificationService.key][
            faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[faceMatchVerificationService.key][
                  faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION
               ].INITIAL_FORM,
         },
      },
   },
   [passportVerificationService.key]: {
      [passportVerificationService.offerings.PASSPORT_MRZ_GENERATE]: {
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_MRZ_GENERATE
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const { date_of_birth, date_of_expiry } = body;
               body["date_of_birth"] = moment(date_of_birth).format("YYYY-MM-DD");
               body["date_of_expiry"] = moment(date_of_expiry).format("YYYY-MM-DD");
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_MRZ_GENERATE
               ].FINAL_FORM,
            service: {
               product: passportVerificationService.key,
               offering: passportVerificationService.offerings.PASSPORT_MRZ_GENERATE,
               endpoint: offeringsEndpointMapping.GENERATE_MRZ,
            },
            requestPayloadKeys: [
               "country_code",
               "passport_number",
               "surname",
               "given_name",
               "gender",
               "date_of_birth",
               "date_of_expiry",
               "consent",
            ],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_MRZ_GENERATE
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_MRZ_GENERATE
               ].INITIAL_FORM,
         },
      },
      [passportVerificationService.offerings.PASSPORT_MRZ_VERIFY]: {
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_MRZ_VERIFY
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const { date_of_birth, date_of_expiry } = body;
               body["date_of_birth"] = moment(date_of_birth).format("YYYY-MM-DD");
               body["date_of_expiry"] = moment(date_of_expiry).format("YYYY-MM-DD");
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_MRZ_VERIFY
               ].FINAL_FORM,
            service: {
               product: passportVerificationService.key,
               offering: passportVerificationService.offerings.PASSPORT_MRZ_VERIFY,
               endpoint: offeringsEndpointMapping.VERIFY_MRZ,
            },
            requestPayloadKeys: [
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
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_MRZ_VERIFY
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_MRZ_VERIFY
               ].INITIAL_FORM,
         },
      },
      [passportVerificationService.offerings.PASSPORT_VERIFY]: {
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_VERIFY
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const { date_of_birth } = body;
               body["date_of_birth"] = moment(date_of_birth).format("YYYY-MM-DD");
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_VERIFY
               ].FINAL_FORM,
            service: {
               product: passportVerificationService.key,
               offering: passportVerificationService.offerings.PASSPORT_VERIFY,
               endpoint: offeringsEndpointMapping.VERIFY,
            },
            requestPayloadKeys: ["file_number", "passport_number", "surname", "given_name", "date_of_birth", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_VERIFY
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_VERIFY
               ].INITIAL_FORM,
         },
      },
      [passportVerificationService.offerings.PASSPORT_FETCH]: {
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_FETCH
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const { date_of_birth } = body;
               body["date_of_birth"] = moment(date_of_birth).format("YYYY-MM-DD");
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_FETCH
               ].FINAL_FORM,
            service: {
               product: passportVerificationService.key,
               offering: passportVerificationService.offerings.PASSPORT_FETCH,
               endpoint: offeringsEndpointMapping.FETCH,
            },
            requestPayloadKeys: ["file_number", "date_of_birth", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[passportVerificationService.key][
            passportVerificationService.offerings.PASSPORT_FETCH
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_FETCH
               ].INITIAL_FORM,
         },
      },
      [passportVerificationService.offerings.PASSPORT_OCR]: {
         [productOfferingFormSteps[passportVerificationService.key][passportVerificationService.offerings.PASSPORT_OCR]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               const form = new FormData();
               body["file_front"] = body.file_front.fileList[0];
               if (body.file_back) {
                  body["file_back"] = body.file_back.fileList[0];
                  form.append("file_back", ((body || {}).file_back || {}).originFileObj || {});
               }
               form.append("file_front", body.file_front.originFileObj || {});
               form.append("consent", "Y");
               args["body"] = form;
               return getDataWRTProductOffering(args);
            },
            service: {
               product: passportVerificationService.key,
               offering: passportVerificationService.offerings.PASSPORT_OCR,
               endpoint: offeringsEndpointMapping.OCR,
            },
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_OCR
               ].FINAL_FORM,
            requestPayloadKeys: ["file_front", "file_back", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[passportVerificationService.key][passportVerificationService.offerings.PASSPORT_OCR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[passportVerificationService.key][
                  passportVerificationService.offerings.PASSPORT_OCR
               ].INITIAL_FORM,
         },
      },
   },
   [panVerificationService.key]: {
      [panVerificationService.offerings.PAN_VERIFY_V2]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V2]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const { date_of_birth } = body;
               body["date_of_birth"] = moment(date_of_birth).format("YYYY-MM-DD");
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V2]
                  .FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_VERIFY_V2,
               endpoint: offeringsEndpointMapping.V2_VERIFY,
            },
            requestPayloadKeys: ["pan_id", "name", "date_of_birth", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V2]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V2]
                  .INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_DETAILED]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_DETAILED]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_DETAILED]
                  .FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_DETAILED,
               endpoint: offeringsEndpointMapping.FETCH_DETAILED,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_DETAILED]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_DETAILED]
                  .INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_LITE]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE]
                  .FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_LITE,
               endpoint: offeringsEndpointMapping.FETCH,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE]
                  .INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_OCR]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_OCR].INITIAL_FORM]:
            {
               submit: (args) => getDataWRTProductOffering(args),
               nextStep:
                  productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_OCR]
                     .FINAL_FORM,
               service: {
                  product: panVerificationService.key,
                  offering: panVerificationService.offerings.PAN_OCR,
                  endpoint: offeringsEndpointMapping.OCR,
               },
               requestPayloadKeys: ["base64_data", "consent"],
               apiCallMethodType: apiCallMethodTypes.POST,
            },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_OCR].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_OCR]
                  .INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK,
               endpoint: offeringsEndpointMapping.CHECK_AADHAAR_LINK,
            },
            requestPayloadKeys: ["pan_number", "aadhaar_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK
               ].INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_BUSINESS_VERIFY]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_BUSINESS_VERIFY]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_BUSINESS_VERIFY
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_BUSINESS_VERIFY,
               endpoint: offeringsEndpointMapping.BUSINESS_VERIFY,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_BUSINESS_VERIFY]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_BUSINESS_VERIFY
               ].INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_FATHER_NAME]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_FATHER_NAME]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_FATHER_NAME
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_FATHER_NAME,
               endpoint: offeringsEndpointMapping.FETCH_FATHER_NAME,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_FATHER_NAME]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_FATHER_NAME
               ].INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_LITE_PLUS]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE_PLUS]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_LITE_PLUS
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_LITE_PLUS,
               endpoint: offeringsEndpointMapping.FETCH_LITE_PLUS,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_LITE_PLUS]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_LITE_PLUS
               ].INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_VERIFY_V3]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V3]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body } = args;
               const { date_of_birth } = body;
               body["date_of_birth"] = moment(date_of_birth).format("YYYY-MM-DD");
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V3]
                  .FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_VERIFY_V3,
               endpoint: offeringsEndpointMapping.V3_VERIFY,
            },
            requestPayloadKeys: ["pan_id", "name", "date_of_birth", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V3]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_VERIFY_V3]
                  .INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_AADHAAR]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_AADHAAR]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_AADHAAR]
                  .FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_AADHAAR,
               endpoint: offeringsEndpointMapping.FETCH_AADHAAR,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_AADHAAR]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_AADHAAR]
                  .INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_ADVANCED]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ADVANCED]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ADVANCED]
                  .FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_ADVANCED,
               endpoint: offeringsEndpointMapping.FETCH_ADVANCED,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ADVANCED]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ADVANCED]
                  .INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_ESSENTIALS]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ESSENTIALS]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_ESSENTIALS
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_ESSENTIALS,
               endpoint: offeringsEndpointMapping.FETCH_ESSENTIALS,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_ESSENTIALS]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_ESSENTIALS
               ].INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY]: {
         [productOfferingFormSteps[panVerificationService.key][
            panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY,
               endpoint: offeringsEndpointMapping.COMPLIANCE_CHECKS_ITR_206,
            },
            requestPayloadKeys: ["pan_id", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][
            panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY
               ].INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_CARD_NAME]: {
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_CARD_NAME]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_CARD_NAME].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_CARD_NAME
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_CARD_NAME,
               endpoint: offeringsEndpointMapping.FETCH_NAME_ON_PAN_CARD,
            },
            requestPayloadKeys: ["pan_number", "consent_text", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][panVerificationService.offerings.PAN_FETCH_CARD_NAME]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_CARD_NAME
               ].INITIAL_FORM,
         },
      },
      [panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS]: {
         [productOfferingFormSteps[panVerificationService.key][
            panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS
               ].FINAL_FORM,
            service: {
               product: panVerificationService.key,
               offering: panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS,
               endpoint: offeringsEndpointMapping.FETCH_CONTACT_DETAILS,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[panVerificationService.key][
            panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[panVerificationService.key][
                  panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS
               ].INITIAL_FORM,
         },
      },
   },
   [epfoVerificationService.key]: {
      [epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT]: {
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT,
               endpoint: offeringsEndpointMapping.EMPLOYMENT_HISTORY_FETCH_LATEST,
            },
            requestPayloadKeys: ["uan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT
               ].INITIAL_FORM,
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]: {
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE,
               endpoint: offeringsEndpointMapping.FETCH_UAN_BY_MOBILE,
            },
            requestPayloadKeys: ["mobile_number", "pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE
               ].INITIAL_FORM,
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: {
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN,
               endpoint: offeringsEndpointMapping.EMPLOYMENT_HISTORY_FETCH_BY_UAN,
            },
            requestPayloadKeys: ["uan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN
               ].INITIAL_FORM,
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: {
         [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]
            .INITIAL_FORM]: {
            submit: (args) => generateOTPWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK
               ].OTP_VERIFICATION_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK,
               endpoint: offeringsEndpointMapping.PASSBOOK,
            },
            requestPayloadKeys: ["uan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]
            .OTP_VERIFICATION_FORM]: {
            submit: (args) => {
               const { service = {} } = args;
               service["endpoint"] = `${offeringsEndpointMapping.PASSBOOK}/${offeringsEndpointMapping.VALIDATE_OTP}`;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK,
               endpoint: `${offeringsEndpointMapping.PASSBOOK}/${offeringsEndpointMapping.VALIDATE_OTP}`,
            },
            requestPayloadKeys: ["otp"],
            apiCallMethodType: apiCallMethodTypes.POST,
            actions: {
               [formActionsKeyMapping.RESEND_OTP]: (args) => {
                  const { service = {} } = args;
                  service["endpoint"] = offeringsEndpointMapping.PASSBOOK;
                  return generateOTPWRTProductOffering(args);
               },
               [formActionsKeyMapping.RESET]: () => resetReducer(),
            },
         },
         [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK
               ].INITIAL_FORM,
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]: {
         [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN,
               endpoint: offeringsEndpointMapping.UAN_FETCH_BY_PAN,
            },
            requestPayloadKeys: ["pan_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN
               ].INITIAL_FORM,
         },
      },
      [epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]: {
         [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY,
               endpoint: offeringsEndpointMapping.EMPLOYER_VERIFY,
            },
            requestPayloadKeys: ["employer_name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY
               ].INITIAL_FORM,
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: {
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP,
               endpoint: `${offeringsEndpointMapping.PASSBOOK}/${offeringsEndpointMapping.FETCH_WITHOUT_OTP}`,
            },
            requestPayloadKeys: ["uan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP
               ].INITIAL_FORM,
         },
      },
      [epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS]: {
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS
               ].FINAL_FORM,
            service: {
               product: epfoVerificationService.key,
               offering: epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS,
               endpoint: offeringsEndpointMapping.PROFILE_DETAILS,
            },
            requestPayloadKeys: ["uan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[epfoVerificationService.key][
            epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[epfoVerificationService.key][
                  epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS
               ].INITIAL_FORM,
         },
      },
   },
   [sneVerificationService.key]: {
      [sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]: {
         [productOfferingFormSteps[sneVerificationService.key][sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[sneVerificationService.key][
                  sneVerificationService.offerings.SNE_REGISTRATION_VERIFY
               ].FINAL_FORM,
            service: {
               product: sneVerificationService.key,
               offering: sneVerificationService.offerings.SNE_REGISTRATION_VERIFY,
               endpoint: offeringsEndpointMapping.VERIFY_REGISTRATION,
            },
            requestPayloadKeys: ["registration_number", "state", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[sneVerificationService.key][sneVerificationService.offerings.SNE_REGISTRATION_VERIFY]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[sneVerificationService.key][
                  sneVerificationService.offerings.SNE_REGISTRATION_VERIFY
               ].INITIAL_FORM,
         },
      },
   },
   [addressVerificationService.key]: {
      [addressVerificationService.offerings.ADDRESS_VALIDATION]: {
         [productOfferingFormSteps[addressVerificationService.key][
            addressVerificationService.offerings.ADDRESS_VALIDATION
         ].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[addressVerificationService.key][
                  addressVerificationService.offerings.ADDRESS_VALIDATION
               ].FINAL_FORM,
            service: {
               product: addressVerificationService.key,
               offering: addressVerificationService.offerings.ADDRESS_VALIDATION,
               endpoint: offeringsEndpointMapping.VALIDATE,
            },
            requestPayloadKeys: ["address", "city", "state", "pincode", "language", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[addressVerificationService.key][
            addressVerificationService.offerings.ADDRESS_VALIDATION
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[addressVerificationService.key][
                  addressVerificationService.offerings.ADDRESS_VALIDATION
               ].INITIAL_FORM,
         },
      },
      [addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION]: {
         [productOfferingFormSteps[addressVerificationService.key][
            addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[addressVerificationService.key][
                     addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION
                  ].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[addressVerificationService.key][
                  addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION
               ].FINAL_FORM,
            service: {
               product: addressVerificationService.key,
               offering: addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION,
               endpoint: offeringsEndpointMapping.DELIVERY_CONFIRMATION,
            },
            requestPayloadKeys: ["address", "city", "state", "pincode", "phone_number", "consent_text", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[addressVerificationService.key][
            addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[addressVerificationService.key][
                  addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION
               ].INITIAL_FORM,
         },
      },
      [addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION]: {
         [productOfferingFormSteps[addressVerificationService.key][
            addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION
         ].INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[addressVerificationService.key][
                     addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION
                  ].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[addressVerificationService.key][
                  addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION
               ].FINAL_FORM,
            service: {
               product: addressVerificationService.key,
               offering: addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION,
               endpoint: offeringsEndpointMapping.FETCH_PHONE_CORRELATION,
            },
            requestPayloadKeys: ["address", "city", "state", "pincode", "phone_number", "consent_text", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[addressVerificationService.key][
            addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION
         ].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[addressVerificationService.key][
                  addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION
               ].INITIAL_FORM,
         },
      },
   },
   [profileService.key]: {
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE,
               endpoint: offeringsEndpointMapping.INDIVIDUAL_FETCH_PERSONAL_PROFILE,
            },
            requestPayloadKeys: ["phone", "first_name", "last_name", "pan", "consent_text", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PROFILE]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS,
               endpoint: offeringsEndpointMapping.INDIVIDUAL_FETCH_ADDRESS,
            },
            requestPayloadKeys: ["phone", "first_name", "last_name", "pan", "consent_text", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[profileService.key][
                     profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS
                  ].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[profileService.key][
                  profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS
               ].FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS,
               endpoint: offeringsEndpointMapping.INDIVIDUAL_FETCH_NATIONAL_IDS,
            },
            requestPayloadKeys: ["phone", "first_name", "last_name", "pan", "consent_text", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][
                  profileService.offerings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS
               ].INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]
            .INITIAL_FORM]: {
            submit: (args) => {
               const { body = {} } = args;
               body["consent_text"] =
                  consentTexts[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN].value;
               return getDataWRTProductOffering(args);
            },
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN,
               endpoint: offeringsEndpointMapping.INDIVIDUAL_FETCH_PAN,
            },
            requestPayloadKeys: ["phone", "first_name", "last_name", "consent_text", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_PAN]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP,
               endpoint: offeringsEndpointMapping.TELCO_MOBILE_LOOKUP,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_TELCO_MOBILE_LOOKUP]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE,
               endpoint: offeringsEndpointMapping.MOBILE_NUMBER_AGE,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_MOBILE_NUMBER_AGE]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][
                  profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL
               ].FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL,
               endpoint: offeringsEndpointMapping.UTILITY_FETCH_ELECTRICITY_BILL,
            },
            requestPayloadKeys: [
               "electricity_provider",
               "consumer_number",
               "mobile_number",
               "installation_number",
               "operator_code",
               "consent",
            ],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][
                  profileService.offerings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL
               ].INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE,
               endpoint: `${offeringsEndpointMapping.MOBILE}/${offeringsEndpointMapping.ADDRESS_LOOKUP}`,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE,
               endpoint: offeringsEndpointMapping.CHECK_ENITY_LINKAGE,
            },
            requestPayloadKeys: ["mobile", "pan", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_CHECK_ENTITY_LINKAGE]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE,
               endpoint: `${offeringsEndpointMapping.MOBILE}/${offeringsEndpointMapping.PAN_LOOKUP}`,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_PAN_LOOKUP_BY_MOBILE]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_MOBILE_PREFILL]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_MOBILE_PREFILL].INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_MOBILE_PREFILL].FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_MOBILE_PREFILL,
               endpoint: offeringsEndpointMapping.MOBILE_PREFILL,
            },
            requestPayloadKeys: ["mobile_number", "first_name", "last_name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_MOBILE_PREFILL].FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_MOBILE_PREFILL]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE,
               endpoint: `${offeringsEndpointMapping.MOBILE}/${offeringsEndpointMapping.MOBILE_NAME_LOOKUP}`,
            },
            requestPayloadKeys: ["mobile_number", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_NAME_LOOKUP_BY_MOBILE]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]
                  .FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT,
               endpoint: offeringsEndpointMapping.DIGITAL_FOOTPRINT,
            },
            requestPayloadKeys: ["phone", "email", "name", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_DIGITAL_FOOTPRINT]
                  .INITIAL_FORM,
         },
      },
      [profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: {
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]
            .INITIAL_FORM]: {
            submit: (args) => getDataWRTProductOffering(args),
            nextStep:
               productOfferingFormSteps[profileService.key][
                  profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS
               ].FINAL_FORM,
            service: {
               product: profileService.key,
               offering: profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS,
               endpoint: offeringsEndpointMapping.FETCH_SPEND_INSIGHTS,
            },
            requestPayloadKeys: ["card", "phone", "vpa", "data_vectors", "consent"],
            apiCallMethodType: apiCallMethodTypes.POST,
         },
         [productOfferingFormSteps[profileService.key][profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]
            .FINAL_FORM]: {
            submit: () => resetReducer(),
            nextStep:
               productOfferingFormSteps[profileService.key][
                  profileService.offerings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS
               ].INITIAL_FORM,
         },
      },
   },
};

export const renderConsentSchema = (consentText) => ({
   formItemAttributes: {
      name: "consent_text",
      valuePropName: "checked",
      validateTrigger: "onChange",
      initialValue: true,
      rules: [
         userAgreementConsentValidator({
            message: "Please agree to Terms of Service",
         }),
      ],
   },
   uiElement: {
      type: formUIElements.CHECKBOX,
      attributes: {
         children: <Text className="tw-text-sm tw-leading-4">{consentText}</Text>,
      },
   },
});

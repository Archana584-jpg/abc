import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import udyamSampleOutput from "screens/sandbox/resource/sampleOutputs/msme/Udyam.json";
import udyogAadhaarSampleOutput from "screens/sandbox/resource/sampleOutputs/msme/UdyogAadhaar.json";
import udyamDetailedOutput from "screens/sandbox/resource/sampleOutputs/msme/UdyamDetailed.json";
import udyamByMobileOutput from "screens/sandbox/resource/sampleOutputs/msme/UdyamByMobile.json";
import udyamAdvancedOutput from "screens/sandbox/resource/sampleOutputs/msme/UdyamAdvanced.json";
import udyamCertificateOCROutput from "screens/sandbox/resource/sampleOutputs/msme/UdyamCertificateOCR.json";
import udyamByPANOutput from "screens/sandbox/resource/sampleOutputs/msme/UdyamByPAN.json";
import udyamLookupOutput from "screens/sandbox/resource/sampleOutputs/msme/UdyamLookup.json";

const { MSME_VERIFICATION } = productsMapping;
const msmeVerificationService = productsOfferingsMapping[MSME_VERIFICATION];

const msmeOfferingsSampleOutputWithType = {
   [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: udyamSampleOutput,
   },
   [msmeVerificationService.offerings.MSME_UDYOG_AADHAAR_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: udyogAadhaarSampleOutput,
   },
   [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: udyamDetailedOutput,
   },
   [msmeVerificationService.offerings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: udyamAdvancedOutput,
   },
   [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: udyamByMobileOutput,
   },
   [msmeVerificationService.offerings.MSME_UDYAM_CERTIFICATE_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: udyamCertificateOCROutput,
   },
   [msmeVerificationService.offerings.MSME_UDYAM_FETCH_BY_PAN]: {
      outputType: outputType.OUTPUT_WITH_COLLAPSIBLE,
      SAMPLE_OUTPUT: udyamByPANOutput,
   },
   [msmeVerificationService.offerings.MSME_UDYAM_LOOKUP]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: udyamLookupOutput,
   },
};

export default msmeOfferingsSampleOutputWithType;

import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import detailedSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/Detailed.json";
import liteSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/Lite.json";
import aadhaarLinkSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/AadhaarLink.json";
import ocrSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/OCR.json";
import verifySampleOutput from "screens/sandbox/resource/sampleOutputs/pan/Verify.json";
import businessVerifySampleOutput from "screens/sandbox/resource/sampleOutputs/pan/BusinessPAN.json";
import fatherNameSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/FatherName.json";
import LitePlusSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/LitePlus.json";
import aadhaarByPANSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/AadhaarByPAN.json";
import advancedSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/Advanced.json";
import essentialsSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/Essentials.json";
import ITR206ComplianceSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/ITR206Compliance.json";
import nameOnCardSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/FetchNameOnCard.json";
import panContactDetailsSampleOutput from "screens/sandbox/resource/sampleOutputs/pan/FetchContactDetails.json";

const { PAN_VERIFICATION } = productsMapping;
const panVerificationService = productsOfferingsMapping[PAN_VERIFICATION];

const panOfferingsSampleOutputWithType = {
   [panVerificationService.offerings.PAN_VERIFY_V2]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: verifySampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_DETAILED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: detailedSampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_LITE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: liteSampleOutput,
   },
   [panVerificationService.offerings.PAN_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: ocrSampleOutput,
   },
   [panVerificationService.offerings.PAN_CHECK_AADHAAR_LINK]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: aadhaarLinkSampleOutput,
   },
   [panVerificationService.offerings.PAN_BUSINESS_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: businessVerifySampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_LITE_PLUS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: LitePlusSampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_FATHER_NAME]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: fatherNameSampleOutput,
   },
   [panVerificationService.offerings.PAN_VERIFY_V3]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: verifySampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_AADHAAR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: aadhaarByPANSampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_ADVANCED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: advancedSampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_ESSENTIALS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: essentialsSampleOutput,
   },
   [panVerificationService.offerings.PAN_ITR_206_COMPLIANCE_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: ITR206ComplianceSampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_CARD_NAME]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: nameOnCardSampleOutput,
   },
   [panVerificationService.offerings.PAN_FETCH_CONTACT_DETAILS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: panContactDetailsSampleOutput,
   },
};

export default panOfferingsSampleOutputWithType;

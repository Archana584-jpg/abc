import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import bosonSampleOutput from "screens/sandbox/resource/sampleOutputs/aadhaar/Boson.json";
import mesonSampleOutput from "screens/sandbox/resource/sampleOutputs/aadhaar/Meson.json";
import extractDataSampleOutput from "screens/sandbox/resource/sampleOutputs/aadhaar/ExtractData.json";
import aadhaarVerifySampleOutput from "screens/sandbox/resource/sampleOutputs/aadhaar/Verify.json";
import ocrSampleOutput from "screens/sandbox/resource/sampleOutputs/aadhaar/OCR.json";
import ocrV2SampleOutput from "screens/sandbox/resource/sampleOutputs/aadhaar/OCRV2.json";
import uidMaskingSampleOutput from "screens/sandbox/resource/sampleOutputs/aadhaar/UIDMasking.json";

const { AADHAAR_VERIFICATION } = productsMapping;
const aadhaarVerificationService = productsOfferingsMapping[AADHAAR_VERIFICATION];

const aadhaarOfferingsSampleOutputWithType = {
   [aadhaarVerificationService.offerings.AADHAAR_EKYC_BOSON]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: bosonSampleOutput,
   },
   [aadhaarVerificationService.offerings.AADHAAR_EKYC_MESON]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: mesonSampleOutput,
   },
   [aadhaarVerificationService.offerings.AADHAAR_XML_ZIP_EXTRACT]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: extractDataSampleOutput,
   },
   [aadhaarVerificationService.offerings.AADHAAR_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: ocrSampleOutput,
   },
   [aadhaarVerificationService.offerings.AADHAAR_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: aadhaarVerifySampleOutput,
   },
   [aadhaarVerificationService.offerings.AADHAAR_OCR_V2]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: ocrV2SampleOutput,
   },
   [aadhaarVerificationService.offerings.AADHAAR_UID_MASKING]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: uidMaskingSampleOutput,
   },
};

export default aadhaarOfferingsSampleOutputWithType;

import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import dlDetailsSampleOutput from "screens/sandbox/resource/sampleOutputs/dl/DLDetails.json";
import dlOCRSampleOutput from "screens/sandbox/resource/sampleOutputs/dl/DLOCR.json";

const { DL_VERIFICATION } = productsMapping;
const dlVerificationService = productsOfferingsMapping[DL_VERIFICATION];

const dlOfferingsSampleOutputWithType = {
   [dlVerificationService.offerings.DRIVING_LICENSE_FETCH_DETAILS]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: dlDetailsSampleOutput,
   },
   [dlVerificationService.offerings.DRIVING_LICENSE_OCR]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: dlOCRSampleOutput,
   },
};

export default dlOfferingsSampleOutputWithType;

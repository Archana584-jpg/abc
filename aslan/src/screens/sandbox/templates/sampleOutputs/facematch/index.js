import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import facematchSampleOutput from "screens/sandbox/resource/sampleOutputs/facematch/Facematch.json";

const { FACE_MATCH_VERIFICATION } = productsMapping;
const faceMatchVerificationService = productsOfferingsMapping[FACE_MATCH_VERIFICATION];

const facematchOfferingsSampleOutputWithType = {
   [faceMatchVerificationService.offerings.FACE_MATCH_VERIFICATION]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: facematchSampleOutput,
   },
};

export default facematchOfferingsSampleOutputWithType;

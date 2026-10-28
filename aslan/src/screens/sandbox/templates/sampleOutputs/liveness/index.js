import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import livenessPassiveCheckSampleOutput from "screens/sandbox/resource/sampleOutputs/liveness/LivenessPassiveCheck.json";

const { LIVENESS_VERIFICATION } = productsMapping;
const livenessVerificationService = productsOfferingsMapping[LIVENESS_VERIFICATION];

const livenessOfferingsSampleOutputWithType = {
   [livenessVerificationService.offerings.LIVENESS_PASSIVE_CHECK]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: livenessPassiveCheckSampleOutput,
   },
};

export default livenessOfferingsSampleOutputWithType;

import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import verifySNERegistrationSampleOutput from "screens/sandbox/resource/sampleOutputs/sne/VerifySNERegistration.json";

const { SHOP_AND_ESTABLISHMENTS } = productsMapping;
const sneServiceOfferings = productsOfferingsMapping[SHOP_AND_ESTABLISHMENTS];

const sneOfferingsSampleOutputWithType = {
   [sneServiceOfferings.offerings.SNE_REGISTRATION_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: verifySNERegistrationSampleOutput,
   },
};

export default sneOfferingsSampleOutputWithType;

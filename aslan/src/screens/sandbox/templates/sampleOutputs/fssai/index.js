import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import licenseVerificationSampleOutput from "screens/sandbox/resource/sampleOutputs/fssai/LicenseVerification.json";

const { FSSAI } = productsMapping;
const fssaiVerificationService = productsOfferingsMapping[FSSAI];

const fssaiOfferingsSampleOutputWithType = {
   [fssaiVerificationService.offerings.FSSAI_LICENSE_FETCH]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: licenseVerificationSampleOutput,
   },
};

export default fssaiOfferingsSampleOutputWithType;

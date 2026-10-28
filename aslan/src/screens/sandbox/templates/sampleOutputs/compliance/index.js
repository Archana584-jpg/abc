import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import itrComplianceSampleOutput from "screens/sandbox/resource/sampleOutputs/compliance/ITRCompliance.json";

const { COMPLIANCE_CHECKS } = productsMapping;
const complianceChecksService = productsOfferingsMapping[COMPLIANCE_CHECKS];

const complianceOfferingsSampleOutputWithType = {
   [complianceChecksService.offerings.ITR_206_COMPLIANCE_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: itrComplianceSampleOutput,
   },
};

export default complianceOfferingsSampleOutputWithType;

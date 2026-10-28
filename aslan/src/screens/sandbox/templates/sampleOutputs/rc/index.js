import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import rcDetailedSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RCDetailed.json";
import rcLiteSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RCLite.json";
import rcDetailedWithChallanSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RCDetailedWithChallan.json";
import eChallanSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/EChallan.json";
import regNumByChassisSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RegNumByChassis.json";
import rcFastagDetailedSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RCFastagDetailed.json";
import rcLookupByMobileSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RCLookupByMobile.json";
import rcDetailedByChassisSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RCDetailedByChassis.json";
import rcContactDetailsSampleOutput from "screens/sandbox/resource/sampleOutputs/rc/RCContactDetails.json";

const { RC_VERIFICATION } = productsMapping;
const rcVerificationService = productsOfferingsMapping[RC_VERIFICATION];

const rcOfferingsSampleOutputWithType = {
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: rcDetailedSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: rcDetailedWithChallanSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_LITE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: rcLiteSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_CHALLAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: eChallanSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: regNumByChassisSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: rcFastagDetailedSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_LOOKUP_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: rcLookupByMobileSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: rcDetailedByChassisSampleOutput,
   },
   [rcVerificationService.offerings.VEHICLE_RC_FETCH_CONTACT]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: rcContactDetailsSampleOutput,
   },
};

export default rcOfferingsSampleOutputWithType;

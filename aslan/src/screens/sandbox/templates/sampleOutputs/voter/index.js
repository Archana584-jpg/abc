import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import bosonSampleOutput from "screens/sandbox/resource/sampleOutputs/voter/Boson.json";
import mesonSampleOutput from "screens/sandbox/resource/sampleOutputs/voter/Meson.json";
import ocrSampleOutput from "screens/sandbox/resource/sampleOutputs/voter/OCR.json";

const { VOTER_ID_VERIFICATION } = productsMapping;
const voterIdVerificationService = productsOfferingsMapping[VOTER_ID_VERIFICATION];

const voterOfferingsSampleOutputWithType = {
   [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_BOSON]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: bosonSampleOutput,
   },
   [voterIdVerificationService.offerings.VOTER_FETCH_DETAILS_MESON]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: mesonSampleOutput,
   },
   [voterIdVerificationService.offerings.VOTER_ID_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: ocrSampleOutput,
   },
};

export default voterOfferingsSampleOutputWithType;

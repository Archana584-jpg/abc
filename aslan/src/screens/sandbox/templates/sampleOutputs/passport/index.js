import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import generateMRZSampleOutput from "screens/sandbox/resource/sampleOutputs/passport/GenerateMRZ.json";
import verifyMRZSampleOutput from "screens/sandbox/resource/sampleOutputs/passport/VerifyMRZ.json";
import verifyPassportSampleOutput from "screens/sandbox/resource/sampleOutputs/passport/VerifyPassport.json";
import passportFetchSampleOutput from "screens/sandbox/resource/sampleOutputs/passport/PassportFetch.json";
import passportOCRSampleOutput from "screens/sandbox/resource/sampleOutputs/passport/OCR.json";

const { PASSPORT_VERIFICATION } = productsMapping;
const passportVerificationService = productsOfferingsMapping[PASSPORT_VERIFICATION];

const passportOfferingsSampleOutputWithType = {
   [passportVerificationService.offerings.PASSPORT_MRZ_GENERATE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: generateMRZSampleOutput,
   },
   [passportVerificationService.offerings.PASSPORT_MRZ_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: verifyMRZSampleOutput,
   },
   [passportVerificationService.offerings.PASSPORT_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: verifyPassportSampleOutput,
   },
   [passportVerificationService.offerings.PASSPORT_FETCH]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: passportFetchSampleOutput,
   },
   [passportVerificationService.offerings.PASSPORT_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: passportOCRSampleOutput,
   },
};

export default passportOfferingsSampleOutputWithType;

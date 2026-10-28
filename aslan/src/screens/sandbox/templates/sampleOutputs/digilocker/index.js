import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import digiLockerSampleOutput from "screens/sandbox/resource/sampleOutputs/digiLocker/DigiLockerVerification.json";

const { DIGILOCKER } = productsMapping;
const digilockerVerificationService = productsOfferingsMapping[DIGILOCKER];

const digilockerOfferingsSampleOutputWithType = {
   [digilockerVerificationService.offerings.DIGILOCKER_KYC]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: digiLockerSampleOutput,
   },
};

export default digilockerOfferingsSampleOutputWithType;

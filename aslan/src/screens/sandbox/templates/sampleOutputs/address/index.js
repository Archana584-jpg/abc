import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import validationSampleOutput from "screens/sandbox/resource/sampleOutputs/address/Validation.json";
import deliveryConfirmationSampleOutput from "screens/sandbox/resource/sampleOutputs/address/DeliveryConfirmation.json";
import phoneCorrelationSampleOutput from "screens/sandbox/resource/sampleOutputs/address/PhoneCorrelation.json";

const { ADDRESS_VERIFICATION } = productsMapping;
const addressVerificationService = productsOfferingsMapping[ADDRESS_VERIFICATION];

const addressOfferingsSampleOutputWithType = {
   [addressVerificationService.offerings.ADDRESS_VALIDATION]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: validationSampleOutput,
   },
   [addressVerificationService.offerings.ADDRESS_DELIVERY_CONFIRMATION]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: deliveryConfirmationSampleOutput,
   },
   [addressVerificationService.offerings.ADDRESS_PHONE_CORRELATION]: {
      outputType: outputType.OUTPUT_WITH_IMAGE,
      SAMPLE_OUTPUT: phoneCorrelationSampleOutput,
   },
};

export default addressOfferingsSampleOutputWithType;

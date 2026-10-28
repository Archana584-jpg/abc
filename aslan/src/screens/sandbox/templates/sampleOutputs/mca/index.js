import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import cinVerificationSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/CINVerification.json";
import companyByNameSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/CompanyByName.json";
import dinVerificationSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/DINVerification.json";
import dinByPANSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/DINByPAN.json";
import panByDINSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/PANByDIN.json";
import tanVerificationSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/TANVerify.json";
import cinByPANSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/CINByPAN.json";
import contactDetailsByDINSampleOutput from "screens/sandbox/resource/sampleOutputs/mca/ContactDetailsByDIN.json";

const { MCA } = productsMapping;
const mcaVerificationService = productsOfferingsMapping[MCA];

const mcaOfferingsSampleOutputWithType = {
   [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: cinVerificationSampleOutput,
   },
   [mcaVerificationService.offerings.MCA_FETCH_DIRECTOR_DETAILS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: dinVerificationSampleOutput,
   },
   [mcaVerificationService.offerings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: companyByNameSampleOutput,
   },
   [mcaVerificationService.offerings.MCA_FETCH_DIN_BY_PAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: dinByPANSampleOutput,
   },
   [mcaVerificationService.offerings.MCA_FETCH_PAN_BY_DIN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: panByDINSampleOutput,
   },
   [mcaVerificationService.offerings.MCA_VERIFY_TAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: tanVerificationSampleOutput,
   },
   [mcaVerificationService.offerings.MCA_FETCH_CIN_BY_PAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: cinByPANSampleOutput,
   },
   [mcaVerificationService.offerings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: contactDetailsByDINSampleOutput,
   },
};

export default mcaOfferingsSampleOutputWithType;

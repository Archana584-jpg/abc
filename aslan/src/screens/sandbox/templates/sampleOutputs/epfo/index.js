import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import employmentHistoryByUANSampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/EmploymentHistoryByUAN.json";
import latestEmploymentSampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/LatestEmployment.json";
import passbookSampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/Passbook.json";
import UANSampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/UAN.json";
import UANByPANSampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/UANByPAN.json";
import employerVerifySampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/EmployerVerify.json";
import passbookWithoutOTPSampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/PassbookWithoutOTP.json";
import UANProfileDetailsSampleOutput from "screens/sandbox/resource/sampleOutputs/epfo/UANProfileDetails.json";

const { EPFO_VERIFICATION } = productsMapping;
const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];

const epfoOfferingsSampleOutputWithType = {
   [epfoVerificationService.offerings.EPFO_FETCH_LATEST_EMPLOYMENT]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: latestEmploymentSampleOutput,
   },
   [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: UANSampleOutput,
   },
   [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: passbookSampleOutput,
   },
   [epfoVerificationService.offerings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: employmentHistoryByUANSampleOutput,
   },
   [epfoVerificationService.offerings.EPFO_FETCH_UAN_BY_PAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: UANByPANSampleOutput,
   },
   [epfoVerificationService.offerings.EPFO_EMPLOYER_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: employerVerifySampleOutput,
   },
   [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: {
      outputType: outputType.OUTPUT_WITH_COLLAPSIBLE,
      SAMPLE_OUTPUT: passbookWithoutOTPSampleOutput,
   },
   [epfoVerificationService.offerings.EPFO_FETCH_PROFILE_DETAILS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: UANProfileDetailsSampleOutput,
   },
};

export default epfoOfferingsSampleOutputWithType;

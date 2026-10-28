import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import gstinLiteSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINLite.json";
import gstinByNameSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINByName.json";
import gstinByPANSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINByPAN.json";
import gstinDetailedSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINDetailed.json";
import gstinReportSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINReport.json";
import gstinContactDetailsSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINContactDetails.json";
import gstinByMobileSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINByMobile.json";
import gstinMCCCodesSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINMCCCodes.json";
import gstinTurnoverSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINTurnover.json";
import gstinCertificateSampleOutput from "screens/sandbox/resource/sampleOutputs/gstin/GSTINCertificate.json";

const { GSTIN_VERIFICATION } = productsMapping;
const gstinVerificationService = productsOfferingsMapping[GSTIN_VERIFICATION];

const gstinOfferingsSampleOutputWithType = {
   [gstinVerificationService.offerings.GSTIN_FETCH_BY_NAME]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinByNameSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_BY_PAN]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinByPANSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_LITE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinLiteSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_DETAILED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinDetailedSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_REPORT]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinReportSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_CONTACT_DETAILS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinContactDetailsSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinByMobileSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_MCC_CODES]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinMCCCodesSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_TURNOVER_DETAILS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinTurnoverSampleOutput,
   },
   [gstinVerificationService.offerings.GSTIN_FETCH_CERTIFICATE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: gstinCertificateSampleOutput,
   },
};

export default gstinOfferingsSampleOutputWithType;

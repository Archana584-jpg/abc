import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { outputType } from "screens/sandbox/constants";
import bankVerificationSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/BankVerification.json";
import upiVerificationSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/UPIVerification.json";
import upiIdFetchSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/UPIIdFetch.json";
import statementAnalyzer from "screens/sandbox/resource/sampleOutputs/bank/StatementAnalyzer.json";
import bankVerificationV2SampleOutput from "screens/sandbox/resource/sampleOutputs/bank/BankVerificationV2.json";
import statementOCRSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/StatementOCR.json";
import chequeOCRSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/ChequeOCR.json";
import bankVerificationPennilessSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/BankVerificationPenniless.json";
import bankVerificationHybridSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/BankVerificationHybrid.json";
import bankAccountByMobileSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/BankAccountByMobile.json";
import bankAccountByUPISampleOutput from "screens/sandbox/resource/sampleOutputs/bank/BankAccountByUPI.json";
import verifyIfSCSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/VerifyIFSC.json";
import salarySlipOCRSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/SalarySlipOCR.json";
import verifyUpiAdvancedSampleOutput from "screens/sandbox/resource/sampleOutputs/bank/VerifyUPIAdvanced.json";

const { BANK_VERIFICATION } = productsMapping;
const bankVerificationService = productsOfferingsMapping[BANK_VERIFICATION];

const bankOfferingsSampleOutputWithType = {
   [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: bankVerificationSampleOutput,
   },
   [bankVerificationService.offerings.UPI_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: upiVerificationSampleOutput,
   },
   [bankVerificationService.offerings.UPI_ID_FETCH]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: upiIdFetchSampleOutput,
   },
   [bankVerificationService.offerings.BANK_STATEMENT_REPORT]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: statementAnalyzer,
   },
   [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_V2]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: bankVerificationV2SampleOutput,
   },
   [bankVerificationService.offerings.BANK_CHEQUE_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: chequeOCRSampleOutput,
   },
   [bankVerificationService.offerings.BANK_STATEMENT_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: statementOCRSampleOutput,
   },
   [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_PENNILESS]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: bankVerificationPennilessSampleOutput,
   },
   [bankVerificationService.offerings.BANK_ACCOUNT_VERIFY_HYBRID]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: bankVerificationHybridSampleOutput,
   },
   [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_MOBILE]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: bankAccountByMobileSampleOutput,
   },
   [bankVerificationService.offerings.FETCH_BANK_ACCOUNT_BY_UPI]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: bankAccountByUPISampleOutput,
   },
   [bankVerificationService.offerings.BANK_IFSC_VERIFY]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: verifyIfSCSampleOutput,
   },
   [bankVerificationService.offerings.SALARY_SLIP_OCR]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: salarySlipOCRSampleOutput,
   },
   [bankVerificationService.offerings.UPI_VERIFY_ADVANCED]: {
      outputType: outputType.OUTPUT,
      SAMPLE_OUTPUT: verifyUpiAdvancedSampleOutput,
   },
};

export default bankOfferingsSampleOutputWithType;

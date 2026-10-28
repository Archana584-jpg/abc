import { bankAccountVerificationOfferingSchemaWRTSteps as bankAccountVerificationSchema } from "./BankVerification";
import { upiVerificationOfferingSchemaWRTSteps as upiVerificationSchema } from "./UPIVerification";
import { upiIdOfferingSchemaWRTSteps as upiIdSchema } from "./UPIIdFetch";
import { statementAnalyzerOfferingSchemaWRTSteps as statementAnalyzerOfferingSchema } from "./StatementAnalyzer";
import { bankAccountVerificationV2OfferingSchemaWRTSteps as bankAccountVerificationV2Schema } from "./BAVV2";
import { chequeOCRSchemaWRTSteps as chequeOCRSchema } from "./ChequeOCR";
import { statementOCRSchemaWRTSteps as statementOCRSchema } from "./StatementOCR";
import { bankAccountPennilessVerificationOfferingSchemaWRTSteps as bankVerificationPennilessSchema } from "./BankVerificationPenniless";
import { bankAccountHybridVerificationOfferingSchemaWRTSteps as bankAccountHybridVerificationSchema } from "./BankVerificationHybrid";
import { bankAccountByMobileOfferingSchemaWRTSteps as bankAccountByMobileSchema } from "./BankAccountByMobile";
import { bankAccountByUPIOfferingSchemaWRTSteps as bankAccountByUPISchema } from "./BankAccountByUPI";
import { verifyIFSCOfferingSchemaWRTSteps as verifyIFSCSchema } from "./VerifyIFSC";
import { salarySlipOCROfferingSchemaWRTSteps as salarySlipOCROfferingSchema } from "./SalarySlipOCR";
import { verifyUpiAdvancedOfferingSchemaWRTSteps as verifyUpiAdvancedSchema } from "./VerifyUPIAdvanced";

export {
   bankAccountVerificationSchema,
   upiVerificationSchema,
   upiIdSchema,
   statementAnalyzerOfferingSchema,
   bankAccountVerificationV2Schema,
   chequeOCRSchema,
   statementOCRSchema,
   bankVerificationPennilessSchema,
   bankAccountHybridVerificationSchema,
   bankAccountByMobileSchema,
   bankAccountByUPISchema,
   verifyIFSCSchema,
   salarySlipOCROfferingSchema,
   verifyUpiAdvancedSchema,
};

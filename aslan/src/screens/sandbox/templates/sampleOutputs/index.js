import aadhaarOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/aadhaar";
import digilockerOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/digilocker";
import msmeOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/msme";
import mcaOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/mca";
import bankOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/bank";
import complianceOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/compliance";
import fssaiOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/fssai";
import rcOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/rc";
import dlOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/dl";
import voterOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/voter";
import gstinOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/gstin";
import livenessOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/liveness";
import facematchOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/facematch";
import passportOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/passport";
import panOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/pan";
import epfoOfferingsSampleOutput from "screens/sandbox/templates/sampleOutputs/epfo";
import sneOfferingsSampleOutput from "./sne";
import addressOfferingsSampleOutput from "./address";
import profileSampleOutput from "./profileLookup";
import { productsMapping } from "utils/constants";

const {
   AADHAAR_VERIFICATION,
   DIGILOCKER,
   MSME_VERIFICATION,
   MCA,
   BANK_VERIFICATION,
   COMPLIANCE_CHECKS,
   FSSAI,
   RC_VERIFICATION,
   DL_VERIFICATION,
   VOTER_ID_VERIFICATION,
   GSTIN_VERIFICATION,
   LIVENESS_VERIFICATION,
   FACE_MATCH_VERIFICATION,
   PASSPORT_VERIFICATION,
   PAN_VERIFICATION,
   EPFO_VERIFICATION,
   SHOP_AND_ESTABLISHMENTS,
   ADDRESS_VERIFICATION,
   PROFILE_LOOKUP,
} = productsMapping;

export const productOfferingsSampleOutput = {
   [AADHAAR_VERIFICATION]: aadhaarOfferingsSampleOutput,
   [DIGILOCKER]: digilockerOfferingsSampleOutput,
   [MSME_VERIFICATION]: msmeOfferingsSampleOutput,
   [MCA]: mcaOfferingsSampleOutput,
   [BANK_VERIFICATION]: bankOfferingsSampleOutput,
   [COMPLIANCE_CHECKS]: complianceOfferingsSampleOutput,
   [FSSAI]: fssaiOfferingsSampleOutput,
   [RC_VERIFICATION]: rcOfferingsSampleOutput,
   [DL_VERIFICATION]: dlOfferingsSampleOutput,
   [VOTER_ID_VERIFICATION]: voterOfferingsSampleOutput,
   [GSTIN_VERIFICATION]: gstinOfferingsSampleOutput,
   [LIVENESS_VERIFICATION]: livenessOfferingsSampleOutput,
   [FACE_MATCH_VERIFICATION]: facematchOfferingsSampleOutput,
   [PASSPORT_VERIFICATION]: passportOfferingsSampleOutput,
   [PAN_VERIFICATION]: panOfferingsSampleOutput,
   [EPFO_VERIFICATION]: epfoOfferingsSampleOutput,
   [SHOP_AND_ESTABLISHMENTS]: sneOfferingsSampleOutput,
   [ADDRESS_VERIFICATION]: addressOfferingsSampleOutput,
   [PROFILE_LOOKUP]: profileSampleOutput,
};

import { Boson, Meson, OcrAadhaar, ExtractData, AadhaarVerify } from "../screens/aadhaar";
import Login from "../screens/auth";
import BankAcccountVerification from "../screens/bankAccountVerification";
import { CreditVerificationContainer } from "../screens/creditVerification";
import { FetchDlContainer } from "../screens/drivingLicense";
import { Epfo } from "../screens/epfo";
import { EpfoList, EpfoLatestDetails, EpfoPassBook, EmploymentHistory } from "../screens/epfoVerification";
import { CowinVerification } from "../screens/cowinVerification";
import { FaceMatchContainer } from "../screens/faceMatch";
import { GstinContainer } from "../screens/gstin";
import {
   PanLiteContainer,
   PanDetailedContainer,
   VerifyPanContainer,
   OcrPan,
   AadhaarPanLinkContainer,
   VerifyTdsContainer,
   TdsCreditContainer,
} from "../screens/pan";
import {
   GenerateMrzContainer,
   PassportVerificationContainer,
   VerifyMrzContainer,
} from "../screens/passportVerification";
import { RCVerification } from "../screens/rcVerification";
import Voter from "../screens/voter";
import { InsuranceAgentVerification } from "../screens/insuranceAgentVerification";
import { VerifyUdyam, VerifyUdyogAadhaar } from "../screens/msmeVerification";
import { FssaiLicense } from "../screens/fssai";
import ComplianceChecks from "../screens/complianceChecks";

export const contentRoutes = [
   {
      path: "/",
      component: Boson,
   },
   {
      path: "/aadhaar/meson",
      component: Meson,
   },
   {
      path: "/aadhaar/extract-data",
      component: ExtractData,
   },
   {
      path: "/aadhaar/ocr",
      component: OcrAadhaar,
   },
   {
      path: "/aadhaar/verify",
      component: AadhaarVerify,
   },
   {
      path: "/voter",
      component: Voter,
   },
   {
      path: "/pan/lite",
      component: PanLiteContainer,
   },
   {
      path: "/pan/detailed",
      component: PanDetailedContainer,
   },
   {
      path: "/pan/verify",
      component: VerifyPanContainer,
   },
   {
      path: "/pan/ocr",
      component: OcrPan,
   },
   {
      path: "/pan/aadhaar-link",
      component: AadhaarPanLinkContainer,
   },
   {
      path: "/dl/fetch",
      component: FetchDlContainer,
   },
   {
      path: "/face-match",
      component: FaceMatchContainer,
   },
   {
      path: "/gstin",
      component: GstinContainer,
   },
   // {
   //   path: "/credit-verification",
   //   component: CreditVerificationContainer,
   // },
   {
      path: "/rc-verification",
      component: RCVerification,
   },
   {
      path: "/bank-account-verification",
      component: BankAcccountVerification,
   },
   {
      path: "/passport/verify",
      component: PassportVerificationContainer,
   },
   {
      path: "/passport/generate-mrz",
      component: GenerateMrzContainer,
   },
   {
      path: "/passport/verify-mrz",
      component: VerifyMrzContainer,
   },
   // {
   //   path: "/pan/tds-certificate-verify",
   //   component: VerifyTdsContainer,
   // },
   // {
   //   path: "/pan/fetch-tds-credit-details",
   //   component: TdsCreditContainer,
   // },
   // {
   //   path: "/epfo-verification",
   //   component: Epfo,
   // },
   {
      path: "/epfo/uan",
      component: EpfoList,
   },
   {
      path: "/epfo/uan-details",
      component: EpfoLatestDetails,
   },
   {
      path: "/epfo/passbook",
      component: EpfoPassBook,
   },
   {
      path: "/cowin-verification",
      component: CowinVerification,
   },
   {
      path: "/insurance-agent",
      component: InsuranceAgentVerification,
   },
   {
      path: "/msme-verification/udyam",
      component: VerifyUdyam,
   },
   {
      path: "/msme-verification/udyog-aadhaar",
      component: VerifyUdyogAadhaar,
   },
   {
      path: "/fssai-verification/fetch-license",
      component: FssaiLicense,
   },
   {
      path: "/epfo/employment-history",
      component: EmploymentHistory,
   },
   {
      path: "/compliance-checks",
      component: ComplianceChecks,
   },
];

export const authenticationRoutes = [
   {
      path: "/",
      component: Login,
   },
];

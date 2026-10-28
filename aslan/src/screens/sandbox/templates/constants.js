import { CustomButton, CustomTable } from "shared";
import { orgConfigKeys } from "shared/constants";
import {
   aadhaarServiceOfferings,
   productsMapping,
   digilockerServiceOfferings,
   msmeServiceOfferings,
   mcaServiceOfferings,
   bankServiceOfferings,
   complianceServiceOfferings,
   fssaiServiceOfferings,
   rcServiceOfferings,
   dlServiceOfferings,
   voterIdServiceOfferings,
   gstinServiceOfferings,
   livenessServiceOfferings,
   facematchServiceOfferings,
   passportServiceOfferings,
   panServiceOfferings,
   epfoServiceOfferings,
   sneServiceOfferings,
   addressServiceOfferings,
   profileServiceOfferings,
} from "utils/constants";
import { outputKeyMapping, employmentHistoryPdfColumn } from "screens/sandbox/constants";
import { DigiLocker, EpfoPassbook } from "screens/sandbox/containers/output";
import { Row, Col } from "antd";
import html2pdf from "html2pdf.js";
import { renderToStaticMarkup } from "react-dom/server";
import { orgConfigHandler } from "utils/helper";

const {
   AADHAAR_DATA,
   OCR_DATA,
   DOCUMENT,
   ENTERPRISE_DATA,
   NIC_DATA,
   ENTERPRISE_UNITS,
   OWNER_DETAILS,
   BANK_DETAILS,
   CAPITAL_INVESTMENTS,
   TOTAL_EMPLOYEES,
   MALE_EMPLOYEES,
   FEMALE_EMPLOYEES,
   COMPANIES,
   COMPANY_DATA,
   DIRECTOR_DATA,
   BANK_ACCOUNT_DATA,
   UPI_DATA,
   ITR_206_COMPLIANCE_DATA,
   FSSAI_DATA,
   RC_DATA,
   CHALLAN_DATA,
   DRIVING_LICENSE_DATA,
   VOTER_DATA,
   RESULTS,
   GSTIN_DATA,
   MESSAGE,
   TRANSACTION_ID,
   CONFIDENCE,
   MRZ_DATA,
   PAN_DATA,
   EMPLOYMENT_DATA,
   UAN_LIST,
   UAN_NUMBER,
   PASSPORT_DATA,
   UPI_ACCOUNT_INFO,
   BUSINESS_DATA,
   SHOP_ESTABLISHMENT_DATA,
   ESTABLISHMENT_DATA,
   ADDRESS_VALIDATION_DATA,
   DELIVERY_DATA,
   ADDRESS_PHONE_CORRELATION_DATA,
   UDYAM_DETAILS,
   UDYAM_CERTIFICATE_URL,
   PERSONAL_DATA,
   NATIONAL_DOCUMENT_DATA,
   ADDRESS_DATA,
   PERSONAL_INFORMATION,
   DIN_DETAILS,
   PAN_DETAILS,
   TAN_DETAILS,
   BANK_ACCOUNT_VERIFICATION_DATA,
   MOBILE_LOOKUP_DATA,
   MOBILE_NUMBER_AGE_DATA,
   ELECTRICITY_BILL_DATA,
   MASKED_AADHAAR_DATA,
   VEHICLE_DETAILS,
   UDYAM_NUMBER,
   UDYAM_SOURCE,
   UDYAM_LIST,
   CIN_DETAILS,
   CIN_LIST,
   ENTITY_LINKAGE_DATA,
   TURNOVER_DETAILS,
   CONTACT_DETAILS,
   GST_CERTIFICATE_LINK,
   PASSBOOK_DATA,
   VEHICLE_FASTAG_DATA,
   BANK_IFSC_DATA,
   NAME_LOOKUP_DATA,
   VEHICLE_DATA,
   DIGITAL_PROFILE_DATA,
   DATA,
   UAN_PROFILE_DATA,
   ENRICHMENT_DATA,
   DATA_VECTORS_REQUESTED,
   DATA_VECTORS_EFFECTIVE,
} = outputKeyMapping;

export const outputKeyMappingWRTProductOfferings = {
   [productsMapping.AADHAAR_VERIFICATION]: {
      [aadhaarServiceOfferings.AADHAAR_EKYC_BOSON]: [AADHAAR_DATA],
      [aadhaarServiceOfferings.AADHAAR_EKYC_MESON]: [AADHAAR_DATA],
      [aadhaarServiceOfferings.AADHAAR_XML_ZIP_EXTRACT]: [AADHAAR_DATA],
      [aadhaarServiceOfferings.AADHAAR_VERIFY]: [AADHAAR_DATA],
      [aadhaarServiceOfferings.AADHAAR_OCR]: [OCR_DATA],
      [aadhaarServiceOfferings.AADHAAR_OCR_V2]: [OCR_DATA],
      [aadhaarServiceOfferings.AADHAAR_UID_MASKING]: [MESSAGE, MASKED_AADHAAR_DATA],
   },
   [productsMapping.DIGILOCKER]: {
      [digilockerServiceOfferings.DIGILOCKER_KYC]: [DOCUMENT],
   },
   [productsMapping.MSME_VERIFICATION]: {
      [msmeServiceOfferings.MSME_UDYAM_REFERENCE_VERIFY]: [ENTERPRISE_DATA, NIC_DATA, ENTERPRISE_UNITS],
      [msmeServiceOfferings.MSME_UDYOG_AADHAAR_VERIFY]: [ENTERPRISE_DATA, NIC_DATA, ENTERPRISE_UNITS],
      [msmeServiceOfferings.MSME_UDYAM_REFERENCE_VERIFY_DETAILED]: [
         ENTERPRISE_DATA,
         OWNER_DETAILS,
         BANK_DETAILS,
         TOTAL_EMPLOYEES,
         MALE_EMPLOYEES,
         FEMALE_EMPLOYEES,
         CAPITAL_INVESTMENTS,
         ENTERPRISE_UNITS,
         NIC_DATA,
      ],
      [msmeServiceOfferings.MSME_UDYAM_FETCH_BY_MOBILE]: [UDYAM_DETAILS],
      [msmeServiceOfferings.MSME_UDYAM_REFERENCE_VERIFY_ADVANCED]: [
         ENTERPRISE_DATA,
         NIC_DATA,
         ENTERPRISE_UNITS,
         UDYAM_CERTIFICATE_URL,
      ],
      [msmeServiceOfferings.MSME_UDYAM_CERTIFICATE_OCR]: [ENTERPRISE_DATA, NIC_DATA],
      [msmeServiceOfferings.MSME_UDYAM_FETCH_BY_PAN]: [
         MESSAGE,
         UDYAM_NUMBER,
         ENTERPRISE_DATA,
         NIC_DATA,
         ENTERPRISE_UNITS,
         UDYAM_CERTIFICATE_URL,
      ],
      [msmeServiceOfferings.MSME_UDYAM_LOOKUP]: [UDYAM_LIST, UDYAM_SOURCE],
   },
   [productsMapping.MCA]: {
      [mcaServiceOfferings.MCA_FETCH_COMPANY_DETAILS]: [COMPANY_DATA],
      [mcaServiceOfferings.MCA_FETCH_DIRECTOR_DETAILS]: [DIRECTOR_DATA],
      [mcaServiceOfferings.MCA_FETCH_COMPANY_DETAILS_BY_NAME]: [COMPANIES],
      [mcaServiceOfferings.MCA_FETCH_PAN_BY_DIN]: [PAN_DETAILS],
      [mcaServiceOfferings.MCA_FETCH_DIN_BY_PAN]: [DIN_DETAILS],
      [mcaServiceOfferings.MCA_VERIFY_TAN]: [TAN_DETAILS],
      [mcaServiceOfferings.MCA_FETCH_CIN_BY_PAN]: [CIN_LIST, CIN_DETAILS],
      [mcaServiceOfferings.MCA_FETCH_CONTACT_DETAILS_BY_DIN]: [CONTACT_DETAILS],
   },
   [productsMapping.BANK_VERIFICATION]: {
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY]: [BANK_ACCOUNT_DATA],
      [bankServiceOfferings.UPI_VERIFY]: [UPI_DATA],
      [bankServiceOfferings.UPI_ID_FETCH]: [UPI_ACCOUNT_INFO],
      [bankServiceOfferings.BANK_STATEMENT_REPORT]: [MESSAGE, TRANSACTION_ID],
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY_V2]: [BANK_ACCOUNT_VERIFICATION_DATA],
      [bankServiceOfferings.BANK_CHEQUE_OCR]: [OCR_DATA],
      [bankServiceOfferings.BANK_STATEMENT_OCR]: [OCR_DATA],
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY_PENNILESS]: [BANK_ACCOUNT_DATA],
      [bankServiceOfferings.BANK_ACCOUNT_VERIFY_HYBRID]: [BANK_ACCOUNT_DATA],
      [bankServiceOfferings.FETCH_BANK_ACCOUNT_BY_MOBILE]: [BANK_ACCOUNT_DATA],
      [bankServiceOfferings.FETCH_BANK_ACCOUNT_BY_UPI]: [BANK_ACCOUNT_DATA],
      [bankServiceOfferings.BANK_IFSC_VERIFY]: [BANK_IFSC_DATA],
      [bankServiceOfferings.SALARY_SLIP_OCR]: [DATA],
      [bankServiceOfferings.UPI_VERIFY_ADVANCED]: [UPI_DATA],
   },
   [productsMapping.COMPLIANCE_CHECKS]: {
      [complianceServiceOfferings.ITR_206_COMPLIANCE_VERIFY]: [ITR_206_COMPLIANCE_DATA],
   },
   [productsMapping.FSSAI]: {
      [fssaiServiceOfferings.FSSAI_LICENSE_FETCH]: [FSSAI_DATA],
   },
   [productsMapping.RC_VERIFICATION]: {
      [rcServiceOfferings.VEHICLE_RC_FETCH_DETAILED]: [RC_DATA],
      [rcServiceOfferings.VEHICLE_RC_FETCH_LITE]: [RC_DATA],
      [rcServiceOfferings.VEHICLE_RC_FETCH_DETAILED_WITH_CHALLAN]: [RC_DATA, CHALLAN_DATA],
      [rcServiceOfferings.VEHICLE_RC_FETCH_CHALLAN]: [CHALLAN_DATA],
      [rcServiceOfferings.VEHICLE_RC_FETCH_REG_NUM_BY_CHASSIS]: [VEHICLE_DETAILS],
      [rcServiceOfferings.VEHICLE_RC_FETCH_FASTAG_DETAILED]: [VEHICLE_FASTAG_DATA],
      [rcServiceOfferings.VEHICLE_RC_LOOKUP_BY_MOBILE]: [VEHICLE_DATA],
      [rcServiceOfferings.VEHICLE_RC_FETCH_DETAILED_BY_CHASSIS]: [VEHICLE_DETAILS],
      [rcServiceOfferings.VEHICLE_RC_FETCH_CONTACT]: [RC_DATA],
   },
   [productsMapping.DL_VERIFICATION]: {
      [dlServiceOfferings.DRIVING_LICENSE_FETCH_DETAILS]: [DRIVING_LICENSE_DATA],
      [dlServiceOfferings.DRIVING_LICENSE_OCR]: [OCR_DATA],
   },
   [productsMapping.VOTER_ID_VERIFICATION]: {
      [voterIdServiceOfferings.VOTER_FETCH_DETAILS_BOSON]: [VOTER_DATA],
      [voterIdServiceOfferings.VOTER_FETCH_DETAILS_MESON]: [VOTER_DATA],
      [voterIdServiceOfferings.VOTER_ID_OCR]: [OCR_DATA],
   },
   [productsMapping.GSTIN_VERIFICATION]: {
      [gstinServiceOfferings.GSTIN_FETCH_BY_NAME]: [RESULTS],
      [gstinServiceOfferings.GSTIN_FETCH_BY_PAN]: [RESULTS],
      [gstinServiceOfferings.GSTIN_FETCH_LITE]: [GSTIN_DATA],
      [gstinServiceOfferings.GSTIN_FETCH_DETAILED]: [GSTIN_DATA],
      [gstinServiceOfferings.GSTIN_REPORT]: [MESSAGE, TRANSACTION_ID],
      [gstinServiceOfferings.GSTIN_FETCH_CONTACT_DETAILS]: [GSTIN_DATA],
      [gstinServiceOfferings.GSTIN_FETCH_BY_MOBILE]: [MESSAGE, GSTIN_DATA],
      [gstinServiceOfferings.GSTIN_FETCH_MCC_CODES]: [GSTIN_DATA],
      [gstinServiceOfferings.GSTIN_FETCH_TURNOVER_DETAILS]: [GSTIN_DATA, TURNOVER_DETAILS],
      [gstinServiceOfferings.GSTIN_FETCH_CERTIFICATE]: [GST_CERTIFICATE_LINK],
   },
   [productsMapping.LIVENESS_VERIFICATION]: {
      [livenessServiceOfferings.LIVENESS_PASSIVE_CHECK]: [MESSAGE, CONFIDENCE],
   },
   [productsMapping.FACE_MATCH_VERIFICATION]: {
      [facematchServiceOfferings.FACE_MATCH_VERIFICATION]: [MESSAGE, CONFIDENCE],
   },
   [productsMapping.PASSPORT_VERIFICATION]: {
      [passportServiceOfferings.PASSPORT_MRZ_GENERATE]: [MRZ_DATA],
      [passportServiceOfferings.PASSPORT_MRZ_VERIFY]: [MESSAGE],
      [passportServiceOfferings.PASSPORT_VERIFY]: [MESSAGE],
      [passportServiceOfferings.PASSPORT_FETCH]: [PASSPORT_DATA],
      [passportServiceOfferings.PASSPORT_OCR]: [OCR_DATA],
   },
   [productsMapping.PAN_VERIFICATION]: {
      [panServiceOfferings.PAN_VERIFY_V2]: [PAN_DATA],
      [panServiceOfferings.PAN_FETCH_DETAILED]: [PAN_DATA],
      [panServiceOfferings.PAN_FETCH_LITE]: [PAN_DATA],
      [panServiceOfferings.PAN_CHECK_AADHAAR_LINK]: [MESSAGE],
      [panServiceOfferings.PAN_OCR]: [OCR_DATA],
      [panServiceOfferings.PAN_BUSINESS_VERIFY]: [BUSINESS_DATA],
      [panServiceOfferings.PAN_FETCH_FATHER_NAME]: [PAN_DATA],
      [panServiceOfferings.PAN_FETCH_LITE_PLUS]: [PAN_DATA],
      [panServiceOfferings.PAN_VERIFY_V3]: [PAN_DATA],
      [panServiceOfferings.PAN_FETCH_AADHAAR]: [PAN_DATA],
      [panServiceOfferings.PAN_FETCH_ADVANCED]: [PAN_DATA],
      [panServiceOfferings.PAN_FETCH_ESSENTIALS]: [PAN_DATA],
      [panServiceOfferings.PAN_ITR_206_COMPLIANCE_VERIFY]: [ITR_206_COMPLIANCE_DATA],
      [panServiceOfferings.PAN_FETCH_CARD_NAME]: [PAN_DATA],
      [panServiceOfferings.PAN_FETCH_CONTACT_DETAILS]: [PAN_DATA],
   },
   [productsMapping.EPFO_VERIFICATION]: {
      [epfoServiceOfferings.EPFO_FETCH_LATEST_EMPLOYMENT]: [EMPLOYMENT_DATA],
      [epfoServiceOfferings.EPFO_FETCH_UAN_BY_MOBILE]: [UAN_LIST],
      [epfoServiceOfferings.EPFO_FETCH_PASSBOOK]: [EMPLOYMENT_DATA],
      [epfoServiceOfferings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: [EMPLOYMENT_DATA],
      [epfoServiceOfferings.EPFO_FETCH_UAN_BY_PAN]: [UAN_LIST],
      [epfoServiceOfferings.EPFO_EMPLOYER_VERIFY]: [ESTABLISHMENT_DATA],
      [epfoServiceOfferings.EPFO_FETCH_PASSBOOK_WITHOUT_OTP]: [PASSBOOK_DATA],
      [epfoServiceOfferings.EPFO_FETCH_PROFILE_DETAILS]: [UAN_PROFILE_DATA],
   },
   [productsMapping.SHOP_AND_ESTABLISHMENTS]: {
      [sneServiceOfferings.SNE_REGISTRATION_VERIFY]: [SHOP_ESTABLISHMENT_DATA],
   },
   [productsMapping.ADDRESS_VERIFICATION]: {
      [addressServiceOfferings.ADDRESS_VALIDATION]: [ADDRESS_VALIDATION_DATA],
      [addressServiceOfferings.ADDRESS_DELIVERY_CONFIRMATION]: [DELIVERY_DATA],
      [addressServiceOfferings.ADDRESS_PHONE_CORRELATION]: [ADDRESS_PHONE_CORRELATION_DATA],
   },
   [productsMapping.PROFILE_LOOKUP]: {
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: [PERSONAL_DATA],
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: [NATIONAL_DOCUMENT_DATA],
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: [PERSONAL_INFORMATION, ADDRESS_DATA],
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_PAN]: [PAN_DATA],
      [profileServiceOfferings.PROFILE_TELCO_MOBILE_LOOKUP]: [MOBILE_LOOKUP_DATA],
      [profileServiceOfferings.PROFILE_UTILITY_FETCH_ELECTRICITY_BILL]: [ELECTRICITY_BILL_DATA],
      [profileServiceOfferings.PROFILE_ADDRESS_LOOKUP_BY_MOBILE]: [ADDRESS_DATA],
      [profileServiceOfferings.PROFILE_FETCH_MOBILE_NUMBER_AGE]: [MOBILE_NUMBER_AGE_DATA],
      [profileServiceOfferings.PROFILE_CHECK_ENTITY_LINKAGE]: [ENTITY_LINKAGE_DATA],
      [profileServiceOfferings.PROFILE_PAN_LOOKUP_BY_MOBILE]: [PAN_DATA],
      [profileServiceOfferings.PROFILE_MOBILE_PREFILL]: [PERSONAL_DATA],
      [profileServiceOfferings.PROFILE_NAME_LOOKUP_BY_MOBILE]: [NAME_LOOKUP_DATA],
      [profileServiceOfferings.PROFILE_FETCH_DIGITAL_FOOTPRINT]: [DIGITAL_PROFILE_DATA],
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_SPEND_INSIGHTS]: [
         ENRICHMENT_DATA,
         DATA_VECTORS_REQUESTED,
         DATA_VECTORS_EFFECTIVE,
      ],
   },
};

export const customUIRenderingWRTProductOffering = {
   [productsMapping.DIGILOCKER]: {
      [digilockerServiceOfferings.DIGILOCKER_KYC]: DigiLocker,
   },
   [productsMapping.EPFO_VERIFICATION]: {
      [epfoServiceOfferings.EPFO_FETCH_PASSBOOK]: EpfoPassbook,
   },
};

export const tabularOutputAdditionalFieldSchemaWRTProductOffering = {
   [productsMapping.DIGILOCKER]: {
      [digilockerServiceOfferings.DIGILOCKER_KYC]: ({ handleChange }) => (
         <CustomButton handleClick={() => handleChange("previous")} type="primary" label="Back" className="tw-m-3" />
      ),
   },
   [productsMapping.EPFO_VERIFICATION]: {
      [epfoServiceOfferings.EPFO_FETCH_PASSBOOK]: ({ handleChange }) => (
         <CustomButton handleClick={() => handleChange("previous")} type="primary" label="Back" className="tw-m-3" />
      ),
   },
};

export const tabBarExtraContent = {
   [productsMapping.EPFO_VERIFICATION]: {
      [epfoServiceOfferings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: ({ handleClick, orgConfig }) => {
         if (orgConfigHandler(orgConfig, orgConfigKeys.IS_EMP_HIST_PDF_DOWNLOAD_SUPPORTED)) {
            return (
               <Row align="middle">
                  <Col>
                     <CustomButton label="Download PDF" handleClick={() => handleClick()} />
                  </Col>
               </Row>
            );
         }
         return null;
      },
   },
};

export const handleDownloadEmploymentHistoryPdf = (data) => {
   const options = {
      margin: 10,
      filename: `${data.payload.uan || "sample"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
   };

   const jsxElement = (
      <Row id="employment_history_pdf_format">
         <Col lg={{ span: 24 }}>
            <Row className="tw-mb-2" gutter={[0, 32]}>
               <Col lg={{ span: 12 }}>
                  <Row className="tw-border-black tw-border-solid">
                     <Col
                        lg={{ span: 10 }}
                        className="tw-font-semibold tw-border-black tw-border-solid tw-border-l-0 tw-border-t-0 tw-border-b-0 tw-border-r tw-pl-3"
                     >
                        UAN
                     </Col>
                     <Col lg={{ span: 7 }} className="tw-pl-3">
                        {data.payload.uan || "1006XXXXX80X"}
                     </Col>
                  </Row>
               </Col>

               <Col lg={{ span: 24 }}>
                  <Row className="tw-border-black tw-border-solid">
                     <Col
                        lg={{ span: 5 }}
                        className="tw-font-semibold tw-border-black tw-border-solid tw-border-l-0 tw-border-t-0 tw-border-b-1 tw-border-r tw-pl-3"
                     >
                        NAME
                     </Col>
                     <Col
                        lg={{ span: 19 }}
                        className="tw-border-black tw-border-solid tw-border-l-0 tw-border-t-0 tw-border-b-1 tw-border-r-0 tw-pl-3"
                     >
                        {data.employment_data[0].name}
                     </Col>
                     <Col
                        lg={{ span: 5 }}
                        className="tw-font-semibold tw-border-black tw-border-solid tw-border-l-0 tw-border-t-0 tw-border-b-0 tw-border-r tw-pl-3"
                     >
                        FATHER'S NAME
                     </Col>
                     <Col lg={{ span: 19 }} className="tw-pl-3">
                        {data.employment_data[0].guardian_name}
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row>
               <Col>
                  <CustomTable
                     columns={employmentHistoryPdfColumn}
                     data={data.employment_data}
                     pagination={false}
                     style={{ whiteSpace: "pre" }}
                     rowKey="member_id"
                  />
               </Col>
            </Row>
         </Col>
      </Row>
   );

   const htmlString = renderToStaticMarkup(jsxElement);
   html2pdf(htmlString, options).then((pdf) => {
      const pdfBlob = pdf.output("blob");
      const url = URL.createObjectURL(pdfBlob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${data.payload.uan || "sample"}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
   });
};

export const extraFunctionalityHandler = {
   [productsMapping.EPFO_VERIFICATION]: {
      [epfoServiceOfferings.EPFO_FETCH_EMPLOYMENT_HISTORY_BY_UAN]: ({ data }) =>
         handleDownloadEmploymentHistoryPdf(data),
   },
};

export const consentTexts = {
   [productsMapping.PAN_VERIFICATION]: {
      [panServiceOfferings.PAN_FETCH_CARD_NAME]: {
         label: "I provide consent to process my PAN information.",
         value: "I provide consent to process my pan information.",
      },
   },
   [productsMapping.BANK_VERIFICATION]: {
      [bankServiceOfferings.UPI_VERIFY_ADVANCED]: {
         label: "We confirm that we have obtained the customer\u2019s explicit consent to access and process their VPA. This consent is fully informed, valid, and has not been withdrawn.",
         value: "We confirm that we have obtained the customer\u2019s explicit consent to access and process their VPA. This consent is fully informed, valid, and has not been withdrawn.",
      },
   },
   [productsMapping.ADDRESS_VERIFICATION]: {
      [addressServiceOfferings.ADDRESS_DELIVERY_CONFIRMATION]: {
         label: "You also unconditionally authorise us to share your details with third parties/partners, including but not limited to logistics services partners for the purpose of validating your address against your phone number.",
         value: "You also unconditionally authorise us to share your details with third parties/partners, including but not limited to logistics services partners for the purpose of validating your address against your phone number.",
      },
      [addressServiceOfferings.ADDRESS_PHONE_CORRELATION]: {
         label: "You also unconditionally authorise us to share your details with third parties/partners, including but not limited to logistics services partners for the purpose of validating your address against your phone number.",
         value: "You also unconditionally authorise us to share your details with third parties/partners, including but not limited to logistics services partners for the purpose of validating your address against your phone number.",
      },
   },
   [productsMapping.PROFILE_LOOKUP]: {
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_PROFILE]: {
         label: "I provide consent to fetch information.",
         value: "I provide consent to fetch information.",
      },
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_ADDRESS]: {
         label: "I provide consent to fetch information.",
         value: "I provide consent to fetch information.",
      },
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_NATIONAL_IDS]: {
         label: "I provide consent to fetch information.",
         value: "I provide consent to fetch information.",
      },
      [profileServiceOfferings.PROFILE_FETCH_INDIVIDUAL_PAN]: {
         label: "I provide consent to fetch information.",
         value: "I provide consent to fetch information.",
      },
      [profileServiceOfferings.PROFILE_CHECK_ENTITY_LINKAGE]: {
         label: "I provide consent to fetch information.",
         value: "I provide consent to fetch information.",
      },
   },
};

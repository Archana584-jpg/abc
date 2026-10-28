import React from "react";
import {
   identityDetailsLogo,
   nationalIDsLogo,
   employmentInsightsLogo,
   businessComplianceLogo,
   bankingFinancialLogo,
   telecomLogo,
   digitalFootprintLogo,
   assetAndUtilityLogo,
} from "assets/images";
import {
   IdentityDetails,
   NationalIds,
   DigitalFootprint,
   EmploymentInsights,
   BusinessCompliance,
   BankingFinancials,
   AssetAndUtility,
   TelecomIntelligence,
} from "screens/xToDetails/containers";
import { LinkOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
const { Text } = Typography;

export const menuItems = [
   {
      key: "identity-contact",
      label: "Identity & Contact Details",
      icon: identityDetailsLogo,
      priority: 1,
   },
   {
      key: "national-ids",
      label: "National IDs",
      icon: nationalIDsLogo,
      priority: 2,
   },
   {
      key: "digital-footprint",
      label: "Digital Footprint",
      icon: digitalFootprintLogo,
      priority: 5,
   },
   {
      key: "employment",
      label: "Employment Insights",
      icon: employmentInsightsLogo,
      priority: 4,
   },
   {
      key: "business-compliance",
      label: "Business & Compliance",
      icon: businessComplianceLogo,
      priority: 6,
   },
   {
      key: "banking-financials",
      label: "Banking & Financials",
      icon: bankingFinancialLogo,
      priority: 3,
   },
   {
      key: "asset-and-utility",
      label: "Asset and Utility",
      icon: assetAndUtilityLogo,
      priority: 7,
   },
   {
      key: "telecom-intelligence",
      label: "Telecom Intelligence",
      icon: telecomLogo,
      priority: 8,
   },
];

export const APINameMapping = {
   ADDRESS_LOOKUP_BY_MOBILE: "addressLookupByMobile",
   LATEST_PASSBOOK_BY_MOBILE: "latestPassbookByMobile",
   LATEST_EMPLOYMENT_BY_MOBILE: "latestEmploymentByMobile",
   FETCH_UAN: "fetchUAN",
   GSTIN_BY_MOBILE: "GSTINByMobile",
   UDYAM_BY_MOBILE: "udyamByMobile",
   MOBILE_PREFILL: "mobilePrefill",
   UPI_ID_MOBILE: "UPIIdMobile",
   MOBILE_NUMBER_AGE: "mobileNumberAge",
   MOBILE_LOOKUP: "mobileLookup",
   PASSBOOK_WITHOUT_OTP_BY_UAN: "passbookWithoutOTPByUAN",
   EMPLOYMENT_HISTORY_BY_UAN: "employmentHistoryByUAN",
   GSTIN_TURNOVER_DETAILS: "GSTINTurnoverDetails",
   GSTIN_DETAILED: "GSTINDetailed",
   MCC_CODES_BY_GSTIN: "mccCodesByGstin",
   GSTIN_CONTACT_DETAILS: "GSTINContactDetails",
   VERIFY_UDYAM_ADVANCED: "verifyUdyamAdvanced",
   PAN_DETAILED: "PANDetailed",
   FATHER_NAME_BY_PAN: "fatherNameByPan",
   FETCH_COMPANY: "fetchCompany",
   UDYAM_LOOKUP: "udyamLookup",
   CIN_BY_PAN: "CINByPan",
   GSTIN_BY_PAN: "GSTINByPan",
   CONTACT_DETAILS_BY_DIN: "contactDetailsByDIN",
   UAN_BY_PAN: "UANByPan",
   VERIFY_EMPLOYER: "verifyEmployer",
   EPFO_PROFILE_DETAILS: "EPFOProfileDetails",
   DIGITAL_FOOTPRINT: "digitalFootprint",
   LPG_DETAILS_BY_MOBILE: "LPGDetailsByMobile",
   RC_LOOKUP_BY_MOBILE: "RCLookupByMobile",
   RC_DETAILED: "RCDetailed",
};

export const loadingStatusesInitialState = Object.values(APINameMapping).reduce(
   (acc, apiName) => ({ ...acc, [apiName]: true }),
   {}
);

export const useCases = [
   { key: "fullVerification", label: "Full Verification" },
   { key: "skipTracing", label: "Skip Tracing" },
   // { key: "collections", label: "Collections" },
   { key: "onboarding", label: "Onboarding" },
   { key: "underwriting", label: "Underwriting" },
];

//these products are required for xToDetails
export const productKeys = [
   "upi-id-fetch",
   "profile-mobile-prefill",
   "profile-address-lookup-by-mobile",
   "profile-fetch-mobile-number-age",
   "gstin-fetch-by-mobile",
   "gstin-fetch-by-pan",
   "mca-fetch-cin-by-pan",
   "msme-udyam-lookup",
   "epfo-fetch-employment-history-by-uan",
   "epfo-fetch-passbook-without-otp",
   "epfo-fetch-latest-employment-by-mobile",
   "gstin-fetch-detailed",
   "msme-udyam-reference-verify-advanced",
   "pan-fetch-detailed",
   "pan-fetch-father-name",
   "pan-itr-206-compliance-verify",
   "epfo-fetch-uan",
   "epfo-fetch-uan-by-pan",
   "mca-fetch-company-details",
   "mca-fetch-contact-details-by-din",
   "epfo-fetch-profile-details",
   "profile-fetch-digital-footprint",
   "profile-utility-fetch-lpg-details",
   "vehicle-rc-fetch-detailed",
   "vehicle-rc-lookup-by-mobile",
];

export const arrayResposeWRTAPIName = [
   APINameMapping.GSTIN_DETAILED,
   APINameMapping.VERIFY_UDYAM_ADVANCED,
   APINameMapping.FETCH_COMPANY,
   APINameMapping.CONTACT_DETAILS_BY_DIN,
   APINameMapping.EMPLOYMENT_HISTORY_BY_UAN,
   APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN,
   APINameMapping.VERIFY_EMPLOYER,
   APINameMapping.EPFO_PROFILE_DETAILS,
];

export const rateLimitErrorMessage =
   "You've reached the test API key rate limit. Only partial results are fetched. Please reach out to your sales owner or support.";

export const viewOptions = {
   INPUT: "input",
   SHOW_DETAILS: "showDetails",
   LOADING: "loading",
};

export const validationPatterns = {
   MOBILE: /^[6-9]\d{9}$/,
   PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
};

export const mobileValidationRules = [
   {
      pattern: validationPatterns.MOBILE,
      message: "Please enter a valid 10-digit mobile number starting with 6-9",
   },
];

export const panValidationRules = [
   {
      pattern: validationPatterns.PAN,
      message: "Please enter a valid PAN (e.g., ABCDE1234F)",
   },
];

export const responseInputInitialState = {
   mobile: "",
   pan: "",
   gstin: [],
   uan: [],
   udyam: [],
   cin: [],
   din: [],
   employerName: [],
   email: "",
   rc: "",
};

export const userInputInitialState = {
   mobile: "",
   pan: "",
};

export const consent =
   "The candidate provides consent to access and share her / his data, including but not limited to name, date of birth, gender, national identity, addresses, communication information like email and mobile, financial details, employment information, business information, social media and E-commerce information, etc. from various Government, public and private sources for the purpose of receiving products, services or benefits from the person or organization taking this consent.";

export const disclaimerText =
   "This information is fetched with the consent of the individual. The responsibility of ensuring consent and liability for any privacy non-compliance lies with the user processing this information. Please report any deviations to";

export const overviewInstructions = [
   "The following data fields are fetched from public, Government and third-party sources.",
   "Data fields shown are fetched using mobile number and/or PAN. Over 200+ APIs can additionally fetch information using other identifiers such as RC number, Udyam, GSTIN, CIN, and more.",
];

export const dataBreachDetailsInstruction =
   "This section highlights information found across public data breaches from various platforms.";

export const ecommerceDeliveryAddressesInstruction = "From limited sources; can be used for positive KYC confirmation.";

export const eCommerceDeliveryAddressesColumns = [
   {
      key: "detailed_address",
      title: <Text className="details-section-labels">Detailed Address</Text>,
      dataIndex: "detailed_address",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "city",
      title: <Text className="details-section-labels">City</Text>,
      dataIndex: "city",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "pincode",
      title: <Text className="details-section-labels">Pincode</Text>,
      dataIndex: "pincode",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "state",
      title: <Text className="details-section-labels">State</Text>,
      dataIndex: "state",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "last_delivery_date",
      title: <Text className="details-section-labels">Last Delivery Date</Text>,
      dataIndex: "last_delivery_date",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "last_activity_date",
      title: <Text className="details-section-labels">Last Activity Date</Text>,
      dataIndex: "last_activity_date",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
];

export const additionalAddressesColumns = [
   {
      key: "detailed_address",
      title: <Text className="details-section-labels">Detailed Address</Text>,
      dataIndex: "detailed_address",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "city",
      title: <Text className="details-section-labels">City</Text>,
      dataIndex: "city",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "pincode",
      title: <Text className="details-section-labels">Pincode</Text>,
      dataIndex: "pincode",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "state",
      title: <Text className="details-section-labels">State</Text>,
      dataIndex: "state",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
];

export const bankAccountDetailsColumns = [
   {
      key: "bankAccountNumber",
      title: <Text className="details-section-labels">Bank Account Number</Text>,
      dataIndex: "bankAccountNumber",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "ifscDetails",
      title: <Text className="details-section-labels">IFSC Details</Text>,
      dataIndex: "ifscDetails",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
];

export const rcPermitColumns = [
   {
      title: "Permit Number",
      dataIndex: "permit_number",
      key: "permit_number",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      title: "Issue Date",
      dataIndex: "issue_date",
      key: "issue_date",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      title: "Expiry Date",
      dataIndex: "expiry_date",
      key: "expiry_date",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
];

// Business Compliance Columns
export const gstinSummaryColumns = [
   {
      key: "GSTIN",
      title: <Text className="details-section-labels">GSTIN</Text>,
      dataIndex: "GSTIN",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "linkageWith",
      title: <Text className="details-section-labels">GSTIN linkage with</Text>,
      dataIndex: "linkageWith",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const additionalPlacesColumns = [
   {
      key: "sno",
      title: <Text className="details-section-labels">S.No</Text>,
      dataIndex: "sno",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "address",
      title: <Text className="details-section-labels">Address</Text>,
      dataIndex: "address",
      width: 300,
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "natureOfActivity",
      title: <Text className="details-section-labels">Nature of Business Activity</Text>,
      dataIndex: "natureOfActivity",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const filingHistoryColumns = [
   {
      key: "assessmentYear",
      title: <Text className="details-section-labels">Assessment Year</Text>,
      dataIndex: "assessmentYear",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "taxPeriod",
      title: <Text className="details-section-labels">Tax Period</Text>,
      dataIndex: "taxPeriod",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "dateOfFiling",
      title: <Text className="details-section-labels">Date of Filing</Text>,
      dataIndex: "dateOfFiling",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "modeOfFiling",
      title: <Text className="details-section-labels">Mode of Filing</Text>,
      dataIndex: "modeOfFiling",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "status",
      title: <Text className="details-section-labels">Status</Text>,
      dataIndex: "status",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const filingFrequencyColumns = [
   {
      key: "assessmentYear",
      title: <Text className="details-section-labels">Assessment Year</Text>,
      dataIndex: "assessmentYear",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "quarter",
      title: <Text className="details-section-labels">Quarter</Text>,
      dataIndex: "quarter",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "frequency",
      title: <Text className="details-section-labels">Frequency</Text>,
      dataIndex: "frequency",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const hsnDetailsColumns = [
   {
      key: "hsn",
      title: <Text className="details-section-labels">HSN</Text>,
      dataIndex: "hsn",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "description",
      title: <Text className="details-section-labels">Description</Text>,
      dataIndex: "description",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "value",
      title: <Text className="details-section-labels">Value</Text>,
      dataIndex: "value",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const enterpriseUnitsColumns = [
   {
      key: "name",
      title: <Text className="details-section-labels">Name</Text>,
      dataIndex: "name",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "fullAddress",
      title: <Text className="details-section-labels">Full Address</Text>,
      dataIndex: "fullAddress",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const nicDetailsColumns = [
   {
      key: "nic2Digit",
      title: <Text className="details-section-labels">NIC 2-Digit</Text>,
      dataIndex: "nic2Digit",
      width: 300,
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "nic4Digit",
      title: <Text className="details-section-labels">NIC 4-Digit</Text>,
      dataIndex: "nic4Digit",
      width: 300,
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "nic5Digit",
      title: <Text className="details-section-labels">NIC 5-Digit</Text>,
      dataIndex: "nic5Digit",
      width: 300,
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const udyamSummaryColumns = [
   {
      key: "udyam",
      title: <Text className="details-section-labels">Udyam</Text>,
      dataIndex: "udyam",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "linkageWith",
      title: <Text className="details-section-labels">UAN linkage with</Text>,
      dataIndex: "linkageWith",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const assetsUnderChargeColumns = [
   {
      key: "asset",
      title: <Text className="details-section-labels">Asset</Text>,
      dataIndex: "asset",
      width: 400,
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "amount",
      title: <Text className="details-section-labels">Amount</Text>,
      dataIndex: "amount",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "creationDate",
      title: <Text className="details-section-labels">Creation Date</Text>,
      dataIndex: "creationDate",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "modificationDate",
      title: <Text className="details-section-labels">Modification Date</Text>,
      dataIndex: "modificationDate",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "status",
      title: <Text className="details-section-labels">Status</Text>,
      dataIndex: "status",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const directorDetailsColumns = [
   {
      key: "directorName",
      title: <Text className="details-section-labels">Director Name</Text>,
      dataIndex: "directorName",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "DIN",
      title: <Text className="details-section-labels">DIN</Text>,
      dataIndex: "DIN",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "beginDate",
      title: <Text className="details-section-labels">Begin Date</Text>,
      dataIndex: "beginDate",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "email",
      title: <Text className="details-section-labels">Email</Text>,
      dataIndex: "email",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "mobile",
      title: <Text className="details-section-labels">Mobile</Text>,
      dataIndex: "mobile",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const breachDetailsColumns = [
   {
      key: "type",
      title: <Text className="details-section-labels">Identifier</Text>,
      dataIndex: "type",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "platform_name",
      title: <Text className="details-section-labels">Platform Name</Text>,
      dataIndex: "platform_name",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "data",
      title: <Text className="details-section-labels">Data</Text>,
      dataIndex: "data",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
];

export const componentsWRTMenuItemsKey = {
   "identity-contact": IdentityDetails,
   "national-ids": NationalIds,
   "digital-footprint": DigitalFootprint,
   employment: EmploymentInsights,
   "business-compliance": BusinessCompliance,
   "banking-financials": BankingFinancials,
   "asset-and-utility": AssetAndUtility,
   "telecom-intelligence": TelecomIntelligence,
};

export const menuItemsWRTAPIOutputKeys = {
   "identity-contact": [
      { outputKey: "personal_data", apiName: APINameMapping.MOBILE_PREFILL },
      { outputKey: "pan_data", apiName: APINameMapping.PAN_DETAILED },
      { outputKey: "address_data", apiName: APINameMapping.ADDRESS_LOOKUP_BY_MOBILE },
      { outputKey: "pan_data", apiName: APINameMapping.FATHER_NAME_BY_PAN },
   ],
   "national-ids": [
      { outputKey: "pan_data", apiName: APINameMapping.PAN_DETAILED },
      { outputKey: "personal_data", apiName: APINameMapping.MOBILE_PREFILL },
   ],
   "digital-footprint": [{ outputKey: "digital_profile_data", apiName: APINameMapping.DIGITAL_FOOTPRINT }],
   employment: [
      { outputKey: "uan_source", apiName: APINameMapping.FETCH_UAN },
      { outputKey: "uan_list", apiName: APINameMapping.UAN_BY_PAN },
      { outputKey: "employment_data", apiName: APINameMapping.EMPLOYMENT_HISTORY_BY_UAN },
      { outputKey: "passbook_data", apiName: APINameMapping.PASSBOOK_WITHOUT_OTP_BY_UAN },
      { outputKey: "establishment_data", apiName: APINameMapping.VERIFY_EMPLOYER },
   ],
   "business-compliance": [
      { outputKey: "gstin_data", apiName: APINameMapping.GSTIN_BY_MOBILE },
      { outputKey: "results", apiName: APINameMapping.GSTIN_BY_PAN },
      { outputKey: "gstin_data", apiName: APINameMapping.GSTIN_DETAILED },
      { outputKey: "udyam_source", apiName: APINameMapping.UDYAM_LOOKUP },
      { outputKey: "enterprise_data", apiName: APINameMapping.VERIFY_UDYAM_ADVANCED },
      { outputKey: "company_data", apiName: APINameMapping.FETCH_COMPANY },
      { outputKey: "contact_details", apiName: APINameMapping.CONTACT_DETAILS_BY_DIN },
   ],
   "banking-financials": [
      { outputKey: "upi_account_info", apiName: APINameMapping.UPI_ID_MOBILE },
      { outputKey: "uan_profile_data", apiName: APINameMapping.EPFO_PROFILE_FETAILS },
   ],
   "asset-and-utility": [
      { outputKey: "lpg_connection_data", apiName: APINameMapping.LPG_DETAILS_BY_MOBILE },
      { outputKey: "rc_data", apiName: APINameMapping.RC_DETAILED },
   ],
   "telecom-intelligence": [{ outputKey: "mobile_number_age_data", apiName: APINameMapping.MOBILE_NUMBER_AGE }],
};

export const udyamDteailsFields = [
   {
      key: "udyamCertificate",
      label: "Udyam Certificate",
      dataKey: "udyam_certificate_url",
      render: (value, udyam, onViewCertificate) => {
         if (value) {
            return (
               <Text className="tw-text-[#33CCCC] tw-cursor-pointer" onClick={() => onViewCertificate(udyam)}>
                  <LinkOutlined className="tw-mr-2" />
                  View
               </Text>
            );
         }
         return <Text className="details-section-values">-</Text>;
      },
   },
   { key: "majorActivity", label: "Major Activity", dataKey: "majorActivity" },
   { key: "enterpriseType", label: "Enterprise Type", dataKey: "enterpriseType" },
   { key: "name", label: "Name", dataKey: "name" },
   { key: "mobile", label: "Mobile", dataKey: "mobile" },
   { key: "organizationType", label: "Organization Type", dataKey: "organizationType" },
   { key: "ownerName", label: "Owner Name", dataKey: "ownerName" },
   { key: "fullAddress", label: "Full Address", dataKey: "fullAddress" },
   { key: "linkedPan", label: "Linked PAN", dataKey: "linkedPan" },
   { key: "dateOfUdyamRegistration", label: "Date of Udyam Registration", dataKey: "dateOfUdyamRegistration" },
   { key: "dic", label: "DIC", dataKey: "dic" },
   { key: "dateOfCommencement", label: "Date of Commencement", dataKey: "dateOfCommencement" },
   { key: "email", label: "Email", dataKey: "email" },
   { key: "msmeId", label: "MSME DI", dataKey: "msmeId" },
   { key: "socialCategory", label: "Social Category", dataKey: "socialCategory" },
   { key: "dateOfIncorporation", label: "Date of Incorporation", dataKey: "dateOfIncorporation" },
];

export const gstinDetailsFields = [
   {
      key: "status",
      label: "GSTIN Status",
      dataKey: "status",
      render: (value) => {
         const statusColor = value
            ? value === "Active"
               ? "tw-bg-green-teal"
               : "tw-bg-blood-burst"
            : "tw-bg-transparent";
         return (
            <span className="tw-flex tw-items-center">
               <span className={`tw-inline-block tw-w-2 tw-h-2 tw-rounded-full tw-mr-2 ${statusColor}`}></span>
               <Text className="details-section-values">{value || "-"}</Text>
            </span>
         );
      },
   },
   { key: "legalName", label: "Legal Name", dataKey: "legalName" },
   { key: "tradeName", label: "Trade Name", dataKey: "tradeName" },
   { key: "centerJurisdiction", label: "Center Jurisdiction", dataKey: "centerJurisdiction" },
   { key: "stateJurisdiction", label: "State Jurisdiction", dataKey: "stateJurisdiction" },
   { key: "constitutionOfBusiness", label: "Constitution of Business", dataKey: "constitutionOfBusiness" },
   { key: "taxpayerType", label: "Taxpayer Type", dataKey: "taxpayerType" },
   { key: "aadhaarVerified", label: "Aadhaar Verified", dataKey: "aadhaarVerified" },
   { key: "ekycVerified", label: "Ekyc Verified", dataKey: "ekycVerified" },
   { key: "fieldVisitConducted", label: "Field Visit Conducted", dataKey: "fieldVisitConducted" },
   { key: "dateOfRegistration", label: "Date of Registration", dataKey: "dateOfRegistration" },
   { key: "dateOfCancellation", label: "Date of Cancellation", dataKey: "dateOfCancellation" },
   { key: "percentTaxInCash", label: "Percent Tax in Cash", dataKey: "percentTaxInCash" },
   { key: "annualAggregateTurnover", label: "Annual Aggregate Turnover", dataKey: "annualAggregateTurnover" },
   {
      key: "annualAggregateTurnoverYear",
      label: "Annual Aggregate Turnover Year",
      dataKey: "annualAggregateTurnoverYear",
   },
   { key: "principalAddress", label: "Principal Address", dataKey: "principalAddress" },
   { key: "email", label: "Email", dataKey: "email" },
   { key: "mobile", label: "Mobile", dataKey: "mobile" },
   { key: "natureOfBusinessActivity", label: "Nature of Business Activity", dataKey: "natureOfBusinessActivity" },
];

export const cinDetailsFields = [
   {
      key: "companyStatus",
      label: "Company Status",
      dataKey: "companyStatus",
      render: (value) => {
         return (
            <span className="tw-flex tw-items-center">
               <span
                  className={`tw-inline-block tw-w-2 tw-h-2 tw-rounded-full tw-mr-2 ${
                     value === "Active" ? "tw-bg-green-teal" : "tw-bg-blood-burst"
                  }`}
               ></span>
               <Text className="details-section-values">{value || "-"}</Text>
            </span>
         );
      },
   },
   { key: "type", label: "Type", dataKey: "type" },
   { key: "companyName", label: "Company Name", dataKey: "companyName" },
   { key: "email", label: "Email", dataKey: "email" },
   { key: "registeredAddress", label: "Registered Address", dataKey: "registeredAddress" },
   { key: "alternateAddress", label: "Alternate Address", dataKey: "alternateAddress" },
   { key: "rocCode", label: "ROC Code", dataKey: "rocCode" },
   { key: "registrationNumber", label: "Registration Number", dataKey: "registrationNumber" },
   { key: "category", label: "Category", dataKey: "category" },
   { key: "subCategory", label: "Sub Category", dataKey: "subCategory" },
   { key: "class", label: "Class", dataKey: "class" },
   { key: "efilingStatus", label: "Efiling Status", dataKey: "efilingStatus" },
   { key: "listing", label: "Listing", dataKey: "listing" },
   { key: "dateOfIncorporation", label: "Date of Incorporation", dataKey: "dateOfIncorporation" },
   { key: "lastAGMDate", label: "Last AGM Date", dataKey: "lastAGMDate" },
   { key: "balanceSheetDate", label: "Balance Sheet Date", dataKey: "balanceSheetDate" },
   { key: "activeCompliance", label: "Active Compliance", dataKey: "activeCompliance" },
   { key: "noOfMembers", label: "No Of Members", dataKey: "noOfMembers" },
   { key: "suspendedAtStockExchange", label: "Suspended at Stock Exchange", dataKey: "suspendedAtStockExchange" },
   { key: "businessActivityDivisions", label: "Business Activity Divisions", dataKey: "businessActivityDivisions" },
   { key: "llpStatus", label: "LLP Status", dataKey: "llpStatus" },
   { key: "solvencyFiledDate", label: "Solvency Filed Date", dataKey: "solvencyFiledDate" },
   { key: "annualReturnFiledDate", label: "Annual Return Filed Date", dataKey: "annualReturnFiledDate" },
   { key: "paidUpCapital", label: "Paid up capital (₹)", dataKey: "paidUpCapital" },
   { key: "authorizedCapital", label: "Authorized capital", dataKey: "authorizedCapital" },
];

export const latestEmploymentColumns = [
   {
      key: "establishmentName",
      title: <Text className="details-section-labels">Establishment Name</Text>,
      dataIndex: "establishmentName",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "memberId",
      title: <Text className="details-section-labels">Member ID</Text>,
      dataIndex: "memberId",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "joiningDate",
      title: <Text className="details-section-labels">Joining Date</Text>,
      dataIndex: "joiningDate",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "exitDate",
      title: <Text className="details-section-labels">Exit Date</Text>,
      dataIndex: "exitDate",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const employmentHistoryColumns = latestEmploymentColumns;

export const getPassbookSummaryColumns = (handleViewPassbook) => [
   {
      key: "establishmentName",
      title: <Text className="details-section-labels">Establishment Name</Text>,
      dataIndex: "establishmentName",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "totalPensionShare",
      title: <Text className="details-section-labels">Total Pension share (₹)</Text>,
      dataIndex: "totalPensionShare",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "totalEmployerShare",
      title: <Text className="details-section-labels">Total Employer share (₹)</Text>,
      dataIndex: "totalEmployerShare",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "totalEmployeeShare",
      title: <Text className="details-section-labels">Total Employee share (₹)</Text>,
      dataIndex: "totalEmployeeShare",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "passbookEntries",
      title: <Text className="details-section-labels">Passbook Entries</Text>,
      dataIndex: "passbookEntries",
      render: (text, record) => (
         <Button
            type="link"
            size="small"
            className="tw-text-xs tw-text-cold-heights tw-p-0"
            onClick={() => handleViewPassbook(record)}
         >
            View
         </Button>
      ),
   },
];

export const getEmployerPFDetailsColumns = (handleViewPFDeposit) => [
   {
      key: "establishmentName",
      title: <Text className="details-section-labels">Establishment Name</Text>,
      dataIndex: "establishmentName",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "address",
      title: <Text className="details-section-labels">Establishment Address</Text>,
      dataIndex: "address",
      width: 300,
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "establishmentId",
      title: <Text className="details-section-labels">Establishment ID</Text>,
      dataIndex: "establishmentId",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "employerPFDeposit",
      title: <Text className="details-section-labels">Employer PF Deposit (last 3 months)</Text>,
      dataIndex: "employerPFDeposit",
      render: (text, record) => (
         <Button
            type="link"
            size="small"
            className="tw-text-xs tw-text-cold-heights tw-p-0"
            onClick={() => handleViewPFDeposit(record)}
         >
            View
         </Button>
      ),
   },
];

export const uanDetailsColumns = [
   {
      key: "uan",
      title: <Text className="details-section-labels">UAN</Text>,
      dataIndex: "uan",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
   {
      key: "uanLinkageWith",
      title: <Text className="details-section-labels">UAN Linkage with</Text>,
      dataIndex: "uanLinkageWith",
      render: (text) => <Text className="details-section-values">{text}</Text>,
   },
];

export const passbookDetailsColumns = [
   {
      title: <Text className="tw-text-white tw-font-medium">Status</Text>,
      dataIndex: "status",
      key: "status",
      render: (text) => <Text className="tw-text-white tw-text-xs">{text || "-"}</Text>,
   },
   {
      title: <Text className="tw-text-white tw-font-medium">Description</Text>,
      dataIndex: "description",
      key: "description",
      render: (text) => <Text className="tw-text-white tw-text-xs">{text || "-"}</Text>,
   },
   {
      title: <Text className="tw-text-white tw-font-medium">Employee share (₹)</Text>,
      dataIndex: "employee_share",
      key: "employee_share",
      render: (text) => <Text className="tw-text-white tw-text-xs">{text || "-"}</Text>,
   },
   {
      title: <Text className="tw-text-white tw-font-medium">Employer share (₹)</Text>,
      dataIndex: "employer_share",
      key: "employer_share",
      render: (text) => <Text className="tw-text-white tw-text-xs">{text || "-"}</Text>,
   },
   {
      title: <Text className="tw-text-white tw-font-medium">Pension share (₹)</Text>,
      dataIndex: "pension_share",
      key: "pension_share",
      render: (text) => <Text className="tw-text-white tw-text-xs">{text || "-"}</Text>,
   },
   {
      title: <Text className="tw-text-white tw-font-medium">Date of approval</Text>,
      dataIndex: "date_of_approval",
      key: "date_of_approval",
      render: (text) => <Text className="tw-text-white tw-text-xs">{text || "-"}</Text>,
   },
];

export const pfDepositColumns = [
   {
      key: "wage_month",
      title: <Text className="details-section-labels">Wage month</Text>,
      dataIndex: "wage_month",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "number_of_employees",
      title: <Text className="details-section-labels">Number of Employees</Text>,
      dataIndex: "number_of_employees",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
   {
      key: "pf_deposit_amount",
      title: <Text className="details-section-labels">PF Deposit Amount (₹)</Text>,
      dataIndex: "pf_deposit_amount",
      render: (text) => <Text className="details-section-values">{text || "-"}</Text>,
   },
];

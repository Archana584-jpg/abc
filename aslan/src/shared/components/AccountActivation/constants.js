import { Typography } from "antd";
import { gridlinesWebsiteUrl } from "../../../utils/config";
const { Link, Text } = Typography;

export const accountActivationFormSections = {
   CONTACT_DETAILS: "CONTACT_DETAILS",
   VERIFY_OTP: "VERIFY_OTP",
   BUSINESS_DETAILS: "BUSINESS_DETAILS",
};

export const accountActivationMenuItems = {
   contactDetails: { key: "contact_details", label: "Contact Details" },
   businessDetails: { key: "business_details", label: "Business Details" },
};

export const freshdeskTicketTags = {
   GSTIN_VALIDATED: "GSTIN Validated",
   PAN_VALIDATED: "PAN Validated",
};

export const userAgreementConsentString = (
   <Text>
      I agree to use Gridlines APIs only with informed consent of the data owners (users, customers, etc.) in my
      application, and in accordance with applicable laws, regulations,{" "}
      <Link href={`${gridlinesWebsiteUrl}/terms-of-service`} target="_blank">
         Terms of Use
      </Link>{" "}
      and{" "}
      <Link href={`${gridlinesWebsiteUrl}/privacy-policy`} target="_blank">
         Privacy Policy.
      </Link>
   </Text>
);

export const gstinExemptConsentString = (
   <Text style={{ fontSize: "0.75rem" }}>
      I declare that my business is not required to register under the GST Act 2017, and agree to share signed
      declaration of GST non-enrollment over mail at{" "}
      <Link href={"mailto:support@gridlines.io"} style={{ color: "#3D90CC" }}>
         support@gridlines.io
      </Link>
   </Text>
);

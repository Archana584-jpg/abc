import { productKeys } from "./constants";
import { Typography, Row, Col } from "antd";
const { Text, Title } = Typography;

export const transformAddressData = (data) => {
   if (data && data.length === 0) return [];
   return (data || []).map((address) => {
      // Find all keys that contain "line" and concatenate their values
      const lineKeys = Object.keys(address)
         .filter((key) => key.includes("line"))
         .sort();
      const detailed_address = lineKeys
         .map((key) => address[key])
         .filter((value) => value && value.trim() !== "") // Remove empty values
         .join(" ");

      return {
         detailed_address: detailed_address || "-",
         city: address.city || "-",
         pincode: address.pincode || "-",
         state: address.state || "-",
         last_delivery_date: address.last_delivery_date || "-",
      };
   });
};

export const nationalIdsTransform = (apiData, objectWRTSection) => {
   const transformedData = Object.entries(apiData).forEach(([key, value]) => {
      objectWRTSection[key].value = value[0].value;
   });

   return transformedData;
};

export const handleDataMaping = (data, existingData, setData) => {};

export const getProductIdsWRTKeys = (products) => {
   return (products || []).filter((item) => productKeys.includes(item.key)).map((item) => item.id);
};

// Get the first error message found (for display purposes)
export const getFirstErrorMessage = (verificationData) => {
   if (!verificationData || typeof verificationData !== "object") {
      return "";
   }

   for (const apiResponse of Object.values(verificationData)) {
      // Check if it's an array (for array-based APIs)
      if (Array.isArray(apiResponse)) {
         for (const item of apiResponse) {
            if (item?.error && item.error.trim() !== "") {
               return item.error;
            }
         }
      }
      // Check if it's a single response object
      if (apiResponse && typeof apiResponse === "object" && apiResponse.error && apiResponse.error.trim() !== "") {
         return apiResponse.error;
      }
   }
   return "";
};

export const renderAssetAndUtilityDetailSection = (title, details) => (
   <Row gutter={[24, 8]}>
      <Col span={24}>
         <Title className="card-section-title">{title}</Title>
      </Col>
      {Object.entries(details)
         .filter(([key]) => key !== "RCNumber")
         .map(([key, item]) => (
            <Col span={6} key={key}>
               <Text className="details-section-labels">{item.label}</Text>
               <br />
               <Text className="details-section-values">{item.value}</Text>
            </Col>
         ))}
   </Row>
);

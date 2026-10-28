import React from "react";
import { Form, Radio } from "antd";
import { CustomButton } from "../../../../shared/components";
import { bankAccountVerificationOfferingsType } from "../../constants";

const OfferingsCard = ({ navigateToSelectedOffering }) => {
   return (
      <Form onFinish={navigateToSelectedOffering}>
         <Form.Item
            name={"offering"}
            rules={[
               {
                  required: true,
                  message: "Please select offering type!",
               },
            ]}
            style={{ textAlign: "center" }}
         >
            <Radio.Group>
               {Object.values(bankAccountVerificationOfferingsType || {}).map((offering, offeringIndex) => (
                  <Radio key={offeringIndex} value={offering.key}>
                     {offering.label}
                  </Radio>
               ))}
            </Radio.Group>
         </Form.Item>

         <Form.Item style={{ textAlign: "end" }}>
            <CustomButton type="primary" htmlType="submit" title={"Next"} />
         </Form.Item>
      </Form>
   );
};

export default OfferingsCard;

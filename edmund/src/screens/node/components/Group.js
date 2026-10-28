import { Col } from "antd";
import React from "react";
import { renderComponent } from "../helper";
import { CustomButton } from "shared/components";

const Group = ({ data, applicationData }) => {
   return (
      <Col xs={data?.style?.col?.xs} md={data?.style?.col?.md} lg={data?.style?.col?.lg}>
         {renderComponent({ item: data, applicationData })}
         {data?.action ? (
            <Col lg={24} className="flex justify-center mt-12">
               <CustomButton
                  label={data?.action?.label?.text}
                  type="primary"
                  className={data?.action?.label?.className}
                  size={data?.action?.size}
               />
            </Col>
         ) : null}
      </Col>
   );
};

export default Group;

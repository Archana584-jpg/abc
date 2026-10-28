import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { redirectToExternalLink } from "../../../utils/helper";
import { CustomImage, CustomButton } from "../../";

const { Title, Text } = Typography;

const ProductTile = ({ product, className }) => {
   return (
      <Card className={className ? className : "tw-mb-7.5"} bodyStyle={{ padding: 0 }}>
         <Row gutter={[0, 0]}>
            <Col xs={{ span: 2, offset: 1 }}>
               {(product || {}).image_uri && (
                  <CustomImage
                     src={(product || {}).image_uri}
                     height={"3.75rem"}
                     width={"4.063rem"}
                     className="tw-mt-3.75 tw-object-contain tw-p-1.25 tw-bg-alice-blue"
                  />
               )}
            </Col>
            <Col xs={{ span: 21 }} className="tw-flex tw-flex-col">
               <div className="tw-flex tw-justify-between">
                  <div className="tw-flex tw-mt-3.75">
                     <Title className="tw-text-xl tw-font-semibold tw-mb-1.25 tw-leading-6.25">
                        {(product || {}).name}
                     </Title>
                  </div>
               </div>

               <div className="tw-flex tw-justify-between tw-mb-2.5 tw-items-center">
                  <div>
                     <Text className="tw-text-sm tw-text-ice-blue-grey">{(product || {}).description}</Text>
                  </div>
                  {(product || {}).docs_uri && (
                     <div>
                        <CustomButton
                           type={"link"}
                           label={"View docs"}
                           handleClick={() =>
                              (product || {}).docs_uri && redirectToExternalLink((product || {}).docs_uri, "_blank")
                           }
                           className="tw-bg-transparent tw-b-none"
                        />
                     </div>
                  )}
               </div>
            </Col>
         </Row>
      </Card>
   );
};

export default ProductTile;

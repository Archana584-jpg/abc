import React from "react";
import { Row, Col, Typography, Card, Tooltip } from "antd";
import { CustomButton, CustomImage } from "shared";
import { LeftOutlined, RightOutlined, LockFilled, WarningFilled } from "@ant-design/icons";
import "./style.css";
import { productStatusMapping, statusDescriptionMapping } from "screens/products/constants";

const { Text } = Typography;

const OverView = ({
   product,
   selectedOfferingIndex,
   handleChange,
   handleFreshdeskWidget,
   productStatusesById,
   handleRedirection,
}) => {
   const renderProductStatus = () => {
      const productStatusKey =
         productStatusesById[((product.offerings || [])[selectedOfferingIndex] || {}).product_status_id].key;
      const isUserAuthorized = ((product.offerings || [])[selectedOfferingIndex] || {}).authorized;

      let content;

      switch (productStatusKey) {
         case productStatusMapping.RESTRICTED:
            {
               content = isUserAuthorized ? null : (
                  <Col
                     className="tw-bg-primary tw-w-56 tw-h-11 tw-self-end tw-py-3 tw-px-1 tw-cursor-pointer approval-button tw-rounded-sm"
                     onClick={() => handleFreshdeskWidget()}
                  >
                     <Row className="tw-justify-self-center">
                        <Col xs={{ span: 3 }} className="tw-flex tw-justify-center">
                           <LockFilled className="tw-text-xl tw-text-white" />
                        </Col>
                        <Col xs={{ span: 20 }} className="tw-flex tw-justify-center">
                           <Text className="tw-text-sm tw-text-white">Request for Test Access</Text>
                        </Col>
                     </Row>
                  </Col>
               );
            }
            break;

         case productStatusMapping.DEPRECATED:
            content = (
               <Tooltip
                  title={<Text className="tw-text-xxs">{statusDescriptionMapping.DEPRECATED}</Text>}
                  color="white"
               >
                  <Col className="tw-w-36 tw-h-11 tw-self-end tw-py-3 tw-px-2 tw-cursor-default deprecated-col tw-rounded-sm">
                     <Row>
                        <Col xs={{ span: 3 }}>
                           <WarningFilled className="tw-text-xl tw-text-white" />
                        </Col>
                        <Col xs={{ span: 16, offset: 3 }}>
                           <Text className="tw-text-sm tw-text-white">Deprecated</Text>
                        </Col>
                     </Row>
                  </Col>
               </Tooltip>
            );
            break;

         default:
            content = (
               <Col className="tw-self-end">
                  <CustomButton
                     label="Try it out"
                     size="large"
                     type="primary"
                     className="try-it-out-button tw-rounded-2xl"
                     icon={<RightOutlined className="tw-float-right tw-mt-1 tw-ml-2 tw-stroke-2" />}
                     handleClick={() => {
                        handleRedirection(
                           `/sandbox/${product.id}/${((product.offerings || [])[selectedOfferingIndex] || {}).key}`
                        );
                     }}
                  />
               </Col>
            );
      }

      return content;
   };
   return (
      <Row gutter={[8, 8]}>
         <Col xs={{ span: 10 }}>
            <div className="productDescription" dangerouslySetInnerHTML={{ __html: (product || {}).overview }} />
         </Col>
         {((product || {}).offerings || []).length > 0 && (
            <>
               <Col xs={{ span: 24 }}>
                  <Text
                     style={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        lineHeight: "1.125rem",
                     }}
                  >
                     Offerings
                  </Text>
               </Col>

               <Col xs={{ span: 24 }}>
                  <Row>
                     <Col lg={{ span: 9 }} xs={{ span: 24 }}>
                        {product.offerings.map((item, index) => (
                           <Row key={index}>
                              <Col xs={{ span: 22 }}>
                                 <CustomButton
                                    size="large"
                                    className={
                                       selectedOfferingIndex === index ? "selectedOfferingButtton" : "offeringsButton"
                                    }
                                    label={item.name || ""}
                                    handleClick={() => handleChange("selectedOfferingIndex", index)}
                                    icon={
                                       selectedOfferingIndex === index ? (
                                          <LeftOutlined className="offeringButtonIcon" />
                                       ) : (
                                          <RightOutlined className="offeringButtonIcon" />
                                       )
                                    }
                                 />
                              </Col>
                              {selectedOfferingIndex === index && (
                                 <Col lg={{ span: 1, offset: 1 }} xs={{ span: 0 }}>
                                    <div className="offeringCardLeftArrow"></div>
                                 </Col>
                              )}
                           </Row>
                        ))}
                     </Col>
                     <Col lg={{ span: 14, pull: 0 }} xs={{ span: 24 }}>
                        <Card
                           style={{
                              borderColor: "white",
                              minHeight: "15rem",
                              margin: "0.5rem 0 2.438rem 1rem",
                              marginTop: selectedOfferingIndex > 3 && `${(selectedOfferingIndex - 3) * 11}%`,
                           }}
                        >
                           <Row>
                              <Col lg={{ span: 24 }} style={{ marginBottom: "1rem" }}>
                                 <CustomImage
                                    src={((product.offerings || [])[selectedOfferingIndex] || {}).image_uri}
                                 />
                              </Col>
                           </Row>

                           <Row justify="space-between">
                              {((product.offerings || [])[selectedOfferingIndex] || {}).price && (
                                 <Col
                                    lg={{ span: 5 }}
                                    style={{
                                       background: "#E6F2F2",
                                       padding: "0.2rem",
                                       marginLeft: "0.6rem",
                                    }}
                                 >
                                    <Row style={{ width: "100%" }}>
                                       <Col xs={{ span: 3, offset: 3 }} style={{ paddingTop: "1.2rem" }}>
                                          <Text
                                             style={{
                                                color: "#33CCCC",
                                                fontSize: "0.875rem",
                                                fontWeight: 600,
                                             }}
                                          >
                                             ₹
                                          </Text>
                                       </Col>
                                       <Col
                                          xs={{ span: 15, offset: 1 }}
                                          style={{
                                             fontSize: "1.813rem",
                                             fontWeight: 600,
                                          }}
                                       >
                                          {(product.offerings[selectedOfferingIndex] || {}).price}
                                       </Col>
                                       <Col xs={{ span: 21, offset: 3 }} style={{ paddingBottom: "0.5rem" }}>
                                          <Text style={{ fontSize: "0.688rem", fontWeight: 600 }}>
                                             per verification
                                          </Text>
                                       </Col>
                                    </Row>
                                 </Col>
                              )}
                              {renderProductStatus()}
                           </Row>
                        </Card>
                     </Col>
                  </Row>
               </Col>
            </>
         )}
      </Row>
   );
};

export default OverView;

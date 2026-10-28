import React from "react";
import { Col, Row, Typography, Card, Space } from "antd";
import { CustomButton, CustomImage } from "../../../shared";
import styles from "./style.module.css";
import { talkToSalesIcon1, talkToSalesIcon2 } from "../../../assets/images";
import { IOfferingCardProps } from "../interfaces";

const { Text } = Typography;

const OfferingCard = ({
   product,
   selectedOfferingIndex,
   salesIconVisibility,
   handleChangeSalesIconVisibility,
   handleChangeRedirect,
   productOfferings,
   isMobileScreen,
}: IOfferingCardProps) => {
   return (
      <Card
         style={
            isMobileScreen
               ? { border: "none" }
               : {
                    minHeight: "20rem",
                    borderColor: "white",
                    margin: "0.5rem 0 2.438rem 0.6rem",
                    marginTop: selectedOfferingIndex - 1 > 3 ? `${(selectedOfferingIndex - 4) * 11}%` : undefined,
                 }
         }
         bodyStyle={isMobileScreen ? { padding: 0 } : {}}
      >
         <Row>
            <Col span={24} style={{ marginBottom: isMobileScreen ? "1.25rem" : "1rem", lineHeight: 0 }}>
               <CustomImage
                  src={(productOfferings[selectedOfferingIndex - 1] || {}).image_uri}
                  className={"max-w-full h-auto"}
                  width={1419}
                  height={594}
                  alt=""
               />
            </Col>
         </Row>
         <Row style={{ display: "flex", justifyContent: "space-between" }}>
            {(((product || {}).offerings || [])[selectedOfferingIndex - 1] || {}).price && (
               <Col
                  lg={{ span: 5 }}
                  xs={{ span: 6 }}
                  style={{
                     background: "#E6F2F2",
                     padding: "0.2rem",
                     marginLeft: "0.6rem",
                  }}
               >
                  <Row>
                     <Col
                        xs={{ span: 5 }}
                        lg={{ span: 6 }}
                        style={{
                           paddingTop: isMobileScreen ? "0.5rem" : "1.5rem",
                           paddingLeft: isMobileScreen ? "0.6rem" : "1rem",
                        }}
                     >
                        <Text
                           style={{
                              color: "#33CCCC",
                              fontSize: isMobileScreen ? "0.7rem" : "1.25rem",
                              fontWeight: 600,
                           }}
                        >
                           ₹
                        </Text>
                     </Col>
                     <Col
                        lg={{ span: 18, offset: 0 }}
                        xs={{ span: 17, offset: 2 }}
                        style={{
                           fontSize: isMobileScreen ? "1.313rem" : "2.563rem",
                           fontWeight: "500",
                        }}
                     >
                        {((product.offerings || [])[selectedOfferingIndex - 1] || {}).price}
                     </Col>
                     <Col
                        xs={{ span: 24 }}
                        style={{
                           paddingLeft: isMobileScreen ? "0.5rem" : "1rem",
                           paddingBottom: "0.5rem",
                           lineHeight: isMobileScreen ? 0.6 : undefined,
                        }}
                     >
                        <Text
                           style={{
                              fontSize: isMobileScreen ? "0.5rem" : "1rem",
                              fontWeight: "500",
                           }}
                        >
                           per verification
                        </Text>
                     </Col>
                  </Row>
               </Col>
            )}
            <Col lg={{ span: 13 }} xs={{ span: 15 }} style={{ alignSelf: "end" }}>
               <CustomButton
                  className={styles.talkToSalesButton}
                  type="link"
                  size="large"
                  handleClick={() => handleChangeRedirect("/demo")}
                  handleChangeMouseOver={() => handleChangeSalesIconVisibility && handleChangeSalesIconVisibility(true)}
                  handleChangeMouseOut={() => handleChangeSalesIconVisibility && handleChangeSalesIconVisibility(false)}
                  style={{
                     fontSize: isMobileScreen ? "0.5rem" : "1rem",
                     fontWeight: 500,
                     width: "100%",
                  }}
                  label={
                     <Space align={"start"}>
                        {salesIconVisibility ? (
                           <CustomImage
                              src={talkToSalesIcon2}
                              className={!isMobileScreen ? "max-w-full h-auto" : "w-5 h-4"}
                              width={26}
                              height={23}
                           />
                        ) : (
                           <CustomImage
                              src={talkToSalesIcon1}
                              className={!isMobileScreen ? "max-w-full h-auto" : "w-5 h-4"}
                              width={26}
                              height={23}
                           />
                        )}
                        {"Talk to sales for growth friendly pricing"}
                     </Space>
                  }
               />
            </Col>
         </Row>
      </Card>
   );
};

export default OfferingCard;

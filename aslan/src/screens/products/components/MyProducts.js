import React from "react";
import { Row, Col, Typography, Tag } from "antd";
import { CustomCard, CustomImage, CustomAutoComplete } from "shared";
import { SearchOutlined } from "@ant-design/icons";
import { tabsMapping } from "screens/dashboardAndLogs/constants";
import "./style.css";

const { Text, Title } = Typography;

const MyProducts = ({
   products,
   navigateTo,
   parentPathname,
   handleChange,
   autoCompleteOptions,
   loading,
   searchedProduct,
}) => {
   return (
      <>
         <Row gutter={[0, 0]} className="tw-mb-2.5">
            <Col xs={{ span: 22 }}>
               <Text className="tw-text-sm tw-text-ice-blue-grey tw-mb-5">
                  Select a product to view real-time API usage
               </Text>
            </Col>
         </Row>
         <Row gutter={[0, 0]} className="tw-mb-7.5">
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
               <CustomAutoComplete
                  prefix={<SearchOutlined className="tw-text-base tw-text-ice-blue-grey tw-leading-3" />}
                  placeholder={"Search products here"}
                  inputClassName="tw-h-11.25"
                  className="tw-w-full"
                  onSearch={(value) => handleChange("searchedProduct", value)}
                  options={autoCompleteOptions}
                  loading={loading}
                  value={searchedProduct}
                  onSelect={(productId) => navigateTo(`/${parentPathname}/${productId}`)}
               />
            </Col>
         </Row>
         <Row gutter={[8, 8]}>
            <Col xs={{ span: 22 }} className="tw-flex tw-flex-row tw-flex-wrap">
               {(products || []).map((item, index) => {
                  return (
                     <CustomCard
                        key={index}
                        className="tw-p-0 tw-mb-2 tw-shadow-none"
                        bodyStyle={{ padding: 10, minHeight: "5.15rem" }}
                     >
                        <Row gutter={[16, 0]} className="tw-p-0">
                           <Col key={index} lg={{ span: 10 }}>
                              <Row gutter={[8, 0]}>
                                 <Col lg={{ span: 2 }} className="product-logo-background">
                                    <CustomImage src={item.image_uri} className="product-logo" />
                                 </Col>
                                 <Col lg={{ span: 21 }} className="product-description-col">
                                    <Title className="product-title">{item.name}</Title>
                                    <Text className="product-description">{item.description}</Text>
                                 </Col>
                              </Row>
                           </Col>
                           <Col lg={{ span: 2 }}>
                              <Text className="tw-text-xs">Offerings</Text>
                           </Col>
                           <Col className="tw-p-1" lg={{ span: 12 }}>
                              {((item || {}).offerings || []).map((offering, index) => {
                                 return (
                                    <Tag
                                       className="tw-mb-2 product-tag"
                                       onClick={() =>
                                          navigateTo(`/dashboard-logs/${tabsMapping.DASHBOARD}/${offering.id}`)
                                       }
                                       key={index}
                                    >
                                       {offering.name}
                                    </Tag>
                                 );
                              })}
                           </Col>
                        </Row>
                     </CustomCard>
                  );
               })}
            </Col>
         </Row>
      </>
   );
};

export default MyProducts;

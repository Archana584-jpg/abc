import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomAutoComplete, ProductMenu } from "../../../shared";
import { SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

const AllProducts = ({ navigateTo, handleChange, autoCompleteOptions, loading, searchedProduct, parentPathname }) => {
   return (
      <>
         <Row gutter={[0, 0]} className="tw-mb-2.5">
            <Col xs={{ span: 24 }}>
               <Text className="tw-text-sm tw-text-ice-blue-grey tw-mb-5">
                  Validate user information instantly with Gridlines products
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
         <ProductMenu />
      </>
   );
};

export default AllProducts;

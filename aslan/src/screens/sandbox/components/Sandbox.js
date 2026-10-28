import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomAutoComplete, ProductMenu } from "shared";
import { SearchOutlined } from "@ant-design/icons";
import { activeDemoProducts } from "screens/sandbox/constants";
const { Text } = Typography;

const SandboxComponent = ({
   navigateTo,
   handleChange,
   autoCompleteOptions,
   loading,
   searchedProduct,
   parentPathname,
}) => {
   return (
      <>
         <Row className="tw-mb-7.5">
            <Col lg={{ span: 16 }}>
               <Text className="tw-text-lg tw-font-semibold">Select a product to start testing</Text>
            </Col>
            <Col lg={{ span: 8 }}>
               <CustomAutoComplete
                  prefix={<SearchOutlined className="tw-text-base tw-text-ice-blue-grey tw-leading-3" />}
                  placeholder={"Search products here"}
                  inputClassName="tw-h-11.25"
                  className="tw-w-full"
                  onSearch={(value) => handleChange("searchedProduct", value)}
                  options={autoCompleteOptions.filter((item) => activeDemoProducts[item.key])}
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

export default SandboxComponent;

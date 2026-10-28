import React from "react";
import { Row, Col, Breadcrumb, Typography, Tabs, Card } from "antd";
import { CustomDropdown, ProductTile, CustomForm, CustomButton } from "shared";
import { offeringsSchema } from "screens/sandbox/templates/forms";
import { isEmpty } from "lodash";
import { formatDropdownOptions } from "utils/helper";
import { displayComponents } from "screens/sandbox/constants";
import { Output } from "screens/sandbox/containers";
import { customUIRenderingWRTProductOffering } from "screens/sandbox/templates/constants";
const { Text } = Typography;
const { TabPane } = Tabs;

const ProductComponent = ({
   product,
   navigateTo,
   selectedOfferingTab,
   handleChange,
   credentials,
   currentStep,
   handleSubmit,
   selectedCredentialId,
   handleCredentialSelection,
   result,
   verificationForm,
   initialFormData,
   handleFormChange,
   formRef,
}) => {
   const productKey = (product || {}).key;
   const CustomUIOutput = (customUIRenderingWRTProductOffering[productKey] || {})[selectedOfferingTab];
   return (
      <Row gutter={[8, 8]}>
         <Col xs={{ span: 24 }} className="tw-mb-5">
            <Breadcrumb separator=">">
               <Breadcrumb.Item onClick={() => navigateTo("/sandbox")} className="tw-cursor-pointer">
                  Sandbox
               </Breadcrumb.Item>
               <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
            </Breadcrumb>
         </Col>
         <Col xs={{ span: 24 }}>
            <ProductTile product={product} className="tw-mb-3.5" />
         </Col>
         <Col xs={{ span: 9 }}>
            <Text className="tw-text-sm tw-font-medium">Select API key</Text>
            <CustomDropdown
               options={formatDropdownOptions(credentials)}
               size="large"
               className="tw-mt-2.5"
               placeholder="Select API key"
               onChange={(id) => handleCredentialSelection(id)}
               value={selectedCredentialId}
               status={!selectedCredentialId ? "error" : ""}
               disabled={!selectedCredentialId}
            />
         </Col>
         {!selectedCredentialId ? (
            <Col xs={{ span: 24 }}>
               <Text className="tw-text-ice-blue-grey tw-text-xs">
                  Please add the product to your credentials from the 'Credentials' screen to proceed with testing.
               </Text>
            </Col>
         ) : null}
         <Col xs={{ span: 24 }}>
            <Tabs
               tabBarGutter={60}
               activeKey={selectedOfferingTab}
               onChange={(key) => handleChange("selectedOfferingTab", key)}
               className="tw-mb-0"
               animated={true}
            >
               {((product || {}).offerings || []).map((item) => (
                  <TabPane
                     disabled={!(offeringsSchema[productKey] || {})[item.key] || !(item || {}).authorized}
                     key={item.key}
                     tab={item.name}
                  />
               ))}
            </Tabs>
            {verificationForm ? (
               <Row>
                  <Col xs={{ span: 24 }}>
                     <Card className="tw-w-full">
                        <Row justify="space-between">
                           <Col lg={{ span: 14 }}>
                              <CustomForm
                                 formFieldItems={verificationForm}
                                 onSubmit={handleSubmit}
                                 initialValues={{ ...initialFormData, consent: true, productId: (product || {}).id }}
                                 handleChange={handleFormChange}
                                 formRef={formRef}
                              />
                           </Col>
                           <Col lg={{ span: 6 }}>
                              <CustomButton
                                 label="View input"
                                 type="link"
                                 className="tw-font-medium tw-bg-transparent tw-b-none"
                                 disabled={currentStep === "INITIAL_FORM"}
                                 handleClick={() =>
                                    handleChange("selectedComponentSection", displayComponents.USER_INPUT)
                                 }
                              />
                              <CustomButton
                                 label="View sample"
                                 type="link"
                                 className="tw-font-medium tw-bg-transparent tw-b-none"
                                 handleClick={() =>
                                    handleChange("selectedComponentSection", displayComponents.SAMPLE_OUTPUT)
                                 }
                              />
                           </Col>
                        </Row>
                     </Card>
                  </Col>
               </Row>
            ) : null}
            <Row>
               <Col xs={{ span: 24 }}>
                  {!isEmpty(result) ? (
                     CustomUIOutput ? (
                        <CustomUIOutput
                           //Here, we pass the product object because we need the offering name for the download JSON option.
                           product={product}
                        />
                     ) : (
                        <Output
                           data={result}
                           productKey={productKey}
                           offeringKey={selectedOfferingTab}
                           //Here, we pass the product object because we need the offering name for the download JSON option.
                           product={product}
                        />
                     )
                  ) : null}
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default ProductComponent;

import React from "react";
import { Col, Collapse, Row, Space, Typography } from "antd";
import { CustomButton, CustomImage, SalesSection } from "../../../shared";
import { RightOutlined, LeftOutlined, DownOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
import { portalUrl } from "../../../utils/config";
import { redirectToNewTabExternalLink, redirectToPortalOnMobileWarning } from "../../../utils/helper";
import { OfferingCard, ProductOfferingsExpansion } from ".";
import { IProductOfferings } from "@/shared/interfaces";
import { IProductProps } from "../interfaces";
import { uspOverviewImage } from "@/assets/images";

const { Title, Text } = Typography;

const Product = ({
   product,
   selectedOfferingIndex,
   handleSelectedOfferingIndex,
   salesIconVisibility,
   handleChangeSalesIconVisibility,
   handleChangeRedirect,
   isMobileScreen,
   productContent,
}: IProductProps) => {
   const productOfferings: Array<IProductOfferings> = (product || {}).offerings || [];
   return (
      <>
         <Row className={`bg-[#EDF5F6] ${isMobileScreen ? "pb-8" : "pb-24"}`}>
            <Col
               lg={{ span: 10, offset: 0 }}
               xs={{ span: 22, offset: 1 }}
               className={`${isMobileScreen ? "pl-0 pt-8" : "pl-20 pt-32"}`}
            >
               <Title
                  className={`${styles.title} ${
                     isMobileScreen ? "text-xl leading-6" : "text-[2.188rem] leading-[3.75rem]"
                  } mt-0`}
               >
                  {(product || {}).name}
               </Title>

               <div
                  className={isMobileScreen ? styles.offeringDescriptionTextMobileView : styles.offeringDescriptionText}
                  dangerouslySetInnerHTML={{ __html: (product || {}).overview }}
               />

               <Row className="mt-[2.813rem]">
                  <Space size={26}>
                     <Col xs={{ span: 10 }} lg={{ span: 5 }}>
                        <CustomButton
                           label="Get API Keys"
                           type="primary"
                           size="large"
                           className={styles.getAPIKeysButton}
                           handleClick={() =>
                              isMobileScreen
                                 ? redirectToPortalOnMobileWarning()
                                 : redirectToNewTabExternalLink(`${portalUrl}/signUp`)
                           }
                        />
                     </Col>
                     <Col xs={{ span: 12 }} lg={{ span: 5 }}>
                        <CustomButton
                           label="Talk to sales"
                           type="ghost"
                           size="large"
                           className={styles.salesButton}
                           handleClick={() => handleChangeRedirect("/demo")}
                        />
                     </Col>
                  </Space>
               </Row>
            </Col>
            <Col lg={{ span: 10, offset: 1 }} xs={{ span: 24 }} className={`${isMobileScreen ? "pt-8" : "pt-24"}`}>
               <CustomImage
                  src={(product || {}).overview_illustration_uri}
                  width={600}
                  height={484}
                  className={"max-w-full h-auto"}
               />
            </Col>
         </Row>

         {productContent.USP_CARDS ? (
            <Row className={`bg-[#F9FBFD] ${isMobileScreen ? "py-12" : "py-24"}`}>
               <Col lg={{ span: 17, offset: 0 }} className={`${!isMobileScreen ? "pl-20 z-50" : ""}`}>
                  <Row gutter={[0, { lg: 35, xs: 30 }]}>
                     <Col xs={{ span: 24 }}>
                        <Text className={isMobileScreen ? "text-2xl font-bold flex justify-center" : styles.title}>
                           Key Features
                        </Text>
                     </Col>
                     <Col lg={{ span: 24, offset: 0 }} xs={{ span: 22, offset: 1 }}>
                        <Row gutter={[0, 15]}>
                           {productContent.USP_CARDS.map(
                              (item: { title: string; description: string }, index: number) => (
                                 <Col xs={{ span: 24 }} key={index}>
                                    <Row className="p-4 bg-[#FFFFFF] shadow-md rounded">
                                       <Col xs={{ span: 2 }} className="content-center">
                                          <Text
                                             className={`text-5xl flex font-bold text-[#D6EBEB] ${
                                                isMobileScreen ? "" : "justify-center"
                                             }`}
                                          >
                                             {index + 1}
                                          </Text>
                                       </Col>
                                       <Col xs={{ span: 22 }} className={isMobileScreen ? "pl-4" : ""}>
                                          <Row gutter={[0, 5]}>
                                             <Col xs={{ span: 24 }}>
                                                <Text
                                                   className={`${isMobileScreen ? "text-lg" : "text-xl"} font-semibold`}
                                                >
                                                   {item.title}
                                                </Text>
                                             </Col>
                                             <Col xs={{ span: 24 }}>
                                                <Text
                                                   className={`${
                                                      isMobileScreen ? "text-sm" : "text-base"
                                                   } text-[#717988]`}
                                                >
                                                   {item.description}
                                                </Text>
                                             </Col>
                                          </Row>
                                       </Col>
                                    </Row>
                                 </Col>
                              )
                           )}
                        </Row>
                     </Col>
                  </Row>
               </Col>

               <Col lg={{ span: 6 }}>
                  <CustomImage src={uspOverviewImage} />
               </Col>
            </Row>
         ) : null}

         {productOfferings.length > 0 && (
            <Row className="bg-[#EAF7F7]">
               <Col
                  span={24}
                  lg={{ span: 24, offset: 0 }}
                  xs={{ span: 22, offset: 1 }}
                  className={`${
                     isMobileScreen ? "text-xl mt-12 mb-4" : "text-[2.188rem] h-16 mt-[3.125rem] pl-20 mb-6"
                  } font-semibold`}
               >
                  Our Offerings
                  <CustomButton
                     label="Get API Keys"
                     type="primary"
                     size="large"
                     className={`${isMobileScreen ? "ml-8 text-[0.813rem]" : "ml-24"}`}
                     handleClick={() =>
                        isMobileScreen
                           ? redirectToPortalOnMobileWarning()
                           : redirectToNewTabExternalLink(`${portalUrl}/signUp`)
                     }
                  />
               </Col>
               {isMobileScreen ? (
                  <Col xs={{ span: 22, offset: 1 }} className="mb-4">
                     <ProductOfferingsExpansion
                        product={product}
                        selectedOfferingIndex={selectedOfferingIndex}
                        handleSelectedOfferingIndex={handleSelectedOfferingIndex}
                        productOfferings={productOfferings}
                        handleChangeRedirect={handleChangeRedirect}
                        isMobileScreen={isMobileScreen}
                     />
                  </Col>
               ) : (
                  <Row className={`${styles.desktopScreen} w-full`}>
                     <Col lg={{ span: 9 }} className="min-h-120 pl-20">
                        {productOfferings.map((item: any, index: any) => (
                           <Row key={index + 1} className="flex justify-between">
                              <Col lg={{ span: 22 }}>
                                 <CustomButton
                                    key={index + 1}
                                    size="large"
                                    className={`${styles.offeringsSelection} ${
                                       selectedOfferingIndex === index + 1 ? styles.selectedButtonstyle : ""
                                    } ${styles.buttonStyle}`}
                                    label={
                                       <Space className="justify-between w-full">
                                          {item.name || item.title}
                                          {selectedOfferingIndex === index + 1 ? (
                                             <LeftOutlined className={styles.offeringButtonIcon} />
                                          ) : (
                                             <RightOutlined className={styles.offeringButtonIcon} />
                                          )}
                                       </Space>
                                    }
                                    handleClick={() => handleSelectedOfferingIndex(index + 1)}
                                 />
                              </Col>
                              {selectedOfferingIndex === index + 1 && (
                                 <Col lg={{ span: 1 }}>
                                    <div className={styles.arrowIcon}></div>
                                 </Col>
                              )}
                           </Row>
                        ))}
                     </Col>
                     <Col lg={{ span: 13 }} xs={{ span: 23 }}>
                        <OfferingCard
                           product={product}
                           productOfferings={productOfferings}
                           selectedOfferingIndex={selectedOfferingIndex}
                           salesIconVisibility={salesIconVisibility}
                           handleChangeSalesIconVisibility={handleChangeSalesIconVisibility}
                           handleChangeRedirect={handleChangeRedirect}
                        />
                     </Col>
                  </Row>
               )}
            </Row>
         )}

         {productContent.WHY_GRIDLINES ? (
            <Row className={`bg-[#F9FBFD] ${isMobileScreen ? "px-8 py-8" : "px-20 py-16"}`}>
               <Col
                  className={`bg-[#FFFFFF] ${isMobileScreen ? "pt-8 px-4" : "pt-12 px-7"} rounded-xl`}
                  lg={{ span: 24 }}
               >
                  <Row gutter={[0, { lg: 56, xs: 35 }]}>
                     <Col lg={{ span: 24 }}>
                        <Text className={`${isMobileScreen ? "text-2xl" : "text-4xl"} font-semibold`}>
                           Why Gridlines
                        </Text>
                     </Col>

                     <Col lg={{ span: 24 }}>
                        <Row gutter={[0, 10]}>
                           <Col lg={{ span: 14 }} className={isMobileScreen ? "" : "pb-12"}>
                              <Row gutter={[0, 30]}>
                                 {productContent.WHY_GRIDLINES.map(
                                    (item: { title: string; description: string }, index: number) => (
                                       <Col lg={{ span: 24 }} key={index}>
                                          <Row gutter={[0, 10]}>
                                             <Col xs={{ span: 24 }}>
                                                <Text className="text-lg font-semibold">{item.title}</Text>
                                             </Col>
                                             <Col xs={{ span: 24 }}>
                                                <Text className="text-[#595959] text-base">{item.description}</Text>
                                             </Col>
                                          </Row>
                                       </Col>
                                    )
                                 )}
                              </Row>
                           </Col>
                           {productContent.WHY_GRIDLINES_ILLUSTRATION ? (
                              <Col lg={{ span: 10 }}>
                                 <CustomImage
                                    src={productContent.WHY_GRIDLINES_ILLUSTRATION}
                                    width={443}
                                    height={496}
                                    className="max-w-full h-auto"
                                 />
                              </Col>
                           ) : null}
                        </Row>
                     </Col>
                  </Row>
               </Col>
            </Row>
         ) : null}

         <Row className="bg-[#FFFFFF]">
            <Col
               lg={{ span: 11, offset: 0 }}
               xs={{ span: 22, offset: 1 }}
               className={`${isMobileScreen ? "pt-8" : "pl-20 pt-40"}`}
            >
               <Row>
                  <Col span={24}>
                     <Title className={`${styles.title} ${isMobileScreen ? "text-xl font-bold" : ""}`}>
                        Easy to Use APIs with extensive documentation
                     </Title>
                  </Col>
                  {(product || {}).docs_uri && (
                     <Col xs={{ span: 24 }}>
                        <CustomButton
                           className={`${styles.viewApiButton} ${
                              isMobileScreen ? "text-[0.813rem] " : "text-lg"
                           } mt-[0.35rem] font-medium p-0 text-[#3D90CC]`}
                           label="View API Docs"
                           type="link"
                           hoverableIcon={<RightOutlined className={styles.hoverableRightIcon} />}
                           handleClick={() =>
                              (product || {}).docs_uri && redirectToNewTabExternalLink((product || {}).docs_uri)
                           }
                        />
                     </Col>
                  )}
               </Row>
            </Col>
            {productContent.PRODUCT_INTEGRATION_CODE && (
               <Col lg={{ span: 11 }} xs={{ span: 22 }} className={`${isMobileScreen ? "p-0" : "p-8"}`}>
                  <Row>
                     <Col span={22} className="bg-[#2E3A4E] min-h-[19.375rem] m-8 p-[1.938rem]">
                        <div
                           dangerouslySetInnerHTML={{
                              __html: productContent.PRODUCT_INTEGRATION_CODE,
                           }}
                           className={
                              isMobileScreen ? styles.productIntegrationTextMobileView : styles.productIntegrationText
                           }
                        />
                     </Col>
                  </Row>
               </Col>
            )}
         </Row>

         {productContent.FAQ ? (
            <Row className="bg-[#F9FBFD]" justify="center">
               <Col lg={{ span: 20 }} xs={{ span: 22 }} className="pt-24 pb-32">
                  <Row gutter={[0, { lg: 37, xs: 20 }]}>
                     <Col xs={{ span: 24 }}>
                        <Text className="flex justify-center text-4xl font-semibold">FAQs</Text>
                     </Col>
                     <Col xs={{ span: 24 }}>
                        <Collapse
                           items={productContent.FAQ}
                           expandIconPosition="end"
                           size="large"
                           expandIcon={({ isActive }) => (
                              <DownOutlined rotate={isActive ? 180 : 0} className="text-2xl" />
                           )}
                           className={`bg-[#FBFAFA] rounded-t-md custom-collapse`}
                        />
                     </Col>
                  </Row>
               </Col>
            </Row>
         ) : null}

         <SalesSection />
      </>
   );
};

export default Product;

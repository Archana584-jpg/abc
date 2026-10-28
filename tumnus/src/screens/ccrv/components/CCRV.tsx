import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomButton, CustomImage, SalesSection } from "../../../shared";
import {
   ccrvFirstColImage,
   ccrvSecondColImage,
   ccrvThirdColImage,
   ccrvForthColImage,
   calendarLogo,
   ccrvSalesLogo,
} from "../../../assets/images";
import { scrollToBottom } from "@/assets/gifs";
import style from "./style.module.css";
import { clientsLogo } from "@/screens/home/constants";
import { ccrvRecordsMapping, ccrvOverviewMapping } from "../constants";
import { IProduct } from "@/shared/interfaces";

const { Text } = Typography;

interface ICCRVProps {
   isMobileScreen: boolean;
   scrollToBottomVisiblility: boolean;
   navigateTo: (url: string, external: boolean, id?: string) => void;
   product: IProduct;
}

const CCRV = ({ isMobileScreen, scrollToBottomVisiblility, navigateTo, product }: ICCRVProps) => {
   return (
      <Row>
         <Col xs={{ span: 24 }} className={isMobileScreen ? "bg-[#EDF5F6] pb-10" : "bg-[#EDF5F6] pt-10 pb-20"}>
            <Row gutter={[0, { lg: 0, xs: 24 }]}>
               <Col lg={{ span: 11, offset: 1 }} xs={{ span: 22, offset: 1 }} className="mt-20">
                  <Row gutter={[24, { lg: 48, xs: 12 }]}>
                     <Col lg={{ span: 24 }}>
                        <Text className={isMobileScreen ? "text-lg font-bold" : "text-4xl font-bold"}>
                           Are you a Bank, NBFC or a Fintech?
                        </Text>
                     </Col>
                     <Col lg={{ span: 22 }}>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-sm font-medium text-[#717988]"
                                 : "text-xl font-medium text-[#717988]"
                           }
                        >
                           {`Ensure your borrowers' clean criminal history with ease using Gridlines Criminal and court record verification API to reduce the risk of financial fraud.`}
                        </Text>
                     </Col>
                     <Col>
                        <CustomButton
                           label={
                              <Row gutter={[8, 0]}>
                                 <Col>
                                    <CustomImage src={calendarLogo} className="align-middle" />
                                 </Col>
                                 <Col>
                                    <Text className="text-base text-[#FFFFFF] font-medium">Book a Demo</Text>
                                 </Col>
                              </Row>
                           }
                           type="primary"
                           size="large"
                           className="h-12 rounded-sm"
                           handleClick={() => navigateTo("/demo", false)}
                        />
                     </Col>
                     {product.docs_uri && (
                        <Col>
                           <CustomButton
                              label={"View API docs"}
                              size={"large"}
                              type="primary"
                              ghost={true}
                              className="h-12 rounded-sm bg-white border-none hover:bg-[#7cbfbf] hover:text-white"
                              handleClick={() => navigateTo(product.docs_uri, true)}
                           />
                        </Col>
                     )}
                  </Row>
               </Col>
               <Col lg={{ span: 11 }} xs={{ span: 22, offset: 1 }} className="mt-7">
                  <CustomImage src={ccrvFirstColImage} height={400} width={560} className="max-w-full h-auto" />
               </Col>
               <Col lg={{ span: 2 }} className={style.scrollToBottom}>
                  {scrollToBottomVisiblility ? (
                     <CustomImage src={scrollToBottom} width={70} height={70} alt="" className="max-w-full h-auto" />
                  ) : null}
               </Col>
               <Col xs={{ span: 22, offset: 1 }} className="text-center">
                  <Row justify="center" className="w-full">
                     {ccrvRecordsMapping.map((item: any, index: any) => (
                        <Col lg={{ span: 5 }} xs={{ span: 8 }} key={index}>
                           <Row justify="center">
                              <Col xs={{ span: 24 }}>
                                 <Text
                                    className={
                                       isMobileScreen
                                          ? " text-gray-700 font-poppins text-xl font-medium leading-relaxed"
                                          : "text-gray-700 font-poppins text-3xl font-medium leading-relaxed"
                                    }
                                 >
                                    {item.recordNumbers}
                                 </Text>
                              </Col>
                              <Col lg={{ span: 20 }} xs={{ span: 24 }} className="rounded-full bg-[#DAE7E7]">
                                 <Text
                                    className={
                                       isMobileScreen
                                          ? "text-gray-700 font-poppins text-xs font-normal leading-relaxed"
                                          : "text-gray-700 font-poppins text-base font-normal leading-relaxed"
                                    }
                                 >
                                    {item.title}
                                 </Text>
                              </Col>
                           </Row>
                        </Col>
                     ))}
                  </Row>
               </Col>
               <Col xs={{ span: 22, offset: 1 }} className={isMobileScreen ? "text-center" : "text-center mt-12"}>
                  <Row className="w-full" gutter={[40, 24]} justify="center">
                     {clientsLogo.map((item, index) => (
                        <Col key={index} lg={{ span: 4 }} xs={{ span: 8 }}>
                           <CustomImage src={item} className="max-w-full h-auto" />
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col xs={{ span: 24 }} className="py-10 bg-[#FFFFFF]">
            <Row>
               <Col lg={{ span: 9, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                  <CustomImage src={ccrvSecondColImage} className="max-w-full h-auto" />
               </Col>
               <Col lg={{ span: 12 }} xs={{ span: 22, offset: 1 }} className={isMobileScreen ? "mt-4" : "mt-16"}>
                  <Row gutter={[0, { lg: 24, xs: 8 }]}>
                     <Col xs={{ span: 24 }}>
                        <Text className={isMobileScreen ? "text-lg font-bold" : "text-4xl font-bold"}>
                           Criminal and court record verification in the finance sector
                        </Text>
                     </Col>
                     <Col xs={{ span: 24 }}>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-base font-semibold text-[#33CCCC]"
                                 : "text-xl font-semibold text-[#33CCCC]"
                           }
                        >
                           Why it is the need of the hour
                        </Text>
                     </Col>
                     <Col xs={{ span: 21 }}>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-sm font-normal text-[#717988]"
                                 : "text-lg font-normal text-[#717988]"
                           }
                        >
                           Do you know there are a total of 20 crore plus cases in India and still counting? Unveiling
                           the truth; safeguard your interests. Urgent criminal court record verification is the shield
                           financial organizations desperately need. Time is ticking – secure your transactions, lest
                           the past haunt the present!
                        </Text>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>

         <Col lg={{ span: 24 }} className="py-20 bg-[#EDF5F6]">
            <Row justify="center" gutter={[0, { lg: 24, xs: 0 }]}>
               <Col lg={{ span: 10, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                  <Row gutter={[0, { lg: 24, xs: 12 }]}>
                     <Col>
                        <CustomImage src={ccrvThirdColImage} height={330} width={538} className="max-w-full h-auto" />
                     </Col>
                     <Col lg={{ span: 18, offset: 1 }}>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-lg font-bold leading-relaxed"
                                 : "text-4xl font-bold leading-relaxed"
                           }
                        >
                           Real time & In-Depth criminal and court records verification
                        </Text>
                     </Col>
                     <Col lg={{ span: 18, offset: 1 }}>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-sm text-[#33CCCC] font-semibold"
                                 : "text-xl text-[#33CCCC] font-semibold"
                           }
                        >
                           Based on comprehensive database of court records across India
                        </Text>
                     </Col>
                  </Row>
               </Col>
               <Col lg={{ span: 11 }} xs={{ span: 22, offset: 1 }} className={isMobileScreen ? "pt-8" : "pt-14"}>
                  {ccrvOverviewMapping.map((item, index) => (
                     <Row className={isMobileScreen ? "mb-8" : "mb-12"} key={index}>
                        <Col xs={{ span: 2 }}>
                           <CustomImage src={item.logo} className="max-w-full h-auto" />
                        </Col>
                        <Col xs={{ span: 18, offset: 1 }}>
                           <Row>
                              <Col xs={{ span: 24 }}>
                                 <Text className="text-sm font-semibold">{item.title}</Text>
                              </Col>
                              <Col xs={{ span: 22 }}>
                                 <div
                                    className="text-xs text-[#717988]"
                                    dangerouslySetInnerHTML={{ __html: (item || {}).description }}
                                 />
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  ))}
               </Col>
               <Col className={"mb-10"}>
                  <CustomButton
                     label="Talk to our sales"
                     type="primary"
                     size="large"
                     className="h-12 rounded-sm"
                     handleClick={() => navigateTo("/demo", false)}
                  />
               </Col>

               <Col xs={{ span: 22 }} className="bg-[#FFF]">
                  <Row justify="center">
                     <Col className={isMobileScreen ? "pt-8" : "py-14"}>
                        <Text className={isMobileScreen ? "text-lg font-bold" : "text-4xl font-bold"}>
                           How It Works
                        </Text>
                     </Col>
                     <Col xs={{ span: 24 }}>
                        <Row>
                           <Col lg={{ span: 11 }} className={isMobileScreen ? "py-8" : "py-16"}>
                              <Row gutter={[0, { lg: 24, xs: 8 }]}>
                                 <Col xs={{ span: 22, offset: 2 }}>
                                    <Text className={isMobileScreen ? "text-lg font-bold" : "text-4xl font-bold"}>
                                       Court Record Verification Check: Process Map
                                    </Text>
                                 </Col>
                                 <Col xs={{ span: 18, offset: 2 }}>
                                    <Text
                                       className={
                                          isMobileScreen
                                             ? "text-sm font-[#2F2F2F] font-normal"
                                             : "text-lg font-[#2F2F2F] font-normal"
                                       }
                                    >
                                       Court record verification is the process of validating the information furnished
                                       by the candidate with the information available with the court records. Check out
                                       how Gridlines API works
                                    </Text>
                                 </Col>
                              </Row>
                           </Col>
                           <Col lg={{ span: 13 }}>
                              <CustomImage
                                 src={ccrvForthColImage}
                                 height={330}
                                 width={600}
                                 className="max-w-full h-auto"
                              />
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>
         <SalesSection />
      </Row>
   );
};

export default CCRV;

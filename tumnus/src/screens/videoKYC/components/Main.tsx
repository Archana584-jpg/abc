import React from "react";
import { Row, Col, Typography, Timeline } from "antd";
import { CustomButton, SalesSection, CustomImage } from "@/shared";
import { calendarLogo, tickIcon, videoKYCsection1Logo } from "@/assets/images";
import { keyFeatureCards, whyChooseGridlinesCards, steps } from "../constant";

const { Text } = Typography;

interface IVideoKYC {
   navigateTo: (path: string, flag: boolean) => void;
   isMobileScreen: boolean;
}

interface ICardWithIcons {
   item: {
      key: string;
      label: string;
      icon: any;
      descriptions: Array<string>;
   };
   labelClassName: string;
   iconSpan: number;
   textSpan: number;
   descriptionClassName: string;
   descriptionSpan: Array<number>;
   labelDescriptionGutter: [any, any];
   iconClassName?: string;
   textClassName?: string;
   isMobileScreen: boolean;
}

const CardWithIcons = ({
   item,
   labelClassName,
   iconSpan,
   textSpan,
   descriptionClassName,
   descriptionSpan,
   labelDescriptionGutter,
   iconClassName,
   textClassName,
   isMobileScreen,
}: ICardWithIcons) => {
   return (
      <Row justify={isMobileScreen ? "center" : "space-between"}>
         <Col xs={{ span: iconSpan }} className={iconClassName}>
            <CustomImage src={item.icon} />
         </Col>
         <Col xs={{ span: textSpan }} className={textClassName}>
            <Row gutter={labelDescriptionGutter}>
               <Col xs={{ span: 24 }}>
                  <Text className={labelClassName}>{item.label}</Text>
               </Col>
               <Col xs={{ span: 24 }}>
                  <Row gutter={[0, 8]}>
                     {item.descriptions.map((description) => (
                        <Col key={description} xs={{ span: 24 }}>
                           <Row justify="space-between">
                              <Col xs={{ span: descriptionSpan[0] }}>
                                 <CustomImage src={tickIcon} />
                              </Col>
                              <Col xs={{ span: descriptionSpan[1] }} className="pl-2 content-center">
                                 <Text className={descriptionClassName}>{description}</Text>
                              </Col>
                           </Row>
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

const VideoKYCComponent = ({ navigateTo, isMobileScreen }: IVideoKYC) => {
   return (
      <Row className="bg-[#F1F4F7]">
         <Col
            lg={{ span: 24 }}
            xs={{ span: 24 }}
            className={isMobileScreen ? "py-[2.75rem] px-[1.75rem]" : "py-[4.75rem] px-[3.75rem]"}
         >
            <Row justify="space-between" gutter={[0, { xs: 24 }]}>
               <Col lg={{ span: 12 }} xs={{ span: 24 }}>
                  <Row gutter={[0, { lg: 40, xs: 20 }]} className={"py-[1.5rem]"}>
                     <Col xs={{ span: 24 }}>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-[#2F2F2F] text-[1.25rem] font-bold leading-normal"
                                 : "text-[#2F2F2F] text-[2.1875rem] font-bold leading-normal"
                           }
                        >
                           Get your customer’s{" "}
                           <span
                              className={
                                 isMobileScreen
                                    ? "text-[#3CC] text-[1.25rem] font-bold leading-normal"
                                    : "text-[#3CC] text-[2.1875rem] font-bold leading-normal"
                              }
                           >
                              Video KYC
                           </span>{" "}
                           completed in just 2 minutes
                        </Text>
                     </Col>
                     <Col lg={{ span: 22 }} xs={{ span: 24 }}>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-[#717988] text-[1rem] font-medium leading-[170%]"
                                 : "text-[#717988] text-[1.25rem] font-medium leading-[170%]"
                           }
                        >
                           AI-powered, RBI-compliant solution for faster onboarding, lower costs, fraud prevention, and
                           regulatory compliance
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
                           size={isMobileScreen ? "small" : "large"}
                           className="h-12 rounded-sm"
                           handleClick={() => navigateTo("/demo", false)}
                        />
                     </Col>
                  </Row>
               </Col>
               <Col lg={{ span: 10 }} xs={{ span: 24 }}>
                  <CustomImage src={videoKYCsection1Logo} alt="Gridlines Video KYC Logo" className="w-full" />
               </Col>
            </Row>
         </Col>
         <Col
            lg={{ span: 24 }}
            xs={{ span: 24 }}
            className={
               isMobileScreen
                  ? "bg-white rounded-[3.5rem] shadow-[0px_9px_28px_8px_rgba(0,0,0,0.05)]"
                  : "bg-white rounded-[3.5rem] shadow-[0px_9px_28px_8px_rgba(0,0,0,0.05)] p-[3.75rem]"
            }
         >
            <Row
               className={"rounded-[1.5rem] bg-[linear-gradient(180deg,#EDF5F6_0%,#E8F2FC_100%)]"}
               justify="center"
               gutter={[0, { lg: 40, xs: 20 }]}
            >
               <Col className="pt-[2.5rem]">
                  <Text className="text-[#2F2F2F] font-poppins text-[2.1875rem] font-bold leading-normal">
                     How does it work?
                  </Text>
               </Col>
               <Col>
                  <Timeline className={"px-[2rem]"} mode={isMobileScreen ? "left" : "alternate"}>
                     {steps.map((step, index) => (
                        <Timeline.Item
                           key={index}
                           dot={
                              step.step ? (
                                 <CustomButton
                                    type="ghost"
                                    label={<Text className="text-[0.7rem] font-semibold text-[#3CC]">{step.step}</Text>}
                                    size="small"
                                    className="rounded-lg bg-[linear-gradient(180deg,#EDF5F6_0%,#E8F2FC_100%)] border-[#3CC]"
                                 />
                              ) : null
                           }
                           className={!isMobileScreen ? (index % 2 ? "pr-[2rem]" : "pl-[2rem]") : "pb-[4rem]"}
                        >
                           <Row gutter={[0, 32]} align="middle">
                              <Col xs={{ span: 24 }}>
                                 <Row gutter={[0, { xs: 16 }]}>
                                    {index % 2 && !isMobileScreen ? (
                                       <Col
                                          lg={{ span: 6, offset: 0 }}
                                          md={{ span: 6, offset: 0 }}
                                          xs={{ span: 12, offset: 2 }}
                                       >
                                          <CustomImage
                                             src={step.image}
                                             alt={step.title}
                                             className="w-full max-w-[150px] mx-auto"
                                          />
                                       </Col>
                                    ) : null}
                                    <Col lg={{ span: 17, offset: 1 }} xs={{ span: 20, offset: 2 }}>
                                       <Row className="text-start">
                                          <Col>
                                             <Text
                                                className={
                                                   isMobileScreen
                                                      ? "text-[#28A4A4] font-poppins text-[1rem] font-light tracking-widest"
                                                      : "text-[#28A4A4] font-quicksand text-[1.25rem] font-semibold leading-normal tracking-[0.0125rem]"
                                                }
                                             >
                                                {step.title}
                                             </Text>
                                          </Col>
                                          <Col>
                                             <Text
                                                className={
                                                   isMobileScreen
                                                      ? "text-[#595959] font-poppins text-[0.75rem] font-normal"
                                                      : "text-[#595959] font-poppins text-[0.75rem] font-normal"
                                                }
                                             >
                                                {step.description}
                                             </Text>
                                          </Col>
                                       </Row>
                                    </Col>
                                    {index % 2 == 0 && !isMobileScreen ? (
                                       <Col
                                          lg={{ span: 6, offset: 0 }}
                                          md={{ span: 6, offset: 0 }}
                                          xs={{ span: 12, offset: 2 }}
                                       >
                                          <CustomImage
                                             src={step.image}
                                             alt={step.title}
                                             className="w-full max-w-[150px] mx-auto"
                                          />
                                       </Col>
                                    ) : null}
                                 </Row>
                              </Col>
                           </Row>
                        </Timeline.Item>
                     ))}
                  </Timeline>
               </Col>
            </Row>
         </Col>
         <Col xs={{ span: 24 }} className={isMobileScreen ? "px-[1.75rem] py-[1.25rem]" : "px-[3.75rem] py-[6.25rem]"}>
            <Row justify="space-between">
               <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                  <Row gutter={[0, { lg: 28, xs: 8 }]}>
                     <Col>
                        <Text className={"text-[#28A4A4] text-[1.5rem] font-light leading-normal tracking-[0.3rem]"}>
                           Key Features
                        </Text>
                     </Col>
                     <Col>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-[#2F2F2F] text-[1.5rem] font-bold leading-normal"
                                 : "text-[#2F2F2F] text-[2.1875rem] font-bold leading-normal"
                           }
                        >
                           Comprehensive, Secure and Customizable Video KYC Solution
                        </Text>
                     </Col>
                     <Col>
                        <Text
                           className={
                              isMobileScreen
                                 ? "text-[#595959] text-[1rem] font-normal leading-normal tracking-[0.0125rem]"
                                 : "text-[#595959] text-[1.25rem] font-normal leading-normal tracking-[0.0125rem]"
                           }
                        >
                           Ensure 100% RBI compliance and deliver a smooth customer onboarding experience with our
                           AI-powered Video KYC solution.
                        </Text>
                     </Col>
                  </Row>
               </Col>
               <Col
                  lg={{ span: 14 }}
                  xs={{ span: 24 }}
                  className={isMobileScreen ? "pt-8" : "max-h-[40rem] overflow-scroll"}
               >
                  <Row gutter={[0, 40]}>
                     {keyFeatureCards.map((item) => (
                        <Col xs={{ span: 24 }} key={item.key} className="bg-[#fff] rounded-xl p-[2rem]">
                           <CardWithIcons
                              item={item}
                              labelClassName={
                                 isMobileScreen
                                    ? "text-[#2F2F2F] text-[1rem] font-medium leading-normal flex justify-center"
                                    : "text-[#2F2F2F] text-[1.25rem] font-medium leading-normal"
                              }
                              descriptionClassName={
                                 isMobileScreen
                                    ? "text-[#717988] text-[0.8rem] font-normal leading-normal"
                                    : "text-[#717988] text-[0.875rem] font-normal leading-normal"
                              }
                              iconSpan={isMobileScreen ? 4 : 2}
                              textSpan={isMobileScreen ? 24 : 21}
                              descriptionSpan={isMobileScreen ? [2, 21] : [1, 23]}
                              labelDescriptionGutter={[0, 16]}
                              textClassName={isMobileScreen ? "" : "pl-4"}
                              iconClassName={isMobileScreen ? "flex justify-center" : ""}
                              isMobileScreen={isMobileScreen}
                           />
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>
         <Col
            xs={{ span: 24 }}
            lg={{ span: 23 }}
            className={`bg-[#fff] flex justify-center ${isMobileScreen ? "py-[2rem]" : "mx-[1.5rem] py-[5rem]"} `}
         >
            <Row justify="center" gutter={[0, { lg: 16, xs: 8 }]}>
               <Col xs={{ span: 24 }} className="flex justify-center">
                  <Text
                     className={
                        isMobileScreen
                           ? "text-[#2F2F2F] text-center text-[1.5rem] font-bold leading-normal px-[1rem]"
                           : "text-[#2F2F2F] text-center text-[2.1875rem] font-bold leading-normal px-[1rem]"
                     }
                  >
                     Why Choose Gridlines?
                  </Text>
               </Col>
               <Col xs={{ span: 22 }} lg={{ span: 24 }} className="flex justify-center">
                  <Text
                     className={
                        isMobileScreen
                           ? "text-[#717988] text-center text-[0.8rem] font-normal leading-[170%]"
                           : "text-[#717988] text-center text-[1rem] font-normal leading-[170%]"
                     }
                  >
                     Gridlines offers unmatched advantages for seamless and secure Video KYC verification
                  </Text>
               </Col>
               <Col lg={{ span: 24 }} xs={{ span: 22 }} className="flex justify-center">
                  <Row justify="center">
                     {whyChooseGridlinesCards.map((item, index) => (
                        <Col lg={{ span: 9 }} xs={{ span: 22 }} className="py-[1rem] px-[1rem]" key={index}>
                           <CardWithIcons
                              item={item}
                              labelClassName={
                                 isMobileScreen
                                    ? "text-[#2F2F2F] text-[1rem] font-semibold leading-normal flex justify-center"
                                    : "text-[#2F2F2F] text-[1rem] font-semibold leading-normal"
                              }
                              iconSpan={isMobileScreen ? 4 : 3}
                              textSpan={isMobileScreen ? 24 : 19}
                              descriptionClassName="text-[#717988] text-[0.875rem] font-normal leading-normal"
                              descriptionSpan={[1, 22]}
                              labelDescriptionGutter={[0, 4]}
                              textClassName={isMobileScreen ? "" : "pl-4"}
                              iconClassName={isMobileScreen ? "flex justify-center" : ""}
                              isMobileScreen={isMobileScreen}
                           />
                        </Col>
                     ))}
                  </Row>
               </Col>
            </Row>
         </Col>
         <SalesSection
            className="bg-[#ECF5F6]"
            title="Ensure secure onboarding, prevent fraud, and stay 100% compliant."
         />
      </Row>
   );
};

export default VideoKYCComponent;

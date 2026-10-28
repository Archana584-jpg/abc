import React from "react";
import { Row, Col, Typography } from "antd";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { CustomImage } from "@/shared";

const { Title, Text } = Typography;

interface ICardItem {
   logo: string;
   title: string;
   description: string;
}

interface IAPIsIntegrationComponentProps {
   sectionTitle: string;
   data: ICardItem[];
}

const APIsIntegrationComponent = ({ sectionTitle, data }: IAPIsIntegrationComponentProps) => {
   const isMobileScreen = useIsMobile();

   return (
      <Row>
         <Col span={24} className="bg-[#EDF5F6] py-14">
            <Row justify="center">
               <Col lg={{ span: 20 }} className="pb-10">
                  <Row justify="center" gutter={[0, 40]}>
                     <Col span={24} className="flex justify-center">
                        <Title
                           className={`${
                              isMobileScreen ? "text-2xl px-2 font-semibold text-center" : "text-4xl font-bold"
                           }`}
                        >
                           {sectionTitle}
                        </Title>
                     </Col>

                     <Col span={24}>
                        <Row justify="center" gutter={[0, 100]}>
                           {data.map((item, index) => (
                              <Col lg={{ span: 8 }} key={index}>
                                 <Row gutter={[0, 20]} justify="center">
                                    <Col span={24} className="flex justify-center">
                                       <CustomImage src={item.logo} />
                                    </Col>
                                    <Col span={24} className="flex justify-center">
                                       <Text
                                          className={isMobileScreen ? "text-base font-medium" : "text-xl font-semibold"}
                                       >
                                          {item.title}
                                       </Text>
                                    </Col>
                                    <Col span={20} className="flex justify-center">
                                       <Text className="text-center text-sm">{item.description}</Text>
                                    </Col>
                                 </Row>
                              </Col>
                           ))}
                        </Row>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default APIsIntegrationComponent;

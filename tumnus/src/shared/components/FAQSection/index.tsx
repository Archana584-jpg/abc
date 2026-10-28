import { Col, Collapse, Row, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface ICustomFAQSection {
   isMobileScreen: boolean;
   faqData: Array<{ label: String; children: String }>;
   title: String;
   accordion: boolean;
   expandIconPosition?: "start" | "end";
   size?: "small" | "middle" | "large";
   bgColor?: string;
}

const FAQSection = ({
   isMobileScreen,
   faqData,
   title,
   accordion,
   expandIconPosition,
   size,
   bgColor,
}: ICustomFAQSection) => {
   return (
      <Row className="w-full">
         <Col span={24}>
            <Row className={bgColor || "bg-[]#FFFFFF"} justify="center">
               <Col lg={{ span: 20 }} xs={{ span: 22 }} className="py-20">
                  <Row gutter={[0, { lg: 60, xs: 40 }]}>
                     <Col xs={{ span: 24 }} className="flex justify-center">
                        <Text
                           className={`${isMobileScreen ? "text-2xl font-semibold" : "text-4xl font-bold"} text-center`}
                        >
                           {title}
                        </Text>
                     </Col>
                     <Col xs={{ span: 24 }}>
                        <Collapse
                           accordion={accordion}
                           items={faqData.map((item, index) => ({
                              key: index,
                              label: (
                                 <Text className={isMobileScreen ? "text-lg font-medium " : "text-2xl font-medium"}>
                                    {item.label}
                                 </Text>
                              ),
                              children: (
                                 <Text className={isMobileScreen ? "text-sm font-normal " : "text-2xl font-normal"}>
                                    {item.children}
                                 </Text>
                              ),
                           }))}
                           expandIconPosition={expandIconPosition || "end"}
                           size={size || "large"}
                           expandIcon={({ isActive }) => (
                              <DownOutlined
                                 rotate={isActive ? 180 : 0}
                                 className={isMobileScreen ? "text-xl" : "text-3xl"}
                              />
                           )}
                           className={`bg-[#FBFAFA] rounded-t-md custom-collapse`}
                        />
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default FAQSection;

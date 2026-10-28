import React from "react";
import { Row, Col, Typography } from "antd";
import CustomImage from "../Image";
import CustomCarousel from "../Carousel";
import CustomCard from "../Card";
import style from "./style.module.css";
import { whyGridlinesCards } from "@/shared/constants";
import useIsMobile from "@/shared/hooks/useIsMobile";

const { Title, Text } = Typography;

const WhyGridlinesCarousel = () => {
   const isMobileScreen = useIsMobile();
   return (
      <Col className="bg-transparent" xs={{ span: 24 }}>
         <Row className="p-10 pt-10 w-full" justify="center">
            <Col xs={{ span: 24 }}>
               <CustomCarousel>
                  {whyGridlinesCards.map((item, index) => (
                     <CustomCard
                        className={`${style.whyGridlinesCards} w-11/12 text-center`}
                        bodyStyle={{ padding: isMobileScreen ? "0.7rem" : "2rem" }}
                        key={index}
                     >
                        <CustomImage
                           src={item.logo}
                           height={isMobileScreen ? 35 : 50}
                           width={isMobileScreen ? 35 : 50}
                           className="max-w-full h-auto"
                        />
                        <Title className={`${style.subTitle} text-lg leading-none`}>{item.title}</Title>
                        <Text
                           className={`${style.subTitle} ${style.whyGridlinesCardsDesc} inline-block leading-normal`}
                        >
                           {item.description}
                        </Text>
                     </CustomCard>
                  ))}
               </CustomCarousel>
            </Col>
         </Row>
      </Col>
   );
};

export default WhyGridlinesCarousel;

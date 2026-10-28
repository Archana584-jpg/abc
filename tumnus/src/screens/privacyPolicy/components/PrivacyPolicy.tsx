import React from "react";
import { CustomCard } from "../../../shared";
import { privacyPolicyContent, subTitlePrivacyPolicy } from "../constants";
import { Row, Col, Typography } from "antd";
import style from "./style.module.css";

const { Title } = Typography;

interface IPrivacyPolicyItem {
   title: string;
   description: string;
}

const PrivacyPolicy = () => {
   return (
      <Row className={style.parentRow}>
         <Col xs={{ span: 24 }}>
            <Title className={style.heading}>Privacy Policy</Title>
         </Col>

         <Col lg={{ span: 21 }} xs={{ span: 23 }}>
            <CustomCard className={style.descriptionCard}>
               <div
                  dangerouslySetInnerHTML={{
                     __html: subTitlePrivacyPolicy || "",
                  }}
                  className={`${style.description} text-lg mt-0`}
               />
               <Row>
                  <Col xs={{ span: 24 }}>
                     <Title className={`${style.title} font-semibold`}>Definition-</Title>
                  </Col>
                  {privacyPolicyContent.map((item: IPrivacyPolicyItem, index: number) => (
                     <Col xs={{ span: 24 }} key={index}>
                        <Title className={`${style.title} font-medium`}>{item.title}</Title>
                        <div
                           dangerouslySetInnerHTML={{
                              __html: item.description,
                           }}
                           className={`${style.description} mt-0`}
                        />
                     </Col>
                  ))}
               </Row>
            </CustomCard>
         </Col>
      </Row>
   );
};

export default PrivacyPolicy;

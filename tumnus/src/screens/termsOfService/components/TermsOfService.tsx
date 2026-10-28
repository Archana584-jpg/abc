import React from "react";
import { Row, Typography, Col } from "antd";
import { termsOfService } from "../constants";
import { CustomCard } from "../../../shared";
import style from "./style.module.css";

const { Title } = Typography;

const TermsOfService = () => {
   return (
      <Row className={style.parentRow}>
         <Col xs={{ span: 24 }}>
            <Title className={style.termsOfServiceHeading}>Terms Of Service</Title>
         </Col>

         <Col lg={{ span: 21 }} xs={{ span: 23 }}>
            <CustomCard className={style.descriptionCard}>
               <Row>
                  {termsOfService.map((item, index) => (
                     <Col xs={{ span: 24 }} key={index}>
                        <Title className={style.descriptionHeading}>
                           {index + 1}. {(item || {}).title}
                        </Title>
                        <div
                           dangerouslySetInnerHTML={{
                              __html: (item || {}).description,
                           }}
                           className={`${style.description} m-0`}
                        />
                     </Col>
                  ))}
               </Row>
            </CustomCard>
         </Col>
      </Row>
   );
};

export default TermsOfService;

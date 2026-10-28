import React from "react";
import { Typography, Row, Col } from "antd";
const { Text } = Typography;

const styles = {
   text: {
      textAlign: "center",
      display: "block",
   },
   timer: {
      fontSize: "1.563rem",
      lineHeight: "2.375rem",
      color: "#33CCCC",
      textAlign: "center",
      display: "block",
   },
};

const AccountActivationBlockedCard = ({ remainingBlockedTime }) => {
   return (
      <Row gutter={[10, 10]}>
         <Col xs={{ span: 24 }}>
            <Text style={styles.text}>Exceeded mobile number verification attempts.</Text>
         </Col>

         <Col xs={{ span: 24 }}>
            <Text style={styles.text}>Please come back in</Text>
         </Col>

         <Col xs={{ span: 24 }}>
            <Text style={styles.timer}>
               {remainingBlockedTime.minutes() > 9
                  ? remainingBlockedTime.minutes()
                  : `0${remainingBlockedTime.minutes()}`}
               :
               {remainingBlockedTime.seconds() > 9
                  ? remainingBlockedTime.seconds()
                  : `0${remainingBlockedTime.seconds()}`}
            </Text>
         </Col>
      </Row>
   );
};

export default AccountActivationBlockedCard;

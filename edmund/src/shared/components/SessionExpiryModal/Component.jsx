import { Typography, Row, Col, Modal } from "antd";
import { CustomButton } from "shared/components";

const Component = ({ visible, handleReLogin }) => {
   return (
      <Modal
         title={<Typography.Text className="font-medium text-lg text-text">Session Expired</Typography.Text>}
         open={visible}
         className={"session-expired-popup"}
         closable={false}
         maskClosable={false}
         footer={null}
         centered={true}
      >
         <Row gutter={[16, 16]}>
            <Col xs={24} md={24}>
               <Typography.Text>
                  Your session has expired due to extended usage. Please log in again to continue your application.
               </Typography.Text>
            </Col>
            <Col xs={24} md={24} className="flex justify-center">
               <CustomButton type={"primary"} label={"Re-Login"} handleClick={handleReLogin}></CustomButton>
            </Col>
         </Row>
      </Modal>
   );
};

export default Component;

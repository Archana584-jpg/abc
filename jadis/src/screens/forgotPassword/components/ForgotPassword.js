import { Card, Col, Row, Typography } from "antd";
import { CustomForm, CustomImage } from "../../../shared/components/index";
import { Logo } from "assets/images";
import { forgotPasswordForm } from "../constants";

const ForgotPassword = ({ handleSubmit, handleChange }) => {
   return (
      <Row className="h-screen" justify="center">
         <Col xs={18} md={8} className="flex justify-center items-center">
            <Card className="rounded-md px-8 py-2">
               <Row align="middle">
                  <Col xs={24} className="flex justify-center">
                     <CustomImage src={Logo} width={160} height={72} preview={false}></CustomImage>
                  </Col>
                  <Col xs={24} className="text-center py-2">
                     <Typography.Text className="text-2xl text-subText">Forgot Password</Typography.Text>
                  </Col>
                  <Col xs={24} className="text-center py-2">
                     <Typography.Text className="text-xl font-medium">Application Review Dashboard</Typography.Text>
                  </Col>
                  <Col xs={24} className="text-center py-2">
                     <Typography.Text className="text-sm text-subText">
                        Enter the email address associated with your account, and we'll send you a link to reset your
                        password
                     </Typography.Text>
                  </Col>
                  <CustomForm
                     handleChange={handleChange}
                     onSuccess={handleSubmit}
                     formFieldItems={forgotPasswordForm}
                  />
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default ForgotPassword;

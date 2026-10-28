import { Card, Col, Form, Row, Typography, Image } from "antd";
import { loginForm } from "../constants";
import { Logo } from "assets/images";
import { useEffect } from "react";
import { CustomForm } from "shared/components";

const Login = ({ data, handleSubmit, handleChange }) => {
   const [form] = Form.useForm();

   useEffect(() => {
      form.setFieldsValue({ ...data });
   }, []);

   return (
      <Row className="h-screen" justify="center">
         <Col xs={18} md={8} className="flex justify-center items-center">
            <Card className="rounded-md px-8 py-2">
               <Row align="middle">
                  <Col xs={24} className="flex justify-center">
                     <Image src={Logo} width={160} height={72} preview={false} />
                  </Col>
                  <Col xs={24} className="text-center py-2">
                     <Typography.Text className="text-2xl text-subText">Login</Typography.Text>
                  </Col>
                  <Col xs={24} className="text-center py-2">
                     <Typography.Text className="text-xl font-medium">Application Review Dashboard</Typography.Text>
                  </Col>
                  <CustomForm handleChange={handleChange} onSubmit={handleSubmit} formFieldItems={loginForm} />
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default Login;

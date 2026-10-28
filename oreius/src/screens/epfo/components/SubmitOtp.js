import { Col, Form, Row } from "antd";
import React from "react";
import {
    CustomButton,
    CustomInput,
} from "../../../shared/components";

const SubmitOtp = ({ onSubmitOtp, clearGenerateOtpData }) => {

    const [form] = Form.useForm();

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onSubmitOtp}
        >
            <Form.Item
                name={"otp"}
                label={"OTP"}
                rules={[
                    {
                        required: true,
                        type: "string",
                    },
                ]}
            >
                <CustomInput
                    type={"number"}
                    placeholder={`Please Enter OTP`}
                />
            </Form.Item>

            <Form.Item>
                <Row justify='space-between'>
                    <Col>
                        <CustomButton
                            type="primary"
                            htmlType="submit"
                            title={"Submit OTP"}
                        />
                    </Col>
                    <Col>
                        <CustomButton
                            type="primary"
                            title={"Back"}
                            handleChange={clearGenerateOtpData}
                        />
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};

export default SubmitOtp
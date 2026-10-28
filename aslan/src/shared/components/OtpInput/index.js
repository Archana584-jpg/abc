import { WarningOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React from "react";
import OtpInput from "react-otp-input";

const { Text } = Typography;

const CustomOtpInput = ({ handleChange, otp, isOtpError, numInputs, errors, inputStyle }) => {
   return (
      <>
         <OtpInput
            value={otp}
            onChange={(otp) => handleChange("otp", otp)}
            numInputs={numInputs || 4}
            hasErrored={errors.otp || isOtpError}
            inputStyle={{
               width: "3.125rem",
               marginLeft: 20,
               background: "#F7FCFF",
               border: "0.063rem solid #f6f6f6",
               padding: "0.938rem 0rem 0.938rem 0rem",
               fontWeight: "bolder",
               color: "#2F2F2F",
               ...inputStyle,
            }}
            focusStyle={{
               outline: "none",
               border: "0.125rem solid #33CCCC",
            }}
            errorStyle={{
               outline: "none",
               border: "0.125rem solid #ED5F74",
            }}
         />
         {isOtpError && (
            <Text style={{ color: "#ED5F74", fontSize: "0.813rem" }}>
               <WarningOutlined /> OTP code is invalid, please try again
            </Text>
         )}
         {errors.otp ? (
            <Text style={{ color: "#ED5F74", fontSize: "0.813rem" }}>
               <WarningOutlined /> {errors.otp}
            </Text>
         ) : null}
      </>
   );
};

export default CustomOtpInput;

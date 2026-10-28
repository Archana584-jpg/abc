import React, { useEffect, useState } from "react";
import { LoginComponent } from "../components";
import { cloneDeep, isEmpty } from "lodash";
import { channelOptions, viewOptions } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { generateOTP, verifyOTP } from "../actions";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { reCaptchaV3Key } from "utils/config";
import loginSelector from "../selector";
import { setApplicationId } from "shared/actions";
import sharedSelector from "shared/selector";
import { useRouter } from "shared/hooks/useRouter";

const Login = () => {
   const dispatch = useDispatch();
   const { searchParams, navigateTo } = useRouter();
   const { otpGenerated } = useSelector(loginSelector);
   const { applicationId, applicationLogo, authConfig, currentUser } = useSelector(sharedSelector);
   const [showV3, setShowV3] = useState(false);
   const [showV2, setShowV2] = useState(false);
   let [otpRegenerationTime, setOtpRegenerationTime] = useState(30);

   const [data, setData] = useState({
      applicationId: applicationId,
      email: authConfig?.input_prefilled ? currentUser?.data?.email : "",
      phone: {
         countryCode: "+91",
         number: authConfig?.input_prefilled ? currentUser?.data?.phone : "",
      },
   });
   const [currentView, setCurrentView] = useState(viewOptions.LOGIN);

   useEffect(() => {
      return () => {
         setCurrentView(viewOptions.LOGIN);
      };
   }, []);

   useEffect(() => {
      const key = searchParams.get("key");
      if (key) {
         navigateTo("/");
      }
   }, [searchParams]);

   useEffect(() => {
      if (applicationId && data.applicationId !== applicationId) {
         setData({
            applicationId: data.applicationId ?? applicationId,
            email: "",
            phone: {
               countryCode: "+91",
               number: "",
            },
         });
      }
   }, [applicationId, data.applicationId]);

   useEffect(() => {
      const { applicationId } = data;
      if (!otpGenerated.loading && !isEmpty(otpGenerated.data)) {
         dispatch(setApplicationId(applicationId));
         handleChange("currentView", viewOptions.OTP);
      }
   }, [otpGenerated]);

   useEffect(() => {
      if (currentView === viewOptions.OTP) startOTPTimer();
   }, [currentView]);

   useEffect(() => {
      if (otpRegenerationTime === 30 && currentView === viewOptions.OTP) startOTPTimer();
   }, [otpRegenerationTime]);

   const handleChange = (key, value) => {
      switch (key) {
         case "currentView":
            setCurrentView(value);
            break;
         case "showV3":
            setShowV3(value);
            break;
         case "showv2":
            setShowV2(value);
            break;
         case "applicationId":
         case "email":
         case "otp":
            data[key] = value;
            setData(cloneDeep(data));
            break;
         case "countryCode":
         case "number":
            data.phone[key] = value;
            setData(cloneDeep(data));
            break;
         case "resendOTP":
            setOtpRegenerationTime(30);
            dispatch(
               generateOTP({
                  // captcha,
                  application_id: value.applicationId,
                  contact_detail: value.email || value.phone.number,
                  channel: value.email ? channelOptions.EMAIL : channelOptions.SMS,
               })
            );
            break;
         default:
            break;
      }
   };

   const handleCaptchaSubmit = (captcha) => {
      const { applicationId, email, phone, otp } = data;
      if (currentView === viewOptions.LOGIN) {
         dispatch(
            generateOTP({
               // captcha,
               application_id: applicationId,
               contact_detail: email || phone.number,
               channel: email ? channelOptions.EMAIL : channelOptions.SMS,
            })
         );
      } else {
         dispatch(verifyOTP({ application_id: applicationId, otp, otp_id: otpGenerated.data.otp_id }));
      }
      // setShowV3(false);
      // setShowV2(false);
   };

   const startOTPTimer = () => {
      let timerInterval = setInterval(() => {
         if (otpRegenerationTime > 0) otpRegenerationTime -= 1;
         if (otpRegenerationTime === 0) clearInterval(timerInterval);
         setOtpRegenerationTime(otpRegenerationTime);
      }, 1000);
   };

   return (
      // <GoogleReCaptchaProvider reCaptchaKey={reCaptchaV3Key}>
      //    {showV3 && <GoogleReCaptcha action={"loginAction"} onVerify={(captcha) => handleCaptchaSubmit(captcha)} />}
      <LoginComponent
         data={data}
         showV2={showV2}
         currentView={currentView}
         handleChange={handleChange}
         applicationLogo={applicationLogo}
         handleSubmit={handleCaptchaSubmit}
         otpRegenerationTime={otpRegenerationTime}
         authConfig={authConfig}
      />
      // </GoogleReCaptchaProvider>
   );
};

export default Login;

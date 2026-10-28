import React, { useMemo } from "react";
import { Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Countdown } from "@/shared";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { CardFooter } from ".";

const { Text } = Typography;

const ErrorCard = ({ message, onBack }) => {
   const windowWidth = useWindowWidth();
   const isMobile = windowWidth < 768;
   const { mainMessage, subMessage } = useMemo(() => {
      const messages = message.split("|");
      return {
         mainMessage: messages[0],
         subMessage: messages[1],
      };
   }, [message]);

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
         <div className={`w-full max-w-lg rounded-lg shadow-lg ${isMobile ? "shadow-none" : "bg-[#F4F4F4]"} mx-auto`}>
            <div className="bg-[#FFE8EB] rounded-lg px-8 py-12 m-4 flex flex-col items-center">
               <div className="mb-2">
                  <ExclamationCircleOutlined className="!text-[#ED5F74] !text-[2rem]" />
               </div>
               <div className="flex flex-col items-center">
                  <Text className="!text-[#ED5F74] !text-[1.25rem] !font-bold !text-center !mb-2">{mainMessage}</Text>
                  <Text className="!text-[#ED5F74] !text-[0.90rem] !font-normal !text-center">{subMessage}</Text>
               </div>
            </div>
            <Countdown />
            <CardFooter handleBack={onBack} />
         </div>
      </div>
   );
};

export default ErrorCard;

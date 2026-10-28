import React, { useState, useEffect } from "react";
import { Typography } from "antd";

const { Text } = Typography;

const Countdown = ({
   timeLimit = 5,
   message = { beforeMessage: "Redirecting in {countdown} seconds...", afterMessage: "Redirecting..." },
}) => {
   const [countdown, setCountdown] = useState(timeLimit);

   useEffect(() => {
      const timer = setInterval(() => {
         setCountdown((prev) => {
            if (prev <= 1) {
               clearInterval(timer);
               return 0;
            }
            return prev - 1;
         });
      }, 1000);

      return () => clearInterval(timer);
   }, []);

   const displayMessage =
      countdown > 0 ? message.beforeMessage.replace("{countdown}", countdown) : message.afterMessage;

   return (
      <div className="text-center py-3">
         <Text className="!text-[#666666] !text-[0.875rem]">{displayMessage}</Text>
      </div>
   );
};

export default Countdown;

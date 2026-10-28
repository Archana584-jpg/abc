import React from "react";
import { verifiedIcon } from "@/assets/images";
import { Button, Typography } from "antd";
import { Countdown } from "@/shared";
import { downloadDocument } from "@/utils/helper";
import { DownloadOutlined } from "@ant-design/icons";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { CardFooter } from ".";

const { Text } = Typography;

const SuccessCard = ({ onBack, message, s3PresignedURL }) => {
   const windowWidth = useWindowWidth();
   const isMobile = windowWidth < 768;

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
         <div className={`w-full max-w-lg rounded-lg shadow-lg ${isMobile ? "shadow-none" : "bg-[#F4F4F4]"}  mx-auto`}>
            <div className="bg-[#E5FFED] m-4 rounded-lg px-8 py-12 flex flex-col items-center">
               <div className="mb-2">
                  <img src={verifiedIcon} alt="logo" className="w-16 h-16" />
               </div>
               <Text className="!text-[#75DE95] !text-[1.25rem] !font-normal text-center">{message}</Text>
               <div className="pt-2">
                  <Button
                     icon={<DownloadOutlined className="!text-lg" />}
                     className="!text-[#75DE95] !border !border-solid !border-[#75DE95] !bg-[#E5FFED]"
                     onClick={() => downloadDocument(s3PresignedURL, "Signed Document.pdf")}
                  >
                     Download
                  </Button>
               </div>
            </div>
            <Countdown timeLimit={15} />
            <CardFooter handleBack={onBack} />
         </div>
      </div>
   );
};

export default SuccessCard;

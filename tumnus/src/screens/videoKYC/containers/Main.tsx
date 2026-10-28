import React from "react";
import { VideoKYCComponent } from "../components";
import { useRouter } from "next/router";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { ConfigProvider } from "antd";

const VideoKYC = () => {
   const router = useRouter();
   const isMobile = useIsMobile();

   const navigateTo = (route: string, redirectToExternalLink: boolean) => {
      if (redirectToExternalLink) {
         window.open(route, "_blank");
      } else {
         router.push(route);
      }
   };
   return (
      <ConfigProvider
         theme={{
            components: {
               Timeline: {
                  lineType: "dotted",
                  lineWidth: 2,
                  tailColor: "#878787",
                  dotBg: "linear-gradient(180deg, #EDF5F6 0%, #E8F2FC 100%)",
               },
            },
         }}
      >
         <VideoKYCComponent navigateTo={navigateTo} isMobileScreen={isMobile} />
      </ConfigProvider>
   );
};

export default VideoKYC;

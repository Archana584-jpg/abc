import React from "react";
import { gridlinesText } from "@/assets/images";
import { Button } from "antd";
import useWindowWidth from "@/utils/hooks/useWindowWidth";

const CardFooter = ({ handleBack }) => {
   const windowWidth = useWindowWidth();
   const isMobile = windowWidth < 768;
   return (
      <div
         className={`bg-[#FFFFFF] ${
            isMobile ? "px-4 py-4 !fixed !bottom-0 !left-0 !right-0 !z-10 !max-w-full !m-0 !pb-0" : "px-4 py-2"
         } rounded-b-lg !shadow-lg`}
      >
         {isMobile ? (
            <div className="flex flex-col items-center gap-3 w-full">
               <Button type="primary" size="large" className="w-full !h-12 !rounded-lg" onClick={handleBack}>
                  Back
               </Button>
               <span className="text-[0.75rem] text-[#2F2F2F] flex items-center pb-2">
                  Powered by
                  <img src={gridlinesText} alt="logo" className="w-20 h-6 ml-1" />
               </span>
            </div>
         ) : (
            <div className="flex items-center space-x-2 w-full justify-between">
               <span className="text-[0.75rem] text-[#2F2F2F] flex items-center">
                  Powered by
                  <img src={gridlinesText} alt="logo" className="w-20 h-6 ml-1" />
               </span>
               <Button type="primary" onClick={handleBack}>
                  Back
               </Button>
            </div>
         )}
      </div>
   );
};

export default CardFooter;

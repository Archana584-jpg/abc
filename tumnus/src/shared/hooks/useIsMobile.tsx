import useWindowDimensions from "@/utils/windowDimensionsCustomHook";
import { useEffect, useState } from "react";

const useIsMobile = () => {
   const { width } = useWindowDimensions();
   const [isMobile, setIsMobile] = useState<boolean>(false);
   useEffect(() => {
      if (width < 720) setIsMobile(true);
      else setIsMobile(false);
   }, [width]);
   return isMobile;
};

export default useIsMobile;

import React, { useEffect, useState } from "react";
import { DemoComponent } from "../components";
import { useRouter } from "next/router";
import { contactSupportHubSpotUrl, gtmId } from "../../../utils/config";
import useIsMobile from "@/shared/hooks/useIsMobile";
import GTMScript from "@/shared/hooks/useGTMScript";

const Demo = () => {
   const isMobile = useIsMobile();
   const router = useRouter();
   const { asPath } = router;
   const queryParams = asPath.split("?")[1];
   const hubSpotFormUrl = `${contactSupportHubSpotUrl}?${queryParams || ""}`;
   const [scrollToBottomVisiblility, setScrollToBottomVisiblility] = useState<boolean>(true);

   useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
   }, []);

   const listenToScroll = () => {
      const heightToHideFrom = 20;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
         scrollToBottomVisiblility && setScrollToBottomVisiblility(false);
      } else {
         setScrollToBottomVisiblility(true);
      }
   };

   const navigateTo = (route: string) => {
      router.push(route);
   };

   return (
      <>
         <GTMScript gtmId={gtmId} />
         <DemoComponent
            hubSpotFormUrl={hubSpotFormUrl}
            isMobileScreen={isMobile}
            scrollToBottomVisiblility={scrollToBottomVisiblility}
            navigateTo={navigateTo}
         />
      </>
   );
};

export default Demo;

import React from "react";
import { TrustCentreComponent } from "../components";
import { useRouter } from "next/router";
import useIsMobile from "@/shared/hooks/useIsMobile";

const TrustCentre = () => {
   const router = useRouter();
   const isMobile = useIsMobile();
   const navigateTo = (route: string, redirectToExternalLink: boolean) => {
      if (redirectToExternalLink) {
         window.open(route, "_blank");
      } else {
         router.push(route);
      }
   };

   return <TrustCentreComponent navigateTo={navigateTo} isMobileScreen={isMobile} />;
};

export default TrustCentre;

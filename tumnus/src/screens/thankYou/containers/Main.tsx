import React from "react";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { MainComponent } from "../components";

const Main = () => {
   const isMobile = useIsMobile();

   const navigateTo = (route: string) => {
      window.open(route, "_blank");
   };

   return <MainComponent isMobileScreen={isMobile} navigateTo={navigateTo} />;
};

export default Main;

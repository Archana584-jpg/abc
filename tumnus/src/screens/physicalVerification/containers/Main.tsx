import React from "react";
import { MainComponent } from "../components";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { useRouter } from "next/router";

const Main = () => {
   const isMobile = useIsMobile();
   const router = useRouter();

   const navigateTo = (path: string) => {
      router.push(path);
   };

   return <MainComponent isMobileScreen={isMobile} navigateTo={navigateTo} />;
};

export default Main;

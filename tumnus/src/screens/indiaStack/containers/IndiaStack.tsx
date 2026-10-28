import React from "react";
import { IndiaStackComponent } from "../components";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { useRouter } from "next/router";

const IndiaStack = () => {
   const isMobile = useIsMobile();
   const router = useRouter();

   const navigateTo = (path: string) => {
      router.push(path);
   };

   return <IndiaStackComponent isMobileScreen={isMobile} navigateTo={navigateTo} />;
};

export default IndiaStack;

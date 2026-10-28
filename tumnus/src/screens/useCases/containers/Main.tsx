import React, { useState } from "react";
import { MainComponent } from "../components";
import { useRouter } from "next/router";
import { getPathName } from "@/utils/helper";
import useIsMobile from "@/shared/hooks/useIsMobile";

const Main = () => {
   const router = useRouter();
   const isMobileScreen = useIsMobile();
   const [tabKey, setTabKey] = useState<string>("");

   const navigateTo = (path: string) => {
      router.push(path);
   };

   return (
      <MainComponent
         currentPath={getPathName(router?.asPath)}
         navigateTo={navigateTo}
         isMobileScreen={isMobileScreen}
         tabKey={tabKey}
         handleTabKeyChange={setTabKey}
      />
   );
};

export default Main;

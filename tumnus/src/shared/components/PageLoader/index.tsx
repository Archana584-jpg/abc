import { CustomSpinner } from "@/shared";
import { Router } from "next/router";
import { useState } from "react";

const PageLoader = ({ children }: any) => {
   const [isPageLoading, setIsPageLoading] = useState<boolean>(false);
   Router.events.on("routeChangeStart", () => setIsPageLoading(true));
   Router.events.on("routeChangeComplete", () => {
      setIsPageLoading(false);
   });
   return <CustomSpinner loading={isPageLoading}>{children}</CustomSpinner>;
};

export default PageLoader;

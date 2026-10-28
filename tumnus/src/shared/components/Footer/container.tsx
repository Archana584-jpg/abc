import React from "react";
import { useRouter } from "next/router";
import FooterComponent from "./component";
import { externalLinkKeys } from "./constant";
import { useQuery } from "@tanstack/react-query";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { getAllProductsAndCategories } from "@/utils/helper";

const { ABOUT_US, API_DOCS, KNOWLEDGE_BASE, STATUS_PAGE, BLOG, CAREERS } = externalLinkKeys;

const Footer = () => {
   const router = useRouter();
   const isMobile = useIsMobile();
   const { data } = useQuery({
      queryKey: ["navData"],
      queryFn: getAllProductsAndCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const products = data?.products;
   const allProducts = Object.values({ ...((products?.data || {}).productByKey || {}) });

   const redirectToScreen = (route: string, key: string | undefined) => {
      if (key === "customerSupport") {
         (window as any).FreshworksWidget("open");
      } else if ([ABOUT_US, API_DOCS, KNOWLEDGE_BASE, STATUS_PAGE, BLOG, CAREERS].indexOf(key || "") > -1) {
         window.open(route, "_blank");
      } else {
         router.push(route);
      }
   };

   return (
      <FooterComponent
         handleScreenRedirect={redirectToScreen}
         products={allProducts}
         isMobileScreen={isMobile}
         currentPath={router.asPath}
      />
   );
};

export default Footer;

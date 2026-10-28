import React, { useEffect, useState } from "react";
import { CCRVComponent } from "../components";
import { useRouter } from "next/router";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/utils/api";
import { getAllProductsAndCategories } from "@/utils/helper";

const CCRV = () => {
   const router = useRouter();
   const isMobile = useIsMobile();
   const [scrollToBottomVisiblility, setScrollToBottomVisiblility] = useState<boolean>(true);

   const { data: navData } = useQuery({
      queryKey: ["navData"],
      queryFn: getAllProductsAndCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const products = navData?.products;
   const id = products?.data?.productByKey["ccrv-api" as string]?.id;
   const { data: productById } = useQuery({
      queryKey: [`${id}`],
      queryFn: () => getProductById(id),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });

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

   const navigateTo = (route: string, redirectToExternalLink: boolean) => {
      if (redirectToExternalLink) {
         window.open(route, "_blank");
      } else {
         router.push(route);
      }
   };

   return (
      <CCRVComponent
         isMobileScreen={isMobile}
         scrollToBottomVisiblility={scrollToBottomVisiblility}
         navigateTo={navigateTo}
         product={productById?.data}
      />
   );
};

export default CCRV;

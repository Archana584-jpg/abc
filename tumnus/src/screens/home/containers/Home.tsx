import React, { useEffect, useState } from "react";
import { HomeComponent } from "../components";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsAndCategories } from "@/utils/helper";
import { useRouter } from "next/router";
import useIsMobile from "@/shared/hooks/useIsMobile";

const Home = () => {
   const router = useRouter();
   const { data } = useQuery({
      queryKey: ["navData"],
      queryFn: getAllProductsAndCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const categories = data?.categories;

   const [scrollToBottomVisiblility, setScrollToBottomVisiblility] = useState<boolean>(true);
   const isMobile = useIsMobile();
   useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
   }, []);

   const listenToScroll = () => {
      const heightToHideFrom = 10;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
         scrollToBottomVisiblility && setScrollToBottomVisiblility(false);
      } else {
         setScrollToBottomVisiblility(true);
      }
   };

   const navigateTo = (url: string, externalLink: boolean, id?: string) => {
      if (externalLink) {
         window.open(url, "_blank");
      } else if (id) {
         router.push({ pathname: url, query: { categoryId: id } });
      } else {
         router.push({ pathname: url });
      }
   };
   return (
      <HomeComponent
         isMobileScreen={isMobile}
         scrollToBottomVisiblility={scrollToBottomVisiblility}
         navigateTo={navigateTo}
         categories={(categories || {}).list || []}
      />
   );
};

export default Home;

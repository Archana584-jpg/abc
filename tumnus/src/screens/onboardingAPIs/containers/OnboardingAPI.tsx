import useIsMobile from "@/shared/hooks/useIsMobile";
import { getAllProductsAndCategories } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import OnboardingAPIsComponent from "../components";

const OnboardingAPIs = () => {
   const router = useRouter();
   const [categoryId, setCategoryId] = useState<string>("");

   const { data } = useQuery({
      queryKey: ["navData"],
      queryFn: getAllProductsAndCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const categories = data?.categories;
   const products = data?.products;

   const isMobile = useIsMobile();

   useEffect(() => {
      const { categoryId } = router.query;
      const productCategoryId = categoryId || categories?.list?.[0]?.id || "";
      setCategoryId(productCategoryId);
   }, [categories]);

   const navigateTo = (url: string) => {
      router.push(url);
   };

   return (
      <OnboardingAPIsComponent
         handleChangeCategoryId={setCategoryId}
         isMobileScreen={isMobile}
         navigateTo={navigateTo}
         categories={(categories || {}).list || []}
         categoryId={categoryId}
         productsByCategoryId={((products?.data || {}).productByCategoryId || {})[categoryId]}
      />
   );
};

export default OnboardingAPIs;

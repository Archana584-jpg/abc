import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "@/shared/hooks/useIsMobile";
import UnderwritingAPIsComponent from "../components";
import { getAllProductsAndCategories } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";

const UnderwritingAPIs = () => {
   const router = useRouter();
   const isMobile = useIsMobile();
   const [categoryId, setCategoryId] = useState<string>("");
   const { data } = useQuery({
      queryKey: ["navData"],
      queryFn: getAllProductsAndCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const categories = data?.categories;
   const products = data?.products;

   useEffect(() => {
      const { categoryId } = router.query;
      const productCategoryId = categoryId || categories?.list?.[0]?.id || "";
      setCategoryId(productCategoryId);
   }, [categories]);

   const navigateTo = (route: string) => {
      router.push(route);
   };

   return (
      <UnderwritingAPIsComponent
         productsByCategoryId={((products?.data || {}).productByCategoryId || {})[categoryId]}
         handleChangeCategoryId={setCategoryId}
         navigateTo={navigateTo}
         categories={categories?.list}
         categoryId={categoryId}
         isMobileScreen={isMobile}
      />
   );
};

export default UnderwritingAPIs;

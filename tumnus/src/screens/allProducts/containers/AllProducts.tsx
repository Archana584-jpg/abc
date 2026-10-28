import React, { useEffect, useState } from "react";
import { AllProductsComponent } from "../components";
import { resourceOptions } from "@/shared/constants";
import { renderAutoCompleteOptions } from "../constants";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/utils/api";
import { getAllProductsAndCategories } from "@/utils/helper";

import useIsMobile from "@/shared/hooks/useIsMobile";
import { handleProductSearch } from "./helper";

const AllProducts = () => {
   const router = useRouter();
   const isMobile = useIsMobile();
   const [categoryId, setCategoryId] = useState<string>("");
   const [searchProduct, setSearchProduct] = useState<string>("");
   const [searchedProducts, setSearchedProducts] = useState<any>([]);
   const [autoCompleteOptions, setAutoCompleteOptions] = useState<string[]>([]);
   const [searchedProductsLoading, setSearchedProductsLoading] = useState<boolean>(false);
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

   useEffect(() => {
      const data = handleProductSearch(searchedProducts?.data, products?.data?.productGroupsData, categories);
      setAutoCompleteOptions(renderAutoCompleteOptions(data, navigateTo));
   }, [searchedProducts.data]);

   const onSearchProduct = async (value: string) => {
      setSearchProduct(value);
      if (value.length >= 2) {
         setSearchedProductsLoading(true);
         const data = await getProduct({ keyword: value, resource: resourceOptions.PRODUCT });
         setSearchedProductsLoading(false);
         setSearchedProducts(data);
      }
   };

   const navigateTo = (route: string) => {
      router.push(route);
   };

   return (
      <AllProductsComponent
         productsByCategoryId={((products?.data || {}).productByCategoryId || {})[categoryId]}
         handleChangeCategoryId={setCategoryId}
         navigateTo={navigateTo}
         categories={categories?.list}
         categoryId={categoryId}
         onSearchProduct={onSearchProduct}
         searchedProduct={searchProduct}
         autoCompleteOptions={autoCompleteOptions}
         loading={searchedProductsLoading}
         isMobileScreen={isMobile}
      />
   );
};

export default AllProducts;

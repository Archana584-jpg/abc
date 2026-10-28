import React, { useEffect, useState } from "react";
import { getAllProductsAndCategories, getPathName } from "@/utils/helper";
import { ProductComponent } from "../components";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/utils/api";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { routingPathKeys } from "@/shared/components/Header/constants";
import { IProductContentProps } from "../interfaces";

interface IProductsContentProps {
   productContent: IProductContentProps;
}

const Product = ({ productContent }: IProductsContentProps) => {
   const router = useRouter();
   const {
      query: { key },
   } = router;
   const { data: navData } = useQuery({
      queryKey: ["navData"],
      queryFn: getAllProductsAndCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const products = navData?.products;
   const id = products?.data?.productByKey[key as string]?.id;
   const { data: productById } = useQuery({
      queryKey: [`${id}`],
      queryFn: () => getProductById(id),
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const isMobile = useIsMobile();

   const [selectedOfferingIndex, setSelectedOfferingIndex] = useState<number>(1);
   const [salesIconVisibility, setSalesIconVisibility] = useState<boolean>(false);

   useEffect(() => {
      setSelectedOfferingIndex(1);
   }, []);
   useEffect(() => {
      const pathname = getPathName(router.asPath);
      setSelectedOfferingIndex(1);
      if (pathname === "ccrv-api") router.push(`/products/${routingPathKeys.CCRV}`);
   }, [router.asPath]);

   const handleSelectedOfferingIndex = (index: number) => {
      setSelectedOfferingIndex(index);
   };

   const handleChangeRedirect = (route: string) => {
      router.push(route);
   };

   return (
      <ProductComponent
         product={productById?.data}
         handleSelectedOfferingIndex={handleSelectedOfferingIndex}
         selectedOfferingIndex={selectedOfferingIndex}
         salesIconVisibility={salesIconVisibility}
         handleChangeSalesIconVisibility={setSalesIconVisibility}
         handleChangeRedirect={handleChangeRedirect}
         isMobileScreen={isMobile}
         productContent={productContent}
      />
   );
};

export default Product;

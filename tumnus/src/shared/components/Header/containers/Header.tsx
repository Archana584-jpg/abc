import React, { useState, useEffect } from "react";
import { CustomHeaderComponent, CutomMobileHeaderComponent } from "../components";
import { routingPathKeys } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { getAllProductsAndCategories } from "@/utils/helper";

interface Category {
   id: string;
   name: string;
}

interface Product {
   data: {
      productByKey: Record<string, any>;
   };
}

const CustomHeader = () => {
   const [productsMenuExpansion, setProductsMenuExpansion] = useState(false);
   const [supportMenuExpansion, setSupportMenuExpansion] = useState(false);
   const [solutionsMenuExpansion, setSolutionsMenuExpansion] = useState(false);
   const [useCasesMenuExpansion, setUseCasesMenuExpansion] = useState(false);
   const [isMobileNavCardExpanded, setMobileNavCardExpanded] = useState(false);
   const [menuItems, setMenuItems] = useState<{ label: string; name: string }[]>([]);
   const router = useRouter();
   const isMobile = useIsMobile();
   const { data } = useQuery({
      queryKey: ["navData"],
      queryFn: getAllProductsAndCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
   });
   const categories = data?.categories;
   const products = data?.products;

   const productsByKey = (products?.data || {}).productByKey || {};

   useEffect(() => {
      setMenuItems(
         (categories?.list || []).map((item: Category) => ({
            label: item.name,
            name: item.id,
         }))
      );
   }, [categories]);
   const redirectToScreen = (route: string, key: string) => {
      const {
         Home,
         TrustCentre,
         CCRV,
         IndiaStack,
         INSURANCE,
         BANKING,
         LENDING,
         GAMING,
         LOGISTICS,
         ONBOARDING,
         FINTECH,
         PAYMENT,
         PHYSICAL_VERIFICATION,
         PRODUCTS,
         FINTECH_APIS_STARTUPS,
         ONBOARDING_APIS,
         VIDEO_KYC,
         UNDERWRITING_APIS,
      } = routingPathKeys;
      if (
         [
            TrustCentre,
            Home,
            CCRV,
            IndiaStack,
            INSURANCE,
            BANKING,
            LENDING,
            GAMING,
            LOGISTICS,
            ONBOARDING,
            FINTECH,
            PAYMENT,
            PHYSICAL_VERIFICATION,
            PRODUCTS,
            FINTECH_APIS_STARTUPS,
            ONBOARDING_APIS,
            VIDEO_KYC,
            UNDERWRITING_APIS,
         ].indexOf(key) > -1
      )
         navigateTo(route);
      else if (key === "contactSupport") (window as any).FreshworksWidget("open");
      else window.open(route, "_blank");
   };

   const navigateTo = (route: string) => {
      router.push(route);
   };
   return isMobile ? (
      <CutomMobileHeaderComponent
         navigateTo={navigateTo}
         isMobileNavCardExpanded={isMobileNavCardExpanded}
         handleMobileNavCardExpansion={setMobileNavCardExpanded}
         redirectToScreen={redirectToScreen}
         menuItems={menuItems}
         products={products}
      />
   ) : (
      <CustomHeaderComponent
         productsMenuExpansion={productsMenuExpansion}
         supportMenuExpansion={supportMenuExpansion}
         solutionsMenuExpansion={solutionsMenuExpansion}
         handleChangeProductsMenuExpansion={setProductsMenuExpansion}
         handleChangeSupportMenuExpansion={setSupportMenuExpansion}
         handleChangeSolutionsMenuExpansion={setSolutionsMenuExpansion}
         redirectToScreen={redirectToScreen}
         pathname={router?.pathname}
         menuItems={menuItems}
         products={products}
         categories={categories}
         handleChangeUseCasesMenuExpansion={setUseCasesMenuExpansion}
         useCasesMenuExpansion={useCasesMenuExpansion}
         currentPath={router?.asPath}
      />
   );
};

export default CustomHeader;

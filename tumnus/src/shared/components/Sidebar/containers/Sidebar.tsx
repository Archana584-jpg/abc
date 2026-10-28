import React, { useState } from "react";
import CustomSideBarComponent from "../components";
import { useRouter } from "next/router";
interface SidebarProps {
   handleChangeProductsMenuExpansion: (expanded: boolean) => void;
   menuItems: { label: string; name: string }[];
   products: any;
}

const CustomSidebar = ({ handleChangeProductsMenuExpansion, menuItems, products }: SidebarProps) => {
   const [selectedMenu, setSelectedMenu] = useState<string>("allProducts");
   const [visibleIcon, setVisibleIcon] = useState<boolean>(false);
   const router = useRouter();
   const productsByKey = (products?.data || {}).productByKey || {};

   const navigateTo = (route: string) => {
      router.push(route);
   };
   const productsByCategoryMenu: {
      [key: string]: any[];
   } = {
      allProducts: Object.values({ ...productsByKey }),
      ...products?.data?.productByCategoryId,
   };
   return (
      <CustomSideBarComponent
         menuItems={menuItems}
         productMenuItem={productsByCategoryMenu[selectedMenu]}
         selectedMenu={selectedMenu}
         navigateTo={navigateTo}
         handleChangeMenu={setSelectedMenu}
         visibleIcon={visibleIcon}
         handleChangeVisibleIcon={setVisibleIcon}
         handleChangeProductsMenuExpansion={handleChangeProductsMenuExpansion}
         currentPath={router?.asPath}
      />
   );
};

export default CustomSidebar;

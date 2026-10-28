import { message } from "antd";
import { getCategories, getProductByCategoryId } from "@/utils/api";
import { isEmpty, sortBy } from "lodash";
import { resourceOptions } from "../shared/constants";
export const getPathName = (pathname: string): string => {
   let paths = pathname.split("/");
   let path = paths[paths.length - 1];
   return path;
};
export const getHierarchyPathname = (pathname: string) => {
   let paths = pathname.split("/");
   let path = paths[1] || "";
   return path;
};

export const errorhandling = (error: any) => {
   if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      !error.response.data.error.metadata &&
      error.response.data.error.message
   ) {
      message.error(error.response.data.error.message);
   }
};
export const redirectToPortalOnMobileWarning = () => message.info("Use your laptop or PC to Sign Up and Log In");

export const redirectToNewTabExternalLink = (url: any) => window.open(url, "_blank");
export const getAllProductsAndCategories = async () => {
   const categories: any = await getCategories();
   let products: any;
   if (!isEmpty(categories.list)) {
      products = {
         data: await getProductByCategoryId({
            category_ids: (categories.list || []).map((item: any) => item.id),
            resource: resourceOptions.PRODUCT,
         }),
      };
   }
   return {
      categories,
      products,
   };
};

export const getProductObject = async (products: any, productGroups: any, categories: any) => {
   const productResponse: any = [];
   const categoryById = categories.reduce((obj: any, category: any) => {
      obj[category.id] = category;
      return obj;
   }, {});
   (productGroups || []).forEach((group: any) => {
      if (["pan-api", "aadhaar-api", "gstin-api", "epfo-api"].includes(group.key)) return; //this is for removing the PAN/AADHAAR/GSTIN/EPFO product groups
      const offerings = (products || []).filter((product: any) => product.product_group_ids.includes(group.id));
      const categories: any = [];
      ((offerings[0] || {}).product_category_ids || []).forEach((id: string) => categories.push(categoryById[id]));
      productResponse.push({ ...group, offerings: offerings, categories: categories });
   });

   return sortBy(
      productResponse.filter((item: any) => item.offerings.length > 0),
      "priority"
   );
};

import axios from "axios";
import { baseURL, gridlinesMetaContentUrl, portal, gridlinesProductContentUrl, finttechApisStartupUrl } from "./config";
import { errorhandling, getProductObject } from "./helper";
import { sortBy } from "lodash";

export const getCategories = async () => {
   try {
      const res = await axios.post(`${baseURL}/${portal}/public/product-categories`, {});
      return Promise.resolve({ list: res?.data?.data?.entities });
   } catch (error) {
      errorhandling(error);
   }
};

export const getProducts = async () => {
   try {
      const res = await axios.post(`${baseURL}/${portal}/public/products`, {});
      return Promise.resolve(res?.data?.data?.entities);
   } catch (error) {
      errorhandling(error);
   }
};

export const getProductGroups = async () => {
   try {
      const productGroupResponse = await axios.post(`${baseURL}/${portal}/public/product-groups`, {});
      return Promise.resolve(productGroupResponse?.data?.data?.entities);
   } catch (error) {
      errorhandling(error);
   }
};

export const getProductByCategoryId = async (body: any) => {
   const categoriesResponse = await getCategories();
   const categories = categoriesResponse?.list;

   const productsData = await getProducts();
   const productGroupsData = await getProductGroups();
   const data = await getProductObject(sortBy(productsData || [], "priority"), productGroupsData, categories);

   const productByCategoryId: Record<string, any[]> = {};
   const productByKey: Record<string, any> = {};
   const productById: Record<string, any> = {};

   data.forEach((item: any) => {
      productByKey[item.key] = item;
      productById[item.id] = item;
      (item.categories || []).forEach((category: any) => {
         if (productByCategoryId[category.id]) {
            productByCategoryId[category.id] = [...productByCategoryId[category.id], item];
         } else {
            productByCategoryId[category.id] = [item];
         }
      });
   });
   return Promise.resolve({
      productByCategoryId: productByCategoryId,
      productByKey: productByKey,
      productById: productById,
      productGroupsData: productGroupsData || [],
   });
};

export const getProductById = async (id: any) => {
   try {
      const data = await getProductByCategoryId({});
      return Promise.resolve({ data: data?.productById[id] || {} });
   } catch (error) {
      errorhandling(error);
   }
};

export const getProduct = async (body: any) => {
   try {
      const res = await axios.post(`${baseURL}/${portal}/public/products`, body);
      return Promise.resolve({ data: res?.data?.data?.entities || [] });
   } catch (error) {
      errorhandling(error);
   }
};

export const getMetaContent = async (page: string) => {
   try {
      const res = await axios.get(gridlinesMetaContentUrl);
      return Promise.resolve(res.data?.[page] ?? {});
   } catch (error) {
      errorhandling(error);
   }
};

export const getProductContent = async (page: string) => {
   try {
      const res = await axios.get(gridlinesProductContentUrl);
      return Promise.resolve(res.data?.[page] ?? {});
   } catch (error) {
      errorhandling(error);
   }
};

export const getFintechPageContent = async () => {
   try {
      const res = await axios.get(finttechApisStartupUrl);
      return Promise.resolve(res.data ?? {});
   } catch (error) {
      errorhandling(error);
   }
};

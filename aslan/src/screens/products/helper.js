import { sortBy } from "lodash";
import { dispatch } from "store/store";

export const handleProductSearch = (products, productGroups, categories) => {
   const searchedProducts = [];
   const isProductGroupExist = {};

   (products.entities || []).forEach((product) => {
      const productGroupIds = product.product_group_ids;

      productGroupIds.forEach((productGroupId) => {
         const productGroup = (productGroups.data.entities || []).find((group) => group.id === productGroupId);
         const productCategories = ((product || {}).product_category_ids || []).map((categoryId) =>
            (categories.list || []).find((category) => category.id === categoryId)
         );

         if (!isProductGroupExist[productGroupId]) {
            isProductGroupExist[productGroupId] = true;

            searchedProducts.push({
               ...productGroup,
               categories: productCategories,
            });
         }
      });
   });

   return searchedProducts;
};

export const getProductByCategoryId = (products, productGroups, categories) => {
   const productResponse = [];
   const categoryById = {};
   ((categories || {}).list || []).forEach((category) => (categoryById[category.id] = category));
   (((productGroups || {}).data || {}).entities || []).forEach((group) => {
      const offerings = ((products || {}).entities || []).filter((product) =>
         product.product_group_ids?.includes(group.id)
      );
      const categories = [];
      ((offerings[0] || {}).product_category_ids || []).forEach((id) => categories.push(categoryById[id]));
      productResponse.push({ ...group, offerings: offerings, categories: categories });
   });
   dispatch({ type: "GET_PRODUCT_BY_CATEGORY_ID_SUCCESS", data: sortBy(productResponse, "priority") });
};

export const getProductById = (products, productGroups, categories, groupId) => {
   dispatch({ type: "GET_PRODUCT_BY_ID_LOADING" });
   const searchedGroupCategories = [];
   const categoryById = {};
   ((categories || {}).list || []).forEach((category) => (categoryById[category.id] = category));
   const searchedGroup = (((productGroups || {}).data || {}).entities || []).find((group) => group.id === groupId);
   const offerings = ((products || {}).entities || []).filter((product) =>
      product.product_group_ids.includes(searchedGroup.id)
   );
   const sortedOfferings = sortBy(offerings, "priority");
   ((offerings[0] || {}).product_category_ids || []).forEach((id) => searchedGroupCategories.push(categoryById[id]));
   dispatch({
      type: "GET_PRODUCT_BY_ID_SUCCESS",
      data: { ...searchedGroup, offerings: sortedOfferings, categories: searchedGroupCategories },
   });
};

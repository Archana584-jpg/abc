export const handleProductSearch = (products: any, productGroups: any, categories: any) => {
   const searchedProducts: any = [];
   const isProductGroupExist: any = {};

   const newProductGroups = productGroups.filter(
      (item: any) => !["pan-api", "aadhaar-api", "gstin-api", "epfo-api"].includes(item.key)
   ); //this is for removing the PAN/AADHAAR/GSTIN/EPFO product groups

   (products || []).forEach((product: any) => {
      const productGroupIds = product.product_group_ids;

      productGroupIds.forEach((productGroupId: any) => {
         const productGroup = (newProductGroups || []).find((group: any) => group.id === productGroupId);
         if (!productGroup) return;
         const productCategories = ((product || {}).product_category_ids || []).map((categoryId: any) =>
            (categories.list || []).find((category: any) => category.id === categoryId)
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

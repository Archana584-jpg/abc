import LayoutComponent from "@/layout";
import { Product } from "@/screens";
import { resourceOptions } from "@/shared/constants";
import { getCategories, getMetaContent, getProductByCategoryId, getProductById, getProductContent } from "@/utils/api";
import { getAllProductsAndCategories } from "@/utils/helper";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ISEOMetaContent } from "@/shared/interfaces";
import { isEmpty } from "lodash";
import { IProductContentProps } from "@/screens/products/interfaces";

interface IProductProps {
   seoMetaContent: ISEOMetaContent;
   productContent: IProductContentProps;
}

const ProductPage = ({ seoMetaContent, productContent }: IProductProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <Product productContent={productContent} />
      </LayoutComponent>
   );
};

export async function getStaticPaths() {
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
   const paths = Object.values(products?.data?.productByKey).map((item: any) => ({
      params: { key: item.key },
   }));
   return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
   try {
      const queryClient = new QueryClient();
      const { categories, products } = await getAllProductsAndCategories();
      const seoMetaContent = await getMetaContent(params.key);
      const productContent = await getProductContent(params.key);
      const id = products?.data?.productByKey[params.key]?.id;
      await queryClient.prefetchQuery({
         queryKey: [`${id}`],
         queryFn: () => getProductById(id),
         staleTime: 500,
         retry: 2,
      });
      queryClient.setQueryData(["navData"], { categories, products });
      return {
         props: {
            dehydratedState: dehydrate(queryClient),
            seoMetaContent: seoMetaContent,
            productContent: productContent,
            dataError: false,
         },
         revalidate: 10,
      };
   } catch (error) {
      return {
         props: {
            dehydratedState: {},
            seoMetaContent: {},
            productContent: {},
            dataError: true,
         },
         revalidate: 10,
      };
   }
}

export default ProductPage;

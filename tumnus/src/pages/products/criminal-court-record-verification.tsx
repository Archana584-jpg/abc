import { CCRV } from "@/screens";
import { getMetaContent, getProductById } from "@/utils/api";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAllProductsAndCategories } from "@/utils/helper";
import LayoutComponent from "@/layout";
import { ISEOMetaContent } from "@/shared/interfaces";

interface ICCRVProps {
   seoMetaContent: ISEOMetaContent;
}

const CCRVPage = ({ seoMetaContent }: ICCRVProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <CCRV />
      </LayoutComponent>
   );
};

export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const { categories, products } = await getAllProductsAndCategories();
      const seoMetaContent = await getMetaContent("ccrv-api");
      const id = products?.data?.productByKey["ccrv-api"]?.id;
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
            dataError: false,
         },
         revalidate: 10,
      };
   } catch (error) {
      return {
         props: {
            dehydratedState: {},
            seoMetaContent: {},
            dataError: true,
         },
         revalidate: 10,
      };
   }
}
export default CCRVPage;

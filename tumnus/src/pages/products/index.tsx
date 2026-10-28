import { AllProducts } from "@/screens";
import { getMetaContent } from "@/utils/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getAllProductsAndCategories } from "@/utils/helper";
import LayoutComponent from "@/layout";
import { ISEOMetaContent } from "@/shared/interfaces";

interface IAllProductsProps {
   seoMetaContent: ISEOMetaContent;
}

const AllProductsPage = ({ seoMetaContent }: IAllProductsProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <AllProducts />
      </LayoutComponent>
   );
};
export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const seoMetaContent = await getMetaContent("products");
      await queryClient.prefetchQuery({
         queryKey: ["navData"],
         queryFn: getAllProductsAndCategories,
         staleTime: 500,
         retry: 2,
      });
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
export default AllProductsPage;

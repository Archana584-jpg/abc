import LayoutComponent from "@/layout";
import { ThankYou } from "@/screens";
import { getMetaContent } from "@/utils/api";
import { getAllProductsAndCategories } from "@/utils/helper";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ISEOMetaContent } from "@/shared/interfaces";

interface IDemoProps {
   seoMetaContent: ISEOMetaContent;
}

const DemoPage = ({ seoMetaContent }: IDemoProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <ThankYou />
      </LayoutComponent>
   );
};
export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const seoMetaContent = await getMetaContent("thank-you");
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
export default DemoPage;

import { TrustCentre } from "@/screens";
import { getMetaContent } from "@/utils/api";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAllProductsAndCategories } from "@/utils/helper";
import LayoutComponent from "@/layout";
import { ISEOMetaContent } from "@/shared/interfaces";

interface ITrustCentreProps {
   seoMetaContent: ISEOMetaContent;
}

const TrustCentrePage = ({ seoMetaContent }: ITrustCentreProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <TrustCentre />
      </LayoutComponent>
   );
};
export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const seoMetaContent = await getMetaContent("trust-centre");
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
export default TrustCentrePage;

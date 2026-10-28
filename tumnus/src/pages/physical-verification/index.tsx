import LayoutComponent from "@/layout";
import { PhysicalVerification } from "@/screens";
import { getMetaContent } from "@/utils/api";
import { getAllProductsAndCategories } from "@/utils/helper";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ISEOMetaContent } from "@/shared/interfaces";

interface IPhysicalVerificationProps {
   seoMetaContent: ISEOMetaContent;
}

const PhysicalVerificationPage = ({ seoMetaContent }: IPhysicalVerificationProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <PhysicalVerification />
      </LayoutComponent>
   );
};
export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const seoMetaContent = await getMetaContent("physical-verification");
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
export default PhysicalVerificationPage;

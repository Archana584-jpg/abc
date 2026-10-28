import LayoutComponent from "@/layout";
import { PrivacyPolicy } from "@/screens";
import { getMetaContent } from "@/utils/api";
import { getAllProductsAndCategories } from "@/utils/helper";
import { ISEOMetaContent } from "@/shared/interfaces";

import { QueryClient, dehydrate } from "@tanstack/react-query";

interface IPrivacyPolicyProps {
   seoMetaContent: ISEOMetaContent;
}

const PrivacyPolicyPage = ({ seoMetaContent }: IPrivacyPolicyProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <PrivacyPolicy />
      </LayoutComponent>
   );
};
export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const seoMetaContent = await getMetaContent("privacy-policy");
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
export default PrivacyPolicyPage;

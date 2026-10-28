import LayoutComponent from "@/layout";
import { FintechAPIsStartups } from "@/screens";
import { getFintechPageContent, getMetaContent } from "@/utils/api";
import { getAllProductsAndCategories } from "@/utils/helper";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ISEOMetaContent } from "@/shared/interfaces";
import { IFintechApisStartupsProps } from "@/screens/fintechAPIsStartups/interfaces";

interface IDemoProps {
   seoMetaContent: ISEOMetaContent;
   fintechAPIsStartupsData: IFintechApisStartupsProps;
}

const DemoPage = ({ seoMetaContent, fintechAPIsStartupsData }: IDemoProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <FintechAPIsStartups fintechAPIsStartupsData={fintechAPIsStartupsData} />
      </LayoutComponent>
   );
};
export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const seoMetaContent = await getMetaContent("fintech-apis-startups");
      const fintechAPIsStartupsData = await getFintechPageContent();
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
            fintechAPIsStartupsData: fintechAPIsStartupsData,
            dataError: false,
         },
         revalidate: 10,
      };
   } catch (error) {
      return {
         props: {
            dehydratedState: {},
            seoMetaContent: {},
            fintechAPIsStartupsData: {},
            dataError: true,
         },
         revalidate: 10,
      };
   }
}
export default DemoPage;

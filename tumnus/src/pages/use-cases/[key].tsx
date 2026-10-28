import LayoutComponent from "@/layout";
import { UseCases } from "@/screens";
import { getMetaContent } from "@/utils/api";
import { ISEOMetaContent } from "@/shared/interfaces";
import { useCasesScreenPathKey } from "@/screens/useCases/constants";

interface IProductProps {
   seoMetaContent: ISEOMetaContent;
}

const UseCasesPage = ({ seoMetaContent }: IProductProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <UseCases />
      </LayoutComponent>
   );
};

export async function getStaticPaths() {
   const paths = Object.values(useCasesScreenPathKey || {}).map((item: any) => ({
      params: { key: item },
   }));
   return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
   try {
      const seoMetaContent = await getMetaContent(params.key);
      return {
         props: {
            dehydratedState: {},
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

export default UseCasesPage;

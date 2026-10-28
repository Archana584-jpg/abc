import React from "react";
import { getMetaContent } from "@/utils/api";
import { Home } from "@/screens";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getAllProductsAndCategories } from "@/utils/helper";
import LayoutComponent from "@/layout";
import { ISEOMetaContent } from "@/shared/interfaces";

interface IHomeProps {
   seoMetaContent: ISEOMetaContent;
}

const Index = ({ seoMetaContent }: IHomeProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent}>
         <Home />
      </LayoutComponent>
   );
};

export default Index;

export async function getStaticProps() {
   try {
      const queryClient = new QueryClient();
      const seoMetaContent = await getMetaContent("home");
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

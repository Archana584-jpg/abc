import Head from "next/head";
import { ReactNode } from "react";
import { Layout } from "antd";
import { CustomFooter, CustomHeader, PageLoader } from "@/shared";
const { Content } = Layout;
import { metaContent } from "@/shared/constants";
import { s3BucketUrl } from "@/utils/config";

interface PageWrapperProps {
   children?: ReactNode;
   seoMetaContent?: any;
   isheaderHidden?: boolean;
   isfooterHidden?: boolean;
}

const LayoutComponent = ({
   children,
   seoMetaContent,
   isheaderHidden = false,
   isfooterHidden = false,
}: PageWrapperProps) => {
   return (
      <>
         <Head>
            <title>{seoMetaContent?.title ?? metaContent.title}</title>
            <meta name="description" content={seoMetaContent?.description ?? metaContent.description} />
            <meta name="keyword" content={seoMetaContent?.keyword ?? metaContent.keyword} />
            <meta
               name="og:image"
               content={
                  (seoMetaContent || {}).image_path
                     ? `${s3BucketUrl}${seoMetaContent.image_path}`
                     : metaContent.image_path
               }
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={"/images/favicon.ico"} />
         </Head>
         <main className="flex min-h-screen flex-col justify-between">
            <Layout>
               {!isheaderHidden && <CustomHeader />}
               <PageLoader>
                  <Content className={`min-h-screen${!isheaderHidden ? "pt-16" : ""}`}>
                     <div>{children}</div>
                  </Content>
               </PageLoader>
               {!isfooterHidden && <CustomFooter />}
            </Layout>
         </main>
      </>
   );
};

export default LayoutComponent;

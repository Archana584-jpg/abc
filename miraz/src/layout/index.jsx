import React from "react";
import { Layout } from "antd";
import { DocumentPreview } from "@/screens/documentPreview";
import * as Sentry from "@sentry/react";

const { Content } = Layout;

const LayoutComponent = () => {
   Sentry.init({
      dsn: "https://5a6a4a27f6b3eba2f18ee155d93b5a2e@o528990.ingest.us.sentry.io/4509875261407232",
      integrations: [Sentry.browserTracingIntegration()],
      tracesSampleRate: 1.0,
      normalizeDepth: 1,
      beforeSend: (event, error) => {
         const chunkFailedMessage = /Loading chunk [\d]+ failed/;
         const isChunkLoadError = chunkFailedMessage.test(error?.originalException?.message);
         if (import.meta.env.MODE === "production" && !isChunkLoadError) {
            return event;
         }
         return null;
      },
      sendDefaultPii: true,
   });
   return (
      <Layout className="!min-h-screen !bg-[#F6F6F6]">
         <Content>
            <DocumentPreview />
         </Content>
      </Layout>
   );
};

export default LayoutComponent;

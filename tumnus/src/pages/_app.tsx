import "@/styles/globals.css";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withTheme from "@/assets/theme";
import Script from "next/script";
import type { AppProps } from "next/app";
import "./index.css";
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>{withTheme(<Component {...pageProps} />)}</Hydrate>
            <Script id={"freshDeskWidgetScript"}>
               {`
    window.fwSettings={
      'widget_id':36000001161,
      'locale': 'en'
    };
    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=     [],window.FreshworksWidget=n}}()`}
            </Script>
            <Script type="text/javascript" src="https://widget.freshworks.com/widgets/36000001161.js" async defer />
            <Script id="GA-tag" async src="https://www.googletagmanager.com/gtag/js?id=G-HDNJ69KFR4"></Script>
            <Script id="GA-tag-code">
               {`
               if (window.location.hostname === "gridlines.io") 
               {
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                     dataLayer.push(arguments);
                  }
                  gtag("js", new Date());
                  gtag("config", "G-HDNJ69KFR4");
               }`}
            </Script>

            <Script id="gtm-code">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MZ4S3SC');
            `}</Script>
         </QueryClientProvider>
      </>
   );
};

export default App;

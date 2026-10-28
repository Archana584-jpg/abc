import Public from "layouts/public/loadable";
import Private from "layouts/private/loadable";
import { useState, memo, useEffect } from "react";
import sharedSelector from "shared/selector";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "shared/hooks/useRouter";
import { isEmpty } from "lodash";
import { authorize } from "screens/login/actions";
import * as Sentry from "@sentry/react";
import { showHideSessionExpiryModal } from "shared/actions";

Sentry.init({
   dsn: "https://047909aaca59eefa9e979519f6133388@o528990.ingest.us.sentry.io/4508295209353216",
   integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
   tracesSampleRate: 1.0,
   normalizeDepth: 1,
   beforeSend: (event, error) => {
      const chunkFailedMessage = /Loading chunk [\d]+ failed/;
      const isChunkLoadError = chunkFailedMessage.test(((error || {}).originalException || {}).message);
      if (process.env.NODE_ENV === "production" && !isChunkLoadError) {
         return event;
      }
      return null;
   },
});

const Navigation = () => {
   const dispatch = useDispatch();
   const { searchParams } = useRouter();
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const { tokens } = useSelector(sharedSelector);

   useEffect(() => {
      if (!tokens?.loading) {
         if (!isEmpty(tokens?.data)) {
            dispatch(showHideSessionExpiryModal(false));
            setIsAuthenticated(true);
         } else {
            setIsAuthenticated(false);
         }
      }
   }, [tokens]);

   useEffect(() => {
      const key = searchParams.get("key");
      if (key) {
         dispatch(authorize({ key }));
      }
   }, [searchParams, dispatch]);

   return isAuthenticated ? <Private /> : <Public />;
};

export default memo(Navigation);

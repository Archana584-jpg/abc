import { isEmpty, isEqual } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import PrivateLayout from "../layouts/private/loadable";
import PublicLayout from "../layouts/public/loadable";
import { getCurrentScreenTabName } from "../utils/helper";
import { gridlinesMetaContentUrl } from "../utils/config";
import { withRouter } from "react-router-dom";
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";
import { AlreadyLogoutFromSession } from "../shared";

class Navigation extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isAuthenticated: !isEmpty(props.tokens.data) ? true : false,
         metaContent: {},
      };
   }

   componentDidMount = async () => {
      const response = await fetch(gridlinesMetaContentUrl);
      const metaContent = await response.json();
      this.setState({ metaContent: metaContent });
      this.initSentry();
   };

   componentDidUpdate = (prevProps) => {
      const {
         tokens,
         location: { pathname },
         products,
      } = this.props;
      const { metaContent } = this.state;

      if (!isEqual(prevProps.tokens.data, tokens.data)) {
         if (isEmpty(tokens.data)) this.setState({ isAuthenticated: false });
         else this.setState({ isAuthenticated: true });
      }
      if (prevProps.pathname !== pathname) {
         document.title = getCurrentScreenTabName(pathname, products, metaContent);
         window.scrollTo(0, 0);
      }
   };

   initSentry = () => {
      Sentry.init({
         dsn: "https://fbcc54e04f64418c9c65fdb0abe630e9@o528990.ingest.sentry.io/4504886618750976",
         integrations: [new BrowserTracing()],
         tracesSampleRate: 1,
         beforeSend: (event, error) => {
            const chunkFailedMessage = /Loading chunk [\d]+ failed/;
            const isChunkLoadError = chunkFailedMessage.test(error?.originalException?.message);
            if (window.location.hostname === "gridlines.io" && !isChunkLoadError) {
               return event;
            }
            return null;
         },
      });
   };

   render() {
      const { isAuthenticated } = this.state;
      return (
         <>
            <AlreadyLogoutFromSession />
            {isAuthenticated ? <PrivateLayout /> : <PublicLayout />}
         </>
      );
   }
}

const mapStateToProps = ({ auth: { tokens }, products }) => ({
   tokens,
   products,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));

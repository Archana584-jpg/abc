import { memo, useEffect } from "react";
import { ConfigProvider, message } from "antd";
import { theme } from "assets/theme";
import { PrivateComponent } from "../components";
import { isEmpty } from "lodash";
import { refreshToken } from "shared/actions";
import { logoutSuccess } from "screens/login/actions";
import { useDispatch, useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import { useRouter } from "shared/hooks/useRouter";
import { routeCollectionMap } from "navigation/routes";

const Private = () => {
   const dispatch = useDispatch();
   const { navigateTo } = useRouter();
   const { tokens } = useSelector(sharedSelector);

   useEffect(() => {
      const intervalId = setInterval(() => {
         if (isEmpty(tokens?.data)) {
            navigateTo(routeCollectionMap.DEFAULT);
         } else {
            if (tokens?.data.refresh_expires_in && tokens?.data.refresh_expires_in <= Date.now() + 60 * 1000) {
               dispatch(logoutSuccess());
               message.error("Session Expired");
            } else if (tokens?.data.expires_in && tokens?.data.expires_in <= Date.now() + 60 * 1000) {
               dispatch(refreshToken({ refresh_token: tokens?.data?.refresh_token }));
            }
         }
      }, 1000);

      return () => {
         clearInterval(intervalId);
      };
   }, [tokens?.data]);

   return (
      <ConfigProvider theme={theme}>
         <PrivateComponent />
      </ConfigProvider>
   );
};

export default memo(Private);

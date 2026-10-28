import { memo, useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { theme } from "assets/theme";
import { PrivateComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import { cloneDeep, isEmpty } from "lodash";
import { refreshToken, showHideSessionExpiryModal } from "shared/actions";
import { fetchApplicationById } from "screens/node_new/actions";
import nodeSelector from "screens/node_new/selector";
import { SessionExpiredModal } from "shared/components";
import { oldVersionWorkflowId } from "../constants";

const Private = () => {
   const dispatch = useDispatch();
   const { tokens, applicationId } = useSelector(sharedSelector);
   const { applicationById } = useSelector(nodeSelector);
   const [currentTheme, setCurrentTheme] = useState(theme);

   useEffect(() => {
      if (!isEmpty(tokens?.data) && applicationId && isEmpty(applicationById.data)) {
         dispatch(fetchApplicationById({ applicationId }));
      }
   }, [tokens, applicationId, dispatch, applicationById.data]);

   useEffect(() => {
      const intervalId = setInterval(() => {
         if (isEmpty(tokens?.data)) {
            dispatch(showHideSessionExpiryModal(true));
         } else {
            if (tokens?.data.refresh_expires_in && tokens?.data.refresh_expires_in <= Date.now() + 60 * 1000) {
               dispatch(showHideSessionExpiryModal(true));
            } else if (tokens?.data.expires_in && tokens?.data.expires_in <= Date.now() + 60 * 1000) {
               dispatch(refreshToken({ refresh_token: tokens?.data?.refresh_token }));
            }
         }
      }, 1000);

      return () => {
         clearInterval(intervalId);
      };
   }, [tokens?.data]);

   useEffect(() => {
      if (!isEmpty(applicationById?.data)) {
         if (applicationById?.data?.metadata.primary_color) {
            setCurrentTheme({
               ...theme,
               token: {
                  ...theme.token,
                  colorPrimary: applicationById?.data?.metadata.primary_color,
                  colorLink: applicationById?.data?.metadata.primary_color,
               },
            });
         } else {
            setCurrentTheme(cloneDeep(theme));
         }

         if (oldVersionWorkflowId.includes(applicationById.data.workflow_definition_id)) {
            // window.location.href = "/v1";
         }
      }
   }, [applicationById.data]);

   return (
      <ConfigProvider theme={currentTheme}>
         <SessionExpiredModal></SessionExpiredModal>
         <PrivateComponent />
      </ConfigProvider>
   );
};

export default memo(Private);

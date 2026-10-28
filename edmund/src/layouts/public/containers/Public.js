import { ConfigProvider } from "antd";
import { theme } from "assets/theme";
import { PublicComponent } from "../components";
import { useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";

const Public = () => {
   const { applicationTheme } = useSelector(sharedSelector);
   const [currentTheme, setCurrentTheme] = useState({
      ...theme,
      token: {
         ...theme.token,
         colorPrimary: applicationTheme,
         colorLink: applicationTheme,
      },
   });

   useEffect(() => {
      if (applicationTheme) {
         setCurrentTheme({
            ...theme,
            token: {
               ...theme.token,
               colorPrimary: applicationTheme,
               colorLink: applicationTheme,
            },
         });
      } else {
         setCurrentTheme(cloneDeep(theme));
      }
   }, [applicationTheme]);

   return (
      <ConfigProvider theme={currentTheme}>
         <PublicComponent />
      </ConfigProvider>
   );
};

export default Public;

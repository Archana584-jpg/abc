import { ConfigProvider } from "antd";
import { theme } from "assets/theme";
import { PublicComponent } from "../components";
import { useState } from "react";

const Public = () => {
   const [currentTheme, setCurrentTheme] = useState(theme);

   return (
      <ConfigProvider theme={currentTheme}>
         <PublicComponent />
      </ConfigProvider>
   );
};

export default Public;

import React from "react";
import { ConfigProvider } from "antd";
const primary_color = "#3DCCCB";
const withTheme = (node: JSX.Element) => (
   <>
      <ConfigProvider
         theme={{
            token: {
               colorPrimary: primary_color,
               fontFamily: "Poppins",
               borderRadius: 2,
               colorLink: primary_color,
            },
            components: {
               Menu: {
                  itemSelectedBg: "#33cccc3b",
                  itemHoverBg: "transparent",
               },
            },
         }}
      >
         {node}
      </ConfigProvider>
   </>
);

export default withTheme;

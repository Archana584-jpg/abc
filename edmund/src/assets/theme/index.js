export const defaultPrimaryColor = "#33cccc";

export const getTheme = (primaryColor = defaultPrimaryColor) => {
   return {
      token: {
         colorPrimary: primaryColor,
         colorLink: primaryColor,
         fontFamily: "Poppins",
         fontSize: 14,
         borderRadius: 0,
      },
      components: {
         Button: {
            borderRadius: 4,
            controlHeight: 40,
            primaryShadow: "none",
         },
         Input: {
            borderRadius: 4,
            controlHeight: 40,
            algorithm: true,
         },
         Form: {
            marginLG: 20,
            labelFontSize: 14,
            verticalLabelPadding: "0 0 6px",
         },
         Layout: {
            headerPadding: "0 40px",
            headerBg: "#FFF",
         },
         Tabs: {
            colorBorderSecondary: "#D5DCE5",
         },
         Select: {
            borderRadius: 4,
            controlHeight: 40,
         },
         Card: {
            borderRadius: 4,
            // borderRadiusLG: 4,
         },
      },
   };
};

export const theme = {
   token: {
      colorPrimary: defaultPrimaryColor,
      colorLink: defaultPrimaryColor,
      fontFamily: "Poppins",
      fontSize: 14,
   },
   components: {
      Button: {
         borderRadius: 4,
         controlHeight: 40,
         primaryShadow: "none",
      },
      Input: {
         borderRadius: 4,
         borderRadiusLG: 4,
         controlHeight: 40,
      },
      Form: {
         marginLG: 20,
         labelFontSize: 14,
         verticalLabelPadding: "0 0 6px",
      },
      Layout: {
         headerPadding: "0 40px",
         headerBg: "#FFF",
      },
      Tabs: {
         colorBorderSecondary: "#D5DCE5",
      },
      Select: {
         borderRadius: 4,
         borderRadiusLG: 4,
         controlHeight: 40,
      },
      Card: {
         borderRadiusLG: 8,
      },
   },
};

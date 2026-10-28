export const antdTheme = {
   token: {
      // Brand Colors
      colorPrimary: "#33CCCC",
      colorSuccess: "#75DE95",
      colorError: "#ED5F74",
      colorWarning: "#FFA500",

      // Typography
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: 14,

      // Border & Radius
      borderRadius: 6,
      borderRadiusLG: 8,

      // Spacing
      padding: 16,
      paddingLG: 24,

      // Components
      controlHeight: 40,
      controlHeightLG: 48,

      // Shadows
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      boxShadowSecondary: "0 4px 16px rgba(0, 0, 0, 0.1)",
   },
   components: {
      Button: {
         borderRadius: 6,
         fontWeight: 500,
         // Primary button colors
         colorPrimary: "#33CCCC",
         colorPrimaryHover: "#77C7C7",
         colorPrimaryActive: "#2bb3b3",
      },
      Input: {
         borderRadius: 6,
      },
      Checkbox: {
         borderRadius: 4,
         colorPrimary: "#33CCCC",
         colorPrimaryHover: "#77C7C7",
      },
      Typography: {
         colorText: "#2F2F2F",
         colorTextSecondary: "#666666",
      },
   },
};

export default antdTheme;

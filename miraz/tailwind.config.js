/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#1890ff",
            secondary: "#52c41a",
            accent: "#fa8c16",
            neutral: "#595959",
            "base-100": "#ffffff",
            "base-200": "#f5f5f5",
            "base-300": "#e6e6e6",
            error: "#ff4d4f",
            warning: "#faad14",
            info: "#1890ff",
            success: "#52c41a",
         },
         fontFamily: {
            sans: ["Inter", "system-ui", "sans-serif"],
         },
         spacing: {
            18: "4.5rem",
            88: "22rem",
         },
         borderRadius: {
            xl: "1rem",
            "2xl": "1.5rem",
         },
         boxShadow: {
            soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
         },
      },
   },
   plugins: [],
   corePlugins: {
      preflight: false,
   },
};

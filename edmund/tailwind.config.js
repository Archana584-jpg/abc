/** @type {import('tailwindcss').Config} */

import { theme } from "./src/assets/theme";

const brandColor = theme.token.colorPrimary;

module.exports = {
   content: ["./src/**/*.{html,js,jsx}"],
   theme: {
      extend: {
         colors: {
            brandColor: brandColor,
            primary: "#091D3F",
            title: "#2F2F2F",
            subtitle: "#717988",
            disabledTitle: "#BFBFBF",
            insigniaWhite: "#F9FBFD",
            calypsoCoral: "#ED5F74",
            borderSilver: "#CFCFCF",
            whiteSmoke: "#F5F5F5",
            libertyGreen: "#19BB4B",
            snowWhite: "#FAFAFA",
            lavenderMist: "#EAECFA",
         },
         screens: {
            xs: "200px",
         },
      },
   },
};

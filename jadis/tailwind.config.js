/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{html,js,jsx}"],
   theme: {
      extend: {
         colors: {
            text: "#2F2F2F",
            error: "#ED5F74",
            border: "#D3D3D3",
            subText: "#717988",
            primary: "#33cccc",
            success: "#19BB4B",
         },
      },
   },
};

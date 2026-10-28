const CracoLessPlugin = require("craco-less");

module.exports = {
   plugins: [
      {
         plugin: CracoLessPlugin,
         options: {
            lessLoaderOptions: {
               lessOptions: {
                  modifyVars: { "@primary-color": "#33CCCC" },
                  javascriptEnabled: true,
               },
            },
         },
      },
   ],
   style: {
      postcss: {
         plugins: [require("tailwindcss"), require("autoprefixer"), require("./tailwind.config.js")],
      },
   },
};

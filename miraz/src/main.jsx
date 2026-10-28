import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { pdfjs } from "react-pdf";
import "antd/dist/reset.css";
import "./assets/theme/global.css";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import { antdTheme } from "./assets/theme/config/antd.js";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrowserRouter>
         <ConfigProvider theme={antdTheme}>
            <App />
         </ConfigProvider>
      </BrowserRouter>
   </StrictMode>
);

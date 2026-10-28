import { fetchDocumentBlob } from "@/shared/actions";

export const convertPdfToHtmlCoordinates = (pdfCoordinates, pageHeight, pageWidth, scaleFactor = 1) => {
   const { x_coordinate, y_coordinate, width, height } = pdfCoordinates;

   return {
      x: (pageWidth - x_coordinate - width) * scaleFactor,
      y: (pageHeight - y_coordinate - height) * scaleFactor,
      width: width * scaleFactor,
      height: height * scaleFactor,
   };
};

export const unescapeXML = (str) => {
   if (!str) return str;

   try {
      let unescaped = str;
      unescaped = unescaped
         .replace(/\\b/g, "\b")
         .replace(/\\n/g, "\n")
         .replace(/\\t/g, "\t")
         .replace(/\\r/g, "\r")
         .replace(/\\f/g, "\f")
         .replace(/\\"/g, '"')
         .replace(/\\\\/g, "\\");
      return unescaped;
   } catch (error) {
      console.error("Error unescaping XML:", error);
      return str;
   }
};

export const handleBack = ({ getParam, keyMapping }) => {
   const backURL = getParam(keyMapping.CLIENT_URL) || getParam(keyMapping.REDIRECT_URL);
   if (backURL) {
      window.location.href = decodeURL(backURL);
   } else {
      window.history.back();
   }
};

export const handleSuccessRedirect = ({ clientURL, redirectURL, setCurrentView, timeLimit = 5 }) => {
   setCurrentView("success");

   setTimeout(() => {
      const backURL = clientURL || redirectURL;
      if (backURL) {
         window.location.href = decodeURL(backURL);
      } else {
         window.history.back();
      }
   }, timeLimit * 1000);
};

export const handleErrorRedirect = ({
   clientURL,
   redirectURL,
   errorMessage,
   setCurrentView,
   setErrorMessage,
   timeLimit = 5,
}) => {
   setCurrentView("error");
   setErrorMessage(errorMessage);

   setTimeout(() => {
      const backURL = clientURL || redirectURL;
      if (backURL) {
         window.location.href = decodeURL(backURL);
      } else {
         window.history.back();
      }
   }, timeLimit * 1000);
};

export const decodeURL = (URL) => {
   const decodedURL = decodeURIComponent(decodeURIComponent(URL));
   return decodedURL;
};

export const fetchBlob = async (URL) => {
   let blobURL;

   if (URL.startsWith("blob:")) {
      blobURL = URL;
   } else {
      blobURL = await fetchDocumentBlob(URL);
   }
   return blobURL;
};

export const downloadDocument = async (URL, filename = "document") => {
   try {
      const blobURL = await fetchBlob(URL);
      const link = document.createElement("a");
      link.href = blobURL;
      link.download = filename;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   } catch (error) {
      console.error("Error downloading document:", error);
      throw error;
   }
};

export const printBlob = async (URL) => {
   const blobURL = await fetchBlob(URL);
   const iframe = document.createElement("iframe");
   document.body.appendChild(iframe);
   iframe.style.display = "none";
   iframe.src = blobURL;
   iframe.onload = function () {
      setTimeout(() => {
         iframe.contentWindow?.focus();
         iframe.contentWindow?.print();
      }, 1);
   };
};

export const errorMessagehandling = (error) => {
   if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      !error.response.data.error.metadata &&
      error.response.data.error.message
   ) {
      return error.response.data.error.message;
   } else return null;
};

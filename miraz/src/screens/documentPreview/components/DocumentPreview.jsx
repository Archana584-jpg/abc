import React from "react";
import { SuccessCard, ErrorCard } from "@/screens/cards";
import { DocumentWithSignature } from ".";

const DocumentPreview = ({
   pdfBlob,
   esignData,
   handleProcessDocument,
   currentView,
   errorMessage,
   handleBack,
   consentChecked,
   numPages,
   handleChange,
   successMessage,
   s3PresignedURL,
}) => {
   switch (currentView) {
      case "preview":
         return pdfBlob ? (
            <DocumentWithSignature
               pdfBlob={pdfBlob}
               esignData={esignData}
               handleProcessDocument={handleProcessDocument}
               consentChecked={consentChecked}
               numPages={numPages}
               handleChange={handleChange}
               handleBack={handleBack}
            />
         ) : null;
      case "success":
         return <SuccessCard onBack={() => handleBack()} message={successMessage} s3PresignedURL={s3PresignedURL} />;
      case "error":
         return <ErrorCard onBack={() => handleBack()} message={errorMessage} />;
      default:
         return null;
   }
};

export default DocumentPreview;

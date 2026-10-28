import React, { useEffect, useState, useCallback } from "react";
import { DocumentPreview } from "@/screens/documentPreview/components";
import { previewDocument, processDocument } from "../actions";
import {
   handleErrorRedirect,
   handleSuccessRedirect,
   handleBack,
   decodeURL,
   errorMessagehandling,
} from "@/utils/helper";
import { CustomSpinner } from "@/shared";
import { keyMapping, eSignSuccessMessage } from "../constants";
import { useSearchParams } from "@/utils/hooks/useSearchParams";
import { fetchDocumentBlob } from "@/shared/actions";

const DocumentPreviewContainer = () => {
   const { getParam } = useSearchParams();
   const [pdfBlob, setPdfBlob] = useState(null);
   const [transactionId, setTransactionId] = useState("");
   const [transactionAuthToken, setTransactionAuthToken] = useState("");
   const [currentView, setCurrentView] = useState("preview");
   const [errorMessage, setErrorMessage] = useState("");
   const [successMessage, setSuccessMessage] = useState(eSignSuccessMessage);

   const [docURL, setDocURL] = useState("");
   const [consentChecked, setConsentChecked] = useState(false);
   const [numPages, setNumPages] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [s3PresignedURL, setS3PresignedURL] = useState("");
   const [esignData, setEsignData] = useState({});

   useEffect(() => {
      const fetchInitialData = async () => {
         try {
            const transactionId = getParam(keyMapping.TRANSACTION_ID);
            const clientURL = getParam(keyMapping.CLIENT_URL);
            const status = getParam(keyMapping.STATUS);
            const errorMessage = getParam(keyMapping.MESSAGE);
            const redirect_URL = getParam(keyMapping.REDIRECT_URL);
            const transactionAuthToken = getParam(keyMapping.TRANSACTION_AUTH_TOKEN);

            if (transactionId && !clientURL) {
               setIsLoading(true);
               setTransactionId(transactionId);
               setTransactionAuthToken(transactionAuthToken);
               const data = await previewDocument({ transactionId, transactionAuthToken });

               if (data) {
                  setDocURL(data.esign_data.document_uri);
                  setEsignData(data.esign_data);
               }
            } else if (clientURL && status) {
               if (status === "success") {
                  const decodedURL = decodeURL(getParam(keyMapping.S3_PRESIGNED_URL));
                  setS3PresignedURL(decodedURL);
                  handleSuccessRedirect({
                     clientURL,
                     redirectURL: redirect_URL,
                     setCurrentView,
                     timeLimit: 15,
                  });
               } else {
                  handleErrorRedirect({
                     clientURL,
                     redirectURL: redirect_URL,
                     errorMessage: errorMessage,
                     setCurrentView,
                     setErrorMessage,
                  });
               }
            }
         } catch (error) {
            const clientURL = getParam(keyMapping.CLIENT_URL);
            const redirectURL = getParam(keyMapping.REDIRECT_URL);
            handleErrorRedirect({
               clientURL,
               redirectURL,
               errorMessage: errorMessagehandling(error) || error.message,
               setCurrentView,
               setErrorMessage,
            });
         } finally {
            setIsLoading(false);
         }
      };

      fetchInitialData();
   }, []);

   useEffect(() => {
      (async () => {
         if (docURL) {
            try {
               const blobURL = await fetchDocumentBlob(docURL);
               setPdfBlob(blobURL);
            } catch (error) {
               const clientURL = getParam(keyMapping.CLIENT_URL);
               const redirectURL = getParam(keyMapping.REDIRECT_URL);
               handleErrorRedirect({
                  clientURL,
                  redirectURL,
                  errorMessage: errorMessagehandling(error) || error.message,
                  setCurrentView,
                  setErrorMessage,
               });
            }
         }
      })();
   }, [docURL]);

   const handleProcessDocument = useCallback(async () => {
      try {
         setIsLoading(true);
         const data = await processDocument({ transactionId, transactionAuthToken });
      } catch (error) {
         const clientURL = getParam(keyMapping.CLIENT_URL);
         const redirectURL = getParam(keyMapping.REDIRECT_URL);
         setIsLoading(false);
         handleErrorRedirect({
            clientURL,
            redirectURL,
            errorMessage: errorMessagehandling(error) || error.message,
            setCurrentView,
            setErrorMessage,
         });
      }
   }, [transactionId, transactionAuthToken]);

   const handleChange = useCallback((key, value) => {
      switch (key) {
         case keyMapping.CONSENT_CHECKED:
            setConsentChecked(value);
            break;
         case keyMapping.PDF_LOAD_SUCCESS:
            setNumPages(value.numPages);
            setIsLoading(false);
            break;
         case keyMapping.PDF_LOAD_ERROR:
            setIsLoading(false);
            break;
         default:
            null;
      }
   }, []);

   return (
      <CustomSpinner loading={isLoading}>
         <DocumentPreview
            pdfBlob={pdfBlob}
            handleProcessDocument={handleProcessDocument}
            currentView={currentView}
            handleBack={() => handleBack({ getParam, keyMapping })}
            errorMessage={errorMessage}
            consentChecked={consentChecked}
            numPages={numPages}
            handleChange={handleChange}
            successMessage={successMessage}
            s3PresignedURL={s3PresignedURL}
            esignData={esignData}
         />
      </CustomSpinner>
   );
};

export default DocumentPreviewContainer;

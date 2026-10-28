import { api } from "@/utils/api";
import { consentText } from "./constants";
import { unescapeXML } from "@/utils/helper";
import * as Sentry from "@sentry/react";

export const previewDocument = async ({ transactionId, transactionAuthToken }) => {
   try {
      const { data } = await api({
         method: "GET",
         url: "/profile-api/esign/fetch-document-preview",
         headers: {
            "X-Transaction-ID": transactionId,
            "X-Transaction-Auth-Token": transactionAuthToken,
         },
      });

      return Promise.resolve(data?.data);
   } catch (error) {
      throw error;
   }
};

export const processDocument = async ({ transactionId, transactionAuthToken }) => {
   try {
      const { data } = await api({
         method: "POST",
         url: "/profile-api/esign/generate-request-xml",
         body: {
            consent_text: consentText,
         },
         headers: {
            "X-Transaction-ID": transactionId,
            "X-Transaction-Auth-Token": transactionAuthToken,
         },
      });

      if (data?.data?.esign_data) {
         let { request_xml, esp_url } = data?.data?.esign_data;
         request_xml = unescapeXML(request_xml);

         try {
            const form = document.createElement("form");
            form.id = "URL";
            form.name = "URL";
            form.method = "POST";
            form.enctype = "multipart/form-data";
            form.action = esp_url;
            form.target = "_self";

            const textarea = document.createElement("textarea");
            textarea.id = "msg";
            textarea.name = "msg";
            textarea.rows = 10;
            textarea.cols = 80;
            textarea.value = request_xml;
            textarea.required = true;

            form.appendChild(textarea);
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
         } catch (formError) {
            Sentry.captureException(formError, {
               tags: {
                  section: "user_redirection",
                  transaction_id: transactionId,
               },
               extra: {
                  esp_url,
                  request_xml_length: request_xml?.length,
                  error_context: "User redirection failed",
               },
            });

            console.error("User redirection error:", formError);
            throw formError;
         }
      }
      return Promise.resolve(data?.data);
   } catch (error) {
      throw error;
   }
};

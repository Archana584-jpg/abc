import { api } from "@/utils/api";

export const fetchDocumentBlob = async (docURL) => {
   try {
      const { data } = await api({
         method: "GET",
         url: docURL,
         responseType: "blob",
         isNewInstanceRequest: true,
      });

      const pdfBlob = new Blob([data], { type: "application/pdf" });
      return URL.createObjectURL(pdfBlob);
   } catch (error) {
      throw new Error(`Failed to fetch document: ${error.message}`);
   }
};

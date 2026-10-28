import { useEffect, useState } from "react";
import fileStore from "store/fileStore";

export default function useFileStore() {
   const [files, setFiles] = useState(fileStore.getAll());

   useEffect(() => {
      const unsubscribe = fileStore.subscribe(setFiles);
      return unsubscribe; // Cleanup on unmount
   }, []);

   return {
      files,
      addFile: fileStore.add,
      removeFile: fileStore.remove,
      clearFiles: fileStore.clear,
      getFile: fileStore.get,
      clearAllFilesById: fileStore.clearAllFilesById,
   };
}

import { includes, isArray, isEqual } from "lodash";

const createFileStore = () => {
   const files = new Map();
   const listeners = new Set();

   const notify = () => {
      const allFiles = Array.from(files.entries());
      listeners.forEach((cb) => cb(allFiles));
   };

   return {
      add: (id, fileList) => {
         if (files.has(id)) {
            const existingFiles = files.get(id);

            // Ensure no duplicate values are added
            const updatedFiles = Array.isArray(fileList)
               ? [...existingFiles, ...fileList].filter(
                    (file, index, self) => self.findIndex((item) => isEqual(item, file)) === index
                 )
               : [...existingFiles, fileList].filter(
                    (file, index, self) => self.findIndex((item) => isEqual(item, file)) === index
                 );

            files.set(id, updatedFiles);
         } else {
            // Add as array if not already present
            files.set(id, Array.isArray(fileList) ? fileList : [fileList]);
         }
         notify();
      },

      remove: (id, fileList) => {
         const existingFiles = files.get(id);
         if (existingFiles?.length > 1) {
            // Filter out files that match any file in fileList
            const updatedFiles = existingFiles.filter(
               (file) => !fileList?.some((fileToRemove) => isEqual(file, fileToRemove))
            );
            files.set(id, updatedFiles);
         } else if (existingFiles?.length === 1) {
            // If only one file exists, check if it matches and delete the key
            const shouldDelete = fileList?.some((fileToRemove) => isEqual(existingFiles[0], fileToRemove));
            if (shouldDelete) {
               files.delete(id);
            }
         } else {
            // If no files exist, delete the key
            files.delete(id);
         }
         notify();
      },

      clear: () => {
         files.clear();
         notify();
      },

      clearAllFilesById: (id) => {
         files.delete(id);
         notify();
      },

      get: (id) => files.get(id),
      getAll: () => Array.from(files.entries()),

      subscribe: (cb) => {
         listeners.add(cb);
         cb(Array.from(files.entries())); // initial call
         return () => listeners.delete(cb); // unsubscribe
      },
   };
};

const fileStore = createFileStore();
export default fileStore;

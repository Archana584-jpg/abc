import React, { createContext, useContext, useRef } from "react";

const FormManagerContext = createContext();

export const FormManagerProvider = ({ children }) => {
   const formRefs = useRef({});

   const registerForm = (formId, formRef) => {
      formRefs.current[formId] = formRef;
   };

   const unregisterForm = (formId) => {
      delete formRefs.current[formId];
   };

   const getFormRef = (formId) => formRefs.current[formId];

   return (
      <FormManagerContext.Provider value={{ registerForm, unregisterForm, getFormRef }}>
         {children}
      </FormManagerContext.Provider>
   );
};

export const useFormContext = () => useContext(FormManagerContext);

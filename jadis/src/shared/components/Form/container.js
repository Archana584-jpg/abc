import { useState } from "react";
import CustomFormComponent from "./component";

const CustomForm = ({ formFieldItems, initialValues, errors, className, formRef, onSubmit, handleChange }) => {
   const [formState, setFormState] = useState({});

   const handleFormSubmit = (values) => {
      if (onSubmit) {
         onSubmit(values);
      }
   };

   const handleFieldChange = (key, value) => {
      if (handleChange) {
         handleChange(key, value);
      } else {
         setFormState((prevState) => ({
            ...prevState,
            [key]: value,
         }));
      }
   };

   return (
      <CustomFormComponent
         handleFormSubmit={handleFormSubmit}
         initialValues={initialValues}
         formFieldItems={formFieldItems}
         currentFieldValues={formState}
         errors={errors}
         handleChange={handleFieldChange}
         className={className}
         formRef={formRef}
      />
   );
};

export default CustomForm;

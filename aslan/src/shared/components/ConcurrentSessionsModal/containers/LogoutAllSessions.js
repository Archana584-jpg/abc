import React, { useEffect, useState } from "react";
import { LogoutAllSessionsComponent } from "../components";
import { useSelector } from "react-redux";

const LogoutAllSessionsContainer = ({ formFieldValues, handleChange, formRef }) => {
   const { tokens } = useSelector(({ auth: { tokens } }) => ({ tokens }));
   const [openModal, setOpenModal] = useState(false);

   useEffect(() => {
      if (tokens?.conCurrentSessionExists && formFieldValues?.username && formFieldValues?.password) {
         setOpenModal(true);
         handleChange("force", true);
      }
   }, [tokens?.conCurrentSessionExists]);

   const handleContinue = () => {
      formRef?.current?.submit();
   };

   const handleCancel = () => {
      setOpenModal(false);
      handleChange("force", false);
   };
   return <LogoutAllSessionsComponent open={openModal} handleClose={handleCancel} handleContinue={handleContinue} />;
};

export default LogoutAllSessionsContainer;

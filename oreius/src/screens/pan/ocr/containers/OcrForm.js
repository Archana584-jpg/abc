import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { convertBase64 } from "../../../../utils/helper";
import { getOCRPanData } from "../actions";
import { OCRFormComponent } from "../components";

export const OCRFormContainer = () => {
  
  const [imageFile, setImageFile] = useState({});
  const dispatch = useDispatch();

  const onSubmitForm = async (value) => {
    const data = {
      consent: value.consent ? "Y" : "N",
      base64_data: await convertBase64(imageFile),
    };
    dispatch(getOCRPanData(data));
  };

  return (
    <OCRFormComponent setImageFile={setImageFile} onSubmitForm={onSubmitForm} />
  );
};
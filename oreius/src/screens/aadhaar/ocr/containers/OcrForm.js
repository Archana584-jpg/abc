import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { convertBase64 } from "../../../../utils/helper";
import { getOCRAadhaar } from "../../actions";
import { OCRFormComponent } from "../components";

const OCRFormContainer = () => {
  const [imageFile, setImageFile] = useState({});
  const dispatch = useDispatch();

  const onSubmitForm = async (value) => {
    const data = {
      consent: value.consent ? "Y" : "N",
      base64_data: await convertBase64(imageFile),
    };
    dispatch(getOCRAadhaar(data));
  };

  return (
    <OCRFormComponent setImageFile={setImageFile} onSubmitForm={onSubmitForm} />
  );
};

export default OCRFormContainer;

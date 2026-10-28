import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { convertBase64 } from "../../../../utils/helper";
import { getExtractDataAadhaar } from "../../actions";
import { ExtractDataFormComponent } from "../components";

const ExtractDataFormContainer = () => {
  const [zipFile, setZipFile] = useState({});
  const dispatch = useDispatch();

  const onSubmitForm = async (value) => {
    const data = {
      consent: value.consent ? "Y" : "N",
      share_code: value.share_code,
      base64: await convertBase64(zipFile),
    };
    dispatch(getExtractDataAadhaar(data));
  };

  return (
    <ExtractDataFormComponent
      setZipFile={setZipFile}
      onSubmitForm={onSubmitForm}
    />
  );
};

export default ExtractDataFormContainer;

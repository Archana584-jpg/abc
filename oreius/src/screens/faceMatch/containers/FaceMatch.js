import React, { useEffect, useState } from "react";
import { FaceMatchComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { clearFaceMatchData, submitFaceMatchData } from "../actions";
import { convertBase64 } from "../../../utils/helper";

export const FaceMatchContainer = () => {
  
  const [firstFile, setFirstFile] = useState({});
  const [secondFile, setSecondFile] = useState({});
  const [fileSwitch, setFileSwitch] = useState(false);
  const faceResult = useSelector((state) => state.faceMatch.data);

  const dispatch = useDispatch();

  const onSubmitForm = async (value) => {
    let data;
    if (fileSwitch) {
      data = {
        file_1_url: value.file_1_url,
        file_2_url: value.file_2_url,
        consent: value.consent ? "Y" : "N",
      };
    } else {
      data = {
        file_1_base64: await convertBase64(firstFile),
        file_2_base64: await convertBase64(secondFile),
        consent: value.consent ? "Y" : "N",
      };
    }
    dispatch(submitFaceMatchData(data));
  };

  useEffect(() => {
    dispatch(clearFaceMatchData());
  }, [fileSwitch]);

  return (
    <FaceMatchComponent
      setFileSwitch={setFileSwitch}
      data={faceResult}
      onSubmitForm={onSubmitForm}
      fileSwitch={fileSwitch}
      setFirstFile={setFirstFile}
      setSecondFile={setSecondFile}
    />
  );
};
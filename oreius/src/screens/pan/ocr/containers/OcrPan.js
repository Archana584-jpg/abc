import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOCRPanData } from "../actions";
import { OCRComponent } from "../components";

export const OcrPan = () => {

  const dispatch = useDispatch();
  const results = useSelector((state) => state.pan.panOCR.data);

  useEffect(() => {
    dispatch(saveOCRPanData({}));
  }, []);

  return <OCRComponent data={results} />;
};
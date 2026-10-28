import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAadhaarOcrData } from "../../actions";
import { OCRComponent } from "../components";

const OcrAadhaar = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(
    ({
      aadhaar: {
        aadhaarOCRData: { data },
      },
    }) => ({
      data,
    })
  );

  useEffect(() => {
    dispatch(clearAadhaarOcrData());
  }, []);

  return <OCRComponent data={data} />;
};

export default OcrAadhaar;

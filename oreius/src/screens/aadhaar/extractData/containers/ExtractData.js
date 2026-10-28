import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearResult } from "../../actions";
import { ExtractDataComponent } from "../components";

const ExtractData = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    ({
      aadhaar: {
        result: { data },
      },
    }) => ({ data })
  );

  useEffect(() => {
    dispatch(clearResult());
  }, []);

  return <ExtractDataComponent data={data} />;
};

export default ExtractData;

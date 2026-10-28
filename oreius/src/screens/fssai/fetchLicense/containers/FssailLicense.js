import React from "react";
import { FssaiLicenseComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getFssaiLicenseData } from "../../actions";

const FssaiLicenseContainer = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(
    ({
      fssai: {
        license: { data },
      },
    }) => ({ data })
  );

  const onSubmitForm = (value) => {
    const data = {
      license_number: value.license_number,
      include_products: true,
      consent: value.consent ? "Y" : "N",
    };
    dispatch(getFssaiLicenseData(data));
  };
  return <FssaiLicenseComponent data={data} onSubmitForm={onSubmitForm} />;
};

export default FssaiLicenseContainer;

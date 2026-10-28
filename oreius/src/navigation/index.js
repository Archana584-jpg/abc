import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PrivateLayout from "../layout/private";
import PublicLayout from "../layout/public";
import { CustomSpinner } from "../shared/components";

const Navigation = () => {
  const { location, loginData } = useSelector(
    ({ router: { location }, auth: { loginData } }) => ({
      location,
      loginData,
    })
  );

  const pathName = location.pathname || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <div>
      <CustomSpinner />
      {isEmpty(loginData) ? <PublicLayout /> : <PrivateLayout />}
    </div>
  );
};

export default Navigation;

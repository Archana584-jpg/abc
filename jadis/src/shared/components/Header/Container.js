import React from "react";
import Component from "./Component";
import sharedSelector from "shared/selector";
import { useSelector } from "react-redux";

const Container = () => {
   const { currentUser, organization } = useSelector(sharedSelector);
   return (
      <Component
         currentUser={{
            name: `${currentUser?.data?.first_name || "N/A"} ${currentUser?.data?.last_name || ""}`,
            organizationLogo: organization?.data?.logo,
            profilePicture: currentUser?.data?.profile,
         }}
      />
   );
};

export default Container;

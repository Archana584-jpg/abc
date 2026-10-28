import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../screens/auth/actions";
import { SidebarComponent } from "./SidebarComponent";

const CustomSidebar = ({ navigateTo }) => {
  const dispatch = useDispatch();
  const pathname = useSelector((state) => state.router.location.pathname);
  return (
    <SidebarComponent
      logOut={() => dispatch(logout())}
      path={pathname}
      navigateTo={navigateTo}
    />
  );
};

export default CustomSidebar;
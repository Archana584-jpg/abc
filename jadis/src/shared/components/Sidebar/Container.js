import React, { useCallback, useEffect, useState } from "react";
import Component from "./Component";
import { useDispatch, useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import { toggleSidebar } from "shared/actions";
import { logoutSuccess } from "screens/login/actions";
import { useRouter } from "shared/hooks/useRouter";
import { routeCollectionMap } from "navigation/routes";
import { defaultSelectedKeys } from "./constants";
import { setQueryDetails } from "screens/applications/actions";

const Container = () => {
   const dispatch = useDispatch();
   const { navigateTo, location } = useRouter();
   const { isSidebarCollapsed } = useSelector(sharedSelector);
   const [selectedKeys, setSelectedKeys] = useState(defaultSelectedKeys);

   useEffect(() => {
      const selectedPath = location.pathname === routeCollectionMap.DEFAULT ? defaultSelectedKeys : [location.pathname];
      setSelectedKeys(selectedPath);
   }, [location.pathname]);

   const handleChange = useCallback(
      (key, value) => {
         switch (key) {
            case "isSidebarCollapsed":
               dispatch(toggleSidebar(value));
               return;
            case "menuItemClicked":
               dispatch(
                  setQueryDetails({
                     sort: {},
                     pagination: {},
                  })
               );
               navigateTo(value.key);
               return;
            default:
               return;
         }
      },
      [dispatch]
   );

   const handleLogout = () => {
      dispatch(logoutSuccess());
   };

   return (
      <Component
         selectedKeys={selectedKeys}
         handleChange={handleChange}
         handleLogout={handleLogout}
         isSidebarCollapsed={isSidebarCollapsed}
      />
   );
};

export default Container;

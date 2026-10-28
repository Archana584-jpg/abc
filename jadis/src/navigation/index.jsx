import Public from "layouts/public/loadable";
import Private from "layouts/private/loadable";
import { useState, memo, useEffect } from "react";
import { useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import { isEmpty } from "lodash";

const Navigation = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const { tokens } = useSelector(sharedSelector);

   useEffect(() => {
      if (!isEmpty(tokens?.data)) {
         setIsAuthenticated(true);
      } else {
         setIsAuthenticated(false);
      }
   }, [tokens?.data]);

   return isAuthenticated ? <Private /> : <Public />;
};

export default memo(Navigation);

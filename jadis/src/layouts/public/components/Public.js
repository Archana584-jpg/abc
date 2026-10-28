import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes } from "navigation/routes";
import { routeCollectionMap } from "navigation/routes";

const Public = () => {
   return (
      <div className={"bg-[#F9FBFD] min-h-screen"}>
         <Routes>
            {publicRoutes?.map((item, index) => (
               <Route key={index} path={item.path} Component={item.component} />
            ))}
            {/* wildcard route */}
            <Route path="*" element={<Navigate replace to={routeCollectionMap.DEFAULT} />}></Route>
         </Routes>
      </div>
   );
};

export default Public;

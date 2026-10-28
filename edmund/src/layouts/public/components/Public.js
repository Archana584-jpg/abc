import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "navigation/routes";

const Public = () => {
   return (
      <div className={"bg-[#F9FBFD] min-h-screen"}>
         <Routes>
            {publicRoutes?.map((item, index) => (
               <Route key={index} path={item.path} Component={item.component} />
            ))}
         </Routes>
      </div>
   );
};

export default Public;

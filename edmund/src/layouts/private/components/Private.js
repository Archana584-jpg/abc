import { Layout } from "antd";
import { privateRoutes } from "navigation/routes";
import { Route, Routes } from "react-router-dom";
import { CustomSidebar } from "shared/components";

const { Content } = Layout;

const Private = () => {
   return (
      <Layout className={"min-h-screen"}>
         <Layout className="bg-snowWhite">
            <CustomSidebar />
            <Content>
               <Routes>
                  {privateRoutes?.map((item, index) => (
                     <Route key={index} path={item.path} Component={item.component} />
                  ))}
               </Routes>
            </Content>
         </Layout>
      </Layout>
   );
};

export default Private;

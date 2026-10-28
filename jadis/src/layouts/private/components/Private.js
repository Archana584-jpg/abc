import { Layout } from "antd";
import { privateRoutes } from "navigation/routes";
import { Route, Routes } from "react-router-dom";
import { CustomHeader, CustomSidebar, ScrollToTop } from "shared/components";

const { Content } = Layout;

const Private = () => {
   return (
      <Layout className={"h-screen w-screen"}>
         <CustomHeader />
         <Layout className="layout-container">
            <CustomSidebar />
            <Content className="content-container">
               <ScrollToTop />
               <Routes>
                  {privateRoutes?.map((item, index) => (
                     <Route key={index} path={item.path} element={<item.component />} />
                  ))}
               </Routes>
            </Content>
         </Layout>
      </Layout>
   );
};

export default Private;

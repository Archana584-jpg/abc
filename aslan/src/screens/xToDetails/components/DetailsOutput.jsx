import React, { useMemo, useCallback } from "react";
import { Row, Col, Typography, Layout } from "antd";
import { useSelector } from "react-redux";
import { Input } from "./detailsSections";
import { getFirstErrorMessage } from "../helper";
import { rateLimitErrorMessage, disclaimerText, componentsWRTMenuItemsKey } from "../constants";
import { Overview } from "../containers";
import Sidebar from "./Sidebar";
import { useSidebar } from "../hooks/useSidebar";

const { Text, Link } = Typography;
const { Content } = Layout;

const DetailsOutputComponent = ({ input, handleViewChange, verificationData }) => {
   const { apiResponses } = useSelector(({ xToDetails: { apiResponses } }) => ({ apiResponses }));
   const { getSortedMenuItems } = useSidebar();
   const sortedMenuItems = useMemo(() => {
      return getSortedMenuItems(apiResponses || {});
   }, [apiResponses]);

   const firstErrorMessage = useMemo(() => {
      return getFirstErrorMessage(verificationData);
   }, [verificationData]);

   const renderSortedComponents = useCallback(() => {
      return sortedMenuItems.map((item) => {
         const Component = componentsWRTMenuItemsKey[item.key];
         if (!Component) {
            return null;
         }

         return <Component key={item.key} />;
      });
   }, [sortedMenuItems]);

   return (
      <Layout className="tw-bg-shadow-warrior tw-min-h-screen" theme="dark">
         <Sidebar />

         <Layout className="tw-bg-shadow-warrior tw-ml-72">
            <Content className="tw-p-6 tw-bg-shadow-warrior">
               <Row>
                  <Col>
                     {firstErrorMessage ? (
                        <Row>
                           <Col span={24} className="rate-limit-col">
                              <Text className="rate-limit-text">{rateLimitErrorMessage}</Text>
                           </Col>
                        </Row>
                     ) : null}
                     <Row>
                        <Col className="tw-mb-3">
                           <Text className="tw-text-lunar-rays tw-text-xs">
                              {disclaimerText}{" "}
                              {
                                 <Link href="mailto:support@gridlines.io" className="tw-text-lunar-rays tw-underline">
                                    support@gridlines.io
                                 </Link>
                              }
                              .
                           </Text>
                        </Col>
                     </Row>
                     <Input data={input} handleViewChange={handleViewChange} />
                     <Overview />
                     {renderSortedComponents()}
                  </Col>
               </Row>
            </Content>
         </Layout>
      </Layout>
   );
};

export default DetailsOutputComponent;

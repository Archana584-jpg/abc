import React from "react";
import { Layout } from "antd";
import { DetailsOutputComponent, LoadingVideo, HeaderComponent } from "screens/xToDetails/components";
import { viewOptions } from "../constants";
import { InputDetails } from "../containers";

const { Content } = Layout;

const renderView = (view, handleViewChange, input, verificationData) => {
   switch (view) {
      case viewOptions.SHOW_DETAILS:
         return (
            <DetailsOutputComponent
               handleViewChange={handleViewChange}
               input={input}
               verificationData={verificationData}
            />
         );

      case viewOptions.LOADING:
         return <LoadingVideo />;

      default:
         return <InputDetails handleViewChange={handleViewChange} />;
   }
};

const MainComponent = ({ view, handleViewChange, input, verificationData }) => {
   return (
      <Layout className="tw-bg-shadow-warrior tw-min-h-screen tw-text-white">
         <HeaderComponent />
         <Content className="tw-py-18 tw-px-8">{renderView(view, handleViewChange, input, verificationData)}</Content>
      </Layout>
   );
};

export default MainComponent;

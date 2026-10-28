import React from "react";
import { Row, Col, Tabs } from "antd";
import { Dashboard, Logs, Filters } from "screens/dashboardAndLogs/containers";
import { tabsMapping } from "screens/dashboardAndLogs/constants";
import "./style.css";

const { TabPane } = Tabs;

const MainComponent = ({
   selectedTab,
   handleChange,
   selectedProductIds,
   productDropdownOptions,
   draftedFilters,
   appliedFilters,
   shouldReloadData,
   shouldRemoveAppliedFilters,
   isRightDrawerVisible,
   productDropdownError,
}) => {
   return (
      <Row>
         <Col lg={{ span: 24 }}>
            <Row>
               <Col lg={{ span: 5 }}>
                  <Tabs
                     activeKey={selectedTab}
                     onChange={(value) => handleChange("selectedTab", value)}
                     size="large"
                     className="tabTitle"
                  >
                     <TabPane key={tabsMapping.DASHBOARD} tab="Dashboard" />
                     <TabPane key={tabsMapping.LOGS} tab="Logs" />
                  </Tabs>
               </Col>
            </Row>
         </Col>
         <Col lg={{ span: 24 }}>
            <Filters
               appliedFilters={appliedFilters}
               draftedFilters={draftedFilters}
               selectedTab={selectedTab}
               productDropdownOptions={productDropdownOptions}
               selectedProductIds={selectedProductIds}
               handleChange={handleChange}
               shouldRemoveAppliedFilters={shouldRemoveAppliedFilters}
               isRightDrawerVisible={isRightDrawerVisible}
               productDropdownError={productDropdownError}
            />
         </Col>
         <Col lg={{ span: 24 }}>
            {selectedTab === tabsMapping.DASHBOARD ? (
               <Dashboard
                  selectedProductIds={selectedProductIds}
                  productDropdownOptions={productDropdownOptions}
                  handleChange={handleChange}
                  appliedFilters={appliedFilters}
                  draftedFilters={draftedFilters}
                  shouldReloadData={shouldReloadData}
                  isRightDrawerVisible={isRightDrawerVisible}
               />
            ) : (
               <Logs
                  selectedProductIds={selectedProductIds}
                  productDropdownOptions={productDropdownOptions}
                  handleChange={handleChange}
                  appliedFilters={appliedFilters}
                  draftedFilters={draftedFilters}
                  shouldReloadData={shouldReloadData}
                  isRightDrawerVisible={isRightDrawerVisible}
               />
            )}
         </Col>
      </Row>
   );
};

export default MainComponent;

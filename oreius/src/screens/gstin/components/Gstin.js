import React from "react";
import { Col, Row, Card, Tabs } from "antd";
import { CustomForm } from "../../../shared/components";
import { gstinByName, gstinByPan, gstinDetailed, gstinFetch } from "../constants";
import { Result } from "./Result";

const { TabPane } = Tabs;

export const GstinComponent = ({ onSubmitGstin, tabChange, gstinData }) => {
   return (
      <Row justify="center">
         <Col lg={11}>
            <Card>
               <Tabs tabPosition={"top"} onChange={tabChange}>
                  <TabPane forceRender={true} tab="Fetch GSTIN By Name" key="1">
                     <CustomForm
                        onSuccess={(value) => onSubmitGstin(value, "/gstin-api/fetch-by-name")}
                        title="Submit"
                        fields={gstinByName}
                     />
                  </TabPane>
                  <TabPane tab="Fetch GSTIN By Pan" key="2">
                     <CustomForm
                        onSuccess={(value) => onSubmitGstin(value, "/gstin-api/fetch-by-pan")}
                        title="Submit"
                        fields={gstinByPan}
                     />
                  </TabPane>
                  <TabPane tab="Fetch GSTIN Detailed" key="3">
                     <CustomForm
                        onSuccess={(value) => onSubmitGstin(value, "/gstin-api/fetch-detailed")}
                        title="Submit"
                        fields={gstinDetailed}
                     />
                  </TabPane>
                  <TabPane tab="Fetch GSTIN" key="4">
                     <CustomForm
                        onSuccess={(value) => onSubmitGstin(value, "/gstin-api/fetch-lite")}
                        title="Submit"
                        fields={gstinFetch}
                     />
                  </TabPane>
               </Tabs>
            </Card>
         </Col>
         <Result gstinData={gstinData} />
      </Row>
   );
};

import { Row, Col, Card, Typography, Divider } from "antd";
import { CustomForm, CustomSelect } from "shared/components";
import { createApplicationForm } from "../constants";
import { transformOptionsList } from "utils/helper";

const CreateApplication = ({ data, workflows, handleChange }) => {
   return (
      <Row>
         <Col span={24}>
            <Card
               className="init-application-header-container items-center"
               title={
                  <Row className="w-full">
                     <Typography.Text className="font-medium text-sm">Create New Application</Typography.Text>
                  </Row>
               }
            >
               <Row className="w-full">
                  <Card className="w-full rounded-[4px]">
                     <Row className="w-4/5 mx-auto">
                        <Col xs={24}>
                           <Typography.Text className="font-medium text-sm">
                              Select a workflow for which you want to create the application
                           </Typography.Text>
                        </Col>
                        <Col xs={24} className="mt-6 mb-1 flex gap-1">
                           <Typography.Text className="text-sm text-error">*</Typography.Text>
                           <Typography.Text className="text-sm text-subText">Select Workflow</Typography.Text>
                        </Col>
                        <Col xs={24} md={8}>
                           <CustomSelect
                              className="w-full"
                              placeholder="Choose an Option"
                              options={transformOptionsList(workflows, "entity_type", "id")}
                              value={data.workflow_definition_id}
                              size={"middle"}
                              onChange={(value) => handleChange("workflow_definition_id", value)}
                           ></CustomSelect>
                        </Col>
                        {data.workflow_definition_id && (
                           <>
                              <Col xs={24}>
                                 <Divider />
                              </Col>
                              <Col xs={24} className="mb-4">
                                 <Typography.Text className="font-medium text-sm">
                                    Provide application details
                                 </Typography.Text>
                              </Col>
                              <Col xs={24}>
                                 <CustomForm
                                    initialValues={data}
                                    formFieldItems={createApplicationForm}
                                    onSubmit={() => handleChange("showConfirmationPopup", true)}
                                    handleChange={handleChange}
                                 ></CustomForm>
                              </Col>
                           </>
                        )}
                     </Row>
                  </Card>
               </Row>
            </Card>
         </Col>
      </Row>
   );
};

export default CreateApplication;

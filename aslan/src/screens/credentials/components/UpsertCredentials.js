import React, { useState } from "react";
import { Typography, Row, Col, Breadcrumb, Card, Form } from "antd";
import { CustomButton, CustomCheckBox, CustomImage, CustomInput, CustomModal } from "../../../shared";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { keyIcon, alertIcon } from "../../../assets/images";
import { formatDate } from "../../../utils/helper";
import { colors } from "../../../utils/theme";
import AddProductDropDownContainer from "../containers/AddProductDropDownContainer";
import { formValidateMessages } from "../../../shared/components/Form/constants";
import { currentViewList } from "../constants";

const { Text, Title } = Typography;

const styles = {
   cardHeading: {
      fontSize: "1.125rem",
      color: "#2F2F30",
      fontWeight: 600,
      opacity: 1,
      display: "block",
   },
   error: {
      color: "#ED5F74",
      fontSize: "0.665rem",
   },
   createdText: {
      color: "#717988",
      fontSize: "0.813rem",
      margin: "0.75rem 0rem 0rem 1.5rem",
   },
   credentialGrid: {
      border: "1px solid #00000012",
      borderRadius: 4,
      height: 45,
      padding: "9px 11px",
      wordBreak: "break-word",
      display: "flex",
   },
};

const UpsertCredentials = ({
   handleChange,
   handleSubmit,
   handleCancel,
   isKeyVisible,
   data,
   handleDeleteCredential,
   deleteCredentialConsent,
   error,
   selectedProducts,
   currentView,
   navigateTo,
}) => {
   const [form] = Form.useForm();
   form.setFieldsValue({
      "key name": (data || {}).name,
   });
   const [isOpen, setIsOpen] = useState(false);
   const [isFilterOpen, setIsFilterOpen] = useState(false);
   return (
      <>
         <Breadcrumb separator=">">
            <Breadcrumb.Item style={{ cursor: "pointer" }} onClick={() => navigateTo("/credentials")}>
               Credentials
            </Breadcrumb.Item>
            <Breadcrumb.Item>{data.api_key ? "Edit key" : "Create new key"}</Breadcrumb.Item>
         </Breadcrumb>
         <Form
            onFinish={() => {
               setIsOpen(false);
               handleSubmit();
            }}
            validateTrigger={"onSubmit"}
            validateMessages={formValidateMessages}
            form={form}
         >
            <Row gutter={[8, 8]} style={{ marginTop: "1.25rem" }}>
               <Col xs={{ span: 24 }}>
                  <Title level={4}>{data.api_key ? "Edit key" : "Create new key"}</Title>
               </Col>
               <Col xs={{ span: 24 }}>
                  <Card style={{ padding: 0, boxShadow: "none" }}>
                     <Title style={styles.cardHeading}>Key details</Title>
                     <Row>
                        <Col xs={{ span: 24 }} md={{ span: 11 }} style={{ marginTop: "0.30rem" }}>
                           <Title
                              level={5}
                              style={{
                                 fontSize: "0.75rem",
                                 display: "block",
                              }}
                           >
                              Key name
                           </Title>
                           <Form.Item help={error["name"]} validateStatus={error["name"] && "error"} name={"key name"}>
                              <CustomInput
                                 size="large"
                                 style={styles.input}
                                 type="default"
                                 placeholder="Enter key name"
                                 onChange={(value) => handleChange("name", value, "data")}
                                 disabled={data.trial}
                              />
                           </Form.Item>
                        </Col>

                        {data.api_key && (
                           <Col xs={{ span: 24 }} md={{ span: 11, offset: 1 }}>
                              <Title
                                 level={5}
                                 style={{
                                    fontSize: "0.75rem",
                                    display: "block",
                                 }}
                              >
                                 Key <CustomImage src={keyIcon} style={{ width: "1.3rem" }} />
                              </Title>

                              <Col style={styles.credentialGrid}>
                                 <Text
                                    style={
                                       isKeyVisible
                                          ? {
                                               width: "100%",
                                               display: "flex",
                                               justifyContent: "space-between",
                                            }
                                          : {
                                               textShadow: " 0 0 5px rgba(0,0,0,0.5)",
                                               color: "transparent",
                                               width: "100%",
                                               display: "flex",
                                               justifyContent: "space-between",
                                               userSelect: "none",
                                               WebkitUserSelect: "none",
                                               msUserSelect: "none",
                                            }
                                    }
                                    copyable={true}
                                 >
                                    {data.api_key}
                                 </Text>
                                 <div onClick={() => handleChange("isKeyVisible", !isKeyVisible)}>
                                    {isKeyVisible ? (
                                       <EyeInvisibleOutlined
                                          style={{
                                             marginTop: "0.20rem",
                                             marginLeft: "1rem",
                                          }}
                                       />
                                    ) : (
                                       <EyeOutlined
                                          style={{
                                             marginTop: "0.20rem",
                                             marginLeft: "1rem",
                                          }}
                                       />
                                    )}
                                 </div>
                              </Col>
                           </Col>
                        )}
                     </Row>
                  </Card>
               </Col>

               <Col xs={{ span: 24 }}>
                  <Card bodyStyle={{ padding: "20px 30px" }} style={{ marginTop: "1rem" }}>
                     <Row gutter={[0, 0]}>
                        <Col xs={{ span: 24 }} style={{ marginBottom: 5 }}>
                           <Text
                              style={{
                                 fontSize: 18,
                                 color: colors.GREY_90,
                              }}
                           >
                              Add Products
                           </Text>
                        </Col>
                        <Col xs={{ span: 24 }} style={{ marginBottom: 20 }}>
                           <Text
                              style={{
                                 fontSize: "14",
                                 color: colors.GREY_70,
                              }}
                           >
                              Select and add products to the key
                           </Text>
                        </Col>
                        <Col xs={{ span: 24 }} style={{ marginBottom: 10 }}>
                           <AddProductDropDownContainer
                              handleChangeOfUpsert={handleChange}
                              selectedProducts={selectedProducts}
                              isOpen={isOpen}
                              setIsOpen={setIsOpen}
                              isFilterOpen={isFilterOpen}
                              setIsFilterOpen={setIsFilterOpen}
                              data={data}
                              error={error}
                           />
                        </Col>
                        <Col xs={{ span: 22 }}>
                           <CustomButton
                              type="primary"
                              style={{ height: 43 }}
                              label={data.api_key ? "Save changes" : "Create Key"}
                              htmlType={"submit"}
                           />
                           <CustomButton
                              style={{ color: "#33CCCC", height: 43 }}
                              type="text"
                              label="Cancel"
                              handleClick={handleCancel}
                           />
                        </Col>
                        {data.api_key && !data.trial ? (
                           <Col xs={{ span: 2 }}>
                              <CustomButton
                                 danger={true}
                                 style={{ height: 43 }}
                                 label="Delete"
                                 handleClick={() => {
                                    handleChange("currentView", currentViewList.deleteModalVisible);
                                    setIsOpen(false);
                                 }}
                              />
                           </Col>
                        ) : null}
                     </Row>
                  </Card>
               </Col>
               <Col xs={{ span: 24 }}>
                  {data.api_key ? (
                     <Text style={styles.createdText}>
                        Created on {formatDate(data.created_date * 1000, "LLL")}, Last edited on{" "}
                        {formatDate(data.last_modified_date * 1000, "LLL")}
                     </Text>
                  ) : null}
               </Col>

               {currentView === currentViewList.deleteModalVisible && (
                  <CustomModal
                     visible={true}
                     footer={null}
                     width={"27.875rem"}
                     bodyStyle={{ padding: "1.25rem" }}
                     handleClose={() => {
                        handleChange("currentView", "");
                        handleChange("deleteCredentialConsent", false);
                     }}
                  >
                     <Row gutter={[8, 8]} justify="center">
                        <Col xs={{ span: 24 }}>
                           <CustomImage
                              src={alertIcon}
                              style={{
                                 width: "19%",
                                 margin: "0 auto",
                                 display: "block",
                                 marginBottom: "1.563rem",
                              }}
                           />
                        </Col>
                        <Col xs={{ span: 24 }}>
                           <Title
                              style={{
                                 fontSize: "1.125rem",
                                 textAlign: "center",
                              }}
                           >
                              Are you sure you want to delete the key?
                           </Title>
                        </Col>
                     </Row>

                     <Col
                        style={{
                           marginLeft: "1.013rem",
                           marginTop: "1rem",
                        }}
                     >
                        <Text style={{ marginBottom: 10 }}>This operation cannot be undone</Text>
                        <Col
                           style={{
                              background: "#F8F8F8",
                              padding: "0.875rem",
                           }}
                        >
                           <CustomCheckBox
                              checked={deleteCredentialConsent}
                              onChange={(value) => handleChange("deleteCredentialConsent", value)}
                           >
                              This key will be deleted and can not be recovered
                           </CustomCheckBox>
                        </Col>
                     </Col>

                     <Row justify="space-between" style={{ marginTop: "2.175rem" }}>
                        <CustomButton
                           style={{
                              fontWeight: "bold",
                              color: "#33CCCC",
                           }}
                           type="link"
                           label="No, keep the key"
                           handleClick={() => {
                              handleChange("currentView", "");
                              handleChange("deleteCredentialConsent", false);
                           }}
                        />
                        <CustomButton
                           style={{ fontWeight: "bold" }}
                           danger={true}
                           label="Yes, delete the key"
                           disabled={!deleteCredentialConsent}
                           handleClick={handleDeleteCredential}
                        />
                     </Row>
                  </CustomModal>
               )}
            </Row>
         </Form>
      </>
   );
};

export default UpsertCredentials;

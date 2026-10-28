import React from "react";
import { Row, Col, Typography } from "antd";
import { CustomButton, CustomCard, CustomModal } from "../../../shared";
import { CredentialList } from ".";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { currentViewList, dummyKey } from "../constants";
import { RenderErrorOnButtonClick } from "../../../shared/components/RenderProps";
import { accountActivationStates } from "../../../shared/constants";

const { Text, Title } = Typography;

const styles = {
   credentialGrid: {
      border: "0.063rem solid #D8D8D8",
      borderRadius: "0.25rem",
      maxHeight: "100%",
      padding: "0.8rem",
      wordBreak: "break-word",
      background: "white",
      display: "flex",
   },

   credentialCard: {
      background: "#E6F2F2",
      padding: "0.938rem 0.50rem 0.938rem  0.625rem",
      marginTop: "1.25rem",
   },

   apiKeyText: {
      color: "#000000",
      fontWeight: 500,
      marginRight: "0.625rem",
      display: "flex",
      alignItems: "center",
   },
};

const Credentials = ({
   handleChange,
   credentials,
   credentialsById,
   handleAPIKeyVisibility,
   keyVisibilityByCredentialsId,
   navigateTo,
   currentView,
   newCredentials,
   myOrganization,
   handleAPIKeyCopy,
   credentialId,
}) => {
   return (
      <Row gutter={[8, 8]}>
         <Col xs={{ span: 24 }}>
            <CustomCard style={{ padding: 0, boxShadow: "none" }}>
               <Title level={5} style={{ color: "#2F2F2F" }}>
                  Credentials
               </Title>
               <Text style={{ color: "#717988", display: "block" }}>Create an API key to start using the products</Text>
               <RenderErrorOnButtonClick
                  render={(setError) => (
                     <CustomButton
                        type="primary"
                        label="Create API Key"
                        handleClick={() =>
                           (myOrganization || {}).activation_status === accountActivationStates.VERIFIED
                              ? navigateTo("/credentials/new")
                              : setError("Account is not active")
                        }
                        style={{ marginTop: "1.6rem" }}
                     />
                  )}
               />
            </CustomCard>
         </Col>
         <Col xs={{ span: 24 }}>
            <CredentialList
               navigateTo={navigateTo}
               credentials={credentials}
               handleChange={handleChange}
               credentialsById={credentialsById}
               handleAPIKeyVisibility={handleAPIKeyVisibility}
               keyVisibilityByCredentialsId={keyVisibilityByCredentialsId}
               handleAPIKeyCopy={handleAPIKeyCopy}
               credentialId={credentialId}
            />
         </Col>
         {currentView === currentViewList.credentialCreatedModalVisible && (
            <CustomModal
               visible={true}
               footer={null}
               width={"36.125rem"}
               centered={true}
               handleClose={() => handleChange("currentView", "")}
            >
               <Title style={{ fontSize: "1.125rem" }}>API Key Created</Title>

               <Text style={{ fontSize: "0.813rem" }}>Use this key in your application</Text>

               <Row style={styles.credentialCard}>
                  <Text style={styles.apiKeyText}>API Key </Text>
                  <Col style={styles.credentialGrid} xs={{ span: 21 }}>
                     <Text
                        style={
                           !newCredentials.visibility
                              ? {
                                   textShadow: " 0 0 5px rgba(0,0,0,0.5)",
                                   color: "transparent",
                                   userSelect: "none",
                                   WebkitUserSelect: "none",
                                   msUserSelect: "none",
                                   width: "100%",
                                   display: "flex",
                                   justifyContent: "space-between",
                                }
                              : {
                                   width: "100%",
                                   display: "flex",
                                   justifyContent: "space-between",
                                }
                        }
                        copyable={{ text: newCredentials.key }}
                     >
                        {newCredentials.visibility ? newCredentials.key : dummyKey}
                     </Text>
                     {newCredentials.visibility ? (
                        <EyeInvisibleOutlined
                           style={{
                              marginTop: "0.20rem",
                              marginLeft: "1rem",
                           }}
                           onClick={() => handleChange("visibility", !newCredentials.visibility, "newCredentials")}
                        />
                     ) : (
                        <EyeOutlined
                           style={{
                              marginTop: "0.20rem",
                              marginLeft: "1rem",
                           }}
                           onClick={() => handleChange("visibility", !newCredentials.visibility, "newCredentials")}
                        />
                     )}
                  </Col>
               </Row>

               <Row justify="end" style={{ marginTop: "1.175rem" }}>
                  <CustomButton
                     size={"large"}
                     type="primary"
                     label="Close"
                     style={{ width: "8rem" }}
                     handleClick={() => handleChange("currentView", "")}
                  />
               </Row>
            </CustomModal>
         )}
      </Row>
   );
};

export default Credentials;

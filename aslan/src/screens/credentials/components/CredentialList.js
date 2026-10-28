import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React from "react";
import { CustomButton, CustomCard, CustomImage, CustomSpinner } from "../../../shared";
import { keyIcon } from "../../../assets/images";
import { formatDate } from "../../../utils/helper";
import { isEmpty } from "lodash";

const { Title, Text } = Typography;

const styles = {
   card: {
      padding: 0,
      boxShadow: "none",
      border: "0.063rem solid #E8E8E8",
      marginTop: "0.5rem",
   },
   title: {
      color: "#2F2F2F",
      fontSize: "1.135rem",
   },
   credentialGrid: {
      border: "1px solid #00000012",
      borderRadius: 2,
      maxHeight: "100%",
      padding: "0.75rem 0.75rem 0rem 0.75rem",
      wordBreak: "break-word",
      display: "flex",
   },
};

const CredentialList = ({
   navigateTo,
   credentials,
   credentialsById,
   handleAPIKeyVisibility,
   keyVisibilityByCredentialsId,
   handleAPIKeyCopy,
   credentialId,
}) => {
   return (
      !isEmpty(credentials) && (
         <Row style={{ marginTop: "1.25rem" }}>
            <Col xs={{ span: 24 }}>
               <Title level={4}>
                  Keys <CustomImage src={keyIcon} style={{ width: "1.3rem" }} />{" "}
               </Title>
            </Col>
            <Col xs={{ span: 24 }}>
               {(credentials || []).map((item, index) => {
                  return (
                     <CustomCard key={index} style={styles.card}>
                        <Row>
                           <Col md={{ span: 8 }} xs={{ span: 24 }} style={{ lineHeight: "0.89rem" }}>
                              <Title style={styles.title} level={4} ellipsis={{ tooltip: true }}>
                                 {item.name}
                              </Title>
                              <Text
                                 style={{
                                    color: "#717988",
                                    fontSize: "0.68rem",
                                 }}
                              >
                                 Created on {formatDate(item.created_date * 1000, "DD MMM YYYY")}
                              </Text>
                           </Col>
                           <Col md={{ span: 12 }} xs={{ span: 24 }} style={styles.credentialGrid}>
                              <Text
                                 style={
                                    keyVisibilityByCredentialsId[item.id]
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
                                 copyable={
                                    credentialsById.loading && credentialId === item.id
                                       ? false
                                       : {
                                            onCopy: () => handleAPIKeyCopy(item),
                                            text: (credentialsById.data[item.id] || {}).api_key,
                                         }
                                 }
                              >
                                 {keyVisibilityByCredentialsId[item.id]
                                    ? (credentialsById.data[item.id] || {}).api_key
                                    : item.id}
                              </Text>
                              {credentialsById.loading && credentialId === item.id ? null : (
                                 <div onClick={() => handleAPIKeyVisibility(item)}>
                                    {keyVisibilityByCredentialsId[item.id] ? (
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
                              )}
                              {credentialId === item.id ? <CustomSpinner loading={credentialsById.loading} /> : null}
                           </Col>
                           <Col
                              md={{ span: 4 }}
                              xs={{ span: 24 }}
                              style={{
                                 display: "flex",
                                 justifyContent: "flex-end",
                              }}
                           >
                              <CustomButton
                                 style={{
                                    color: "#33CCCC",
                                    marginTop: "0.45rem",
                                 }}
                                 type="text"
                                 label="Edit"
                                 handleClick={() => navigateTo(`/credentials/${item.id}`)}
                              />
                           </Col>
                        </Row>
                     </CustomCard>
                  );
               })}
            </Col>
         </Row>
      )
   );
};

export default CredentialList;

import React from "react";
import Record from "./Record";
import { Row, Col, Typography, Flex, Divider } from "antd";

const SignatoryRecord = ({ data }) => {
   return (
      <Row>
         <Col xs={24}>
            {data.list_entities?.map((item, index) => {
               return (
                  <Row key={index}>
                     <Col xs={24} className="px-2">
                        <Typography.Text className={"font-sm font-medium text-subText"}>
                           Signer {index + 1}
                        </Typography.Text>
                     </Col>
                     <Col xs={24} className="flex px-2 mt-4">
                        {item.label_value_mappings?.map((entity, index) => {
                           return ["signatory_detail.name", "signatory_detail.email"].includes(entity.key) ? (
                              <Flex className={index > 0 ? "ml-2" : ""}>
                                 <Typography.Text className={"font-base font-normal text-text"}>
                                    {index > 0 ? <span className="mr-2">•</span> : null}
                                    {entity.label}:
                                 </Typography.Text>
                                 <Typography.Text className={"font-base font-medium text-text ml-2"}>
                                    {entity.value}
                                 </Typography.Text>
                              </Flex>
                           ) : null;
                        })}
                     </Col>

                     {item.label_value_mappings?.map((entity, index) => {
                        return [
                           "signatory_pan_verification_details",
                           "signatory_address_verification_document_details",
                        ].includes(entity.key) ? (
                           <Col xs={24} key={index} className="mt-4">
                              <Row>
                                 <Col xs={24} className="px-2">
                                    <Typography.Text className={"font-base font-medium text-text"}>
                                       {entity.label}
                                    </Typography.Text>
                                 </Col>
                                 <Col xs={24}>
                                    <Divider className="my-4" />
                                 </Col>
                                 <Col xs={24}>
                                    <Record
                                       data={{
                                          title: entity?.label,
                                          parent_key: entity?.key,
                                          label_value_mappings: entity?.sub_mapping_data,
                                          verifications: entity?.verifications,
                                          string_validations: entity?.string_validations,
                                          dedupe_checks: entity?.dedupe_checks,
                                       }}
                                    />
                                 </Col>
                              </Row>
                           </Col>
                        ) : null;
                     })}
                  </Row>
               );
            })}
         </Col>
      </Row>
   );
};

export default SignatoryRecord;

import React from "react";
import { Row, Col, Typography } from "antd";
import DeDupCheck from "./DeDupCheck";
import { columns, customCardKeys } from "../constants";
import { CustomTable, DocumentPreview } from "shared/components";
import ValidationCheck from "./ValidationCheck";
import VerificationCheck from "./VerificationCheck";

const Record = ({ data }) => {
   return (
      <Row className="w-full record-container">
         <Col xs={24}>
            <Row gutter={[16, 0]}>
               {data.label_value_mappings?.filter(
                  (item) => !item.key.includes("_urls") && !item.list_entities && !item.sub_mapping_data
               ).length ? (
                  <Col xs={24} md={16}>
                     <CustomTable
                        data={data.label_value_mappings
                           ?.filter(
                              (item) => !item.key.includes("_urls") && !item.list_entities && !item.sub_mapping_data
                           )
                           .map((item) => (item.values ? { ...item, value: item.values.join(", ") } : item))}
                        columns={columns}
                        layout={"fixed"}
                     />
                  </Col>
               ) : null}
               {data.label_value_mappings?.filter((item) => item.key.includes("_urls")).length ? (
                  <Col
                     className={
                        data.parent_key === customCardKeys.UPLOAD_OTHER_BUSINESS_DOCUMENTS &&
                        "flex gap-4 justify-center"
                     }
                     xs={24}
                     md={data.parent_key === customCardKeys.UPLOAD_OTHER_BUSINESS_DOCUMENTS ? 24 : 8}
                  >
                     <DocumentPreview data={data} />
                  </Col>
               ) : null}
               {data?.label_value_mappings?.filter((item) => item.sub_mapping_data).length
                  ? data?.label_value_mappings
                       ?.filter((item) => item.sub_mapping_data)
                       .map((entity, index) => (
                          <Col xs={24} key={index} className="my-4">
                             {entity.label ? (
                                <Typography.Text className="text-base font-medium text-text">
                                   {entity.label}
                                </Typography.Text>
                             ) : null}
                             <Record
                                data={{
                                   title: entity?.label,
                                   parent_key: entity?.key,
                                   label_value_mappings: entity?.sub_mapping_data,
                                }}
                             />
                          </Col>
                       ))
                  : null}
               {data?.label_value_mappings?.filter((item) => item.list_entities).length
                  ? data?.label_value_mappings
                       ?.filter((item) => item.list_entities)
                       .map((entity, index) => (
                          <Col xs={24} key={index} className="my-4">
                             {entity.label ? (
                                <Typography.Text className="text-base font-medium text-text">
                                   {entity.label}
                                </Typography.Text>
                             ) : null}
                             {entity.list_entities?.length &&
                                entity.list_entities.map((subEntity, subIndex) => (
                                   <>
                                      {subEntity?.label ? (
                                         <Typography.Text className={"text-base font-medium text-text"}>
                                            {subEntity?.label}
                                         </Typography.Text>
                                      ) : null}
                                      <Record data={subEntity} />
                                   </>
                                ))}
                          </Col>
                       ))
                  : null}
            </Row>
         </Col>
         <Col xs={24}>
            {data.verifications?.map((verification, index) => {
               return <VerificationCheck key={index} data={verification} />;
            })}
         </Col>
         <Col xs={24}>
            {data.dedupe_checks?.map((dedupeCheck, index) => {
               return <DeDupCheck key={index} data={dedupeCheck} />;
            })}
         </Col>
         <Col xs={24}>
            {data.string_validations?.map((validation, index) => {
               return <ValidationCheck key={index} data={validation} />;
            })}
         </Col>
      </Row>
   );
};

export default Record;

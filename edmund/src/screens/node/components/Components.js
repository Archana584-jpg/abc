import { Col, Row } from "antd";
import React from "react";
import { renderComponent } from "../helper";
import { isEmpty } from "lodash";
import { CustomButton } from "shared/components";
import { getNestedProperty, evaluateConditions } from "utils/helper";

const Components = ({
   data,
   formRef,
   fileList,
   dataSource,
   handleAction,
   handleFileList,
   applicationData,
   downloadedDocuments,
   state,
}) => {
   return (
      <Col xs={data?.style?.col?.xs} md={data?.style?.col?.md} lg={data?.style?.col?.lg}>
         <Row>
            {data?.contents
               ?.filter((item) => {
                  const data = getNestedProperty(applicationData?.data, item.name);
                  return !isEmpty(item.visibilityCondition)
                     ? evaluateConditions(
                          item.visibilityCondition.conditions,
                          data,
                          item.visibilityCondition.logicalOperator,
                          fileList
                       )
                     : true;
               })
               ?.map((item, index) => {
                  return (
                     <Col
                        key={index}
                        xs={item?.style?.col?.xs}
                        md={item?.style?.col?.md}
                        lg={item?.style?.col?.lg}
                        className={item?.className}
                     >
                        {renderComponent({
                           item,
                           state,
                           formRef,
                           fileList,
                           dataSource,
                           handleAction,
                           handleFileList,
                           applicationData,
                           downloadedDocuments,
                        })}
                     </Col>
                  );
               })}
         </Row>
         <Row className="w-full flex justify-center">
            {!isEmpty(data.actions)
               ? data.actions.map((item, index) => {
                    const data = getNestedProperty(applicationData?.data, item.name);
                    const disabled = item.disabled
                       ? evaluateConditions(item.disabled.conditions, data, item.disabled.logicalOperator, fileList)
                       : false;
                    return (
                       <Col
                          key={index}
                          className={item.className}
                          xs={item?.style?.col?.xs}
                          md={item?.style?.col?.md}
                          lg={item?.style?.col?.lg}
                       >
                          {" "}
                          <CustomButton
                             className={item.className}
                             type={item?.style?.type}
                             variant={item?.style?.variant}
                             color={item?.style?.color}
                             label={item.label?.text}
                             size={item?.style?.size}
                             disabled={disabled}
                             handleClick={() => handleAction({ action: item })}
                          />{" "}
                       </Col>
                    );
                 })
               : null}
         </Row>
      </Col>
   );
};

export default Components;

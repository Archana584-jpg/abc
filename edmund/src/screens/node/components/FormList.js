import { Col, Form, Button, Row, Collapse } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { evaluateConditions } from "utils/helper";
import { isEmpty, cloneDeep } from "lodash";
import { renderField } from "../helper";

const { Panel } = Collapse;

const FormListComponent = ({
   data,
   fileList,
   formFields,
   handleAction,
   handleChange,
   handleFileList,
   handleSubmit,
   formRef,
}) => {
   const [form] = Form.useForm();
   const [content, setContent] = useState();

   useEffect(() => {
      if (data?.items?.length) {
         setContent(processFormItems());
      }
   }, [data.items]);

   const processFormItems = useCallback(() => {
      let content = data?.items || [];
      content?.forEach((parent, parentIndex) => {
         const fieldIndex = parent.fields.findIndex((field) => field.items?.length);
         if (fieldIndex > -1 && parent?.fields?.[fieldIndex]?.items?.length) {
            parent?.fields?.[fieldIndex]?.items?.forEach((child) => {
               if (formFields?.[parent.name]?.[parentIndex]?.[child.name]?.length) {
                  parent.fields[fieldIndex].items = new Array(
                     formFields?.[parent.name]?.[parentIndex]?.[child.name]?.length
                  ).fill(child);
               }
            });
         }

         if (formFields[parent.name]?.length) {
            content = new Array(formFields[parent.name]?.length).fill(parent);
         }
      });
      return cloneDeep(content || []);
   }, [formFields, data?.items]);

   form.setFieldsValue({ ...formFields });

   const FormListRenderer = ({ items, parentKey = null }) => {
      return items?.map((item, parentIndex) => {
         const { label, properties, fields = [] } = item;
         return (
            <Col
               xs={properties?.style?.col?.xs}
               md={properties?.style?.col?.md}
               lg={properties?.style?.col?.lg}
               className={properties?.className}
               key={parentIndex}
            >
               <Collapse>
                  <Panel header={parentKey ? `${label.text} ${parentIndex + 1}` : label.text} key={parentIndex}>
                     <Form.List key={parentIndex} name={parentKey !== null ? [parentKey, item.name] : item.name}>
                        {() => {
                           return (
                              <Row>
                                 {fields
                                    ?.filter((field) => {
                                       return !isEmpty(field.visibilityCondition)
                                          ? evaluateConditions(
                                               field.visibilityCondition.conditions,
                                               formFields,
                                               field.visibilityCondition.logicalOperator
                                            )
                                          : true;
                                    })
                                    ?.map((field, index) => {
                                       const { style, items } = field;
                                       return (
                                          <Col
                                             xs={style?.col?.xs}
                                             md={style?.col?.md}
                                             lg={style?.col?.lg}
                                             className={field?.className}
                                             key={index}
                                          >
                                             {items?.length ? (
                                                <Row>
                                                   <FormListRenderer items={items} parentKey={parentIndex} />
                                                </Row>
                                             ) : (
                                                renderField({
                                                   field,
                                                   fileList,
                                                   formFields,
                                                   handleAction,
                                                   handleChange,
                                                   handleFileList,
                                                   key: parentIndex,
                                                })
                                             )}
                                          </Col>
                                       );
                                    })}
                              </Row>
                           );
                        }}
                     </Form.List>
                  </Panel>
               </Collapse>
            </Col>
         );
      });
   };

   return (
      <Col xs={data?.style?.col?.xs} md={data?.style?.col?.md} lg={data?.style?.col?.lg}>
         <Form
            form={form}
            formRef={formRef}
            layout={data?.properties?.layout}
            requiredMark={false}
            className={`w-full ${data?.properties?.className}`}
            wrapperCol={data?.properties?.wrapperCol}
            labelCol={data?.properties?.labelCol}
            labelAlign={data?.properties?.labelAlign}
            onFinish={(fieldValues) => handleSubmit({ action: data?.action, fieldValues })}
         >
            <Row>
               <FormListRenderer items={content} />
            </Row>

            {!isEmpty(data?.action) ? (
               <Col span={24} className="flex justify-center mt-12">
                  <Form.Item>
                     <Button
                        type="primary"
                        htmlType="submit"
                        className={data?.action?.label?.className}
                        size={data?.action?.style?.size}
                     >
                        {data?.action?.label?.text}
                     </Button>
                  </Form.Item>
               </Col>
            ) : null}
         </Form>
      </Col>
   );
};

export default FormListComponent;

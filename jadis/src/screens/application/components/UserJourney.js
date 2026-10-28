import { Row, Col, Typography, Card, Layout, Divider } from "antd";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { CustomTable } from "shared/components";
import { columns, customCardKeys } from "../constants";
import Record from "./Record";
import SignatoryRecord from "./SignatoryRecord";

const { Sider, Content } = Layout;

const UserJourney = ({ application }) => {
   const [activeKey, setActiveKey] = useState(application?.parent_node_data_mapping?.[0]?.parent_key);
   const observerRef = useRef(null);
   const cardRefs = useRef({});

   useEffect(() => {
      if (application?.parent_node_data_mapping?.[0]?.parent_key) {
         setActiveKey(application?.parent_node_data_mapping?.[0]?.parent_key);
      }
   }, [application]);

   useEffect(() => {
      if (!application?.parent_node_data_mapping) return;

      const observerOptions = {
         root: null,
         rootMargin: "0px",
         threshold: 0.5,
      };

      const observerCallback = (entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setActiveKey(entry.target.id);
            }
         });
      };

      observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

      Object.values(cardRefs.current).forEach((card) => {
         if (card) observerRef.current.observe(card);
      });

      return () => {
         // Disconnect observer on cleanup
         if (observerRef.current) observerRef.current.disconnect();
      };
   }, [application.parent_node_data_mapping]);

   const scrollToCard = (key) => {
      setActiveKey(key);
      const element = document.getElementById(key);
      if (element) {
         element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   };

   return (
      <Layout className="my-2">
         <Sider theme="light" width={208} className="sider-container">
            <Row gutter={[0, 6]}>
               {application?.parent_node_data_mapping?.map((item, index) => {
                  return (
                     <Col
                        xs={24}
                        className={`p-2 cursor-pointer${activeKey === item.parent_key ? " selected" : ""}`}
                        key={index}
                        onClick={() => scrollToCard(item.parent_key)}
                     >
                        <Typography.Text className="text-xs font-normal text-subText">
                           {item.order}. {item.title}
                        </Typography.Text>
                     </Col>
                  );
               })}
            </Row>
         </Sider>
         <Content className="content-container">
            <Row gutter={[0, 16]}>
               {application?.parent_node_data_mapping?.map((item, index) => {
                  return (
                     <Col xs={24} key={index}>
                        <Card
                           className="application-card-container"
                           title={
                              <Typography.Text className={"text-base font-medium text-text"}>
                                 {item.order}. {item.title}
                              </Typography.Text>
                           }
                           id={item.parent_key}
                           ref={(el) => (cardRefs.current[item.parent_key] = el)}
                        >
                           {item.parent_key === customCardKeys.AUTHORISED_SIGNATORY_VERIFICATION ? (
                              <SignatoryRecord data={item} />
                           ) : (
                              <Row>
                                 <Col xs={24}>
                                    {item.list_entities ? (
                                       item.list_entities.map((entity, entityIndex) => {
                                          return (
                                             <Row gutter={[16, 0]} key={entityIndex}>
                                                <Col xs={24}>
                                                   <Typography.Text className={"text-base font-medium text-text"}>
                                                      {entity.title}
                                                   </Typography.Text>
                                                </Col>
                                                <Col xs={24} md={16}>
                                                   <CustomTable
                                                      data={entity.label_value_mappings?.filter(
                                                         (item) =>
                                                            !item.key.includes("_urls") &&
                                                            !item.list_entities &&
                                                            !item.sub_mapping_data
                                                      )}
                                                      columns={columns}
                                                   />
                                                </Col>
                                                {entity.label_value_mappings
                                                   .filter((item) => item.list_entities)
                                                   ?.map((subEntity, subEntityIndex) => {
                                                      return (
                                                         <Fragment key={subEntityIndex}>
                                                            <Col xs={24}>
                                                               <Divider />
                                                            </Col>
                                                            <Col xs={24} className={"mx-4"}>
                                                               <Typography.Text
                                                                  className={"text-base font-medium text-text"}
                                                               >
                                                                  {subEntity.label}
                                                               </Typography.Text>
                                                            </Col>
                                                            {subEntity.list_entities?.map((subItem, subItemIndex) => {
                                                               return (
                                                                  <Col
                                                                     xs={24}
                                                                     md={16}
                                                                     className={"m-4"}
                                                                     key={subItemIndex}
                                                                  >
                                                                     <CustomTable
                                                                        data={subItem.label_value_mappings?.filter(
                                                                           (item) =>
                                                                              !item.key.includes("_urls") &&
                                                                              !item.list_entities
                                                                        )}
                                                                        columns={columns}
                                                                     />
                                                                  </Col>
                                                               );
                                                            })}
                                                         </Fragment>
                                                      );
                                                   })}
                                             </Row>
                                          );
                                       })
                                    ) : (
                                       <Record data={item} />
                                    )}
                                 </Col>
                              </Row>
                           )}
                        </Card>
                     </Col>
                  );
               })}
            </Row>
         </Content>
      </Layout>
   );
};

export default UserJourney;

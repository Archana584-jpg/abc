import { Card, Col, Descriptions } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { CustomImage } from "../../../../shared/components";
import { titleCase } from "../../../../utils/helper";
import "./style.css";

export const DlResult = ({ data }) => {
  return isEmpty(data) ? null : (
    <Col lg={{ offset: 1, span: 12 }}>
      <Card
        hoverable
        className="dlResultCard"
        cover={
          <CustomImage
            alt="data"
            src={`data:image/png;base64, ${data.photo_base64}`}
            style={{ height: 280, objectFit: "contain" }}
          />
        }
      >
        <Descriptions
          title={"Driving License"}
          bordered
          column={{ lg: 1, xs: 1 }}
        >
          {Object.entries(data).map(([key, value]) => {
            return key === "photo_base64" ? null : key === "validity" ? (
              <Descriptions.Item key={"validity"} label={titleCase("validity")}>
                {Object.entries(value).map(([nestedObjKey, nestedObjValue]) => {
                  return (
                    <div key={nestedObjKey} className="mutipleObjStyle">
                      {titleCase(nestedObjKey)} : <br />
                      {Object.entries(nestedObjValue).map(
                        ([nestedkey, nestedvalue]) => {
                          return (
                            <div key={nestedkey}>
                              {titleCase(nestedkey)}: {nestedvalue}
                            </div>
                          );
                        }
                      )}
                    </div>
                  );
                })}
              </Descriptions.Item>
            ) : key === "rto_details" ? (
              <Descriptions.Item
                key={"rto_details"}
                label={titleCase("rto_details")}
              >
                {Object.entries(value).map(([key, value]) => {
                  return (
                    <div key={key} className="mutipleObjStyle">
                      {titleCase(key)}: {value}
                    </div>
                  );
                })}
              </Descriptions.Item>
            ) : key === "vehicle_class_details" ? (
              <Descriptions.Item
                key={"vehicle_class_details"}
                label={titleCase("vehicle_class_details")}
              >
                {value.map((val, index) => {
                  return (
                    <div key={index} className="mutipleObjStyle">
                      Category: {val.category} <br />
                      Authority: {val.authority}
                    </div>
                  );
                })}
              </Descriptions.Item>
            ) : (
              <Descriptions.Item key={key} label={titleCase(key)}>
                {value}
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      </Card>
    </Col>
  );
};

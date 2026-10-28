import React from "react";
import { Card, Typography, Badge, Row, Col, Tooltip } from "antd";
import { colors } from "utils/theme";
import { CustomImage } from "shared";
import { activeDemoProducts } from "screens/sandbox/constants";

const { Text } = Typography;

const ProductCard = ({ index, product, navigateTo, isRenderedOnAutoComplete, parentPathname }) => {
   const isDisabled = !activeDemoProducts[product.key];
   return isRenderedOnAutoComplete ? (
      <Row
         key={index}
         gutter={[8, 8]}
         className={`tw-hover:bg-gray-200 tw-transition-opacity tw-duration-300 ${
            isDisabled && parentPathname === "sandbox" ? "tw-opacity-50 tw-cursor-not-allowed" : ""
         }`}
      >
         <Col>
            <CustomImage
               src={(product || {}).image_uri}
               height={"2.813rem"}
               width={"2.938rem"}
               className="tw-mb-1 tw-object-contain tw-bg-alice-blue tw-p-1"
            />
         </Col>
         <Col>
            <Text className="tw-text-sm tw-text-blackadder">{product.name}</Text>
            {(product.categories || []).length && (
               <div>
                  <Text className="tw-text-xxs tw-text-ice-blue-grey">
                     {product.categories.map((item) => item.name).join(", ")}
                  </Text>
               </div>
            )}
         </Col>
      </Row>
   ) : (
      <Badge.Ribbon
         dot={false}
         text="coming soon"
         placement="start"
         className={isDisabled && parentPathname === "sandbox" ? "tw-cursor-not-allowed" : "tw-hidden tw-pl-7"}
      >
         <Card
            key={index}
            hoverable={true}
            className={`tw-w-52.25 tw-mr-7.5 tw-mb-5 tw-border tw-border-unicorn-silver tw-hover:bg-gray-200 tw-transition-opacity tw-duration-300 ${
               isDisabled && parentPathname === "sandbox" ? "tw-opacity-50 tw-cursor-not-allowed" : ""
            }`}
            bodyStyle={{ padding: "0.938rem 0.938rem 0.438rem 0.938rem" }}
            onClick={
               isDisabled && parentPathname === "sandbox"
                  ? () => {}
                  : () => navigateTo(`/${parentPathname}/${product.id}`)
            }
         >
            <div>
               <CustomImage
                  src={product.image_uri}
                  height={"2.313rem"}
                  width={"2.313rem"}
                  className="tw-mb-1.75 tw-object-contain tw-bg-alice-blue tw-p-1.25"
               />
               <div className="tw-flex tw-flex-col tw-h-12.5">
                  <Text className="tw-text-sm tw-text-blackadder tw-leading-5.5">{product.name}</Text>
                  <Text className="tw-text-xxs tw-text-ice-blue-grey">{product.description}</Text>
               </div>
               {(product.categories || []).length ? (
                  <div className="tw-mt-7.5">
                     <Text className="tw-text-xxs tw-text-ice-blue-grey">
                        {product.categories[0].name}{" "}
                        {product.categories.length > 1 ? (
                           <Tooltip
                              placement="right"
                              title={
                                 <Text className="tw-text-xxs">
                                    {((product || {}).categories || []).map((item) => item.name).join(", ")}
                                 </Text>
                              }
                              color="white"
                           >
                              <Badge
                                 dot={false}
                                 size={"small"}
                                 style={{
                                    backgroundColor: colors.GREY_50,
                                    color: "#717988",
                                 }}
                                 count={`+${product.categories.length - 1}`}
                              />
                           </Tooltip>
                        ) : null}
                     </Text>
                  </div>
               ) : null}
            </div>
         </Card>
      </Badge.Ribbon>
   );
};

export default ProductCard;

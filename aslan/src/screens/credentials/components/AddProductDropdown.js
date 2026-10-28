import React from "react";
import { Row, Col, Typography, Space, Tooltip } from "antd";
import { CustomButton, CustomCheckBox, CustomChip, CustomInput, CustomSideDropMenu } from "shared";
import {
   CloseCircleOutlined,
   DeleteOutlined,
   FilterOutlined,
   LeftOutlined,
   RightOutlined,
   SearchOutlined,
   LockOutlined,
   WarningOutlined,
} from "@ant-design/icons";
import { colors } from "utils/theme";
import { remove, uniq } from "lodash";
import { productStatusMapping, statusDescriptionMapping } from "screens/products/constants";

const { Text } = Typography;

const AddProductDropdown = ({
   handleChange,
   setSideMenuDropList,
   searchProducts,
   filters,
   filteredProducts,
   products,
   selectedProducts,
   isOpen,
   setIsOpen,
   isFilterOpen,
   setIsFilterOpen,
   handleChangeOfUpsert,
   data,
   error,
   productStatusesById,
   handleProductGroupSelection,
}) => {
   const renderProductStatus = (offering) => {
      const productStatus = productStatusesById[(offering || {}).product_status_id] || {};
      const statusKey = productStatus.key;

      switch (statusKey) {
         case productStatusMapping.RESTRICTED: {
            if (offering.authorized) {
               return null;
            }
            return (
               <Tooltip
                  title={<Text className="tw-text-xxs">{statusDescriptionMapping.RESTRICTED}</Text>}
                  color="white"
               >
                  <LockOutlined className="tw-text-spanish-grey" />
               </Tooltip>
            );
         }

         case productStatusMapping.DEPRECATED:
            return (
               <Tooltip
                  title={<Text className="tw-text-xxs">{statusDescriptionMapping.DEPRECATED}</Text>}
                  color="white"
               >
                  <WarningOutlined className="tw-text-spanish-grey" />
               </Tooltip>
            );
         default:
            return null;
      }
   };
   return (
      <Row gutter={[8, 8]}>
         <Col xs={{ span: 9 }}>
            <Row gutter={[0, 16]}>
               <Col span={24}>
                  <CustomSideDropMenu
                     isOpen={isOpen}
                     handleChange={handleChange}
                     error={selectedProducts.length === 0 ? (error || {}).selectedProducts : ""}
                     button={
                        <CustomButton
                           style={{ height: 45, width: "23rem" }}
                           type={"default"}
                           label={
                              <div
                                 style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                 }}
                              >
                                 <Text
                                    style={{
                                       fontSize: 13,
                                       color: colors.GREY_90,
                                    }}
                                 >
                                    {"Add product(s) to your key"}
                                 </Text>
                                 {isOpen ? (
                                    <LeftOutlined
                                       style={{
                                          fontSize: 18,
                                          color: colors.GREY_90,
                                       }}
                                    />
                                 ) : (
                                    <RightOutlined
                                       style={{
                                          fontSize: 18,
                                          color: colors.GREY_90,
                                       }}
                                    />
                                 )}
                              </div>
                           }
                           handleClick={() => {
                              setIsOpen(!isOpen);
                              isFilterOpen && setIsFilterOpen(false);
                              handleChange("searchProducts", "");
                              setSideMenuDropList();
                           }}
                        />
                     }
                     header={
                        <Row gutter={[6, 2]}>
                           <Col span={17}>
                              <CustomInput
                                 value={searchProducts}
                                 prefix={<SearchOutlined />}
                                 onChange={(value) => {
                                    handleChange("searchProducts", value);
                                 }}
                                 placeholder={"Search Products"}
                              />
                           </Col>
                           <Col span={4}>
                              <CustomSideDropMenu
                                 isOpen={isFilterOpen}
                                 handleChange={handleChange}
                                 button={
                                    <CustomButton
                                       type={"default"}
                                       label={
                                          <div
                                             style={{
                                                fontSize: 11,
                                                display: "flex",
                                                alignItems: "center",
                                             }}
                                          >
                                             Filter{" "}
                                             <FilterOutlined
                                                style={{
                                                   fontSize: 16,
                                                   paddingLeft: 6,
                                                }}
                                             />
                                          </div>
                                       }
                                       handleClick={() => setIsFilterOpen(!isFilterOpen)}
                                    />
                                 }
                                 header={<Text style={{ fontSize: 11 }}>Filter by use case</Text>}
                                 style={{
                                    width: 210,
                                    left: "6rem",
                                 }}
                                 body={
                                    <Row gutter={[0, 16]} align={"middle"}>
                                       {(filters || []).map((item, index) => {
                                          return (
                                             <Row key={index} style={{ width: "100%" }}>
                                                <Col span={3}>
                                                   <CustomCheckBox
                                                      checked={item.checked}
                                                      onChange={(value) =>
                                                         handleChange("checked", value, index, "filters")
                                                      }
                                                   />
                                                </Col>
                                                <Col span={19}>
                                                   <Text
                                                      style={{
                                                         fontSize: 13,
                                                      }}
                                                   >
                                                      {item.name}
                                                   </Text>
                                                </Col>
                                             </Row>
                                          );
                                       })}
                                    </Row>
                                 }
                              />
                           </Col>
                           {(filters || []).some((item) => item.checked) ? (
                              <>
                                 <Col
                                    span={23}
                                    style={{
                                       overflowY: "scroll",
                                       display: "flex",
                                       flexWrap: "wrap",
                                       paddingLeft: 0,
                                       maxHeight: "4rem",
                                    }}
                                 >
                                    {(filters || []).map((item, index) =>
                                       item.checked ? (
                                          <CustomChip
                                             key={index}
                                             text={item.name}
                                             style={{
                                                margin: 0,
                                                padding: 2,
                                             }}
                                             suffix={
                                                <CloseCircleOutlined
                                                   onClick={() => handleChange("checked", false, index, "filters")}
                                                   style={{
                                                      fontSize: 14,
                                                      verticalAlign: "middle",
                                                   }}
                                                />
                                             }
                                          />
                                       ) : null
                                    )}
                                 </Col>
                                 <Col span={24}>
                                    <a style={{ fontSize: 11 }} onClick={() => setSideMenuDropList()}>
                                       Clear all
                                    </a>
                                 </Col>
                              </>
                           ) : null}
                        </Row>
                     }
                     body={
                        <Row
                           style={{
                              maxHeight: 200,
                              overflowY: "scroll",
                           }}
                           justify={"center"}
                           align={"middle"}
                           gutter={[0, 16]}
                        >
                           {filteredProducts.length !== 0 ? (
                              filteredProducts.map((item, index) => {
                                 return (
                                    <Row className="tw-w-full" gutter={[0, 0]} key={index}>
                                       <Col span={2}>
                                          <CustomCheckBox
                                             checked={((products[item] || {}).offerings || []).every((offering) =>
                                                selectedProducts.includes(offering.id)
                                             )}
                                             onChange={(value) => {
                                                handleChangeOfUpsert(
                                                   "selectedProducts",
                                                   handleProductGroupSelection(item, value)
                                                );
                                             }}
                                          />
                                       </Col>
                                       <Col span={22}>
                                          <Space
                                             direction={"vertical"}
                                             size={0}
                                             style={{
                                                lineHeight: 1.25,
                                                display: "flex",
                                                background: "#F8F8F8",
                                             }}
                                          >
                                             <Text
                                                style={{
                                                   fontSize: 13,
                                                   textTransform: "capitalize",
                                                   fontWeight: 500,
                                                }}
                                             >
                                                {(products[item] || {}).name}
                                             </Text>
                                          </Space>
                                       </Col>

                                       <Col span={23} offset={1}>
                                          {((products[item] || {}).offerings || []).map((offering, index) => (
                                             <Row className="tw-mt-1 tw-w-full" key={index}>
                                                <Col span={2}>
                                                   <CustomCheckBox
                                                      checked={
                                                         selectedProducts.indexOf(offering.id) > -1 &&
                                                         !(
                                                            !offering.authorized &&
                                                            (
                                                               productStatusesById[
                                                                  (offering || {}).product_status_id
                                                               ] || {}
                                                            ).key === productStatusMapping.RESTRICTED
                                                         )
                                                      }
                                                      onChange={(value) => {
                                                         handleChangeOfUpsert(
                                                            "selectedProducts",
                                                            value
                                                               ? [...selectedProducts, offering.id]
                                                               : remove(
                                                                    [...selectedProducts],
                                                                    (element) => offering.id !== element
                                                                 )
                                                         );
                                                      }}
                                                      disabled={
                                                         !offering.authorized &&
                                                         (productStatusesById[(offering || {}).product_status_id] || {})
                                                            .key === productStatusMapping.RESTRICTED
                                                      }
                                                   />
                                                </Col>
                                                <Col span={22}>
                                                   <Row gutter={[16, 0]}>
                                                      <Col span={20}>
                                                         <Text
                                                            style={{
                                                               fontSize: 13,
                                                               textTransform: "capitalize",
                                                            }}
                                                            className={
                                                               offering.authorized
                                                                  ? ""
                                                                  : (
                                                                       productStatusesById[
                                                                          (offering || {}).product_status_id
                                                                       ] || {}
                                                                    ).key === productStatusMapping.RESTRICTED
                                                                  ? "tw-opacity-50"
                                                                  : ""
                                                            }
                                                         >
                                                            {(offering || {}).name}
                                                         </Text>
                                                      </Col>
                                                      <Col lg={{ span: 4 }}>{renderProductStatus(offering)}</Col>
                                                   </Row>
                                                </Col>
                                             </Row>
                                          ))}
                                       </Col>
                                    </Row>
                                 );
                              })
                           ) : (
                              <Col span={24}>
                                 {" "}
                                 <Text
                                    style={{
                                       color: "rgb(140, 140, 140)",
                                       fontSize: 13,
                                    }}
                                 >
                                    No product found
                                 </Text>
                              </Col>
                           )}
                        </Row>
                     }
                     style={{
                        width: 333,
                        left: "24rem",
                     }}
                  />
               </Col>
               <Col
                  span={24}
                  style={{
                     textAlign: "right",
                     fontSize: 14,
                  }}
               >
                  {selectedProducts.length !== 0 ? (
                     <Text
                        style={{
                           display: "inline-flex",
                           alignItems: "center",
                        }}
                     >
                        {uniq(selectedProducts || []).length} {selectedProducts.length > 1 ? "products" : "product"}
                        {"  "}
                        selected{"  "}
                        {!data.trial ? (
                           <DeleteOutlined
                              style={{
                                 color: "#3DCCCB",
                                 fontSize: 18,
                                 paddingLeft: 10,
                              }}
                              onClick={() => handleChangeOfUpsert("selectedProducts", [])}
                           />
                        ) : null}
                     </Text>
                  ) : null}
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default AddProductDropdown;

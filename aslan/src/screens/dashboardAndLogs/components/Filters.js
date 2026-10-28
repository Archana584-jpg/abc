import React from "react";
import { Row, Col, Typography } from "antd";
import {
   CustomButton,
   CustomDropdown,
   CustomHierarchicalDropdown,
   CustomDatePicker,
   CustomInput,
   CustomDrawer,
} from "shared";
import { FilterOutlined } from "@ant-design/icons";
import { filterInputOptions } from "utils/constants";
import moment from "moment";
import { isEmpty } from "lodash";
import "./style.css";
import { renderAppliedFilterTag } from "utils/helper";

const { Text, Title } = Typography;

const FiltersComponent = ({
   handleChangeDateRangeFilters,
   productDropdownOptions,
   selectedProductIds,
   handleChange,
   isRightDrawerVisible,
   handleApplyFilter,
   filtersSchema,
   draftedFilters,
   appliedFilters,
   handleChangeFilters,
   resourcesOptionsByKey,
   handleRemoveAppliedFilter,
   productDropdownError,
}) => {
   return (
      <>
         <Row justify="space-between">
            <Col lg={{ span: 10 }}>
               <Text className="dropdownTitle">Select offering to view usage data</Text>
               <Row className="tw-w-full">
                  <Col lg={{ span: 18 }}>
                     <CustomHierarchicalDropdown
                        options={productDropdownOptions}
                        size="medium"
                        mode="multiple"
                        maxTagCount="responsive"
                        showSearch={true}
                        onChange={(value) => handleChange("selectedProductIds", value)}
                        value={selectedProductIds}
                     />
                     {productDropdownError ? <Text className="dropdownTitle">*Offerings cannot be blank</Text> : null}
                  </Col>
                  <Col lg={{ offset: 1, span: 5 }} className="tw-flex tw-flex-row tw-items-center">
                     {selectedProductIds.length > 1 ? (
                        <Text
                           className="tw-cursor-pointer tw-text-primary tw-font-medium"
                           onClick={() => handleChange("selectedProductIds", [selectedProductIds[0]])}
                        >
                           Clear all
                        </Text>
                     ) : null}
                  </Col>
               </Row>
            </Col>
            <Col lg={{ span: 12 }} className="tw-flex tw-justify-end tw-self-end">
               <CustomButton
                  label={"1h"}
                  type="ghost"
                  className="hour-selection-button"
                  handleClick={() => handleChangeDateRangeFilters("start_timestamp", "hourSelection", -1)}
               />
               <CustomButton
                  label={"4h"}
                  type="ghost"
                  className="hour-selection-button"
                  handleClick={() => handleChangeDateRangeFilters("start_timestamp", "hourSelection", -4)}
               />
               <CustomButton
                  label={"12h"}
                  type="ghost"
                  className="hour-selection-button"
                  handleClick={() => handleChangeDateRangeFilters("start_timestamp", "hourSelection", -12)}
               />
               <CustomButton
                  label={"1d"}
                  type="ghost"
                  className="hour-selection-button"
                  handleClick={() => handleChangeDateRangeFilters("start_timestamp", "hourSelection", -24)}
               />
               <CustomButton
                  label={"1w"}
                  type="ghost"
                  className="hour-selection-button"
                  handleClick={() => handleChangeDateRangeFilters("start_timestamp", "hourSelection", -168)}
               />
               <CustomButton
                  label={
                     <Row>
                        <Col lg={{ span: 15 }} className="tw-mt-0.5">
                           Filter By
                        </Col>
                        <Col lg={{ span: 3 }} className="tw-ml-2">
                           <FilterOutlined className="filter-by-icon" />
                        </Col>
                     </Row>
                  }
                  type="ghost"
                  className="filter-by-button"
                  handleClick={() => handleChange("isRightDrawerVisible", true)}
               />
            </Col>
            <Col lg={{ span: 24 }} className="tw-mt-1">
               {!isEmpty(appliedFilters) && (
                  <Row className="tw-w-full">
                     {Object.entries(appliedFilters).map(([key, item], index) => (
                        <Col lg={{ span: 24 }} key={index}>
                           {renderAppliedFilterTag(item, key, handleRemoveAppliedFilter)}
                        </Col>
                     ))}
                  </Row>
               )}
            </Col>
         </Row>
         <CustomDrawer
            placement={"right"}
            handleClose={() => handleChange("isRightDrawerVisible", false)}
            visible={isRightDrawerVisible}
            footer={
               <CustomButton
                  label="Apply Changes"
                  handleClick={() => handleApplyFilter()}
                  type="primary"
                  className="tw-w-full"
                  size="large"
               />
            }
         >
            <Title className="filter-drawer-title">Filter by</Title>

            {Object.values(filtersSchema || []).map((item) => (
               <>
                  {item.type === filterInputOptions.TEXT && !item.lookup_enabled && (
                     <CustomInput
                        key={item.key}
                        value={((draftedFilters || {})[(item || {}).key] || {}).values || ""}
                        className="filterInput tw-mt-2"
                        size="large"
                        placeholder={item.title}
                        onChange={(value) => handleChangeFilters(item, value)}
                     />
                  )}
                  {item.type === filterInputOptions.TEXT && item.lookup_enabled && (
                     <CustomDropdown
                        key={item.key}
                        value={((draftedFilters || {})[item.key] || {}).values}
                        className="filterDropdown tw-mt-2"
                        placeholder={item.title}
                        showArrow
                        size={"large"}
                        mode="multiple"
                        options={(resourcesOptionsByKey || {})[(item || {}).resource] || []}
                        onChange={(value, option) =>
                           handleChangeFilters(
                              item,
                              value,
                              option.map((item) => item.children)
                           )
                        }
                     />
                  )}
                  {item.type === filterInputOptions.DATE_RANGE && (
                     <>
                        <CustomDatePicker
                           key={item.key}
                           className="filterDatePicker tw-mt-2 tw-w-full"
                           value={
                              ((((draftedFilters || {})[item.key] || {}).values || [])[0] || {}).lower
                                 ? moment(((((draftedFilters || {})[item.key] || {}).values || [])[0] || {}).lower)
                                 : ""
                           }
                           placeholder={"Start date & time"}
                           showTime={{
                              defaultValue: moment("00:00:00", "HH:mm:ss"),
                           }}
                           size="large"
                           onChange={(date, value) =>
                              handleChangeDateRangeFilters(item.key, "lower", date ? date.valueOf() : "")
                           }
                        />
                        <CustomDatePicker
                           key={`${item.key}End`}
                           className="filterDatePicker tw-mt-2 tw-w-full"
                           value={
                              ((((draftedFilters || {})[item.key] || {}).values || [])[0] || {}).upper
                                 ? moment(((((draftedFilters || {})[item.key] || {}).values || [])[0] || {}).upper)
                                 : ""
                           }
                           placeholder={"End date & time"}
                           showTime={{
                              defaultValue: moment("23:59:59", "HH:mm:ss"),
                           }}
                           size="large"
                           onChange={(date) =>
                              handleChangeDateRangeFilters(item.key, "upper", date ? date.valueOf() : "")
                           }
                        />
                     </>
                  )}
               </>
            ))}

            {(!isEmpty(appliedFilters) || !isEmpty(draftedFilters)) && (
               <CustomButton
                  type="text"
                  handleClick={() => {
                     handleChange("appliedFilters", {});
                     handleChange("draftedFilters", {});
                  }}
                  label="Reset filter"
                  className="reset-filter-button"
               />
            )}
         </CustomDrawer>
      </>
   );
};

export default FiltersComponent;

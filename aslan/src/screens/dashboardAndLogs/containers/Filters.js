import React, { Component } from "react";
import { FiltersComponent } from "screens/dashboardAndLogs/components";
import moment from "moment";
import { cloneDeep, isEqual } from "lodash";
import { filterInputOptions, filterTypes } from "utils/constants";
import { getFilterType, transformResourcesDataToOptionsByKey } from "utils/helper";
import { stateKeysMappping, tabsMapping } from "../constants";
import { connect } from "react-redux";

class Filters extends Component {
   constructor(props) {
      super(props);

      this.state = {
         resourcesOptionsByKey: {},
      };
   }

   componentDidUpdate = async (prevProps) => {
      const {
         appliedFilters,
         shouldRemoveAppliedFilters,
         handleChange,
         filters,
         productLogsFilterByFilterKey,
         selectedProductIds,
         selectedTab,
      } = this.props;
      if (
         !isEqual(prevProps.appliedFilters, appliedFilters) ||
         (!isEqual(prevProps.shouldRemoveAppliedFilters, shouldRemoveAppliedFilters) && shouldRemoveAppliedFilters)
      ) {
         this.handleApplyFilter();
         handleChange("shouldRemoveAppliedFilters", false);
         handleChange("shouldReloadData", true);
      }
      if (
         !isEqual(prevProps.productLogsFilterByFilterKey, productLogsFilterByFilterKey) ||
         !isEqual(prevProps.selectedProductIds, selectedProductIds)
      ) {
         const resourcesOptionsByKey = await transformResourcesDataToOptionsByKey(
            productLogsFilterByFilterKey.data,
            selectedProductIds
         );
         this.setState({
            resourcesOptionsByKey: { logs: resourcesOptionsByKey },
         });
      }
      if (!isEqual(prevProps.filters, filters) || !isEqual(prevProps.selectedProductIds, selectedProductIds)) {
         const resourcesOptionsByKey = await transformResourcesDataToOptionsByKey(filters.list, selectedProductIds);
         this.setState({
            resourcesOptionsByKey: { dashboard: resourcesOptionsByKey },
         });
      }
      if (!isEqual(prevProps.selectedTab, selectedTab)) {
         handleChange("appliedFilters", {});
         handleChange("draftedFilters", {});
      }
   };

   handleChangeDateRangeFilters = async (filterKey, rangeKey, value) => {
      const { handleChange } = this.props;
      const { draftedFilters } = cloneDeep(this.props);
      if (!draftedFilters[filterKey]) {
         draftedFilters[filterKey] = {
            key: filterKey,
            values: [{ range_check: "INCLUDE_BOTH" }],
            type: filterInputOptions.DATE_RANGE,
            filter_type: filterTypes.RANGE,
         };
      }
      if (rangeKey === "hourSelection") {
         draftedFilters[filterKey]["values"] = [
            {
               ...draftedFilters[filterKey]["values"][0],
               upper: moment().valueOf(),
               lower: moment().add(value, "hours").valueOf(),
            },
         ];
         await handleChange("draftedFilters", draftedFilters);
         this.handleApplyFilter();
         return;
      } else {
         draftedFilters[filterKey]["values"] = [{ ...draftedFilters[filterKey]["values"][0], [rangeKey]: value }];
      }
      handleChange("draftedFilters", draftedFilters);
   };

   handleChangeFilters = (item, value, optionsLabel) => {
      const { handleChange } = this.props;
      const { draftedFilters } = cloneDeep(this.props);
      if (!draftedFilters[item.key])
         draftedFilters[item.key] = {
            title: item.title,
            key: item.key,
            filter_type: getFilterType(item),
            type: item.type,
         };
      draftedFilters[item.key] = {
         ...draftedFilters[item.key],
         values: Array.isArray(value) ? value : [value],
         selectedOptionslabel: optionsLabel,
      };
      handleChange("draftedFilters", draftedFilters);
   };

   handleApplyFilter = () => {
      let { draftedFilters, handleChange } = this.props;
      handleChange("appliedFilters", draftedFilters);
      handleChange("isRightDrawerVisible", false);
      let filters = Object.values(cloneDeep(draftedFilters));
      filters.forEach((item) => {
         delete item["title"];
         delete item["selectedOptionslabel"];
      });
      handleChange("shouldReloadData", true);
   };

   handleRemoveAppliedFilter = async (key, filterType, nestedObjectKey, selectedOptionIndex) => {
      let { appliedFilters } = this.props;
      const { handleChange } = this.props;
      if (filterType === filterTypes.RANGE) {
         delete appliedFilters[key]["values"][0][nestedObjectKey];
         if (!(appliedFilters[key]["values"][0].lower || appliedFilters[key]["values"][0].upper)) {
            delete appliedFilters[key];
         }
      } else if (filterType === filterTypes.CONTAINS && appliedFilters[key]["selectedOptionslabel"].length > 1) {
         appliedFilters[key]["selectedOptionslabel"].splice(selectedOptionIndex, 1);
         appliedFilters[key]["values"].splice(selectedOptionIndex, 1);
      } else {
         delete appliedFilters[key];
      }
      await handleChange("appliedFilters", appliedFilters);
      await handleChange("shouldRemoveAppliedFilters", true);
      handleChange("shouldReloadData", true);
   };

   handleChange = (key, value, parent) => {
      const { handleChange } = this.props;
      if (
         [
            stateKeysMappping.APPLIED_FILTERS,
            stateKeysMappping.DRAFTED_FILTERS,
            stateKeysMappping.IS_RIGHT_DRAWER_VISIBLE,
            stateKeysMappping.SELECTED_PRODUCT_IDS,
         ].includes(key)
      ) {
         handleChange(key, value);
         return;
      }
      if (parent)
         this.setState({
            [parent]: { ...this.state[parent], [key]: value },
         });
      else
         this.setState({
            [key]: value,
         });
   };

   render() {
      const {
         productDropdownOptions,
         selectedProductIds,
         isRightDrawerVisible,
         selectedTab,
         filters,
         productLogsFilterByFilterKey,
         appliedFilters,
         draftedFilters,
         productDropdownError,
      } = this.props;
      const { resourcesOptionsByKey } = this.state;
      return (
         <FiltersComponent
            handleChangeDateRangeFilters={this.handleChangeDateRangeFilters}
            productDropdownOptions={productDropdownOptions}
            selectedProductIds={selectedProductIds}
            isRightDrawerVisible={isRightDrawerVisible}
            handleChange={this.handleChange}
            filtersSchema={
               selectedTab === tabsMapping.DASHBOARD ? filters.list || [] : productLogsFilterByFilterKey.data || []
            }
            handleApplyFilter={this.handleApplyFilter}
            handleChangeFilters={this.handleChangeFilters}
            appliedFilters={appliedFilters}
            draftedFilters={draftedFilters}
            resourcesOptionsByKey={resourcesOptionsByKey[selectedTab]}
            handleRemoveAppliedFilter={this.handleRemoveAppliedFilter}
            productDropdownError={productDropdownError}
         />
      );
   }
}

const mapStateToProps = ({
   dashboardAndLogs: { filters, productLogsById, productLogsFilterByFilterKey, productLogsCount },
}) => ({
   filters,
   productLogsFilterByFilterKey,
   productLogsById,
   productLogsCount,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

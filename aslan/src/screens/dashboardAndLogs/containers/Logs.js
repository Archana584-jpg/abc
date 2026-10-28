import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductLogsById, getProductLogsCount, getProductLogsFilter } from "screens/dashboardAndLogs/actions";
import { LogsComponent } from "screens/dashboardAndLogs/components";
import { isEqual, cloneDeep, isEmpty } from "lodash";
import { extraLogColumns, logsColumns, stateKeysMappping, tableStyles } from "screens/dashboardAndLogs/constants";
import { PlusCircleFilled, MinusCircleFilled, SyncOutlined } from "@ant-design/icons";
import { message, Typography } from "antd";
import "../components/style.css";
import { CustomSpinner } from "shared";
import { resourceOptions } from "utils/constants";
import { transformResourcesDataToOptionsByKey } from "utils/helper";

const { Text } = Typography;
class Logs extends Component {
   constructor(props) {
      super(props);

      this.state = {
         data: [],
         isRightDrawerVisible: false,
         draftedFilters: {},
         appliedFilters: {},
         tableColumnHeaderExpandableByKey: {},
         column: [],
         isExtraColumnsVisible: false,
         latestLogCreatedDate: null,
         paginationLimit: 20,
         resourcesOptionsByKey: {},
      };

      this.productLogsCountIntervalID = 0;
   }

   componentDidMount = () => {
      const { selectedProductIds } = this.props;

      if (!isEmpty(selectedProductIds)) {
         this.getLogsDataWRTProductIds();
      }
   };

   getLogsDataWRTProductIds = () => {
      const { getProductLogsById, getProductLogsFilter, getProductLogsCount, selectedProductIds, appliedFilters } =
         this.props;

      const { paginationLimit } = this.state;
      let filters = Object.values(cloneDeep(appliedFilters));
      filters.forEach((item) => {
         delete item["title"];
         delete item["selectedOptionslabel"];
      });
      getProductLogsById({
         product_ids: selectedProductIds,
         pagination_info: { limit: paginationLimit },
         resource: resourceOptions.REQUEST_LOG,
         filters: filters,
      });
      getProductLogsFilter();
      this.productLogsCountIntervalID = setInterval(
         () =>
            this.state.latestLogCreatedDate &&
            getProductLogsCount({
               product_ids: selectedProductIds,
               created_timestamp: this.state.latestLogCreatedDate,
            }),
         60000
      );
      this.handleSetColumns(logsColumns);
   };

   componentWillUnmount = () => {
      clearInterval(this.productLogsCountIntervalID);
   };

   componentDidUpdate = async (prevProps, prevState) => {
      const {
         productLogsById,
         productLogsCount,
         productLogsFilterByFilterKey,
         selectedProductIds,
         products,
         shouldReloadData,
         draftedFilters,
         getProductLogsById,
         handleChange,
      } = this.props;
      const { tableColumnHeaderExpandableByKey, isExtraColumnsVisible, latestLogCreatedDate, paginationLimit } =
         this.state;

      if (!isEqual(prevProps.productLogsById.data, productLogsById.data) && !isEmpty(productLogsById.data)) {
         ((productLogsById.data || {}).entities || []).forEach((item, index) => {
            const productById = ((products.data || {}).entities || []).find(
               (product) => product.id === item.product.id
            );
            ((productLogsById.data || {}).entities || [])[index]["offering"] = (productById || {}).name;
         });
         this.setState({
            data: productLogsById.data,
         });
         if (!isEmpty(productLogsById.data.entities)) {
            const currentDataLatestLogCreatedDate = (((productLogsById.data || {}).entities || [])[0] || {})
               .created_date;
            this.setState({
               latestLogCreatedDate:
                  latestLogCreatedDate > currentDataLatestLogCreatedDate
                     ? latestLogCreatedDate
                     : currentDataLatestLogCreatedDate,
            });
         }
      }

      if (
         !isEqual(prevState.tableColumnHeaderExpandableByKey, tableColumnHeaderExpandableByKey) ||
         !isEqual(prevState.isExtraColumnsVisible, isExtraColumnsVisible)
      ) {
         if (isExtraColumnsVisible)
            this.handleSetColumns([
               ...logsColumns.slice(0, logsColumns.length - 1),
               ...extraLogColumns,
               logsColumns[logsColumns.length - 1],
            ]);
         else this.handleSetColumns(logsColumns);
      }

      if (!isEqual(prevProps.productLogsCount.data, productLogsCount.data) && productLogsCount.data.count > 0) {
         message.open({
            content: (
               <span style={{ cursor: "pointer" }}>
                  {productLogsCount.data.count} updates{" "}
                  <SyncOutlined
                     style={{
                        color: "#33CCCC",
                        fontWeight: 800,
                        marginLeft: "0.55rem",
                     }}
                  />
               </span>
            ),
            onClick: () => this.resetFilterAndGetProductLogs(),
            duration: 10,
            style: { marginTop: "23rem", marginLeft: "13rem" },
            className: "customMessage",
         });
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
            resourcesOptionsByKey,
         });
      }

      if (!isEqual(prevProps.selectedProductIds, selectedProductIds) && !isEmpty(selectedProductIds)) {
         this.getLogsDataWRTProductIds();
      }

      if (!isEqual(prevProps.shouldReloadData, shouldReloadData) && shouldReloadData) {
         let filters = Object.values(cloneDeep(draftedFilters));
         filters.forEach((item) => {
            delete item["title"];
            delete item["selectedOptionslabel"];
         });
         getProductLogsById({
            product_ids: selectedProductIds,
            filters,
            pagination_info: { limit: paginationLimit },
            resource: resourceOptions.REQUEST_LOG,
         });
         handleChange("shouldReloadData", false);
      }
   };

   resetFilterAndGetProductLogs = () => {
      const { getProductLogsById, selectedProductIds, handleChange } = this.props;
      const { paginationLimit } = this.state;
      handleChange("appliedFilters", {});
      handleChange("draftedFilters", {});
      getProductLogsById({
         product_ids: selectedProductIds,
         pagination_info: { limit: paginationLimit },
         resource: resourceOptions.REQUEST_LOG,
      });
      message.destroy();
   };

   handleChange = (key, value, parent) => {
      const { handleChange } = this.props;
      if ([stateKeysMappping.IS_RIGHT_DRAWER_VISIBLE, stateKeysMappping.SELECTED_PRODUCT_IDS].includes(key)) {
         handleChange(key, value);
         return;
      }
      if (parent) this.setState({ [parent]: { ...this.state[parent], [key]: value } });
      else
         this.setState({
            [key]: value,
         });
   };

   handleSetColumns = (column) => {
      const { tableColumnHeaderExpandableByKey, isExtraColumnsVisible } = this.state;
      let columns = column.map((item) => {
         switch (item.key) {
            case "request_id":
               const isExpandableId = (tableColumnHeaderExpandableByKey || {}).request_id;
               return {
                  ...item,
                  ellipsis: true,
                  title: (
                     <>
                        {item.title}{" "}
                        <Text
                           onClick={() =>
                              this.handleChange("request_id", !isExpandableId, "tableColumnHeaderExpandableByKey")
                           }
                           style={tableStyles.expandHeaderText}
                        >
                           {isExpandableId ? "hide" : "show"}
                        </Text>
                     </>
                  ),
                  render: (item) => {
                     return !isExpandableId && (item || "").length > 12 ? <span>{item.slice(0, 12)}...</span> : item;
                  },
               };

            case "transaction_id":
               const isExpandableTransactionId = (tableColumnHeaderExpandableByKey || {}).transaction_id;
               return {
                  ...item,
                  width: 180,
                  title: (
                     <>
                        {item.title}{" "}
                        <Text
                           onClick={() =>
                              this.handleChange(
                                 "transaction_id",
                                 !isExpandableTransactionId,
                                 "tableColumnHeaderExpandableByKey"
                              )
                           }
                           style={tableStyles.expandHeaderText}
                        >
                           {isExpandableTransactionId ? "hide" : "show"}
                        </Text>
                     </>
                  ),
                  render: (item) => {
                     return !isExpandableTransactionId && (item || "").length > 12 ? (
                        <span>{item.slice(0, 12)}...</span>
                     ) : (
                        item
                     );
                  },
               };

            case "extraColumnVisibleAction":
               return {
                  ...item,
                  title: isExtraColumnsVisible ? (
                     <MinusCircleFilled
                        onClick={() => this.handleChange("isExtraColumnsVisible", !isExtraColumnsVisible)}
                        style={tableStyles.extraColumnVisibilityIcon}
                     />
                  ) : (
                     <PlusCircleFilled
                        onClick={() => this.handleChange("isExtraColumnsVisible", !isExtraColumnsVisible)}
                        style={tableStyles.extraColumnVisibilityIcon}
                     />
                  ),
               };

            case "offering":
               return {
                  ...item,
               };
            default:
               return item;
         }
      });
      this.setState({
         column: columns,
      });
   };

   handleChangePagination = (data) => {
      const { getProductLogsById, selectedProductIds } = this.props;
      getProductLogsById({
         product_ids: selectedProductIds,
         pagination_info: data,
         resource: resourceOptions.REQUEST_LOG,
      });
   };

   render() {
      const { column, data, paginationLimit } = this.state;
      const { productLogsFilterByFilterKey, productLogsById, products, appliedFilters } = this.props;
      return (
         <CustomSpinner loading={productLogsById.loading || productLogsFilterByFilterKey.loading || products.loading}>
            <LogsComponent
               column={column}
               data={data}
               paginationLimit={paginationLimit}
               handleChangePagination={this.handleChangePagination}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   products: { products },
   dashboardAndLogs: { productLogsById, productLogsFilterByFilterKey, productLogsCount },
}) => ({
   productLogsById,
   productLogsFilterByFilterKey,
   productLogsCount,
   products,
});

const mapDispatchToProps = {
   getProductLogsById,
   getProductLogsFilter,
   getProductLogsCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logs);

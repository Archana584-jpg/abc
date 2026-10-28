import React, { Component } from "react";
import { connect } from "react-redux";
import ReportsComponent from "screens/products/components/Reports";
import {
   reportColumns,
   reportResourceMappingWRTGroupKeys,
   reportUrlMappingWRTGroupKeys,
   downloadedFileNameMappingWRTGroupKeys,
   columnsTitleMapping,
} from "screens/products/constants";
import { getProductAnalyticsReports } from "screens/products/actions";
import { isEqual } from "lodash";
import { CustomSpinner } from "shared";
import { Typography } from "antd";
import { downloadFile, copyToClipboard } from "utils/helper";

const { Text } = Typography;

class Reports extends Component {
   constructor(props) {
      super(props);

      this.state = {
         data: [],
         paginationLimit: 20,
         columns: [],
      };
   }

   componentDidMount = () => {
      const { getProductAnalyticsReports, product } = this.props;
      const { paginationLimit } = this.state;
      if (product.key)
         getProductAnalyticsReports(
            {
               pagination_info: {
                  limit: paginationLimit,
               },
               resource: reportResourceMappingWRTGroupKeys[product.key],
            },
            reportUrlMappingWRTGroupKeys[product.key]
         );
      this.handleSetColumns(product.key);
   };

   componentDidUpdate = (prevProps) => {
      const { productAnalyticsReports, product, getProductAnalyticsReports } = this.props;
      const { paginationLimit } = this.state;
      if (!isEqual(prevProps.productAnalyticsReports.data, productAnalyticsReports.data)) {
         this.setState({ data: productAnalyticsReports.data });
      }

      if (!isEqual(prevProps.product, product)) {
         getProductAnalyticsReports(
            {
               pagination_info: {
                  limit: paginationLimit,
               },
               resource: reportResourceMappingWRTGroupKeys[product.key],
            },
            reportUrlMappingWRTGroupKeys[product.key]
         );
         this.handleSetColumns(product.key);
      }
   };

   handleChangePagination = (paginationInfo) => {
      const { getProductAnalyticsReports, product } = this.props;
      getProductAnalyticsReports(
         {
            pagination_info: paginationInfo,
            resource: reportResourceMappingWRTGroupKeys[product.key],
         },
         reportUrlMappingWRTGroupKeys[product.key]
      );
   };

   handleSetColumns = (productKey) => {
      const columns = (reportColumns || []).map((item) => {
         if (item.title === columnsTitleMapping.REPORT || item.title === columnsTitleMapping.JSON) {
            return {
               ...item,
               render: (item) => (
                  <Text
                     className="tw-cursor-pointer tw-text-primary tw-mb-0 tw-w-40"
                     onClick={() => {
                        downloadFile(item, downloadedFileNameMappingWRTGroupKeys[productKey]);
                        copyToClipboard(item);
                     }}
                     ellipsis={true}
                  >
                     {item}
                  </Text>
               ),
            };
         }
         return item;
      });
      this.setState({ columns });
   };

   render() {
      const { data, paginationLimit, columns } = this.state;
      const { productAnalyticsReports } = this.props;
      return (
         <CustomSpinner loading={productAnalyticsReports.loading}>
            <ReportsComponent
               columns={columns}
               data={data}
               handleChangePagination={this.handleChangePagination}
               paginationLimit={paginationLimit}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({ products: { productAnalyticsReports, productById } }) => ({
   productAnalyticsReports,
   productById,
});

const mapDispatchToProps = { getProductAnalyticsReports };

export default connect(mapStateToProps, mapDispatchToProps)(Reports);

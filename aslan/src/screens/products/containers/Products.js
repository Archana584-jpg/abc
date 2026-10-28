import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty, isEqual } from "lodash";
import { getCategories, getMyProducts } from "../actions";
import { ProductsComponent } from "../components";
import { tabOptions } from "../constants";
import { CustomSpinner } from "../../../shared";
import { resourceOptions } from "../../../utils/constants";
import { getProductByCategoryId } from "../helper";

class Product extends Component {
   constructor(props) {
      super(props);

      this.state = {
         activeKey: tabOptions.AllProducts,
      };
   }

   componentDidMount = () => {
      this.getProductsData();
   };

   componentDidUpdate = (prevProps) => {
      const { categories, getMyProducts } = this.props;
      if (!isEqual(prevProps.categories.list, categories.list) && !isEmpty(categories.list)) {
         getMyProducts({
            category_ids: (categories.list || []).map((item) => item.id),
            resource: resourceOptions.MY_PRODUCT,
         });
      }
      this.getProductsData();
   };

   getProductsData = () => {
      const { categories, products, productGroups, productByCategoryId } = this.props;
      if (
         !isEmpty((productGroups.data || {}).entities) &&
         !isEmpty((products.data || {}).entities) &&
         !isEmpty(categories.list) &&
         isEmpty(productByCategoryId.data)
      ) {
         getProductByCategoryId(products.data, productGroups, categories);
      }
   };

   handleChange = (key, value) => {
      this.setState({ [key]: value });
   };

   render() {
      const { activeKey } = this.state;
      const { history, categories, productByCategoryId, myProducts } = this.props;
      return (
         <CustomSpinner loading={categories.loading || productByCategoryId.loading || myProducts.loading}>
            <ProductsComponent history={history} activeKey={activeKey} handleChange={this.handleChange} />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({ products: { categories, productByCategoryId, myProducts, products, productGroups } }) => ({
   categories,
   productByCategoryId,
   myProducts,
   products,
   productGroups,
});

const mapDispatchToProps = {
   getCategories,
   getMyProducts,
   getProductByCategoryId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

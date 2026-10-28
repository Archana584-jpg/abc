import React, { Component } from "react";
import { SandboxComponent } from "screens/sandbox/components";
import { connect } from "react-redux";
import { resourceOptions } from "utils/constants";
import { getCategories, getSearchedProducts } from "screens/products/actions";
import { isEmpty, isEqual } from "lodash";
import { getParentPathname, renderAutoCompleteOptions } from "utils/helper";
import { CustomSpinner } from "shared";
import { getProductByCategoryId, handleProductSearch } from "screens/products/helper";

class Sandbox extends Component {
   constructor(props) {
      super(props);

      this.state = {
         searchedProduct: "",
         autoCompleteOptions: [],
         parentPathname: getParentPathname(props.pathname),
      };
   }

   componentDidMount = () => {
      this.getProductsData();
   };

   componentDidUpdate = (prevProps) => {
      const { categories, searchedProducts, productGroups } = this.props;
      const { parentPathname } = this.state;

      if (!isEqual(prevProps.searchedProducts.data, searchedProducts.data) && !isEmpty(searchedProducts.data)) {
         const groups = handleProductSearch(searchedProducts.data, productGroups, categories);
         this.setState({
            autoCompleteOptions: renderAutoCompleteOptions(groups, this.navigateTo, parentPathname),
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
      const { getSearchedProducts } = this.props;
      if (key === "searchedProduct")
         if (value.length >= 2)
            getSearchedProducts({
               keyword: value,
               resource: resourceOptions.PRODUCT,
            });

      this.setState({ [key]: value });
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   render() {
      const { categories, productByCategoryId, products } = this.props;
      const { autoCompleteOptions, searchedProduct, parentPathname } = this.state;
      return (
         <CustomSpinner loading={categories.loading || productByCategoryId.loading}>
            <SandboxComponent
               navigateTo={this.navigateTo}
               handleChange={this.handleChange}
               autoCompleteOptions={autoCompleteOptions}
               loading={products.loading}
               searchedProduct={searchedProduct}
               parentPathname={parentPathname}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   products: { categories, productByCategoryId, products, productGroups, searchedProducts },
   router: {
      location: { pathname },
   },
}) => ({
   categories,
   productByCategoryId,
   products,
   pathname,
   productGroups,
   searchedProducts,
});

const mapDispatchToProps = { getCategories, getSearchedProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Sandbox);

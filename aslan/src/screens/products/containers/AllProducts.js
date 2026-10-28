import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty, isEqual } from "lodash";
import { AllProductsComponent } from "../components";
import { getSearchedProducts } from "../actions";
import { resourceOptions } from "utils/constants";
import { getParentPathname, renderAutoCompleteOptions } from "utils/helper";
import { handleProductSearch } from "../helper";

class Products extends Component {
   constructor(props) {
      super(props);

      this.state = {
         searchedProduct: "",
         autoCompleteOptions: [],
         parentPathname: getParentPathname(props.pathname),
      };
   }

   componentDidUpdate = (prevProps) => {
      const { searchedProducts, categories, productGroups } = this.props;
      const { parentPathname } = this.state;

      if (!isEqual(prevProps.searchedProducts.data, searchedProducts.data) && !isEmpty(searchedProducts.data)) {
         const groups = handleProductSearch(searchedProducts.data, productGroups, categories);
         this.setState({
            autoCompleteOptions: renderAutoCompleteOptions(groups, this.navigateTo, parentPathname),
         });
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
      const { autoCompleteOptions, searchedProduct, parentPathname } = this.state;
      const { products } = this.props;
      return (
         <AllProductsComponent
            navigateTo={this.navigateTo}
            handleChange={this.handleChange}
            autoCompleteOptions={autoCompleteOptions}
            loading={products.loading}
            searchedProduct={searchedProduct}
            parentPathname={parentPathname}
         />
      );
   }
}

const mapStateToProps = ({
   products: { products, categories, productGroups, searchedProducts },
   router: {
      location: { pathname },
   },
}) => ({
   products,
   pathname,
   categories,
   productGroups,
   searchedProducts,
});

const mapDispatchToProps = { getSearchedProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);

import React, { Component } from "react";
import { connect } from "react-redux";
import { MyProductsComponent } from "screens/products/components";
import { resourceOptions } from "utils/constants";
import { isEmpty, isEqual, sortBy } from "lodash";
import { getParentPathname, renderAutoCompleteOptions } from "utils/helper";
import { getSearchedProducts } from "screens/products/actions";
import { handleProductSearch } from "screens/products/helper";

class MyProducts extends Component {
   constructor(props) {
      super(props);

      this.state = {
         myProductList: [],
         searchedProduct: "",
         autoCompleteOptions: [],
         parentPathname: getParentPathname(props.pathname),
      };
   }

   componentDidMount = () => {
      const { myProducts, productGroups } = this.props;
      this.setState({
         myProductList: sortBy(this.transformProductsWRTGroup(myProducts.list, productGroups), "priority"),
      });
   };

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

   transformProductsWRTGroup = (products, productGroups) => {
      const productsWRTGroup = [];
      (products || []).forEach((product) => {
         const productGroupIds = ((product || {}).product || {}).product_group_ids || [];
         productGroupIds.forEach((productGroupId) => {
            const productGroup = productGroups.data.entities.find((group) => group.id === productGroupId);
            const productDetails = {
               id: ((product || {}).product || {}).id,
               name: ((product || {}).product || {}).name,
               priority: ((product || {}).product || {}).priority,
            };

            const existingGroup = productsWRTGroup.find((item) => item.id === productGroup.id);

            if (existingGroup) {
               existingGroup.offerings.push(productDetails);
            } else {
               productsWRTGroup.push({
                  ...productGroup,
                  offerings: [productDetails],
               });
            }
         });
      });

      return productsWRTGroup;
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
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

   render() {
      const { myProducts } = this.props;
      const { autoCompleteOptions, searchedProduct, parentPathname, myProductList } = this.state;
      return (
         <MyProductsComponent
            products={myProductList}
            navigateTo={this.navigateTo}
            handleChange={this.handleChange}
            loading={myProducts.loading}
            searchedProduct={searchedProduct}
            parentPathname={parentPathname}
            autoCompleteOptions={autoCompleteOptions}
         />
      );
   }
}

const mapStateToProps = ({
   products: { myProducts, productGroups, categories, searchedProducts },
   router: {
      location: { pathname },
   },
}) => ({
   myProducts,
   pathname,
   productGroups,
   categories,
   searchedProducts,
});

const mapDispatchToProps = { getSearchedProducts };

export default connect(mapStateToProps, mapDispatchToProps)(MyProducts);

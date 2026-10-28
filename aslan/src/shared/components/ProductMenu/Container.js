import React, { Component } from "react";
import ProductMenuComponent from "shared/components/ProductMenu/Component";
import { connect } from "react-redux";
import { isEqual, isEmpty, sortBy } from "lodash";
import { getParentPathname } from "utils/helper";
import { withRouter } from "react-router-dom";
import { activeDemoProducts as demoProducts } from "screens/sandbox/constants";
import { getProductByCategoryId } from "screens/products/helper";

class ProductMenu extends Component {
   constructor(props) {
      super(props);

      this.state = {
         categoryId: !isEmpty(props.categories.list) ? props.categories.list[0].id : "",
         allProducts: [],
         parentPathname: getParentPathname(props.pathname),
         categories: [],
         productByCategoryId: [],
      };
   }

   componentDidMount = () => {
      const { productByCategoryId } = this.props;
      this.getProductsData(true);
      if (!isEmpty(productByCategoryId.data)) {
         this.setAllProductCategory();
      }
   };

   componentDidUpdate = (prevProps) => {
      const { categories, productByCategoryId } = this.props;
      const { parentPathname, categoryId } = this.state;
      if (!isEqual(prevProps.categories.list, categories.list) && !isEmpty(categories.list)) {
         this.setState({
            categoryId: parentPathname === "sandbox" ? "allProducts" : categories.list[0].id,
            categories: categories.list || [],
         });
      }
      if (
         !isEqual(prevProps.productByCategoryId.data, productByCategoryId.data) &&
         !isEmpty(productByCategoryId.data)
      ) {
         this.setAllProductCategory();
         this.setState({ productByCategoryId: productByCategoryId.data[categoryId] });
      }

      this.getProductsData(false);
   };

   getProductsData = (isCalledOnMount) => {
      const { categories, productByCategoryId, products, productGroups } = this.props;
      const { parentPathname, categoryId } = this.state;
      if (
         !isEmpty((products.data || {}).entities) &&
         !isEmpty((productGroups.data || {}).entities) &&
         !isEmpty(categories.list) &&
         (isEmpty(productByCategoryId.data) || isCalledOnMount)
      ) {
         getProductByCategoryId(products.data, productGroups, categories);
         this.setState({
            categoryId: parentPathname === "sandbox" ? "allProducts" : categories.list[0].id,
            categories: categories.list || [],
            productByCategoryId: productByCategoryId.data[categoryId],
         });
      }
   };

   setAllProductCategory = () => {
      const { productByCategoryId } = this.props;
      let products = {};
      Object.values(productByCategoryId.data || {}).forEach((item) => {
         item.forEach((product) => {
            products = {
               ...products,
               [product.key]: product,
            };
         });
      });
      this.setState({
         allProducts: this.handleProductsSorting(Object.values(products)),
      });
   };

   handleChange = (key, value) => {
      const { productByCategoryId } = this.props;
      if (key === "categoryId") {
         this.setState({
            productByCategoryId: this.handleProductsSorting(productByCategoryId.data[value]),
         });
      }
      this.setState({ [key]: value });
   };

   navigateTo = (key) => {
      const { history } = this.props;
      history.push(key);
   };

   handleProductsSorting = (products) => {
      const { parentPathname } = this.state;
      if (parentPathname !== "sandbox") {
         return sortBy(products, "priority");
      }

      const activeDemoProducts = [];
      const inactiveDemoProducts = [];

      (products || []).forEach((item) => {
         if (demoProducts[item.key]) {
            activeDemoProducts.push(item);
         } else {
            inactiveDemoProducts.push(item);
         }
      });

      return [...sortBy(activeDemoProducts, "priority"), ...sortBy(inactiveDemoProducts, "priority")];
   };

   render() {
      const { categoryId, allProducts, parentPathname, categories, productByCategoryId } = this.state;
      return (
         <ProductMenuComponent
            categories={categories}
            navigateTo={this.navigateTo}
            handleChange={this.handleChange}
            productByCategoryId={productByCategoryId}
            parentPathname={parentPathname}
            categoryId={categoryId}
            allProducts={allProducts}
         />
      );
   }
}

const mapStateToProps = ({
   products: { categories, products, productByCategoryId, productGroups },
   router: {
      location: { pathname },
   },
}) => ({
   categories,
   products,
   pathname,
   productByCategoryId,
   productGroups,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductMenu));

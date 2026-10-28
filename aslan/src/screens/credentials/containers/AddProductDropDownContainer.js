import { isEmpty, sortBy, startsWith } from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import AddProductDropdown from "../components/AddProductDropdown";
import { getProductByCategoryId } from "screens/products/helper";
import { productStatusMapping } from "screens/products/constants";

class AddProductDropdownContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         filters: [],
         searchProducts: "",
         products: {},
         filteredProducts: [],
      };
   }

   componentDidMount = () => {
      this.setProductsData(true);
   };
   componentDidUpdate = () => {
      this.setProductsData(false);
   };

   setProductsData = (isCalledOnMount) => {
      const { categories, products, productGroups, productByCategoryId } = this.props;
      if (
         !isEmpty((products.data || {}).entities) &&
         !isEmpty((productGroups.data || {}).entities) &&
         !isEmpty(categories.list) &&
         (isEmpty(productByCategoryId.data) || isCalledOnMount)
      ) {
         getProductByCategoryId(products.data, productGroups, categories);
         this.setSideMenuDropList();
      }
   };

   handleChange = (key, value, parent, grandParent) => {
      if (parent || parent === 0) {
         if (grandParent) {
            const data = [...this.state[grandParent]];
            data[parent][key] = value;
            this.setState({ [grandParent]: data }, () => grandParent === "filters" && this.filterProducts());
         } else
            this.setState({
               [parent]: { ...this.state[parent], [key]: value },
            });
      } else
         this.setState(
            {
               [key]: value,
            },
            () => key === "searchProducts" && this.filterProducts()
         );
   };

   setSideMenuDropList = () => {
      const { productByCategoryId, categories } = this.props;
      let filters = categories.list.map((item) => {
         return { ...item, checked: false };
      });
      filters = sortBy(filters, (item) => item.name);
      let productsById = {};
      let filteredProducts = [];
      Object.keys(productByCategoryId.data).forEach((item) => {
         productByCategoryId.data[item].forEach((item) => {
            if (isEmpty(productsById[item.id])) {
               filteredProducts = [...filteredProducts, item.id];
            }
            productsById = {
               ...productsById,
               [item.id]: item,
            };
         });
      });
      filteredProducts = sortBy(filteredProducts, (item) => productsById[item].name);
      this.setState(
         {
            filters,
            products: productsById,
            filteredProducts: filteredProducts,
         },
         () => this.filterProducts()
      );
   };

   filterProducts = () => {
      const { filters, products, searchProducts } = this.state;
      const { productByCategoryId } = this.props;
      const isFilterApplied = filters.some((item) => item.checked);
      let filteredProducts = [];
      filters.forEach((item) => {
         (productByCategoryId.data[item.id] || []).forEach((element) => {
            if (
               (!isFilterApplied || item.checked) &&
               (!searchProducts || startsWith(element.name.toLowerCase(), searchProducts.toLowerCase().trim())) &&
               filteredProducts.indexOf(element.id) === -1
            ) {
               filteredProducts = [...filteredProducts, element.id];
            }
         });
      });
      filteredProducts = sortBy(filteredProducts, (item) => (products[item] || {}).name);
      this.setState({
         filteredProducts: filteredProducts,
      });
   };

   handleProductGroupSelection = (productGroupId, isProductsAdded) => {
      const { selectedProducts, productStatusesById } = this.props;
      const { products } = this.state;
      if (isProductsAdded) {
         return [
            ...selectedProducts,
            ...products[productGroupId].offerings.map((offering) => {
               if (
                  !(
                     (productStatusesById[(offering || {}).product_status_id] || {}).key ===
                     productStatusMapping.RESTRICTED
                  )
               ) {
                  return offering.id;
               }
            }),
         ];
      } else {
         return selectedProducts.filter((selectedProductId) => {
            return !(products[productGroupId] || {}).offerings.some((product) => product.id === selectedProductId);
         });
      }
   };

   render() {
      const { searchProducts, filters, filteredProducts, products } = this.state;

      const {
         categories,
         handleChangeOfUpsert,
         isOpen,
         setIsOpen,
         isFilterOpen,
         setIsFilterOpen,
         selectedProducts,
         data,
         error,
         productStatusesById,
      } = this.props;
      return (
         <AddProductDropdown
            setSideMenuDropList={this.setSideMenuDropList}
            searchProducts={searchProducts}
            filters={filters}
            handleChange={this.handleChange}
            categories={categories}
            filteredProducts={filteredProducts}
            products={products}
            selectedProducts={selectedProducts}
            handleChangeOfUpsert={handleChangeOfUpsert}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            data={data}
            error={error}
            productStatusesById={(productStatusesById || {}).data}
            handleProductGroupSelection={this.handleProductGroupSelection}
         />
      );
   }
}

const mapStateToProps = ({
   products: { categories, productByCategoryId, products, productGroups, productStatusesById },
}) => ({
   categories,
   productByCategoryId,
   products,
   productGroups,
   productStatusesById,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductDropdownContainer);

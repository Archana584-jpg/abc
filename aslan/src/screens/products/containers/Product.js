import React, { Component } from "react";
import { connect } from "react-redux";
import { CustomSpinner } from "../../../shared";
import { getPathName, handleBackButton } from "../../../utils/helper";
import { ProductComponent } from "../components";
import { productScreenTabOptions } from "../constants";
import { getProductById } from "../helper";
import { isEmpty } from "lodash";

class Products extends Component {
   constructor(props) {
      super(props);
      const {
         history: {
            location: { pathname },
         },
         match: {
            params: { id },
         },
      } = this.props;
      this.state = {
         activeKey: getPathName(pathname) === id ? productScreenTabOptions.Overview : getPathName(pathname),
      };
   }

   componentDidMount = () => {
      const {
         match: { params },
      } = this.props;
      const { activeKey } = this.state;
      this.navigateTo(`/products/${params.id}/${activeKey}`);
      window.onpopstate = () => handleBackButton("/products");
   };

   componentDidUpdate = () => {
      const {
         productGroups,
         products,
         categories,
         productById,
         match: { params },
      } = this.props;
      if (
         !isEmpty(productGroups.data) &&
         !isEmpty(products.data) &&
         !isEmpty(categories.list) &&
         isEmpty(productById.data[(params || {}).id])
      ) {
         getProductById(products.data, productGroups, categories, (params || {}).id);
      }
   };

   handleChange = (key, value) => {
      const {
         match: { params },
      } = this.props;
      if (key === "activeKey") this.navigateTo(`/products/${params.id}/${value}`);
      this.setState({ [key]: value });
   };

   navigateTo = (url) => {
      const { history } = this.props;
      if (url) history.push(url);
   };

   componentWillUnmount = () => {
      window.onpopstate = null;
   };

   render() {
      const { activeKey } = this.state;
      const {
         productById,
         match: { params },
      } = this.props;
      return (
         <CustomSpinner loading={productById.loading}>
            <ProductComponent
               activeKey={activeKey}
               product={productById.data[(params || {}).id] || {}}
               handleChange={this.handleChange}
               navigateTo={this.navigateTo}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({ products: { productById, products, categories, productGroups } }) => ({
   productById,
   products,
   categories,
   productGroups,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

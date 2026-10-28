import React, { Component } from "react";
import { connect } from "react-redux";
import { CustomSpinner } from "shared";
import { OverviewComponent } from "screens/products/components";
import { handleFreshWorksWidgetSupport } from "utils/helper";
import { freshWorksSupportActions } from "utils/constants";
class Overview extends Component {
   constructor(props) {
      super(props);

      const { product } = this.props;

      this.state = {
         selectedOfferingIndex: 0,
         productId: product.id,
      };
   }

   handleChange = (key, value) => {
      this.setState({ [key]: value });
   };

   handleFreshdeskWidget = () => {
      const { tokens, myOrganization, product } = this.props;
      const { selectedOfferingIndex } = this.state;
      const selectedOffering = ((product || {}).offerings || {})[selectedOfferingIndex];

      handleFreshWorksWidgetSupport(
         {
            tokens: tokens,
            product: product,
            offering: selectedOffering,
            organization: myOrganization,
         },
         freshWorksSupportActions.REQUEST_APPROVAL
      );
   };

   handleRedirection = (path) => {
      const { history } = this.props;

      history.push(path);
   };

   render() {
      const { selectedOfferingIndex } = this.state;
      const { productById, productStatusesById, product } = this.props;
      return (
         <CustomSpinner loading={productById.loading || productStatusesById.loading}>
            <OverviewComponent
               selectedOfferingIndex={selectedOfferingIndex}
               handleChange={this.handleChange}
               product={product || {}}
               handleFreshdeskWidget={this.handleFreshdeskWidget}
               productStatusesById={productStatusesById.data || {}}
               handleRedirection={this.handleRedirection}
            />
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   products: { productById, productStatusesById },
   auth: { tokens },
   shared: { myOrganization },
}) => ({
   productById,
   tokens,
   myOrganization,
   productStatusesById,
});

export default connect(mapStateToProps, null)(Overview);

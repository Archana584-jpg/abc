import React, { Component } from "react";
import { EpfoPassbookComponent } from "screens/sandbox/components";
import { productOfferingFormSteps } from "screens/sandbox/constants";
import { connect } from "react-redux";
import { getUsersIssuedDataWRTProductOffering, getDataWRTProductOffering } from "screens/sandbox/actions";
import { Output } from "screens/sandbox/containers/output";
import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { productOfferingOutputSteps, offeringsEndpointMapping } from "screens/sandbox/constants";
import { CustomSpinner } from "shared";
import { apiCallMethodTypes } from "utils/constants";

const { EPFO_VERIFICATION } = productsMapping;
const epfoVerificationService = productsOfferingsMapping[EPFO_VERIFICATION];

class EpfoPassbook extends Component {
   constructor(props) {
      super(props);
      const {
         [productsMapping.EPFO_VERIFICATION]: {
            [productsOfferingsMapping[productsMapping.EPFO_VERIFICATION].offerings.EPFO_FETCH_PASSBOOK]: {
               INITIAL_OUTPUT,
            },
         },
      } = productOfferingOutputSteps;
      this.state = {
         activeStep: INITIAL_OUTPUT,
      };
   }

   componentDidMount = () => {
      const { result } = this.props;
      const {
         [EPFO_VERIFICATION]: {
            [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: { INITIAL_OUTPUT, JSON_OUTPUT },
         },
      } = productOfferingOutputSteps;

      if (result.data.employment_data) {
         this.setState({ activeStep: JSON_OUTPUT });
      }
   };

   handleResult = (data) => {
      const { formDataInitialValuesWRTProductOfferingStep, getDataWRTProductOffering } = this.props;
      const {
         [EPFO_VERIFICATION]: {
            [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: { FINAL_FORM },
         },
      } = productOfferingFormSteps;
      const body = {
         member_id: data.member_id,
         office_id: data.office_id,
      };
      getDataWRTProductOffering({
         headers: formDataInitialValuesWRTProductOfferingStep.headers,
         nextStep: FINAL_FORM,
         service: {
            product: epfoVerificationService.key,
            offering: epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK,
            endpoint: offeringsEndpointMapping.FETCH_PASSBOOK,
         },
         body: body,
         apiCallMethodType: apiCallMethodTypes.POST,
      });
   };

   handleChange = (key, value) => {
      this.setState({ [key]: value });
   };

   getEmployersList = () => {
      const { getDataWRTProductOffering, formDataInitialValuesWRTProductOfferingStep } = this.props;
      const {
         [EPFO_VERIFICATION]: {
            [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: { FINAL_FORM },
         },
      } = productOfferingFormSteps;
      getDataWRTProductOffering({
         headers: formDataInitialValuesWRTProductOfferingStep.headers,
         nextStep: FINAL_FORM,
         service: {
            product: epfoVerificationService.key,
            offering: epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK,
            endpoint: offeringsEndpointMapping.EMPLOYERS_PASSBOOK,
         },
         apiCallMethodType: apiCallMethodTypes.GET,
      });
   };

   render() {
      const { activeStep } = this.state;
      const {
         [EPFO_VERIFICATION]: {
            [epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK]: { JSON_OUTPUT },
         },
      } = productOfferingOutputSteps;
      const { product, result } = this.props;
      return (
         <CustomSpinner loading={(result || {}).loading}>
            {activeStep === JSON_OUTPUT ? (
               <Output
                  data={(result || {}).data}
                  productKey={epfoVerificationService.key}
                  offeringKey={epfoVerificationService.offerings.EPFO_FETCH_PASSBOOK}
                  handleChange={this.getEmployersList}
                  product={product}
               />
            ) : (
               <EpfoPassbookComponent
                  data={((result || {}).data || {}).employers}
                  handleClick={this.handleResult}
                  getEmployersList={this.getEmployersList}
               />
            )}
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({ sandbox: { result, formDataInitialValuesWRTProductOfferingStep } }) => ({
   result,
   formDataInitialValuesWRTProductOfferingStep,
});

const mapDispatchToProps = { getUsersIssuedDataWRTProductOffering, getDataWRTProductOffering };

export default connect(mapStateToProps, mapDispatchToProps)(EpfoPassbook);

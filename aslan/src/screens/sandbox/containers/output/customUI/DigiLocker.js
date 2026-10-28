import React, { Component } from "react";
import { DigiLockerComponent } from "screens/sandbox/components";
import { productOfferingFormSteps, outputViewOptions } from "screens/sandbox/constants";
import { isEmpty, isEqual, snakeCase } from "lodash";
import { connect } from "react-redux";
import { getUsersIssuedDataWRTProductOffering, getDataWRTProductOffering } from "screens/sandbox/actions";
import { Output } from "screens/sandbox/containers/output";
import { productsMapping, productsOfferingsMapping } from "utils/constants";
import { productOfferingOutputSteps, offeringsEndpointMapping } from "screens/sandbox/constants";
import { CustomSpinner } from "shared";
import { apiCallMethodTypes } from "utils/constants";

class DigiLocker extends Component {
   constructor(props) {
      super(props);
      const {
         digilocker: {
            "digilocker-kyc": { INITIAL_OUTPUT },
         },
      } = productOfferingOutputSteps;
      this.state = {
         activeStep: INITIAL_OUTPUT,
         result: props.result,
         buttonsMapping: ["JSON", "XML", "FILE"],
      };
   }

   componentDidUpdate = (prevProps) => {
      const { result, issuedFile } = this.props;
      const {
         digilocker: {
            "digilocker-kyc": { INITIAL_OUTPUT, JSON_OUTPUT },
         },
      } = productOfferingOutputSteps;

      if (!isEqual(prevProps.result.data, result.data) && !isEmpty(result.data)) {
         if (result.data.issued_files) {
            this.setState({ activeStep: INITIAL_OUTPUT, result: result });
         }
      }

      if (!isEqual(prevProps.issuedFile.data, issuedFile.data) && !isEmpty(issuedFile.data)) {
         if (issuedFile.data.document) {
            this.setState({ activeStep: JSON_OUTPUT });
         }
      }
   };

   handleResultWRTFileFormatType = (data, fileType) => {
      const { getUsersIssuedDataWRTProductOffering, formDataInitialValuesWRTProductOfferingStep } = this.props;
      const body = {
         file_uri: data.uri,
         format: fileType,
         selectedFileName: snakeCase(data.name),
      };
      getUsersIssuedDataWRTProductOffering({
         headers: (formDataInitialValuesWRTProductOfferingStep || {}).headers,
         body: body,
      });
   };

   handlePrevious = () => {
      const { getDataWRTProductOffering, formDataInitialValuesWRTProductOfferingStep } = this.props;
      const {
         digilocker: {
            "digilocker-kyc": { FINAL_FORM },
         },
      } = productOfferingFormSteps;
      const { DIGILOCKER } = productsMapping;
      const digilockerVerificationService = productsOfferingsMapping[DIGILOCKER];
      getDataWRTProductOffering({
         headers: formDataInitialValuesWRTProductOfferingStep.headers,
         nextStep: FINAL_FORM,
         service: {
            product: digilockerVerificationService.key,
            offering: digilockerVerificationService.offerings.DIGILOCKER_KYC,
            endpoint: offeringsEndpointMapping.ISSUED_FILES,
         },
         apiCallMethodType: apiCallMethodTypes.GET,
      });
   };

   handleChange = (key, value) => {
      this.setState({ [key]: value });
   };

   render() {
      const { activeStep, result, buttonsMapping } = this.state;
      const { DIGILOCKER } = productsMapping;
      const digilockerVerificationService = productsOfferingsMapping[DIGILOCKER];
      const {
         digilocker: {
            "digilocker-kyc": { JSON_OUTPUT },
         },
      } = productOfferingOutputSteps;
      const { product, issuedFile } = this.props;
      return (
         <CustomSpinner loading={issuedFile.loading}>
            {activeStep === JSON_OUTPUT ? (
               <Output
                  data={(issuedFile || {}).data}
                  productKey={digilockerVerificationService.key}
                  offeringKey={digilockerVerificationService.offerings.DIGILOCKER_KYC}
                  handleChange={this.handlePrevious}
                  product={product}
                  currentActiveTab={outputViewOptions.JSON}
               />
            ) : (
               <DigiLockerComponent
                  data={((result || {}).data || {}).issued_files}
                  handleClick={this.handleResultWRTFileFormatType}
                  buttonsMapping={buttonsMapping}
               />
            )}
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({ sandbox: { result, formDataInitialValuesWRTProductOfferingStep, issuedFile } }) => ({
   result,
   formDataInitialValuesWRTProductOfferingStep,
   issuedFile,
});

const mapDispatchToProps = { getUsersIssuedDataWRTProductOffering, getDataWRTProductOffering };

export default connect(mapStateToProps, mapDispatchToProps)(DigiLocker);

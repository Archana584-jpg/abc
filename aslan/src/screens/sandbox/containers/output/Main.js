import React, { Component } from "react";
import { OutputComponent } from "screens/sandbox/components";
import { outputViewOptions, displayComponents, outputKeyMapping } from "screens/sandbox/constants";
import { productOfferingsSampleOutput } from "screens/sandbox/templates/sampleOutputs";
import { outputWRTOffering } from "screens/sandbox/templates/outputs";
import { outputKeyMappingWRTProductOfferings, extraFunctionalityHandler } from "screens/sandbox/templates/constants";
import { connect } from "react-redux";

class Output extends Component {
   constructor(props) {
      super(props);

      this.state = {
         activeTab: props.currentActiveTab || outputViewOptions.TABULAR,
         resultFormat: this.handleOutputType(),
         tabularData: this.handleTabularData(),
         JSONData: JSON.stringify(props.data || {}, null, 3),
         offeringName: this.getSelectedOfferingName(),
      };
   }

   handleOutputType = () => {
      const { outputType, productKey, offeringKey } = this.props;
      return outputType === displayComponents.SAMPLE_OUTPUT
         ? ((productOfferingsSampleOutput[productKey] || {})[offeringKey] || {}).outputType
         : ((outputWRTOffering || {})[productKey] || {})[offeringKey];
   };

   handleTabularData = () => {
      const { outputType, productKey, offeringKey, data } = this.props;
      const finalOutputKeys = (outputKeyMappingWRTProductOfferings[productKey] || {})[offeringKey] || [];
      const transformedData = {};
      finalOutputKeys.forEach((key) => {
         transformedData[key] =
            outputType === displayComponents.SAMPLE_OUTPUT ? ((data || {}).data || {})[key] : data[key];
         if ((transformedData[key] || {})[outputKeyMapping.PHOTO_BASE64]) {
            transformedData[outputKeyMapping.PHOTO_BASE64] = transformedData[key][outputKeyMapping.PHOTO_BASE64];
         }
      });
      return transformedData;
   };

   handleChange = (key, value) => {
      const { handleChange } = this.props;
      if (handleChange && key === "previous") {
         handleChange();
      } else {
         this.setState({ [key]: value });
      }
   };

   getSelectedOfferingName = () => {
      const { product, offeringKey } = this.props;
      const currentOffering = ((product || {}).offerings || []).filter((item) => item.key === offeringKey);
      return (currentOffering[0] || {}).name;
   };

   handleExtraFunctionality = () => {
      const { productKey, offeringKey, formDataInitialValuesWRTProductOfferingStep } = this.props;
      extraFunctionalityHandler[productKey][offeringKey]({
         data: { payload: formDataInitialValuesWRTProductOfferingStep.body || {} || "", ...this.handleTabularData() },
      });
   };

   render() {
      const { data, outputType, productKey, offeringKey, orgConfig } = this.props;
      const { activeTab, resultFormat, tabularData, JSONData, offeringName } = this.state;
      return (
         <OutputComponent
            data={data}
            activeTab={activeTab}
            handleChange={this.handleChange}
            outputType={outputType}
            resultFormat={resultFormat}
            tabularData={tabularData}
            JSONData={JSONData}
            productKey={productKey}
            offeringKey={offeringKey}
            offeringName={offeringName}
            handleExtraFunctionality={this.handleExtraFunctionality}
            orgConfig={orgConfig}
         />
      );
   }
}

const mapStateToProps = ({ sandbox: { formDataInitialValuesWRTProductOfferingStep }, shared: { orgConfig } }) => ({
   formDataInitialValuesWRTProductOfferingStep,
   orgConfig,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Output);

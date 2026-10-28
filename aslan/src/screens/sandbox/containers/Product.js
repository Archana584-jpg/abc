import React, { Component } from "react";
import { ProductComponent, ViewInputComponent } from "screens/sandbox/components";
import { connect } from "react-redux";
import { CustomSpinner, CustomModal } from "shared";
import { isEmpty, isEqual, sortBy } from "lodash";
import { fetchCredentialsById, fetchAllCredentials } from "screens/credentials/actions";
import { setAPIServiceHeaders, setSelectedCredentialId } from "shared/actions";
import {
   productsOfferingsMapping,
   resourceOptions,
   apiResponseCodeWRTOfferings,
   productsMapping,
   apiCallMethodTypes,
} from "utils/constants";
import {
   generateOTPWRTProductOffering,
   saveFormData,
   setCurrentStepWRTOffering,
   resetReducer,
   getDataWRTProductOffering,
} from "screens/sandbox/actions";
import {
   formActionsKeyMapping,
   productOfferingFormSteps,
   displayComponents,
   offeringsEndpointMapping,
} from "screens/sandbox/constants";
import { dispatch } from "store/store";
import { message } from "antd";
import { actionsMappingWRTOfferingForm } from "screens/sandbox/helper";
import { kebabCasetoEnumFormat, redirectToExternalLink, convertBase64, handleBackButton } from "utils/helper";
import { offeringsSchema } from "screens/sandbox/templates/forms";
import { withRouter } from "react-router-dom";
import { Output } from "screens/sandbox/containers";
import { productOfferingsSampleOutput } from "screens/sandbox/templates/sampleOutputs";
import { handleUsersLastInputWRTCurrentStep } from "screens/sandbox/helper";
import { gridlinesPortalUrl } from "utils/config";
import { getProductById } from "screens/products/helper";

class Product extends Component {
   constructor(props) {
      super(props);
      const {
         match: {
            params: { id, offering },
         },
      } = this.props;
      this.state = {
         productId: id || "",
         currentStep: props.offeringCurrentStep,
         selectedOfferingTab: offering || "",
         product: {},
         selectedComponentSection: null,
         previouslySelectedCredentialId: "",
         isProductDetailsFetched: false,
      };
   }

   formRef = React.createRef();

   componentDidMount = () => {
      const {
         resetReducer,
         location: { search },
      } = this.props;
      const { productId, selectedOfferingTab } = this.state;
      //This is for the Digilocker offering when a user is redirected from the Digilocker portal. It takes query parameters and extracts the transaction ID for further processing.
      if (search) {
         this.handleDigilockerRedirectionReturn(search);
      }

      if (productId) {
         this.handleSelectedProductObjAndCredential(true);
      }

      if (!selectedOfferingTab) {
         resetReducer();
      }

      window.onpopstate = () => handleBackButton("/sandbox");
   };

   componentDidUpdate = (prevProps) => {
      const {
         credentialsById,
         setAPIServiceHeaders,
         credentials,
         offeringCurrentStep,
         match: { params },
         selectedCredentialId,
         setSelectedCredentialId,
         formDataInitialValuesWRTProductOfferingStep,
         result,
      } = this.props;
      const { productId, previouslySelectedCredentialId } = this.state;

      this.handleSelectedProductObjAndCredential(false);

      if (!isEqual(prevProps.credentials.data, credentials.data) && !isEmpty(credentials.data)) {
         //This is for checking; we do not need any previously selected credential ID.
         if (!previouslySelectedCredentialId) {
            let isTestCredentialFoundWRTSelectedOffering = false;
            (credentials.data || []).forEach((item) => {
               if (item.trial) {
                  this.handleCredentialSelection((item || {}).id);
                  setSelectedCredentialId((item || {}).id);
                  isTestCredentialFoundWRTSelectedOffering = true;
               }
            });
            //If the test credential is not found for the selected offering.
            if (!isTestCredentialFoundWRTSelectedOffering) {
               const firstCredential = ((credentials.data || [])[0] || {}).id;
               this.handleCredentialSelection(firstCredential);
               setSelectedCredentialId(firstCredential);
            }
         }
      } else {
         //If the user does not have any credentials for the selected product.
         if (isEmpty(credentials.data) && !previouslySelectedCredentialId) {
            setSelectedCredentialId("");
         }
      }

      if (!isEqual(prevProps.credentialsById.data, credentialsById.data) && !isEmpty(credentialsById.data)) {
         setAPIServiceHeaders((credentialsById.data[selectedCredentialId] || {}).api_key || "");
      }

      if (!isEqual(prevProps.offeringCurrentStep, offeringCurrentStep)) {
         this.setState({ currentStep: offeringCurrentStep });
         if (params.offering) {
            this.navigateTo(`/sandbox/${productId}/${params.offering}`);
         }
      }

      // This is used for redirecting to the Digilocker portal for user authentication.
      if (
         !isEqual(formDataInitialValuesWRTProductOfferingStep, prevProps.formDataInitialValuesWRTProductOfferingStep) &&
         !isEmpty(formDataInitialValuesWRTProductOfferingStep.body)
      ) {
         if (formDataInitialValuesWRTProductOfferingStep.body.authorization_url) {
            redirectToExternalLink(formDataInitialValuesWRTProductOfferingStep.body.authorization_url, "_self");
         }
      }

      if (!isEqual(result.data, prevProps.result.data) && !isEmpty(result.data)) {
         window.requestAnimationFrame(() => {
            window.scrollTo(0, document.body.scrollHeight);
         });
      }
   };

   handleSelectedProductObjAndCredential = (iscalledOnMount) => {
      const {
         productById,
         offeringCurrentStep,
         match: { params },
         formDataInitialValuesWRTProductOfferingStep,
         getDataWRTProductOffering,
         categories,
         productGroups,
         products,
         productsByKey,
         fetchAllCredentials,
      } = this.props;
      const { productId, selectedOfferingTab } = this.state;
      const { DIGILOCKER } = productsMapping;
      const digilockerVerificationService = productsOfferingsMapping[DIGILOCKER];

      if (
         !isEmpty(productGroups.data) &&
         !isEmpty(products.data) &&
         !isEmpty(categories.list) &&
         (isEmpty(productById.data[productId]) || iscalledOnMount)
      ) {
         getProductById(products.data, productGroups, categories, productId);
         const product = (productById.data || {})[productId] || {};
         product.offerings = this.handleOfferingsSorting(product.offerings, product.key);
         const productFirstOffering = ((product.offerings || [])[0] || {}).key;
         const offeringKey = !params.offering ? productFirstOffering : params.offering;

         // This is used for digilocker offering to fetch user's all issued files from the digilocker.
         const currentFormAction = ((actionsMappingWRTOfferingForm[(product || {}).key] || {})[selectedOfferingTab] ||
            {})[offeringCurrentStep];
         if (
            ((formDataInitialValuesWRTProductOfferingStep || {}).headers || {})["X-Transaction-ID"] &&
            (currentFormAction || {}).nextStep
         ) {
            getDataWRTProductOffering({
               headers: formDataInitialValuesWRTProductOfferingStep.headers,
               nextStep: currentFormAction.nextStep,
               service: {
                  product: digilockerVerificationService.key,
                  offering: digilockerVerificationService.offerings.DIGILOCKER_KYC,
                  endpoint: offeringsEndpointMapping.ISSUED_FILES,
               },
               apiCallMethodType: apiCallMethodTypes.GET,
            });
         }
         if ((productsByKey.data[selectedOfferingTab] || {}).id) {
            fetchAllCredentials({
               product_ids: [(productsByKey.data[selectedOfferingTab] || {}).id],
               resource: resourceOptions.CREDENTIAL,
            });
         }
         this.setState(
            {
               selectedOfferingTab: offeringKey,
               product: product,
            },
            () => this.navigateTo(`/sandbox/${productId}/${offeringKey}`)
         );
      }
   };

   navigateTo = (url) => {
      const { history } = this.props;
      if (url) history.push(url);
   };

   handleChange = (key, value) => {
      const { productId } = this.state;
      const { productById, setCurrentStepWRTOffering, resetReducer, productsByKey, fetchAllCredentials } = this.props;
      const product = productById.data[productId];
      const offering = productsOfferingsMapping[product.key].offerings[kebabCasetoEnumFormat(value)];
      const currentOfferingFormSteps = productOfferingFormSteps[product.key][offering];
      if (key === "selectedOfferingTab") {
         this.navigateTo(`/sandbox/${productId}/${offering}`);
         setCurrentStepWRTOffering(currentOfferingFormSteps.INITIAL_FORM);
         resetReducer();
         this.formRef.current.resetFields();
         fetchAllCredentials({
            product_ids: [(productsByKey.data[value] || {}).id],
            resource: resourceOptions.CREDENTIAL,
         });
      }
      this.setState({ [key]: value });
   };

   handleCredentialSelection = (credentialId) => {
      const { fetchCredentialsById, setSelectedCredentialId, setAPIServiceHeaders, credentialsById } = this.props;
      if (credentialId) {
         //This checks if the credentials have already been fetched for the selected credential ID.
         if (!isEmpty(credentialsById.data) && credentialsById.data[credentialId]) {
            setAPIServiceHeaders((credentialsById.data[credentialId] || {}).api_key || "");
         } else {
            fetchCredentialsById({ id: credentialId });
         }
         setSelectedCredentialId(credentialId);
      }
   };

   handleSubmit = async (data, form) => {
      const {
         apiServiceHeaders,
         productById,
         transactionalData,
         selectedCredentialId,
         captchaResponse,
         saveFormData,
         match: { params },
         setCurrentStepWRTOffering,
         formDataInitialValuesWRTProductOfferingStep,
      } = this.props;
      const { currentStep, productId, selectedOfferingTab } = this.state;
      if (!selectedCredentialId) {
         message.error("Please select an API key");
         return;
      }
      const product = productById.data[productId];

      const base64Keys = Object.keys(data).filter((key) => key.includes("base64"));
      await Promise.all(
         base64Keys.map(async (key) => {
            if (typeof data[key] !== "string") {
               data[key] = await convertBase64(data[key].file);
            }
         })
      );

      if (((formDataInitialValuesWRTProductOfferingStep || {}).headers || {}).transaction_id) {
         apiServiceHeaders["X-Transaction-ID"] = formDataInitialValuesWRTProductOfferingStep.headers.transaction_id;
      }

      if (!isEmpty(transactionalData.data)) {
         apiServiceHeaders["X-Transaction-ID"] = transactionalData.data.transaction_id;
      }

      // Here, we set the consent value as 'Y' because the user cannot proceed to the next step without providing consent.
      const body = {
         ...data,
         consent: "Y",
      };

      if (((formDataInitialValuesWRTProductOfferingStep || {}).body || {}).share_code) {
         body["share_code"] = formDataInitialValuesWRTProductOfferingStep.body.share_code;
      }

      if (!isEmpty(captchaResponse.data)) {
         body["captcha_response"] = captchaResponse.data.captcha_base64;
         apiServiceHeaders["X-Transaction-ID"] = captchaResponse.data.transaction_id;
      }

      const currentFormAction = ((actionsMappingWRTOfferingForm[(product || {}).key] || {})[selectedOfferingTab] || {})[
         currentStep
      ];
      //this won't go on api response, using it for saving as inital value for next step form
      saveFormData({
         headers: apiServiceHeaders,
         nextStep: currentFormAction.nextStep,
         service: currentFormAction.service || {},
         body: {
            ...(formDataInitialValuesWRTProductOfferingStep || {}).body,
            ...body,
         },
      });

      if (!isEmpty(currentFormAction.body)) {
         currentFormAction.body.forEach((item) => {
            // For the Digilocker offering, have dynamically included the product ID in the URL, as the product ID may vary between the production and development environments.
            if (item.key === "redirect_uri") {
               body[item.key] = `${gridlinesPortalUrl}/sandbox/${productId}/${selectedOfferingTab}`;
            } else {
               body[item.key] = item.value;
            }
         });
      }

      if (currentFormAction.submit) {
         dispatch(
            currentFormAction.submit({
               headers: apiServiceHeaders,
               nextStep: currentFormAction.nextStep,
               service: currentFormAction.service || {},
               body: currentFormAction.requestPayloadKeys
                  ? this.handlePayload(currentFormAction.requestPayloadKeys, body)
                  : body,
               apiCallMethodType: currentFormAction.apiCallMethodType,
            })
         );
      } else {
         setCurrentStepWRTOffering(currentFormAction.nextStep);
         this.navigateTo(`/sandbox/${productId}/${params.offering}`);
      }

      if (currentFormAction.nextStep === "INITIAL_FORM") {
         form.resetFields();
      }
   };

   handleFormChange = (key, form) => {
      const { product, selectedOfferingTab, currentStep } = this.state;
      const { apiServiceHeaders, formDataInitialValuesWRTProductOfferingStep } = this.props;
      const currentFormAction = ((actionsMappingWRTOfferingForm[(product || {}).key] || {})[selectedOfferingTab] || {})[
         currentStep
      ];

      if (currentFormAction.actions) {
         const currentAction = currentFormAction.actions[key];
         if (key === formActionsKeyMapping.RESET) {
            form.resetFields();
         }
         dispatch(
            currentAction({
               headers: apiServiceHeaders,
               nextStep: currentStep,
               service: currentFormAction.service || {},
               body: handleUsersLastInputWRTCurrentStep({
                  productKey: (product || {}).key,
                  offeringKey: selectedOfferingTab,
                  formData: formDataInitialValuesWRTProductOfferingStep,
                  currentStep: currentStep,
               }),
               apiCallMethodType: currentFormAction.apiCallMethodType,
            })
         );
      }
   };

   handleOfferingsSorting = (offerings, productKey) => {
      const activeProductOfferings = [];
      const inactiveProductOfferings = [];

      (offerings || []).forEach((item) => {
         if ((offeringsSchema[productKey] || {})[item.key]) {
            activeProductOfferings.push(item);
         } else {
            inactiveProductOfferings.push(item);
         }
      });

      return [...sortBy(activeProductOfferings, "priority"), ...sortBy(inactiveProductOfferings, "name")];
   };

   handleDigilockerRedirectionReturn = (search) => {
      const { apiServiceHeaders, selectedCredentialId, saveFormData } = this.props;
      const searchParams = new URLSearchParams(search);
      const transactionId = searchParams.get("transaction_id");
      const code = searchParams.get("code");
      const errorMessage = searchParams.get("message");
      const { DIGILOCKER_AUTHORIZATION_SUCCESS } =
         apiResponseCodeWRTOfferings[productsMapping.DIGILOCKER][
            productsOfferingsMapping[productsMapping.DIGILOCKER].offerings.DIGILOCKER_KYC
         ];

      if (code === DIGILOCKER_AUTHORIZATION_SUCCESS) {
         if (transactionId) {
            apiServiceHeaders["X-Transaction-ID"] = transactionId;
         }
         saveFormData({ headers: apiServiceHeaders });
      } else {
         message.error(errorMessage);
      }
      // This is regarding the DigiLocker offering. After being redirected from the DigiLocker portal, we need the previously selected credential ID.
      this.setState({ previouslySelectedCredentialId: selectedCredentialId });
   };

   handlePayload = (keys, body) => {
      const payload = {};
      (keys || []).forEach((key) => {
         payload[key] = body[key];
      });
      return payload;
   };

   componentWillUnmount = () => {
      window.onpopstate = null;
   };

   render() {
      const {
         productById,
         credentialsById,
         credentials,
         transactionalData,
         result,
         selectedCredentialId,
         captchaResponse,
         formDataInitialValuesWRTProductOfferingStep,
      } = this.props;
      const { selectedOfferingTab, currentStep, product, selectedComponentSection } = this.state;
      return (
         <CustomSpinner
            loading={
               productById.loading ||
               credentialsById.loading ||
               credentials.loading ||
               transactionalData.loading ||
               result.loading ||
               captchaResponse.loading
            }
         >
            <ProductComponent
               product={product || {}}
               navigateTo={this.navigateTo}
               credentials={isEmpty(credentials.data) ? [] : credentials.data}
               currentStep={currentStep}
               handleChange={this.handleChange}
               selectedOfferingTab={selectedOfferingTab}
               handleSubmit={this.handleSubmit}
               handleCredentialSelection={this.handleCredentialSelection}
               selectedCredentialId={selectedCredentialId}
               result={(result || {}).data}
               verificationForm={
                  (((offeringsSchema[(product || {}).key] || {})[selectedOfferingTab] || {}).STEPS || {})[currentStep]
               }
               initialFormData={{
                  ...formDataInitialValuesWRTProductOfferingStep,
                  ...((offeringsSchema[(product || {}).key] || {})[selectedOfferingTab] || {}).INITIAL_VALUES,
               }}
               handleFormChange={this.handleFormChange}
               formRef={this.formRef}
            />
            <CustomModal
               visible={selectedComponentSection}
               bodyStyle={{ padding: 0 }}
               footer={false}
               handleClose={() => this.handleChange("selectedComponentSection", null)}
               maskClosable={false}
               width={
                  selectedComponentSection !== null
                     ? selectedComponentSection === displayComponents.USER_INPUT
                        ? "32.75rem"
                        : "54.813rem"
                     : "0rem"
               }
               className="tw-h-136 tw-overflow-hidden"
               destroyOnClose={true}
            >
               {selectedComponentSection === displayComponents.SAMPLE_OUTPUT ? (
                  <Output
                     data={
                        ((productOfferingsSampleOutput[(product || {}).key] || {})[selectedOfferingTab] || {})
                           .SAMPLE_OUTPUT || {}
                     }
                     outputType={displayComponents.SAMPLE_OUTPUT}
                     productKey={(product || {}).key}
                     offeringKey={selectedOfferingTab}
                     //Here, we pass the product object because we need the offering name for the download JSON option.
                     product={product}
                  />
               ) : (
                  <ViewInputComponent
                     data={handleUsersLastInputWRTCurrentStep({
                        productKey: (product || {}).key,
                        offeringKey: selectedOfferingTab,
                        formData: formDataInitialValuesWRTProductOfferingStep,
                        currentStep: currentStep,
                     })}
                  />
               )}
            </CustomModal>
         </CustomSpinner>
      );
   }
}

const mapStateToProps = ({
   products: { productById, products, productGroups, categories, productsByKey },
   sandbox: {
      offeringCurrentStep,
      transactionalData,
      result,
      captchaResponse,
      formDataInitialValuesWRTProductOfferingStep,
   },
   credentials: { credentialsById, credentials },
   shared: { apiServiceHeaders, selectedCredentialId },
}) => ({
   productById,
   offeringCurrentStep,
   credentialsById,
   credentials,
   apiServiceHeaders,
   transactionalData,
   result,
   selectedCredentialId,
   captchaResponse,
   formDataInitialValuesWRTProductOfferingStep,
   products,
   productGroups,
   categories,
   productsByKey,
});

const mapDispatchToProps = {
   fetchCredentialsById,
   setAPIServiceHeaders,
   fetchAllCredentials,
   generateOTPWRTProductOffering,
   setCurrentStepWRTOffering,
   setSelectedCredentialId,
   saveFormData,
   resetReducer,
   getDataWRTProductOffering,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));

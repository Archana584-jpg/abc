import React, { useState, useEffect } from "react";
import { MainComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchCredentialsById, fetchAllCredentials, updateCredentialsById } from "screens/credentials/actions";
import { setAPIServiceHeaders } from "shared/actions";
import { isEmpty } from "lodash";
import {
   fetchUPIIdMobile,
   fetchAddressLookupByMobile,
   fetchMobileNumberAge,
   fetchUAN,
   fetchGSTINByMobile,
   fetchIndividualPersonalProfile,
   resetAPIResponses,
   fetchEmploymentHistoryByUAN,
   fetchPassbookWithoutOTPByUAN,
   fetchPANDetailed,
   fetchFatherNameByPan,
   fetchCINByPAN,
   fetchUdyamLookup,
   fetchGSTINByPAN,
   fetchContactDetailsByDIN,
   fetchUANByPAN,
   fetchGSTINDetailed,
   fetchCompany,
   verifyUdyamAdvanced,
   verifyEmployer,
   setResponseInput,
   resetResponseInput,
   resetUserInput,
   fetchDigitalFootprint,
   fetchLPGDetailsByMobile,
   fetchRCLookupByMobile,
   setLoadingStatus,
   resetLoadingStatus,
} from "../actions";
import { getProductIdsWRTKeys } from "../helper";
import { APINameMapping, viewOptions } from "../constants";

const Main = () => {
   const dispatch = useDispatch();
   const [view, setView] = useState(viewOptions.INPUT);

   const {
      credentials,
      credentialsById,
      apiServiceHeaders,
      apiResponses,
      products,
      responseInput,
      userInput,
      loadingStatuses,
   } = useSelector(
      ({
         credentials: { credentials, credentialsById },
         shared: { apiServiceHeaders },
         xToDetails: { apiResponses, responseInput, userInput, loadingStatuses },
         products: { products },
      }) => ({
         credentials,
         credentialsById,
         apiServiceHeaders,
         apiResponses,
         products,
         responseInput,
         userInput,
         loadingStatuses,
      })
   );

   // Reset data on mount and cleanup on unmount
   useEffect(() => {
      resetAllData();

      return () => {
         resetAllData();
      };
   }, []);

   useEffect(() => {
      if (isEmpty(credentials.data)) {
         dispatch(fetchAllCredentials());
      }
   }, []);

   useEffect(() => {
      if (!isEmpty(credentials.data)) {
         handleCredentialSelection(credentials.data);
      }
   }, [credentials.data]);

   useEffect(() => {
      if (!isEmpty(credentialsById.data)) {
         const credential = Object.values(credentialsById.data).reduce((item) => item);
         dispatch(setAPIServiceHeaders(credential?.api_key || ""));
         handleProductsAdditonToCredential(credential);
      }
   }, [credentialsById.data]);

   useEffect(() => {
      const mobilePrefillResponse = apiResponses?.[APINameMapping.MOBILE_PREFILL];
      const panFromResponse = mobilePrefillResponse?.data?.personal_data?.document_data?.pan?.[0]?.value;

      if (panFromResponse && !responseInput.pan) {
         dispatch(
            setResponseInput({
               pan: panFromResponse,
            })
         );
      }

      const mobileAvailable = userInput.mobile || responseInput.mobile;
      if (
         mobileAvailable &&
         mobilePrefillResponse?.data &&
         !mobilePrefillResponse?.loading &&
         !panFromResponse &&
         !userInput.pan
      ) {
         const panOnlyAPIs = [
            APINameMapping.PAN_DETAILED,
            APINameMapping.FATHER_NAME_BY_PAN,
            APINameMapping.GSTIN_BY_PAN,
            APINameMapping.CIN_BY_PAN,
            APINameMapping.UAN_BY_PAN,
         ];

         panOnlyAPIs.forEach((apiName) => {
            dispatch(
               setLoadingStatus({
                  payload: {
                     apiName,
                     status: false,
                  },
               })
            );
         });
      }
   }, [apiResponses?.[APINameMapping.MOBILE_PREFILL]]);

   useEffect(() => {
      const gstinByPanResponse = apiResponses?.[APINameMapping.GSTIN_BY_PAN];
      const gstinByMobileResponse = apiResponses?.[APINameMapping.GSTIN_BY_MOBILE];
      const gstinFromPan = gstinByPanResponse?.data?.results?.map((item) => item?.document_id) || [];
      const gstinFromMobile = gstinByMobileResponse?.data?.gstin_data?.map((item) => item?.document_id) || [];

      const allGstins = [...(responseInput.gstin || []), ...gstinFromPan, ...gstinFromMobile];
      const uniqueGstins = [...new Set(allGstins.filter(Boolean))];

      if (uniqueGstins.length > (responseInput.gstin || []).length) {
         dispatch(
            setResponseInput({
               gstin: uniqueGstins,
            })
         );
         uniqueGstins.forEach((gstin) => {
            fetchDataWRTGSTIN(gstin);
         });
      }

      const panAvailable = userInput.pan || responseInput.pan;
      const mobileAvailable = userInput.mobile || responseInput.mobile;
      const hasGstinFromResponses = gstinFromPan.length || gstinFromMobile.length;

      const gstinByPanCompleted =
         !panAvailable || (gstinByPanResponse?.data && !gstinByPanResponse?.loading && !gstinFromPan.length);
      const gstinByMobileCompleted =
         !mobileAvailable ||
         (gstinByMobileResponse?.data && !gstinByMobileResponse?.loading && !gstinFromMobile.length);

      if (gstinByPanCompleted && gstinByMobileCompleted && !hasGstinFromResponses) {
         const gstinOnlyAPIs = [
            APINameMapping.GSTIN_DETAILED,
            APINameMapping.GSTIN_TURNOVER_DETAILS,
            APINameMapping.GSTIN_CONTACT_DETAILS,
            APINameMapping.MCC_CODES_BY_GSTIN,
         ];

         gstinOnlyAPIs.forEach((apiName) => {
            dispatch(
               setLoadingStatus({
                  payload: {
                     apiName,
                     status: false,
                  },
               })
            );
         });
      }
   }, [apiResponses?.[APINameMapping.GSTIN_BY_PAN], apiResponses?.[APINameMapping.GSTIN_BY_MOBILE]]);

   useEffect(() => {
      const panDetailedResponse = apiResponses?.[APINameMapping.PAN_DETAILED];
      const panDetailedData = panDetailedResponse?.data?.pan_data;
      const phoneFromResponse = panDetailedData?.phone;

      if (phoneFromResponse && !userInput.mobile && !responseInput.mobile) {
         dispatch(
            setResponseInput({
               mobile: phoneFromResponse,
            })
         );
         fetchDataWRTMobile(phoneFromResponse);
      }

      const panAvailable = userInput.pan || responseInput.pan;
      if (
         panAvailable &&
         panDetailedResponse?.data &&
         !panDetailedResponse?.loading &&
         !phoneFromResponse &&
         !userInput.mobile
      ) {
         const mobileOnlyAPIs = [
            APINameMapping.UPI_ID_MOBILE,
            APINameMapping.ADDRESS_LOOKUP_BY_MOBILE,
            APINameMapping.MOBILE_NUMBER_AGE,
            APINameMapping.GSTIN_BY_MOBILE,
            APINameMapping.DIGITAL_FOOTPRINT,
            APINameMapping.LPG_DETAILS_BY_MOBILE,
            APINameMapping.RC_LOOKUP_BY_MOBILE,
            APINameMapping.MOBILE_PREFILL,
            APINameMapping.LATEST_PASSBOOK_BY_MOBILE,
            APINameMapping.LATEST_EMPLOYMENT_BY_MOBILE,
         ];

         mobileOnlyAPIs.forEach((apiName) => {
            dispatch(
               setLoadingStatus({
                  payload: {
                     apiName,
                     status: false,
                  },
               })
            );
         });
      } else {
         const panOnlyAPIs = [
            APINameMapping.PAN_DETAILED,
            APINameMapping.FATHER_NAME_BY_PAN,
            APINameMapping.GSTIN_BY_PAN,
            APINameMapping.CIN_BY_PAN,
            APINameMapping.UAN_BY_PAN,
         ];
         panOnlyAPIs.forEach((apiName) => {
            dispatch(setLoadingStatus({ payload: { apiName, status: false } }));
         });
      }
   }, [apiResponses?.[APINameMapping.PAN_DETAILED]]);

   useEffect(() => {
      const cinByPanResponse = apiResponses?.[APINameMapping.CIN_BY_PAN];
      const CINByPANData = cinByPanResponse?.data?.cin_list || [];

      if (!isEmpty(CINByPANData) && isEmpty(responseInput.cin)) {
         dispatch(
            setResponseInput({
               cin: CINByPANData,
            })
         );
         CINByPANData.forEach((cin) => {
            dispatch(fetchCompany({ body: { company_id: cin, consent: "Y" }, headers: apiServiceHeaders }));
         });
      }
      const cinOnlyAPIs = [APINameMapping.FETCH_COMPANY];

      const panAvailable = userInput.pan || responseInput.pan;
      if (panAvailable && cinByPanResponse?.data && !cinByPanResponse?.loading && isEmpty(CINByPANData)) {
         cinOnlyAPIs.forEach((apiName) => {
            dispatch(
               setLoadingStatus({
                  payload: {
                     apiName,
                     status: false,
                  },
               })
            );
         });
      } else {
         //this i did for stop DIN loading when cin is not found
         cinOnlyAPIs.forEach((apiName) => {
            dispatch(setLoadingStatus({ payload: { apiName, status: false } }));
         });
      }
   }, [apiResponses?.[APINameMapping.CIN_BY_PAN]]);

   useEffect(() => {
      const fetchCompanyData = apiResponses?.[APINameMapping.FETCH_COMPANY];
      let allDins = [...(responseInput.din || [])];
      let dinsFromCompanyResponse = [];

      if (Array.isArray(fetchCompanyData)) {
         fetchCompanyData.forEach((response) => {
            const dinsFromResponse =
               response?.data?.company_data?.director_and_signatory_details
                  ?.map((director) => director?.din)
                  .filter(Boolean) || [];
            dinsFromCompanyResponse = [...dinsFromCompanyResponse, ...dinsFromResponse];
            allDins = [...allDins, ...dinsFromResponse];
         });
      } else if (fetchCompanyData?.data?.company_data?.director_and_signatory_details) {
         const dinsFromResponse =
            fetchCompanyData.data.company_data.director_and_signatory_details
               .map((director) => director?.din)
               .filter(Boolean) || [];
         dinsFromCompanyResponse = [...dinsFromCompanyResponse, ...dinsFromResponse];
         allDins = [...allDins, ...dinsFromResponse];
      }

      const uniqueDins = [...new Set(allDins.filter(Boolean))];

      if (uniqueDins.length > (responseInput.din || []).length) {
         dispatch(
            setResponseInput({
               din: uniqueDins,
            })
         );
         uniqueDins.forEach((din) => {
            fetchDataWRTDIN(din);
         });
      }

      const cinAvailable = userInput.cin || (!isEmpty(responseInput.cin) && responseInput.cin.length);
      if (cinAvailable && isEmpty(dinsFromCompanyResponse) && isEmpty(userInput.din)) {
         let hasCompletedResponse = false;
         if (Array.isArray(fetchCompanyData)) {
            hasCompletedResponse = fetchCompanyData.some((response) => response?.data && !response?.loading);
         } else if (fetchCompanyData) {
            hasCompletedResponse = fetchCompanyData?.data && !fetchCompanyData?.loading;
         }

         if (hasCompletedResponse) {
            const dinOnlyAPIs = [APINameMapping.CONTACT_DETAILS_BY_DIN];

            dinOnlyAPIs.forEach((apiName) => {
               dispatch(
                  setLoadingStatus({
                     payload: {
                        apiName,
                        status: false,
                     },
                  })
               );
            });
         }
      }
   }, [apiResponses?.[APINameMapping.FETCH_COMPANY]]);

   useEffect(() => {
      const udyamLookupData = apiResponses?.[APINameMapping.UDYAM_LOOKUP];
      let allUdyams = [...(responseInput.udyam || [])];

      if (Array.isArray(udyamLookupData)) {
         udyamLookupData.forEach((response) => {
            const udyamsFromResponse =
               response?.data?.udyam_data?.map((udyam) => udyam?.document_id).filter(Boolean) || [];
            allUdyams = [...allUdyams, ...udyamsFromResponse];
         });
      } else if (udyamLookupData?.data?.udyam_source) {
         const udyamsFromResponse =
            udyamLookupData.data.udyam_source.map((udyam) => udyam?.udyam_number).filter(Boolean) || [];
         allUdyams = [...allUdyams, ...udyamsFromResponse];
      }

      const uniqueUdyams = [...new Set(allUdyams.filter(Boolean))];

      if (uniqueUdyams.length > (responseInput.udyam || []).length) {
         dispatch(
            setResponseInput({
               udyam: uniqueUdyams,
            })
         );
         uniqueUdyams.forEach((udyam) => {
            fetchDataWRTUdyam(udyam);
         });
      }
   }, [apiResponses?.[APINameMapping.UDYAM_LOOKUP]]);

   useEffect(() => {
      const employmentHistoryData = apiResponses?.[APINameMapping.EMPLOYMENT_HISTORY_BY_UAN];
      let allEmployerNames = [...(responseInput.employerName || [])];

      if (Array.isArray(employmentHistoryData)) {
         employmentHistoryData.forEach((response) => {
            const employerNamesFromResponse =
               response?.data?.employment_data?.map((employment) => employment?.establishment_name).filter(Boolean) ||
               [];
            allEmployerNames = [...allEmployerNames, ...employerNamesFromResponse];
         });
      } else if (employmentHistoryData?.data?.employment_data) {
         const employerNamesFromResponse =
            employmentHistoryData.data.employment_data
               .map((employment) => employment?.establishment_name)
               .filter(Boolean) || [];
         allEmployerNames = [...allEmployerNames, ...employerNamesFromResponse];
      }

      const uniqueEmployerNames = [...new Set(allEmployerNames.filter(Boolean))];

      if (uniqueEmployerNames.length > (responseInput.employerName || []).length) {
         dispatch(
            setResponseInput({
               employerName: uniqueEmployerNames,
            })
         );
         uniqueEmployerNames.forEach((employerName) => {
            fetchDataWRTEmployer(employerName);
         });
      }
   }, [apiResponses?.[APINameMapping.EMPLOYMENT_HISTORY_BY_UAN]]);

   useEffect(() => {
      const rcLookupResponse = apiResponses?.[APINameMapping.RC_LOOKUP_BY_MOBILE];
      const rcFromResponse = rcLookupResponse?.data?.vehicle_data?.rc_number;

      if (rcFromResponse && !responseInput.rc) {
         dispatch(setResponseInput({ rc: rcFromResponse }));
      }

      const rcOnlyAPIs = [APINameMapping.RC_DETAILED];
      const mobileAvailable = userInput.mobile || responseInput.mobile;
      if (mobileAvailable && rcLookupResponse?.data && !rcLookupResponse?.loading && !rcFromResponse) {
         rcOnlyAPIs.forEach((apiName) => {
            dispatch(
               setLoadingStatus({
                  payload: {
                     apiName,
                     status: false,
                  },
               })
            );
         });
      } else if (!loadingStatuses?.[APINameMapping.RC_LOOKUP_BY_MOBILE]) {
         rcOnlyAPIs.forEach((apiName) => {
            dispatch(setLoadingStatus({ payload: { apiName, status: false } }));
         });
      }
   }, [apiResponses?.[APINameMapping.RC_LOOKUP_BY_MOBILE]]);

   useEffect(() => {
      if (!userInput.mobile) {
         const mobile =
            apiResponses?.[APINameMapping.PAN_DETAILED]?.data?.pan_data?.phone ||
            apiResponses?.[APINameMapping.VERIFY_UDYAM_ADVANCED]?.data?.enterprise_data?.mobile ||
            apiResponses?.[APINameMapping.GSTIN_DETAILED]?.data?.gstin_data?.principal_address?.mobile ||
            "";
         if (mobile) {
            dispatch(setResponseInput({ mobile: mobile }));
         }
      }

      //setting email
      if (!responseInput.email) {
         const email =
            apiResponses?.[APINameMapping.MOBILE_PREFILL]?.data?.personal_data?.email?.[0]?.value ||
            apiResponses?.[APINameMapping.PAN_DETAILED]?.data?.pan_data?.email ||
            apiResponses?.[APINameMapping.VERIFY_UDYAM_ADVANCED]?.data?.enterprise_data?.email ||
            apiResponses?.[APINameMapping.GSTIN_DETAILED]?.data?.gstin_data?.principal_address?.email ||
            "";
         if (email) {
            dispatch(setResponseInput({ email: email }));
         }
      }
   }, [
      apiResponses[APINameMapping.MOBILE_PREFILL],
      apiResponses[APINameMapping.PAN_DETAILED],
      apiResponses[APINameMapping.VERIFY_UDYAM_ADVANCED],
      apiResponses[APINameMapping.GSTIN_DETAILED],
   ]);

   useEffect(() => {
      const fetchUANData = apiResponses?.[APINameMapping.FETCH_UAN];
      const uanByPanData = apiResponses?.[APINameMapping.UAN_BY_PAN];
      let allUans = [...(responseInput.uan || [])];

      if (Array.isArray(fetchUANData)) {
         fetchUANData.forEach((response) => {
            const uansFromResponse = response?.data?.uan_data?.map((uan) => uan?.uan_number).filter(Boolean) || [];
            allUans = [...allUans, ...uansFromResponse];
         });
      } else if (fetchUANData?.data?.uan_source) {
         const uansFromResponse = fetchUANData.data.uan_source.map((uan) => uan?.uan).filter(Boolean) || [];
         allUans = [...allUans, ...uansFromResponse];
      }

      if (Array.isArray(uanByPanData)) {
         uanByPanData.forEach((response) => {
            const uansFromResponse = response?.data?.uan_list || [];
            allUans = [...allUans, ...uansFromResponse.filter(Boolean)];
         });
      } else if (uanByPanData?.data?.uan_list) {
         const uansFromResponse = uanByPanData.data.uan_list || [];
         allUans = [...allUans, ...uansFromResponse.filter(Boolean)];
      }

      const uniqueUans = [...new Set(allUans.filter(Boolean))];

      if (uniqueUans.length > (responseInput.uan || []).length) {
         dispatch(
            setResponseInput({
               uan: uniqueUans,
            })
         );
         uniqueUans.forEach((uan) => {
            fetchDataWRTUAN(uan);
         });
      }
   }, [apiResponses?.[APINameMapping.UAN_BY_PAN], apiResponses?.[APINameMapping.FETCH_UAN]]);

   useEffect(() => {
      if (responseInput.pan && !userInput.pan) {
         fetchDataWRTPANAndMobile(responseInput.pan, userInput.mobile);
      }
      if (responseInput.pan) {
         fetchDataWRTPAN(responseInput.pan);
      }
   }, [responseInput.pan]);

   useEffect(() => {
      if (responseInput.mobile && !userInput.mobile) {
         fetchDataWRTPANAndMobile(userInput.pan, responseInput.mobile);
      }
   }, [responseInput.mobile]);

   const fetchDataWRTUdyam = (udyam) => {
      dispatch(
         verifyUdyamAdvanced({ body: { udyam_reference_number: udyam, consent: "Y" }, headers: apiServiceHeaders })
      );
   };

   const fetchDataWRTGSTIN = (gstin) => {
      dispatch(fetchGSTINDetailed({ body: { gstin: gstin, consent: "Y" }, headers: apiServiceHeaders }));
   };

   const fetchDataWRTDIN = (din) => {
      dispatch(fetchContactDetailsByDIN({ body: { din: din, consent: "Y" }, headers: apiServiceHeaders }));
   };

   const fetchDataWRTUAN = (uan) => {
      dispatch(fetchEmploymentHistoryByUAN({ body: { uan: uan, consent: "Y" }, headers: apiServiceHeaders }));
      dispatch(fetchPassbookWithoutOTPByUAN({ body: { uan: uan, consent: "Y" }, headers: apiServiceHeaders }));
   };

   const fetchDataWRTEmployer = (employerName) => {
      dispatch(verifyEmployer({ body: { employer_name: employerName, consent: "Y" }, headers: apiServiceHeaders }));
   };

   const fetchDataWRTMobile = (mobile) => {
      dispatch(
         fetchUPIIdMobile({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
      dispatch(
         fetchAddressLookupByMobile({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
      dispatch(
         fetchMobileNumberAge({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
      dispatch(
         fetchGSTINByMobile({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
      dispatch(
         fetchIndividualPersonalProfile({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
      dispatch(
         fetchUAN({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
      dispatch(
         fetchUdyamLookup({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
      dispatch(fetchDigitalFootprint({ body: { phone: mobile, consent: "Y" }, headers: apiServiceHeaders }));
      dispatch(
         fetchLPGDetailsByMobile({
            body: {
               mobile_number: mobile,
               consent: "Y",
               consent_text: "I provide consent to fetch information.",
            },
            headers: apiServiceHeaders,
         })
      );
      dispatch(
         fetchRCLookupByMobile({
            body: { mobile_number: mobile, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
   };

   const fetchDataWRTPAN = (pan) => {
      dispatch(fetchGSTINByPAN({ body: { pan_number: pan, consent: "Y" }, headers: apiServiceHeaders }));
      dispatch(fetchCINByPAN({ body: { pan_number: pan, consent: "Y" }, headers: apiServiceHeaders }));
      dispatch(fetchPANDetailed({ body: { pan_number: pan, consent: "Y" }, headers: apiServiceHeaders }));
      dispatch(fetchFatherNameByPan({ body: { pan_number: pan, consent: "Y" }, headers: apiServiceHeaders }));
      dispatch(fetchUANByPAN({ body: { pan_number: pan, consent: "Y" }, headers: apiServiceHeaders }));
      dispatch(
         fetchUdyamLookup({
            body: { pan_number: pan, consent: "Y" },
            headers: apiServiceHeaders,
         })
      );
   };

   const fetchDataWRTPANAndMobile = (pan, mobile) => {
      if (mobile && pan) {
         dispatch(
            fetchUdyamLookup({
               body: { pan_number: pan, mobile_number: mobile, consent: "Y" },
               headers: apiServiceHeaders,
            })
         );
         dispatch(
            fetchUAN({
               body: { mobile_number: mobile, pan: pan, consent: "Y" },
               headers: apiServiceHeaders,
            })
         );
      }
   };

   const handleCredentialSelection = (credentials) => {
      (credentials || []).forEach((item) => {
         if (item.trial) {
            dispatch(fetchCredentialsById({ id: (item || {}).id }));
         }
      });
   };

   const handleProductsAdditonToCredential = (credential) => {
      const productIds = getProductIdsWRTKeys(products.data.entities);
      const missingIds = productIds.filter((id) => !credential.products.some((item) => item.id === id));
      if (missingIds.length) {
         dispatch(
            updateCredentialsById({
               id: credential.id,
               name: credential.name,
               assign_product_ids: missingIds,
               remove_product_ids: [],
            })
         );
      }
   };

   const handleLoading = () => {
      setView("loading");
      setTimeout(() => {
         setView("showDetails");
      }, 10000);
   };

   const fetchDataWRTUserInputs = () => {
      if (userInput.mobile && userInput.pan) {
         fetchDataWRTPANAndMobile(userInput.pan, userInput.mobile);
      }
      if (userInput.mobile) {
         fetchDataWRTMobile(userInput.mobile);
      }
      if (userInput.pan) {
         fetchDataWRTPAN(userInput.pan);
      }
   };

   const resetAllData = () => {
      dispatch(resetAPIResponses());
      dispatch(resetResponseInput());
      dispatch(resetUserInput());
      dispatch(resetLoadingStatus());
   };

   const handleViewChange = (key) => {
      switch (key) {
         case "input": {
            resetAllData();
            setView(key);
            return;
         }
         case "loading": {
            handleLoading();
            fetchDataWRTUserInputs();
            return;
         }
         default: {
            setView(key);
            return;
         }
      }
   };
   return (
      <MainComponent
         view={view}
         handleViewChange={handleViewChange}
         input={userInput}
         verificationData={apiResponses || {}}
      />
   );
};

export default Main;

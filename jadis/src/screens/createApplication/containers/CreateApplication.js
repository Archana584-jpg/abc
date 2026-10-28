import { useCallback, useEffect, useState } from "react";
import { CreateApplicationComponent } from "../components";
import { cloneDeep, has, isEmpty } from "lodash";
import CreateApplicationConfirmationPopup from "../components/CreateApplicationConfirmationPopup";
import sharedSelector from "shared/selector";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkflowsByOrgId, createApplication, clearCreateApplication } from "../actions";
import createApplicationSelector from "../selector";
import ApplicationCreatedPopup from "../components/ApplicationCreatedPopup";
import { createApplicationInitialValues } from "../constants";
import { copyToClipboard } from "utils/helper";
import { countries } from "assets/resources";

const CreateApplication = () => {
   const dispatch = useDispatch();
   const { organization } = useSelector(sharedSelector);
   const { workflows, applicationCreated } = useSelector(createApplicationSelector);

   const [showApplicationCreatedPopup, setShowApplicationCreatedPopup] = useState(false);
   const [data, setData] = useState(cloneDeep({ ...createApplicationInitialValues }));
   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
   const [copyPopoverVisible, setCopyPopoverVisible] = useState(false);

   useEffect(() => {
      if (!isEmpty(organization.data) && isEmpty(workflows.data)) {
         dispatch(fetchWorkflowsByOrgId({ orgId: organization?.data?.id }));
      }
   }, [organization.data]);

   useEffect(() => {
      if (!isEmpty(applicationCreated.data)) {
         handleChange("showApplicationCreatedPopup", true);
      }
   }, [applicationCreated.data]);

   const handleChange = (key, value) => {
      if (has(data, key)) {
         data[key] = value;
         setData(cloneDeep(data));
         return;
      }
      switch (key) {
         case "showConfirmationPopup":
            setShowConfirmationPopup(value);
            break;
         case "showApplicationCreatedPopup":
            if (!value) {
               setData(cloneDeep({ ...createApplicationInitialValues }));
               dispatch(clearCreateApplication());
            }
            setShowApplicationCreatedPopup(value);
            break;
         case "copyPopoverVisible":
            setCopyPopoverVisible(value);
            break;
         default:
            break;
      }
   };

   const handleSubmit = useCallback(() => {
      const body = cloneDeep({
         ...data,
         org_id: organization?.data?.id,
         mobile_country_code: countries?.[data?.["mobile_country_code"]]?.countryCode,
      });
      handleChange("showConfirmationPopup", false);
      dispatch(createApplication(body));
   }, [data, organization.data, dispatch]);

   const handleCopyLink = () => {
      copyToClipboard(applicationCreated.data.url).then(() => {
         handleChange("copyPopoverVisible", true);
         setTimeout(() => handleChange("copyPopoverVisible", false), 1500);
      });
   };

   return (
      <>
         <CreateApplicationComponent
            data={data}
            handleChange={handleChange}
            workflows={workflows.data}
         ></CreateApplicationComponent>

         {showConfirmationPopup && (
            <CreateApplicationConfirmationPopup
               handleChange={handleChange}
               handleSubmit={handleSubmit}
            ></CreateApplicationConfirmationPopup>
         )}

         {showApplicationCreatedPopup && (
            <ApplicationCreatedPopup
               applicationData={applicationCreated?.data}
               handleChange={handleChange}
               handleCopyLink={handleCopyLink}
               copyPopoverVisible={copyPopoverVisible}
            ></ApplicationCreatedPopup>
         )}
      </>
   );
};

export default CreateApplication;

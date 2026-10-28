import ViewActivityPopupComponent from "../components/ViewActivityPopup";
import { useEffect, useState } from "react";
import { activityPopupTabOptions } from "../constants";
import { useRouter } from "shared/hooks/useRouter";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplicationStatusHistory } from "../actions";
import applicationSelector from "../selector";

const ViewActivityPopup = ({ handleClose }) => {
   const [activeTab, setActiveTab] = useState(activityPopupTabOptions.STATUS_CHANGE);
   const { applicationStatusHistory } = useSelector(applicationSelector);
   const { params } = useRouter();
   const dispatch = useDispatch();

   useEffect(() => {
      switch (activeTab) {
         case activityPopupTabOptions.STATUS_CHANGE:
            dispatch(fetchApplicationStatusHistory({ applicationId: params?.id }));
            break;
         default:
            break;
      }
   }, [activeTab, params?.id, dispatch]);

   const handleChange = (key, value) => {
      switch (key) {
         case "activeTab":
            setActiveTab(value);
            break;
         default:
            break;
      }
   };

   return (
      <ViewActivityPopupComponent
         activeTab={activeTab}
         handleChange={handleChange}
         handleClose={handleClose}
         applicationStatusHistory={applicationStatusHistory}
      ></ViewActivityPopupComponent>
   );
};

export default ViewActivityPopup;

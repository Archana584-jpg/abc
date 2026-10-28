import ChangeApplicationStatusPopupComponent from "../components/ChangeApplicationStatusPopup";
import { useEffect, useState } from "react";
import { cloneDeep, isEmpty, find, lowerCase } from "lodash";
import { applicationStatuses, statusOptions } from "screens/applications/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeApplicationStatus as changeApplicationStatusAction, clearApplicationStatus } from "../actions";
import applicationSelector from "../selector";
import StatusChangeConfirmationPopup from "../components/StatusChangeConfirmationPopup";
import { findInCollection, showMessage } from "utils/helper";
import { useRouter } from "shared/hooks/useRouter";
import { menuItems } from "shared/components/Sidebar/constants";
import { MessageTypes } from "utils/constants";

const ChangeApplicationStatusPopup = ({ application, handleClose }) => {
   const [data, setData] = useState({
      status:
         lowerCase(application?.basic_application_data?.application_status) === statusOptions.EXPIRED
            ? statusOptions[application?.basic_application_data?.prev_application_status]
            : "",
      remarks: "",
   });
   const [statusChangeConfirmation, setStatusChangeConfirmation] = useState(false);
   const { changeApplicationStatus } = useSelector(applicationSelector);

   const dispatch = useDispatch();
   const { navigateTo } = useRouter();

   useEffect(() => {
      if (!isEmpty(changeApplicationStatus.data)) {
         showMessage({
            content: `The application status has been successfully changed to ${changeApplicationStatus?.data?.status}`,
            type: MessageTypes.SUCCESS,
         });
         handleClose();
         const menuItem = findInCollection(menuItems, {
            key: "label",
            value: changeApplicationStatus.data.previous_status_label,
         });
         !isEmpty(menuItem) && navigateTo(menuItem?.key);
         dispatch(clearApplicationStatus());
      }
   }, [changeApplicationStatus.data]);

   const handleChange = (key, value) => {
      switch (key) {
         case "status":
         case "remarks":
            data[key] = value;
            setData(cloneDeep(data));
            break;
         case "statusChangeConfirmation":
            setStatusChangeConfirmation(value);
            break;
         default:
            break;
      }
   };

   const handleSubmit = () => {
      if (!statusChangeConfirmation) {
         handleChange("statusChangeConfirmation", true);
      } else {
         const body = {
            remarks: data.remarks,
            applicationId: application?.basic_application_data?.application_id,
            status:
               lowerCase(application?.basic_application_data?.application_status) === statusOptions.EXPIRED
                  ? applicationStatuses?.[statusOptions.EXPIRED]?.status
                  : applicationStatuses?.[data.status]?.status,
            previous_status_label: application?.basic_application_data?.application_status,
         };
         dispatch(changeApplicationStatusAction(body));
      }
   };

   return statusChangeConfirmation ? (
      <StatusChangeConfirmationPopup
         status={data.status}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         handleClose={handleClose}
      ></StatusChangeConfirmationPopup>
   ) : (
      <ChangeApplicationStatusPopupComponent
         data={data}
         currentStatus={application?.basic_application_data?.application_status}
         previousStatus={application?.basic_application_data?.prev_application_status}
         handleClose={handleClose}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         statusChangeConfirmation={statusChangeConfirmation}
      ></ChangeApplicationStatusPopupComponent>
   );
};

export default ChangeApplicationStatusPopup;

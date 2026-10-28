import { FileDone, FileExclamation, ExceptionFile } from "assets/images";
import { applicationStatuses } from "screens/applications/constants";
import { CustomImage } from "shared/components";
import { statusOptions as applicationStatusOptions } from "screens/applications/constants";
import { formatDate } from "utils/helper";
import { dateTimeFormats } from "shared/constants";

export const tabOptions = {
   USER_JOURNEY: "USER_JOURNEY",
   BACKGROUND_CHECKS: "BACKGROUND_CHECKS",
};

export const activityPopupTabOptions = {
   STATUS_CHANGE: "STATUS_CHANGE",
   INTERNAL_USER_ACTIVITY: "INTERNAL_USER_ACTIVITY",
   JOURNEY_ACTIVITY: "JOURNEY_ACTIVITY",
};

export const tabs = [
   {
      key: tabOptions.USER_JOURNEY,
      label: "User Journey",
   },
   // {
   //    key: tabOptions.BACKGROUND_CHECKS,
   //    label: "Background Checks",
   // },
];

export const activityPopupTabs = [
   {
      key: activityPopupTabOptions.STATUS_CHANGE,
      label: "Status Change",
   },
   // {
   //    key: activityPopupTabOptions.INTERNAL_USER_ACTIVITY,
   //    label: "Internal User Activity",
   // },
   // {
   //    key: activityPopupTabOptions.JOURNEY_ACTIVITY,
   //    label: "Journey Activity",
   // },
];

export const activityTableColumns = {
   STATUS_CHANGE: [
      {
         title: "Date and Time",
         dataIndex: "created_timestamp",
         key: "created_timestamp",
         width: "18%",
         render: (item) => formatDate(item, dateTimeFormats.DATE_TIME),
      },
      {
         title: "Action",
         dataIndex: "new_status",
         key: "new_status",
         width: "17%",
         render: (new_status, record) =>
            applicationStatuses?.[applicationStatusOptions[record.previous_status]]?.actions?.[
               applicationStatusOptions[new_status]
            ] || "",
      },
      {
         title: "Action Taken By",
         dataIndex: "created_by",
         key: "created_by",
         width: "15%",
      },
      {
         title: "Description",
         dataIndex: "new_status",
         key: "new_status",
         width: "25%",
         render: (item) => (
            <span>
               Application Status changed to{" "}
               <span style={{ fontWeight: 600, color: applicationStatuses?.[applicationStatusOptions[item]]?.color }}>
                  {applicationStatuses?.[applicationStatusOptions[item]]?.label}{" "}
               </span>
            </span>
         ),
      },
      {
         title: "Comment",
         dataIndex: "remarks",
         key: "remarks",
         width: "25%",
      },
   ],
};

export const statusChangeMappings = {
   [applicationStatuses?.[applicationStatusOptions.NEEDS_REVIEW].label]: [
      {
         key: "",
         label: "Manually Approve",
         icon: <CustomImage src={FileDone} />,
         value: applicationStatusOptions.MANUALLY_APPROVED,
      },
      {
         key: "",
         label: "Manually Decline",
         icon: <CustomImage src={FileExclamation} />,
         value: applicationStatusOptions.MANUALLY_DECLINED,
      },
      {
         key: "",
         label: "Re-Open",
         icon: <CustomImage src={ExceptionFile}></CustomImage>,
         value: applicationStatusOptions.RE_OPENED,
      },
   ],
   [applicationStatuses?.[applicationStatusOptions.EXPIRED].label]: [
      {
         key: "",
         label: "Re-Open",
         icon: <CustomImage src={ExceptionFile} />,
         value: applicationStatusOptions.EXPIRED,
      },
   ],
};

export const columns = [
   {
      title: "Label",
      dataIndex: "label",
      key: "label",
      width: "40%",
   },
   {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "60%",
      className: "overflow-auto whitespace-nowrap",
   },
];

export const validationColumns = [
   {
      title: "Label",
      dataIndex: "label",
      key: "label",
      width: "40%",
   },
   {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "60%",
   },
];

export const customCardKeys = {
   AUTHORISED_SIGNATORY_VERIFICATION: "authorised_signatory_verification",
   UPLOAD_OTHER_BUSINESS_DOCUMENTS: "other_business_documents",
};

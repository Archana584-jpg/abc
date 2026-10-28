import { activityTableColumns } from "../constants";
import { CustomTable } from "shared/components";

const StatusHistory = ({ applicationStatusHistory }) => {
   return (
      <CustomTable
         className="table-container tw-whitespace-pre"
         columns={activityTableColumns.STATUS_CHANGE}
         data={applicationStatusHistory.data || []}
         scroll={{
            x: "max-content",
            y: 340,
         }}
         pagination={false}
      />
   );
};

export default StatusHistory;

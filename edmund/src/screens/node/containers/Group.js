import { useSelector } from "react-redux";
import { GroupComponent } from "../components";
import nodeSelector from "../selector";

const Group = ({ data }) => {
   const { applicationById } = useSelector(nodeSelector);

   return <GroupComponent data={data} applicationData={applicationById.data} />;
};

export default Group;

import sharedSelector from "shared/selector";
import { HeaderComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAPIActionType } from "../helper";

const Header = ({ data }) => {
   const dispatch = useDispatch();
   const { applicationId } = useSelector(sharedSelector);

   const handleAction = ({ action }) => {
      dispatch({
         type: action?.api?.type,
         body: {
            applicationId,
            fileKey: getAPIActionType(action?.api?.fileKey),
            onSuccess: action.onSuccess,
            onFailure: action.onFailure,
            requestType: getAPIActionType(action?.api?.requestType),
            executeActionType: getAPIActionType(action?.api?.executeActionType),
         },
      });
   };

   return <HeaderComponent data={data} handleAction={handleAction} />;
};

export default Header;

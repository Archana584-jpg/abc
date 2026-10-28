import Component from "./Component";
import { useDispatch, useSelector } from "react-redux";
import { showHideSessionExpiryModal } from "shared/actions";
import { logoutSuccess } from "screens/login/actions";
import { useRouter } from "shared/hooks/useRouter";
import sharedSelector from "shared/selector";

const Container = () => {
   const dispatch = useDispatch();
   const { navigateTo } = useRouter();
   const { toggleSessionExpiryModalVisibility } = useSelector(sharedSelector);

   const handleReLogin = () => {
      dispatch(showHideSessionExpiryModal(false));
      navigateTo("");
      dispatch(logoutSuccess());
   };

   return <Component visible={toggleSessionExpiryModalVisibility} handleReLogin={handleReLogin}></Component>;
};

export default Container;

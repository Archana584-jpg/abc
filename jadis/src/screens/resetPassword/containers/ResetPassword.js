import { resetPassword, setPassword } from "../actions";
import { ResetPasswordComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { cloneDeep, isEmpty } from "lodash";
import loginSelector from "screens/login/selector";
import { routeCollectionMap } from "navigation/routes";
import { useRouter } from "shared/hooks/useRouter";
import resetPasswordSelector from "../selector";
import { clearVerifyInvite } from "screens/login/actions";
import { showMessage } from "utils/helper";
import { MessageTypes } from "utils/constants";
import { CustomSpinner } from "shared/components";

const ResetPassword = () => {
   const dispatch = useDispatch();
   const { navigateTo } = useRouter();
   const { inviteVerified } = useSelector(loginSelector);
   const { passwordCreated } = useSelector(resetPasswordSelector);

   const [data, setData] = useState({
      password: "",
      confirmPassword: "",
   });

   useEffect(() => {
      if (isEmpty(inviteVerified.data)) {
         navigateTo(routeCollectionMap.DEFAULT);
      }
   }, []);

   useEffect(() => {
      if (!isEmpty(passwordCreated.data)) {
         dispatch(clearVerifyInvite());
         showMessage({
            content: "Your password has been reset successfully. Please log in with your new password.",
            type: MessageTypes.SUCCESS,
         });
         navigateTo(routeCollectionMap.DEFAULT);
      }
   }, [passwordCreated.data]);

   const handleSubmit = (data) => {
      if (!isEmpty(inviteVerified.data)) {
         dispatch(
            setPassword({
               password: data.password,
               confirm_password: data.confirmPassword,
               invite_token: inviteVerified.data.invite_token,
            })
         );
      } else {
         dispatch(resetPassword({ password: data.password }));
      }
   };

   const handleChange = (key, value) => {
      data[key] = value;
      setData(cloneDeep(data));
   };

   return (
      <CustomSpinner isFullScreen={true} loading={passwordCreated.loading || inviteVerified.loading}>
         <ResetPasswordComponent handleChange={handleChange} handleSubmit={handleSubmit}></ResetPasswordComponent>
      </CustomSpinner>
   );
};

export default ResetPassword;

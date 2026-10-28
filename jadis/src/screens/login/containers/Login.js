import { useEffect, useState } from "react";
import { LoginComponent } from "../components";
import { useRouter } from "shared/hooks/useRouter";
import { useDispatch, useSelector } from "react-redux";
import loginSelector from "../selector";
import { authorize, verifyInvite } from "../actions";
import { cloneDeep, isEmpty } from "lodash";
import { routeCollectionMap } from "navigation/routes";
import { CustomSpinner } from "shared/components";

const Login = () => {
   const dispatch = useDispatch();
   const { searchParams, navigateTo } = useRouter();
   const { inviteVerified } = useSelector(loginSelector);

   const [data, setData] = useState({
      email: "",
      password: "",
   });

   useEffect(() => {
      const inviteKey = searchParams.get("key");
      if (inviteKey) {
         dispatch(verifyInvite({ invite_token: inviteKey }));
      }
   }, [searchParams]);

   useEffect(() => {
      if (!isEmpty(inviteVerified.data)) {
         navigateTo(routeCollectionMap.RESET_PASSWORD);
      }
   }, [inviteVerified.data]);

   const handleChange = (key, value) => {
      data[key] = value;
      setData(cloneDeep(data));
   };

   const handleSubmit = (data) => {
      dispatch(authorize({ username: data.email, password: data.password }));
   };

   return (
      <CustomSpinner loading={inviteVerified.loading}>
         <LoginComponent data={data} handleChange={handleChange} handleSubmit={handleSubmit} />
      </CustomSpinner>
   );
};

export default Login;

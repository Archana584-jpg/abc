import { ForgotPasswordComponent } from "../components";
import { useState } from "react";
import { cloneDeep } from "lodash";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../actions";

const ForgotPassword = () => {
   const dispatch = useDispatch();
   const [data, setData] = useState({
      email: "",
   });

   const handleSubmit = (data) => {
      dispatch(forgotPassword({ email: data.email }));
   };

   const handleChange = (key, value) => {
      data[key] = value;
      setData(cloneDeep(data));
   };

   return <ForgotPasswordComponent handleChange={handleChange} handleSubmit={handleSubmit}></ForgotPasswordComponent>;
};

export default ForgotPassword;

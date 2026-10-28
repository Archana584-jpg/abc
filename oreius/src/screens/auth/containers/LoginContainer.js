import React from "react";
import { LoginComponent } from "../components";
import { useDispatch } from "react-redux";
import { login } from "../actions";

export const LoginContainer = () => {
  
  const dispatch = useDispatch();

  const loginOnSubmit = (value) => {
    const data = {
      apiKey: value.apiKey,
    };
    dispatch(login(data));
  };

  return <LoginComponent loginOnSubmit={loginOnSubmit} />;
};
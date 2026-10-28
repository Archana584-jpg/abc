import React, { useEffect, useState } from "react";
import { AlreadyLogoutFromSessionComponent } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { LOGOUT_SUCCESS } from "screens/login/actions";

const AlreadyLogoutFromSessionContainer = ({ history }) => {
   const dispatch = useDispatch();
   const [openModal, setOpenModal] = useState(false);
   const { sessionHeartBeat, tokens } = useSelector(({ shared: { sessionHeartBeat }, auth: { tokens } }) => ({
      sessionHeartBeat,
      tokens,
   }));

   useEffect(() => {
      if (sessionHeartBeat?.conCurrentSessionExists && tokens?.data?.access_token) {
         setOpenModal(true);
         dispatch({ type: LOGOUT_SUCCESS });
      }
   }, [sessionHeartBeat?.conCurrentSessionExists, tokens?.data?.access_token]);

   const handleClose = () => {
      dispatch({ type: LOGOUT_SUCCESS });
      setOpenModal(false);
      history.push("/");
   };

   const handleSignInAgain = () => {
      dispatch({ type: LOGOUT_SUCCESS });
      setOpenModal(false);
      history.push("/");
   };

   return (
      <AlreadyLogoutFromSessionComponent
         open={openModal}
         handleClose={handleClose}
         handleSignInAgain={handleSignInAgain}
      />
   );
};

export default withRouter(AlreadyLogoutFromSessionContainer);

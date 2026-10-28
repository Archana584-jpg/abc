import { useState, useRef, useCallback, useEffect } from "react";

const useOTPTimer = (initialDuration) => {
   const [otpRegenerationTime, setOTPRegenerationTime] = useState(initialDuration);
   const timerRef = useRef(null);

   const startOTPTimer = useCallback(() => {
      if (timerRef.current) {
         clearInterval(timerRef.current);
      }

      timerRef.current = setInterval(() => {
         setOTPRegenerationTime((prevTime) => {
            if (prevTime > 0) {
               return prevTime - 1;
            } else {
               clearInterval(timerRef.current);
               return 0;
            }
         });
      }, 1000);
   }, []);

   const resetOTPTimer = useCallback(() => {
      setOTPRegenerationTime(initialDuration);
      startOTPTimer();
   }, [initialDuration, startOTPTimer]);

   useEffect(() => {
      return () => {
         if (timerRef.current) {
            clearInterval(timerRef.current);
         }
      };
   }, []);

   return { otpRegenerationTime, startOTPTimer, resetOTPTimer };
};

export default useOTPTimer;

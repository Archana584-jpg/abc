import { useEffect } from "react";
import useConfigToProps from "shared/hooks/useConfigToProps";
import useOTPTimer from "shared/hooks/useOTPTimer";
import { useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import Component from "./Component";

const CustomOTPModal = ({
   closable,
   duration,
   visibilityDependsOn,
   resendButtonConfig,
   submitButtonConfig,
   body,
   title,
   className,
   classNames,
}) => {
   const { otpRegenerationTime, startOTPTimer, resetOTPTimer } = useOTPTimer(duration || 60);
   const { isModalVisibile } = useSelector(sharedSelector);

   const resendButtonProps = useConfigToProps({
      config: {
         ...resendButtonConfig,
         action: {
            ...resendButtonConfig?.action,
            onClick: {
               ...resendButtonConfig?.action.onClick,
               callback: resetOTPTimer,
            },
         },
      },
   });

   useEffect(() => {
      if (isModalVisibile?.[visibilityDependsOn]) {
         startOTPTimer();
      } else {
         resetOTPTimer();
      }
   }, [isModalVisibile, startOTPTimer, resetOTPTimer]);

   return (
      <Component
         visibilityDependsOn={visibilityDependsOn}
         body={body}
         title={title}
         resendButtonConfig={resendButtonConfig}
         otpRegenerationTime={otpRegenerationTime}
         submitButtonConfig={submitButtonConfig}
         closable={closable}
         className={className}
         classNames={classNames}
         resendButtonProps={resendButtonProps}
      />
   );
};

export default CustomOTPModal;

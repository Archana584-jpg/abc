import React from "react";
import { Alert } from "antd";

const CustomAlert = ({ type, message, description, icon, closable, onClose, className, style }) => {
   return (
      <Alert
         type={type}
         message={message}
         description={description}
         icon={icon || null}
         showIcon
         closable={closable}
         onClose={onClose}
         className={className}
         style={style}
      />
   );
};

export default CustomAlert;

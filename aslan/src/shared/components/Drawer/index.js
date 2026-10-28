import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React from "react";

const CustomDrawer = ({
   children,
   handleClick,
   placement,
   handleClose,
   visible,
   key,
   footer,
   closeIcon,
   extra,
   headerStyle,
   footerStyle,
   bodyStyle,
}) => {
   return (
      <Drawer
         key={key}
         visible={visible}
         onClick={handleClick}
         placement={placement}
         onClose={handleClose}
         footer={footer}
         headerStyle={headerStyle}
         footerStyle={footerStyle}
         bodyStyle={bodyStyle}
         closeIcon={closeIcon ? closeIcon : null}
         extra={
            extra ? (
               extra
            ) : (
               <CloseOutlined
                  onClick={() => handleClose(false)}
                  style={{
                     fontSize: "1rem",
                     cursor: "pointer",
                     margin: "1rem 1rem 0rem 0rem",
                     color: "#595959",
                  }}
               />
            )
         }
         headerStyle={{
            border: "none",
            margin: 0,
            padding: 0,
            background: "#F8F8F8",
            ...headerStyle,
         }}
         footerStyle={{
            border: "none",
            padding: "1.5rem",
            background: "#F8F8F8",
            ...footerStyle,
         }}
         bodyStyle={{ background: "#F8F8F8", ...bodyStyle }}
      >
         {children}
      </Drawer>
   );
};

export default CustomDrawer;

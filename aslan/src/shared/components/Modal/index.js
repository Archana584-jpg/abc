import { Modal } from "antd";
import React from "react";

const CustomModal = ({
   title,
   centered,
   visible,
   handleClose,
   width,
   children,
   footer,
   bodyStyle,
   closeIcon,
   maskClosable,
   style,
   closeable,
   className,
   destroyOnClose,
   open,
}) => {
   return (
      <Modal
         open={open}
         title={title || null}
         centered={centered}
         visible={visible}
         onCancel={() => handleClose && handleClose(false)}
         width={width}
         footer={footer}
         bodyStyle={bodyStyle}
         closeIcon={closeIcon}
         maskClosable={maskClosable}
         style={style}
         closable={closeable}
         className={className}
         destroyOnClose={destroyOnClose}
      >
         {children}
      </Modal>
   );
};

export default CustomModal;

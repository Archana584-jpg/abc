import { Modal } from "antd";

const Component = ({
   mask,
   title,
   style,
   width,
   zIndex,
   styles,
   footer,
   visible,
   content,
   centered,
   closable,
   handleClose,
   wrapClassName,
   maskClosable,
   className,
   destroyOnClose,
}) => {
   return (
      <Modal
         style={style}
         title={title}
         open={visible}
         styles={styles}
         mask={mask && true}
         maskClosable={maskClosable || false}
         width={width || 520}
         footer={footer || null}
         zIndex={zIndex || 1000}
         closable={closable || false}
         centered={centered || true}
         wrapClassName={wrapClassName}
         onCancel={() => (handleClose ? handleClose() : {})}
         className={className}
         destroyOnClose={destroyOnClose}
      >
         {content}
      </Modal>
   );
};

export default Component;

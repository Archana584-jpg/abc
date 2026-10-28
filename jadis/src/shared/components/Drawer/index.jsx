import { Drawer } from "antd";

const CustomDrawer = ({ open, title, width, onClose, closable, children, className, placement }) => (
   <Drawer
      title={title}
      width={width || "50%"}
      placement={placement}
      closable={closable || false}
      onClose={onClose}
      open={open}
      key={placement}
      className={className}
   >
      {children}
   </Drawer>
);

export default CustomDrawer;

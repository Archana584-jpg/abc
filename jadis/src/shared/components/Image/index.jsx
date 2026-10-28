import { Image } from "antd";

const CustomImage = ({ src, style, width, height, preview, className, onClick, rootClassName }) => (
   <Image
      src={src}
      style={style}
      width={width}
      height={height}
      className={className}
      preview={preview || false}
      onClick={onClick || null}
      rootClassName={rootClassName}
   />
);

export default CustomImage;

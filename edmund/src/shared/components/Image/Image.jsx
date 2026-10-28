import { Image } from "antd";
import { environmentName } from "utils/config";

const CustomImage = ({ src, style, width, height, preview, className, onClick }) => (
   <Image
      src={src?.replace("env_name", environmentName)}
      style={style}
      width={width}
      height={height}
      className={className}
      preview={preview || false}
      onClick={onClick || null}
   />
);

export default CustomImage;

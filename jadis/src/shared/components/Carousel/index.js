import React from "react";
import { Carousel } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const CustomCarousel = ({ dots, arrows, infinite, children, className, prefixCls, style, rootClassName }) => {
   return (
      <Carousel
         dots={dots || false}
         arrows={arrows || false}
         infinite={infinite || false}
         nextArrow={<RightCircleFilled className="font-lg text-subText" />}
         prevArrow={<LeftCircleFilled className="font-lg text-subText" />}
         className={className}
         style={style}
         rootClassName={rootClassName}
         prefixCls={prefixCls}
      >
         {children}
      </Carousel>
   );
};

export default CustomCarousel;

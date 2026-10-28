import { Row, Col, Typography } from "antd";
import { isEmpty } from "lodash";
import React from "react";
import { renderIcon } from "screens/node/helper";
import { replacePlaceholders } from "utils/helper";

const defaultIcon = {
   iconName: "ArrowLeftOutlined",
   className: "text-2xl",
};

const Header = ({ title = {}, subtitle = {}, icon = {}, image = {}, className, handleClick, data }) => {
   return (
      <Row className={`bg-snowWhite rounded-lg px-6 py-2 items-center gap-[18px] ${className}`}>
         <Col className="flex items-center gap-[18px]">
            {isEmpty(icon) ? null : renderIcon({ ...icon, handleClick })}
            {isEmpty(image) ? null : <div className="screen-header-container">{renderIcon(image)}</div>}
         </Col>
         <Col className="flex-1 text-wrap">
            <Typography className={`text-base font-medium text-title ${title?.className}`}>
               {replacePlaceholders(title?.text, data)}
            </Typography>
            <Typography className={`text-sm font-normal text-subtitle ${subtitle?.className}`}>
               {replacePlaceholders(subtitle?.text, data)}
            </Typography>
         </Col>
      </Row>
   );
};

export default Header;

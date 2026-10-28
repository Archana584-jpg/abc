import { Row, Col, Typography } from "antd";
import React from "react";
import { CustomIcon, CustomImage } from "shared/components";
import * as images from "assets/images";
import * as icons from "assets/icons";
import { isEmpty } from "lodash";

const Header = ({ data, handleAction }) => {
   const { title = {}, subtitle = {}, image = {}, action = {} } = data || {};
   return (
      <Row className={`bg-whiteSmoke rounded-lg px-6 py-2 ${data.className}`}>
         <Col xs={24} className="flex items-center">
            {action.icon?.src ? (
               <CustomImage className={action.icon?.className} onClick={() => handleAction({ action })} />
            ) : (
               <CustomIcon
                  component={icons[action.icon?.key]}
                  className={action.icon?.className}
                  style={action.icon?.style}
                  onClick={() => handleAction({ action })}
               />
            )}

            {!isEmpty(image) ? (
               <div className="screen-header-container">
                  {image.src || image.key ? (
                     <CustomImage
                        src={image.src || images[image.key]}
                        className={image?.className}
                        style={image?.style}
                     />
                  ) : null}
               </div>
            ) : null}

            <div className="ml-4">
               <Typography className={title.className}>{title.text}</Typography>
               <Typography className={subtitle.className}>{subtitle.text}</Typography>
            </div>
         </Col>
      </Row>
   );
};

export default Header;

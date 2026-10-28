import React from "react";
import { Layout, Menu, Affix, Row, Col, Typography, Tag, Tooltip } from "antd";
import { CustomImage, CustomButton } from "../..";
import { portalLogo, gridlinesIcon, deepSightLogo, tryItNowIcon } from "../../../assets/images";
import { menuActions, menuItems, exceptionMenuItemsConfig, deepSightAccessDeniedMessage } from "./constant";
import { menuRoutes } from "../../constants";
import { ArrowLeftOutlined, ArrowRightOutlined, LogoutOutlined, StopOutlined } from "@ant-design/icons";
const { Sider } = Layout;
const { Text } = Typography;

const Component = ({
   path,
   handleChangeMenu,
   handleChange,
   collapsed,
   myOrganization,
   isDeepSightEnabled,
   isDeepSightHovered,
}) => {
   const menuStates = {
      isDeepSightEnabled,
   };
   return (
      <Affix>
         <Sider width={265} collapsedWidth={64} collapsed={collapsed} className="tw-overflow-auto tw-h-screen">
            <CustomImage
               src={collapsed ? gridlinesIcon : portalLogo}
               className="tw-p-4 tw-cursor-pointer"
               handleClick={() => handleChangeMenu("/products")}
            />
            <Menu
               mode="inline"
               className="tw-bg-ethereal-white tw-flex tw-flex-col tw-h-13.6"
               selectedKeys={[`/${path}`]}
               onClick={({ _, key }) => {
                  const menuConfig = exceptionMenuItemsConfig[key];
                  if (menuConfig && !menuConfig.checkAccess(menuStates)) {
                     return;
                  }
                  handleChangeMenu(key);
               }}
            >
               {menuItems
                  .filter((item) => (item.path === "/bulk-upload" ? myOrganization.batch_job_supported : true))
                  .map((item, index) => (
                     <Menu.Item key={item.path} className="tw-text-sm tw-text-enamel-antique-green" icon={item.icon}>
                        {item.label}
                        {item.tag}
                     </Menu.Item>
                  ))}
               <Menu.Item
                  key={menuRoutes.DEEP_SIGHT}
                  className={`tw-mt-auto tw-h-auto tw-pl-2 ${!collapsed ? "tw-pointer-events-none" : ""}`}
                  title={collapsed ? (isDeepSightEnabled ? "DeepSight" : deepSightAccessDeniedMessage) : undefined}
               >
                  <Row>
                     {collapsed ? (
                        <Col
                           className="tw-bg-black tw-rounded-lg tw-ml-2 tw-flex tw-items-center tw-justify-center tw-cursor-pointer"
                           xs={{ span: 24 }}
                        >
                           <CustomImage
                              src={deepSightLogo}
                              className="tw-w-4 tw-h-4"
                              onClick={(e) => {
                                 handleChangeMenu(`/${menuRoutes.DEEP_SIGHT}`);
                              }}
                           />
                        </Col>
                     ) : (
                        <Col className="tw-bg-black tw-rounded-lg tw-p-2" xs={{ span: 24 }}>
                           <Row>
                              <Col xs={{ span: 24 }}>
                                 <Row justify="space-between">
                                    <Col>
                                       <Row>
                                          <Col>
                                             <CustomImage src={deepSightLogo} className="tw-w-4 tw-h-4" />
                                          </Col>
                                          <Col className="tw-ml-1">
                                             <Text className="deepsight-text tw-font-bold">DeepSight</Text>
                                          </Col>
                                       </Row>
                                    </Col>
                                    <Col className="tw-text-center">
                                       <Tag className="tw-bg-light-gray tw-rounded">New</Tag>
                                    </Col>
                                 </Row>
                              </Col>
                              <Col xs={{ span: 22 }} className="">
                                 <Text className="tw-text-neutral-gray tw-break-words tw-whitespace-normal tw-block tw-text-xs tw-leading-4">
                                    Uncover the full story — your ultimate identity tool is here!
                                 </Text>
                              </Col>
                              <Col xs={{ span: 24 }} className="tw-mt-3">
                                 <Tooltip
                                    title={!isDeepSightEnabled ? deepSightAccessDeniedMessage : null}
                                    placement="top"
                                    open={isDeepSightHovered}
                                    onOpenChange={(value) => handleChange("isDeepSightHovered", value)}
                                 >
                                    <span className="tw-inline-block tw-w-full tw-pointer-events-auto">
                                       <CustomButton
                                          label={
                                             <span className="tw-flex tw-items-center tw-justify-center">
                                                <Text className="tw-font-bold">Try it now</Text>
                                                {!isDeepSightEnabled && isDeepSightHovered ? (
                                                   <StopOutlined
                                                      className="tw-ml-2"
                                                      style={{ color: "#ff4d4f", fontSize: 16 }}
                                                   />
                                                ) : (
                                                   <CustomImage src={tryItNowIcon} className="tw-w-4 tw-h-4 tw-ml-2" />
                                                )}
                                             </span>
                                          }
                                          size="middle"
                                          className={`tw-w-full ${
                                             isDeepSightEnabled
                                                ? "try-it-now-button tw-cursor-pointer tw-pointer-events-auto"
                                                : "tw-cursor-not-allowed"
                                          }`}
                                          disabled={!isDeepSightEnabled}
                                          handleClick={() => handleChangeMenu(`/${menuRoutes.DEEP_SIGHT}`)}
                                       />
                                    </span>
                                 </Tooltip>
                              </Col>
                           </Row>
                        </Col>
                     )}
                  </Row>
               </Menu.Item>
               <Menu.Item
                  key={menuActions.CollapseMenu}
                  className="tw-text-sm tw-text-enamel-antique-green"
                  icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
                  title={collapsed ? "Expand side menu" : "Collapse side menu"}
               >
                  Collapse side menu
               </Menu.Item>
               <Menu.Item
                  key={menuActions.LogOut}
                  className="tw-text-sm tw-text-enamel-antique-green"
                  icon={<LogoutOutlined />}
               >
                  Logout
               </Menu.Item>
            </Menu>
         </Sider>
      </Affix>
   );
};

export default Component;

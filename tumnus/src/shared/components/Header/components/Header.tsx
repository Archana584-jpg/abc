import React from "react";
import { Col, Layout, Row, Typography, Badge } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import CustomButton from "../../Button";
import {
   supportMenu,
   headerSupportSectionPathsMapping,
   useCasesMenu,
   headerSolutionsSectionPathMapping,
   solutionsMenu,
} from "../constants";
import { portalUrl } from "@/utils/config";
import style from "./style.module.css";
import { getHierarchyPathname } from "@/utils/helper";
import CustomSidebar from "../../Sidebar";
import { gridlinesText } from "@/assets/images";
import CustomImage from "../../Image";

const { Header } = Layout;
const { Text, Title } = Typography;
const { Ribbon } = Badge;

interface CustomHeaderProps {
   productsMenuExpansion: boolean;
   supportMenuExpansion: boolean;
   solutionsMenuExpansion: boolean;
   handleChangeProductsMenuExpansion: (expanded: boolean) => void;
   handleChangeSupportMenuExpansion: (expanded: boolean) => void;
   handleChangeSolutionsMenuExpansion: (expanded: boolean) => void;
   redirectToScreen: (route: string, key: string) => void;
   pathname: string;
   menuItems: { label: string; name: string }[];
   products: any;
   categories: any;
   handleChangeUseCasesMenuExpansion: (expanded: boolean) => void;
   useCasesMenuExpansion: boolean;
   currentPath: string;
}

const CustomHeader = ({
   productsMenuExpansion,
   supportMenuExpansion,
   solutionsMenuExpansion,
   handleChangeProductsMenuExpansion,
   handleChangeSupportMenuExpansion,
   handleChangeSolutionsMenuExpansion,
   redirectToScreen,
   pathname,
   menuItems,
   products,
   handleChangeUseCasesMenuExpansion,
   useCasesMenuExpansion,
   currentPath,
}: CustomHeaderProps) => {
   return (
      <div className={`fixed w-full z-[999]`}>
         <Header className="h-auto w-full bg-white shadow-md">
            <Row justify="space-between">
               <Row gutter={[32, 8]} className={`${style.headerContainer}`}>
                  <Col
                     xs={22}
                     lg={5}
                     onClick={() => {
                        handleChangeProductsMenuExpansion(false);
                        handleChangeSupportMenuExpansion(false);
                        redirectToScreen("/", "home");
                     }}
                     className={"my-auto cursor-pointer"}
                  >
                     <CustomImage
                        src={gridlinesText}
                        width={135}
                        height={35}
                        alt=""
                        className="max-w-full h-auto align-middle"
                     />
                  </Col>
                  <Col
                     lg={4}
                     xs={24}
                     onClick={() => {
                        handleChangeProductsMenuExpansion(!productsMenuExpansion);
                        handleChangeSupportMenuExpansion(false);
                        handleChangeUseCasesMenuExpansion(false);
                        handleChangeSolutionsMenuExpansion(false);
                     }}
                  >
                     <Text
                        className={`cursor-pointer ${
                           productsMenuExpansion || getHierarchyPathname(pathname) === "products"
                              ? style.activeMenu
                              : style.menuText
                        }`}
                     >
                        Products {productsMenuExpansion ? <UpOutlined /> : <DownOutlined />}
                     </Text>
                  </Col>
                  <Col
                     lg={5}
                     xs={24}
                     onClick={() => {
                        handleChangeUseCasesMenuExpansion(false);
                        handleChangeSupportMenuExpansion(false);
                        handleChangeProductsMenuExpansion(false);
                        handleChangeSolutionsMenuExpansion(!solutionsMenuExpansion);
                     }}
                  >
                     <Text
                        className={`cursor-pointer ${
                           solutionsMenuExpansion ||
                           Object.values(headerSolutionsSectionPathMapping).indexOf(pathname) > -1
                              ? style.activeMenu
                              : style.menuText
                        }`}
                     >
                        Solutions
                        <CustomButton
                           type="ghost"
                           label={<Text className="text-[#33CCCC] text-[0.7rem]">New</Text>}
                           size="small"
                           className="border-[#7cbfbf] text-[#33CCCC] rounded-lg mx-1"
                        />
                        {solutionsMenuExpansion ? <UpOutlined /> : <DownOutlined />}
                     </Text>
                  </Col>
                  <Col
                     lg={4}
                     xs={24}
                     onClick={() => {
                        handleChangeUseCasesMenuExpansion(!useCasesMenuExpansion);
                        handleChangeSupportMenuExpansion(false);
                        handleChangeProductsMenuExpansion(false);
                        handleChangeSolutionsMenuExpansion(false);
                     }}
                  >
                     <Text
                        className={`cursor-pointer ${
                           useCasesMenuExpansion || getHierarchyPathname(pathname) === "use-cases"
                              ? style.activeMenu
                              : style.menuText
                        }`}
                     >
                        Use Cases {useCasesMenuExpansion ? <UpOutlined /> : <DownOutlined />}
                     </Text>
                  </Col>
                  <Col
                     lg={4}
                     xs={24}
                     onClick={() => {
                        handleChangeSupportMenuExpansion(!supportMenuExpansion);
                        handleChangeProductsMenuExpansion(false);
                        handleChangeUseCasesMenuExpansion(false);
                        handleChangeSolutionsMenuExpansion(false);
                     }}
                  >
                     <Text
                        className={`cursor-pointer ${
                           supportMenuExpansion ||
                           Object.values(headerSupportSectionPathsMapping).indexOf(pathname) > -1
                              ? style.activeMenu
                              : style.menuText
                        }`}
                     >
                        Resources {supportMenuExpansion ? <UpOutlined /> : <DownOutlined />}
                     </Text>
                  </Col>
               </Row>

               <Row>
                  <Col xs={12}>
                     <CustomButton
                        label="Log In"
                        handleClick={() => redirectToScreen(portalUrl, "true")}
                        type="text"
                        className={`${style.loginButton} text-base font-medium`}
                     />
                  </Col>
                  <Col xs={12}>
                     <CustomButton
                        handleClick={() => redirectToScreen(`${portalUrl}/signUp`, "true")}
                        type="primary"
                        label="Sign Up"
                     />
                  </Col>
               </Row>
            </Row>
         </Header>
         {productsMenuExpansion && (
            <CustomSidebar
               handleChangeProductsMenuExpansion={handleChangeProductsMenuExpansion}
               menuItems={menuItems}
               products={products}
            />
         )}
         {(supportMenuExpansion || useCasesMenuExpansion || solutionsMenuExpansion) && (
            <Row>
               <Col
                  lg={{ span: 14, offset: 7 }}
                  xs={{ span: 24 }}
                  className="bg-white shadow-md p-4 cursor-pointer mt-1"
               >
                  {supportMenuExpansion ? (
                     <Row>
                        {(supportMenu || []).map((item, index) =>
                           item.isVisibleInSupportMenu ? (
                              <Col key={index} lg={{ span: 8 }} xs={{ span: 24 }}>
                                 {item.label ? (
                                    <Title className="font-medium text-base leading-5 mt-0">{item.label}</Title>
                                 ) : null}
                                 {(item.items || []).map((childItem, childIndex) => (
                                    <Col
                                       key={childIndex}
                                       lg={{ span: 19 }}
                                       xs={{ span: 24 }}
                                       className={`${style.supportMenu} mt-2.5 p-1 ${
                                          pathname === childItem.path ? style.selectedSupportItemMenu : ""
                                       }`}
                                       onClick={() => {
                                          handleChangeSupportMenuExpansion(false);
                                          redirectToScreen(childItem?.path as string, childItem.key);
                                       }}
                                    >
                                       <Title className={style.supportMenuTitle}>{childItem.title}</Title>
                                       <Text className={style.supportMenuSubTitle}>{childItem.subTitle}</Text>
                                    </Col>
                                 ))}
                              </Col>
                           ) : null
                        )}
                     </Row>
                  ) : null}
                  {useCasesMenuExpansion ? (
                     <Row gutter={[0, 10]}>
                        {(useCasesMenu || []).map((item, index) => (
                           <Col key={index} lg={{ span: 8 }} xs={{ span: 24 }}>
                              <Row>
                                 <Col
                                    lg={{ span: 19 }}
                                    xs={{ span: 24 }}
                                    className={`${style.supportMenu} p-2 ${
                                       currentPath === item.path ? style.selectedSupportItemMenu : ""
                                    } leading-none`}
                                    onClick={() => {
                                       handleChangeUseCasesMenuExpansion(false);
                                       redirectToScreen(item?.path as string, item.key);
                                    }}
                                 >
                                    <Title className={`${style.supportMenuTitle} leading-none mt-0`}>
                                       {item.title}
                                    </Title>
                                    <Text className={`${style.supportMenuSubTitle} leading-none`}>{item.subTitle}</Text>
                                 </Col>
                              </Row>
                           </Col>
                        ))}
                     </Row>
                  ) : null}
                  {solutionsMenuExpansion ? (
                     <Row gutter={[0, 10]}>
                        {(solutionsMenu || []).map((item, index) => (
                           <Col key={index} lg={{ span: 8 }} xs={{ span: 24 }}>
                              {item.path ? (
                                 <Row className="h-full">
                                    <Col
                                       lg={{ span: 22 }}
                                       xs={{ span: 24 }}
                                       className={`${style.supportMenu} p-2 ${
                                          currentPath === item.path ? style.selectedSupportItemMenu : ""
                                       } leading-none`}
                                       onClick={() => {
                                          handleChangeSolutionsMenuExpansion(false);
                                          redirectToScreen(item?.path as string, item.key);
                                       }}
                                    >
                                       <Title className={`${style.supportMenuTitle} leading-none mt-0`}>
                                          {item.title}
                                          {item.isNewItem ? (
                                             <CustomButton
                                                type="ghost"
                                                label={<Text className="text-[#33CCCC] text-[0.7rem]">New</Text>}
                                                size="small"
                                                className="border-[#7cbfbf] text-[#33CCCC] rounded-lg mx-1"
                                             />
                                          ) : null}
                                       </Title>
                                       <Text className={`${style.supportMenuSubTitle} leading-none`}>
                                          {item.subTitle}
                                       </Text>
                                    </Col>
                                 </Row>
                              ) : (
                                 <Row className="h-full">
                                    <Col
                                       lg={{ span: 22 }}
                                       xs={{ span: 24 }}
                                       className={`${style.supportMenu} p-2 ${
                                          currentPath === item.path ? style.selectedSupportItemMenu : ""
                                       } leading-none cursor-not-allowed w-full`}
                                    >
                                       <Ribbon color="#33CCCC" text="coming soon" placement="end">
                                          <Title
                                             className={`${style.supportMenuTitle} leading-none text-gray-400 mt-0`}
                                          >
                                             {item.title}
                                          </Title>
                                          <Text
                                             className={`${style.supportMenuSubTitle} leading-none text-gray-400 mt-0`}
                                          >
                                             {item.subTitle}
                                          </Text>
                                       </Ribbon>
                                    </Col>
                                 </Row>
                              )}
                           </Col>
                        ))}
                     </Row>
                  ) : null}
               </Col>
            </Row>
         )}
      </div>
   );
};

export default CustomHeader;

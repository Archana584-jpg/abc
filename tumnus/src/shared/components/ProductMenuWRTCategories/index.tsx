import { ICategory, IProductByCategoryId } from "@/shared/interfaces";
import { Col, Row, Tabs, Typography } from "antd";
import ProductCard from "../ProductCard";

const { Title } = Typography;

const { TabPane } = Tabs;

interface IProductMenuWRTCategoriesProps {
   handleChangeCategoryId: (categoryId: string) => void;
   isMobileScreen: boolean;
   navigateTo: (url: string) => void;
   categories: Array<ICategory>;
   productsByCategoryId: Array<IProductByCategoryId>;
   categoryId: string;
   title: String;
   tabBarGutter?: number;
   centered?: boolean;
   tabPaneStyle?: string;
}

const ProductMenuWRTCategories = ({
   handleChangeCategoryId,
   isMobileScreen,
   navigateTo,
   categories,
   productsByCategoryId,
   categoryId,
   title,
   tabBarGutter,
   centered,
   tabPaneStyle,
}: IProductMenuWRTCategoriesProps) => {
   return (
      <Row className="w-full pb-20">
         <Col span={24}>
            <Row justify="center" className={isMobileScreen ? "py-8" : "py-14"}>
               <Col className={isMobileScreen ? "mx-2" : "mx-auto"}>
                  <Title
                     className={`${
                        isMobileScreen ? "text-[1.25rem] leading-[1.5rem]" : "text-[2.1875rem]"
                     } text-[#2F2F2F] text-center font-poppins font-bold`}
                  >
                     {title}
                  </Title>
               </Col>
            </Row>

            <Row gutter={[40, 28]} justify="center">
               <Col xs={{ span: 24 }}>
                  <Tabs
                     activeKey={categoryId || ""}
                     onChange={(key) => handleChangeCategoryId(key)}
                     tabBarGutter={tabBarGutter || 70}
                     size={isMobileScreen ? "small" : "large"}
                     tabPosition={isMobileScreen ? "left" : "top"}
                     centered={centered || false}
                  >
                     {(categories || []).map((item) => {
                        return (
                           <TabPane
                              tab={
                                 <Row>
                                    <span className={isMobileScreen ? "" : tabPaneStyle}>{item.name}</span>
                                 </Row>
                              }
                              key={item.id}
                           >
                              <Row className="w-full flex justify-center pt-14">
                                 <Col
                                    className={`gap-4 justify-center ${
                                       isMobileScreen
                                          ? "flex flex-wrap justify-center"
                                          : "flex flex-wrap gap-x-[1rem] gap-y-[1rem] "
                                    }`}
                                 >
                                    {(productsByCategoryId || []).map((item, index) => {
                                       return (
                                          <ProductCard
                                             key={index}
                                             index={index}
                                             product={item}
                                             navigateTo={navigateTo}
                                             customCardStyle={
                                                isMobileScreen
                                                   ? "w-[13.125rem] mr-[1.875rem] mb-[1.25rem]  border-[#E8E8E8]"
                                                   : "flex w-[19.688rem] h-[13.375rem] p-[0.5rem] border-[#E6E6E6]"
                                             }
                                             titleStyle={
                                                isMobileScreen
                                                   ? "text-[0.875rem]  leading-[1.25rem] text-grey-90"
                                                   : "text-[1rem] text-[#2F2F2F] pt-3 w-[16.125rem] font-[Poppins]"
                                             }
                                             descriptionStyle={
                                                isMobileScreen
                                                   ? "text-[0.625rem] leading-[0.938rem] text-grey-70"
                                                   : "text-[0.75rem] pt-3 leading-[1rem] text-[#717988] font-[Poppins]"
                                             }
                                             isMobileScreen={isMobileScreen}
                                          />
                                       );
                                    })}
                                 </Col>
                              </Row>
                           </TabPane>
                        );
                     })}
                  </Tabs>
               </Col>
            </Row>
         </Col>
      </Row>
   );
};

export default ProductMenuWRTCategories;

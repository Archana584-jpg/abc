import { Collapse, Typography, Row, Col, Tag } from "antd";
import { solutionsMenu, supportMenu, useCasesMenu } from "./constants";
import CustomImage from "../Image";
import CustomButton from "../Button";

const { Text } = Typography;

export const productCollapsibleData = (
   products: any,
   menuItems: any,
   navigateTo: (path: string) => void,
   handleMobileNavCardExpansion: (expanded: boolean) => void,
   redirectToScreen: (path: string, key: string) => void
) => {
   const productGroupByCategoryId = products?.data?.productByCategoryId;

   return [
      {
         key: "products",
         label: <Text className="font-semibold text-gray-700">Products</Text>,
         children: (
            <Collapse
               bordered={false}
               expandIconPosition="end"
               accordion={true}
               items={menuItems.map((item: any, index: number) => ({
                  label: <Text className="font-semibold text-gray-700">{item.label}</Text>,
                  key: index,
                  children: (
                     <Row gutter={[0, 10]}>
                        {(productGroupByCategoryId[item.name] || []).map((childItem: any, childIndex: number) => (
                           <Col
                              xs={{ span: 24 }}
                              key={childIndex}
                              onClick={() => {
                                 navigateTo(`/products/${childItem.key}`);
                                 handleMobileNavCardExpansion(false);
                              }}
                           >
                              <Row gutter={[10, 0]}>
                                 <Col xs={{ span: 3 }}>
                                    <CustomImage
                                       src={childItem.image_uri}
                                       width={30}
                                       height={30}
                                       className="max-w-full h-auto"
                                    />
                                 </Col>
                                 <Col xs={{ span: 21 }}>
                                    <Text className="leading-8">{childItem.name}</Text>
                                 </Col>
                              </Row>
                           </Col>
                        ))}
                     </Row>
                  ),
               }))}
            />
         ),
      },
      {
         key: "soltuins",
         label: (
            <Text className="font-semibold text-gray-700">
               Solutions{" "}
               <span>
                  {" "}
                  <CustomButton
                     type="ghost"
                     label={<Text className="text-[#33CCCC] text-[0.7rem]">New</Text>}
                     size="small"
                     className="border-[#7cbfbf] text-[#33CCCC] rounded-lg mx-1"
                  />
               </span>
            </Text>
         ),
         children: (
            <Row gutter={[0, 10]}>
               {solutionsMenu.map((item, index) =>
                  item.path ? (
                     <Col
                        xs={{ span: 24 }}
                        key={index}
                        onClick={() => {
                           navigateTo(item.path);
                           handleMobileNavCardExpansion(false);
                        }}
                     >
                        <Row>
                           <Col xs={{ span: 3 }}>
                              <CustomImage src={item.logo} width={30} height={30} className="max-w-full h-auto" />
                           </Col>
                           <Col xs={{ span: 21 }} className="">
                              <Text className="leading-8">
                                 {item.title}{" "}
                                 {item.isNewItem ? (
                                    <span>
                                       {" "}
                                       <CustomButton
                                          type="ghost"
                                          label={<Text className="text-[#33CCCC] text-[0.7rem]">New</Text>}
                                          size="small"
                                          className="border-[#7cbfbf] text-[#33CCCC] rounded-lg mx-1"
                                       />
                                    </span>
                                 ) : null}
                              </Text>
                           </Col>
                        </Row>
                     </Col>
                  ) : (
                     <Col xs={{ span: 24 }} key={index} className="cursor-not-allowed">
                        <Row>
                           <Col xs={{ span: 3 }}>
                              <CustomImage
                                 src={item.logo}
                                 width={30}
                                 height={30}
                                 className="max-w-full h-auto opacity-30"
                              />
                           </Col>
                           <Col xs={{ span: 21 }} className="flex justify-between">
                              <Text className="leading-8 text-gray-400">{item.title}</Text>
                              <Tag color="#33CCCC" className="self-center">
                                 coming soon
                              </Tag>
                           </Col>
                        </Row>
                     </Col>
                  )
               )}
            </Row>
         ),
      },
      {
         key: "use-cases",
         label: <Text className="font-semibold text-gray-700">Use Cases</Text>,
         children: (
            <Row gutter={[0, 10]}>
               {useCasesMenu.map((item, index) => (
                  <Col
                     xs={{ span: 24 }}
                     key={index}
                     onClick={() => {
                        navigateTo(item.path);
                        handleMobileNavCardExpansion(false);
                     }}
                  >
                     <Row>
                        <Col xs={{ span: 3 }}>
                           <CustomImage src={item.logo} width={30} height={30} className="max-w-full h-auto" />
                        </Col>
                        <Col xs={{ span: 21 }} className="">
                           <Text className="leading-8">{item.title}</Text>
                        </Col>
                     </Row>
                  </Col>
               ))}
            </Row>
         ),
      },
      {
         key: "resource",
         label: <Text className="font-semibold text-gray-700">Resource</Text>,
         children: (
            <Collapse
               bordered={false}
               expandIconPosition="end"
               accordion={true}
               items={supportMenu.map((item, index) => ({
                  key: index,
                  label: <Text className="font-semibold text-gray-700">{item.label}</Text>,
                  children: (
                     <Row gutter={[0, 10]}>
                        {item.items.map((childItem, ChildIndex) => (
                           <Col
                              xs={{ span: 24 }}
                              key={ChildIndex}
                              onClick={() => {
                                 redirectToScreen(childItem.path || "", childItem.key);
                                 handleMobileNavCardExpansion(false);
                              }}
                           >
                              <Row>
                                 <Col xs={{ span: 3 }}>
                                    <CustomImage
                                       src={childItem.logo}
                                       width={30}
                                       height={30}
                                       className="max-w-full h-auto"
                                    />
                                 </Col>
                                 <Col xs={{ span: 21 }} className="">
                                    <Text className="leading-8">{childItem.title}</Text>
                                 </Col>
                              </Row>
                           </Col>
                        ))}
                     </Row>
                  ),
               }))}
            />
         ),
      },
   ];
};

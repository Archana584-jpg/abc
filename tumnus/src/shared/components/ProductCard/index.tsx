import React from "react";
import { Typography, Badge, Row, Col, Tooltip } from "antd";
import { colors } from "../../../utils/theme";
import CustomCard from "../../../shared/components/Card";
import { CustomImage } from "../../../shared";

const { Text } = Typography;

interface IProduct {
   key: string;
   image_uri: string;
   name: string;
   categories: Array<{ id: string; name: string; description: string; image_uri: string }>;
   description: string;
}
interface IProductCardProps {
   index: number;
   product: IProduct;
   navigateTo: (route: string) => void;
   isRenderedOnAutomComplete?: boolean;
   extraContent?: any;
   customCardStyle?: string;
   titleStyle?: string;
   descriptionStyle?: string;
   isMobileScreen?: boolean;
}

const ProductCard = ({
   index,
   product,
   navigateTo,
   isRenderedOnAutomComplete,
   extraContent,
   customCardStyle,
   titleStyle,
   descriptionStyle,
   isMobileScreen,
}: IProductCardProps) => {
   return isRenderedOnAutomComplete ? (
      <Row key={index} gutter={[8, 8]} onClick={() => navigateTo(`/products/${product.key}`)}>
         <Col>
            <CustomImage
               src={(product || {}).image_uri}
               className="max-w-full max-h-full object-contain"
               width={34}
               height={34}
               style={{
                  backgroundColor: "#EBF7FF",
                  padding: "0.3rem",
               }}
            />
         </Col>
         <Col>
            <Text style={{ fontSize: "0.875rem", color: colors.GREY_90 }}>{(product || {}).name}</Text>
            {(product.categories || []).length && (
               <div>
                  <Text style={{ fontSize: "0.625rem", color: colors.GREY_70 }}>
                     {((product || {}).categories || []).map((item: any) => item.name).join(", ")}
                  </Text>
               </div>
            )}
         </Col>
      </Row>
   ) : (
      <CustomCard
         key={index}
         hoverable={true}
         className={customCardStyle ?? "w-[13.125rem] mr-[1.875rem] mb-[1.25rem] p-0 border border-[#E8E8E8]"}
         bodyStyle={{ padding: "0.938rem 0.938rem 0.388rem 0.938rem " }}
         handleClick={() => navigateTo(`/products/${(product || {}).key || ""}`)}
      >
         <div>
            <CustomImage
               src={(product || {}).image_uri}
               className="max-w-full max-h-full object-contain"
               width={37}
               height={37}
               style={{
                  background: "#EBF7FF",
                  padding: "0.1rem",
               }}
            />
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "2.125rem",
               }}
            >
               <Text className={titleStyle ?? "text-[0.875rem] leading-[1.25rem] text-grey-90"}>
                  {(product || {}).name}
               </Text>
               <Text className={descriptionStyle ?? "text-[0.625rem] leading-[0.938rem] text-grey-70"}>
                  {(product || {}).description}
               </Text>
            </div>
            {((product || {}).categories || []).length ? (
               <div style={{ marginTop: isMobileScreen ? "2.45rem" : "4.45rem" }}>
                  <Text
                     style={{
                        fontSize: "0.625rem",
                        lineHeight: "1.25rem",
                        color: colors.GREY_70,
                     }}
                  >
                     {product.categories[0].name}{" "}
                  </Text>
                  {product.categories.length > 1 ? (
                     <Tooltip
                        placement="right"
                        title={
                           <Text style={{ fontSize: "0.6rem" }}>
                              {((product || {}).categories || []).map((item: any) => item.name).join(", ")}
                           </Text>
                        }
                        color="white"
                     >
                        <Badge
                           dot={false}
                           size={"small"}
                           style={{ backgroundColor: colors.GREY_50, color: "#717988" }}
                           count={`+${product.categories.length - 1}`}
                        />
                     </Tooltip>
                  ) : null}
               </div>
            ) : null}
            {extraContent}
         </div>
      </CustomCard>
   );
};

export default ProductCard;

import React from "react";
import { Collapse } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { OfferingCard } from ".";
import { IProductOfferingsExpansionProps } from "../interfaces";

const { Panel } = Collapse;

const ProductOfferingsExpansion: React.FC<IProductOfferingsExpansionProps> = ({
   product,
   selectedOfferingIndex,
   handleSelectedOfferingIndex,
   productOfferings,
   handleChangeRedirect,
   isMobileScreen,
}) => {
   return (
      <>
         <Collapse
            activeKey={[selectedOfferingIndex.toString()]}
            accordion={true}
            expandIconPosition="right"
            expandIcon={({ isActive }) =>
               !isActive ? (
                  <DownOutlined style={{ fontSize: "1rem" }} />
               ) : (
                  <UpOutlined style={{ fontSize: "1rem", color: "white" }} />
               )
            }
            onChange={(key) => handleSelectedOfferingIndex(Number(key))}
            style={{
               width: "100%",
               marginBottom: "0.5rem",
               border: "none",
               backgroundColor: "#EAF7F7",
            }}
         >
            {productOfferings.map((item, index) => (
               <Panel
                  header={
                     <span style={selectedOfferingIndex === index + 1 ? { color: "white" } : { color: "black" }}>
                        {item.name || item.title}
                     </span>
                  }
                  key={index + 1}
                  style={{
                     color: selectedOfferingIndex === index + 1 ? "#FFFFFF" : "black",
                     backgroundColor: selectedOfferingIndex === index + 1 ? "#7CBFBF" : "#FFFFFF",
                     fontWeight: 500,
                     border: "none",
                     marginBottom: selectedOfferingIndex === index + 1 ? "1rem" : "0.5rem",
                  }}
               >
                  {selectedOfferingIndex ? (
                     <OfferingCard
                        product={product}
                        productOfferings={productOfferings}
                        selectedOfferingIndex={selectedOfferingIndex}
                        handleChangeRedirect={handleChangeRedirect}
                        isMobileScreen={isMobileScreen}
                     />
                  ) : null}
               </Panel>
            ))}
         </Collapse>
      </>
   );
};

export default ProductOfferingsExpansion;

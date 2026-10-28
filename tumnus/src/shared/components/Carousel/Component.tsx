import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from "../Button";

interface CustomCarouselComponentProps {
   handleChangeNext: (carousel: Carousel | null) => void;
   handleChangePrevious: (carousel: Carousel | null) => void;
   children: ReactNode;
}

const CustomCarouselComponent = ({
   handleChangeNext,
   handleChangePrevious,
   children,
}: CustomCarouselComponentProps) => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 1,
      },
      tablet: {
         breakpoint: { max: 1024, min: 600 },
         items: 2,
         slidesToSlide: 1,
      },
      mobile: {
         breakpoint: { max: 600, min: 0 },
         items: 1,
         slidesToSlide: 1,
      },
   };

   const commonStyle = {
      button: {
         background: "#7CBFBF",
         color: "white",
         fontWeight: "bold",
         border: "none",
         marginRight: "0.313rem",
         fontSize: "1.25rem",
         marginTop: "1.938rem",
      },
   };

   let carousel: Carousel | null = null;
   return (
      <>
         <Carousel
            ref={(el: any) => {
               carousel = el;
            }}
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={5000}
            autoPlay={true}
            keyBoardControl={true}
            transitionDuration={0}
            containerClass="carousel-container"
            arrows={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            pauseOnHover={true}
         >
            {children}
         </Carousel>
         <CustomButton
            label={<LeftOutlined />}
            handleClick={() => handleChangePrevious(carousel)}
            size="large"
            style={commonStyle.button}
         />
         <CustomButton
            label={<RightOutlined />}
            handleClick={() => handleChangeNext(carousel)}
            size="large"
            style={commonStyle.button}
         />
      </>
   );
};

export default CustomCarouselComponent;

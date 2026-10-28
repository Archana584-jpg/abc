import React from "react";
import CustomCarouselComponent from "./Component";

interface CustomCarouselProps {
   children: React.ReactNode;
}

const CustomCarousel = ({ children }: CustomCarouselProps) => {
   const handleChangeNext = (carousel: any) => {
      carousel.next();
   };

   const handleChangePrevious = (carousel: any) => {
      carousel.previous();
   };

   return (
      <CustomCarouselComponent handleChangeNext={handleChangeNext} handleChangePrevious={handleChangePrevious}>
         {children}
      </CustomCarouselComponent>
   );
};

export default CustomCarousel;

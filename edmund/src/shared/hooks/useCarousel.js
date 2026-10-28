import { useState } from "react";

const useCarousel = ({ items = [], defaultIndex = 0 }) => {
   const [currentIndex, setCurrentIndex] = useState(defaultIndex);

   const goPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
   };

   const goNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex));
   };

   const handleChange = (key, value) => {
      if (key === "currentIndex") {
         setCurrentIndex(value);
      }
   };

   return {
      currentIndex,
      goPrev,
      goNext,
      handleChange,
   };
};

export default useCarousel;

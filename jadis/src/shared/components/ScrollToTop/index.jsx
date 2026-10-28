import { useEffect } from "react";
import { useRouter } from "shared/hooks/useRouter";

const ScrollToTop = () => {
   const { location } = useRouter();

   useEffect(() => {
      const contentElement = document.querySelector(".content-container");
      if (contentElement) {
         contentElement.scrollTo({ top: 0, behavior: "smooth" });
      } else {
         window.scrollTo({ top: 0, behavior: "smooth" });
      }
   }, [location.pathname]);
   return null;
};

export default ScrollToTop;

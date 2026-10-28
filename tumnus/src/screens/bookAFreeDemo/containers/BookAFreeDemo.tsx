import React, { useEffect } from "react";
import { BookAFreeDemoComponent } from "../components";

const BookAFreeDemo = () => {
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      document.body.appendChild(script);

      script.addEventListener("load", () => {
         if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
               region: "na1",
               portalId: "9341744",
               formId: "77400c0b-2c54-4ee4-82eb-329ed1b7023a",
               target: "#hubspot-form",
            });
         }
      });

      // Cleanup function to remove the script when the component unmounts
      return () => {
         document.body.removeChild(script);
      };
   }, []);

   return <BookAFreeDemoComponent />;
};

export default BookAFreeDemo;

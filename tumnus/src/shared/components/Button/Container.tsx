import React, { useState } from "react";
import CustomButtonComponent from "./Component";

interface CustomButtonProps {
   // Adjust the types according to your actual prop types
   label?: any;
   type?: string;
   className?: string;
   style?: {};
   size?: any;
   handleClick?: () => void;
   handleChangeMouseOver?: () => void;
   handleChangeMouseOut?: () => void;
   hoverableIcon?: any;
   icon?: any;
   ghost?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
   const [hoverableIconVisibility, setHoverableIconVisibility] = useState<boolean>(false);
   return (
      <CustomButtonComponent
         {...props}
         hoverableIconVisibility={hoverableIconVisibility}
         handleChangeHoverableIconVisibility={setHoverableIconVisibility}
      />
   );
};

export default CustomButton;

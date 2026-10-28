import { HeaderComponent } from "../components";
import { useSelector } from "react-redux";
import nodeSelector from "../selector";
import useActionHandler from "shared/hooks/useActionHandler";

const Header = ({ title, subtitle, icon, image, action }) => {
   const { applicationData } = useSelector(nodeSelector);
   const actionHandler = useActionHandler({ action });

   return (
      <HeaderComponent
         title={title}
         subtitle={subtitle}
         icon={icon}
         image={image}
         {...actionHandler}
         data={applicationData?.data}
      />
   );
};

export default Header;

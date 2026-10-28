import { Row } from "antd";
import FormSection from "./FormSection";
import GridlinesSection from "./GridlinesSection";
import IndustriesWeUseSection from "./IndustriesWeUseSection";
import SalesGridlinesSection from "./SalesGridlinesSection";
import WhyChooseGridlinesSection from "./WhyChooseGridlinesSection";

const BookAFreeDemo = () => {
   return (
      <Row>
         <FormSection />

         <GridlinesSection />

         <WhyChooseGridlinesSection />

         <IndustriesWeUseSection />

         <SalesGridlinesSection />
      </Row>
   );
};

export default BookAFreeDemo;

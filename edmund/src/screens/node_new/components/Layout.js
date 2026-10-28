import { Col, Row } from "antd";
import Content from "../containers/Content";

const Layout = ({ components }) => {
   return (
      <Row>
         {components?.map((component, index) => {
            const { wrapper } = component;
            return (
               <Col
                  key={index}
                  xs={wrapper?.style?.col?.xs}
                  md={wrapper?.style?.col?.md}
                  lg={wrapper?.style?.col?.lg}
                  className={wrapper?.className}
               >
                  <Content component={component} />
               </Col>
            );
         })}
      </Row>
   );
};

export default Layout;

import { Card } from "antd";
import Header from "../containers/Header";
import Layout from "../containers/Layout";

const Node = ({ config }) => {
   const { header, layout } = config;

   return (
      <Card
         title={header ? <Header {...header}></Header> : null}
         classNames={{
            header: "!p-0 !border-b-0",
            body: "!px-8 md:!px-32",
         }}
         className="p-2 m-2 rounded-xl min-h-svh"
      >
         <Layout components={layout} />
      </Card>
   );
};

export default Node;

import useRenderComponent from "shared/hooks/useRenderComponent";

const Content = ({ component, componentData, documents, dataSourcePath }) => {
   const renderedComponent = useRenderComponent({
      config: component,
      data: componentData,
      dataSourcePath: dataSourcePath,
   });
   return <>{renderedComponent}</>;
};

export default Content;

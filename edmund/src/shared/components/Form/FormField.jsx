import { hasIn } from "lodash";
import { componentTypes } from "shared/constants";
import useRenderComponent from "shared/hooks/useRenderComponent";
import useRenderField from "shared/hooks/useRenderField";

const CustomFormField = ({ field, data, formId }) => {
   const renderedComponent = useRenderComponent({ config: field, data });
   const renderedField = useRenderField({ field, data, formId });
   const renderedOutput = hasIn(componentTypes, field.type) ? renderedComponent : renderedField;
   return <>{renderedOutput}</>;
};

export default CustomFormField;

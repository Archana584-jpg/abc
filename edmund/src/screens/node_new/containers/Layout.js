import { LayoutComponent } from "../components";
import { evaluateConditions } from "utils/helper";
import { cloneDeep, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import nodeSelector from "../selector";

const Layout = ({ components }) => {
   const { applicationById, documents } = useSelector(nodeSelector);
   const [visibleComponents, setVisibleComponents] = useState([]);

   useEffect(() => {
      if (!isEmpty(applicationById.data) && components) {
         const filtered = components?.filter((item) => {
            return isEmpty(item.visibilityCondition)
               ? true
               : evaluateConditions(
                    item.visibilityCondition.conditions,
                    applicationById?.data,
                    item.visibilityCondition.logicalOperator,
                    documents
                 );
         });
         setVisibleComponents(cloneDeep(filtered));
      }
   }, [applicationById?.data, documents, components]);

   return <LayoutComponent components={visibleComponents} />;
};

export default Layout;

import { NodeComponent } from "../components";
import { FormManagerProvider } from "../formManagerContext";
import { isEmpty, set } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import nodeSelector from "../selector";
import { fetchJsonFromS3 } from "utils/helper";
import { CustomSpinner } from "shared/components";
import sharedSelector from "shared/selector";

const Node = () => {
   const [node, setNode] = useState({});
   const { applicationById, documents, actionExecuted } = useSelector(nodeSelector);
   const { isModalVisibile } = useSelector(sharedSelector);

   useEffect(() => {
      if (!isEmpty(applicationById.data)) {
         if (!isEmpty(applicationById.data.ui_config)) {
            setNode(applicationById.data.ui_config);
         } else {
            fetchJsonFromS3(applicationById.data.active_node_key)
               .then((data) => {
                  setNode(data);
               })
               .catch((error) => {
                  import(`assets/final configs/${applicationById.data.active_node_key}.json`)
                     .then((module) => {
                        setNode(module.default || module);
                     })
                     .catch(() => {
                        setNode({});
                     });
               });
         }
      }
   }, [applicationById.data]);

   return (
      <CustomSpinner
         loading={
            (actionExecuted.loading || applicationById.loading || documents.loading) &&
            !isModalVisibile?.["loader_modal"]
         }
      >
         <FormManagerProvider>
            <NodeComponent config={node}></NodeComponent>
         </FormManagerProvider>
      </CustomSpinner>
   );
};

export default Node;

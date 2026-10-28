import { useSelector } from "react-redux";
import { ContentComponent } from "../components";
import nodeSelector from "../selector";
import { useEffect, useState } from "react";
import { isEmpty, get, includes, set, cloneDeep, isArray } from "lodash";
import { getEvaluatedValue } from "utils/helper";
import sharedSelector from "shared/selector";

const Content = ({ component }) => {
   const { currentUser } = useSelector(sharedSelector);
   const { applicationById, documents } = useSelector(nodeSelector);
   const [componentData, setComponentData] = useState({});
   const [dataSourcePath, setDataSourcePath] = useState({});

   useEffect(() => {
      if (!isEmpty(applicationById.data)) {
         const dataPath = !isEmpty(component?.dataSource)
            ? getEvaluatedValue(
                 component?.dataSource,
                 set(cloneDeep(applicationById?.data), "data.generic_data.email", currentUser.data?.email)
              )
            : null;
         setDataSourcePath(dataPath);
         const lookupKey = component?.dataSource?.lookupKey;
         const dependOn = component?.dataSource?.dependOn;
         if (dataPath && lookupKey && dependOn) {
            const data = dataPath
               ? includes(dataPath, "data")
                  ? get(
                       set(cloneDeep(applicationById?.data), "data.generic_data.email", currentUser.data?.email),
                       dataPath
                    )
                  : get(set(cloneDeep(applicationById?.data), "data.generic_data.email", currentUser.data?.email), [
                       "data",
                       "generic_data",
                       dataPath,
                    ])
               : set(cloneDeep(applicationById?.data), "data.generic_data.email", currentUser.data?.email);
            const dependOnValue = get(applicationById?.data, dependOn);
            if (isArray(data)) {
               setComponentData(cloneDeep(data?.find((item) => item[lookupKey] === dependOnValue) || {}));
            }
         } else {
            setComponentData(
               dataPath
                  ? includes(dataPath, "data")
                     ? get(
                          set(cloneDeep(applicationById?.data), "data.generic_data.email", currentUser.data?.email),
                          dataPath
                       )
                     : get(set(cloneDeep(applicationById?.data), "data.generic_data.email", currentUser.data?.email), [
                          "data",
                          "generic_data",
                          dataPath,
                       ])
                  : set(cloneDeep(applicationById?.data), "data.generic_data.email", currentUser.data?.email)
            );
         }
      }
   }, [component?.dataSource, applicationById?.data, currentUser.data]);

   return (
      <ContentComponent
         component={component}
         componentData={componentData}
         documents={documents}
         dataSourcePath={dataSourcePath}
      />
   );
};

export default Content;

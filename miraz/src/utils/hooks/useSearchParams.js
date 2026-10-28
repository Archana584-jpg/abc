import { useSearchParams as useRouterSearchParams } from "react-router-dom";

export const useSearchParams = () => {
   const [searchParams, setSearchParams] = useRouterSearchParams();

   const getParam = (key) => {
      return searchParams.get(key);
   };

   const setParam = (key, value) => {
      const newParams = new URLSearchParams(searchParams);
      if (value === null || value === undefined) {
         newParams.delete(key);
      } else {
         newParams.set(key, value);
      }
      setSearchParams(newParams);
   };

   const removeParam = (key) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete(key);
      setSearchParams(newParams);
   };

   return {
      getParam,
      setParam,
      removeParam,
      searchParams,
      setSearchParams,
   };
};

import { routeCollectionMap } from "navigation/routes";
import { useLocation, useParams, useNavigate, useSearchParams } from "react-router-dom";

const navigationHistory = [];

export const useRouter = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const params = useParams();
   const [searchParams] = useSearchParams();

   const navigateTo = (path) => {
      navigationHistory.push(location.pathname);
      navigate(path);
   };

   const goBack = () => {
      navigate(navigationHistory.pop() || routeCollectionMap.DEFAULT);
   };

   return { goBack, location, params, searchParams, navigateTo };
};

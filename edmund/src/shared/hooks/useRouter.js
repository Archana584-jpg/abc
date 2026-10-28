import { useLocation, useParams, useNavigate, useSearchParams } from "react-router-dom";

export const useRouter = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const params = useParams();
   const [searchParams] = useSearchParams();

   const navigateTo = (path) => {
      navigate(path);
   };

   return { location, params, searchParams, navigateTo };
};

import { useCallback, useEffect, useState } from "react";
import { ApplicationsComponent } from "../components";
import { useDispatch, useSelector } from "react-redux";
import applicationsSelector from "../selector";
import { cloneDeep, isEmpty } from "lodash";
import { useRouter } from "shared/hooks/useRouter";
import { fetchApplications, fetchApplicationsFilters, setQueryDetails } from "../actions";
import { applicationStatuses } from "../constants";
import { CustomSpinner } from "shared/components";

const Applications = () => {
   const dispatch = useDispatch();
   const { params, navigateTo } = useRouter();
   const [appliedFilters, setAppliedFilters] = useState({});
   const { filters, queryDetails, applications } = useSelector(applicationsSelector);
   const { pagination, sort } = queryDetails;
   const [isRightDrawerVisible, setIsRightDrawerVisible] = useState(false);

   useEffect(() => {
      dispatch(fetchApplicationsFilters());
   }, []);

   useEffect(() => {
      const filters = !isEmpty(params)
         ? [
              {
                 key: "application_status",
                 values: [applicationStatuses[params?.status]?.label],
                 type: "TEXT",
                 filter_type: "CONTAINS",
              },
           ]
         : {};
      resetSort();
      setAppliedFilters(cloneDeep(filters));
   }, [params]);

   useEffect(() => {
      resetSort();
   }, [filters.data]);

   useEffect(() => {
      const request = {
         pagination_info: pagination,
      };
      if (!isEmpty(appliedFilters)) {
         request.filters = appliedFilters;
      }
      if (!isEmpty(pagination)) {
         request.pagination_info = pagination;
      } else {
         request.pagination_info = sort;
      }
      dispatch(fetchApplications(request));
   }, [sort, pagination, appliedFilters, dispatch]);

   const resetSort = () => {
      if (!isEmpty(filters.data?.sort_filters) && isEmpty(sort)) {
         const defaultSort = filters.data?.sort_filters.find((item) => item.is_default_filter);
         if (!isEmpty(defaultSort)) {
            dispatch(
               setQueryDetails({
                  sort: {
                     sort_direction: defaultSort.sort_direction,
                     sort_filter: { key: defaultSort.key, type: defaultSort.type },
                  },
               })
            );
         }
      }
   };

   const handleChange = useCallback(
      (key, value, nestedKey) => {
         switch (key) {
            case "appliedFilters":
               appliedFilters[nestedKey] = value;
               setAppliedFilters(cloneDeep(appliedFilters));
               return;
            case "sort":
               dispatch(
                  setQueryDetails({
                     sort: {
                        sort_direction: value.sort_direction,
                        sort_filter: {
                           key: value.key,
                           type: value.type,
                        },
                     },
                     pagination: {},
                  })
               );
               return;
            case "pagination":
               dispatch(
                  setQueryDetails({
                     pagination: {
                        ...pagination,
                        [nestedKey]: value,
                     },
                  })
               );
               return;
            case "isRightDrawerVisible":
               setIsRightDrawerVisible(value);
               return;

            default:
               return;
         }
      },
      [pagination, appliedFilters]
   );

   const handleView = (applicationId) => {
      navigateTo(`/application/${applicationId}`);
   };

   return (
      <CustomSpinner loading={applications.loading || filters.loading}>
         <ApplicationsComponent
            isRightDrawerVisible={isRightDrawerVisible}
            applications={applications.data}
            handleChange={handleChange}
            handleView={handleView}
            pagination={pagination}
            filters={filters.data}
            sort={sort}
         />
      </CustomSpinner>
   );
};

export default Applications;

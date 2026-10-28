import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { menuItems as baseMenuItems, menuItemsWRTAPIOutputKeys } from "../constants";
import { isEmpty } from "lodash";

export const useSidebar = ({
   defaultActiveSection = "profile-segments",
   headerHeight = 80,
   scrollOffset = 50,
   clickTimeout = 1500,
} = {}) => {
   const [activeSection, setActiveSection] = useState(defaultActiveSection);
   const [isUserClicking, setIsUserClicking] = useState(false);
   const { apiResponses } = useSelector(({ xToDetails: { apiResponses } }) => ({ apiResponses }));

   const hasAPIData = (apiResponse, outputKey) => {
      if (!apiResponse) return false;

      if (Array.isArray(apiResponse)) {
         if (apiResponse.length === 0) return false;

         return apiResponse.some((item) => hasAPIData(item, outputKey));
      }

      if (!isEmpty(apiResponse?.data?.[outputKey])) {
         return true;
      }

      return false;
   };

   const checkMenuItemHasData = (menuItemKey, apiResponses) => {
      const apiMappings = menuItemsWRTAPIOutputKeys[menuItemKey];
      if (!apiMappings || !apiResponses) return false;

      return apiMappings.some((apiMapping) => {
         const apiName = apiMapping.apiName;
         const apiResponse = apiResponses[apiName];
         const outputKey = apiMapping.outputKey;
         return hasAPIData(apiResponse, outputKey);
      });
   };

   const getSortedMenuItems = (apiResponses = {}) => {
      const safeAPIResponses = apiResponses || {};

      const items = baseMenuItems.map((item) => ({
         ...item,
         priority: item.priority || 999,
         checkCondition: () => checkMenuItemHasData(item.key, safeAPIResponses),
      }));

      const processed = items.map((item) => {
         const hasData = item.checkCondition ? item.checkCondition() : false;
         return {
            ...item,
            isValid: hasData,
            priority: item.priority || 999,
         };
      });

      const itemsWithData = processed.filter((item) => item.isValid === true);
      const itemsWithoutData = processed.filter((item) => item.isValid === false);

      itemsWithData.sort((a, b) => a.priority - b.priority);
      itemsWithoutData.sort((a, b) => a.priority - b.priority);

      return [...itemsWithData, ...itemsWithoutData].map((item) => ({
         key: item.key,
         label: item.label,
         priority: item.priority,
         isValid: item.isValid,
      }));
   };

   const menuItems = useMemo(() => {
      const sortedItems = getSortedMenuItems(apiResponses || {});
      return sortedItems.map((item) => ({
         key: item.key,
         label: item.label,
         icon: baseMenuItems.find((baseItem) => baseItem.key === item.key)?.icon,
      }));
   }, [apiResponses]);

   useEffect(() => {
      const handleScroll = () => {
         if (isUserClicking) return;

         const sections = document.querySelectorAll("[data-section]");
         let current = "";
         const scrollPosition = window.pageYOffset;
         const windowHeight = window.innerHeight;
         const documentHeight = document.documentElement.scrollHeight;

         const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;

         sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - headerHeight - scrollOffset;
            const sectionBottom = sectionTop + section.offsetHeight;
            const isLastSection = index === sections.length - 1;

            if (isLastSection && isAtBottom) {
               current = section.getAttribute("data-section");
            } else if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
               current = section.getAttribute("data-section");
            }
         });

         if (!current && sections.length > 0) {
            sections.forEach((section) => {
               const sectionTop = section.offsetTop - headerHeight - 100;
               if (scrollPosition >= sectionTop && !current) {
                  current = section.getAttribute("data-section");
               }
            });
         }

         if (current && current !== activeSection) {
            setActiveSection(current);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [activeSection, isUserClicking, headerHeight, scrollOffset]);

   const handleMenuClick = ({ key }) => {
      const element = document.querySelector(`[data-section="${key}"]`);
      if (element) {
         setIsUserClicking(true);
         setActiveSection(key);

         const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
         const offsetPosition = elementPosition - headerHeight;

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
         });

         setTimeout(() => {
            setIsUserClicking(false);
         }, clickTimeout);
      }
   };

   return {
      menuItems,
      activeSection,
      handleMenuClick,
      getSortedMenuItems,
   };
};

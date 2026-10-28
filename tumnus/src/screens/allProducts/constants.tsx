import { jigsawLogo, reportLogo, rpaLogo, targetLogo } from "../../assets/images";

import { ProductCard } from "@/shared";

export const productFeatures = [
   {
      title: "Access Management",
      image: targetLogo,
      description: "Configure for your teams",
   },
   {
      title: "Automation",
      image: rpaLogo,
      description: "Eliminate manual tasks",
   },
   {
      title: "Reporting",
      image: reportLogo,
      description: "Take informed decisions",
   },
   {
      title: "Extensibility",
      image: jigsawLogo,
      description: "Solve for any use case",
   },
];

export const renderAutoCompleteOptions = (products: any, navigateTo: any) => {
   return (products || []).map((item: any) => ({
      value: item.key,
      label: <ProductCard index={item.key} isRenderedOnAutomComplete={true} product={item} navigateTo={navigateTo} />,
   }));
};

import React, { useEffect } from "react";
import { MainComponent } from "../components";
import useIsMobile from "@/shared/hooks/useIsMobile";
import { IFintechApisStartupsProps } from "../interfaces";

interface IMainProps {
   fintechAPIsStartupsData: IFintechApisStartupsProps;
}

const Main = ({ fintechAPIsStartupsData }: IMainProps) => {
   const isMobileScreen = useIsMobile();

   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      document.body.appendChild(script);

      script.addEventListener("load", () => {
         if ((window as any).hbspt) {
            (window as any).hbspt.forms.create({
               region: "na1",
               portalId: "9341744",
               formId: "407e159d-39f3-4687-949e-5eb8fa3b9661",
               target: "#hubspot-form",
            });
         }
      });

      return () => {
         document.body.removeChild(script);
      };
   }, []);

   return <MainComponent isMobileScreen={isMobileScreen} fintechAPIsStartupsData={fintechAPIsStartupsData} />;
};

export default Main;

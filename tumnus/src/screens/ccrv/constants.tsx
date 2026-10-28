import {
   ccrvComprehensiveReportLogo,
   ccrvCriminalRecordLogo,
   ccrvInstantDecisionMakingLogo,
   ccrvInDepthLogo,
   olaLogo,
   blinkitLogo,
   myGlammLogo,
   noBrokerLogo,
   mobikwikLogo,
   justDialLogo,
} from "@/assets/images";

export const ccrvRecordsMapping = [
   { title: "Crime records", recordNumbers: "200 MN+" },
   { title: "Cases found (+ve results)", recordNumbers: "100 K+" },
   { title: "Checks performed", recordNumbers: "6 MN+" },
];

export const ccrvOverviewMapping = [
   {
      title: "In-Depth Verification",
      description: `Gridlines Criminal check API performs thorough checks using data such as name, father's name, current address, and permanent address. This ensures that you have a complete picture of an applicant's <b>criminal history</b>.`,
      logo: ccrvInDepthLogo,
   },
   {
      title: "Instant decision making ",
      description: `<b>100%</b> of the criminal history check is performed in <b>45 minutes</b>. Which helps in making quicker lending decisions, ensuring you don't miss out on opportunities while maintaining due diligence.`,
      logo: ccrvInstantDecisionMakingLogo,
   },
   {
      title: "Best criminal record database & coverage",
      description: `With access to an extensive database of more than <b>20 crore court records</b> spanning across India, you can swiftly and accurately verify the criminal history of loan applicants.`,
      logo: ccrvCriminalRecordLogo,
   },
   {
      title: "Comprehensive Report",
      description: `In cases where matches are found, our system provides access to FIR copies and case documents. From this you can get <b>actionable insights</b> for immediate implementation.`,
      logo: ccrvComprehensiveReportLogo,
   },
];

export const ccrvClientsLogo = [olaLogo, blinkitLogo, noBrokerLogo, mobikwikLogo, justDialLogo, myGlammLogo];

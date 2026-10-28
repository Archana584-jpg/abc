export interface IFintechApisStartupsProps {
   SECTION_1: {
      SUB_SECTION_11: { title: string; description: string; image: string };
      SUB_SECTION_12: { formLink: string };
      SUB_SECTION_13: Array<{ recordNumbers: string; title: string }>;
      SUB_SECTION_14: { overview: string; image: string };
   };
   SECTION_2: {
      title: string;
      data: Array<{ title: string; description: string; image: string }>;
   };
   SECTION_3: {
      title: string;
      data: Array<{ image: string; title: string; path: string; imageProps: { width: number; height: number } }>;
      footerText: string;
   };
   SECTION_4: {
      title: string;
      data: Array<{ title: string; description: string; image: string; path: string }>;
   };
}

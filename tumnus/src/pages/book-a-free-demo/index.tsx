import { BookAFreeDemo } from "@/screens";
import { ISEOMetaContent } from "@/shared/interfaces";
import LayoutComponent from "@/layout";

interface IBookFreeDemoProps {
   seoMetaContent: ISEOMetaContent;
}

const BookAFreeDemoPage = ({ seoMetaContent }: IBookFreeDemoProps) => {
   return (
      <LayoutComponent seoMetaContent={seoMetaContent} isheaderHidden={true} isfooterHidden={true}>
         <BookAFreeDemo />
      </LayoutComponent>
   );
};
export async function getStaticProps() {
   const seoMetaContent = {
      title: "Book A Free Demo | Gridlines",
      description:
         "Book your free demo with Gridlines. Discover powerful APIs for identity, employment, and credit verifications—fast, secure, and scalable.",
      keyword: "Book a free demo Gridlines",
   };
   return {
      props: {
         seoMetaContent,
      },
   };
}
export default BookAFreeDemoPage;

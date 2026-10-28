import { convertPdfToHtmlCoordinates } from "@/utils/helper";

const RenderSignatures = ({ pageNumber, esignData, pageHeights, pageWidths, scaleFactor = 1 }) => {
   const pageData = esignData.esign_positions?.find((p) => p.page_number === pageNumber);
   const currentPageHeight = pageHeights[pageNumber];
   const currentPageWidth = pageWidths[pageNumber];

   if (!pageData || !currentPageHeight || !currentPageWidth) return null;

   return pageData.esign_coordinates.map((coord, index) => {
      const htmlCoordinates = convertPdfToHtmlCoordinates(coord, currentPageHeight, currentPageWidth, scaleFactor);

      return (
         <div
            key={index}
            className="absolute border-2 border-dashed border-[#33CCCC] pointer-events-none"
            style={{
               left: `${htmlCoordinates.x}px`,
               top: `${htmlCoordinates.y}px`,
               width: `${htmlCoordinates.width}px`,
               height: `${htmlCoordinates.height}px`,
            }}
         >
            <div
               className={`${
                  scaleFactor < 1 ? "text-[0.6rem]" : "text-[0.75rem]"
               } font-semibold leading-tight text-gray-600 flex justify-center items-center h-full`}
            >
               {esignData.name_to_show_on_signature_stamp}
            </div>
         </div>
      );
   });
};

export default RenderSignatures;

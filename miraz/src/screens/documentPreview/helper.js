export const handlePageLoadSuccess = (pageNumber, setPageHeights, setPageWidths) => (page) => {
   const viewport = page.getViewport({ scale: 1 });
   setPageHeights((prev) => ({
      ...prev,
      [pageNumber]: viewport.height,
   }));
   setPageWidths((prev) => ({
      ...prev,
      [pageNumber]: viewport.width,
   }));
};

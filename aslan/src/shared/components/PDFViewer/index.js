import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const CustomPDFViewer = ({ pdfSource }) => {
   return (
      <div className="tw-w-full tw-h-full">
         {pdfSource ? (
            <iframe src={`${pdfSource}#toolbar=0`} width="100%" height="100%" type="application/pdf" frameborder="0" />
         ) : (
            <Text>No PDF file or URL provided</Text>
         )}
      </div>
   );
};

export default CustomPDFViewer;

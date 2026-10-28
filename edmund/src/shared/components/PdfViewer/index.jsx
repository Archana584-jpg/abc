import React from "react";
import { Typography, Row, Col } from "antd";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const { Text } = Typography;

const CustomPDFViewer = ({ pdfSource }) => {
   const isMobile = window.innerWidth < 768;
   return (
      <div className="lg:h-[600px] md:h-[600px]">
         {pdfSource ? (
            isMobile ? (
               <Row>
                  <Col xs={{ span: 24 }} className="h-full">
                     <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={pdfSource} className="h-96" />
                     </Worker>
                  </Col>
               </Row>
            ) : (
               <iframe src={pdfSource} width="100%" height="100%" type="application/pdf" />
            )
         ) : (
            <Text>No PDF file or URL provided</Text>
         )}
      </div>
   );
};

export default CustomPDFViewer;

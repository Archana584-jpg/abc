import { CustomImage, CustomModal, CustomPDFViewer } from "..";

const Preview = ({ isPdf, previewFile, isPreviewVisible, setIsPreviewVisible }) => {
   if (!isPreviewVisible || !previewFile) return null;

   return isPdf ? (
      <CustomModal
         width="70%"
         handleClose={() => setIsPreviewVisible(false)}
         content={<CustomPDFViewer pdfSource={previewFile} />}
         closable={false}
         maskClosable={true}
         className="bg-none-modal"
         visibilityDependsOn="filePreviewModal"
         defaultVisibility={isPreviewVisible}
      />
   ) : (
      <CustomImage
         preview={{
            visible: isPreviewVisible,
            src: previewFile,
            onVisibleChange: setIsPreviewVisible,
         }}
      />
   );
};

export default Preview;

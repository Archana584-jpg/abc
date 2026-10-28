import React from "react";
import { Modal, Typography, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Text } = Typography;

const UdyamCertificateWindow = ({ visible, onClose, documentUrl, title = "Udyam Certificate" }) => {
   return (
      <Modal
         open={visible}
         onCancel={onClose}
         footer={null}
         width="90vw"
         centered={false}
         closeIcon={
            <Button
               type="text"
               icon={<CloseOutlined />}
               onClick={onClose}
               className="tw-text-white tw-text-base tw-border-none tw-bg-transparent"
            />
         }
         className="x-to-details-modal tw-top-5"
         title={<Text className="card-section-title">{title}</Text>}
         styles={{
            body: {
               padding: 0,
               height: "85vh",
               overflow: "hidden",
            },
         }}
      >
         {documentUrl ? (
            <iframe
               src={documentUrl}
               title={title}
               className="tw-w-full tw-h-13.6 tw-border-none tw-rounded-b-xl tw-overflow-auto"
               allowFullScreen
            />
         ) : (
            <div className="tw-flex tw-justify-center tw-items-center tw-h-13.6 tw-bg-1a1a1a tw-rounded-b-xl">
               <Text className="tw-text-white tw-text-base">No document available to display</Text>
            </div>
         )}
      </Modal>
   );
};

export default UdyamCertificateWindow;

import React from "react";
import { Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { passbookDetailsColumns } from "screens/xToDetails/constants";
import { CustomTable, CustomButton, CustomModal } from "shared";

const { Text } = Typography;

const PassbookDetails = ({ visible, onClose, data, establishmentName }) => {
   return (
      <CustomModal
         open={visible}
         handleClose={onClose}
         footer={null}
         width={1200}
         centered={true}
         closeIcon={
            <CustomButton
               type="text"
               icon={<CloseOutlined />}
               handleClick={onClose}
               className="tw-text-white tw-text-base tw-bg-transparent tw-border-none"
            />
         }
         className="x-to-details-modal"
         title={<Text className="card-section-title">Passbook Details</Text>}
      >
         <Text className="x-to-details-modal-table-name">{establishmentName || "-"}</Text>

         <CustomTable
            data={data || []}
            columns={passbookDetailsColumns}
            pagination={false}
            size="small"
            rowKey={`${Math.random()}-${Math.random()}`}
            scroll={{ x: 800, y: 400 }}
            className="passbook-details-table dark-employment-table"
         />
      </CustomModal>
   );
};

export default PassbookDetails;

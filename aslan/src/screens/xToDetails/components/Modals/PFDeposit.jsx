import React from "react";
import { Modal, Typography, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { CustomTable } from "shared";
import { pfDepositColumns } from "screens/xToDetails/constants";

const { Text } = Typography;

const PFDeposit = ({ visible, onClose, data, establishmentName }) => {
   return (
      <Modal
         open={visible}
         onCancel={onClose}
         footer={null}
         width={800}
         centered
         closeIcon={
            <Button
               type="text"
               icon={<CloseOutlined />}
               onClick={onClose}
               className="tw-text-white tw-text-base tw-border-none tw-bg-transparent"
            />
         }
         className="x-to-details-modal"
         title={<Text className="card-section-title">Employer PF Deposit (last 3 months)</Text>}
      >
         <Text className="x-to-details-modal-table-name">{establishmentName || "-"}</Text>

         <CustomTable
            data={data || []}
            columns={pfDepositColumns}
            pagination={false}
            size="small"
            rowKey={`${Math.random()}-${Math.random()}`}
            scroll={{ x: 600, y: 400 }}
            className="pf-deposit-table dark-employment-table"
         />
      </Modal>
   );
};

export default PFDeposit;

import React from "react";
import { Row, Col } from "antd";
import { CustomPagination, CustomTable } from "shared";
import "./style.css";

const Logs = ({ column, data, handleChangePagination, paginationLimit }) => {
   return (
      <>
         <Row gutter={[8, 8]} className="tw-mb-5" justify="space-between">
            <Col lg={{ span: 23 }} className="tw-ml-4">
               <CustomPagination
                  data={data}
                  handleChangePagination={handleChangePagination}
                  limit={paginationLimit}
                  position="end"
               />
            </Col>
         </Row>

         <CustomTable
            className="table-container tw-whitespace-pre"
            columns={column}
            data={data.entities || []}
            scroll={{
               x: "max-content",
               y: 340,
            }}
            pagination={false}
         />
      </>
   );
};

export default Logs;

import React from "react";
import { Row, Col } from "antd";
import { CustomPagination, CustomTable } from "shared";

const ReportsComponent = ({ columns, data, handleChangePagination, paginationLimit }) => {
   return (
      <>
         <Row gutter={[8, 8]} className="tw-pb-5">
            <Col lg={{ span: 24 }}>
               <CustomPagination
                  data={data || {}}
                  handleChangePagination={handleChangePagination}
                  limit={paginationLimit}
                  position="end"
               />
            </Col>
         </Row>

         <CustomTable
            className="table-container"
            columns={columns || []}
            data={(data || {}).entities || []}
            scroll={{
               x: "max-content",
               y: 340,
            }}
            pagination={false}
            style={{ whiteSpace: "pre" }}
         />
      </>
   );
};

export default ReportsComponent;

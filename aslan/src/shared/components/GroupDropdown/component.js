import React from "react";
import { Checkbox, Col, Row, Select, Typography } from "antd";
import {
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { CustomInput } from "../..";

const { Option, OptGroup } = Select;
const { Text } = Typography;

const GroupDropdownComponent = ({
  handleChange,
  style,
  data,
  handleChangeInputFocus,
  isInputFocused,
  handleChangeSelected,
  selectedItems,
  placeholder,
  searchPlaceholder,
  handleChangeDeleteAllItems,
  error,
}) => {
  return (
    <Row gutter={[8, 8]}>
      <Col span={11}>
        <CustomInput
          value={""}
          onFocus={() => handleChangeInputFocus(true)}
          //   onBlur={() => handleChangeInputFocus(false)}
          suffix={
            isInputFocused ? (
              <LeftOutlined
                onClick={() => handleChangeInputFocus(false)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <RightOutlined
                onClick={() => handleChangeInputFocus(true)}
                style={{ cursor: "pointer" }}
              />
            )
          }
          placeholder={placeholder}
          status={error.isError && "error"}
        />
        {error.isError && (
          <Text style={{ color: "#ED5F74", fontSize: "0.665rem" }}>
            <WarningOutlined /> {error.message}
          </Text>
        )}
        {selectedItems.length > 0 && (
          <Text
            style={{
              fontSize: "0.813rem",
              float: "right",
              marginTop: "0.90rem",
            }}
          >
            {selectedItems.length} products selected{" "}
            <DeleteOutlined
              onClick={() => handleChangeDeleteAllItems()}
              style={{ color: "#33CCCC" }}
            />
          </Text>
        )}
      </Col>

      {isInputFocused && (
        <Col span={7}>
          <Select
            style={{ width: "100%", ...style }}
            onChange={handleChange}
            placeholder={searchPlaceholder}
            showSearch
            placement="bottomLeft"
            defaultOpen={true}
            suffixIcon={<SearchOutlined />}
            onFocus={() => handleChangeInputFocus(true)}
            // autoFocus={true}
          >
            {data.map((item, index) => (
              <OptGroup label={item.label} key={index}>
                {Object.entries(item.items).map(([nestedItem, nestedValue]) => (
                  <Option key={nestedItem} disabled={true} value={nestedItem}>
                    <Checkbox
                      checked={selectedItems.indexOf(nestedItem) > -1}
                      onChange={() => handleChangeSelected(nestedItem)}
                    >
                      {nestedValue}
                    </Checkbox>
                  </Option>
                ))}
              </OptGroup>
            ))}
          </Select>
        </Col>
      )}
    </Row>
  );
};

export default GroupDropdownComponent;
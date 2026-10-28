import { CustomIcon, CustomImage, CustomInput } from "..";
import { countries } from "assets/resources";
import { getFlagLogoUrl } from "utils/helper";
import { Typography, Form, Select, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const PhoneCountryCodeSelctor = ({ uiElementProps }) => {
   const [searchValue, setSearchValue] = useState("");

   const handleSearchChange = (value) => {
      setSearchValue(value);
   };

   const options = Object.values(countries).map((item) => ({
      label: (
         <div className="flex jusitfy-center items-center">
            <CustomImage src={getFlagLogoUrl(item.regionCode)} width={24} />
            <Typography.Text className="ml-2">{item.countryName}</Typography.Text>
            <Typography.Text className="ml-2">{item.countryCode}</Typography.Text>
         </div>
      ),
      key: `${item.countryName} - ${item.regionCode}`,
      value: item.regionCode,
   }));

   const renderSelectedLabel = (option) => {
      return (
         <div className="flex jusitfy-center items-center">
            <CustomImage src={getFlagLogoUrl(option.value)} width={24} onChange={handleSearchChange} />
         </div>
      );
   };
   return (
      <Form.Item name={uiElementProps?.name || "prefix"} noStyle>
         <Select
            popupMatchSelectWidth={false}
            labelRender={(option) => renderSelectedLabel(option)}
            {...uiElementProps}
            options={options}
            optionFilterProp={"key"}
            searchValue={searchValue}
            dropdownRender={(menu) => (
               <>
                  <Space.Compact style={{ width: "100%" }}>
                     <CustomInput
                        placeholder={"Search Country"}
                        className={"m-2"}
                        onChange={handleSearchChange}
                        prefix={<CustomIcon className={"text-subText"} component={SearchOutlined}></CustomIcon>}
                     ></CustomInput>
                  </Space.Compact>
                  {menu}
               </>
            )}
         ></Select>
      </Form.Item>
   );
};
export default PhoneCountryCodeSelctor;

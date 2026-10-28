import React, { useState } from "react";
import countries from "assets/resources/countries.json";
import { CustomImage } from "../Image";
import CustomInput from "../Input";
import CustomSelect from "../Select";
import { getFlagLogoUrl } from "utils/helper";
import { Select, Space } from "antd";
import Typography from "antd/es/typography/Typography";
import { CustomIcon } from "..";
import { SearchOutlined } from "@ant-design/icons";

const CustomPhoneNumber = ({
   selectClassName,
   inputClassName,
   placeholder,
   onChange,
   handleSelectChange,
   selectedValue,
   value,
   disabledSelect,
   disabled,
   required,
}) => {
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
      value: item.countryCode,
   }));

   const renderSelectedLabel = (option) => {
      return (
         <div className="flex jusitfy-center items-center">
            <CustomImage
               src={getFlagLogoUrl(option?.key?.split(" - ")?.[1])}
               width={24}
               onChange={handleSearchChange}
            />
         </div>
      );
   };
   return (
      <Space.Compact className="w-full">
         <Select
            labelRender={(option) => renderSelectedLabel(option)}
            className={selectClassName}
            value={selectedValue}
            onChange={handleSelectChange}
            options={options}
            optionFilterProp={"key"}
            disabled={disabledSelect}
            popupMatchSelectWidth={false}
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
         />

         <CustomInput
            className={inputClassName}
            type={"text"}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled || false}
            prefix={selectedValue}
         />
      </Space.Compact>
   );
};

export default CustomPhoneNumber;

import React, { useEffect, useState } from "react";
import GroupDropdownComponent from "./component";

const GroupDropdown = ({
  data,
  placeholder,
  searchPlaceholder,
  handleChangeSelectedItems,
  error,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    handleChangeSelectedItems(selectedItems);
  }, [selectedItems]);

  const handleChangeSelected = (value) => {
    if (selectedItems.indexOf(value) > -1)
      setSelectedItems(selectedItems.filter((x) => x !== value));
    else setSelectedItems([...selectedItems, value]);
  };
  
  return (
    <GroupDropdownComponent
      isInputFocused={isInputFocused}
      handleChangeInputFocus={(focused) => setIsInputFocused(focused)}
      data={data}
      handleChangeSelected={handleChangeSelected}
      selectedItems={selectedItems}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      handleChangeDeleteAllItems={() => setSelectedItems([])}
      error={error}
    />
  );
};

export default GroupDropdown;
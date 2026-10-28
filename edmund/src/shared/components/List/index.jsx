import { Flex, List } from "antd";
import CustomLabel from "../Label";
import { renderIcon } from "screens/node/helper";
import { isEmpty } from "lodash";

const CustomList = ({
   title = {},
   subtitle = {},
   items,
   renderItem,
   className,
   listClassName,
   itemClassName,
   grid,
   pagination,
   split = false,
}) => {
   return (
      <Flex vertical className={className}>
         {!isEmpty(title) && <CustomLabel label={title} />}
         {!isEmpty(subtitle) && <CustomLabel label={subtitle} />}
         <List
            split={split}
            className={listClassName}
            grid={grid}
            pagination={pagination}
            dataSource={items}
            renderItem={
               renderItem
                  ? renderItem
                  : (item) => (
                       <List.Item className={itemClassName}>
                          <List.Item.Meta
                             title={<CustomLabel label={item?.title} />}
                             description={<CustomLabel label={item?.description} />}
                             avatar={item?.icon && renderIcon(item?.icon, item)}
                          />
                       </List.Item>
                    )
            }
         />
      </Flex>
   );
};

export default CustomList;

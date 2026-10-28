import { Form } from "antd";
import { CustomButton } from "..";
import { DeleteOutlined } from "@ant-design/icons";
import { renderIcon } from "screens/node/helper";
import { CustomFormField } from ".";

const CustomFormList = ({ field, data }) => {
   const { repeatableField } = field;
   return (
      <Form.List name={field.props.name}>
         {(fields, { add, remove }) => (
            <>
               {fields.map(({ key, name }, index) => (
                  <div
                     key={key}
                     className={`flex gap-x-3 ${index === 0 ? "items-center" : ""} ${
                        repeatableField?.wrapper?.className
                     }`}
                  >
                     <div className="flex-1">
                        <CustomFormField
                           field={{
                              ...field,
                              props: {
                                 ...field.props,
                                 name,
                              },
                              content: {
                                 ...field.content,
                                 label: index === 0 ? field?.content?.label : {},
                              },
                           }}
                           data={data}
                        ></CustomFormField>
                     </div>
                     {fields.length > 1 ? (
                        <CustomButton
                           className={`${index === 0 ? "mt-[6px]" : ""} ${repeatableField?.remove?.className}`}
                           icon={<DeleteOutlined />}
                           handleClick={() => remove(name)}
                        />
                     ) : null}
                     {!index ? (
                        <CustomButton
                           className={`${index === 0 ? "mt-[6px]" : ""} ${repeatableField?.add?.className}`}
                           label={field.repeatableField?.add?.text || "Add More"}
                           handleClick={() => add()}
                           icon={
                              repeatableField?.add?.icon
                                 ? renderIcon(repeatableField?.add?.icon)
                                 : renderIcon({ iconName: "PlusOutlined" })
                           }
                        />
                     ) : null}
                  </div>
               ))}
            </>
         )}
      </Form.List>
   );
};

export default CustomFormList;

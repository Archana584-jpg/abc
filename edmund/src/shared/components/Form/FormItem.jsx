import { Form } from "antd";
import HelperText from "./HelperText";
import { generateFieldRules } from "./helper";
import { InfoCircleFilled } from "@ant-design/icons";
import CustomLabel from "../Label";
import { isArray, isEmpty } from "lodash";

const CustomFormItem = ({
   key,
   type,
   name,
   content,
   isEditable,
   preserve,
   className,
   validateFirst = false,
   validation = {},
   customRules = [],
   children,
   valuePropName = "value",
   file,
}) => {
   const { label, helperText } = content || {};

   return (
      <Form.Item
         key={`${name}-${key}`}
         name={name}
         label={!label?.text ? null : <CustomLabel label={label} />}
         rules={generateFieldRules({
            validation,
            isEditable,
            type: type,
            customRules,
            file,
         })}
         validateFirst={validateFirst}
         className={className}
         preserve={preserve}
         tooltip={
            !label?.infoText ? null : { title: label?.infoText, icon: <InfoCircleFilled className="text-[#717988]" /> }
         }
         extra={
            isEmpty(helperText) ? null : isArray(helperText) ? (
               <>
                  {helperText.map((text, index) => (
                     <HelperText key={index} helperText={text} />
                  ))}
               </>
            ) : (
               <HelperText helperText={helperText} />
            )
         }
         valuePropName={valuePropName}
      >
         {children}
      </Form.Item>
   );
};

export default CustomFormItem;

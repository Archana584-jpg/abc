import { formUIElements } from "utils/constants";
import { userAgreementConsentValidator } from "utils/helper";
import { Typography } from "antd";

const { Text } = Typography;

const sandboxConsentSchema = {
   formItemAttributes: {
      name: "consent",
      valuePropName: "checked",
      validateTrigger: "onChange",
      rules: [
         userAgreementConsentValidator({
            message: "Please agree to Terms of Service",
         }),
      ],
   },
   uiElement: {
      type: formUIElements.CHECKBOX,
      attributes: {
         children: (
            <Text className="tw-text-sm tw-leading-4">
               I agree that this data is shared with the informed consent of owner / user for the purpose of
               verification and processing.
            </Text>
         ),
      },
   },
};

export default sandboxConsentSchema;

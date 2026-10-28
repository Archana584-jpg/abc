import { DatePicker, Form, Radio } from "antd";
import React from "react";
import {
    CustomButton,
    CustomInput,
} from "../../../shared/components";

const FilterBeneficiaryComponent = ({ onSubmitForm, filterType, handleFilterType }) => {

    const [form] = Form.useForm();

    return (
        <>
            <Radio.Group onChange={handleFilterType} value={filterType}>
                <Radio value="beneficiaryId">Beneficiary Id</Radio>
                <Radio value="beneficiaryDetail">Beneficiary Detail</Radio>
                <Radio value="last_4_id_characters">Last 4 Digits Of The Beneficiary Document Id</Radio>
            </Radio.Group>
            <Form
                layout="vertical"
                form={form}
                onFinish={onSubmitForm}
                style={{ marginTop: '5%' }}
            >
                {filterType === 'beneficiaryId' ?

                    <Form.Item
                        name={"beneficiary_id"}
                        label={"Beneficiary Id"}
                        rules={[
                            {
                                required: true,
                                type: "string",
                            }
                        ]}
                    >
                        <CustomInput
                            type={"number"}
                            placeholder={`Please Enter Beneficiary Id`}
                        />
                    </Form.Item> :

                    filterType === 'beneficiaryDetail' ?
                        <>
                            <Form.Item
                                name={"full_name"}
                                label={"Full Name"}
                                rules={[
                                    {
                                        required: true,
                                        type: "string",
                                    },
                                ]}
                            >
                                <CustomInput type={"string"} placeholder={`Please Enter Full Name`} />
                            </Form.Item>

                            <Form.Item
                                rules={[{ required: true, type: "object" }]}
                                name="year_of_birth"
                                label="Year Of Birth"
                            >
                                <DatePicker picker="year" />
                            </Form.Item>
                        </> :
                        <Form.Item
                            name={"last_4_id_characters"}
                            label={"Last 4 Digits Of The Beneficiary Document Id"}
                            rules={[
                                {
                                    required: true,
                                    type: "string",
                                }
                            ]}
                        >
                            <CustomInput
                                type={"number"}
                                placeholder={`Please Enter Last 4 Digits Of The Beneficiary Document Id`}
                            />
                        </Form.Item>
                }
                <Form.Item>
                    <CustomButton
                        type="primary"
                        htmlType="submit"
                        title={"Submit"}
                    />
                </Form.Item>
            </Form>
        </>
    );
};

export default FilterBeneficiaryComponent
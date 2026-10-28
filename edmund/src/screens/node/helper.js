import { Form, List, Typography, Flex } from "antd";
import * as icons from "assets/icons";
import {
   CustomRadio,
   CustomUpload,
   CustomInput,
   CustomDatePicker,
   ImageWithActions,
   CustomCollapsibleList,
   CustomAlert,
   CustomSelect,
   CustomTextarea,
   CustomCheckbox,
   CustomPhoneNumber,
   CustomButton,
   CustomImage,
   CustomModal,
   CustomFormItem,
   SelectableList,
   CustomIcon,
} from "shared/components";
import { componentTypes, executeActionTypes, fileTypes, formFieldTypes, uploadComponentModes } from "shared/constants";
import FormContainer from "./containers/Form";
import { isArray, isEmpty, isObject } from "lodash";
import {
   replacePlaceholders,
   getActionType,
   downloadFile,
   getNestedProperty,
   evaluateConditions,
   getFileAndType,
   getSourceAndType,
   orderListByKey,
} from "utils/helper";
import dayjs from "dayjs";
import Components from "./containers/Components";
import OTPModal from "./components/OTPModal";
import { InfoCircleOutlined } from "@ant-design/icons";

export const renderIcon = ({ src, iconName, className = "", style = {}, handleClick }) => {
   const IconComponent = icons[iconName];
   return src ? (
      <CustomImage className={className} style={style} src={src} onClick={handleClick} />
   ) : (
      IconComponent && (
         <CustomIcon component={IconComponent} className={className} style={style} onClick={handleClick} />
      )
   );
};

export const getDisabledDateRange = (minDate, maxDate) => {
   return (current) => {
      const min = minDate ? new Date(minDate) : null;
      const max = maxDate ? new Date(maxDate) : null;

      if (min && current && current < min) return true; // Disable dates before minDate
      if (max && current && current > max) return true; // Disable dates after maxDate

      return false; // Enable all other dates
   };
};

export const renderField = ({
   state = {},
   field = {},
   fileList,
   dataSource,
   formFields,
   handleAction,
   handleChange,
   handleFileList,
   handleStateChange,
   downloadedDocuments,
}) => {
   switch (field.type) {
      case formFieldTypes.DRAG_AND_DROP:
         const { file, type } = getFileAndType({
            fileList,
            formFields,
            downloadedDocuments,
            fieldName: field.name,
            isMultiple: isObject(field.multiple),
         });
         return (
            <>
               {isObject(field.multiple) ? (
                  Object.values(field.multiple)
                     .filter((item) => {
                        return !isEmpty(item.visibilityCondition)
                           ? evaluateConditions(
                                item.visibilityCondition.conditions,
                                formFields,
                                item.visibilityCondition.logicalOperator,
                                fileList,
                                downloadedDocuments
                             )
                           : true;
                     })
                     .map((item, index) => {
                        return (
                           <CustomFormItem
                              field={{ ...field, key: `${field.name}_${index}`, validation: item?.validation }}
                              validateFirst={true}
                              file={file?.[index]}
                              key={index}
                           >
                              <CustomUpload
                                 field={{ ...item, name: field.name }}
                                 fileList={file?.[index]}
                                 handleFileList={handleFileList}
                                 handleRemove={() => handleChange("removeFile", field.name)}
                                 type={type?.[index]}
                                 mode={uploadComponentModes.DRAG_AND_DROP}
                                 index={index}
                              />
                           </CustomFormItem>
                        );
                     })
               ) : (
                  <CustomFormItem field={field} formFieldId={formFields?.id} validateFirst={true} file={file}>
                     <CustomUpload
                        field={field}
                        fileList={file}
                        handleFileList={handleFileList}
                        handleRemove={() => handleChange("removeFile", field.name)}
                        type={type}
                        mode={uploadComponentModes.DRAG_AND_DROP}
                     />
                  </CustomFormItem>
               )}
            </>
         );
      case formFieldTypes.RADIO_GROUP: {
         return (
            <CustomFormItem field={field} formFieldId={formFields?.id}>
               <CustomRadio
                  name={field.name}
                  size={field.size}
                  options={field.options}
                  direction={field.direction}
                  value={formFields[field.name] || ""}
                  onChange={(value) => handleChange(field.name, value)}
               />
            </CustomFormItem>
         );
      }
      case formFieldTypes.INPUT: {
         return (
            <CustomFormItem field={field} formFieldId={formFields.id}>
               <CustomInput
                  placeholder={field?.placeHolder?.text}
                  className={field?.placeHolder?.className}
                  disabled={!field?.isEditable}
                  maxLength={field?.validation?.maxLength}
                  onChange={(value) => handleChange(field.name, value)}
                  value={formFields[field.name] || ""}
               />
            </CustomFormItem>
         );
      }
      case formFieldTypes.UPLOAD: {
         const { file, type } = getFileAndType({
            fileList,
            formFields,
            downloadedDocuments,
            fieldName: field.name,
            isMultiple: isObject(field.multiple),
         });
         return (
            <CustomFormItem field={field} formFieldId={formFields.id} file={file} validateFirst={true}>
               <CustomUpload
                  field={field}
                  type={type}
                  handleAction={handleAction}
                  handleChange={handleChange}
                  fileList={file}
                  handleRemove={() => handleChange("removeFile", field.name)}
                  handleFileList={handleFileList}
               />
            </CustomFormItem>
         );
      }
      case formFieldTypes.DATE:
         return (
            <CustomFormItem field={field} formFieldId={formFields.id}>
               <CustomDatePicker
                  format={field.format}
                  placeholder={field.placeHolder?.text}
                  disabled={!field.isEditable}
                  className={field.placeHolder?.className}
                  disabledDate={getDisabledDateRange(field.minDate, field.maxDate)}
                  style={{ width: "100%" }} //as of now not able to give 100% width via tailwind hence using style
                  value={formFields[field.name] || ""}
                  onChange={(value) => {
                     handleChange(field.name, value ? dayjs(value).format(field.format || "YYYY-MM-DD") : value);
                  }}
               />
            </CustomFormItem>
         );
      case formFieldTypes.SELECT:
         return (
            <CustomFormItem field={field} formFieldId={formFields?.id}>
               <CustomSelect
                  placeholder={field.placeHolder?.text}
                  options={field.sortOrder ? orderListByKey(field.options, "label", field.sortOrder) : field.options}
                  className={field.placeHolder?.className}
                  mode={field.mode}
                  value={formFields[field.name] || ""}
                  onChange={(value) => handleChange(field.name, value)}
               />
            </CustomFormItem>
         );
      case formFieldTypes.TEXTAREA:
         return (
            <CustomFormItem field={field} formFieldId={formFields.id}>
               <CustomTextarea
                  rows={field.rows}
                  value={field.value}
                  placeholder={field.placeHolder?.text}
                  onChange={(value) => handleChange(field.name, value)}
               />
            </CustomFormItem>
         );
      case formFieldTypes.CHECKBOX:
         return (
            <CustomFormItem field={field} formFieldId={formFields.id} valuePropName="checked">
               <CustomCheckbox
                  label={field?.placeHolder?.text}
                  className={field?.className}
                  checked={formFields[field.name] ? JSON.parse(formFields[field.name]) : false}
                  onChange={(value) => handleChange(field.name, value)}
               />
            </CustomFormItem>
         );
      case formFieldTypes.PHONE_NUMBER:
         return (
            <CustomFormItem field={field} formFieldId={formFields.id}>
               <CustomPhoneNumber
                  value={field?.value}
                  inputClassName={"!w-5/6"}
                  selectClassName={"!w-1/6"}
                  placeholder={"00000 00000"}
                  onChange={(value) => handleChange(field?.name, value)}
               />
            </CustomFormItem>
         );
      case formFieldTypes.TEXT: {
         return (
            <div className={field.className}>
               <Typography className={field?.content?.label?.className}>{field?.content?.label?.text}</Typography>
            </div>
         );
      }
      case formFieldTypes.OTP_MODAL: {
         return state[field?.key] ? (
            <OTPModal
               field={field}
               dataSource={dataSource}
               visible={state[field?.key]}
               handleStateChange={handleStateChange}
            />
         ) : null;
      }
      case formFieldTypes.SELECTABLE_LIST: {
         const dataSrc = getNestedProperty(dataSource, field?.dataSource) || [];
         const options = field.optionMapper
            ? dataSrc.map((item) => ({
                 value: item[field?.optionMapper?.value],
                 label: item[field?.optionMapper?.label],
                 isActive: item[field?.optionMapper?.isActive],
                 subTitle: item[field?.optionMapper?.subTitle],
              }))
            : field.options;
         return (
            <Form.Item
               key={formFields?.id ? `${field.name}-${formFields?.id}` : field.name}
               preserve={field.preserve}
               name={field.name}
               label={
                  !field.label?.text ? null : (
                     <Typography className={field.label?.className}>{field.label?.text}</Typography>
                  )
               }
               rules={[
                  { required: field?.validation?.required?.isRequired, message: field?.validation?.required?.message },
               ]}
               extra={
                  !field?.helperText?.text ? null : (
                     <Flex align="center" gap={1}>
                        <CustomIcon
                           component={InfoCircleOutlined}
                           className={field.helperText.className + " mr-1"}
                        ></CustomIcon>
                        <Typography.Text className={field.helperText.className}>
                           {field.helperText.text}
                        </Typography.Text>
                     </Flex>
                  )
               }
            >
               <SelectableList
                  name={field.name}
                  options={options}
                  value={formFields[field.name] || ""}
                  onChange={(value) => handleChange(field.name, value)}
               />
            </Form.Item>
         );
      }
      default:
         return null;
   }
};

export const renderComponent = ({
   item,
   state,
   formRef,
   fileList,
   dataSource,
   handleAction,
   handleFileList,
   applicationData,
   downloadedDocuments,
}) => {
   switch (item.type) {
      case componentTypes.IMAGE_VIEWER:
         const key = isObject(item?.content?.key)
            ? getActionType(item?.content?.key, applicationData.data?.generic_data)
            : item?.content?.key;
         const { type, source } = getSourceAndType({ key, item, downloadedDocuments, formFields: dataSource });
         if (item?.content?.multiple && isArray(source)) {
            return (
               <>
                  {source?.map((file, index) => {
                     return (
                        <ImageWithActions
                           key={index}
                           type={file?.url?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE}
                           src={file?.file}
                           reuploadModalContent={{ description: "Are you sure you want to re-upload the document?" }}
                           handleReUpload={() =>
                              handleAction({ action: item?.action, actionExecuteType: executeActionTypes.ON_ACTION })
                           }
                        />
                     );
                  })}
               </>
            );
         }
         return (
            <ImageWithActions
               type={type}
               src={source}
               reuploadModalContent={{ description: "Are you sure you want to re-upload the document?" }}
               handleReUpload={() =>
                  handleAction({ action: item?.action, actionExecuteType: executeActionTypes.ON_ACTION })
               }
            />
         );
      case componentTypes.COLLAPSE:
         const items = (item?.content || []).map((item, index) => {
            const { title } = item?.description || {};
            return {
               key: index,
               label: title?.text || "",
               children: <FormContainer data={item.form} />,
            };
         });
         return <CustomCollapsibleList items={items} />;
      case componentTypes.ALERT:
         const image = item?.content?.description?.image;
         return (
            <CustomAlert
               type={item?.properties?.type}
               message={item?.content?.description?.title?.text}
               icon={renderIcon({ name: image.key, className: image?.className, style: image?.style })}
            />
         );
      case componentTypes.FORM:
         const appData = applicationData;
         return item?.isMultiple ? (
            getNestedProperty(appData, item?.dataSource)?.map((dataSrcItem, index) => (
               <FormContainer
                  key={index}
                  dataSource={dataSrcItem}
                  data={item}
                  formRef={formRef}
                  fileList={fileList}
                  handleFileList={handleFileList}
                  index={index + 1}
               />
            ))
         ) : (
            <FormContainer
               dataSource={item?.dataSource}
               data={item}
               formRef={formRef}
               fileList={fileList}
               handleFileList={handleFileList}
            />
         );
      case componentTypes.LIST: {
         let items = [];
         if (isArray(item?.content?.items)) {
            items = item?.content?.items;
         } else {
            items = getItems({ content: item?.content, data: applicationData });
         }
         return (
            <div className={item.className}>
               {item?.content?.description ? (
                  <Typography className={item?.content?.description?.title?.className}>
                     {item?.content?.description?.title?.text}
                  </Typography>
               ) : null}
               <List
                  split={false}
                  dataSource={items}
                  renderItem={(item) => (
                     <List.Item>
                        <List.Item.Meta
                           title={<Typography className={item.title.className}>{item.title.text}</Typography>}
                           description={
                              <Typography className={item?.description?.className}>
                                 {item?.description?.text}
                              </Typography>
                           }
                        />
                     </List.Item>
                  )}
               />
            </div>
         );
      }
      case componentTypes.TEXT_BUTTON: {
         const data = item?.name
            ? getNestedProperty(applicationData?.data, item?.name)
            : applicationData?.data?.generic_data;
         return (
            <div className={item.className}>
               <Typography className={item?.content?.label?.className}>
                  {replacePlaceholders(item?.content?.label?.text || "", data)}
               </Typography>
               {item?.content?.action ? (
                  <CustomButton
                     className={item?.content?.action?.className}
                     type={item?.content?.action?.style?.type}
                     variant={item?.content?.action?.style?.variant}
                     color={item?.content?.action?.style?.color}
                     label={item?.content?.action.label?.text}
                     size={item?.content?.action?.style?.size}
                     icon={
                        item?.content?.action?.icon?.key
                           ? renderIcon({
                                name: item?.content?.action?.icon?.key,
                                className: item?.content?.action?.icon?.className,
                                style: item?.content?.action?.icon?.style,
                             })
                           : ""
                     }
                     iconPosition={item?.content?.action?.icon?.position}
                     handleClick={() =>
                        handleAction({ action: item?.content?.action, actionExecuteType: executeActionTypes.ON_ACTION })
                     }
                  />
               ) : null}
            </div>
         );
      }
      case componentTypes.FORM_LIST: {
         return <FormContainer data={item?.content} formRef={formRef} />;
      }
      case componentTypes.TEXT: {
         const data = applicationData?.data?.generic_data;
         return (
            <div className={item.className}>
               <Typography className={item?.content?.label?.className}>
                  {replacePlaceholders(item?.content?.label?.text, data)}
               </Typography>
            </div>
         );
      }
      case componentTypes.DOCUMENT_CARD: {
         return (
            <div className={item?.content?.className}>
               <div className={"flex items-center"}>
                  <CustomImage src={item?.content?.image?.src} className={item?.content?.image?.className} />
                  <Typography className={item?.content?.label?.className}>{item?.content?.label?.text}</Typography>
               </div>
               <div>
                  {item?.content?.action ? (
                     <CustomButton
                        className={item?.content?.action?.className}
                        type={item?.content?.action?.style?.type}
                        variant={item?.content?.action?.style?.variant}
                        color={item?.content?.action?.style?.color}
                        label={item?.content?.action.label?.text}
                        size={item?.content?.action?.style?.size}
                        icon={
                           item?.content?.action?.icon?.key
                              ? renderIcon({
                                   name: item?.content?.action?.icon?.key,
                                   className: item?.content?.action?.icon?.className,
                                   style: item?.content?.action?.icon?.style,
                                })
                              : ""
                        }
                        iconPosition={item?.content?.action?.icon?.position}
                        handleClick={() =>
                           downloadFile(item?.content?.action?.file?.url, item?.content?.action?.file?.fileName)
                        }
                     />
                  ) : null}
               </div>
            </div>
         );
      }
      case componentTypes.IMAGE:
         return <CustomImage src={item?.content?.src} className={item?.content?.className} />;

      case componentTypes.MODAL:
         return (
            <CustomModal
               visible={state[item?.key]}
               handleClose={() =>
                  handleAction({ action: item?.content?.action, actionExecuteType: executeActionTypes.ON_ACTION })
               }
               content={
                  <>
                     {item?.content?.components ? (
                        <Components
                           data={item?.content?.components || {}}
                           fileList={fileList}
                           handleFileList={handleFileList}
                        />
                     ) : null}
                     {item?.content?.form ? (
                        <FormContainer
                           index={state.index}
                           fileList={fileList}
                           dataSource={state.record}
                           handleFileList={handleFileList}
                           data={item?.content?.form || {}}
                        />
                     ) : null}
                  </>
               }
               closable={item?.content?.closable}
               maskClosable={item?.content?.maskClosable}
               className={item?.content?.className}
               destroyOnClose={true}
            />
         );

      case componentTypes.DOCUMENT_STATUS_CARD: {
         const statusData = getNestedProperty(applicationData?.data, item.name) || [];
         return statusData.map((cardItem, cardIndex) => {
            return (
               <div key={cardIndex} className={`rounded-md border ${item?.className}`}>
                  <div className={item.content?.className}>
                     <div>
                        {item.content?.items?.map((item, index) => (
                           <div className={item.className} key={index}>
                              {replacePlaceholders(item?.text || "", { ...cardItem, index: String(cardIndex + 1) })}{" "}
                              {cardItem[item.key] || ""}
                           </div>
                        ))}
                     </div>

                     <div>
                        {item.content?.actions?.map((item, index) => {
                           const disabled = !isEmpty(item.disabled)
                              ? evaluateConditions(
                                   item.disabled.conditions,
                                   cardItem,
                                   item.disabled.logicalOperator,
                                   fileList
                                )
                              : false;
                           return (
                              <CustomButton
                                 key={index}
                                 disabled={disabled}
                                 type={item?.style?.type}
                                 className={item.className}
                                 color={item?.style?.color}
                                 variant={item?.style?.variant}
                                 handleClick={() =>
                                    handleAction({
                                       action: item,
                                       record: cardItem,
                                       recordIndex: cardIndex,
                                       actionExecuteType: item.actionExecuteType || executeActionTypes.ON_ACTION,
                                    })
                                 }
                                 label={renderIcon({
                                    name: item?.icon?.key,
                                    style: item?.icon?.style,
                                    className: item?.icon?.className,
                                 })}
                              />
                           );
                        })}
                     </div>
                  </div>

                  {item.footer ? (
                     <div className={`border-t ${item.footer?.className}`}>
                        <div>
                           {item.footer?.items?.map((item, index) => (
                              <div
                                 className={
                                    isObject(item?.className)
                                       ? getActionType(item?.className, cardItem)
                                       : item?.className
                                 }
                                 key={index}
                              >
                                 {replacePlaceholders(item?.text || "", { ...cardItem, index })}{" "}
                                 {cardItem[item.key] || ""}
                              </div>
                           ))}
                        </div>

                        <div>
                           {item.footer?.actions?.map((item, index) => {
                              const disabled = !isEmpty(item.disabled)
                                 ? evaluateConditions(
                                      item.disabled.conditions,
                                      cardItem,
                                      item.disabled.logicalOperator,
                                      fileList
                                   )
                                 : false;
                              return (
                                 <CustomButton
                                    key={index}
                                    disabled={disabled}
                                    className={item?.className}
                                    type={item?.style?.type}
                                    variant={item?.style?.variant}
                                    color={item?.style?.color}
                                    label={item.label?.text}
                                    size={item?.style?.size}
                                    icon={
                                       item?.icon?.key
                                          ? renderIcon({
                                               name: item?.icon?.key,
                                               className: item?.icon?.className,
                                               style: item?.icon?.style,
                                            })
                                          : ""
                                    }
                                    iconPosition={item?.icon?.position}
                                    handleClick={() =>
                                       handleAction({
                                          action: item,
                                          record: cardItem,
                                          recordIndex: cardIndex,
                                          actionExecuteType: item.actionExecuteType || executeActionTypes.ON_ACTION,
                                       })
                                    }
                                 />
                              );
                           })}
                        </div>
                     </div>
                  ) : null}
               </div>
            );
         });
      }
      default:
         return null;
   }
};

export const itemsActionMap = {
   ONBOARDING_JOURNEY_ITEMS: "ONBOARDING_JOURNEY_ITEMS",
   THANK_YOU_ITEMS: "THANK_YOU_ITEMS",
};

export const getItems = ({ content, data }) => {
   let items = [];
   switch (content.items) {
      case itemsActionMap.ONBOARDING_JOURNEY_ITEMS:
         items = data?.metadata?.node_metadata.map((item) => ({
            title: { text: `${item.order}. ${item.title}`, className: content.itemClassName.title },
         }));
         break;
      case itemsActionMap.THANK_YOU_ITEMS:
         const steps = [
            {
               text: "Our team will review the submitted details.",
            },
            {
               text: "If the review is successful, you will receive an email with the contract document sent to your registered email ID.",
            },
            {
               text: "Please sign the contract to complete the application.",
            },
            {
               text: "If you have added multiple authorized signatories during onboarding, ensure that each signatory signs the contract separately from their registered email ID.",
            },
         ];
         items = steps.map((item, index) => ({
            title: {
               text: (
                  <Typography.Text>
                     <span
                        dangerouslySetInnerHTML={{
                           __html: `${index + 1}. ${item.text}`,
                        }}
                     />
                  </Typography.Text>
               ),
               className: content?.itemClassName?.title,
            },
         }));
         break;
   }
   return items;
};

export const getAPIActionType = (apiType, formFields) => {
   return isObject(apiType) && formFields ? getActionType(apiType, formFields) : apiType;
};

export const getPreservedFields = (formFields, fields) => {
   const preservedFields = fields?.filter((field) => field.preserve).map((field) => field.name) || [];
   return Object.keys(formFields || {})
      .filter((key) => (preservedFields || []).includes(key))
      .reduce((acc, key) => {
         acc[key] = formFields[key];
         return acc;
      }, {});
};

export const getNonPreservedFields = (fields) => {
   const nonPreservedFields = fields?.filter((field) => !field.preserve).map((field) => field.name) || [];
   return nonPreservedFields.reduce((acc, key) => {
      acc[key] = null;
      return acc;
   }, {});
};

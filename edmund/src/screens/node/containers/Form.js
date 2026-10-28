import { useCallback, useEffect, useState } from "react";
import { FormComponent, FormListComponent } from "../components";
import { cloneDeep, isEmpty, isEqual, isObject } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import nodeSelector from "../selector";
import { evaluateConditions, getActionType } from "utils/helper";
import {
   actionsToShowOTPModalOnAPISuccess,
   executeActionType,
   formFieldTypes,
   formTypes,
   requestActionType,
} from "shared/constants";
import { getAPIActionType, getNonPreservedFields, getPreservedFields } from "../helper";
import { executeActionTypes } from "../../../shared/constants";

const Form = ({ data, formData, formRef, fileList, handleFileList, dataSource, index }) => {
   const dispatch = useDispatch();
   const [state, setState] = useState({});
   const { applicationId } = useSelector(sharedSelector);
   const [formFields, setFormFields] = useState({});
   const { applicationById, downloadedDocuments, actionExecuted } = useSelector(nodeSelector);
   const [downloadedDocData, setDownloadedDocData] = useState(downloadedDocuments.data);

   useEffect(() => {
      if (!isEmpty(applicationById.data)) {
         const preserveFields = getPreservedFields(formFields, data?.fields);
         let values = {};
         if (!isEmpty(dataSource)) values = cloneDeep(dataSource);
         else
            values = cloneDeep({
               ...(applicationById.data?.data?.generic_data || {}),
               ...(applicationById.data?.data?.additional_data || {}),
            });
         const autoFillFields = data?.fields
            ?.filter((item) => item.autofillSource)
            .reduce((acc, item) => {
               acc[item.name] = values[item.autofillSource];
               return acc;
            }, {});
         const nonPreservedFields = getNonPreservedFields(data?.fields, values);
         setFormFields(cloneDeep({ ...nonPreservedFields, ...(autoFillFields || {}), ...values, ...preserveFields }));
      }
   }, [data, applicationById.data]);

   useEffect(() => {
      if (!isEqual(downloadedDocuments.data, downloadedDocData)) {
         setDownloadedDocData(cloneDeep({ ...downloadedDocData, ...downloadedDocuments.data }));
      }
   }, [downloadedDocuments.data]);

   useEffect(() => {
      if (!isEmpty(actionExecuted?.data) && actionExecuted.isSuccess) {
         handleFileList();
         setState({});
         setDownloadedDocData(downloadedDocuments?.data || {});
         if (data?.action?.onAPISuccess) {
            const { key, value } = data.action.onAPISuccess;
            if (
               actionsToShowOTPModalOnAPISuccess[actionExecuted.data.executedActionType] &&
               !actionExecuted?.data?.data?.error_data?.length
            ) {
               handleStateChange(key, value);
            } else {
               handleStateChange(key, false);
            }
         }
      }
   }, [actionExecuted?.data, downloadedDocuments?.data]);

   useEffect(() => {
      if (isEmpty(actionExecuted?.data) && !actionExecuted.loading && actionExecuted.error) {
         if (data?.action?.onAPIError) {
            const { key, value } = data.action.onAPIError;
            handleStateChange(key, value);
         }
      }
   }, [actionExecuted?.data]);

   const handleChange = (key, value) => {
      if (key === "removeFile") {
         handleFileList(value, null);
         const docs = cloneDeep(downloadedDocData);
         docs[`${value}_urls`] = {};
         setDownloadedDocData(docs);
         formFields[value] = null;
         setFormFields(cloneDeep(formFields));
         return;
      }
      formFields[key] = value;

      // Evaluate impacted fields based on the conditions
      const visibleField = data?.fields?.find(
         (item) =>
            item.name === key &&
            evaluateConditions(
               item?.visibilityCondition?.conditions,
               formFields,
               item?.visibilityCondition?.logicalOperator
            )
      );
      visibleField?.impactedFields?.forEach((item) => {
         formFields[item?.field] = evaluateConditions(item?.conditions, formFields, item?.logicalOperator) || "";
      });
      setFormFields(cloneDeep(formFields));
   };

   const handleAction = ({ field, data }) => {
      const { action, multiple } = field;
      dispatch({
         type: action?.api?.type,
         body: {
            applicationId,
            fileKey: action?.api?.fileKey,
            requestType: action?.api?.requestType,
            file: multiple ? data.fileList : data.file,
            executeActionType: action?.api?.executeActionType,
         },
      });
   };

   const handleSubmit = useCallback(
      ({ action, fields = [], fieldValues }) => {
         const { data } = processData({ action, fields, fieldValues });
         const requestType = isObject(action.api.requestType)
            ? getActionType(action.api.requestType, formFields)
            : action.api.requestType;
         if (action.onChange) {
            const { key, value } = action.onChange;
            handleStateChange(key, value);
         }
         if (action.actionExecuteType) {
            switch (action.actionExecuteType) {
               case executeActionTypes.ON_ADD_ACTION:
                  handleAdd({ action, fields });
                  break;
               case executeActionTypes.ON_EDIT_ACTION:
                  handleEdit({ action, fields });
                  break;
               default:
                  break;
            }
         } else {
            switch (requestType) {
               case requestActionType.DOCUMENT_UPLOAD:
               case requestActionType.DOCUMENT_UPLOAD_AND_EXECUTE_ACTION:
                  if (Object.values(fileList)?.length) {
                     const files = Object.values(fileList)?.[0];
                     const field =
                        fields
                           ?.filter((item) => {
                              return !isEmpty(item.visibilityCondition)
                                 ? evaluateConditions(
                                      item.visibilityCondition.conditions,
                                      formFields,
                                      item.visibilityCondition.logicalOperator
                                   )
                                 : true;
                           })
                           ?.find((item) =>
                              [formFieldTypes.DRAG_AND_DROP, formFieldTypes.UPLOAD].includes(item.type)
                           ) || {};
                     dispatch({
                        type: action?.api?.type,
                        body: {
                           data: data,
                           applicationId,
                           file:
                              field.multiple || isObject(field.multiple)
                                 ? files?.map((item) => {
                                      return item?.[0]?.originFileObj;
                                   })
                                 : files?.[0]?.originFileObj,
                           requestType: getAPIActionType(action?.api?.requestType, formFields),
                           fileKey: getAPIActionType(action?.api?.fileKey || field.name, formFields),
                           executeActionType: getAPIActionType(action?.api?.executeActionType, formFields),
                        },
                     });
                     handleFileList();
                     setDownloadedDocData({});
                  } else {
                     dispatch({
                        type: requestActionType.EXECUTE_ACTION,
                        body: {
                           data: data,
                           applicationId,
                           requestType: requestActionType.EXECUTE_ACTION,
                           fileKey: getAPIActionType(action?.api?.fileKey, formFields),
                           executeActionType: executeActionType.MOVE_TO_NEXT_NODE_ACTION,
                        },
                     });
                  }
                  break;
               default:
                  dispatch({
                     type: action?.api?.type,
                     body: {
                        data: data,
                        applicationId,
                        fileKey: isObject(action?.api?.fileKey)
                           ? getActionType(action?.api?.fileKey, formFields)
                           : action?.api?.fileKey,
                        requestType: isObject(action.api.requestType)
                           ? getActionType(action.api.requestType, formFields)
                           : action.api.requestType,
                        executeActionType: isObject(action.api.executeActionType)
                           ? getActionType(action.api.executeActionType, formFields)
                           : action.api.executeActionType,
                     },
                  });
                  break;
            }
         }
      },
      [fileList, applicationId, formFields, applicationById]
   );

   const handleAdd = useCallback(
      ({ action, fields }) => {
         const data = cloneDeep(applicationById?.data?.data || {});
         const formValues = fields
            ?.filter((item) => !item.ignoreField)
            ?.filter((item) => {
               return !isEmpty(item.visibilityCondition)
                  ? evaluateConditions(
                       item.visibilityCondition.conditions,
                       formFields,
                       item.visibilityCondition.logicalOperator
                    )
                  : true;
            })
            ?.reduce((obj, item) => {
               obj[item.name] = formFields?.[item.name];
               return obj;
            }, {});
         data.additional_data[action?.api?.parentKey] = [{ ...formValues }];
         dispatch({
            type: action?.api?.type,
            body: {
               data: data,
               applicationId,
               requestType: getAPIActionType(action?.api?.requestType),
               executeActionType: getAPIActionType(action?.api?.executeActionType),
            },
         });
      },
      [dispatch, formFields, applicationById]
   );

   const handleEdit = useCallback(
      ({ action, fields }) => {
         const data = cloneDeep(applicationById?.data?.data || {});
         const formValues = fields
            ?.filter((item) => !item.ignoreField)
            ?.filter((item) => {
               return !isEmpty(item.visibilityCondition)
                  ? evaluateConditions(
                       item.visibilityCondition.conditions,
                       formFields,
                       item.visibilityCondition.logicalOperator
                    )
                  : true;
            })
            ?.reduce((obj, item) => {
               obj[item.name] = formFields?.[item.name];
               return obj;
            }, {});
         data.additional_data[action?.api?.parentKey] = [{ ...(dataSource || {}), ...formValues }];
         dispatch({
            type: action?.api?.type,
            body: {
               data: data,
               applicationId,
               requestType: getAPIActionType(action?.api?.requestType),
               executeActionType: getAPIActionType(action?.api?.executeActionType),
            },
         });
      },
      [index, dispatch, dataSource, formFields, applicationById]
   );

   const processData = useCallback(
      ({ action, fields, fieldValues }) => {
         let data = cloneDeep(applicationById?.data?.data || {});
         const formValues = fieldValues
            ? fieldValues
            : fields
                 ?.filter((item) => !item.ignoreField)
                 ?.filter((item) => {
                    return !isEmpty(item.visibilityCondition)
                       ? evaluateConditions(
                            item.visibilityCondition.conditions,
                            formFields,
                            item.visibilityCondition.logicalOperator
                         )
                       : true;
                 })
                 ?.reduce((obj, item) => {
                    obj[item.name] = formFields?.[item.name];
                    return obj;
                 }, {});
         if (!isEmpty(fieldValues) || action?.api?.parentKey) {
            if (action?.api?.parentKey && dataSource?.id) {
               data.additional_data[action.api.parentKey] = [{ id: dataSource?.id, ...formValues }];
            } else {
               data.additional_data = {
                  ...data.additional_data,
                  ...fieldValues,
               };
            }
         } else {
            data.generic_data = {
               ...data.generic_data,
               ...formValues,
            };
         }
         return { data };
      },
      [formFields, applicationById]
   );

   const handleStateChange = useCallback(
      (key, value) => {
         state[key] = value;
         setState(cloneDeep(state));
      },
      [state]
   );

   if (data.type === formTypes.LIST) {
      return (
         <FormListComponent
            data={data}
            formRef={formRef}
            formData={formData}
            fileList={fileList}
            formFields={formFields}
            handleAction={handleAction}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleFileList={handleFileList}
            downloadedDocuments={downloadedDocuments.data}
         />
      );
   }

   return (
      <FormComponent
         data={data}
         state={state}
         index={index}
         formRef={formRef}
         formData={formData}
         fileList={fileList}
         dataSource={dataSource}
         formFields={formFields}
         handleAction={handleAction}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
         handleFileList={handleFileList}
         handleStateChange={handleStateChange}
         downloadedDocuments={downloadedDocData}
      />
   );
};

export default Form;

import { useDispatch, useSelector } from "react-redux";
import { ComponentsComponent } from "../components";
import nodeSelector from "../selector";
import sharedSelector from "shared/selector";
import { useCallback, useEffect, useRef, useState } from "react";
import { isEmpty, cloneDeep, isObject } from "lodash";
import { evaluateConditions } from "utils/helper";
import { executeActionType, executeActionTypes, formFieldTypes, requestActionType } from "shared/constants";
import { getAPIActionType } from "../helper";

const Components = ({ data, fileList, dataSource, handleFileList }) => {
   const dispatch = useDispatch();
   const { applicationId } = useSelector(sharedSelector);
   const { applicationById, downloadedDocuments, actionExecuted } = useSelector(nodeSelector);
   const [state, setState] = useState({});
   const formRef = useRef();

   useEffect(() => {
      if (!isEmpty(actionExecuted?.data) && actionExecuted.isSuccess) {
         handleFileList();
         setState({});
      }
   }, [actionExecuted?.data]);

   const getFormFields = () => {
      for (const obj of data?.contents) {
         if (obj.type === "FORM" && obj?.content?.fields) {
            return obj.content.fields;
         }
      }
      return [];
   };

   const handleAction = ({ action, record, recordIndex, actionExecuteType }) => {
      if (action.onChange) {
         const { parent, key, value } = action.onChange;
         setState((prevState) => {
            if (parent) {
               return {
                  ...prevState,
                  [parent]: {
                     ...prevState[parent],
                     [key]: value,
                     ...(record ? { record: record, index: recordIndex } : {}),
                  },
               };
            } else {
               return {
                  ...prevState,
                  [key]: value,
                  ...(record ? { record: record, index: recordIndex } : {}),
               };
            }
         });
         return;
      }
      switch (actionExecuteType) {
         case executeActionTypes.ON_SUBMIT:
            if (formRef.current) {
               formRef.current
                  .validateFields()
                  .then(() => {
                     const formFields = formRef.current.getFieldValue();
                     handleSubmit({ action: action?.action, formFields });
                  })
                  .catch((e) => {
                     console.log("Validation failed!:", e);
                  });
            }
            break;
         case executeActionTypes.ON_SELECTION_ACTION:
            handleSelection({ action, record });
            break;
         case executeActionTypes.ON_DELETE_ACTION:
            handleDelete({ action, record, recordIndex });
            break;

         default:
            dispatch({
               type: action?.api?.type,
               body: {
                  applicationId,
                  fileKey: getAPIActionType(action?.api?.fileKey),
                  requestType: getAPIActionType(action?.api?.requestType),
                  executeActionType: getAPIActionType(action?.api?.executeActionType),
               },
            });
            break;
      }
   };

   const handleSelection = useCallback(
      ({ action, record }) => {
         const data = cloneDeep(applicationById?.data?.data || {});
         dispatch({
            type: action?.api?.type,
            body: {
               applicationId,
               data: {
                  ...data,
                  generic_data: {
                     ...data.generic_data,
                     [action?.api?.dataKey]: record.id,
                  },
               },
               requestType: getAPIActionType(action?.api?.requestType),
               executeActionType: getAPIActionType(action?.api?.executeActionType),
            },
         });
      },
      [dispatch, applicationId, applicationById]
   );

   const handleSubmit = useCallback(
      ({ action, formFields }) => {
         const fields = getFormFields();
         const { data } = processData(fields);
         const requestType = getAPIActionType(action?.api?.requestType, formFields);
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
                        ?.find((item) => [formFieldTypes.DRAG_AND_DROP, formFieldTypes.UPLOAD].includes(item.type)) ||
                     {};
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
                     fileKey: getAPIActionType(action?.api?.fileKey, formFields),
                     requestType: getAPIActionType(action?.api?.requestType, formFields),
                     executeActionType: getAPIActionType(action?.api?.executeActionType, formFields),
                  },
               });
               break;
         }
      },
      [fileList, applicationId, applicationById, data]
   );

   const handleDelete = useCallback(
      ({ action, record, recordIndex }) => {
         const data = cloneDeep(applicationById?.data?.data || {});
         data.additional_data[action?.api?.parentKey] = [
            {
               ...record,
               is_deleted: true,
            },
         ];
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
      [dispatch, applicationId, applicationById]
   );

   const processData = useCallback(
      (fields) => {
         const formFields = formRef.current.getFieldValue();
         let data = cloneDeep(applicationById?.data?.data || {});
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

         data.generic_data = {
            ...data.generic_data,
            ...formValues,
         };
         return { data };
      },
      [applicationById]
   );

   return (
      <ComponentsComponent
         data={data}
         state={state}
         formRef={formRef}
         fileList={fileList}
         dataSource={dataSource}
         handleAction={handleAction}
         handleFileList={handleFileList}
         applicationData={applicationById.data}
         downloadedDocuments={downloadedDocuments.data}
      />
   );
};

export default Components;

import { isEmpty, set } from "lodash";
import { useMemo } from "react";
import { useFormContext } from "screens/node_new/formManagerContext";
import { requestActionType } from "shared/constants";
import { store } from "store/configureStore";
import { actionMapper } from "utils/constants";
import { getEvaluatedValue } from "utils/helper";
import useFileStore from "./useFileStore";
import { useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import { SET_MODAL_VISIBILITY } from "shared/actionTypes";
import { UPLOAD_DOCUMENT } from "screens/node_new/actionTypes";

const useActionHandler = ({ action, data, callback }) => {
   const { getFormRef } = useFormContext();
   const { files, getFile } = useFileStore();
   const { applicationId } = useSelector(sharedSelector);

   const actionHandler = useMemo(() => {
      const eventsToBeCalled = {};
      if (isEmpty(action)) return eventsToBeCalled;

      Object.entries(action)?.forEach(([event, currentAction]) => {
         const eventHandlerName = actionMapper[event];
         eventsToBeCalled[eventHandlerName] = async (event) => {
            const configToAction = async (action, data) => {
               const modalStateChangeData = {};
               const stateChangeData = (action?.setState || []).reduce((acc, { key, value, stateChangeType }) => {
                  if (stateChangeType === requestActionType.MODAL_VISIBILITY) {
                     modalStateChangeData[key] = value;
                     return acc;
                  }
                  acc[key] = value;
                  return acc;
               }, {});

               const api = action?.api;
               const formRef = getFormRef(action?.api?.formId);

               const fileKey =
                  typeof action?.api?.fileKey === "string"
                     ? action?.api?.fileKey
                     : action?.api?.fileKey?.onValidCondition;
               const file = getFile(fileKey) || null;
               let filteredFormValues = {};
               if (formRef) {
                  const formValues = formRef?.getFieldsValue();
                  const nestedFormValues = Object.entries(formValues || {}).reduce((acc, [key, value]) => {
                     set(acc, key, value);
                     return acc;
                  }, {});
                  filteredFormValues = Object.fromEntries(
                     Object.entries(nestedFormValues).filter(([key]) => !key.match(/_(file|\d+)$/))
                  );
               }
               const apiData = api
                  ? {
                       applicationId,
                       fileKey: getEvaluatedValue(api.fileKey, data, file),
                       file,
                       data:
                          action.payloadKey === "NULL"
                             ? filteredFormValues
                             : set({}, action.payloadKey || "generic_data", filteredFormValues),
                       params: (api.params || []).reduce((acc, param) => {
                          acc[param.key] = getEvaluatedValue(param, data);
                          return acc;
                       }, {}),
                       requestType: getEvaluatedValue(api.requestType, data, file),
                       executeActionType: getEvaluatedValue(api.executeActionType, data, file),
                       onSuccess: configToAction(api.onSuccess),
                       onError: configToAction(api.onError),
                    }
                  : {};
               const stateChangeAction = isEmpty(stateChangeData)
                  ? null
                  : { type: requestActionType.STATE_CHANGE, data: stateChangeData };
               const modalStateChangeAction = isEmpty(modalStateChangeData)
                  ? null
                  : { type: SET_MODAL_VISIBILITY, data: modalStateChangeData };
               const apiDispatchAction = isEmpty(apiData) ? null : { type: api?.type, body: apiData };

               return { stateChangeAction, apiDispatchAction, modalStateChangeAction };
            };

            let stateChangeAction = null;
            let apiDispatchAction = null;
            let modalStateChangeAction = null;

            if (currentAction?.api?.formId && currentAction?.api?.type !== UPLOAD_DOCUMENT) {
               const formRef = getFormRef(currentAction?.api?.formId);
               try {
                  await formRef.validateFields(); // Validate fields
                  const actions = await configToAction(currentAction, data); // Execute configToAction after validation
                  stateChangeAction = actions.stateChangeAction;
                  apiDispatchAction = actions.apiDispatchAction;
                  modalStateChangeAction = actions.modalStateChangeAction;
               } catch (error) {
                  console.warn("Form validation failed", error);
                  return; // Stop execution if validation fails
               }
            } else {
               const actions = await configToAction(currentAction, data); // Execute configToAction directly
               stateChangeAction = actions.stateChangeAction;
               apiDispatchAction = actions.apiDispatchAction;
               modalStateChangeAction = actions.modalStateChangeAction;
            }

            // Dispatch actions
            if (stateChangeAction) store.dispatch(stateChangeAction);
            if (modalStateChangeAction) store.dispatch(modalStateChangeAction);
            if (apiDispatchAction) store.dispatch(apiDispatchAction);

            // Execute callback if provided
            if (callback) callback();
         };
      });

      return eventsToBeCalled;
   }, [action, data, callback, getFormRef, getFile, applicationId, files]);

   return actionHandler;
};

export default useActionHandler;

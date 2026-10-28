import { CREATE_APPLICATION, FETCH_WORKFLOWS_BY_ORG_ID, CLEAR_CREATE_APPLICATION } from "./actionTypes";

export const fetchWorkflowsByOrgId = (body) => ({ type: FETCH_WORKFLOWS_BY_ORG_ID, body });
export const createApplication = (body) => ({ type: CREATE_APPLICATION, body });
export const clearCreateApplication = () => ({
   type: CLEAR_CREATE_APPLICATION,
});

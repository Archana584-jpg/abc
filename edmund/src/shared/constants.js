export const uploadStatus = {
   UPLOADING: "uploading",
   DONE: "done",
   ERROR: "error",
};

export const formFieldTypes = {
   DRAG_AND_DROP: "DRAG_AND_DROP",
   RADIO_GROUP: "RADIO_GROUP",
   UPLOAD: "UPLOAD",
   SELECT: "SELECT",
   INPUT: "INPUT",
   DATE: "DATE",
   TEXTAREA: "TEXTAREA",
   CHECKBOX: "CHECKBOX",
   PHONE_NUMBER: "PHONE_NUMBER",
   FILE: "FILE",
   TEXT: "TEXT",
   OTP_MODAL: "OTP_MODAL",
   SELECTABLE_LIST: "SELECTABLE_LIST",
   BUTTON: "BUTTON",
   OTP_INPUT: "OTP_INPUT",
};

export const contentType = {
   FORM: "form",
   GROUP: "group",
   COMPONENTS: "components",
};

export const componentTypes = {
   IMAGE_VIEWER: "IMAGE_VIEWER",
   COLLAPSIBLE_LIST: "COLLAPSIBLE_LIST",
   ALERT: "ALERT",
   FORM: "FORM",
   LIST: "LIST",
   TEXT_BUTTON: "TEXT_BUTTON",
   FORM_LIST: "FORM_LIST",
   TEXT: "TEXT",
   DOCUMENT_CARD: "DOCUMENT_CARD",
   IMAGE: "IMAGE",
   BUTTON: "BUTTON",
   MODAL: "MODAL",
   DOCUMENT_STATUS_CARD: "DOCUMENT_STATUS_CARD",
   STEPPER: "STEPPER",
   ACTIONABLE_LABEL: "ACTIONABLE_LABEL",
   FORM_ITEM: "FORM_ITEM",
   DIVIDER: "DIVIDER",
   TABLE: "TABLE",
   OTP_MODAL: "OTP_MODAL",
   READ_ONLY_FORM_ITEM: "READ_ONLY_FORM_ITEM",
};

export const formTypes = {
   LIST: "LIST",
};

export const fileTypes = {
   IMAGE: "IMAGE",
   PDF: "PDF",
   APPLICATION_PDF: "application/pdf",
};

export const executeActionTypes = {
   ON_SUBMIT: "onSubmit",
   ON_ACTION: "onAction",
   ON_ADD_ACTION: "onAddAction",
   ON_EDIT_ACTION: "onEditAction",
   ON_DELETE_ACTION: "onDeleteAction",
   ON_SELECTION_ACTION: "onSelectionAction",
};

export const fileTypeExtension = {
   "application/pdf": "pdf",
   "image/jpeg": "jpg",
   "image/png": "png",
   "image/gif": "gif",
   "text/plain": "txt",
   "application/zip": "zip",
   "application/msword": "doc",
   "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
   "application/vnd.ms-excel": "xls",
   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
   "application/vnd.ms-powerpoint": "ppt",
   "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
};

export const requestActionType = {
   EXECUTE_ACTION: "EXECUTE_ACTION",
   DOCUMENT_UPLOAD: "DOCUMENT_UPLOAD",
   DOCUMENT_UPLOAD_AND_EXECUTE_ACTION: "DOCUMENT_UPLOAD_AND_EXECUTE_ACTION",
   STATE_CHANGE: "STATE_CHANGE",
   MODAL_VISIBILITY: "MODAL_VISIBILITY",
};

export const nodesKey = {
   APPLICATION_PENDING: "zaakpay_application_pending",
   APPLICATION_DISCARDED: "zaakpay_application_discarded",
   APPLICATION_NEEDS_REVIEW: "zaakpay_application_needs_review",
   APPLICATION_MANUALLY_APPROVED: "zaakpay_application_manually_approved",
   APPLICATION_MANUALLY_DECLINED: "zaakpay_application_manually_declined",
};

export const executeActionType = {
   MOVE_TO_NEXT_NODE_ACTION: "MOVE_TO_NEXT_NODE_ACTION",
   IMMEDIATE_BACK_NODE_MOVEMENT_ACTION: "IMMEDIATE_BACK_NODE_MOVEMENT_ACTION",
};

export const actionsToShowOTPModalOnAPISuccess = {
   INIT_AADHAAR_VERIFICATION_ACTION: "INIT_AADHAAR_VERIFICATION_ACTION",
   INIT_SIGNATORY_AADHAAR_VERIFICATION_ACTION: "INIT_SIGNATORY_AADHAAR_VERIFICATION_ACTION",
};

export const oldVersionWorkflowId = [1, 2, 3, 4, 5];
export const uploadComponentModes = {
   DRAG_AND_DROP: "DRAG_AND_DROP",
   UPLOAD: "UPLOAD",
};

export const cellTypes = {
   DATE: "DATE",
   SR_NUMBER: "SR_NUMBER",
   STATUS: "STATUS",
};

const mimeTypes = {
   png: "image/png",
   jpg: "image/jpeg",
   jpeg: "image/jpeg",
   gif: "image/gif",
   pdf: "application/pdf",
   json: "application/json",
};

export const getMimeTypeFromExtension = (filename) => {
   const ext = filename.split(".").pop().toLowerCase();
   return mimeTypes[ext] || "application/octet-stream";
};

export const applicationStatus = {
   NOT_STARTED: "Not Started",
   IN_PROGRESS: "In Progress",
   AUTO_APPROVED: "Auto Approved",
   AUTO_DECLINED: "Auto Declined",
   NEEDS_REVIEW: "Needs Review",
   MANUALLY_APPROVED: "Manually Approved",
   MANUALLY_DECLINED: "Manually Declined",
   RE_OPENED: "Re-Opened",
   EXPIRED: "Expired",
   DISCARDED: "Discarded",
};

export const applicationStatusReverse = Object.fromEntries(
   Object.entries(applicationStatus).map(([key, value]) => [value, key])
);

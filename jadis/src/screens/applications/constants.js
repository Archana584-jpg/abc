import { ExceptionFile, File, FileDone, FileExclamation, FileSync } from "assets/images";
import { CustomImage } from "shared/components";
import { FolderOutlined } from "@ant-design/icons";

export const statusOptions = {
   ALL: "",
   NOT_STARTED: "not-started",
   IN_PROGRESS: "in-progress",
   AUTO_APPROVED: "auto-approved",
   AUTO_DECLINED: "auto-declined",
   NEEDS_REVIEW: "needs-review",
   MANUALLY_APPROVED: "manually-approved",
   MANUALLY_DECLINED: "manually-declined",
   RE_OPENED: "re-opened",
   EXPIRED: "expired",
   DISCARDED: "discarded",
};

export const applicationStatuses = {
   [statusOptions.ALL]: {
      label: "All Applications",
      path: statusOptions.ALL,
      color: "#000000",
      status: "",
      icon: <FolderOutlined style={{ fontSize: "large", fontWeight: "normal", color: "#000" }} />,
      actions: {
         [statusOptions.NOT_STARTED]: "Application Generated",
      },
   },
   [statusOptions.NOT_STARTED]: {
      label: "Not Started",
      path: statusOptions.NOT_STARTED,
      color: "#BFBFBF",
      status: "",
      icon: <CustomImage width={16} src={File}></CustomImage>,
      actions: {
         [statusOptions.IN_PROGRESS]: "Application Started",
         [statusOptions.EXPIRED]: "Application Expired",
      },
   },
   [statusOptions.IN_PROGRESS]: {
      label: "In Progress",
      path: statusOptions.IN_PROGRESS,
      color: "#0076FF",
      status: "",
      icon: <CustomImage width={16} src={File}></CustomImage>,
      actions: {
         [statusOptions.AUTO_APPROVED]: "Application Submitted",
         [statusOptions.AUTO_DECLINED]: "Application Submitted",
         [statusOptions.NEEDS_REVIEW]: "Application Submitted",
         [statusOptions.EXPIRED]: " Application Expired",
         [statusOptions.DISCARDED]: "Application Discarded",
      },
   },
   [statusOptions.AUTO_APPROVED]: {
      label: "Auto Approved",
      path: statusOptions.AUTO_APPROVED,
      color: "#7CB305",
      status: "",
      icon: "",
      actions: {},
   },
   [statusOptions.AUTO_DECLINED]: {
      label: "Auto Declined",
      path: statusOptions.AUTO_DECLINED,
      color: "#FF7A45",
      status: "",
      icon: "",
      actions: {},
   },
   [statusOptions.NEEDS_REVIEW]: {
      label: "Needs Review",
      path: statusOptions.NEEDS_REVIEW,
      color: "#FAAD14",
      status: <CustomImage width={16} src={FileSync}></CustomImage>,
      icon: "",
      actions: {
         [statusOptions.MANUALLY_APPROVED]: "Application Approved",
         [statusOptions.MANUALLY_DECLINED]: "Application Declined",
         [statusOptions.RE_OPENED]: " Application Re-opened",
      },
   },
   [statusOptions.MANUALLY_APPROVED]: {
      label: "Manually Approved",
      path: statusOptions.MANUALLY_APPROVED,
      color: "#19BB4B",
      status: "approve",
      icon: <CustomImage width={16} src={FileDone}></CustomImage>,
      actions: {
         [statusOptions.NEEDS_REVIEW]: "Application Put For Review",
      },
   },
   [statusOptions.MANUALLY_DECLINED]: {
      label: "Manually Declined",
      path: statusOptions.MANUALLY_DECLINED,
      color: "#ED5F74",
      status: "reject",
      icon: <CustomImage width={16} src={FileExclamation}></CustomImage>,
      actions: {
         [statusOptions.NEEDS_REVIEW]: "Application Put For Review",
      },
   },
   [statusOptions.RE_OPENED]: {
      label: "Re-Opened",
      path: statusOptions.RE_OPENED,
      color: "#9747FF",
      status: "reopen",
      icon: <CustomImage width={16} src={ExceptionFile}></CustomImage>,
      actions: {
         [statusOptions.NEEDS_REVIEW]: "Application Re-submitted",
         [statusOptions.DISCARDED]: " Application Discarded",
      },
   },
   [statusOptions.EXPIRED]: {
      label: "Expired",
      path: statusOptions.EXPIRED,
      color: "#141414",
      status: "re-initiate-expired",
      icon: "",
      actions: {},
   },
   [statusOptions.DISCARDED]: {
      label: "Discarded",
      path: statusOptions.DISCARDED,
      color: "#AA6215",
      icon: "",
      status: "",
      actions: {},
   },
};

export const allowedChangeStatusOptions = [
   applicationStatuses[statusOptions.NEEDS_REVIEW].label,
   applicationStatuses[statusOptions.EXPIRED].label,
];

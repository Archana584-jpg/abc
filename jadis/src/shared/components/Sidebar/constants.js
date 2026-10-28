import { ExceptionFile, ExpiredFile, File, FileDone, FileExclamation, FileSync } from "assets/images";
import { CustomImage } from "..";
import { applicationStatuses, statusOptions } from "screens/applications/constants";
import { FolderOutlined, FormOutlined } from "@ant-design/icons";

export const defaultSelectedKeys = [`/applications/${applicationStatuses[statusOptions.ALL].path}`];

export const menuItems = [
   {
      key: `/create-application`,
      label: "Create New Application",
      icon: <FormOutlined style={{ fontSize: "16px", fontWeight: "400", lineHeight: "20px", color: "#000" }} />,
      className: "sidebar-menu-item-title",
   },
   {
      type: "divider",
   },
   {
      key: `/applications/${applicationStatuses[statusOptions.ALL].path}`,
      label: applicationStatuses[statusOptions.ALL].label,
      icon: <FolderOutlined style={{ fontSize: "large", fontWeight: "normal", color: "#000" }} />,
      className: "sidebar-menu-item-title",
   },
   {
      key: `/applications/${applicationStatuses[statusOptions.IN_PROGRESS].path}`,
      label: applicationStatuses[statusOptions.IN_PROGRESS].label,
      icon: <CustomImage width={16} src={File}></CustomImage>,
      className: "sidebar-menu-item",
   },
   {
      key: `/applications/${applicationStatuses[statusOptions.NEEDS_REVIEW].path}`,
      label: applicationStatuses[statusOptions.NEEDS_REVIEW].label,
      icon: <CustomImage width={16} src={FileSync}></CustomImage>,
      className: "sidebar-menu-item",
   },
   {
      key: `/applications/${applicationStatuses[statusOptions.RE_OPENED].path}`,
      label: applicationStatuses[statusOptions.RE_OPENED].label,
      icon: <CustomImage width={16} src={ExceptionFile}></CustomImage>,
      className: "sidebar-menu-item",
   },
   {
      key: `/applications/${applicationStatuses[statusOptions.MANUALLY_APPROVED].path}`,
      label: applicationStatuses[statusOptions.MANUALLY_APPROVED].label,
      icon: <CustomImage width={16} src={FileDone}></CustomImage>,
      className: "sidebar-menu-item",
   },
   {
      key: `/applications/${applicationStatuses[statusOptions.MANUALLY_DECLINED].path}`,
      label: applicationStatuses[statusOptions.MANUALLY_DECLINED].label,
      icon: <CustomImage width={16} src={FileExclamation}></CustomImage>,
      className: "sidebar-menu-item",
   },
   {
      key: `/applications/${applicationStatuses[statusOptions.EXPIRED].path}`,
      label: applicationStatuses[statusOptions.EXPIRED].label,
      icon: <CustomImage width={16} src={ExpiredFile}></CustomImage>,
      className: "sidebar-menu-item",
   },
];

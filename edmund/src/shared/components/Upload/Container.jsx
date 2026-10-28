import React, { useEffect, useRef, useState } from "react";
import { isFilePdf, itemRender } from "./helper";
import { getMimeTypeFromExtension, uploadComponentModes, uploadStatus } from "shared/constants";
import DragAndDrop from "./DragAndDrop";
import FileUpload from "./FileUpload";
import { CustomIcon } from "..";
import { isArray, isEmpty, remove, toArray } from "lodash";
import Preview from "./Preview";
import { isFileSizeValid, isFileTypeValid } from "utils/helper";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Typography, Flex } from "antd";
import useFileStore from "shared/hooks/useFileStore";
import { useDispatch, useSelector } from "react-redux";
import { downloadDocument } from "screens/node_new/actions";
import nodeSelector from "screens/node_new/selector";
import { useFormContext } from "screens/node_new/formManagerContext";

const Container = ({
   name,
   title,
   subtitle,
   validation,
   disabled,
   multiple = false,
   type,
   mode = uploadComponentModes.UPLOAD,
   handleUpload,
   fileKey,
   fileIndex,
   value,
   onChange,
   formId,
}) => {
   const [previewFile, setPreviewFile] = useState("");
   const [errorMsg, setErrorMsg] = useState("");
   const dispatch = useDispatch();
   const [isPreviewVisible, setIsPreviewVisible] = useState(false);
   const [isPdf, setIsPdf] = useState(false);
   const fileInputRef = useRef(null);
   const [file, setFile] = useState(null);
   const { addFile, removeFile, clearAllFilesById } = useFileStore();
   const { documents } = useSelector(nodeSelector);
   const { getFormRef } = useFormContext();

   const resolvedIndex = fileIndex !== undefined ? fileIndex : 0;
   const uniqueFileKey = `${fileKey || name}${fileIndex !== undefined ? `_${fileIndex + 1}` : ""}`;

   useEffect(() => {
      return () => {
         clearAllFilesById(fileKey || name);
         if (resolvedIndex !== undefined) {
            clearAllFilesById(uniqueFileKey);
         }
      };
   }, []);

   const handleChange = (data) => {
      onChange(data);
      addFile(fileKey || name, data);
      if (resolvedIndex !== undefined) {
         addFile(uniqueFileKey, data);
      }
      setFile(data);
      if (handleUpload) {
         handleUpload();
      }
   };

   // When the S3 document is fetched (from value)
   useEffect(() => {
      const fileData = documents?.data?.[uniqueFileKey]?.[0];
      if (!fileData || file) return;

      const blobUrl = fileData.file;
      const fileName = decodeURIComponent(fileData.url.split("/").pop().split("?")[0]);
      const fileType = getMimeTypeFromExtension(fileName);

      const fileLike = {
         uid: uniqueFileKey,
         name: fileName,
         status: "done",
         url: blobUrl,
         originFileObj: null,
         type: fileType,
      };

      setFile([fileLike]);
      addFile(fileKey || name, [fileLike]);
      if (resolvedIndex !== undefined) {
         addFile(uniqueFileKey, [fileLike]);
      }
   }, [documents?.data?.[uniqueFileKey]]);

   // Trigger document download only if not already uploaded
   useEffect(() => {
      if (file && !isEmpty(value)) return;

      const urls = Array.isArray(value)
         ? value
         : typeof value === "string"
         ? value
              .split(",")
              .map((v) => v.trim())
              .filter(Boolean)
         : [];

      const targetURL = urls[resolvedIndex];

      if (targetURL) {
         dispatch(
            downloadDocument({
               fileURL: targetURL,
               isMultiple: true,
               fileKey: uniqueFileKey,
            })
         );
      } else if (!urls.length) {
         setFile(null);
         removeFile(fileKey || name, file);
         if (resolvedIndex !== undefined) {
            removeFile(uniqueFileKey, file);
         }
      }
   }, [value]);

   useEffect(() => {
      return () => {
         if (previewFile?.startsWith("blob:")) {
            URL.revokeObjectURL(previewFile);
         }
      };
   }, [previewFile]);

   const handlePreview = (file) => {
      const isPdfFile = isFilePdf(file);
      setIsPdf(isPdfFile);

      let src = "";

      if (file.originFileObj instanceof Blob) {
         src = URL.createObjectURL(file.originFileObj);
      } else if (file.url) {
         src = file.url;
      } else if (file.thumbUrl) {
         src = file.thumbUrl;
      }

      if (!src) return;

      setPreviewFile(src);
      setIsPreviewVisible(true);
   };

   const handleReUpload = () => {
      handleRemove();
      fileInputRef.current?.click();
   };

   const handleRemove = () => {
      setFile(null);
      const formRef = getFormRef(formId);
      formRef.setFieldValue(name, "");
      removeFile(fileKey || name, file);
      if (resolvedIndex !== undefined) {
         removeFile(uniqueFileKey, file);
      }
   };

   const validateFileList = (fileList) => {
      const isValidSize = isFileSizeValid(validation, fileList);
      const isValidType = isFileTypeValid(validation, fileList);
      !isValidType && setErrorMsg(validation.allowedTypes.message);
      !isValidSize && setErrorMsg(validation.maxAllowedSize.message);
      return fileList[0].status !== uploadStatus.ERROR && isValidSize && isValidType;
   };

   return (
      <>
         {!file || !file.length ? (
            mode === uploadComponentModes.DRAG_AND_DROP ? (
               <DragAndDrop
                  name={name}
                  title={title}
                  subtitle={subtitle}
                  disabled={disabled}
                  accept={validation?.allowedTypes?.types}
                  status={(file || [])[0]?.status}
                  maxCount={1}
                  fileList={file || []}
                  onChange={(data) => {
                     if (validateFileList(data.fileList)) {
                        setErrorMsg("");
                        handleChange(data.fileList);
                     }
                  }}
                  onDrop={(event) => {
                     const files = toArray(event.dataTransfer.files);
                     if (validateFileList(files)) {
                        setErrorMsg("");
                        handleChange(files);
                     }
                  }}
                  onPreview={handlePreview}
                  beforeUpload={() => false}
                  handleRemove={handleRemove}
               />
            ) : (
               <FileUpload
                  name={name}
                  title={title}
                  subtitle={subtitle}
                  disabled={disabled}
                  accept={validation?.allowedTypes?.types}
                  status={(file || [])[0]?.status}
                  fileList={file}
                  onChange={(data) => {
                     if (validateFileList(data.fileList)) {
                        setErrorMsg("");
                        handleChange(data.fileList);
                     } else {
                        handleChange([]);
                     }
                  }}
                  beforeUpload={() => false}
                  handleRemove={handleRemove}
                  multiple={multiple}
               />
            )
         ) : null}

         {isPreviewVisible && previewFile && (
            <Preview
               isPdf={isPdf}
               isPreviewVisible={isPreviewVisible}
               setIsPreviewVisible={setIsPreviewVisible}
               previewFile={previewFile}
            />
         )}

         {isArray(file)
            ? file.map((f) =>
                 itemRender({
                    file: f,
                    handlePreview,
                    handleReUpload,
                    handleRemove,
                 })
              )
            : file?.length &&
              itemRender({
                 file: { name, type, url: file },
                 handlePreview,
                 handleReUpload,
                 handleRemove,
              })}

         {errorMsg && (
            <Flex align="center" gap={6} className="mt-1">
               <CustomIcon component={InfoCircleOutlined} className="text-xs text-calypsoCoral" />
               <Typography className="text-xs text-calypsoCoral">{errorMsg}</Typography>
            </Flex>
         )}
      </>
   );
};

export default Container;

import { LoadingOutlined, PaperClipOutlined, UploadOutlined } from "@ant-design/icons";
import { Upload, Spin, Row, Col, Typography, Flex } from "antd";
import { uploadStatus } from "shared/constants";
import { CustomButton } from "..";
import { isArray } from "lodash";

const { Dragger } = Upload;
const { Text } = Typography;

const DragAndDrop = ({
   name,
   title,
   subtitle,
   status,
   disabled,
   maxCount,
   accept,
   fileList,
   onChange,
   beforeUpload,
   handleRemove,
   onDrop,
}) => {
   return (
      <Dragger
         listType="picture"
         name={name}
         beforeUpload={beforeUpload}
         disabled={disabled}
         onChange={onChange}
         status={status}
         maxCount={maxCount}
         accept={accept}
         fileList={isArray(fileList) ? fileList : []}
         onRemove={handleRemove}
         onDrop={onDrop}
         className={`${!fileList?.length ? "block" : "hidden"} rounded-[4px]`}
      >
         <Row
            className={` ${
               status === uploadStatus.UPLOADING ? "justify-center" : "justify-between"
            }  items-center w-full text-center ant-upload-drag-icon flex `}
            gutter={[0, 8]}
         >
            {status === uploadStatus.UPLOADING ? (
               <Col className="w-10 h-10 rounded-full border-2 border-gray-300 flex justify-center items-center relative bg-white">
                  <Spin indicator={<LoadingOutlined className="text-5xl" spin />} />
               </Col>
            ) : (
               <>
                  <Col>
                     <Flex vertical justify="center" align="flex-start">
                        <Text className={`text-subtitle text-sm ${title?.className}`}>
                           {status === uploadStatus.UPLOADING
                              ? "Uploading file and extracting information"
                              : title?.text}
                        </Text>
                        <Text className={`text-subtitle text-xs ${subtitle?.className}`}>
                           {status === uploadStatus.UPLOADING
                              ? "Please do not close the browser or go back"
                              : subtitle?.text}
                        </Text>
                     </Flex>
                  </Col>
                  <Col>
                     <CustomButton
                        className={`${
                           status === uploadStatus.UPLOADING ? "hidden" : "block"
                        } rounded-[4px] text-sm flex gap-1`}
                        color={"primary"}
                        variant={"default"}
                        label={"Choose File"}
                        icon={<PaperClipOutlined />}
                     />
                  </Col>
               </>
            )}
         </Row>
      </Dragger>
   );
};

export default DragAndDrop;

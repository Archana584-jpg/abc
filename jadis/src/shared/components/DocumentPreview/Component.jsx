import { Row, Col } from "antd";
import { fileTypes } from "./constants";
import { isArray } from "lodash";
import DocumentCard from "./DocumentCard";

const Component = ({ data, handleChange, downloadedDocuments }) => {
   return data.label_value_mappings
      ?.filter((item) => item.key.includes("_urls"))
      ?.map((item, index) => {
         const type = item?.value?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
         return (
            <Row className="w-full" key={index}>
               <Col xs={24}>
                  {isArray(downloadedDocuments?.[`${data.parent_key}.${item.key}`]) ? (
                     downloadedDocuments?.[`${data.parent_key}.${item.key}`]?.map((document, documentIndex) => {
                        const type = document?.url?.includes(".pdf") ? fileTypes.PDF : fileTypes.IMAGE;
                        return (
                           <DocumentCard
                              document={document}
                              type={type}
                              documentInfo={item}
                              index={index}
                              documentIndex={documentIndex}
                              handleClick={handleChange}
                           />
                        );
                     })
                  ) : (
                     <DocumentCard
                        document={downloadedDocuments?.[`${data.parent_key ? `${data.parent_key}.` : ""}${item?.key}`]}
                        type={type}
                        documentInfo={item}
                        index={index}
                        handleClick={handleChange}
                     />
                  )}
               </Col>
            </Row>
         );
      });
};

export default Component;

import moment from "moment";
import { Col, Row, message } from "antd";
import { startCase } from "lodash";

export const titleCase = (s) => s.replace(/^_*(.)|_+(.)/g, (s, c, d) => (c ? c.toUpperCase() : " " + d.toUpperCase()));

export const convertBase64 = (file) => {
   return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
         resolve(fileReader.result.split(",")[1]);
      };
      fileReader.onerror = (error) => {
         reject(error);
      };
   });
};

export const formatDate = (date, format) => {
   if (date) return moment(date).format(format || "YYYY-MM-DD");
   else return "";
};

export const download = (url, fileName) => {
   let link = document.createElement("a");
   if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      link.setAttribute("target", "_blank");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }
};

const handleErrorMessage = (errorKey, errorValue, result) => {
   if (typeof errorValue === "object" && !Array.isArray(errorValue)) {
      Object.entries(errorValue).map(([key, value]) => handleErrorMessage(key, value, result));
   } else if (Array.isArray(errorValue)) {
      errorValue.map((item, index) => handleErrorMessage(index, item, result));
   } else {
      if (errorKey === "message") {
         result.push(errorValue);
      }
   }
   return result;
};

export const errorhandling = (error) => {
   if (error) {
      let errorMessagesList = handleErrorMessage("", error, []);
      if (errorMessagesList.length === 1) {
         message.error(errorMessagesList[0]);
      } else if (errorMessagesList.length > 1) {
         message.error({
            content: (
               <ul style={{ padding: "0rem 0rem 0rem 0.5rem", textAlign: "left" }}>
                  {errorMessagesList.map((listItem, listIndex) => (
                     <li key={listIndex}>{listItem}</li>
                  ))}
               </ul>
            ),
         });
      } else {
         message.error("An unexpected error occurred");
      }
   } else {
      message.error("An unexpected error occurred");
   }
};

export const successhandling = ({ message: successMessage }) => {
   if (successMessage) {
      message.success(successMessage);
   }
};

export const dynamicRenderingItems = (key, value) => {
   if (typeof value === "object" && !Array.isArray(value)) {
      return (
         <div key={key} className="customCardContent">
            <Row type="flex" justify="space-between">
               <Col>
                  <b>{startCase(key)} </b>
               </Col>
            </Row>
            {Object.entries(value).map(([key, value]) => dynamicRenderingItems(key, value))}
         </div>
      );
   } else if (Array.isArray(value)) {
      return (
         <div key={key} className="customCardContent">
            <b>{startCase(key)} </b>
            {value.map((mapValue) => dynamicRenderingItems("", mapValue))}
         </div>
      );
   } else {
      return (
         <Row key={key} style={{ padding: 3 }}>
            <Col lg={{ span: 7 }} xs={{ span: 20 }} className="customCardTitle">
               {startCase(key)}
            </Col>
            <Col lg={{ span: 16, offset: 1 }} xs={{ span: 20 }} className="customCardDescription">
               {String(value)}
            </Col>
         </Row>
      );
   }
};

export const userAgreementConsentValidator = ({ message }) => ({
   validator(_, value) {
      if (value) {
         return Promise.resolve();
      }
      return Promise.reject(new Error(message));
   },
});

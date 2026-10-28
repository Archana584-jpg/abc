import { Col, message, Row, Tag } from "antd";
import moment from "moment";
import { isObject, map, mapValues } from "lodash";
import { errorCodesMapping, orgConfigKeys } from "shared/constants";
import { filterInputOptions, filterTypes, freshWorksSupportActions, resourceOptions } from "utils/constants";
import { CloseCircleOutlined } from "@ant-design/icons";
import { api } from "utils/api";
import { freshdeskPortalAPIKey, freshdeskURL, baseURL, portal } from "utils/config";
import { ProductCard } from "shared";
import history from "utils/history";

export const formPasswordCriteriaMatchValidator = () => ({
   validator(_, value) {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%#?&]{8,30}$/.test(value)) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Password entered doesn't meet all the criteria!"));
   },
});

export const formConfirmPasswordMatchValidator = (getFieldValue) => ({
   validator(_, value) {
      if (!value || getFieldValue("password") === value) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("The two passwords that you entered do not match!"));
   },
});

export const formBusinessEmailMatchValidator = () => ({
   validator(_, value) {
      if (
         /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)(?!digiwabot.com)(?!digiekycpan.com)(?!digieapi.xyz)(?!proton.me)([\w-]+\.)+[\w-]{2,})?$/.test(
            value
         )
      ) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Please provide your business email ID"));
   },
});

export const formPANNumberValidator = () => ({
   validator(_, value) {
      if (/([A-Z]){5}([0-9]){4}([A-Z]){1}$/.test(value)) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Invalid PAN Number"));
   },
});

export const formPhoneNumberValidator = () => ({
   validator(_, value) {
      if (/^[6-9]\d{9}$/.test(value)) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Invalid Phone Number"));
   },
});

export const formURLValidator = () => ({
   validator(_, value) {
      if (
         /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm.test(
            value
         )
      ) {
         return Promise.resolve();
      }

      return Promise.reject(new Error("Invalid URL"));
   },
});

export const formGSTNumberValidator = () => ({
   validator(_, value) {
      if (
         value &&
         !/^([0-9]{2})([A-Z]{5}[0-9]{4}[A-Z]|[0-9]{2}[0-9A-Z]{3}[0]{5}|[0-9]{2}[0]{8})([1-9A-Z])([1-9A-Z])([0-9A-Z])$/gm.test(
            value
         )
      ) {
         return Promise.reject(new Error("Invalid GSTIN"));
      }
      return Promise.resolve();
   },
});

export const userAgreementConsentValidator = ({ message }) => ({
   validator(_, value) {
      if (value) {
         return Promise.resolve();
      }
      return Promise.reject(new Error(message));
   },
});

export const errorhandling = (error) => {
   if (
      error.response &&
      error.response.data &&
      error.response.data.error &&
      !error.response.data.error.metadata &&
      error.response.data.error.message
   ) {
      message.error(error.response.data.error.message);
   }
};

const handleErrorMessage = (errorKey, errorValue, result) => {
   if (typeof errorValue === "object" && !Array.isArray(errorValue)) {
      Object.entries(errorValue || {}).map(([key, value]) => handleErrorMessage(key, value, result));
   } else if (Array.isArray(errorValue)) {
      (errorValue || []).map((item, index) => handleErrorMessage(index, item, result));
   } else {
      if (errorKey === "message" && errorValue !== "Bad request.") {
         result.push(errorValue);
      }
   }
   return result;
};

export const nestedErrorhandling = (error) => {
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

export const successhandling = ({ message: msg }) => {
   if (msg) {
      message.success(msg);
   }
};

export const customMessageHandling = ({ className, content, duration, icon, style, onClick, onClose }) => {
   message.open({
      className: className,
      content: content,
      duration: duration,
      icon: icon,
      style: style,
      onClick: onClick,
      onClose: onClose,
   });
};

export const formatDate = (date, format) => {
   if (date) return moment(date).format(format || "DD/MM/YYYY");
   else return "";
};

export const createErrorObject = (error) => {
   return ((((((error || {}).response || {}).data || {}).error || {}).metadata || {}).fields || []).reduce(
      (obj, item) => ({ ...obj, [item.field]: item.message }),
      {}
   );
};

export const sanitizeFields = (data) => {
   if (Array.isArray(data)) {
      return map(data, function (value) {
         if (isObject(value)) return sanitizeFields(value);
         return typeof value === "string" ? value.trim() : value;
      });
   }
   return mapValues(data, function (value) {
      if (isObject(value)) return sanitizeFields(value);
      return typeof value === "string" ? value.trim() : value;
   });
};

export const checkResponseForError = ({ code, message }) => {
   const errorCodes = Object.values(errorCodesMapping);
   if (code && errorCodes.indexOf(code) > -1) {
      throw { response: { data: { error: { code, message } } } };
   }
};

export const renderAppliedFilterTag = (item, currentKey, handleRemoveAppliedFilter) => {
   if (!item.values[0]) return;
   let currentFilter = [];
   if (item.type === filterInputOptions.DATE_RANGE) {
      const startDate = {
         title: "Start date & time",
         value: moment(item.values[0].lower).format("DD-MM-YYYY, HH:mm:ss"),
         filterType: filterTypes.RANGE,
         key: "lower",
      };
      const endDate = {
         title: "End date & time",
         value: moment(item.values[0].upper).format("DD-MM-YYYY, HH:mm:ss"),
         filterType: filterTypes.RANGE,
         key: "upper",
      };
      item.values[0].lower && currentFilter.push(startDate);
      item.values[0].upper && currentFilter.push(endDate);
   } else
      currentFilter = [
         {
            title: item.title,
            value: item.values,
            selectedOptionslabel: item.selectedOptionslabel,
            filterType: filterTypes[item.filter_type] || "",
            key: item.key,
         },
      ];
   return currentFilter.map((item) => (
      <Row key={item.key} gutter={[24, 0]}>
         <Col lg={{ span: 3 }} className="tw-w-full">
            <Tag className="tw-bg-white tw-text-xxs tw-p-1.5 tw-leading-5 tw-text-primary tw-w-full">{item.title}</Tag>
         </Col>
         <Col lg={{ span: 20 }}>
            {(item.selectedOptionslabel || []).length > 0 ? (
               item.selectedOptionslabel.map((selectedOption, selectedOptionIndex) => (
                  <Tag
                     key={`${item.key}_${selectedOption}`}
                     className="tw-bg-white tw-text-xxs tw-p-1.5  tw-leading-5 tw-mb-1.5"
                     closable={true}
                     onClose={() =>
                        handleRemoveAppliedFilter(currentKey, item.filterType, item.key, selectedOptionIndex)
                     }
                     closeIcon={<CloseCircleOutlined className="tw-text-xs" />}
                  >
                     {selectedOption}
                  </Tag>
               ))
            ) : (
               <Tag
                  className="tw-bg-white tw-text-xxs tw-p-1.5  tw-leading-5 tw-mb-1.5"
                  closable={true}
                  onClose={() => handleRemoveAppliedFilter(currentKey, item.filterType, item.key)}
                  closeIcon={<CloseCircleOutlined className="tw-text-xs" />}
               >
                  {item.value}
               </Tag>
            )}
         </Col>
      </Row>
   ));
};

export const getDataFromAPI = ({ url, method, body }) => {
   return api({
      method,
      url,
      body,
   })
      .then(({ data }) => {
         return data;
      })
      .catch((error) => {
         errorhandling(error);
         return { error: true };
      });
};

export const getFilterType = (item) => {
   const filterType = item.type;
   switch (filterType) {
      case filterInputOptions.TEXT:
         return item.lookup_enabled ? filterTypes.CONTAINS : filterTypes.EQUAL;
      case filterInputOptions.DATE_RANGE:
         return filterTypes.RANGE;
   }
};

export const formatDropdownOptions = (data, isValueByKey) =>
   (data || []).map((item, key) => ({
      label: item.name,
      value: item[isValueByKey ? "key" : "id"],
   }));

export const resourcesActionByKey = {
   CREDENTIAL: {
      getData: (productId) =>
         getDataFromAPI({
            url: `${baseURL}/${portal}/credentials`,
            method: "POST",
            body: {
               product_ids: [...productId],
               resource: resourceOptions.CREDENTIAL,
            },
         }),
   },
   PRODUCT: {
      getData: () =>
         getDataFromAPI({
            url: `${baseURL}/${portal}/products`,
            method: "POST",
         }),
   },
};

export const transformResourcesDataToOptionsByKey = async (data, productId) => {
   let resourcesOptionsByKey = {};
   let dataWithResource = Object.values(data)
      .filter((item) => item.resource)
      .map((item) => item.resource);
   try {
      let currentResourceData = await Promise.all(
         (dataWithResource || []).map((item) => resourcesActionByKey[item].getData(productId))
      );
      currentResourceData.forEach(
         (item, index) =>
            (resourcesOptionsByKey[dataWithResource[index]] = formatDropdownOptions(
               (item.data || []).entities,
               dataWithResource[index] === "PRODUCT_OFFERING"
            ))
      );
   } catch (error) {
      errorhandling(error);
      resourcesOptionsByKey = {};
   }
   return resourcesOptionsByKey;
};

export const getPathName = (pathname) => {
   let paths = pathname.split("/");
   let path = paths[paths.length - 1];
   return path;
};

export const getParentPathname = (pathname) => {
   let paths = pathname.split("/");
   let path = paths[1] || "";
   return path;
};

export const getCurrentScreenTabName = (path, products = {}, metaContent) => {
   const paths = path.split("/");
   const parentPath = getParentPathname(path);
   let currentPath = parentPath;
   const defaultTitle = "Gridlines | Digital Verification APIs";

   if (parentPath === "products") {
      if (paths.length >= 3) {
         let {
            productById: { data },
         } = products;
         currentPath = ((data || {})[paths[2]] || {}).key || "products";
      } else currentPath = "products";
   }

   if (parentPath === "credentials") {
      if (paths.length >= 3) {
         if (getPathName(path) === "new") currentPath = "createCredentials";
         else currentPath = "editCredentials";
      }
   }

   if (currentPath === "") currentPath = "login";

   return (metaContent[currentPath] || {}).title || defaultTitle;
};

export const keyNameFormValidator = (keyname) => {
   if (!keyname || keyname.trim() === "") return "Key name is required!";
   if (!/^[a-zA-Z0-9-_\s]*$/.test(keyname))
      return 'Key name should only contain Alphabets, Numbers, "-", "_" and an empty space in between!';
   return "";
};

export const chartWhiteBgOnDownloadPlugin = {
   beforeDraw: (chartCtx) => {
      const ctx = chartCtx.canvas.getContext("2d");
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, chartCtx.width, chartCtx.height);
      ctx.restore();
   },
};

export const parseAuthToken = (token) => {
   let base64Url = token.split(".")[1];
   let base64 = base64Url.replace("-", "+").replace("_", "/");
   return JSON.parse(window.atob(base64));
};

export const freshdeskAccountActivationTicketData = (data) => {
   return {
      subject: `Gridlines Account Activation - ${data.organizationName}`,
      priority: 3,
      source: 2,
      status: 2,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      tags: data.tags,
      responder_id: data.responder_id,
      description: `<div>
        <p>Request for account activation to start using Gridlines APIs in production.</p>
        <p>
          <table border="1" width="500">
            <tr>
              <th style="background: #33CCCC">GST Details</th>
              <th style="background: #33CCCC;text-align: center">Client Organization</th>
            </tr>

            <tr>
              <td width="40%">Business Category</td>
              <td>${data.businessCategory}</td>
            </tr>

            <tr>
              <td width="40%">Legal Entity Name</td>
              <td>${data.legalName}</td>
            </tr>

            <tr>
              <td width="40%">Registered address</td>
              <td>${data.address}</td>
            </tr>

            <tr>
              <td width="40%">Billing address</td>
              <td>${data.address}</td>
            </tr>

            <tr>
              <td width="40%">GST Number</td>
              <td>${data.gstNumber}</td>
            </tr>

            <tr>
              <td width="40%">PAN Number</td>
              <td>${data.panNumber}</td>
            </tr>

            <tr>
              <td width="40%">Web uri</td>
              <td>${data.webUri}</td>
            </tr>

            <tr>
              <td width="40%">Org ID for Gridlines</td>
              <td>${data.organizationId}</td>
            </tr>
          </table>

          <table border="1" width="500">
            <tr>
              <th style="background: #33CCCC">Contact Details</th>
              <th style="background: #33CCCC;text-align: center">Primary Point of Contact</th>
            </tr>

            <tr>
              <td width="40%">First name </td>
              <td>${data.firstName}</td>
            </tr>

            <tr>
              <td width="40%">Last name </td>
              <td>${data.lastName}</td>
            </tr>

            <tr>
              <td width="40%">Email </td>
              <td>${data.email}</td>
            </tr>

            <tr>
              <td width="40%">Phone number </td>
              <td>${data.phoneNumber}</td>
            </tr>
          </table>
        </p>
      </div>`,
   };
};

export const createFreshdeskAccountActivationTicket = (data) => {
   return api({
      method: "POST",
      url: `${freshdeskURL}/api/v2/tickets`,
      headers: { Authorization: `Basic ${freshdeskPortalAPIKey}` },
      body: data,
      isNewInstanceRequest: true,
   });
};

export const copyToClipboard = (str) => {
   if (navigator && navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(str);
};

export const renderAutoCompleteOptions = (product, navigateTo, parentPathname) => {
   return (product || []).map((item) => ({
      value: item.id,
      label: (
         <ProductCard
            isRenderedOnAutoComplete={true}
            product={item}
            navigateTo={navigateTo}
            parentPathname={parentPathname}
         />
      ),
      key: item.key,
   }));
};

export const handleDownloadJSON = (data, fileName) => {
   const json = JSON.stringify(data);

   const blob = new Blob([json], { type: "application/json" });
   const url = URL.createObjectURL(blob);

   const link = document.createElement("a");
   link.href = url;
   link.download = `${fileName}_Output.json`;
   link.click();

   URL.revokeObjectURL(url);
};

export const kebabCasetoEnumFormat = (str) => {
   if (str && str === toKebabCase(str)) {
      return str.replace(/-/g, "_").toUpperCase();
   }
   return str;
};

export const toKebabCase = (str) => {
   if (str) {
      return str
         .replace(/([a-z])([A-Z])/g, "$1-$2")
         .replace(/_/g, "-")
         .toLowerCase();
   }
};

export const redirectToExternalLink = (link, type) => {
   window.open(link, type);
};

export const downloadFile = (fileUrl, fileName) => {
   const fileExtensionRegex = /\.([^.?]+)(?:\?|$)/;
   const matches = fileUrl.match(fileExtensionRegex);
   if (!matches) {
      message.error("Invalid File type");
   } else {
      const fileType = matches[1];
      fetch(fileUrl)
         .then((response) => response.blob())
         .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${fileName}.${fileType}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
         })
         .catch((error) => {
            nestedErrorhandling(error);
         });
   }
};

export const aadhaarNumberValidator = () => ({
   validator(_, value) {
      let d = [
         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
         [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
         [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
         [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
         [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
         [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
         [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
         [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
         [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      ];
      let p = [
         [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
         [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
         [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
         [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
         [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
         [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
         [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
         [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
      ];

      if (value && value !== "" && value.length !== 12) return Promise.reject(new Error("Invalid Aadhaar Number"));

      if ((value && value !== "" && value[0] === "0") || value[0] === "1")
         return Promise.reject(new Error("Invalid Aadhaar Number"));

      let c = 0;
      value
         .split("")
         .reverse()
         .join("")
         .replace(/[\d]/g, (u, i, o) => {
            c = d[c][p[i & 7][parseInt(u, 10)]];
         });
      return c === 0 ? Promise.resolve() : Promise.reject(new Error("Invalid Aadhaar Number"));
   },
});

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

export const redirectToInternalRoute = (route) => {
   history.push(route);
};

export const downloadTemplate = (url, fileName) => {
   let a = document.createElement("a");
   a.href = url;
   a.setAttribute("download", fileName);
   a.click();
   a.remove();
};

export const download = (blob, fileName) => {
   const link = document.createElement("a");
   link.href = window.URL.createObjectURL(blob);
   link.download = fileName;
   document.body.append(link);
   link.click();
   link.remove();
   setTimeout(() => window.URL.revokeObjectURL(link.href), 7000);
};

export const filterOption = (input, option) => option.props.children.toLowerCase().includes(input.toLowerCase());

export const handleFreshWorksWidgetSupport = (data, key) => {
   const { tokens } = data;
   const { email, name } = parseAuthToken(tokens.data.access_token);

   const userData = {
      name: name,
      email: email,
   };

   switch (key) {
      case freshWorksSupportActions.REQUEST_APPROVAL: {
         const { product, offering, organization } = data;

         window.FreshworksWidget("open", "ticketForm");
         window.FreshworksWidget("identify", "ticketForm", userData);
         window.FreshworksWidget("prefill", "ticketForm", {
            subject: `Access Request | ${name}`,
            description: `I wish to access and test ${(product || {}).name}- ${
               (offering || {}).name
            }.\nClient name: ${name}\nClient ID: ${(organization.data || {}).id || ""}`,
         });
         break;
      }
      default: {
         window.FreshworksWidget("open", "");
         window.FreshworksWidget("identify", "ticketForm", userData);
         break;
      }
   }
};

export const isEmailFromOngrid = (email) => {
   const domain = email.split("@")[1];

   return domain.toLowerCase() === "ongrid.in" ? true : false;
};

export const orgConfigHandler = (orgConfig = {}, key) => {
   const config = orgConfig.data;
   switch (key) {
      case orgConfigKeys.IS_EMP_HIST_PDF_DOWNLOAD_SUPPORTED: {
         return config[key];
      }
      default:
         return false;
   }
};

export const handleBackButton = (path) => {
   history.push(path);
};

export const base64ToDataSrc = (base64) => {
   if (base64.startsWith("JVB")) {
      return `data:application/pdf;base64,${base64}`;
   }
   return `data:image/png;base64, ${base64}`;
};

export const atleastOneFieldRequiredValidator = (getFieldValue, dependentFieldsName, currentFieldName) => ({
   validator(_, value) {
      const hasDependentFieldValue =
         dependentFieldsName.some((field) => Boolean(getFieldValue(field))) || Boolean(value);

      if (hasDependentFieldValue) return Promise.resolve();
      const message = `Please enter atleast a ${currentFieldName} to proceed.`;
      return Promise.reject(new Error(message));
   },
});

export const exactlyOneRequiredValidator = ({
   getFieldValue,
   dependentFields,
   requiredMessage,
   exactlyOneMessage,
}) => ({
   validator(_, value) {
      const otherFieldsValues = dependentFields.map((field) => getFieldValue(field)).filter(Boolean);
      const filledCount = (value ? 1 : 0) + otherFieldsValues.length;

      if (filledCount === 0) {
         return Promise.reject(new Error(requiredMessage || "At least one field is required."));
      } else if (filledCount > 1) {
         return Promise.reject(new Error(exactlyOneMessage || "Only one field should be provided."));
      }
      return Promise.resolve();
   },
});

export const disableFutureYears = (current) => {
   return current && current > moment().endOf("year");
};

export const regexPatterns = {
   PAN_NUMBER: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
};

export const defaultErrorMessagesWRTRegex = {
   PAN_NUMBER: "Invalid PAN Number",
};

export const customValidator = ({ pattern, defaultMessage, customMessage }) => ({
   validator(_, value) {
      if (!value || (pattern && pattern.test(value))) {
         return Promise.resolve();
      }

      return Promise.reject(new Error(customMessage || defaultMessage));
   },
});

export const fieldValidators = {
   PAN_NUMBER: (customMessage) =>
      customValidator({
         pattern: regexPatterns.PAN_NUMBER,
         defaultMessage: defaultErrorMessagesWRTRegex.PAN_NUMBER,
         customMessage,
      }),
};

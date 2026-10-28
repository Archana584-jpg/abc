import { renderIcon } from "screens/node/helper";
import Content from "screens/node_new/containers/Content";
import CustomLabel from "shared/components/Label";
import { componentTypes } from "shared/constants";
import { replacePlaceholders, cellRenderer, getEvaluatedValue } from "utils/helper";
import { useMemo } from "react";
import { isArray, isEmpty } from "lodash";
import Layout from "screens/node_new/containers/Layout";
import useActionHandler from "./useActionHandler";
import { CustomButton } from "shared/components";

const useConfigToProps = ({ config, data, dataSourcePath }) => {
   const actionHandler = useActionHandler({ action: config?.action, data });

   const componentProps = useMemo(() => {
      let props = {
         ...config?.props,
      };

      switch (config?.type) {
         case componentTypes.ACTIONABLE_LABEL: {
            props = {
               ...props,
               className: config?.content?.className,
               label: (
                  <CustomLabel
                     label={{
                        ...config?.content?.label,
                        text: replacePlaceholders(config?.content?.label?.text, data),
                     }}
                     showDefaultIcon={true}
                  />
               ),
               actionable: <CustomButton {...componentProps(config.content?.actionable, data)} />,
            };
            break;
         }

         case componentTypes.BUTTON:
            props = {
               ...props,
               label: (
                  <CustomLabel
                     label={{
                        ...config?.content?.label,
                        text: replacePlaceholders(config?.content?.label?.text, data),
                     }}
                  />
               ),
               icon: config?.content?.icon ? renderIcon(config?.content?.icon, data) : null,
               ...actionHandler,
            };

            break;

         case componentTypes.FORM_ITEM:
            props = {
               ...props,
               content: {
                  ...config?.content,
                  label: {
                     ...config?.content?.label,
                     text: getEvaluatedValue(config?.content?.label?.text, data),
                  },
               },
               type: config?.type,
            };
            return props;

         case componentTypes.ALERT:
            props = {
               ...props,
               message: (
                  <CustomLabel
                     label={{
                        ...config?.content?.title,
                        text: replacePlaceholders(config?.content?.title?.text, data),
                     }}
                  />
               ),
               description: config?.content?.description?.text ? (
                  <CustomLabel
                     label={{
                        ...config?.content?.description,
                        text: replacePlaceholders(config?.content?.description?.text, data),
                     }}
                  />
               ) : null,
               icon: config?.content?.icon && renderIcon(config?.content?.icon, data),
            };
            break;

         case componentTypes.FORM: {
            props = {
               ...props,
               fields: config?.content?.fields,
               formId: config?.formId,
               data: data,
               name: props?.name,
               title: (
                  <CustomLabel
                     label={{
                        ...config?.content?.title,
                        text: replacePlaceholders(config?.content?.title?.text, data),
                     }}
                  />
               ),
            };
            break;
         }

         case componentTypes.IMAGE_VIEWER:
            props = {
               ...props,
               images: isArray(data) ? data : [data],
               ...actionHandler,
            };
            break;

         case componentTypes.COLLAPSIBLE_LIST:
            props = {
               ...props,
               items: config.content.items.map((item, index) => {
                  return {
                     key: index,
                     label: (
                        <CustomLabel label={{ ...item.label, text: replacePlaceholders(item?.label?.text, data) }} />
                     ),
                     children: <Layout components={item.content} />,
                  };
               }),
            };
            break;

         case componentTypes.LIST:
            const renderItems = (template, itemData, index) => ({
               title: {
                  ...template?.title,
                  text: replacePlaceholders(template?.title?.text, { ...itemData, index: index + 1 }),
               },
               description: {
                  ...template?.description,
                  text: replacePlaceholders(template?.description?.text, { ...itemData, index: index + 1 }),
               },
               icon: template?.icon && {
                  ...template?.icon,
                  src: replacePlaceholders(template?.icon?.src, { ...itemData, index: index + 1 }),
               },
               key: index,
            });
            // data mapping section
            // cases on list type :
            // 1. default list : both values will be in data, will be using content?.body?.default
            //    - static data: will directly have the data in format , if default is not present.
            //    - dynamic data: content?.body?.default
            // 2. custom list with components
            //    - just render Contents, it will handle everything from there
            // now implement the same
            let items = [];
            if (isEmpty(config?.content?.body?.custom)) {
               const defaultItemConfig = config?.content?.body?.default;
               const lookupKey = config?.props?.lookupKey;
               if (data?.length || (lookupKey && data?.[lookupKey]?.length)) {
                  items = isEmpty(defaultItemConfig)
                     ? data
                     : lookupKey
                     ? data?.[lookupKey]?.map((item, index) => renderItems(defaultItemConfig, item, index))
                     : data?.map((item, index) => renderItems(defaultItemConfig, item, index));
               }
            } else {
               // custom list with components
               items = config?.content?.body?.custom;
               props = {
                  ...props,
                  renderItem: (item, index) => <Content component={item} key={index} />,
               };
            }

            props = {
               ...props,
               listClassName: config?.content?.body?.className,
               title: config?.content?.title,
               subtitle: config?.content?.subtitle,
               items: items,
               ...actionHandler,
            };
            break;

         case componentTypes.MODAL:
            props = {
               ...props,
               title: (
                  <CustomLabel label={{ ...config?.title, text: replacePlaceholders(config?.title?.text, data) }} />
               ),
               visibilityDependsOn: config?.props?.visibilityDependsOn,
               wrapClassName: config?.wrapper?.className,
               destroyOnClose: true,
               content: <Layout components={config?.content?.body} />,
               footer: <Layout components={config?.content?.footer} />,
               ...actionHandler,
            };
            break;

         case componentTypes.STEPPER:
            // data mapping section
            const renderSteps = (template, stepData, index) => ({
               ...template,
               title: <CustomLabel label={template.title} data={stepData} />,
               description: <CustomLabel label={template.subTitle} data={stepData} />,
               icon: template.icon && renderIcon(template.icon, stepData),
               status: replacePlaceholders(template.status, stepData),
               subTitle: <CustomLabel label={template.subTitle} data={stepData} />,
               disabled: replacePlaceholders(template.disabled, stepData),
               key: index,
            });

            // 1. static data: use steps provided in the content
            //    - pure static data
            //    - static + some dynamic data
            // 2. dynamic data: use stepResolver to get the steps
            let steps = [];
            const stepResolver = config?.content?.stepResolver;
            if (isEmpty(config?.content?.steps)) {
               // for dynamic data , with a mapper: stepResolver
               steps = data.map((item, index) => renderSteps(stepResolver, item, index));
            } else {
               // for steps provided, static  and staic + some dynamic data
               steps = config?.content?.steps.map((item, index) => renderSteps(item, data, index));
            }

            props = {
               ...props,
               items: steps,
               current: steps.findIndex((step) => step.id === data?.active_node_key),
               ...actionHandler,
            };
            break;

         case componentTypes.TEXT:
            props = {
               ...props,
               label: {
                  ...config?.content?.label,
                  text: replacePlaceholders(config?.content?.label?.text, data),
               },
            };
            break;

         case componentTypes.TABLE:
            const columns = props?.columns?.map((column) => {
               return {
                  ...column,
                  render: (item, record, index) =>
                     column.render ? cellRenderer({ renderContent: column.render, item, record, index }) : item,
               };
            });
            props = {
               ...props,
               columns: columns,
               data: data?.length ? data : [],
               title: config?.content?.title ? <CustomLabel label={config?.content?.title} /> : null,
            };
            break;

         case componentTypes.OTP_MODAL:
            props = {
               ...props,
               title: (
                  <CustomLabel
                     label={{
                        ...config?.content?.title,
                        text: replacePlaceholders(config?.content?.title?.text, data),
                     }}
                  />
               ),
               body: config?.content?.body,
               resendButtonConfig: config?.content?.resendButton,
               submitButtonConfig: config?.content?.submitButton,
            };
            break;
         case componentTypes.IMAGE:
            props = {
               ...props,
            };
            break;
         default:
            break;
      }
      return props;
   }, [config, data, dataSourcePath]);

   return componentProps;
};

export default useConfigToProps;

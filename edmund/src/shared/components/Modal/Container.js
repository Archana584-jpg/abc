import { useEffect } from "react";
import Component from "./Component";
import { useDispatch, useSelector } from "react-redux";
import sharedSelector from "shared/selector";
import { setModalVisibility } from "shared/actions";

const Container = ({
   mask,
   title,
   style,
   width,
   zIndex,
   styles,
   footer,
   visibilityDependsOn,
   content,
   centered,
   closable,
   wrapClassName,
   maskClosable,
   className,
   destroyOnClose,
   handleClose,
   defaultVisibility = false,
}) => {
   const dispatch = useDispatch();
   const { isModalVisibile } = useSelector(sharedSelector);

   useEffect(() => {
      handleModalVisbility(defaultVisibility);
   }, [visibilityDependsOn]);

   const handleModalVisbility = (isVisible) => {
      dispatch(setModalVisibility({ [visibilityDependsOn]: isVisible }));
   };

   return (
      <Component
         mask={mask}
         title={title}
         style={style}
         width={width}
         zIndex={zIndex}
         styles={styles}
         visible={isModalVisibile?.[visibilityDependsOn]}
         footer={footer}
         content={content}
         centered={centered}
         closable={closable}
         wrapClassName={wrapClassName}
         maskClosable={maskClosable}
         className={className}
         destroyOnClose={destroyOnClose || true}
         handleClose={() => {
            handleModalVisbility(false);
            if (handleClose) {
               handleClose();
            }
         }}
      />
   );
};

export default Container;

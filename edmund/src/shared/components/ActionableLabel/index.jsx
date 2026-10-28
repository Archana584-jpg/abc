const ActionableLabel = ({ label, actionable, className }) => {
   return (
      <div className={`flex items-center justify-between ${className}`}>
         {label ? label : null}
         {actionable ? actionable : null}
      </div>
   );
};

export default ActionableLabel;

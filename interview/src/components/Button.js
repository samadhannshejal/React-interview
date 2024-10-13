import React from "react";
/**
 * A reusable button component that can be customized with various props.
 *
 * @param {Object} props - The props object.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.className] - Optional additional class name for styling.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {"button"|"submit"|"reset"} [props.type="button"] - The type of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {Object} [props.props] - Any additional props to pass to the button element.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({ onClick, className, disabled, type, children, ...props }) => {
  return (
   
      <button
        onClick={onClick}
        className={className}
        disabled={disabled}
        type={type}
        {...props}
      >
        {children}
      </button>
  );
};

export default Button;

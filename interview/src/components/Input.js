import React from "react";
/**
 * @param {object }props -The Props object
 * @param {function}props.onChange - The function call when user type in input
 * @param {string} [props.className] - optional additional class name for styling purpose
 * @param {string}[props.placeholder] -Optional additiona placeholder appear in input box
 * @param {string} props.type -the type of input
 * @param {object } [props.props] - Any additonal props to pass input box
 * @returns  {JSX.Element}  The render input component
 */

const Input = ({
  onChange,
  className,
  type,
  placeholder,
  children,
  ...props
}) => {
  return (
    <>
      <label htmlFor={props.id}>{children}</label>
      <input
        onChange={onChange}
        className={className}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default Input;

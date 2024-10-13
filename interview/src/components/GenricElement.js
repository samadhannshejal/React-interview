import React from "react";
/**
 *
 * @param {object} -The props object
 * @param {string} props.as- The type of html element
 * @param {string} [props.className] - Optional class name for styling purpose
 * @param {object}[props.style] -Optional lnline styling
 * @param {object} props.props - Any addtional props
 * @returns  {JSX.Element} -render HTML element
 */
const GenricElement = ({ as: Tag, className, children, style, ...props }) => {
  return (
    <div>
      <Tag as={Tag} className={className} style={style} {...props}>
        {children}
      </Tag>
    </div>
  );
};

export default GenricElement;

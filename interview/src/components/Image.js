import React from "react";
/**
 *
 * @param {object}props -The props pass to compoent
 * @param {string}props.src-Provide source to image
 * @param {number}props.width - Provide width to image
 * @param {number}props.height -Provide height to image
 * @param {object}props.props - Provide additonal props to element
 * @returns {JSX.Element} The render Image element
 */

const Image = ({ src, alt, width, height, ...props }) => {
  return (
    <div>
      <image src={src} alt={alt} width={width} height={height} {...props} />
    </div>
  );
};

export default Image;

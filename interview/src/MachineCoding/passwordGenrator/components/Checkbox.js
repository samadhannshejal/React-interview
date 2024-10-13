import React from "react";

const Checkbox = ({ item, index, onChange }) => {
  return (
    <div>
      <label htmlFor={index}>{item.value}</label>
      <input
        type="checkbox"
        id={index}
        checked={item.isSelected}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;

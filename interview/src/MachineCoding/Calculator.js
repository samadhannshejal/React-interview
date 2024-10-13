import React, { useState } from "react";
import "../Styles/CalculatorStyle.css";
const Calculator = () => {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    if (
      ["/", "*", "+", "-"].includes(e.target.innerHTML) &&
      ["/", "*", "+", "-"].includes(value.charAt(value.length - 1))
    ) {
      setValue(value.slice(0, -1) + e.target.innerHTML);
    } else {
      setValue((pre) => pre + e.target.innerHTML);
    }
  };

  const handleCalculate = () => {
    console.log(value)
  };
  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="btn-container">
        <span onClick={() => setValue("")}>AC</span>
        <span onClick={() => setValue(value.slice(0, -1))}>DEL</span>
        <span onClick={handleClick}>.</span>
        <span onClick={handleClick}>/</span>
      </div>
      <div className="btn-container">
        <span onClick={handleClick}>7</span>
        <span onClick={handleClick}>8</span>
        <span onClick={handleClick}>9</span>
        <span onClick={handleClick}>*</span>
      </div>
      <div className="btn-container">
        <span onClick={handleClick}>4</span>
        <span onClick={handleClick}>5</span>
        <span onClick={handleClick}>6</span>
        <span onClick={handleClick}>+</span>
      </div>
      <div className="btn-container">
        <span onClick={handleClick}>1</span>
        <span onClick={handleClick}>2</span>
        <span onClick={handleClick}>3</span>
        <span onClick={handleClick}>-</span>
      </div>
      <div className="btn-container">
        <span onClick={handleClick}>00</span>
        <span onClick={handleClick}>0</span>
        <span style={{ width: "140px" }} onClick={handleCalculate}>
          =
        </span>
      </div>
    </div>
  );
};

export default Calculator;

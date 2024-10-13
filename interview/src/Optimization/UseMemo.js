import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  return (
    <div>
      <button onClick={() => setA(a + 1)}>A</button>
      <button onClick={() => setB(b + 1)}>B</button>
      <ChildrenCompo a={a} b={b}/>
    </div>
  );
};

export default UseMemo;

const ChildrenCompo = ({ a, b }) => {
  const expensiveCalculation = (num1, num2) => {
    console.log("expensive function render...");
    return num1 + num2;
  };
  const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a,b]);
  return <>Result : {memoizedValue}</>;
};

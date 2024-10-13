import React, { useCallback, useState } from "react";

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const memoizedCallback = useCallback(() => {
    console.log("Function Render...");
    setCount(count + 1);
  }, []);
  return (
    <div>
      <ChildCompo onClick={memoizedCallback} />
    </div>
  );
};

export default UseCallBack;

const ChildCompo = ({ onClick }) => {
  console.log("Child render.....");
  return (
    <>
      <button onClick={onClick}>Click</button>
    </>
  );
};

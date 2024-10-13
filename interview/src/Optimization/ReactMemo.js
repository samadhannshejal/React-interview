import React, { useMemo, useState } from "react";

const ReactMemo = () => {
  console.log("Parent render...");
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <ChildrenCompo />
    </>
  );
};

export default ReactMemo;

const ChildrenCompo = React.memo(() => {
  console.log("children render");
  return <>Children ....</>;
});

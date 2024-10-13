import React, { useRef } from "react";

const CursorCircle = () => {
  const ref = useRef();
  const mouseMove = (e) => {
    console.log(e, ref);
    if (ref.current) {
      setTimeout(() => {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }, 300);
    }
  };
  return (
    <div style={{ height: "100vh" }} onMouseMove={mouseMove}>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "red",
          borderRadius: "50%",
          position: "relative",
        }}
        ref={ref}
      ></div>
    </div>
  );
};

export default CursorCircle;

import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);
  const [loading, setLoading] = useState(false);

  const onScroll = (e) => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 30
    ) {
      if (!loading) {
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setCount(count + 50);
        setLoading(false);
      }, 1000); // Simulate loading delay
    }
  }, [loading]);

  const elements = [];
  for (let i = 1; i <= count; i++) {
    elements.push(<div key={i}>count {i}</div>);
  }

  return (
    <div>
      {elements}
      {loading && <div style={{fontSize:"50px"}}>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;

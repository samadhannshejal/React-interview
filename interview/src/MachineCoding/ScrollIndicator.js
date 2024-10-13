import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Calculate scroll percentage
  const getPercentage = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setPercentage(scrolled);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", getPercentage);
    return () => {
      window.removeEventListener("scroll", getPercentage);
    };
  }, []);

  // Display loading message if data is still being fetched
  if (loading) {
    return <div>Loading... please wait</div>;
  }

  // Render the component
  return (
    <div>
      <div style={{ background: "green", position: "sticky", top: 0 }}>
        <h1>Scroll indicator</h1>
        <div
          style={{
            width: `${percentage}vw`,
            backgroundColor: "blue",
            height: "10px",
          }}
        ></div>
      </div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
    
  );
};

export default ScrollIndicator;

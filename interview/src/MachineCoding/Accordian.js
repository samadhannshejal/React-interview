import React, { useState } from "react";

const Accordian = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const accordionData = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    },
    {
      title: "What is an Accordion?",
      content:
        "An accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. Each item can be expanded or collapsed to reveal the content associated with that item.",
    },
    {
      title: "What are Hooks in React?",
      content:
        "Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8. Common hooks include useState, useEffect, and useContext.",
    },
    {
      title: "What is the Virtual DOM?",
      content:
        "The Virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation.",
    },
    {
      title: "What are Props in React?",
      content:
        "Props are short for properties. They are read-only attributes that are passed from a parent component to a child component. Props are used to pass data and event handlers down to child components.",
    },
    {
      title: "What is State in React?",
      content:
        "State is an object that represents the parts of the app that can change. Each component can maintain its own state. State changes can be asynchronous and trigger re-renders of the component.",
    },
  ];

  const handleOpen = (index) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Accordion</h1>
      {accordionData.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div
            onClick={() => handleOpen(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 20px",
              backgroundColor: "#5D4037",
              color: "white",
              cursor: "pointer",
              fontSize: "18px",
              border: "1px solid #5D4037",
              borderBottom: openIdx === index ? "1px solid white" : "1px solid #5D4037",
              transition: "background-color 0.3s ease",
            }}
          >
            <div>{item.title}</div>
            <div style={{ fontWeight: "bold", fontSize: "24px" }}>
              {openIdx === index ? "-" : "+"}
            </div>
          </div>
          {openIdx === index && (
            <div
              style={{
                padding: "15px 20px",
                backgroundColor: "#795548",
                color: "white",
                border: "1px solid #5D4037",
                borderTop: "none",
                transition: "max-height 0.3s ease",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;

import React, { useEffect, useState } from "react";
import "./todostyle.css";
const TodoDemo = () => {
  const [data, setData] = useState([]);
  const [inputValue, setValue] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos?limit=10");
        const result = await response.json();
        setData(result.todos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleAdd = () => {
    const cpyData = [...data];
    const newObj = {
      id: crypto.randomUUID(),
      todo: inputValue,
      completed: false,
      userId: Math.random() * 200,
    };

    setData([...cpyData, newObj]);
    setValue("");
  };

  const handleDelete = (id) => {
    const cpyObj = [...data];
    const filterData = cpyObj.filter((item) => item.id !== id);
    setData(filterData);
  };

  const handleToggle = (id) => {
    const cpyData = [...data];
    const findItem = cpyData.find((item) => item.id === id);
    const newObj={...findItem,completed:!findItem.completed}

    setData([...cpyData,newObj])
  };
  return (
    <>
      <div class="container">
        <div class="todo-column">
          <h2>To-Do</h2>
          <ul id="todo-list">
            {data.map((item, idx) => {
              if (!item.completed) {
                return (
                  <li key={idx}>
                    <input
                      type="checkbox"
                      onChange={() => handleToggle(item.id)}
                      checked={item.completed}
                    />{" "}
                    {item.todo}
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div class="completed-column">
          <h2>Completed</h2>
          <ul id="completed-list">
            {data.map((item, idx) => {
              if (item.completed) {
                return (
                  <li key={idx}>
                    <input type="checkbox" checked={item.completed} onChange={()=>handleToggle(item.id)}/>{item.todo}
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div class="add-task">
        <input
          type="text"
          id="new-task"
          value={inputValue}
          placeholder="Enter new task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>
          Add Task
        </button>
      </div>
    </>
  );
};
export default TodoDemo;

import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { addTodo, filterTodo } from "./redux/slice/todoSlice";
import RenderTodo from "./components/RenderTodo";
import FilterTodo from "./components/FilterTodo";

export default function Todo() {
  const [value, setValue] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("All"); 
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
    setSelectedFilter("All"); 
    dispatch(filterTodo("All"));
  };


  return (
    <div>
      <div className="todo-header">
        <Input
          type="text"
          onChange={handleChange}
          placeholder="Please enter text"
          value={value}
          className="input-todo"
        />
        <Button
          type="submit"
          onClick={handleAddTodo}
          children={"Add"}
          className="btn-todo"
        />
        <FilterTodo
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {/* render todo */}
        <RenderTodo />
      </div>
    </div>
  );
}

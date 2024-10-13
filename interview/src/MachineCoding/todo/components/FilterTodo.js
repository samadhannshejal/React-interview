import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../redux/slice/todoSlice";

const FilterTodo = ({ selectedFilter, setSelectedFilter }) => {
  const dispatch = useDispatch();
  const filterValue = ["All", "Completed", "Active"];

  const handleFilter = (e) => {
    const filter = e.target.value;
    setSelectedFilter(filter);
    dispatch(filterTodo(filter));
  };
  return (
    <span>
      <label htmlFor="todo">Filter</label>
      <select
        name="todo"
        id="todo"
        value={selectedFilter}
        onChange={handleFilter}
      >
        {filterValue.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
};

export default FilterTodo;

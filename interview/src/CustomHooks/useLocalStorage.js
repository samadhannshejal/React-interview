import { useEffect, useState } from "react";
// try another apporach also
const useLocalStorage = (key) => {
  const setValue = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  const getValue = () => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.log(error);
    }
  };
  const removeValue = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };
  return { setValue, getValue, removeValue };
};

const UseLocalStorage = () => {
  const [addValue, setAddValue] = useState("");
  const { getValue, setValue, removeValue } = useLocalStorage("data");

  return (
    <>
      <h1>useLocalStorage Custom hook</h1>
      <input value={addValue} onChange={(e) => setAddValue(e.target.value)} />
      <button onClick={() => console.log(getValue())}>getValue</button>
      <button onClick={() => setValue(addValue)}>setValue</button>
      <button onClick={() => removeValue()}>removeValue</button>
    </>
  );
};
export default UseLocalStorage;

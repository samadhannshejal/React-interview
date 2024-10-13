import { useEffect, useState } from "react";

const useDebounce = (query, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(query);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(query);
    }, [delay]);
    return () => clearTimeout(timeoutId);
  }, [query, delay]);

  return { debouncedValue };
};

const UseDebounce = () => {
  const [value, setValue] = useState("");
  const { debouncedValue } = useDebounce(value, 500);
  console.log(debouncedValue)
  return (
    <>
      <h1>{debouncedValue}</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
};
export default UseDebounce

import {useState} from 'react'
const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggle = () => {
    setIsToggle((preValue) => !preValue);
  };
  return { isToggle, toggle };
};

 const UseToggle = () => {
    const {isToggle,toggle}=useToggle()
  return (
    <div>
      <p>{`The current state is: ${isToggle}`}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};
export default UseToggle

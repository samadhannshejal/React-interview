import { useEffect, useState } from "react";

const Debounce = () => {
  const [data, setData] = useState([]);
  const[searchValue,setSearchValue]=useState('')
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        setData(await res.json());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const debounce = (value) => {
      let debouncedValue;
      let timer=setTimeout(()=>{
        debouncedValue=value;
      },300)
      clearTimeout(timer)
       return debouncedValue;
  };
  const handleSearch=(e)=>{
    setSearchValue(e.target.value)
    console.log(debounce())
  }
  return (
    <>
      <h1>Search functionality...</h1>
      <input type="text" placeholder="search here.." value={searchValue} onChange={handleSearch}/>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
};
export default Debounce;

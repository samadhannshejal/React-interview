import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (error) {
        setError(error);
    } finally {
          setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, error, loading };
};

const UseFetch = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data);
  if (error) {
    return <h1>{error}</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        fetch data appear here..
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </>
  );
};

export default UseFetch;

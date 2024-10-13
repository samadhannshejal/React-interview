import { useEffect, useState } from "react";

export const useApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const request = async (
    url,
    method = "GET",
    headers = { "content-type": "application/json" },
    body = null
  ) => {
    try {
      const config = { method,headers, body };
      // if body is available
      if (body) {
        config.body = JSON.stringify(body);
      }
      const response = await fetch(url, config);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};

const UseApi = () => {
  const { data, error, loading, request } = useApi();
  
  useEffect(() => {
    const fetchData = async () => {
      await request("https://jsonplaceholder.typicode.com/posts","GET",{"content-type":'text'});
    };
    fetchData();
  }, []);

  if(!error){
    console.log("Error ",error);
    return;
  }else{
    console.log(data)
  }
  console.log(data,error,loading)

  return <>
  </>;
};

export default UseApi;
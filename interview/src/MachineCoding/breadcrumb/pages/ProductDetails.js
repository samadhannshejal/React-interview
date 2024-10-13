import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../../../CustomHooks/useApi";
import Loading from "../../Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useApi();

  useEffect(() => {
    const fetchData = async () => {
      await request(`https://dummyjson.com/products/${id}`);
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loading loading={loading}/>
  }

  return (
    <div>
      Product details here..
      <h2>Product Detail Page</h2>
        {data && (
            <>
            <img src={data.thumbnail} alt="not found"/>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            </>
        )}
    </div>
  );
};

export default ProductDetails;

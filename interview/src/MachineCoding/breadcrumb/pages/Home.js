import React, { useEffect, useState } from "react";
import { useApi } from "../../../CustomHooks/useApi";
import "../../../Styles/BreadCrumb.css";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";
const Home = () => {
  const { data, loading, error, request } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await request("https://dummyjson.com/products");
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loading loading={loading}/>
  }
  return (
    <div>
      <div className="products-container">
        {data?.products?.slice(0, 6).map((product, idx) => (
          <div className="product" key={product.id} onClick={()=>navigate(`products/${product.id}`)}>
            <img
              src={product.thumbnail}
              alt=" not found"
              className="product-img"
            />
            <div className="product-title">{product.title}</div>
          </div>
        ))}
      </div>
      <div className="load-more">
        <button onClick={() => navigate("/products")}>Load More</button>
      </div>
    </div>
  );
};

export default Home;

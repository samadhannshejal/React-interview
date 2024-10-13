import React, { useEffect } from "react";
import { useApi } from "../../../CustomHooks/useApi";
import "../../../Styles/BreadCrumb.css";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Loading";

const ProductListining = () => {
  const { data, loading, error, request } = useApi();

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
        {data.products.map((product, idx) => (
          <Link className="product" to={`/products/${product.id}`}>
            <img
              src={product.thumbnail}
              alt=" not found"
              className="product-img"
            />
            <div className="product-title">{product.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListining;

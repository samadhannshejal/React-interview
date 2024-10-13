import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductListining from "./pages/ProductListining";
import ProductDetails from "./pages/ProductDetails";
import BreadCrumb from "./BreadCrumb";

const BreadCrumbRootLayout = () => {
  return (
    <div>
      <Router>
        <BreadCrumb/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListining />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>  
  );
};

export default BreadCrumbRootLayout;

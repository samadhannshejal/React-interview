import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../../Styles/BreadCrumb.css'; // Import the CSS file

const BreadCrumb = () => {
  const location = useLocation();

  const paths = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  return (
    <div className="breadcrumb-container">
      {paths.length > 0 && (
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>
      )}

      {paths.map((name, idx) => {
        breadcrumbPath += `/${name}`;
        const isLast = paths.length - 1 === idx;
        return !isLast ? (
          <span key={breadcrumbPath}>
            <span className="breadcrumb-separator">/</span>
            <Link to={breadcrumbPath} className="breadcrumb-link">
              {name}
            </Link>
          </span>
        ) : (
          <span key={breadcrumbPath} className="breadcrumb-last">{name}</span>
        );
      })}
    </div>
  );
};

export default BreadCrumb;

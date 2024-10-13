import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  const totalPageArray = Array.from({ length: totalPage }, () => 0);
  return (
    <div className="pagination">
      <div className="pagination-btn" onClick={()=>onPageChange(currentPage-1)}>
        Previous
      </div>
      <div className="pagination-item-container">
        {totalPageArray.map((_, idx) => (
          <div className="pagination-items" onClick={()=>onPageChange(idx+1)}>
            {idx + 1}
          </div>
        ))}
      </div>
      <div className="pagination-btn" onClick={()=>onPageChange(currentPage+1)}>
        Next
      </div>
    </div>
  );
};

export default Pagination;

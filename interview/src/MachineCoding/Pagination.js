import React, { useEffect, useState } from "react";
import "../Styles/Pagination.css";
import { useApi } from "../CustomHooks/useApi";

const Pagination = () => {
  const { data, loading, request } = useApi();
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const [visibleButtons, setVisibleButtons] = useState(5); // Initial number of buttons to display

  useEffect(() => {
    const fetchData = async () => {
      try {
        await request("https://jsonplaceholder.typicode.com/comments");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Calculate the number of buttons to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setVisibleButtons(3); // Fewer buttons on small screens
      } else if (width < 900) {
        setVisibleButtons(5); // Medium buttons on medium screens
      } else {
        setVisibleButtons(7); // More buttons on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <>Loading..</>;
  }

  const totalPages = Math.ceil(data.length / limit);
  const buttons = Array.from({ length: totalPages }, (_, idx) => idx + 1);
  const startButton = Math.max(
    0,
    Math.min(currentPage - Math.floor(visibleButtons / 2), totalPages - visibleButtons)
  );
  const endButton = Math.min(startButton + visibleButtons, totalPages);
console.log(startButton,endButton)
  const handleBtnChange = (currentBtnIdx) => {
    setCurrentPage(currentBtnIdx);
    setPageNumber(currentBtnIdx + 1);
  };

  const handleInputPageChange = (inputPage) => {
    const page = Math.max(1, Math.min(parseInt(inputPage, 10), totalPages));
    setCurrentPage(page - 1);
    setPageNumber(page);
    console.log(currentPage,pageNumber)
  };

  return (
    <div>
      <div className="input-container">
        <label htmlFor="limit-input">Please Enter Limit</label>
        <input
          id="limit-input"
          type="number"
          value={limit}
          onChange={(e) => {
            
            if(e.target.value<=0){
                setLimit(10)
            }
            setLimit(Number(e.target.value))
          }}
        />
      </div>
      <ul>
        {data
          .slice(currentPage * limit, (currentPage + 1) * limit)
          .map((item, idx) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
      <div className="input-container">
        <label htmlFor="page-number-input">Please Enter Page Number</label>
        <input
          id="page-number-input"
          type="number"
          value={pageNumber}
          onChange={(e) => handleInputPageChange(e.target.value)}
        />
      </div>
      <div className="pagination-container">
        <button
          className="pagination-btn"
          onClick={() => handleBtnChange(0)}
          disabled={currentPage === 0}
        >
          First
        </button>
        <button
          className="pagination-btn"
          onClick={() => handleBtnChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {startButton > 0 && <button className="pagination-btn">...</button>}
        {buttons.slice(startButton, endButton).map((page, idx) => (
          <button
            key={page}
            className={`pagination-btn ${page === currentPage + 1 ? "active" : ""}`}
            onClick={() => handleBtnChange(page - 1)}
          >
            {page}
          </button>
        ))}
        {endButton < totalPages && <button className="pagination-btn">...</button>}
        <button
          className="pagination-btn"
          onClick={() => handleBtnChange(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
        <button
          className="pagination-btn"
          onClick={() => handleBtnChange(totalPages - 1)}
          disabled={currentPage === totalPages - 1}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;

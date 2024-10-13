import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Pagination from "./Pagination";

const FetchData = () => {
  const [FetchData, setFetchData] = useState([]);
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setcurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const resonse = await fetch("https://jsonplaceholder.typicode.com/posts");
      const apiData = await resonse.json();
      setFetchData(apiData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onClose = () => {
    setModalOpen(false);
  };
  const isOpen = () => setModalOpen(true);

  if (Loading) {
    return <div>Loading..</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  console.log(FetchData);

  // pagination logic
  const totalPage = FetchData.length / 10;
  const onPageChange = (pageNumber) => {
    setcurrentPage(pageNumber);
    console.log(pageNumber)
  };
  return (
    <div>
      <button onClick={() => isOpen(true)}>open modal</button>
      <Modal isOpen={isModalOpen} onClose={onClose} title={"fetch data"}>
        fetch api data
      </Modal>
      <Pagination
        totalPage={totalPage}
        onPageChange={onPageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default FetchData;

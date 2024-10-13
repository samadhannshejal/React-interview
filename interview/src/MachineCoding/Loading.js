import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import '../Styles/loading.css'
const Loading = ({ loading }) => {
  return (
    <div>
      {loading && (
        <div className="loading-container">
          <AiOutlineLoading3Quarters  fontSize={40}  className="loading"/>
        </div>
      )}
    </div>
  );
};

export default Loading;

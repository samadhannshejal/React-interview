import React, { useEffect, useState } from "react";
import "../Styles/Tic-tac-toeStyle.css";
const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {value}
    </button>
  );
};
const Tic_tac_toe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXtrun, setIsXtrun] = useState(true);
  const [status, setStatus] = useState("");

  const getWinner = (isWinner) => {
    const winnigPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnigPattern.length; i++) {
      const [a, b, c] = winnigPattern[i];
      if (
        isWinner[a] === isWinner[b] &&
        isWinner[b] === isWinner[c] &&
        isWinner[c] === isWinner[a]
      ) {
        return isWinner[a];
      }
    }
    return null;
  };

  const handleGetSquare = (getCurrentValue) => {
    const copySquare = [...squares];
    if (getWinner(copySquare) || copySquare[getCurrentValue] !== "") return;
    copySquare[getCurrentValue] = isXtrun ? "X" : "O";
    setSquares(copySquare);
    setIsXtrun(!isXtrun);
  };
  const restartGame = () => {
    setSquares(Array(9).fill(""));
  };
  useEffect(() => {
    if (!getWinner(squares) && squares.every((items) => items !== "")) {
      setStatus("its Draw !");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Now its ${isXtrun ? "X" : "O"}`);
    }
  }, [isXtrun, squares]);
  return (
    <div className="game-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleGetSquare(0)} />
        <Square value={squares[1]} onClick={() => handleGetSquare(1)} />
        <Square value={squares[2]} onClick={() => handleGetSquare(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleGetSquare(3)} />
        <Square value={squares[4]} onClick={() => handleGetSquare(4)} />
        <Square value={squares[5]} onClick={() => handleGetSquare(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleGetSquare(6)} />
        <Square value={squares[7]} onClick={() => handleGetSquare(7)} />
        <Square value={squares[8]} onClick={() => handleGetSquare(8)} />
      </div>
      <h1>{status}</h1>
      <div>
        <button onClick={restartGame}>Restart</button>
      </div>
    </div>
  );
};

export default Tic_tac_toe;

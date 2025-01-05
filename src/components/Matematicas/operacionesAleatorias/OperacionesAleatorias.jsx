import React, { useState } from "react";
import RandomNumberSettings from "./RandomNumberSettings";
import OperationSelector from "./OperationSelector";
import OperationDisplay from "./OperationDisplay";
import ResultDisplay from "./ResultDisplay";

const OperacionesAleatorias = () => {
  const [maxNumber, setMaxNumber] = useState(10); // Maximum random number
  const [currentResult, setCurrentResult] = useState(0); // Current accumulated result
  const [nextNumber, setNextNumber] = useState(null); // Next generated number
  const [operation, setOperation] = useState(""); // Display the last operation performed
  const [showResult, setShowResult] = useState(false); // Controls visibility of the result

  const handleGenerateAndOperate = () => {
    const num = Math.floor(Math.random() * maxNumber) + 1; // Generate random number
    const isAdd = Math.random() > 0.5; // Randomly decide to add or subtract

    setNextNumber(num); // Update next number
    setOperation(isAdd ? "+" : "-"); // Update operation
    setShowResult(false); // Hide result until "Show Result" button is clicked
  };

  const handleShowResult = () => {
    if (nextNumber !== null) {
      const newResult =
        operation === "+" ? currentResult + nextNumber : currentResult - nextNumber;
      setCurrentResult(newResult); // Update the current result
      setNextNumber(null); // Reset the next number
      setShowResult(true); // Show the result
    }
  };

  return (
    <div className="container">
      <h1>Juego de Matemáticas 🤓</h1>
      <div>
        <label>
          Número máximo: 
          <input
            type="number"
            value={maxNumber}
            onChange={(e) => setMaxNumber(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        {nextNumber !== null && (
          <h2>
            {currentResult} {operation} {nextNumber}
          </h2>
        )}
        {showResult && <h2>Resultado: {currentResult}</h2>}
      </div>
      <button onClick={handleGenerateAndOperate}>Generar operación</button>
      <button onClick={handleShowResult}>Resultado</button>
    </div>
  );
};

export default OperacionesAleatorias;

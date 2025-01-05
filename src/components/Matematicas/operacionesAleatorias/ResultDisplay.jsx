import React from "react";

const ResultDisplay = ({ num1, num2, operation }) => {
  const calculateResult = () => {
    switch (operation) {
      case "sum":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num2 !== 0 ? (num1 / num2).toFixed(2) : "Infinity";
      case "sum_and_subtract":
        return `${num1} + ${num2} = ${num1 + num2}, ${num1} - ${num2} = ${num1 - num2}`;
      default:
        return 0;
    }
  };

  return (
    <div>
      <h2>Result</h2>
      <p className="result">{calculateResult()}</p>
    </div>
  );
};

export default ResultDisplay;

import React from "react";

const OperationDisplay = ({ num1, num2, operation }) => {
  if (num2 === null) {
    return <p>Click "Generate First Number" to start.</p>;
  }

  return (
    <div>
      <h2>Current Operation</h2>
      {operation === "sum_and_subtract" ? (
        <p>{`Previous: ${num1}, Next: ${num2}`}</p>
      ) : (
        <p>{`${num1} ? ${num2}`}</p>
      )}
    </div>
  );
};

export default OperationDisplay;

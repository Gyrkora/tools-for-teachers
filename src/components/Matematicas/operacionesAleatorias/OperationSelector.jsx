import React from "react";

const OperationSelector = ({ operation, setOperation }) => {
  return (
    <div>
      <label>
        Select Operation: 
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="sum_and_subtract">Sum and Subtract</option>
        </select>
      </label>
    </div>
  );
};

export default OperationSelector;

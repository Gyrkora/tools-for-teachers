import React from "react";

const RandomNumberSettings = ({ maxNumber, setMaxNumber }) => {
  return (
    <div>
      <label>
        Max Random Number: 
        <input
          type="number"
          value={maxNumber}
          onChange={(e) => setMaxNumber(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default RandomNumberSettings;

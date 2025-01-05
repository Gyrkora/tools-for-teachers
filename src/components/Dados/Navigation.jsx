import React from "react";

function Navigation({ currentSetIndex, totalSets, nextSet, previousSet }) {
  return (
    <div className="navigation-buttons">
      <button onClick={previousSet} disabled={currentSetIndex === 0}>
        Anterior
      </button>
      <button onClick={nextSet} disabled={currentSetIndex === totalSets - 1}>
        Siguiente
      </button>
      <p>
        Set actual: {currentSetIndex + 1} de {totalSets}
      </p>
    </div>
  );
}

export default Navigation;

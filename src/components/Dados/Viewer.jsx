import React, { useState } from "react";

function Viewer({ sets }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const nextSet = () => {
    if (currentSetIndex < sets.length - 1) {
      setCurrentSetIndex(currentSetIndex + 1);
    }
  };

  const previousSet = () => {
    if (currentSetIndex > 0) {
      setCurrentSetIndex(currentSetIndex - 1);
    }
  };

  return (
    <div>
      <h2>Visualización de Sets</h2>
      {sets[currentSetIndex].length === 0 ? (
        <p>Este set no tiene tarjetas.</p>
      ) : (
        <div className="card-display">
          {sets[currentSetIndex].map((card, index) => (
            <div key={index} className="card">
              <div className="card-left">
                {card.leftContent.type === "text" ? (
                  <p>{card.leftContent.content}</p>
                ) : (
                  <img src={card.leftContent.content} alt="Left" />
                )}
              </div>
              <div className="card-right">
                {card.rightContent.type === "text" ? (
                  <p>{card.rightContent.content}</p>
                ) : (
                  <img src={card.rightContent.content} alt="Right" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <button onClick={previousSet} disabled={currentSetIndex === 0}>
          Anterior
        </button>
        <button
          onClick={nextSet}
          disabled={currentSetIndex === sets.length - 1}
        >
          Siguiente
        </button>
      </div>
      <p>
        Set actual: {currentSetIndex + 1} de {sets.length}
      </p>
    </div>
  );
}

export default Viewer;

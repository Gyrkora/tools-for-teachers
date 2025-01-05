import React, { useState } from "react";
import InputForm from "./InputForm";
import CardDisplay from "./CardDisplay";

function SetManager({ onFinalize }) {
  const [sets, setSets] = useState([[]]); // Lista de sets
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const addNewSet = () => {
    setSets([...sets, []]); // Agregar un nuevo set vacío
  };

  const addCardToSet = (leftContent, rightContent) => {
    const updatedSets = [...sets];
    updatedSets[currentSetIndex].push({ leftContent, rightContent });
    setSets(updatedSets);
  };

  const finalizeConfiguration = () => {
    onFinalize(sets); // Pasar los sets al componente App
  };

  return (
    <div>
      <h2>Configurar Sets</h2>
      <div>
        <button onClick={addNewSet}>Agregar Nuevo Set</button>
        <p>Set actual: {currentSetIndex + 1} de {sets.length}</p>
      </div>
      <InputForm addCard={addCardToSet} />
      <CardDisplay cards={sets[currentSetIndex]} />
      <div>
        <button
          onClick={() => setCurrentSetIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentSetIndex === 0}
        >
          Anterior Set
        </button>
        <button
          onClick={() =>
            setCurrentSetIndex((prev) => Math.min(prev + 1, sets.length - 1))
          }
          disabled={currentSetIndex === sets.length - 1}
        >
          Siguiente Set
        </button>
      </div>
      <button onClick={finalizeConfiguration}>Finalizar Configuración</button>
    </div>
  );
}

export default SetManager;

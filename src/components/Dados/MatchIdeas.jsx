import React, { useState } from "react";
import SetManager from "./SetManager";
import Viewer from "./Viewer";

function MatchIdeas() {
  const [sets, setSets] = useState([]);
  const [isConfigured, setIsConfigured] = useState(false);

  const handleFinalizeConfiguration = (configuredSets) => {
    setSets(configuredSets);
    setIsConfigured(true);
  };

  return (
    <div className="App">
      <h1>Generador de Sets de Tarjetas</h1>
      {!isConfigured ? (
        <SetManager onFinalize={handleFinalizeConfiguration} />
      ) : (
        <Viewer sets={sets} />
      )}
    </div>
  );
}

export default MatchIdeas;

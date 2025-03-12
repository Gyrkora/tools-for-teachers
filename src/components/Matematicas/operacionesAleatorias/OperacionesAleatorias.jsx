import React, { useState, useEffect } from "react";

const OperacionesAleatorias = () => {
  const [maxNumber, setMaxNumber] = useState(10); // Número máximo aleatorio
  const [currentResult, setCurrentResult] = useState(0); // Resultado acumulado actual
  const [nextNumber, setNextNumber] = useState(0); // Próximo número generado
  const [operation, setOperation] = useState(""); // Operación actual (+ o -)
  const [score, setScore] = useState(0); // Puntuación del jugador
  const [timer, setTimer] = useState(10); // Temporizador
  const [gameOver, setGameOver] = useState(false); // Control para terminar el juego
  const [correctResult, setCorrectResult] = useState(null); // Resultado correcto actual
  const [gameStarted, setGameStarted] = useState(false); // Control para iniciar el juego

  useEffect(() => {
    let interval;
    if (timer > 0 && gameStarted && !gameOver) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && gameStarted && !gameOver) {
      // Cuando el temporizador llega a 0
      calculateResult(); // Calcular el resultado correcto
    }
    return () => clearInterval(interval);
  }, [timer, gameOver, gameStarted]);

  const handleStartGame = () => {
    setGameStarted(true);
    handleGenerateAndOperate(); // Generar la primera operación al comenzar
  };

  const handleGenerateAndOperate = () => {
    const num = Math.floor(Math.random() * maxNumber) + 1; // Generar número aleatorio
    const isAdd = Math.random() > 0.5; // Decidir aleatoriamente si sumar o restar

    setNextNumber(num); // Actualizar el próximo número
    setOperation(isAdd ? "+" : "-"); // Actualizar la operación
    setTimer(10); // Reiniciar temporizador
    setCorrectResult(null); // Limpiar el resultado previo
  };

  const calculateResult = () => {
    const newResult =
      operation === "+" ? currentResult + nextNumber : currentResult - nextNumber;
    setCorrectResult(newResult); // Actualizar el resultado correcto
  };

  const handleCorrect = () => {
    calculateResult(); // Calcular el nuevo resultado correcto
    setScore((prevScore) => prevScore + 1); // Sumar punto si se presiona "Correcto"
    setCurrentResult(correctResult); // Actualizar el resultado acumulado
    handleGenerateAndOperate(); // Generar nueva operación
  };

  const handleIncorrect = () => {
    calculateResult(); // Calcular el nuevo resultado correcto
    setScore((prevScore) => prevScore - 1); // Restar punto si se presiona "Incorrecto"
    setCurrentResult(correctResult); // Actualizar el resultado acumulado
    handleGenerateAndOperate(); // Generar nueva operación
  };

  const handleEndGame = () => {
    setGameOver(true); // Finalizar el juego
  };

  return (
    <div className="container">
      <h1>Matemáticas con <strong><span style={{ color: "#bd1212" }}>TOW</span>Spanish 🤓</strong></h1>
     
      {!gameStarted ? (
        <div>
          <h3>Presiona "Comenzar" para iniciar el juego</h3>
          <button onClick={handleStartGame}>Comenzar</button>
        </div>
      ) : !gameOver ? (
        <>
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
            <h2>Puntuación: {score}</h2>
            <h3 style={{ color: timer <= 3 ? "red" : "black" }}>
              Tiempo restante: {timer}
            </h3>
            <h2 style={{ color: "red" }}>
              {currentResult} {operation} {nextNumber} = ?
            </h2>
            {correctResult !== null && (
              <h3 style={{ color: "green" }}>Resultado correcto: {correctResult}</h3>
            )}
          </div>
          <button onClick={handleCorrect}>Correcto</button>
          <button onClick={handleIncorrect}>Incorrecto</button>

          
        </>
      ) : (
        <div>
          <h2>¡Juego terminado!</h2>
          <h3>Puntuación final: {score}</h3>
        </div>
      )}
      {gameStarted && <button onClick={handleEndGame}>Terminar</button>}
    </div>
  );
};

export default OperacionesAleatorias;

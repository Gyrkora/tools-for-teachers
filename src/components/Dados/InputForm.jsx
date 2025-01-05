import React, { useState } from "react";

function InputForm({ addCard }) {
  const [leftContent, setLeftContent] = useState("");
  const [rightContent, setRightContent] = useState("");
  const [leftType, setLeftType] = useState("text");
  const [rightType, setRightType] = useState("text");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (leftContent && rightContent) {
      addCard({ type: leftType, content: leftContent }, { type: rightType, content: rightContent });
      setLeftContent("");
      setRightContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div>
        <h3>Izquierda</h3>
        <select onChange={(e) => setLeftType(e.target.value)}>
          <option value="text">Texto</option>
          <option value="image">Imagen</option>
        </select>
        {leftType === "text" ? (
          <input
            type="text"
            value={leftContent}
            onChange={(e) => setLeftContent(e.target.value)}
            placeholder="Ingresa texto"
          />
        ) : (
          <input
            type="url"
            value={leftContent}
            onChange={(e) => setLeftContent(e.target.value)}
            placeholder="URL de la imagen"
          />
        )}
      </div>

      <div>
        <h3>Derecha</h3>
        <select onChange={(e) => setRightType(e.target.value)}>
          <option value="text">Texto</option>
          <option value="image">Imagen</option>
        </select>
        {rightType === "text" ? (
          <input
            type="text"
            value={rightContent}
            onChange={(e) => setRightContent(e.target.value)}
            placeholder="Ingresa texto"
          />
        ) : (
          <input
            type="url"
            value={rightContent}
            onChange={(e) => setRightContent(e.target.value)}
            placeholder="URL de la imagen"
          />
        )}
      </div>

      <button type="submit">Agregar Tarjeta</button>
    </form>
  );
}

export default InputForm;

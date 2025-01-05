import React from "react";

function CardDisplay({ cards }) {
  if (cards.length === 0) {
    return <p>No hay tarjetas en este set. Agrega algunas.</p>;
  }

  return (
    <div className="card-display">
      {cards.map((card, index) => (
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
  );
}

export default CardDisplay;

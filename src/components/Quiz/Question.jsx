import React from 'react';

function Question({ data, handleAnswer, selected, remainingOptions }) {
    const optionsToShow = remainingOptions || data.options.map((_, index) => index); // Mostrar todas si no hay comodín activo

    return (
        <div>
            <div className="question">{data.question}</div>
            <div className="options">
                {optionsToShow.map((index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className={`option-button ${
                            selected !== null
                                ? data.correct === index
                                    ? 'correct'
                                    : selected === index
                                    ? 'wrong'
                                    : ''
                                : ''
                        }`}
                        disabled={selected !== null}
                    >
                        {data.options[index]}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;

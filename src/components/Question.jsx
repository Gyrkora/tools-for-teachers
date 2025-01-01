import React from 'react';

function Question({ data, handleAnswer, selected }) {
    return (
        <div>
            <div className="question">{data.question}</div>
            <div className="options">
                {data.options.map((option, index) => (
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
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;

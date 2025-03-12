import React, { useState } from 'react';

function Question({ data, handleAnswer, selected, remainingOptions }) {
    const [shuffledWords, setShuffledWords] = useState([]); // Palabras desordenadas
    const [orderedWords, setOrderedWords] = useState([]); // Palabras ordenadas por el usuario
    const [isCorrect, setIsCorrect] = useState(false); // Indica si la respuesta está correcta
    const [showDragTheWord, setShowDragTheWord] = useState(false); // Controla si mostrar "Drag the Word"
    const [showConfirmation, setShowConfirmation] = useState(false); // Controla si mostrar el mensaje de confirmación

    const shuffleArray = (array) => {
        return array
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const handleShuffle = () => {
        const words = data.question.split(' ');
        setShuffledWords(shuffleArray(words));
        setOrderedWords([]); // Limpia el área de ordenación
        setIsCorrect(false); // Resetea el estado de corrección
        setShowDragTheWord(true); // Muestra el juego de arrastrar palabras
        setShowConfirmation(false); // Asegura que no hay mensaje previo
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const draggedWord = e.dataTransfer.getData('text');
        const newOrderedWords = [...orderedWords];
        newOrderedWords[index] = draggedWord;
        setOrderedWords(newOrderedWords);

        // Verifica si la oración es correcta
        if (newOrderedWords.join(' ') === data.question) {
            setIsCorrect(true);

            // Muestra mensaje de confirmación y oculta Drag the Word tras 2 segundos
            setShowConfirmation(true);
            setTimeout(() => {
                setShowDragTheWord(false); // Oculta Drag the Word
                setShowConfirmation(false); // Oculta mensaje de confirmación
            }, 5000);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragStart = (e, word) => {
        e.dataTransfer.setData('text', word);
    };

    const optionsToShow = remainingOptions
        ? remainingOptions.map((index) => data.options[index])
        : data.options;

    return (
        <div className="question-container">
            {/* <h2>Pregunta</h2> */}

            {/* Pregunta */}
            <h2>{data.question}</h2>

            {/* Botón para desordenar palabras */}
            {/* <button onClick={handleShuffle} style={{ marginTop: '20px' }}>
                Desordenar Palabras
            </button> */}

            {/* Drag the Word */}
            {showDragTheWord && (
                <div className="drag-area">
                    <h3>Arrastra las palabras para ordenar la pregunta:</h3>
                    <div className="shuffled-words">
                        {shuffledWords.map((word, index) => (
                            <span
                                key={index}
                                draggable
                                onDragStart={(e) => handleDragStart(e, word)}
                                className="draggable-word"
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                    <div
                        className={`drop-area ${isCorrect ? 'correct' : ''}`}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, orderedWords.length)}
                    >
                        {orderedWords.map((word, index) => (
                            <span key={index} className="ordered-word">
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Mensaje de confirmación */}
            {showConfirmation && (
                <div className="success-message">
                    <p>¡Oración correcta! Ahora selecciona la respuesta.</p>
                </div>
            )}

            {/* Alternativas */}
            {!showDragTheWord && !showConfirmation && (
                <div className="options">
                    {optionsToShow.map((option, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                handleAnswer(
                                    remainingOptions
                                        ? remainingOptions[index]
                                        : index
                                )
                            }
                            disabled={selected !== null}
                            className={
                                selected === index ? 'selected-option' : ''
                            }
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Question;

import React, { useState } from 'react';
import QuizGame from './QuizGame';
import { sanitizeAndParseJSON } from '../../utils/sanitizeUtils';

function QuizApp() {
    const [quizData, setQuizData] = useState([]);
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    const handleLoadQuiz = (data) => {
        try {
            const parsedData = sanitizeAndParseJSON(data);
            setQuizData(parsedData);
            setIsQuizStarted(true);
        } catch (error) {
            alert('Error al cargar las preguntas: ' + error.message);
        }
    };

    return (
        <div className="app-container">
            {!isQuizStarted ? (
                <div className="textarea-container">
                    <textarea
                        placeholder="Ingrese sus preguntas aquí en formato JSON..."
                        id="quiz-input"
                        className="textarea"
                    ></textarea>
                    <button
                        className="button"
                        onClick={() =>
                            handleLoadQuiz(document.getElementById('quiz-input').value)
                        }
                    >
                        Cargar Preguntas
                    </button>
                </div>
            ) : (
                <QuizGame quizData={quizData} />
            )}
        </div>
    );
}

export default QuizApp;

import React, { useState } from 'react';
import Quiz from './components/Quiz';
import DOMPurify from 'dompurify';

function App() {
    const [quizData, setQuizData] = useState([]);
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    const handleLoadQuiz = (data) => {
        try {
            // Sanitiza el contenido del textarea
            const sanitizedData = DOMPurify.sanitize(data);
            const parsedData = JSON.parse(sanitizedData);

            if (!Array.isArray(parsedData) || parsedData.length === 0) {
                throw new Error('El formato del JSON no es válido o está vacío.');
            }

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
                        placeholder="Ingrese sus preguntas aquí en formato JSON... " 
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
                <Quiz quizData={quizData} />
            )}
        </div>
    );
}

export default App;


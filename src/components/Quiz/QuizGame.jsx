import React, { useState } from 'react';
import Question from './Question';

function QuizGame({ quizData }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [status, setStatus] = useState('');

    const handleAnswer = (selectedIndex) => {
        if (selected !== null) return;
        setSelected(selectedIndex);

        if (quizData[currentQuestion].correct === selectedIndex) {
            setScore(score + 1);
            setStatus('¡Correcto!');
        } else {
            setStatus(
                `Incorrecto. La respuesta correcta era: ${
                    quizData[currentQuestion].options[quizData[currentQuestion].correct]
                }`
            );
        }

        setTimeout(() => {
            setSelected(null);
            setStatus('');
            if (currentQuestion + 1 < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setStatus(`Juego terminado. Tu puntuación es ${score + 1} de ${quizData.length}`);
            }
        }, 2000);
    };

    return (
        <div className="quiz-container">
            {status.startsWith('Juego terminado') ? (
                <div>{status}</div>
            ) : (
                <Question
                    data={quizData[currentQuestion]}
                    handleAnswer={handleAnswer}
                    selected={selected}
                />
            )}
            <div className="status">{status}</div>
        </div>
    );
}

export default QuizGame;

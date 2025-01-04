import React, { useState } from 'react';
import Question from './Question';
import FiftyFiftyButton from './lifelines/FiftyFiftyButton';
import AudienceHelpButton from './lifelines/AudienceHelpButton';
import ManualHintButton from './lifelines/ManualHintButton';
// import './lifelines/LifelineStyles.css';

function QuizGame({ quizData }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [status, setStatus] = useState('');
    const [remainingOptions, setRemainingOptions] = useState(null);
    const [fiftyUsed, setFiftyUsed] = useState(false);
    const [audienceHelpUsed, setAudienceHelpUsed] = useState(false);
    const [manualHintUsed, setManualHintUsed] = useState(false);
    const [manualHint, setManualHint] = useState('');
    const [audienceData, setAudienceData] = useState(null);

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
            setRemainingOptions(null);
            setAudienceData(null);
            setManualHint('');
            if (currentQuestion + 1 < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setStatus(`Juego terminado. Tu puntuación es ${score + 1} de ${quizData.length}`);
            }
        }, 2000);
    };

    const handleFiftyFifty = () => {
        if (fiftyUsed) return;
        setFiftyUsed(true);

        const correctIndex = quizData[currentQuestion].correct;
        const options = quizData[currentQuestion].options;

        const remaining = [correctIndex];
        while (remaining.length < 2) {
            const randomIndex = Math.floor(Math.random() * options.length);
            if (randomIndex !== correctIndex && !remaining.includes(randomIndex)) {
                remaining.push(randomIndex);
            }
        }

        setRemainingOptions(remaining);
    };

    const handleAudienceHelp = () => {
        if (audienceHelpUsed) return;
        setAudienceHelpUsed(true);

        const correctIndex = quizData[currentQuestion].correct;
        const optionsCount = quizData[currentQuestion].options.length;

        const percentages = Array.from({ length: optionsCount }, (_, i) =>
            i === correctIndex ? Math.random() * 50 + 50 : Math.random() * 50
        );

        const total = percentages.reduce((sum, p) => sum + p, 0);
        const normalizedPercentages = percentages.map((p) => Math.round((p / total) * 100));

        setAudienceData(normalizedPercentages);
    };

    const saveManualHint = (hint) => {
        setManualHint(hint);
        setManualHintUsed(true);
    };

    return (
        <div className="quiz-container">
            {status.startsWith('Juego terminado') ? (
                <div>{status}</div>
            ) : (
                <>
                    <Question
                        data={quizData[currentQuestion]}
                        handleAnswer={handleAnswer}
                        selected={selected}
                        remainingOptions={remainingOptions}
                    />
                    <div className="status">{status}</div>
                    <div className="tools">
                        <FiftyFiftyButton onUse={handleFiftyFifty} isDisabled={fiftyUsed} />
                        <AudienceHelpButton onUse={handleAudienceHelp} isDisabled={audienceHelpUsed} />
                        <ManualHintButton onSaveHint={saveManualHint} isDisabled={manualHintUsed} />
                    </div>
                    {manualHint && (
                        <div className="manual-hint">
                            <strong>Pista Manual:</strong> {manualHint}
                        </div>
                    )}
                    {audienceData && (
                        <div className="audience-chart">
                            {quizData[currentQuestion].options.map((option, index) => (
                                <div key={index} className="audience-bar-container">
                                    <div
                                        className="audience-bar"
                                        style={{
                                            height: `${audienceData[index]}px`,
                                            backgroundColor: '#007bff',
                                        }}
                                    >
                                        {audienceData[index]}%
                                    </div>
                                    <div className="audience-option">{option}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default QuizGame;

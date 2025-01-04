import React, { useState } from 'react';

function ManualHintButton({ onSaveHint, isDisabled }) {
    const [isInputVisible, setIsInputVisible] = useState(false); // Controla el textarea
    const [manualHint, setManualHint] = useState(''); // Almacena la pista ingresada

    const handleButtonClick = () => {
        setIsInputVisible(true); // Muestra el textarea
    };

    const handleSave = () => {
        setIsInputVisible(false); // Oculta el textarea
        onSaveHint(manualHint); // Envía la pista al componente padre
        setManualHint(''); // Resetea el textarea
    };

    return (
        <div className="manual-hint-container">
            {isInputVisible ? (
                <>
                    <textarea
                        value={manualHint}
                        onChange={(e) => setManualHint(e.target.value)}
                        placeholder="Escribe aquí tu pista..."
                        className="manual-hint-textarea"
                    />
                    <button onClick={handleSave} className="tool-button">
                        Guardar Pista
                    </button>
                </>
            ) : (
                <button
                    className={`tool-button ${isDisabled ? 'disabled' : ''}`}
                    onClick={handleButtonClick}
                    disabled={isDisabled}
                >
                    Ingresar Pista Manual
                </button>
            )}
        </div>
    );
}

export default ManualHintButton;

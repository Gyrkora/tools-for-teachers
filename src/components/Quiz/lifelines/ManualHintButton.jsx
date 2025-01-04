import React, { useState } from 'react';

function ManualHintButton({ onSaveHint, isDisabled }) {
    const [isModalVisible, setIsModalVisible] = useState(false); // Controla la visibilidad del modal
    const [manualHint, setManualHint] = useState(''); // Almacena la pista ingresada

    const handleButtonClick = () => {
        setIsModalVisible(true); // Muestra el modal
    };

    const handleSave = () => {
        setIsModalVisible(false); // Cierra el modal
        onSaveHint(manualHint); // Envía la pista al componente principal
        setManualHint(''); // Limpia el input
    };

    const handleCancel = () => {
        setIsModalVisible(false); // Cierra el modal sin guardar
        setManualHint(''); // Limpia el input
    };

    return (
        <>
            <button
                className={`tool-button ${isDisabled ? 'disabled' : ''}`}
                onClick={handleButtonClick}
                disabled={isDisabled}
            >
                Ingresar Pista Manual
            </button>

            {/* Modal para ingresar la pista */}
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Escribe tu pista</h3>
                        <textarea
                            value={manualHint}
                            onChange={(e) => setManualHint(e.target.value)}
                            placeholder="Escribe aquí tu pista..."
                            className="manual-hint-textarea"
                        />
                        <div className="modal-actions">
                            <button onClick={handleSave} className="tool-button">
                                Guardar Pista
                            </button>
                            <button onClick={handleCancel} className="tool-button cancel">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ManualHintButton;

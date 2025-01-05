import React from 'react';

function ManualHintButton({ onSaveHint, isDisabled }) {
    const handleButtonClick = () => {
        // Abrir una nueva ventana con un formulario para ingresar la pista
        const popup = window.open(
            '',
            'IngresarPistaManual',
            'width=400,height=300,resizable=no,scrollbars=no'
        );

        // Crear contenido HTML para la ventana emergente
        popup.document.write(`
            <html>
            <head>
                <title>Ingresar Pista</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    textarea {
                        width: 90%;
                        height: 100px;
                        margin-bottom: 20px;
                        padding: 10px;
                        font-size: 1em;
                        border: 2px solid #007bff;
                        border-radius: 5px;
                        resize: none;
                    }
                    button {
                        padding: 10px 20px;
                        font-size: 1em;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                    .save-button {
                        background-color: #007bff;
                        color: white;
                    }
                    .cancel-button {
                        background-color: #ff4d4d;
                        color: white;
                        margin-left: 10px;
                    }
                </style>
            </head>
            <body>
                <h3>Escribe tu pista</h3>
                <textarea id="hintInput" placeholder="Escribe aquí tu pista..."></textarea>
                <div>
                    <button class="save-button" id="saveHint">Guardar Pista</button>
                    <button class="cancel-button" id="cancelHint">Cancelar</button>
                </div>
                <script>
                    // Guardar la pista y cerrar la ventana
                    document.getElementById('saveHint').addEventListener('click', () => {
                        const hint = document.getElementById('hintInput').value;
                        window.opener.postMessage({ hint }, '*');
                        window.close();
                    });

                    // Cancelar la acción y cerrar la ventana
                    document.getElementById('cancelHint').addEventListener('click', () => {
                        window.close();
                    });
                </script>
            </body>
            </html>
        `);
    };

    return (
        <button
            className={`tool-button ${isDisabled ? 'disabled' : ''}`}
            onClick={handleButtonClick}
            disabled={isDisabled}
        >
            Ingresar Pista Manual
        </button>
    );
}

export default ManualHintButton;

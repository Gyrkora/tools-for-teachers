import React from 'react';

function AudienceHelpButton({ onUse, isDisabled }) {
    const handleClick = () => {
        onUse();
    };

    return (
        <button
            className={`tool-button ${isDisabled ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={isDisabled}
        >
            Ayuda del Público
        </button>
    );
}

export default AudienceHelpButton;

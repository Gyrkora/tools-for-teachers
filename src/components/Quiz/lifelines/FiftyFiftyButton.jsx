import React from 'react';

function FiftyFiftyButton({ onUse, isDisabled }) {
    const handleClick = () => {
        onUse();
    };

    return (
        <button
            className={`tool-button ${isDisabled ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={isDisabled}
        >
            50/50
        </button>
    );
}

export default FiftyFiftyButton;

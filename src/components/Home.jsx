import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="app-container">
            <h1>Herramientas Pedagógicas</h1>
            <div className="tools">
                <Link to="/quiz" className="tool-button">
                    Quién Quiere Ser Millonario
                </Link>
                <Link to="/match-ideas" className="tool-button">
                    Mezcla ideas
                </Link>
                <Link to="/operaciones-aleatorias" className="tool-button">
                    Operaciones Aleatorias
                </Link>
                <button className="tool-button" disabled>
                    Otras Herramientas (Próximamente)
                </button>
            </div>
        </div>
    );
}

export default Home;

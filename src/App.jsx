import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizApp from './components/Quiz/QuizApp';
import MatchIdeas from './components/Dados/MatchIdeas';
import OperacionesAleatorias from './components/Matematicas/operacionesAleatorias/OperacionesAleatorias';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizApp />} />
            <Route path="/match-ideas" element={<MatchIdeas />} />
            <Route path="/operaciones-aleatorias" element={<OperacionesAleatorias />} />
        </Routes>
    );
}

export default App;

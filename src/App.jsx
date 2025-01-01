import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizApp from './components/Quiz/QuizApp';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizApp />} />
        </Routes>
    );
}

export default App;

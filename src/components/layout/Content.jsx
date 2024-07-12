import React from 'react';
import './Content.css';
import { Routes, Route } from 'react-router-dom'; // Importe o Routes e o Route
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';

const Content = () => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </main>
);

export default Content;

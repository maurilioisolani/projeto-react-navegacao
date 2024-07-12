import React from 'react';
import './Content.css';
import { Routes, Route } from 'react-router-dom'; // Importe o Routes e o Route
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';

const Content = () => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/param/:id" element={<Param />} />
        </Routes>
    </main>
);

export default Content;

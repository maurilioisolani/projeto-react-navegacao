import React from "react";
import './Menu.css'
import {Link} from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="about">Sobre</a></li>
            </ul>
        </nav>
    </aside>
)

export default Menu
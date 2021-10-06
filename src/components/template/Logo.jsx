import './Logo.css'
import React from 'react'
import logo from '../../assets/imgs/logo.png'

export default props => 
    <aside className="logo">
        <a href="/">
            <img src={logo} alt="Logo Cod3r" />
        </a>
    </aside>
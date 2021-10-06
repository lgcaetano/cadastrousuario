import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import Logo from '../components/template/Logo'
import Home from '../components/template/home/Home'
import Footer from '../components/template/Footer'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import Nav from '../components/template/Nav'


export default props =>
    <HashRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes></Routes>
            <Footer></Footer>
        </div>
    </HashRouter>


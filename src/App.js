import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Home from './components/content/home';
import Projects from './components/content/projects';
import { Fragment } from 'react';

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>

        </>
    )
}

export default App;

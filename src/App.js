import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/navbar';
import Home from './components/content/home';
import Projects from './components/content/projects';
import ContactForm from './components/contactPage/contact';
import ThankYou from './components/contactPage/thankYou';
import { Fragment } from 'react';

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<ContactForm/>}/>
                <Route path='/thank-you' element={<ThankYou/>}/>
            </Routes>

        </>
    )
}

export default App;

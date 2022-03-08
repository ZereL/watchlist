import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Launchlist from '../../pages/Launchlist';
import Home from '../../pages/Home';
import './index.scss'

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='launchlist' element={<Launchlist />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

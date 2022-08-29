import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';

const RoutesApp = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
)

export default RoutesApp;
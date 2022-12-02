import { NavBar } from 'Components';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'Routes';
import 'Styles/globalStyles.scss';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes />
        </BrowserRouter>
    );
};

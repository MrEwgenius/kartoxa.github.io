import React from 'react';
import Button, { ButtonTypes } from './components/Button/Button';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Router from './pages/Router';

function App() {
    return (
        <div className="App">
            <Router />
        </div>
    );
}

export default App;

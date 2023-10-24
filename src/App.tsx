import React from 'react';
import Router from './pages/Router';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <div className="App">
                <Router />

        </div>
    );
}

export default App;

import React from 'react';
import Button, { ButtonTypes } from './components/Button/Button';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Button
                type={ButtonTypes.Primary}
                title={'клац'}
                onClick={() => { }}

            />
            <Home/>
        </div>
    );
}

export default App;

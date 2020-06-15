import React from 'react';
import './App.css';
import Products from './components/Products';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1> Frontend Webshop </h1>
        </header>
        <main>
            <Products />
        </main>
        </div>
    );
}

export default App;

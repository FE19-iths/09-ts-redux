import React, { useState } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Product from './models/Product';

function App() {
    const [products/*, setProducts*/] = useState(getDefaultProducts());
    return (
        <div className="App">
        <header className="App-header">
            <h1> Frontend shop </h1>
        </header>
        <main>
            <h2> Buy a new language! </h2>
            <ProductGrid products={products} />
        </main>
        </div>
    );
}

function getDefaultProducts(): Product[] {
    return [
        { id: 0, name: 'JavaScript', price: 5000 },
        { id: 1, name: 'TypeScript', price: 15000 },
        { id: 2, name: 'Cobol', price: 12000000 },
        { id: 3, name: 'CSS', price: 150 },
    ];
}

export default App;

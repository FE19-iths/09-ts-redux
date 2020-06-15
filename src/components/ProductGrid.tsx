import React from 'react';
import Product from '../models/Product';
import ProductCard from './ProductCard';

type Props = {
    products: Product[]
}
const ProductGrid = ({ products }: Props) => {
    return (
        <div className="product-grid">
            {products.map(p => (
                <ProductCard key={p.id} p={p} />
            ))}
        </div>
    )
}

export default ProductGrid;

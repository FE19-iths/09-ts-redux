import React from 'react';
import Product from '../models/Product';

type Props = { p: Product }
const ProductCard = ({ p }: Props) => (
    <div>
        {p.name} is {p.price}
        <br />
        <button> Add to cart </button>
    </div>
)

export default ProductCard;

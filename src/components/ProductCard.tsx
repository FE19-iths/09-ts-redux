import React from 'react';
import { useDispatch } from 'react-redux';
import Product from '../models/Product';
import { actions } from '../features/cart';

type Props = { p: Product }
const ProductCard = ({ p }: Props) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(actions.addToCart(p));
    }
    return (
        <div>
            {p.name} is {p.price}
            <br />
            <button onClick={handleClick}> Add to cart </button>
        </div>
    )
}

export default ProductCard;

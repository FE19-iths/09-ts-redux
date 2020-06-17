import React from 'react'
import { useSelector } from 'react-redux';
import Product from '../models/Product';

type CartState = {
    cart: Product[]
}
const ViewCart = () => {
    const cart = useSelector((state: CartState) => state.cart);
    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    {item.name}: {item.price}
                </div>
            ))}
        </div>
    )
}

export default ViewCart;

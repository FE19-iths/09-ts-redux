import { createAction, createReducer } from '@reduxjs/toolkit';
import Product from '../models/Product';

// all cart actions
const addToCart = createAction<Product>('add product to cart');

const actions = { addToCart };


// reducer
const initialState: Product[] = [];
const reducer = createReducer(initialState, {
    [addToCart.type]: (state, action) => [...state, action.payload]
})

export { actions, reducer };

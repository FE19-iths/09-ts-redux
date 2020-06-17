import { createAction, createReducer } from '@reduxjs/toolkit';

// all user actions
const nameChange = createAction<string>('user name change');

// group actions in an object, easier to export
const actions = { nameChange };


// reducer
const initialState = '';
const reducer = createReducer(initialState, {
    [nameChange.type]: (state, action) => action.payload
})


export { actions, reducer };

import { combineReducers } from 'redux';
import { reducer as userReducer } from './user';
import { reducer as cartReducer } from './cart';

// state == { user }
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export { rootReducer };

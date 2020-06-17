import { combineReducers } from 'redux';
import { reducer as userReducer } from './user';

// state == { user }
const rootReducer = combineReducers({
    user: userReducer
})

export { rootReducer };

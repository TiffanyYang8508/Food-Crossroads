import { combineReducers } from 'redux';
import shopRudcer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
    shop: shopRudcer,
});

export default rootReducer;
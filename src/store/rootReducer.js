import { combineReducers } from "redux";
import { shoesReducer } from "./shoes/reducer";

export const rootReducer = combineReducers({
    shoesRedux: shoesReducer
});
import { combineReducers } from "redux";
import { collectionsReducer } from "./collections/reducer";

export const rootReducer = combineReducers({
    collectionsRedux: collectionsReducer
});
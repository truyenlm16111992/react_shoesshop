import { LISTVIEW_UPDATE } from "./actionType";

const initialState = {
    listView: []
}
export const collectionsReducer = (state = initialState, action) => {
    console.log("Action Reducer", action);
    switch (action.type) {
        case LISTVIEW_UPDATE:
            state.listView = { ...state.listView, listView: action.payload }
            return state;;
        default:
            return state;
    }
}
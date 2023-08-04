import { LISTVIEW_UPDATE } from "./actionType";

export const collectionsReduxActions = {
    updateListView: (payload)=>{
        return {
            type: LISTVIEW_UPDATE,
            payload
        }
    }
};
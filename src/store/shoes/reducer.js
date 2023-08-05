import { LISTVIEWOPTION_UPDATE, ISDETAILMODALOPEN_UPDATE, DETAILPRODUCT_VIEW, ISCARTMODALOPEN_SHOW, CARTADD_HANDLE, CARTDELETE_HANDLE, CARTQUANTITY_HANDLE, CARTQUANTITY_UPDATE, CARTEMPTY_HANDLE } from "./actionType";

const initialState = {
    listViewOption: {
        page: 1,
        pageSize: 4,
    },
    isDetailModalOpen: false,
    detailProduct: {},
    isCartModalOpen: false,
    myCart: []
}
export const shoesReducer = (state = initialState, action) => {
    const { payload } = action;
    const { myCart } = state;
    switch (action.type) {
        case LISTVIEWOPTION_UPDATE:
            return { ...state, listViewOption: { ...action.payload } };
        case ISDETAILMODALOPEN_UPDATE:
            return { ...state, isDetailModalOpen: action.payload };
        case DETAILPRODUCT_VIEW:
            return { ...state, detailProduct: { ...action.payload } };
        case ISCARTMODALOPEN_SHOW:
            return { ...state, isCartModalOpen: action.payload };
        case CARTADD_HANDLE: {
            const { product, quantity } = payload;
            const indexItem = myCart.findIndex(e => e.id === product.id);
            if (indexItem !== -1) {
                myCart[indexItem].cartQuantity += quantity;
            } else {
                product["cartQuantity"] = quantity;
                myCart.push(product);
            }
            return { ...state, myCart: [...myCart] };
        }
        case CARTDELETE_HANDLE:
            return { ...state, myCart: [...myCart.filter(e => e.id !== payload)] };
        case CARTQUANTITY_HANDLE: {
            const { id, quantity } = payload;
            const indexItem = myCart.findIndex(e => e.id === id);
            myCart[indexItem].cartQuantity = myCart[indexItem].cartQuantity + quantity || 1;
            return { ...state, myCart: [...myCart] };
        }
        case CARTQUANTITY_UPDATE:
            const { id, quantity } = payload;
            const indexItem = myCart.findIndex(e => e.id === id);
            myCart[indexItem].cartQuantity = quantity || 1;
            return { ...state, myCart: [...myCart] };
        case CARTEMPTY_HANDLE:
            return { ...state, myCart: [] };
        default:
            return state;
    }
}
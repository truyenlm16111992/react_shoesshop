import { LISTVIEWOPTION_UPDATE, ISDETAILMODALOPEN_UPDATE, DETAILPRODUCT_VIEW, ISCARTMODALOPEN_SHOW, CARTADD_HANDLE, CARTDELETE_HANDLE, CARTQUANTITY_HANDLE, CARTQUANTITY_UPDATE } from "./actionType";

export const shoesReduxActions = {
    handleListViewOption: (payload) => {
        return {
            type: LISTVIEWOPTION_UPDATE,
            payload
        }
    },
    handleDetailModalOpen: (payload) => {
        return {
            type: ISDETAILMODALOPEN_UPDATE,
            payload
        }
    },
    handleDetailProduct: (payload) => {
        return {
            type: DETAILPRODUCT_VIEW,
            payload
        }
    },
    handleCartModal: (payload) => {
        return {
            type: ISCARTMODALOPEN_SHOW,
            payload
        }
    },
    handleCartAdd: (payload) => {
        return {
            type: CARTADD_HANDLE,
            payload
        }
    },
    handleCartDelete: (payload) => {
        return {
            type: CARTDELETE_HANDLE,
            payload
        }
    },
    handleCartQuantity: (payload) => {
        return {
            type: CARTQUANTITY_HANDLE,
            payload
        }
    },
    handleUpdateCartQuantity: (payload) => {
        return {
            type: CARTQUANTITY_UPDATE,
            payload
        }
    },
};
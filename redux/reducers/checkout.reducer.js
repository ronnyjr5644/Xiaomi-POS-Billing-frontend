import types from 'redux/types';

const INIT_STATE = {
    itemInCart: [

    ],
    modal: false,
};

const   checkoutReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.checkout.ADD_ITEM:
            return {
                ...state,
                itemInCart: [ ...state.itemInCart, action.payload ],
            };
        case types.checkout.REMOVE_ITEM:
            return {
                ...state,
                itemInCart: state?.itemInCart?.filter((e) => e.id !== action.payload.id),
            };
        case types.checkout.TOGGLE_MODAL:
            return {
                ...state,
                modal: action.payload,
            };
        default:
            return state;
    }
};

export default  checkoutReducer;

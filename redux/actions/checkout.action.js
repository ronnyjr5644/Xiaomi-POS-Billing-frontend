import types from 'redux/types';

const addItem = (obj) => ({
    type: types.checkout.ADD_ITEM,
    payload: obj,
});

const removeItem = (obj) => ({
    type: types.checkout.REMOVE_ITEM,
    payload: obj,
});
const checkoutModal = (obj) => ({
    type: types.checkout.TOGGLE_MODAL,
    payload: obj,
});

const CheckoutActions = {
    addItem,
    removeItem,
    checkoutModal,
};

export default CheckoutActions;

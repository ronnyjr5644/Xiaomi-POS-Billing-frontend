import types from 'redux/types';

const setModalObj = (obj) => ({
    type: types.modal.UPDATE_MODAL,
    payload: obj,
});

const clearModalObj = () => ({
    type: types.modal.CLEAR_MODAL,
});

const SnackbarActions = {
    setModalObj,
    clearModalObj,
};

export default SnackbarActions;

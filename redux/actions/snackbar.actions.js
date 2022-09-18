import types from 'redux/types';

const setSnackbarObj = (obj) => ({
    type: types.snackbar.SET_SNACKBAR_MESSAGE,
    payload: obj,
});

const clearSnackbarObj = () => ({
    type: types.snackbar.CLEAR_SNACKBAR_MESSAGE,
});

const SnackbarActions = {
    setSnackbarObj,
    clearSnackbarObj,
};

export default SnackbarActions;

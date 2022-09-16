import types from 'redux/types';

const INIT_STATE = {
    snackbarobj: {
        message: '',
        type: '',
        open: false,
    },
};

const snackbarReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.snackbar.SET_SNACKBAR_MESSAGE:
            return {
                ...state,
                snackbarobj: action.payload,
            };
        case types.snackbar.CLEAR_SNACKBAR_MESSAGE:
            return INIT_STATE;
        default:
            return state;
    }
};

export default snackbarReducer;

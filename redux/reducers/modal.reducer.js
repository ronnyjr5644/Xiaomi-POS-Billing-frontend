import types from 'redux/types';

const INIT_STATE = {
    modal: {
        data: {

        },
        type: '', // SIGNIN SINGUP
        open: false,
    },
};

const modalReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case types.modal.UPDATE_MODAL:
            return {
                ...state,
                modal: action.payload,
            };
        case types.modal.CLEAR_MODAL:
            return INIT_STATE;
        default:
            return state;
    }
};

export default modalReducer;

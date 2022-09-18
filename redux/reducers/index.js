import { combineReducers } from 'redux';
import checkoutReducer from './checkout.reducer';
import modalReducer from './modal.reducer';
import snackbarReducer from './snackbar.reducer';

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import modalReducer from './modal.reducer';
import snackbarReducer from './snackbar.reducer';

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
    modal: modalReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import snackbarReducer from './snackbar.reducer';

const rootReducer = combineReducers({
    snackbar: snackbarReducer,
});

export default rootReducer;

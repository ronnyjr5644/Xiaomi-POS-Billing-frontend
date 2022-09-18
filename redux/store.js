import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

const initMiddleware = [];
let composeEnhancer = compose;

if (typeof window !== 'undefined') {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancer(applyMiddleware(...initMiddleware));

const store = createStore(rootReducer, {}, middleware);
export default store;

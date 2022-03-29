import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
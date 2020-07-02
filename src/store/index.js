import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { yugioh, user, deck } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({yugioh, user, deck})
const middlewares = applyMiddleware(thunk)
const store = createStore(reducers, composeEnhancers(
  middlewares
));

export default store
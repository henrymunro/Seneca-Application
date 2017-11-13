import { applyMiddleware, createStore, compose } from "redux";

import logger from "redux-logger";

import reducer from "./reducers";

const middleware = applyMiddleware(logger);

export default createStore(reducer, middleware);

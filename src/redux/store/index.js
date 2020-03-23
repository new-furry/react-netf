/**
 * Redux Store
 */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "../reducers";
export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(),
        )
    );

    store.subscribe(() => {
       store.getState();
    });

    return store;
}

export const store = configureStore();

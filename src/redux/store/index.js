/**
 * Redux Store
 */
import { createStore } from "redux";
import reducers from "../reducers";
export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers", () => {
            const nextRootReducer = require("../reducers");
            store.replaceReducer(nextRootReducer);
        });
    }

    store.subscribe(() => {
       store.getState();
    });

    return store;
}

export const store = configureStore();

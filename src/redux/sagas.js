/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

import { MainSaga } from "./ducks/mainpage";

export default function* rootSaga() {
    yield all([
        MainSaga(),
    ]);
}
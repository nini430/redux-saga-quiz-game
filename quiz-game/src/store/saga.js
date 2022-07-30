import {all} from "redux-saga/effects"
import gameSaga from "./saga/game"
import startGameSaga from "./saga/gameInit"

export default function* rootSaga() {
    yield all([startGameSaga(),gameSaga()])
}
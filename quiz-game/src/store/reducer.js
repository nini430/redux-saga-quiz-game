import {combineReducers} from "redux"
import gameReducer from "./slices/gameInit"
import quizReducer from "./slices/game";

const rootReducer=combineReducers({
    gameState:gameReducer,
    quizState:quizReducer

})

export default rootReducer;
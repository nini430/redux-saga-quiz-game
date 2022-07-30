import {fork, take,call,put, cancel} from "redux-saga/effects"
import { cancelGame, startGame } from "../slices/gameInit"
import { fetchQuizFromApi } from "../../utils/api";
import { fetchQuestionsFail, fetchQuestionsSuccess } from "../slices/game";




function* fetchQuestionsSaga() {
    try{

   const data= yield call(fetchQuizFromApi);
   yield put(fetchQuestionsSuccess(data));
    }catch(err) {
        yield put(fetchQuestionsFail("There was an error fetching the questions"))
    }
}

function* cancelfetchedQuiz(forkedSaga) {
    while(true) {
        yield take(cancelGame.type);
        yield cancel(forkedSaga)
    }
}

export default function* startGameSaga() {
    while(true) {
        yield take(startGame.type);
        const forkedSaga=yield fork(fetchQuestionsSaga)
        yield fork(cancelfetchedQuiz,forkedSaga)
    }
}

import {createSlice} from "@reduxjs/toolkit"

const initialState={
    questions:[],
    error:null,
    score:null,
    currentQuestionIndex:null,
    answers:[]
}

const gameSlice=createSlice({
    name:"game",
    initialState,
    reducers:{
        fetchQuestionsSuccess:(state,action)=>{
            state.questions=action.payload;
            state.score=0;
            state.currentQuestionIndex=0;
            state.answers=[]
        },
        fetchQuestionsFail:(state,action)=>{
            state.error=action.payload;
        },
        answerQuestion:(state,action)=>{
            const currentQuestion=state.questions[state.currentQuestionIndex];
            state.score+=currentQuestion.correct_answer===action.payload.answer?1:0;
            state.answers.push({
                question:currentQuestion.question,
                answer:action.payload.answer,
                correct_answer:currentQuestion.correct_answer,
                isCorrect:action.payload.answer===currentQuestion.correct_answer
            })
        },
        nextQuestion:(state,action)=>{
            state.currentQuestionIndex+=1;
        }
    }
})


export const {fetchQuestionsFail,fetchQuestionsSuccess,answerQuestion,nextQuestion}=gameSlice.actions;

export default gameSlice.reducer;
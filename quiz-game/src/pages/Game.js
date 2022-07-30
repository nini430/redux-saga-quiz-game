import React,{useState,useEffect}from 'react'
import {useSelector,useDispatch} from "react-redux"
import { Button } from '../components/Button';
import { answerQuestion } from '../store/slices/game';
import { finishGame } from '../store/slices/gameInit';

export const Game = () => {
  const [timeLeft,setTimeLeft]=useState(60);
  const dispatch=useDispatch();
  const currentQuestion=useSelector(store=>store.quizState.questions[store.quizState.currentQuestionIndex].question);
  const score=useSelector(store=>store.quizState.score);
  const currentQuestionIndex=useSelector(store=>store.quizState.currentQuestionIndex);
  const answerQuestionnaire=(answer)=>{
    dispatch(answerQuestion({answer}));
  }
  const endGameHandler=()=>{
    dispatch(finishGame())
  }
  useEffect(()=>{
   const interval=setInterval(()=>setTimeLeft(p=>p-1),1000);
   return ()=>{
    clearInterval(interval)
   }
  },[])
  return (
    <>
    <div className="flex flex-col items-center relative">
      <p className="h-20 w-20 flex justify-center items-center border-8 border-purple-500 rounded-full my-4 text-3xl text-purple-500">{timeLeft}</p>
      <p className="absolute top-4 left-4 text-2xl text-purple-500">{score} </p>
      <p className="absolute top-4 right-4 text-2xl text-purple-500">{currentQuestionIndex+1}/10</p>
      <p className="bg-white shadow rounded p-7 mb-10" dangerouslySetInnerHTML={{__html:currentQuestion}}></p>
      <div className="flex justify-between w-96">
      <Button onClick={()=>answerQuestionnaire("True")}>true</Button>
      <Button onClick={()=>answerQuestionnaire("False")}>false</Button>
      </div>
     
      
    </div>
    <div className="absolute bottom-4 right-4">
     <Button type="error" onClick={endGameHandler}>Quit Game</Button>
     </div>
    </>
  )
}

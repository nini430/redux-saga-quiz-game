import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Button } from '../components/Button';
import { restartGame } from '../store/slices/gameInit'


export const EndGame = () => {
  const dispatch=useDispatch();
  const restartHandler=()=>{
    dispatch(restartGame())
  }
  const answers=useSelector(store=>store.quizState.answers)
  const score=useSelector(store=>store.quizState.score)
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-purple-500 my-4">Game Over!</h1>
      <p className="text-2xl mb-3">Your score was  <span className="text-purple-500">{score}</span>/10</p>
      <Button onClick={restartHandler}>Restart Game</Button>
      <div className="mt-4 p-4">
      {answers.map(answer=>(
        <div className="border-b-2 border-purple-500 flex justify-between bg-white">
          <p className="p-2 mr-2" dangerouslySetInnerHTML={{__html:answer.question}}></p>
        <span className={`p-2 ${answer.isCorrect?"text-green-500":"text-red-500"}`}>{answer.answer}</span>
        </div>
        
      ))}
      </div>
     
    </div>
  )
}

import React from 'react'
import { StartGame } from './StartGame'
import { Fetching } from "./Fetching";
import { Game } from "./Game";
import { EndGame } from "./EndGame";
import {useSelector} from "react-redux"
import * as stages from "../utils/constants"


export const MainPage = () => {
      const {stage:currentStage}=useSelector(store=>store.gameState);
      let displayPage;
      switch(currentStage) {
        case stages.START_GAME:
          displayPage=<StartGame/>
          break;
        case stages.FETCHING_GAME:
          displayPage=<Fetching/>
          break;
        case stages.GAME:
          displayPage=<Game/>
          break;
        case stages.END_GAME:
          displayPage=<EndGame/>
        default:
          break;
      }
  return (
    <div className="font-mono min-h-screen bg-purple-50">
      <h1 className="bg-purple-500 text-white p-4 text-2xl text-center uppercase">Redux Saga quiz Game</h1>
      {displayPage}
    </div>
  )
}

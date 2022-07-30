import React,{useState} from "react";
import {useDispatch} from "react-redux"
import { Button } from "../components/Button";
import { startGame } from "../store/slices/gameInit";

export const StartGame = () => {
    const dispatch=useDispatch();
    const [username,setUsername]=useState("");
    const startGameHandler=(e)=>{
      e.preventDefault();
      dispatch(startGame({username}))
    }
  return <div className="flex flex-col justify-center items-center mt-80">
    <input className="py-2 px-4 outline-none rounded shadow w-64 mb-6" placeholder="type your name" type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
    <Button onClick={startGameHandler}>Start Game</Button>
  </div>;
};

import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../App.css"

const MatchPage = () => {

const location = useLocation();
const { teamAName, teamBName } = location.state || { teamAName: '', teamBName: '' };
const pointsWin=21;
const[ScoreOfplayer1, setScoreOfPlayer1]=useState(0);
const[ScoreOfplayer2, setScoreOfPlayer2]=useState(0);


if (ScoreOfplayer1 >= pointsWin && ScoreOfplayer1 - ScoreOfplayer2 >= 2) {
  return <div className='text-center m-auto text-5xl text-red-500'>{`Winner is ${teamAName}`}</div>
} else if (ScoreOfplayer2 >= pointsWin && ScoreOfplayer2 - ScoreOfplayer1 >= 2) {
  return <div className='text-center m-auto text-5xl text-red-500'> {`Winner is ${teamBName}`}</div>
}


const increment1=()=>{
  setScoreOfPlayer1(ScoreOfplayer1 + 1);
}

const increment2=()=>{
  setScoreOfPlayer2(ScoreOfplayer2 + 1);
}

return (
<div id="banner">
    <div className="m-4 h-1/3 align-items-center p-4 mt-36 grid gap-4 grid-cols-6 sm:grid-cols-12 sm:mt-4">
      <>
      <div className="col-span-4 min-h-[100px] rounded-lg bg-stone-700 sm:col-span-10">
        <p className='text-center p-6 text-4xl text-stone-200'>{teamAName}</p>
      </div>
      <button className="col-span-2 min-h-[100px] rounded-lg bg-stone-700 sm:col-span-2">
      <p className='text-center p-6 text-4xl text-stone-200' onClick={increment1}>{ScoreOfplayer1}</p>
      </button>
      </>
      <>
      <div className="col-span-4 min-h-[100px] rounded-lg bg-stone-700 sm:col-span-10">
      <p className='text-center p-6 text-4xl text-stone-200'>{teamBName}</p>
      </div>
      <div className="col-span-2 min-h-[100px] rounded-lg bg-stone-700 sm:col-span-2">
        <p className='text-center p-6 text-4xl text-stone-200' onClick={increment2}>{ScoreOfplayer2}</p>
      </div>
      </>
    </div>
    </div>
  )
}

export default MatchPage


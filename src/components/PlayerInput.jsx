import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const PlayerInput = () => {

  const [teamAName, setTeamAName] = useState('');
  const [teamBName, setTeamBName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (teamAName && teamBName) {
      // Navigate to the  matchpage with team names as state
      navigate('/matchpage', { state: { teamAName, teamBName } });
    }
  };


  return (
    <>
      <div id= "banner">
      <div id="container">
      <form 
      onSubmit={handleSubmit}
      id="form"
      >
        <div id='input-form'>
          <label id='label'>
            Team A Name:
            </label>
            <input
              id='input'
              type="text"
              value={teamAName}
              onChange={(e) => setTeamAName(e.target.value)}
              required
            />
        </div>
        <div id='input-form' >
          <label id='label'>
            Team B Name:
            </label>
            <input
              id="input"
              type="text"
              value={teamBName}
              onChange={(e) => setTeamBName(e.target.value)}
              required
            />
        </div>
        
        <button id = 'btn' type="submit">Submit</button>
    
      </form>
      </div>
      </div>









    {/* <div className="grid absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('https://images.pexels.com/photos/8007157/pexels-photo-8007157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      <h1 className='text-center w-auto text-3xl bg-gradient-to-r from-blue-500 to-blue-300 sm:text-4xl p-5'>Enter Team Names</h1>
      <div className='w-full mb-36  p-8 rounded-lg mt-28  bg-slate-800'>
      <form 
      onSubmit={handleSubmit}
      className=' sm:mt-28 mx-auto grid items-center gap-4 sm:grid-cols-2 mt-8'>
        <div className='w-inherit  min-h-[100px] rounded-lg bg-gray-400 '>
          <label className='mt-2 sm:gap-2 grid items-center justify-items-center'>
            Team A Name:
            <input
            className='w-5/6 focus:outline-none text-2xl rounded-sm'
              type="text"
              value={teamAName}
              onChange={(e) => setTeamAName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='w-inherit gap-2 min-h-[100px] rounded-lg bg-gray-400 ' >
          <label className='mt-2 grid items-center justify-items-center'>
            Team B Name:
            <input
            className='w-5/6 rounded-sm text-2xl focus:outline-none'
              type="text"
              value={teamBName}
              onChange={(e) => setTeamBName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='grid h-14 ml-28 mr-28 sm:ml-36 sm:mr-36 text-center rounded-lg bg-blue-400'>
        <button className = "text-center" type="submit">Submit</button>
      </div>
      </form>
      </div>

      {submitted && (
        <div>
          <h2>Team A: {teamAName}</h2>
          <h2>Team B: {teamBName}</h2>
        </div>
      )}
    </div> */}
    </>
  );
};

export default PlayerInput
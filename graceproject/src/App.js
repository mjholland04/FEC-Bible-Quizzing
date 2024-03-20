import React, { useState } from 'react';
//import {myFunctions} from './components/mergedCode.jsx';
import { handleCorrectButtonClick,handleIncorrectButtonClick, startUp } from './components/practicec.jsx';
//import handleCorrectButtonClick from './mergedCode.jsx';
// import { QuizMatch, detectFouls, handleFoulButtonClick, handleCorrectButtonClick, handleIncorrectButtonClick, handleBonusButtonClick, handleTimeoutButtonClick } from './components/mergedCode.jsx';
// import * as functions from './components/mergedCode.jsx'
//Uncomment below for fancy look on site
import './App.css';

// const{
//     QuizMatch,
//     detectFouls,
//     handleBonusButtonClick,
//     handleCorrectButtonClick,
//     handleFoulButtonClick,
//     handleIncorrectButtonClick,
//     handleTimeoutButtonClick,
// } = myFunctions

const TeamScoreboard = ({ teamName }) => {
  const [score, setScore] = useState(0);
  const [foulCount, setFoulCount] = useState(0);

  const handleScoreChange = (value) => {
    setScore(score + value);
  };

  const handleFoul = () => {
    setFoulCount(foulCount + 1);
  };

  const teamA = startUp()[0]
  const teamB = startUp()[1]
  console.log(teamA)

  return (
    <div>
      <h2 onLoad={()=> startUp()}>{teamName} Score: {score}</h2>
      <button onClick={() => handleCorrectButtonClick("A")}>+10</button>
      <button onClick={() => handleIncorrectButtonClick("A")}>-10</button>
      <button onClick={() => handleScoreChange(20)}>+20</button>
      <button onClick={() => handleScoreChange(-20)}>-20</button>
      <button onClick={handleFoul}>Foul</button>
      <p>Foul Count: {foulCount}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <TeamScoreboard teamName="Team 1" />
      <TeamScoreboard teamName="Team 2" />
    </div>
  );
};

export default App;


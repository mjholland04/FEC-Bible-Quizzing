import React, { useState } from "react";
import "./App.css";

function Player(n, ps, pf, ca){
  this.name = n;
  this.personalScore = ps;
  this.personalFouls = pf;
  this.correctAnswers = ca
}

let player1 = new Player("Jada", 100, 0, 5);
let player2 = new Player("Ashley", 20, 0, 1);
let player3 = new Player("Mason", 40, 2, 2);
let player4 = new Player("Ellie", 20, 0, 1);
let player5 = new Player("DMike", 40, 3, 2);
let player6 = new Player("Dyson", 40, 1, 2);
let currentQuizzer = player1;

function Team(s, t, f, p, n, l, c){
  this.score = s;
  this.timeouts = t;
  this.fouls = f;
  this.players = p;
  this.teamName = n;
  this.league = l;
  this.church = c;
}

let teamA = new Team(180, 3,2,[player1, player2, player3, player4],"Upland 1","HS","UCC");
let teamB = new Team(80,2,4,[player5, player6],"Upland 2","MS","Taylor Chapel");

const TeamScoreboard = ({ teamName }) => {
  const [teamAScore, setTeamAScore] = useState(teamA.score);
  const [teamAFouls, setTeamAFoulCount] = useState(teamA.fouls);
  const [teamBScore, setTeamBScore] = useState(teamB.score);
  const [teamBFouls, setTeamBFoulCount] = useState(teamA.fouls);

  // const handleScoreChange = (value) => {
  //   setTeamAScore(teamAScore + value);
  // };

  function detectFouls(team) {
    if (team === teamA) {
      teamA.fouls += 1;
      setTeamAFoulCount(team.fouls)
      // Additional logic for Team A fouls...
    } else{
      teamB.fouls += 1;
      setTeamBFoulCount(team.fouls)
      // Additional logic for Team B fouls...
    }
  }
  
  // Function to handle foul button clicks
  function handleFoulButtonClick(team) {
    if (team === teamA) {
      team.fouls += 1;
      setTeamAFoulCount(team.fouls)
      if (teamA.fouls % 3 === 0) {
        team.score -= 10; 
        setTeamAScore(team.score)
      }
    } else {
      team.fouls += 1;
      setTeamBFoulCount(team.fouls)
      if (team.fouls % 3 === 0) {
        //create an alert?
        team.score -= 10;
        setTeamBScore(team.score)
      }
    }
  }
  
  // Function to handle correct answer button clicks
  function handleCorrectButtonClick(team) {
    if (team === teamA) {
      team.score += 20;
      currentQuizzer.personalScore += 20;
      currentQuizzer.correctAnswers += 1;
      setTeamAScore(team.score)
    } else {
      team.score += 20;
      currentQuizzer.personalScore += 20;
      currentQuizzer.correctAnswers += 1;
      setTeamBScore(team.score)
    }
  }
  
  // Function to handle incorrect answer button clicks
  function handleIncorrectButtonClick(team) { //is there a rule for if the team gets so many answers wrong?
    if (team === teamA) {
      team.score -= 10;
      currentQuizzer.personalScore -= 10;
      setTeamAScore(team.score)
    } else {
      team.score -= 10;
      currentQuizzer.personalScore -= 10;
      setTeamBScore(team.score)
    }
  }
  
  // Function to handle bonus answer button clicks
  function handleBonusButtonClick(team) {
    if (team === teamA) {
      team.score += 10;
      setTeamAScore(team.score)
    } else {
      team.score += 10;
      setTeamBScore(team.score)
    }
  }

  function handleNeg20(team){
    if (team === teamA){
      teamA.score -= 20;
      setTeamAScore(team.score)
    }else{
      teamB.score -= 20
      setTeamBScore(team.score)
    }
  }
  
  // Function to handle timeout button clicks
  function handleTimeoutButtonClick(team) {
    team.timeouts += 1;
    // if (team === teamA){
    //   document.getElementById(
    //     "teamATimeouts"
    //   ).textContent = `Timeouts for Team A: ${QuizMatch.teamATimeouts}`;
    // }else{
    //   document.getElementById(
    //     "teamBTimeouts"
    //   ).textContent = `Timeouts for Team B: ${QuizMatch.teamBTimeouts}`;
    // }
  }
  // const handleFoul = () => {
  //   setFoulCount(foulCount + 1);
  // };

  return (
    <div>
      <h2>{teamA.teamName} Score: {teamAScore}</h2>
      <button onClick={() => handleBonusButtonClick(teamA)}>+10</button>
      <button onClick={() => handleIncorrectButtonClick(teamA)}>-10</button>
      <button onClick={() => handleCorrectButtonClick(teamA)}>+20</button>
      <button onClick={() => handleNeg20(teamA)}>-20</button>
      <button onClick={() => handleFoulButtonClick(teamA)}>Foul</button>
      <p>Foul Count: {teamAFouls}</p>
      
      <h2>{teamB.teamName} Score: {teamBScore}</h2>
      <button onClick={() => handleBonusButtonClick(teamB)}>+10</button>
      <button onClick={() => handleIncorrectButtonClick(teamB)}>-10</button>
      <button onClick={() => handleCorrectButtonClick(teamB)}>+20</button>
      <button onClick={() => handleNeg20(teamA)}>-20</button>
      <button onClick={() => handleFoulButtonClick(teamB)}>Foul</button>
      <p>Foul Count: {teamBFouls}</p>
    </div>
    
    
  );
};

const App = () => {
  return (
    <div>
      <TeamScoreboard teamName={teamA} />
      {/* <TeamScoreboard teamName={teamB.teamName} /> */}
    </div>
  );
};

export default App;

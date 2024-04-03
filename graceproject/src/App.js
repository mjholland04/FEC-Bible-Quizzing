import React, { useState } from "react";
import "./App.css";

//TO-DO
// - add in score keeping for each question, make that able to send to database after the end
// - finish making the scores be attrubuted to the selected player
// - 

function Player(name, personalScore, personalFouls, correctAnswers){
  this.name = name;
  this.personalScore = personalScore;
  this.personalFouls = personalFouls;
  this.correctAnswers = correctAnswers
}

let player1 = new Player("Jada", 100, 0, 5);
let player2 = new Player("Ashley", 20, 0, 1);
let player3 = new Player("Mason", 40, 2, 2);
let player4 = new Player("Ellie", 20, 0, 1);
let player5 = new Player("DMike", 40, 3, 2);
let player6 = new Player("Dyson", 40, 1, 2);
let currentQuizzer = player1;

function Team(score, timeouts, fouls, players, teamName, league, church){
  this.score = score;
  this.timeouts = timeouts;
  this.fouls = fouls;
  this.players = players;
  this.teamName = teamName;
  this.league = league;
  this.church = church;
}

let teamA = new Team(180, 3,2,[player1, player2, player3, player4],"Upland 1","HS","UCC");
let teamB = new Team(80,2,4,[player5, player6],"Upland 2","MS","Taylor Chapel");

function setListA(players){
  let dropdown = document.getElementById("TeamAPlayers");
  var opt = document.createElement("option"); 
  opt.text = players.name;
  opt.value = players.id; //values have to be strings... not sure what to do about that yet trying to get the correct player when chosen to attribute points
  //may have to wait to make those changes until we are not using a dropdown.
  dropdown.options.add(opt);
}

function setListB(players){
  let dropdown = document.getElementById("TeamBPlayers");
  var opt = document.createElement("option"); 
  opt.text = players.name;
  opt.value= players; 
  dropdown.options.add(opt);
}

const TeamScoreboard = () => {
  const [teamAScore, setTeamAScore] = useState(teamA.score);
  const [teamAFouls, setTeamAFoulCount] = useState(teamA.fouls);
  const [teamATimeouts, setTeamATimeouts] = useState (teamA.timeouts)
  const [teamBScore, setTeamBScore] = useState(teamB.score);
  const [teamBFouls, setTeamBFoulCount] = useState(teamB.fouls);
  const [teamBTimeouts, setTeamBTimeouts] = useState (teamB.timeouts)
  
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
    //getCurrentPlayer(team)
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
    if (team === teamA){
      if (teamA.timeouts >= 3){
        alert("No Timeouts Left")
      }else{
        teamA.timeouts += 1
        setTeamATimeouts(teamA.timeouts)
      }
    }else{
      if(teamB.timeouts >= 3){
        alert("No Timeouts Left")
      }else{
        team.timeouts += 1;
        setTeamBTimeouts(teamB.timeouts)
      }
    }
  }

  function getCurrentPlayer(team){
    if (team === teamA){
      var selector = document.getElementById("TeamAPlayers")
      currentQuizzer = selector.value
      console.log(currentQuizzer)
    }else{
      var selector = document.getElementById("TeamBPlayers")
      currentQuizzer = selector.value
    }
  }

  return (
    <div>
      <h2>{teamA.teamName} Score: {teamAScore}</h2>
      <select onClick={() => teamA.players.forEach(setListA)} id= "TeamAPlayers"></select>
      <button onClick={() => handleBonusButtonClick(teamA)}>+10</button>
      <button onClick={() => handleIncorrectButtonClick(teamA)}>-10</button>
      <button onClick={() => handleCorrectButtonClick(teamA)}>+20</button>
      <button onClick={() => handleNeg20(teamA)}>-20</button>
      <button onClick={() => handleFoulButtonClick(teamA)}>Foul</button>
      <button onClick={() => handleTimeoutButtonClick(teamA)}>Timeout</button>
      <p>Foul Count: {teamAFouls}  Timeouts Taken: {teamATimeouts}</p>
      
      <h2>{teamB.teamName} Score: {teamBScore}</h2>
      <select onClick={() => teamB.players.forEach(setListB)} id= "TeamBPlayers"></select>
      <button onClick={() => handleBonusButtonClick(teamB)}>+10</button>
      <button onClick={() => handleIncorrectButtonClick(teamB)}>-10</button>
      <button onClick={() => handleCorrectButtonClick(teamB)}>+20</button>
      <button onClick={() => handleNeg20(teamB)}>-20</button>
      <button onClick={() => handleFoulButtonClick(teamB)}>Foul</button>
      <button onClick={() => handleTimeoutButtonClick(teamB)}>Timeout</button>
      <p>Foul Count: {teamBFouls}  Timeouts Taken: {teamBTimeouts}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <TeamScoreboard/>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./App.css";

var currentQuizzer;


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
currentQuizzer = player1;


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
console.log(teamA);
let teamB = new Team(80,2,4,[player5, player6],"Upland 2","MS","Taylor Chapel");

export function QuizMatch() {
  const [teamAFouls, setTeamAFouls] = useState(0);
  const [teamBFouls, setTeamBFouls] = useState(0);
  const [teamAPoints, setTeamAPoints] = useState(0);
  const [teamBPoints, setTeamBPoints] = useState(0);
  const [teamATimeouts] = useState(0);
  const [teamBTimeouts] = useState(0);
  const [teamAStudentFouls, setTeamAStudentFouls] = useState([0, 0, 0, 0]);
  const [teamBStudentFouls, setTeamBStudentFouls] = useState([0, 0, 0, 0]);
}
// Function to detect fouls
export function detectFouls(team) {
  if (team === teamA) {
    QuizMatch.setTeamAFouls((prevFouls) => prevFouls + 1);
    teamA.fouls += 1;
    // Additional logic for Team A fouls...
  } else{
    QuizMatch.setTeamBFouls((prevFouls) => prevFouls + 1);
    teamB.fouls += 1;
    // Additional logic for Team B fouls...
  }
}

// Function to handle foul button clicks
export function handleFoulButtonClick(team) {
  if (team === teamA) {
    team.fouls += 1;
    if (teamA.fouls % 3 === 0) {
      team.score -= 10; 
      document.getElementById(
        "teamAScore"
      ).textContent = `Total Score for Team A: ${team.score}`;
    }
  } else {
    team.fouls += 1;
    if (team.fouls % 3 === 0) {
      team.score -= 10;
      document.getElementById(
        "teamBScore"
      ).textContent = `Total Score for Team B: ${team.score}`;
    }
  }
}

// Function to handle correct answer button clicks
export function handleCorrectButtonClick(team) {
  if (team === teamA) {
    team.score += 20;
    currentQuizzer.personalScore += 20;
    currentQuizzer.correctAnswers += 1;
    document.getElementById(
      "teamAScore"
    ).textContent = `Total Score for Team A: ${team.score}`;
  } else {
    team.score += 20;
    currentQuizzer.personalScore += 20;
    currentQuizzer.correctAnswers += 1;
    document.getElementById(
      "teamBScore"
    ).textContent = `Total Score for Team B: ${team.score}`;
  }
}

// Function to handle incorrect answer button clicks
export function handleIncorrectButtonClick(team) {
  if (team === teamA) {
    team.score -= 10;
    currentQuizzer.personalScore -= 10;
    document.getElementById(
      "teamAScore"
    ).textContent = `Total Score for Team A: ${team.score}`;
  } else {
    team.score -= 10;
    currentQuizzer.personalScore -= 10;
    document.getElementById(
      "teamBScore"
    ).textContent = `Total Score for Team B: ${team.score}`;
  }
}

// Function to handle bonus answer button clicks
export function handleBonusButtonClick(team) {
  if (team === teamA) {
    team.score += 10;
    currentQuizzer.personalScore += 10;
    currentQuizzer.correctAnswers += 1; //QUESTION Does a bonus count towards student quizzing out?
    console.log("player 1 score now:"+ currentQuizzer.personalScore)
    console.log(team)
    //setScore(team.score)
  //}
    document.getElementById(
      "teamAScore"
    ).textContent = `Total Score for Team A: ${QuizMatch.teamAPoints}`;
  } else {
    team.score += 10;
    currentQuizzer.personalScore += 10;
    currentQuizzer.correctAnswers += 1;
    document.getElementById(
      "teamBScore"
    ).textContent = `Total Score for Team B: ${QuizMatch.teamBPoints}`;
  }
}

// Function to handle timeout button clicks
export function handleTimeoutButtonClick(team) {
  team.timeouts += 1;
  if (team === teamA){
    document.getElementById(
      "teamATimeouts"
    ).textContent = `Timeouts for Team A: ${QuizMatch.teamATimeouts}`;
  }else{
    document.getElementById(
      "teamBTimeouts"
    ).textContent = `Timeouts for Team B: ${QuizMatch.teamBTimeouts}`;
  }
}

const TeamScoreboard = ({ teamName }) => {
  const [score, setScore] = useState(0);
  const [foulCount, setFoulCount] = useState(0);

  const handleScoreChange = (value) => {
    setScore(score + value);
  };

  // const handleFoul = () => {
  //   setFoulCount(foulCount + 1);
  // };

  return (
    <div>
      <h2>{teamName} Score: {score}</h2>
      <button onClick={() => handleBonusButtonClick(teamA)}>+10</button>
      <button onClick={() => handleIncorrectButtonClick(teamA)}>-10</button>
      <button onClick={() => handleCorrectButtonClick(teamA)}>+20</button>
      <button onClick={() => handleFoulButtonClick(teamA)}>-20</button>
      {/* <button onClick={handleFoul}>Foul</button> */}
      <p>Foul Count: {foulCount}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <TeamScoreboard teamName={teamA.teamName} />
      <TeamScoreboard teamName={teamB.teamName} />
    </div>
  );
};

export default App;

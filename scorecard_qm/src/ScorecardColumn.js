//import React from 'react';
import React, { useState } from "react";
import "./App.css";
//import { setup, teamA, teamB, setListA, currentQuizzer, player1 } from "./setup.js";
import * as S from "./setup.js";
import { setListA } from "./setup.js";

export function ScorecardColumn() {
  let currentQuizzer = S.teamA.players[0];
  const [teamAScore, setTeamAScore] = useState(S.teamA.score);
  const [teamAFouls, setTeamAFoulCount] = useState(S.teamA.fouls);
  const [teamATimeouts, setTeamATimeouts] = useState(S.teamA.timeouts);
  const [teamBScore, setTeamBScore] = useState(S.teamB.score);
  const [teamBFouls, setTeamBFoulCount] = useState(S.teamB.fouls);
  const [teamBTimeouts, setTeamBTimeouts] = useState(S.teamB.timeouts);

  // Function to handle foul button clicks
  function handleFoulButtonClick(team) {
    if (team === S.teamA) {
      team.fouls += 1;
      setTeamAFoulCount(team.fouls);
      if (team.fouls % 3 === 0) {
        team.score -= 10;
        setTeamAScore(team.score);
      }
    } else {
      team.fouls += 1;
      setTeamBFoulCount(team.fouls);
      if (team.fouls % 3 === 0) {
        //create an alert?
        team.score -= 10;
        setTeamBScore(team.score);
      }
    }
  }

  function handlePoints(team) {
    console.log(currentQuizzer)
    let val = document.getElementById("pointsDropdown").value;
    console.log(team.score)
    if (val == "+10") {
      team.score += 10;
      console.log("fine2")
    } else if (val == "+20") {
      team.score += 20;
      currentQuizzer.personalScore += 20;
      currentQuizzer.correctAnswers += 1;
    } else if (val == "-10") {
      //is there a rule for if the team gets so many answers wrong?
      team.score -= 10;
      currentQuizzer.personalScore -= 10;
    } else {
      team.score -= 20;
    }
    if (team === S.teamA) {
      setTeamAScore(team.score);
    } else {
      setTeamBScore(team.score);
    }
    console.log(team.score)
  }


  // Function to handle timeout button clicks
  function handleTimeoutButtonClick(team) {
    if (team === S.teamA) {
      if (team.timeouts >= 3) {
        alert("No Timeouts Left");
      } else {
        team.timeouts += 1;
        setTeamATimeouts(S.teamA.timeouts);
      }
    } else {
      if (team.timeouts >= 3) {
        alert("No Timeouts Left");
      } else {
        team.timeouts += 1;
        setTeamBTimeouts(team.timeouts);
      }
    }
  }

  function getCurrentPlayer(team) {
    if (team === S.teamA) {
      var selector = document.getElementById("TeamAPlayers");
      currentQuizzer = selector.value;
      console.log(currentQuizzer);
    } else {
      var selector = document.getElementById("TeamBPlayers");
      currentQuizzer = selector.value;
    }
  }
  return (
    <div className="table-container">
      <table id="select_cols">
        <thead>
          <tr>
            <th>Question #</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select>
                <option id="unselected" value="---">
                  ---
                </option>
                <option value="FTV-Quote">FTV-First Words</option>
                <option value="FTV-Quote">FTV-Quote</option>
                <option value="Location">Location</option>
                <option value="Reference">Reference</option>
                <option value="Regular">Regular</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select
                onClick={() => S.teamA.players.forEach(setListA)}
                id="TeamAPlayers"
                defaultValue={"---"}>
                <option id="unselected" value="---">---</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select onChange={() => handlePoints(S.teamA)}id="pointsDropdown" defaultValue={"---"}>
                <option id="unselected" value="---">---</option>
                <option value="+10">+10</option>
                <option value="+20">+20</option>
                <option value="-10">-10</option>
                <option value="-20">-20</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <select defaultValue={"---"}>
                <option id="unselected" value="---">
                  ---
                </option>
                <option>Bonus val</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => handleFoulButtonClick(S.teamA)} id="table_button">Add Foul</button>
            </td>
          </tr>
          <tr>
            <td>###</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScorecardColumn;

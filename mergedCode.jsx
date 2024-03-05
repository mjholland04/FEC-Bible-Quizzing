import React, { useState, useEffect } from 'react';

var currentQuizzer;

const Player = function(n, ps, pf, ca){
    let name = n
    let personalScore = ps
    let personalFouls = pf
    let correctAnswers = ca
}

let player1 = Player("Jada", 100, 0, 5)
let player2 = Player("Ashley", 20, 0, 1)
let player3 = Player("Mason", 40, 2, 2)
let player4 = Player("Ellie", 20, 0, 1)
let player5 = Player("DMike", 40, 3, 2)
let player6 = Player("Dyson", 40, 1, 2)

const Team = function(s,t,f,p,n,l,c){
    let score = s
    let timeouts = t
    let fouls = f
    let players = p
    let teamName = n
    let league = l
    let church = c
}
let teamA = Team(180,3,2,[player1, player2, player3, player4], "Upland 1", "HS", "UCC");
let teamB = Team(80,2,4,[player5,player6],"Upland 2", "MS", "Taylor Chapel")


function QuizMatch() {
    const [teamAFouls, setTeamAFouls] = useState(0);
    const [teamBFouls, setTeamBFouls] = useState(0);
    const [teamAPoints, setTeamAPoints] = useState(0);
    const [teamBPoints, setTeamBPoints] = useState(0);
    const [teamATimeouts] = useState(0);
    const [teamBTimeouts] = useState(0);
    const [teamAStudentFouls, setTeamAStudentFouls] = useState([0, 0, 0, 0]);
    const [teamBStudentFouls, setTeamBStudentFouls] = useState([0, 0, 0, 0]);


     // Function to detect fouls
    function detectFouls(team) {
        if (team === "A") {
            setTeamAFouls(prevFouls => prevFouls + 1);
            teamA.fouls += 1
            // Additional logic for Team A fouls...
        } else if (team === "B") {
            setTeamBFouls(prevFouls => prevFouls + 1);
            teamB.fouls += 1
            // Additional logic for Team B fouls...
        }
    }

    // Function to handle foul button clicks
    function handleFoulButtonClick(team) {
        if (team === 'A') {
            //teamAfouls += 1; // Increment fouls for Team A
            teamA.fouls += 1
            if (teamA.fouls % 3 === 0) {
                teamA.score -= 10; // Decrement score for Team A
                document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
            }
        } else {
            teamB.fouls += 1; // Increment fouls for Team B
            if (teamB.fouls % 3 === 0) {
                teamB.score -= 10; // Decrement score for Team B
                document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
            }
        }
    }

    // Function to handle correct answer button clicks
    function handleCorrectButtonClick(team) {
        if (team === 'A') {
            teamA.score += 20; // Increment score for Team A
            currentQuizzer.score +=20
            currentQuizzer.correctAnswers +=1
            document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
        } else {
            teamB.score += 20; // Increment score for Team B
            currentQuizzer.score +=20
            currentQuizzer.correctAnswers +=1
            document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
        }
    }

    // Function to handle incorrect answer button clicks
    function handleIncorrectButtonClick(team) {
        if (team === 'A') {
            teamA.score -= 10; // Decrement score for Team A
            currentQuizzer.score -= 10
            document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
        } else {
            teamB.score -= 10; // Decrement score for Team B
            currentQuizzer.score -= 10
            document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
        }
    }

    // Function to handle bonus answer button clicks
    function handleBonusButtonClick(team) {
        if (team === 'A') {
            teamA.score += 10; // Increment score for Team A
            currentQuizzer.score += 10
            currentQuizzer.correctAnswers +=1 //QUESTION Does a bonus count towards student quizzing out?
            document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
        } else {
            teamB.score += 10; // Increment score for Team B
            currentQuizzer.score += 10
            currentQuizzer.correctAnswers += 1
            document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
        }
    }

    // Function to handle timeout button clicks
    function handleTimeoutButtonClick(team) {
        if (team === 'A') {
            teamA.timeouts += 1; // Increment timeouts for Team A
            document.getElementById('teamATimeouts').textContent = `Timeouts for Team A: ${teamATimeouts}`;
        } else {
            teamB.timeouts += 1; // Increment timeouts for Team B
            document.getElementById('teamBTimeouts').textContent = `Timeouts for Team B: ${teamBTimeouts}`;
        }
    }

    useEffect(() => {
        // Game initialization
        startOfGame();
    }, []);

    useEffect(() => {
        // End of game logic
        endOfGame();
    }, [teamAPoints, teamBPoints]);

    // JSX for the QuizMatch component
    return (
        <div>
            <button onClick={() => handleFoulButtonClick("A")}>Record Foul for Team A</button>
            <button onClick={() => handleFoulButtonClick("B")}>Record Foul for Team B</button>

            {/* Render additional components or UI here */}
        </div>
    );
}

export default QuizMatch;

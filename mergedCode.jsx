import React, { useState, useEffect } from 'react';

let teamA = {
    name: "Grace Morton",
    score: 0,
    timeouts: 0
};

let teamB = {
    name: "UCC",
    score: 0,
    timeouts: 0
};

let currentQuizzer = {
    firstName: "",
    lastName: "",
    church: "",
    league: "",
    teamName: "",
    quizoffPoints: 0
};

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
            // Additional logic for Team A fouls...
        } else if (team === "B") {
            setTeamBFouls(prevFouls => prevFouls + 1);
            // Additional logic for Team B fouls...
        }
    }


/*     let teamAScore = 0;
    let teamBScore = 0;
    let teamATimeouts = 0;
    let teamBTimeouts = 0;
    let teamAfouls = 0;
    let teamBfouls = 0; */

    // Function to handle foul button clicks
    function handleFoulButtonClick(team) {
        if (team === 'A') {
            teamAfouls += 1; // Increment fouls for Team A
            if (teamAfouls % 3 === 0) {
                teamAPoints -= 10; // Decrement score for Team A
                document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
            }
        } else {
            teamBfouls += 1; // Increment fouls for Team B
            if (teamBfouls % 3 === 0) {
                teamBPoints -= 10; // Decrement score for Team B
                document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
            }
        }
    }

    // Function to handle correct answer button clicks
    function handleCorrectButtonClick(team) {
        if (team === 'A') {
            teamAPoints += 20; // Increment score for Team A
            document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
        } else {
            teamBPoints += 20; // Increment score for Team B
            document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
        }
    }

    // Function to handle incorrect answer button clicks
    function handleIncorrectButtonClick(team) {
        if (team === 'A') {
            teamAPoints -= 10; // Decrement score for Team A
            document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
        } else {
            teamBPoints -= 10; // Decrement score for Team B
            document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
        }
    }

    // Function to handle bonus answer button clicks
    function handleBonusButtonClick(team) {
        if (team === 'A') {
            teamAPoints += 10; // Increment score for Team A
            document.getElementById('teamAScore').textContent = `Total Score for Team A: ${teamAPoints}`;
        } else {
            teamBPoints += 10; // Increment score for Team B
            document.getElementById('teamBScore').textContent = `Total Score for Team B: ${teamBPoints}`;
        }
    }

    // Function to handle timeout button clicks
    function handleTimeoutButtonClick(team) {
        if (team === 'A') {
            teamATimeouts += 1; // Increment timeouts for Team A
            document.getElementById('teamATimeouts').textContent = `Timeouts for Team A: ${teamATimeouts}`;
        } else {
            teamBTimeouts += 1; // Increment timeouts for Team B
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

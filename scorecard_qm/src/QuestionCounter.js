import React, { useState } from 'react';

import './QuestionCounter.css';

function ScoreCounter () {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter-container">
            <h3>Team 1 Score</h3>
            <h1>{counter}</h1>
            <div className="button-container">
                <button onClick={() => { 
                        setCounter(counter - 10)}
                }>-</button>
                <button onClick={() => {
                    setCounter(counter + 10)}
                }>+</button>
            </div>
        </div>
    );
}

function QuestionCounter () {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter-container">
            <h3>Question Number</h3>
            <h1>{counter}</h1>
            <div className="button-container">
                <button onClick={() => { 
                    if (counter > 0)
                        setCounter(counter - 1)}
                }>-</button>
                <button onClick={() => {
                    if (counter < 25)
                    setCounter(counter + 1)}
                }>+</button>
            </div>
            <ScoreCounter />
        </div>

    );
}

export default QuestionCounter;

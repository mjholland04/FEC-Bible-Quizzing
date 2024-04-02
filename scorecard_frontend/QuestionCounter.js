import React, { useState } from 'react';

function QuestionCounter () {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter-container">
            <h3>Question Number</h3>
            <h1>{counter}</h1>
            <button onClick={() => { 
                if (counter > 0)
                    setCounter(counter - 1)}
            }>-</button>
            <button onClick={() => {
                if (counter < 25)
                setCounter(counter + 1)}
            }>+</button>
        </div>

    );
}

export default QuestionCounter;
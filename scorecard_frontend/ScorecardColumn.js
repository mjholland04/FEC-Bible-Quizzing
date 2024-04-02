import React from 'react';
import './App.css';

function ScorecardColumn () {
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
                    <option id="unselected" value="---">---</option>
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
                  <select defaultValue={"---"}>
                    <option id="unselected" value="---">---</option>
                    <option value="Player 1">Player 1</option>
                    <option value="Player 2">Player 2</option>
                    <option value="Player 3">Player 3</option>
                    <option value="Player 4">Player 4</option>
                    <option value="Player 5">Player 5</option>
                    <option value="Player 6">Player 6</option>
                    <option value="Player 7">Player 7</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <select defaultValue={"---"}>
                    <option id="unselected" value="---">---</option>
                    <option value="+10">+10</option>
                    <option value="+20">+20</option>
                    <option value="-10">-10</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <select defaultValue={"---"}>
                    <option id="unselected" value="---">---</option>
                    <option>Bonus val</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <button id="table_button">Add Error</button>
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
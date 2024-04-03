import React from 'react';
import './App.css';

function RowLabels () {
  return (
    <div className="table-container">
    <table id="table_labels">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Player Name</td>
        </tr>
        <tr>
          <td>Points</td>
        </tr>
        <tr>
          <td>Team Bonus</td>
        </tr>
        <tr>
          <td>Team Errors</td>
        </tr>
        <tr>
          <td>Running Total</td>
        </tr>
      </tbody>
    </table>
  </div>

  );
}

export default RowLabels;
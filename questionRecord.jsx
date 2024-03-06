// - iterate through the questions as answered
// - Associate each question with:
//  - Team
//   - Player, points, question type, foul/error
// Format:
// 1:[{teamName:______}
//     player: ___
//     points: ___
//     type: ___
//     foul: ___
// ]


// Establish list of questions (dictionary)
const record = [
    { id: 1, teamName: "UCC 1", player: "Jake Holland", points: 10, type: "General", foul: 0 },
    { id: 2, teamName: "GRACE 3", player: "Jada Bonnett", points: 0, type: "Location", foul: -10 },
]

// Push new question to record on relevant button click
let questionNumber = 3
if (buttonClick) {
    record.push({ id: questionNumber, name: playerName, points: pointsAlloted, type: questionType, foul: foulPointsAlloted });
}
    
// Edit Dictionary if mistake in input
// (dictionaryName[indexOfQuestion])
record[indexOfQuestion].variableEditing = newValue;


// Updating scoresheet sample code

function updateScoresheet() {
    const tableBody = record.getElementById('points').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table rows

    // Iterate over each question and append a row to the table for each one
    users.forEach(question => {
        const row = tableBody.insertRow(); // Insert a new row at the end of the table
        const idCell = row.insertCell(0);
        const teamCell = row.insertCell(1);
        const nameCell = row.insertCell(2);
        const pointsCell = row.insertCell(3);
        const typeCell = row.insertCell(4);
        const foulCell = row.insertCell(5);

        // Fill the cells with the user's data
        idCell.textContent = question.id;
        teamCell.textContent = question.teamName;
        nameCell.textContent = question.player;
        pointsCell.textContent = question.points;
        typeCell.textContent = question.type;
        foulCell.textContent = question.foul;

        activeCell.textContent = question.isActive ? 'Yes' : 'No'; // IDK What this does
    });
}

// Initial table update
updateTable();

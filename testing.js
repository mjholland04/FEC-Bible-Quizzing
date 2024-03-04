let team1 = "Grace Morton"
let team2 = "UCC"


var player = {
    firstName: "",
    lastName: "",
    church: "",
    leauge: "",
    teamName: "",
}

//reset all variables
function startOfGame(){
    team1.score = 0
    team2.score = 0
    currentQuizzer = ""
}

function correct(){
    // and/or put value in location of question number and answering person
    currentTeam.points += 20
    currentQuizzer.quizoffPoints += 20
}

function incorrect(){
    currentTeam.points -= 10
    currentQuizzer.quizoffPoints -= 10
}

function bonus(){
    currentTeam.points += 10
    currentQuizzer.quizoffPoints += 10
}

function timeout(){
    currentTeam.timeouts += 1
}

function endOfGame(){
    if(team1.points > team2.points){
        winner = team1
    }else if(team1.points < team2.points){
        winner = team2
    }else{
        //what do to when tie?
        //overtime with 5 more questions to be asked after timeout
    }
}
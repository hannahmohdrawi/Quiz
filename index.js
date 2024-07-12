let quizScore = document.getElementById("quizNumber");

let teamSubmissionButton = document.getElementById("submitTeamName");
teamSubmissionButton.addEventListener("click", teamNameSubmission);


function teamNameSubmission(){
    let teamName = document.getElementById("enteredTeamName").value;
    let intro = document.getElementsByClassName("intro")[0];
    intro.classList.add("introHide");

    showMiddleScreen(teamName);
}

function showMiddleScreen(teamName){
    let continueScreen = document.getElementsByClassName("middle-screen")[0];
    let welcomeMsg = document.getElementById("welcome-message");
    welcomeMsg.textContent = `Welcome ${teamName}! 🎈`
    continueScreen.classList.add("showMiddle");
}

function showQuestionScreen(){
    //Problem with this 
    document.querySelector(".middle-screen").classList.remove("showMiddle");
    document.querySelector(".quiz-questions").classList.add("showQuestions");
}

let currentQuestionIndex = 0;
let score = 0;

function showNextQuestion(){
    let questions = document.getElementsByClassName("questions");
    
    if(currentQuestionIndex < questions.length){
        questions[currentQuestionIndex].classList.add("showQuestions");
        currentQuestionIndex;
    }
    
}

function incrementScore(){
    //On submit, increment score and show next question
    let count = document.getElementById("quizScore");

    count ++;
}
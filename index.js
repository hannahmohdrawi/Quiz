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

function submitAnswers(){
    let correctAnswers = {
        question1: "5",
        question2: "Au",
        question3: "Jenny"
    };

    let questions = document.getElementsByClassName("questions");
    let question1Answer = document.getElementById("question1-answers").value;
    let question2Answer = document.getElementById("question2-answers").value;
    let question3Answer = document.getElementById("question3-answers").value;

    if (question1Answer === correctAnswers.question1){
        score++;
    };

    if (question2Answer === correctAnswers.question2){
        score++;
    };

    if (question3Answer === correctAnswers.question3){
        score++;
    };


    //Fix
    document.getElementById("quizScore").textContent = score;

    for (let i = 0; i < questions.length; i++) {
        questions[i].classList.remove("showQuestions");
    }

    document.querySelector(".quiz-questions").classList.remove("showQuestions");
    document.getElementById("quizScore").classList.add("showQuestions");
    document.getElementById("quizNumber").classList.add("showQuestions");



}






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
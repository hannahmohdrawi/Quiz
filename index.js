let teamSubmissionButton = document.getElementById("submitTeamName");
teamSubmissionButton.addEventListener("click", teamNameSubmission);


function teamNameSubmission(){
    let teamName = document.getElementById("enteredTeamName").value;
    let intro = document.querySelector(".intro");
    intro.classList.add("introHide");

    showMiddleScreen(teamName);
}

function showMiddleScreen(teamName){
    let continueScreen = document.querySelector(".middle-screen");
    let welcomeMsg = document.getElementById("welcome-message");
    welcomeMsg.textContent = `Welcome ${teamName}! 🎈`
    continueScreen.classList.add("showMiddle");
}

function showQuestionScreen(){
    //Problem with this 
    document.querySelector(".middle-screen").classList.remove("showMiddle");
    document.querySelector(".quiz-questions").classList.add("showQuestions");
}

let score = 0;

function submitAnswers(){
    let correctAnswers = {
        question1: "5",
        question2: "Au",
        question3: "Jenny"
    };

    let question1Answer = document.querySelector('input[name = "question1"]:checked');
    let question2Answer = document.querySelector('input[name = "question2"]:checked');
    let question3Answer = document.querySelector('input[name = "question3"]:checked');

    if (question1Answer === correctAnswers.question1){
        score++;
        console.log("Hello");
    };

    if (question2Answer === correctAnswers.question2){
        score++;
    };

    if (question3Answer === correctAnswers.question3){
        score++;
    };


    //Fix
    document.getElementById("quizScore").textContent = score;

    /*
    for (let i = 0; i < questions.length; i++) {
        questions[i].classList.remove("showQuestions");
    }
    */

    document.querySelector(".quiz-questions").classList.remove("showQuestions");
    document.querySelector(".quiz-container").classList.add("showQuestions");
    

}

let currentQuestionIndex = 0;

function showNextQuestion(){
    let allQuestions = document.querySelectorAll(".question");
    let allAnswers = document.querySelectorAll(".answers");
    
    if(currentQuestionIndex > 0){
        allQuestions[currentQuestionIndex - 1].classList.remove("showQuestions");
        allAnswers[currentQuestionIndex - 1].classList.remove("showQuestions");
    }

    if(currentQuestionIndex < allQuestions.length){
        allQuestions[currentQuestionIndex].classList.add("showQuestions");
        allAnswers[currentQuestionIndex].classList.add("showQuestions");
        currentQuestionIndex++;
    }
}

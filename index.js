let teamSubmissionButton = document.getElementById("submitTeamName");
teamSubmissionButton.addEventListener("click", teamNameSubmission);
let currentQuestionIndex = 0;


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
    document.querySelector(".middle-screen").classList.remove("showMiddle");
    document.querySelector(".quiz-questions").classList.add("showQuestions");

    showNextQuestion();
}

    



function showNextQuestion() {
    let allQuestions = document.querySelectorAll(".quiz-container");

    // Hide all questions initially
    allQuestions.forEach(question => {
        question.classList.add("hideQuestion");
        question.classList.remove("showQuestion");
    });

    // Show the current question
    if (currentQuestionIndex < allQuestions.length) {
        allQuestions[currentQuestionIndex].classList.add("showQuestion");
        allQuestions[currentQuestionIndex].classList.remove("hideQuestion");
        currentQuestionIndex++;
    }

    // Hide next button and show submit button if it's the last question
    if (currentQuestionIndex >= allQuestions.length) {
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "block";
    }
}


let score = 0;

function submitAnswers(){
    let correctAnswers = {
        question1: "5",
        question2: "Au",
        question3: "Jenny"
    };

    let question1Answer = document.querySelector('input[name="question1"]:checked');
    let question2Answer = document.querySelector('input[name="question2"]:checked');
    let question3Answer = document.querySelector('input[name="question3"]:checked');

    if (question1Answer === correctAnswers.question1){
        score++;
    };
    if (question2Answer === correctAnswers.question2){
        score++;
    };
    if (question3Answer === correctAnswers.question3){
        score++;
    };


    
    document.getElementById("quizScore").textContent = score;
    document.querySelector(".quiz-questions").classList.remove("showQuestions");
    document.querySelector(".score-container").style.display = "block";
}

document.getElementById("nextBtn").addEventListener("click", showNextQuestion);




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

    let question1 = document.getElementById("question1");
    let question2 = document.getElementById("question2");
    let question3 = document.getElementById("question3");

    let questions = [question1, question2, question3];

    showNextQuestion();
}

    

function showNextQuestion(){
    let allQuestions = document.querySelectorAll(".question-container");
    
    
    if(currentQuestionIndex > 0){
        allQuestions[currentQuestionIndex - 1].classList.remove("showQuestionContainer");
        
    }

    if(currentQuestionIndex < allQuestions.length){
        allQuestions[currentQuestionIndex].classList.add("showQuestionContainer");
        currentQuestionIndex++;
    }else{
        document.getElementById("nextButton").style.display ="none";
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




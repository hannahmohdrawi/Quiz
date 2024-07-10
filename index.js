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

function showQuestions(){
    let questionScreen = document.getElementsByClassName("quiz-questions");

    for (let i = 0; i < questionScreen.length; i++){
        questionScreen[i].classList.add("showQuestions");
    }
    
}
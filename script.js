// Quiz Game javascript
// 
// all of the elements that need to be included
// 
// timer counting down
// score based on answering questions correctly - faster = more points
// changing/ creating html elements in javascript
// local storage for a list of previous high scores
// incorrect scores have a time penalty which removes time from the countdown timer

const questions = [
    {
        title: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
        choices: ["Four", "Five", "Six", "Seven"],
        answer: "Six"
    },
    {
        title: "How many soccer players should each team have on the field at the start of each match?",
        choices: ["Eight", "Nine", "Ten", "Eleven"],
        answer: "Eleven"
    },
    {
        title: "Which animal can be seen on the Porsche logo?",
        choices: ["Horse", "Giraffe", "Rhino", "Eagle"],
        answer: "Horse"
    },
    {
        title: "In which body part can you find the femur?",
        choices: ["Arm", "Leg", "Torso", "Head"],
        answer: "Leg"
    },
    {
        title: "Which country invented tea?",
        choices: ["China", "India", "England", "Peru"],
        answer: "China"
    }
]

let question = 0

const startContainerEl = document.getElementById("start-container")
const quizSpaceEl = document.getElementById("quiz-space");
const resultSpaceEl = document.getElementById("result-space");

let correctAnswer = 0
let wrongAnswer = 0


function startQuiz() {
    startContainerEl.setAttribute("class", "container d-none")
    quizSpaceEl.setAttribute("class", "container")


    newQuestion(question)
}
// Tutor assisted with this portion - this is jQuery
function newQuestion(q) {
    quizSpaceEl.innerHTML = "";
    // quizSpaceEl.innerHTML = `<p>${questions[question].title} </p>
    // <button value ="${questions[question].choices[0]}" onclick="compareAnswer(this)" >${questions[question].choices[0]}</button>
    // <button value ="${questions[question].choices[1]}" onclick="compareAnswer(this)" >${questions[question].choices[1]}</button>
    // <button value ="${questions[question].choices[2]}" onclick="compareAnswer(this)" >${questions[question].choices[2]}</button>
    // <button value ="${questions[question].choices[3]}" onclick="compareAnswer(this)" >${questions[question].choices[3]}</button>`
    const quizQuestionEl = document.createElement("div");
    quizSpaceEl.append(quizQuestionEl);
    quizQuestionEl.setAttribute("class", "row m-5")
    // for (let i = 0; i < questions.length; i++) {
    quizQuestionEl.innerHTML = questions[q].title;

    for (let j = 0; j < questions[q].choices.length; j++) {
        const buttonEl = document.createElement("button");
        quizSpaceEl.append(buttonEl)
        buttonEl.innerHTML = questions[q].choices[j];
        buttonEl.addEventListener("click", compareAnswer);
        buttonEl.setAttribute("value", questions[q].choices[j]);
    }



}

function compareAnswer(event) {
    let userInput = event.target.getAttribute("value");
    console.log(userInput, this);
    if (userInput === questions[question].answer) {
        correctAnswer++
        
    } else (
        wrongAnswer++
    )
    if (question < questions.length - 1) {
        question++
        newQuestion(question)
    } else (
        displayResults()
    )
}

function displayResults() {
    quizSpaceEl.innerHTML = "";
    quizSpaceEl.setAttribute("class", "d-none");
    resultSpaceEl.setAttribute("class", "container mt-5 border border-dark");
    // display totals 
    resultSpaceEl.innerHTML = "Your Score is: " + correctAnswer


    // display button to restart the game
    // 
}

// create timer

// // this was taken from in class activity - does not work
// const defaultTime = 300;
// const clockEl = document.getElementById("clock");
// const userEl = document.getElementById("user-time-in-seconds");
// let savedValue = localStorage.getItem("time");
// let time = 0;
// if (savedValue) {
//   time = savedValue;
// } else {
//   time = defaultTime;
// }
// let myInterval = null;
// function startTimer() {
//     if (myInterval) {
//         clearInterval(myInterval);
//         myInterval = null;
//     }
//     myInterval = setInterval(function () {
//         time = time - 1;
//         localStorage.setItem("time", time);

//         let hours = Math.floor(time / 60 / 60);
//         let minutes = Math.floor(time / 60) % 60;
//         let seconds = time % 60;

//         if (hours < 10) {
//             hours = "0" + hours;
//         }
//         if (minutes < 10) {
//             minutes = "0" + minutes;
//         }
//         if (seconds < 10) {
//             seconds = "0" + seconds;
//         }

//         clockEl.innerHTML = hours + ":" + minutes + ":" + seconds;

//         if (time <= 0) {
//             clearInterval(myInterval);
//         }
//     }, 1000);
// }






// startQuiz()

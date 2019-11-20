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
const clockEl = document.getElementById("clock");
const timerSpaceEl = document.getElementById("timer-space");

let correctAnswer = 0
let wrongAnswer = 0
let score = 0

function startQuiz() {
    startContainerEl.setAttribute("class", "container d-none")
    quizSpaceEl.setAttribute("class", "container")
    timerSpaceEl.setAttribute("class", "container")
    console.log("we're starting")

    startTimer()
    newQuestion(question)
}

function newQuestion(q) {
    quizSpaceEl.innerHTML = "";
    const quizQuestionEl = document.createElement("div");
    quizSpaceEl.append(quizQuestionEl);
    quizQuestionEl.setAttribute("class", "row mt-5 mb-5")
    // for (let i = 0; i < questions.length; i++) {
    quizQuestionEl.innerHTML = questions[q].title;

    for (let j = 0; j < questions[q].choices.length; j++) {
        const buttonEl = document.createElement("button");
        quizSpaceEl.append(buttonEl)
        buttonEl.innerHTML = questions[q].choices[j];
        buttonEl.addEventListener("click", compareAnswer);
        buttonEl.setAttribute("value", questions[q].choices[j]);
        buttonEl.setAttribute("class", "m-3")
    }

}


const defaultTime = questions.length * 30;
let time = 0
let myInterval = null
console.log(defaultTime);

function startTimer() {
    time = defaultTime

    myInterval = setInterval(function () {
        time = time - 1;
        console.log(time);
        localStorage.setItem("time", time);

        let minutes = Math.floor(time / 60) % 60;
        let seconds = time % 60;

        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        clockEl.innerHTML = minutes + ":" + seconds;

        if (time <= 0) {
            clearInterval(myInterval);
        }
    }, 1000)

};



function compareAnswer(event) {
    let userInput = event.target.getAttribute("value");
    console.log(userInput, this);
    if (userInput === questions[question].answer) {
        // correctAnswer++
        if (score === 0) {
            score = time;
        } else (
            score = score + time
            )
    } else (
        // wrongAnswer++;
        time = time - 15
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
    timerSpaceEl.setAttribute("class", "d-none");
    resultSpaceEl.setAttribute("class", "container mt-5 border border-dark");
    // display totals 
    resultSpaceEl.innerHTML = "Your Score is: " + score


    // display button to restart the game
    // 
}
// window.timer = timer
// create timer







// startQuiz()

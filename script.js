//questions
var questions = [
    {
        question: "What is the best holiday of the year?",
        answers: [
            {text: "Christmas!", correct: false},
            {text: "Halloween!", correct: true},
            {text: "4th of July!", correct: false},
            {text: "Thanksgiving!", correct: false}
        ]
        
    },{
        question: "Who brought Halloween traditions to North America?",
        answers: [
            {text: "Germans", correct: false},
            {text: "Romans", correct: false},
            {text: "Irish and Scottish", correct: true},
            {text: "Japanese", correct: false}
        ]
        
    },{
        question: "What is the best Halloween movie?",
        answers: [
            {text: "The Nightmare Before Christmas", correct: true},
            {text: "Carrie", correct: false},
            {text: "Hocus Pocus", correct: false},
            {text: "It", correct: false}
        ]
        
    }
];

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var quizContainerElement = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var counter = document.getElementById("counter");
var scoreText = document.getElementById("scoreContainer");
var score = 0;
var questionIndex = 0;
var time = 60;
var timer;



function startQuiz(){
    startButton.classList.add('hide')
    quizContainerElement.classList.remove('hide')
    renderQuestion()
    timer = setInterval(renderTimer, 1000);
    counter.textContent= time
};

function renderTimer(){
    time--
    counter.textContent= time
    if(time <= 0){
        time=0
        gameOver()
    };
};
  

function setNextQuestion() {
    showQuestion(questionIndex)
};

function renderQuestion() {
    questionElement.innerText = questions[questionIndex].question
    answerButtonsElement.innerHTML=""
    questions[questionIndex].answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        
        button.addEventListener('click', () => {
            selectAnswer(answer.correct)
        })
        answerButtonsElement.appendChild(button)
    })
};


function selectAnswer(correct) {
    // const selectedButton = e.target
    // const correct = selectedButton.data.correct
    setStatusClass(document.body, correct)
    // Array.from(answerButtonsElement.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // })
    
    questionIndex++
    if(questionIndex===questions.length) {
        gameOver()
    } else {
        renderQuestion()
    }
};


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        time = time-10
    }
};

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
};


function gameOver() {
    console.log("gameover")
    clearInterval(timer)
};




//correct or incorrect    
// function checkAnswer(answer){
//     if(answer == questions[runningQuestion].correct){
//         score++
//         answerIsCorrect();
//     }else{
//         answerIsWrong();
//     }
//     count = 0;
//     if(runningQuestion < lastQuestion){
//         runningQuestion++;
//         renderQuestion();
//     }else{
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }


//ongoing score
// function scoreRender(){
//     scoreDiv.style.display = "block";
// }


startButton.addEventListener('click', startQuiz)

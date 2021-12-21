const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions [currentQuestionIndex])

}

function showQuestion(question){
    questionElememnt.innerText = question.question
}

function selectAnswer() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 222',
        answers: [
            {text:'4', correct: true},
            {text:'22', correct: false},

        ]
    }
]
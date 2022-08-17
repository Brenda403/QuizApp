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

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How many seasons of friends are there?',
    answers: [
      { text: '10', correct: true },
      { text: '12', correct: false }
    ]
  },
  {
    question: 'How many times does Ross get divorced?',
    answers: [
      { text: '2', correct: false },
      { text: '4', correct: false },
      { text: '3', correct: true },
      { text: '1', correct: false }
    ]
  },
  {
    question: 'Which of Joey\'s sisters did Chandler fool around with?',
    answers: [
      { text: 'Gina', correct: false },
      { text: 'Mary Angela', correct: true },
      { text: 'Tina', correct: false },
      { text: 'Mary Therese', correct: false }
    ]
  },
  {
    question: 'Which Spouse brother played Ben?',
    answers: [
      { text: 'Dylan', correct: false },
      { text: 'Cole', correct: true }
    ]
  },
  {
    question: 'What holiday does Chandler hate?',
    answers: [
      { text: 'Christmas', correct: false },
      { text: 'Thanksgiving', correct: true }
    ]
  }, 
  {
    question: 'Monica could not tell time until what age?',
    answers: [
      { text: '10', correct: false },
      { text: '13', correct: true },
      { text: '15', correct: false },
      { text: '12', correct: false }
    ]
  }
]










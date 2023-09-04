const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const submitButton = document.getElementById('submit-button');
const resultElement = document.getElementById('result');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const incorrectList = document.getElementById('incorrect-list');

const questions = [
  {
    question: 'What is 3 + 5?',
    options: ['7', '8', '10', '11'],
    correctAnswer: '8'
  },
  {
    question: 'Which planet is known as the "Red Planet"?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
    correctAnswer: 'William Shakespeare'
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
    correctAnswer: 'Tokyo'
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Gd', 'Go'],
    correctAnswer: 'Au'
  }
];

let currentQuestionIndex = 0;
let score = 0;
let incorrectQuestions = [];

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  options.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (selectedOption === correctAnswer) {
    resultElement.textContent = 'Correct!';
    score++;
  } else {
    resultElement.textContent = 'Incorrect. The correct answer is ' + correctAnswer;
    incorrectQuestions.push(questions[currentQuestionIndex].question);
  }
}

function displayResults() {
  questionElement.textContent = 'Quiz Completed!';
  options.forEach(option => option.style.display = 'none');
  submitButton.style.display = 'none';
  scoreElement.textContent = `${score} out of ${questions.length}`;
  incorrectQuestions.forEach(question => {
    const listItem = document.createElement('li');
    listItem.textContent = question;
    incorrectList.appendChild(listItem);
  });
  scoreContainer.style.display = 'block';
}

loadQuestion();

submitButton.addEventListener('click', () => {
  const selectedOption = document.querySelector('.option.selected');
  if (selectedOption) {
    checkAnswer(selectedOption.textContent);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      resultElement.textContent = '';
    } else {
      displayResults();
    }
  }
});

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
  });
});

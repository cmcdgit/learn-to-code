// questions for each language stored per language in a data folder so they can be easily maintained
import { pythonQuestions } from '../data/questions/python-questions.js';
import { cssQuestions } from '../data/questions/css-questions.js';
import { javascriptQuestions } from '../data/questions/javascript-questions.js';
import { cPlusPlusQuestions } from '../data/questions/cPlusPlus-questions.js';

// book recommendations stored in the same location for ease of maintainence
import { pythonBookRecommendations } from '../data/recommended-books/python-book-recommendations.js';
import { cssBookRecommendations } from '../data/recommended-books/css-book-recommendations.js';
import { javascriptBookRecommendations } from '../data/recommended-books/javascript-book-recommendations.js';
import { cPlusPlusBookRecommendations } from '../data/recommended-books/cPlusPlus-book-recommendations.js';

// keep track of current questions to avoid repeating
let currentQuestion;
let currentQuestionsAsked = [];
let currentQuestions;
let questionCounter;

document.addEventListener('DOMContentLoaded', function () {
  let options = document.getElementsByTagName('button');
  let currentPage = document
    .getElementsByTagName('body')[0]
    .getAttribute('data-page');

  for (let option of options) {
    option.addEventListener('click', function () {
      let language = this.getAttribute('data-language');
      let selection = this.getAttribute('data-selection');

      if (currentPage === 'index') {
        if (!selection && language) {
          document.getElementById('right-answers-total').textContent = 0;
          document.getElementById('wrong-answers-total').textContent = 0;
          currentQuestionsAsked = [];
          takeQuiz(language);
        } else if (!language && selection) {
          checkForCorrectAnswer(selection);
        }
      } else if (currentPage === 'books') {
        displayRecommendedBooks(language);
      }
    });
  }
});

function takeQuiz(language) {
  questionCounter = 0;

  // hide the results box again when starting a new game
  let resultsDisplayed = document.getElementById('resultsBox');
  resultsDisplayed.style.display = 'none';

  if (language === 'python') {
    currentQuestions = pythonQuestions;
  } else if (language === 'css') {
    currentQuestions = cssQuestions;
  } else if (language === 'javascript') {
    currentQuestions = javascriptQuestions;
  } else if (language === 'c++') {
    currentQuestions = cPlusPlusQuestions;
  }
  displayQuestion(currentQuestions);
}

function getUniqueRandomNumber(askedArray, maxNumber) {
  let questionNum;
  do {
    questionNum = Math.floor(Math.random() * maxNumber);
  } while (askedArray.includes(questionNum));

  askedArray.push(questionNum);
  return questionNum;
}

function endGame() {
  let finalRightAnswersTotal = parseInt(
    document.getElementById('right-answers-total').innerText
  );
  document.getElementById('right-answers-total').textContent = 0;
  document.getElementById('final-right-answers-total').textContent =
    finalRightAnswersTotal;

  let finalWrongAnswersTotal = parseInt(
    document.getElementById('wrong-answers-total').innerText
  );
  document.getElementById('wrong-answers-total').textContent = 0;
  document.getElementById('final-wrong-answers-total').textContent =
    finalWrongAnswersTotal;

  let resultsBox = document.getElementById('resultsBox');
  resultsBox.style.display = 'flex';

  let questionBox = document.getElementById('questionBox');
  questionBox.style.display = 'none';
}

function displayQuestion(questions) {
  let questionBox = document.getElementById('questionBox');
  questionBox.style.display = 'flex';

  let randomNum = getUniqueRandomNumber(currentQuestionsAsked, 29);

  currentQuestion = questions[randomNum];

  document.getElementById('question').textContent =
    questions[randomNum]['question'];

  // set difficulty level in question box
  document.getElementById('difficulty-rating').textContent =
    questions[randomNum]['difficulty'];

  // TODO: set colour code GREEN, AMBER, RED based on difficulty

  let listOfOptions = ['option0', 'option1', 'option2', 'option3'];

  let usedNums = [];
  for (let option of listOfOptions) {
    let randomOption = getUniqueRandomNumber(usedNums, 4);
    document.getElementById(option).textContent =
      questions[randomNum]['options'][randomOption];
  }
}

function checkForCorrectAnswer(selection) {
  let guessedAnswer = document.getElementById(`option${selection}`).innerText;

  if (guessedAnswer === currentQuestion['answer']) {
    incrementTotal('right-answers-total');
  } else {
    incrementTotal('wrong-answers-total');
  }

  if (questionCounter < 19) {
    questionCounter++;
    displayQuestion(currentQuestions);
  } else {
    endGame();
  }
}

function incrementTotal(answerType) {
  let currentTotal = parseInt(document.getElementById(answerType).innerText);
  document.getElementById(answerType).textContent = ++currentTotal;
}

/**
 * logic below is for recommended books section
 */

function displayRecommendedBooks(language) {
  let bookRecommendations;

  document.getElementById('all-books').style.display = 'flex';

  switch (language) {
    case 'python':
      bookRecommendations = pythonBookRecommendations;
      break;
    case 'css':
      bookRecommendations = cssBookRecommendations;
      break;
    case 'javascript':
      bookRecommendations = javascriptBookRecommendations;
      break;
    case 'c++':
      bookRecommendations = cPlusPlusBookRecommendations;
      break;
    default:
      break;
  }

  for (let bookIndex = 0; bookIndex < bookRecommendations.length; bookIndex++) {
    let amazon_link = bookRecommendations[bookIndex]['amazon_link'];
    let author = bookRecommendations[bookIndex]['author'];
    let best_for = bookRecommendations[bookIndex]['best_for'];
    let cover_image = bookRecommendations[bookIndex]['cover_image'];
    let description = bookRecommendations[bookIndex]['description'];
    let title = bookRecommendations[bookIndex]['title'];

    document.getElementById(`book${bookIndex}-title`).textContent = title;
    document.getElementById(`book${bookIndex}-author`).textContent = author;
    document.getElementById(`book${bookIndex}-description`).textContent =
      description;
    document.getElementById(`book${bookIndex}-best_for`).textContent = best_for;
    document.getElementById(`book${bookIndex}-amazon_link`).href = amazon_link;

    // console.log(document.getElementsByClassName("book")[bookIndex])

    document.getElementsByClassName('book')[
      bookIndex
    ].style.backgroundImage = `url("${cover_image}")`;
    //  no-repeat center center/cover;`
  }
}


import { pythonQuestions } from "../questions/python-questions.js";
import { cssQuestions } from "../questions/css-questions.js";
import { javascriptQuestions } from "../questions/javascript-questions.js";
import { cPlusPlusQuestions } from "../questions/cPlusPlus-questions.js";

import { pythonBookRecommendations } from "../recommended-books/python-book-recommendations.js";
import { cssBookRecommendations } from "../recommended-books/css-book-recommendations.js";
import { javascriptBookRecommendations } from "../recommended-books/javascript-book-recommendations.js";
import { cPlusPlusBookRecommendations } from "../recommended-books/cPlusPlus-book-recommendations.js";

let pythonQuestionsAsked = [];
let cssQuestionsAsked = [];
let javascriptQuestionsAsked = [];
let cPlusPlusQuestionsAsked = [];

let currentQuestion;
let currentQuestionsAsked;
let currentQuestions;
let questionCounter;

document.addEventListener("DOMContentLoaded", function() {
    let options = document.getElementsByTagName('button');

    for (let option of options) {
        option.addEventListener('click', function() {
            let language = this.getAttribute("language");
            let selection = this.getAttribute("selection");

            if (!selection && language) {
                console.log("language", language);
                resetAllQuestionsAskedArrays(); //todo: is this the correct place to reset????
                takeQuiz(language);
            } else if (!language && selection) {
                console.log("selection", selection)
                checkForCorrectAnswer(selection);
            }
        })
    }
})

function takeQuiz(language) {
    questionCounter = 0;

    // hide the results box again when starting a new game
    let resultsDisplayed = document.getElementById("resultsBox");
    resultsDisplayed.style.display = "none"

    if (language === "python") {
        // takePythonQuiz();
        currentQuestionsAsked = pythonQuestionsAsked;
        currentQuestions = pythonQuestions;
    } else if (language === "css") {
        // takeCSSQuiz();
        currentQuestionsAsked = cssQuestionsAsked;
        currentQuestions = cssQuestions;
    } else if (language === "javascript") {
        // takeJavaScriptQuiz();
        currentQuestionsAsked = javascriptQuestionsAsked;
        currentQuestions = javascriptQuestions;
    } else if (language === "c++") {
        // takeCPPQuiz();
        currentQuestionsAsked = cPlusPlusQuestionsAsked;
        currentQuestions = cPlusPlusQuestions;
    }
    displayQuestion(currentQuestionsAsked, currentQuestions);
    // console.log("About to reset...\n")
}

function resetAllQuestionsAskedArrays() { // is this working as it should????
    pythonQuestionsAsked = [];
    cssQuestionsAsked = [];
    javascriptQuestionsAsked = [];
    cPlusPlusQuestionsAsked = [];
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
    let finalRightAnswersTotal = parseInt(document.getElementById("right-answers-total").innerText);
    document.getElementById("right-answers-total").textContent = 0;
    document.getElementById("final-right-answers-total").textContent = finalRightAnswersTotal;

    let finalWrongAnswersTotal = parseInt(document.getElementById("wrong-answers-total").innerText);
    document.getElementById("wrong-answers-total").textContent = 0;
    document.getElementById("final-wrong-answers-total").textContent = finalWrongAnswersTotal;

    let resultsBox = document.getElementById("resultsBox");
    resultsBox.style.display = "block";

    let questionBox = document.getElementById("questionBox");
    questionBox.style.display = "none"

    console.log("finalRightAnswersTotal:", finalRightAnswersTotal);
    console.log("finalWrongAnswersTotal:", finalWrongAnswersTotal);
    console.log("GAME_OVER")
}

function displayQuestion(questionsAsked, questions) {

    let questionBox = document.getElementById("questionBox");
    questionBox.style.display = "block";

    let randomNum = getUniqueRandomNumber(questionsAsked, 29);

    currentQuestion = questions[randomNum];

    // console.log("currentQuestion");
    // console.log(currentQuestion);

    document.getElementById("question").textContent = questions[randomNum]['question'];

    let listOfOptions = [
        "option0",
        "option1",
        "option2",
        "option3",
    ]

    let usedNums = [];
    for (let option of listOfOptions) {
        let randomOption = getUniqueRandomNumber(usedNums, 4);
        document.getElementById(option).textContent = questions[randomNum]['options'][randomOption];
    }
}

function checkForCorrectAnswer(selection) {
    let guessedAnswer = document.getElementById(`option${selection}`).innerText;

    if (guessedAnswer === currentQuestion['answer']){
        incremenTotal('right-answers-total');
    } else {
        incremenTotal('wrong-answers-total');
    }

    if (questionCounter < 19) {
        questionCounter++;
        displayQuestion(currentQuestionsAsked, currentQuestions);
    } else {
        endGame();
    }

}

function incremenTotal(answerType) {
    let currentTotal = parseInt(document.getElementById(answerType).innerText);
    document.getElementById(answerType).textContent = ++currentTotal;
}

// function incrementWrongAnswerTotal() {

// }

// TODO: remove below when troubleshooting complete
// function takePythonQuiz() {
//     displayQuestion(pythonQuestionsAsked, pythonQuestions);
//     // console.log("pythonQuestions\n", pythonQuestions);
//     // console.log("pythonQuestionsAsked\n", pythonQuestionsAsked);
//     // console.log("pythonBookRecommendations\n", pythonBookRecommendations);
// }

// function takeCSSQuiz() {
//     displayQuestion(cssQuestionsAsked, cssQuestions);
//     // console.log("cssQuestions\n", cssQuestions);
//     // console.log("cssQuestionsAsked\n", cssQuestionsAsked);
//     // console.log("cssBookRecommendations\n", cssBookRecommendations);
// }

// function takeJavaScriptQuiz() {
//     displayQuestion(javascriptQuestionsAsked, javascriptQuestions);
//     // console.log("javascriptQuestions\n", javascriptQuestions);
//     // console.log("javascriptQuestionsAsked\n", javascriptQuestionsAsked);
//     // console.log("javascriptBookRecommendations\n", javascriptBookRecommendations);
// }

// function takeCPPQuiz() {
//     displayQuestion(cPlusPlusQuestionsAsked, cPlusPlusQuestions);
//     // console.log("cPlusPlusQuestions", cPlusPlusQuestions);
//     // console.log("cPlusPlusQuestionsAsked", cPlusPlusQuestionsAsked);
//     // console.log("cPlusPlusBookRecommendations", cPlusPlusBookRecommendations);
// }

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

document.addEventListener("DOMContentLoaded", function() {
    let options = document.getElementsByTagName('button');

    console.log('loaded...');

    for (let option of options) {
        option.addEventListener('click', function() {
            let language = this.getAttribute("language");
            takeQuiz(language);
        })
    }
})

function takeQuiz(language) {

    if (language === "python") {
        // takePythonQuiz();
        displayQuestion(pythonQuestionsAsked, pythonQuestions);
    } else if (language === "css") {
        // takeCSSQuiz();
        displayQuestion(cssQuestionsAsked, cssQuestions);
    } else if (language === "javascript") {
        // takeJavaScriptQuiz();
        displayQuestion(javascriptQuestionsAsked, javascriptQuestions);
    } else if (language === "c++") {
        // takeCPPQuiz();
        displayQuestion(cPlusPlusQuestionsAsked, cPlusPlusQuestions);
    }
}

function getUniqueRandomNumberUnder29(askedArray) {
    let questionNum
    do {
        questionNum = Math.floor(Math.random() * 29);
    } while (askedArray.includes(questionNum));

    askedArray.push(questionNum);
    return questionNum;
}

function displayQuestion(questionsAsked, questions) {
    let questionBox = document.getElementById("questionBox");
    questionBox.style.display = "block";

    let randomNum = getUniqueRandomNumberUnder29(questionsAsked);
    // console.log("questions[randomNum]['question']", questions[randomNum]['options'][0]);

    document.getElementById("question").textContent = questions[randomNum]['question'];
    document.getElementById("option1").textContent = questions[randomNum]['options'][0];
    document.getElementById("option2").textContent = questions[randomNum]['options'][1];
    document.getElementById("option3").textContent = questions[randomNum]['options'][2];
    document.getElementById("option4").textContent = questions[randomNum]['options'][3];
}

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
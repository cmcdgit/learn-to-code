
import { pythonQuestions } from "../questions/python-questions.js";
import { cssQuestions } from "../questions/css-questions.js";
import { javascriptQuestions } from "../questions/javascript-questions.js";
import { cPlusPlusQuestions } from "../questions/cPlusPlus-questions.js";

import { pythonBookRecommendations } from "../recommended-books/python-book-recommendations.js";
import { cssBookRecommendations } from "../recommended-books/css-book-recommendations.js";
import { javascriptBookRecommendations } from "../recommended-books/javascript-book-recommendations.js";
import { cPlusPlusBookRecommendations } from "../recommended-books/cPlusPlus-book-recommendations.js";

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
    let questionNum = Math.floor(Math.random() * 29);

    if (language === "python") {
        takePythonQuiz(questionNum);
    } else if (language === "css") {
        takeCSSQuiz(questionNum);
    } else if (language === "javascript") {
        takeJavaScriptQuiz(questionNum);
    } else if (language === "c++") {
        takeCPPQuiz(questionNum);
    }
}

function takePythonQuiz(questionNum) {
    console.log(questionNum);
    console.log(pythonQuestions[questionNum]);
    console.log(pythonQuestions);
    console.log(pythonBookRecommendations);
}

function takeCSSQuiz(questionNum) {
    console.log(questionNum);
    console.log(cssQuestions[questionNum]);
    console.log(cssQuestions);
    console.log(cssBookRecommendations);
}

function takeJavaScriptQuiz(questionNum) {
    console.log(questionNum);
    console.log(javascriptQuestions[questionNum]);
    console.log(javascriptQuestions);
    console.log(javascriptBookRecommendations);
}

function takeCPPQuiz(questionNum) {
    console.log(questionNum);
    console.log(cPlusPlusQuestions[questionNum]);
    console.log(cPlusPlusQuestions);
    console.log(cPlusPlusBookRecommendations);
}
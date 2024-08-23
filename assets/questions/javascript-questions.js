export const javascriptQuestions = [
  {
    question:
      "What is the output of the following code?\nconsole.log(2 + '2');",
    options: ['22', '4', 'NaN', 'undefined'],
    answer: '22',
    difficulty: 'Easy',
  },
  {
    question:
      'Which of the following is not a valid way to declare a variable in JavaScript?',
    options: ['var', 'let', 'const', 'int'],
    answer: 'int',
    difficulty: 'Easy',
  },
  {
    question:
      'What is the correct way to write an arrow function in JavaScript?',
    options: [
      'function => {}',
      '() => {}',
      '(function) => {}',
      '=> function() {}',
    ],
    answer: '() => {}',
    difficulty: 'Easy',
  },
  {
    question:
      'Which of the following data types is not supported in JavaScript?',
    options: ['String', 'Number', 'Boolean', 'Character'],
    answer: 'Character',
    difficulty: 'Easy',
  },
  {
    question: 'Which symbol is used for single-line comments in JavaScript?',
    options: ['//', '/*', '<!--', '##'],
    answer: '//',
    difficulty: 'Easy',
  },
  {
    question:
      'What is the output of the following code?\nconsole.log(typeof null);',
    options: ['object', 'null', 'undefined', 'boolean'],
    answer: 'object',
    difficulty: 'Medium',
  },
  {
    question:
      'Which of the following is a way to define a string in JavaScript?',
    options: ["'Hello'", '"Hello"', '`Hello`', 'All of the above'],
    answer: 'All of the above',
    difficulty: 'Medium',
  },
  {
    question:
      'How can you add an element to the end of an array in JavaScript?',
    options: ['.push()', '.add()', '.append()', '.insert()'],
    answer: '.push()',
    difficulty: 'Medium',
  },
  {
    question:
      'What will be the output of the following code?\nconsole.log(0 == false);',
    options: ['true', 'false', 'undefined', 'Error'],
    answer: 'true',
    difficulty: 'Medium',
  },
  {
    question:
      "What is the result of the following code?\nconsole.log(1 === '1');",
    options: ['true', 'false', 'undefined', 'Error'],
    answer: 'false',
    difficulty: 'Medium',
  },
  {
    question: 'Which of the following is not a valid JavaScript loop?',
    options: ['for', 'while', 'foreach', 'do...while'],
    answer: 'foreach',
    difficulty: 'Medium',
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      'It refers to the current object',
      'It refers to a global variable',
      'It refers to a function',
      'It refers to a class',
    ],
    answer: 'It refers to the current object',
    difficulty: 'Medium',
  },
  {
    question:
      'What will be the output of the following code?\nconsole.log([1, 2, 3] + [4, 5, 6]);',
    options: ['1,2,34,5,6', '1,2,3,4,5,6', 'Error', 'undefined'],
    answer: '1,2,34,5,6',
    difficulty: 'Medium',
  },
  {
    question:
      'Which of the following methods is used to parse a JSON string into a JavaScript object?',
    options: [
      'JSON.stringify()',
      'JSON.parse()',
      'JSON.object()',
      'JSON.toObject()',
    ],
    answer: 'JSON.parse()',
    difficulty: 'Medium',
  },
  {
    question: 'How can you create an object in JavaScript?',
    options: [
      'var obj = {}',
      'var obj = Object()',
      'var obj = new Object()',
      'All of the above',
    ],
    answer: 'All of the above',
    difficulty: 'Medium',
  },
  {
    question:
      'What is the output of the following code?\nconsole.log([1, 2, 3].length);',
    options: ['3', '2', '1', 'undefined'],
    answer: '3',
    difficulty: 'Medium',
  },
  {
    question: 'What will the following code return?\nconsole.log(typeof NaN);',
    options: ['number', 'NaN', 'undefined', 'object'],
    answer: 'number',
    difficulty: 'Medium',
  },
  {
    question: 'How do you declare a function in JavaScript?',
    options: [
      'function myFunction()',
      'def myFunction()',
      'declare myFunction()',
      'func myFunction()',
    ],
    answer: 'function myFunction()',
    difficulty: 'Medium',
  },
  {
    question:
      'What is the output of the following code?\nconsole.log(!!false);',
    options: ['false', 'true', 'undefined', 'null'],
    answer: 'false',
    difficulty: 'Medium',
  },
  {
    question: "What does 'use strict' do in JavaScript?",
    options: [
      'Enforces stricter parsing and error handling',
      'Allows the use of undeclared variables',
      'Automatically declares all variables',
      'Turns off JavaScript errors',
    ],
    answer: 'Enforces stricter parsing and error handling',
    difficulty: 'Hard',
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'==' checks value, '===' checks value and type",
      "'==' checks value and type, '===' checks value",
      'There is no difference',
      "'==' is for strings, '===' is for numbers",
    ],
    answer: "'==' checks value, '===' checks value and type",
    difficulty: 'Hard',
  },
  {
    question:
      'Which of the following is a valid JavaScript function expression?',
    options: [
      'function myFunc() {}',
      'let myFunc = function() {}',
      'let myFunc = => {}',
      'func myFunc = function() {}',
    ],
    answer: 'let myFunc = function() {}',
    difficulty: 'Hard',
  },
  {
    question: 'What is the purpose of a JavaScript closure?',
    options: [
      'To create a private scope',
      'To declare variables',
      'To iterate over arrays',
      'To handle exceptions',
    ],
    answer: 'To create a private scope',
    difficulty: 'Hard',
  },
  {
    question:
      "Which of the following is true about JavaScript's 'let' and 'var' keywords?",
    options: [
      "'let' is block-scoped, 'var' is function-scoped",
      "'let' is function-scoped, 'var' is block-scoped",
      'Both are block-scoped',
      'Both are function-scoped',
    ],
    answer: "'let' is block-scoped, 'var' is function-scoped",
    difficulty: 'Hard',
  },
  {
    question:
      "What will be the output of the following code?\nconsole.log(2 + '2' - 2);",
    options: ['2', '22', '0', '20'],
    answer: '20',
    difficulty: 'Hard',
  },
  {
    question: "What does the 'map()' function do in JavaScript?",
    options: [
      'It creates a new array with the results of calling a provided function on every element',
      'It filters the elements of an array',
      'It reduces the elements of an array',
      'It finds the first element that satisfies a condition',
    ],
    answer:
      'It creates a new array with the results of calling a provided function on every element',
    difficulty: 'Hard',
  },
  {
    question: 'How can you check if a variable is an array in JavaScript?',
    options: [
      'Array.isArray(variable)',
      "typeof variable === 'array'",
      'variable instanceof Array',
      'Both Array.isArray(variable) and variable instanceof Array',
    ],
    answer: 'Both Array.isArray(variable) and variable instanceof Array',
    difficulty: 'Hard',
  },
  {
    question:
      'What will be the output of the following code?\nlet x = [1, 2, 3];\nconsole.log(typeof x);',
    options: ['object', 'array', 'number', 'undefined'],
    answer: 'object',
    difficulty: 'Hard',
  },
  {
    question:
      'Which of the following methods is used to return the character at a specified index in a string?',
    options: ['.charAt()', '.getChar()', '.charCodeAt()', '.indexOf()'],
    answer: '.charAt()',
    difficulty: 'Hard',
  },
];

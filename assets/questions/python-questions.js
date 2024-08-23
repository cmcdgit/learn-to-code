export const pythonQuestions = [
  {
    question: 'What is the output of the following code?\nprint(2 ** 3)',
    options: ['6', '8', '9', '12'],
    answer: '8',
    difficulty: 'Easy',
  },
  {
    question: 'Which of the following is not a valid Python data type?',
    options: ['int', 'float', 'real', 'list'],
    answer: 'real',
    difficulty: 'Easy',
  },
  {
    question: 'What does the len() function do in Python?',
    options: [
      'Returns the length of an object',
      'Returns the type of an object',
      'Returns the sum of elements in a list',
      'Returns the maximum value in a list',
    ],
    answer: 'Returns the length of an object',
    difficulty: 'Easy',
  },
  {
    question:
      "What is the output of the following code?\nprint('Hello' + 'World')",
    options: ['Hello World', 'HelloWorld', 'Hello+World', 'Error'],
    answer: 'HelloWorld',
    difficulty: 'Easy',
  },
  {
    question:
      'Which of the following is the correct way to create a set in Python?',
    options: ['{1, 2, 3}', '[1, 2, 3]', '(1, 2, 3)', "{1: 'one', 2: 'two'}"],
    answer: '{1, 2, 3}',
    difficulty: 'Easy',
  },
  {
    question: 'What will be the output of the following code?\nprint(10 / 3)',
    options: ['3', '3.33', '3.0', '3.3333333333333335'],
    answer: '3.3333333333333335',
    difficulty: 'Medium',
  },
  {
    question:
      'Which of the following methods can be used to add an element to a list in Python?',
    options: ['.append()', '.insert()', '.add()', '.extend()'],
    answer: '.append()',
    difficulty: 'Medium',
  },
  {
    question:
      'What is the output of the following code?\nprint(type([]) is list)',
    options: ['True', 'False', 'Error', 'None'],
    answer: 'True',
    difficulty: 'Medium',
  },
  {
    question:
      'Which of the following statements is true about Python dictionaries?',
    options: [
      'They are ordered',
      'They are unordered',
      'They can have duplicate keys',
      'They can contain lists as keys',
    ],
    answer: 'They are unordered',
    difficulty: 'Medium',
  },
  {
    question: "What will be the output of the following code?\nprint(bool(''))",
    options: ['True', 'False', 'Error', 'None'],
    answer: 'False',
    difficulty: 'Medium',
  },
  {
    question: "What is the purpose of the 'self' keyword in Python classes?",
    options: [
      'To refer to the class itself',
      'To refer to the instance of the class',
      'To define a global variable',
      'To define a static method',
    ],
    answer: 'To refer to the instance of the class',
    difficulty: 'Medium',
  },
  {
    question:
      'Which of the following is the correct syntax for a lambda function in Python?',
    options: [
      'lambda x: x + 1',
      'lambda x -> x + 1',
      'def lambda(x): x + 1',
      'lambda: x + 1',
    ],
    answer: 'lambda x: x + 1',
    difficulty: 'Medium',
  },
  {
    question: "What will be the output of the following code?\nprint('2' + 3)",
    options: ['5', '23', 'Error', 'None'],
    answer: 'Error',
    difficulty: 'Medium',
  },
  {
    question: 'How can you concatenate two tuples in Python?',
    options: [
      'tuple1.append(tuple2)',
      'tuple1 + tuple2',
      'tuple1.extend(tuple2)',
      'tuple1.add(tuple2)',
    ],
    answer: 'tuple1 + tuple2',
    difficulty: 'Medium',
  },
  {
    question:
      'What is the output of the following code?\nprint([i for i in range(5) if i % 2 == 0])',
    options: ['[1, 3, 5]', '[0, 2, 4]', '[1, 2, 3, 4]', '[0, 1, 2, 3, 4]'],
    answer: '[0, 2, 4]',
    difficulty: 'Medium',
  },
  {
    question: 'Which of the following is a mutable data type in Python?',
    options: ['tuple', 'str', 'list', 'int'],
    answer: 'list',
    difficulty: 'Medium',
  },
  {
    question: 'What is the output of the following code?\nprint(type((1,)))',
    options: [
      "<class 'tuple'>",
      "<class 'int'>",
      "<class 'list'>",
      "<class 'dict'>",
    ],
    answer: "<class 'tuple'>",
    difficulty: 'Medium',
  },
  {
    question: 'How can you handle exceptions in Python?',
    options: [
      "Using the 'try-except' block",
      "Using the 'catch' block",
      "Using the 'error' block",
      "Using the 'finally' block",
    ],
    answer: "Using the 'try-except' block",
    difficulty: 'Medium',
  },
  {
    question: 'What is the output of the following code?\nprint(2 == 2.0)',
    options: ['True', 'False', 'Error', 'None'],
    answer: 'True',
    difficulty: 'Medium',
  },
  {
    question: 'Which of the following is not a keyword in Python?',
    options: ['global', 'lambda', 'nonlocal', 'static'],
    answer: 'static',
    difficulty: 'Medium',
  },
  {
    question: "What is the purpose of the 'pass' statement in Python?",
    options: [
      'To skip the current iteration in a loop',
      'To do nothing and move to the next statement',
      'To return a value',
      'To break out of a loop',
    ],
    answer: 'To do nothing and move to the next statement',
    difficulty: 'Medium',
  },
  {
    question: "What is the result of the following code?\nprint(3 * 'abc')",
    options: ['abcabcabc', 'abcabc', 'Error', 'None'],
    answer: 'abcabcabc',
    difficulty: 'Medium',
  },
  {
    question: 'How do you create a virtual environment in Python?',
    options: [
      'python -m venv env',
      'python create venv',
      'venv create env',
      'python -m env create',
    ],
    answer: 'python -m venv env',
    difficulty: 'Hard',
  },
  {
    question:
      'What is the time complexity of searching for an element in a balanced binary search tree?',
    options: ['O(log n)', 'O(n)', 'O(1)', 'O(n^2)'],
    answer: 'O(log n)',
    difficulty: 'Hard',
  },
  {
    question: "Which of the following is true about Python's 'with' statement?",
    options: [
      'It simplifies exception handling',
      'It is used to declare variables',
      'It is used to define functions',
      'It is used for loop control',
    ],
    answer: 'It simplifies exception handling',
    difficulty: 'Hard',
  },
  {
    question:
      'What will be the output of the following code?\nclass A:\n\tdef __init__(self):\n\t\tpass\n\nclass B(A):\n\tdef __init__(self):\n\t\tpass\n\nprint(issubclass(B, A))',
    options: ['True', 'False', 'Error', 'None'],
    answer: 'True',
    difficulty: 'Hard',
  },
  {
    question:
      "What is the output of the following code?\nprint([i.lower() for i in 'PYTHON'])",
    options: [
      "['python']",
      "['p', 'y', 't', 'h', 'o', 'n']",
      "['P', 'Y', 'T', 'H', 'O', 'N']",
      "{'p', 'y', 't', 'h', 'o', 'n'}",
    ],
    answer: "['p', 'y', 't', 'h', 'o', 'n']",
    difficulty: 'Hard',
  },
  {
    question:
      'Which of the following is not a valid way to define a generator in Python?',
    options: [
      "Using a function with 'yield'",
      'Using a comprehension with parentheses',
      "Using a normal function with 'return'",
      'Using a generator expression',
    ],
    answer: "Using a normal function with 'return'",
    difficulty: 'Hard',
  },
  {
    question:
      'Which of the following is used to create an asynchronous function in Python?',
    options: ['async def', 'async function', 'await def', 'asyncio function'],
    answer: 'async def',
    difficulty: 'Hard',
  },
];

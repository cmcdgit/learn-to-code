export const cPlusPlusQuestions = [
  {
    question:
      'Which of the following is the correct syntax to declare a variable in C++?',
    difficulty: 'Easy',
    options: [
      'int variableName;',
      'variableName int;',
      'int variableName',
      'int; variableName',
    ],
    answer: 'int variableName;',
  },
  {
    question: 'What is the size of an int data type in C++?',
    difficulty: 'Easy',
    options: ['2 bytes', '4 bytes', '8 bytes', 'It depends on the system'],
    answer: 'It depends on the system',
  },
  {
    question: 'Which of the following correctly declares an array in C++?',
    difficulty: 'Easy',
    options: ['int array[10];', 'array{10};', 'int array;', 'array int[10];'],
    answer: 'int array[10];',
  },
  {
    question:
      'What is the output of the following code?\n\n```cpp\nint main() {\n    int x = 5;\n    std::cout << ++x;\n    return 0;\n}\n```',
    difficulty: 'Easy',
    options: ['5', '6', '4', 'None of the above'],
    answer: '6',
  },
  {
    question: 'Which of the following is used to define a constant in C++?',
    difficulty: 'Easy',
    options: ['#define', 'const', 'both #define and const', 'constant'],
    answer: 'both #define and const',
  },
  {
    question:
      'What is the output of the following code?\n\n```cpp\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    std::cout << arr[2];\n    return 0;\n}\n```',
    difficulty: 'Easy',
    options: ['1', '2', '3', '4'],
    answer: '3',
  },
  {
    question: 'Which of the following is not a valid access specifier in C++?',
    difficulty: 'Medium',
    options: ['private', 'protected', 'public', 'internal'],
    answer: 'internal',
  },
  {
    question:
      'Which of the following is used to dynamically allocate memory in C++?',
    difficulty: 'Medium',
    options: ['malloc()', 'calloc()', 'new', 'All of these options'],
    answer: 'new',
  },
  {
    question: 'Which of the following statements is true about destructors?',
    difficulty: 'Medium',
    options: [
      'A class can have multiple destructors.',
      'Destructors are called automatically when an object goes out of scope.',
      'Destructors can take arguments.',
      'Destructors must be explicitly called.',
    ],
    answer:
      'Destructors are called automatically when an object goes out of scope.',
  },
  {
    question: 'Which of the following operators cannot be overloaded in C++?',
    difficulty: 'Medium',
    options: ['+', '==', '::', '[]'],
    answer: '::',
  },
  {
    question: 'Which of the following is not a valid loop structure in C++?',
    difficulty: 'Medium',
    options: ['for', 'while', 'do-while', 'foreach'],
    answer: 'foreach',
  },
  {
    question:
      "What will be the output of the following code?\n\n```cpp\nint main() {\n    int x = 10, y = 20;\n    std::swap(x, y);\n    std::cout << x << ' ' << y;\n    return 0;\n}\n```",
    difficulty: 'Medium',
    options: ['10 20', '20 10', '0 0', 'None of the above'],
    answer: '20 10',
  },
  {
    question:
      'What does the keyword `virtual` indicate in a member function declaration?',
    difficulty: 'Medium',
    options: [
      'The function can be overridden in a derived class.',
      'The function cannot be overridden in a derived class.',
      'The function is static.',
      'The function is protected.',
    ],
    answer: 'The function can be overridden in a derived class.',
  },
  {
    question: 'Which of the following correctly defines a constructor in C++?',
    difficulty: 'Medium',
    options: [
      'A function that is called automatically when an object is created.',
      'A function that has the same name as the class and does not return any value.',
      'A function that can have default arguments.',
      'All of these options',
    ],
    answer: 'All of these options',
  },
  {
    question: 'Which of the following is true about templates in C++?',
    difficulty: 'Medium',
    options: [
      'Templates allow functions and classes to operate with generic types.',
      'Templates can only be used with classes.',
      'Templates are only available in C++11 and later.',
      'Templates do not support overloading.',
    ],
    answer:
      'Templates allow functions and classes to operate with generic types.',
  },
  {
    question: 'Which of the following is an invalid statement in C++?',
    difficulty: 'Medium',
    options: ['int* p;', 'int &ref = 5;', 'int arr[10];', 'int main() {}'],
    answer: 'int &ref = 5;',
  },
  {
    question:
      'What will be the output of the following code?\n\n```cpp\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr = arr + 1;\n    std::cout << *ptr;\n    return 0;\n}\n```',
    difficulty: 'Medium',
    options: ['1', '2', '3', '4'],
    answer: '2',
  },
  {
    question:
      'Which of the following is the correct way to declare a pointer to a function that takes an int and returns an int?',
    difficulty: 'Hard',
    options: [
      'int *func(int);',
      'int (*func)(int);',
      'int *(*func)(int);',
      'int *func* (int);',
    ],
    answer: 'int (*func)(int);',
  },
  {
    question:
      'What is the output of the following code?\n\n```cpp\nclass Base {\npublic:\n    virtual void show() { std::cout << "Base class"; }\n};\nclass Derived : public Base {\npublic:\n    void show() { std::cout << "Derived class"; }\n};\nint main() {\n    Base* b = new Derived;\n    b->show();\n    return 0;\n}\n```',
    difficulty: 'Hard',
    options: [
      'Base class',
      'Derived class',
      'Compilation error',
      'Runtime error',
    ],
    answer: 'Derived class',
  },
  {
    question: "Which of the following best describes 'RAII' in C++?",
    difficulty: 'Hard',
    options: [
      'Resource Allocation Is Initialization',
      'Run-time Allocation and Initialization',
      'Resource Allocation and Inheritance Implementation',
      'Resource Allocation is Inheritance',
    ],
    answer: 'Resource Allocation Is Initialization',
  },
  {
    question:
      'What will be the output of the following code?\n\n```cpp\nint main() {\n    int a = 10, b = 5;\n    std::cout << a+++b;\n    return 0;\n}\n```',
    difficulty: 'Hard',
    options: ['15', '14', 'Syntax error', 'Undefined behavior'],
    answer: '15',
  },
  {
    question: 'Which of the following is true about inline functions in C++?',
    difficulty: 'Hard',
    options: [
      'Inline functions are always expanded inline by the compiler.',
      'Inline functions reduce the overhead of function calls.',
      'Inline functions cannot have recursive calls.',
      'Inline functions must be defined inside the class definition.',
    ],
    answer: 'Inline functions reduce the overhead of function calls.',
  },
  {
    question: "What does the term 'multiple inheritance' mean in C++?",
    difficulty: 'Hard',
    options: [
      'A class can inherit from multiple base classes.',
      'A class can inherit multiple times from the same base class.',
      'A base class can inherit from multiple derived classes.',
      'None of the above',
    ],
    answer: 'A class can inherit from multiple base classes.',
  },
  {
    question: "What is a 'friend function' in C++?",
    difficulty: 'Hard',
    options: [
      'A function that can access private and protected members of another class.',
      "A function that is defined outside the class but has access to the class's members.",
      'Both A and B',
      'A function that is declared inside the class but is defined outside.',
    ],
    answer: 'Both A and B',
  },
  {
    question: 'Which of the following is used to catch exceptions in C++?',
    difficulty: 'Hard',
    options: ['catch', 'try', 'throw', 'All of these options'],
    answer: 'catch',
  },
  {
    question: "What does the term 'polymorphism' mean in C++?",
    difficulty: 'Hard',
    options: [
      'The ability of a function or operator to work in more than one form.',
      'The ability of a function to change its behavior at runtime.',
      'The ability of a class to have multiple constructors.',
      'The ability of a class to inherit from multiple base classes.',
    ],
    answer:
      'The ability of a function or operator to work in more than one form.',
  },
  {
    question:
      'What will be the output of the following code?\n\n```cpp\nint main() {\n    int x = 5;\n    auto y = [&x]() { return ++x; };\n    std::cout << y();\n    return 0;\n}\n```',
    difficulty: 'Hard',
    options: ['5', '6', 'Compilation error', 'Undefined behavior'],
    answer: '6',
  },
  {
    question:
      'Which of the following is the correct syntax for a lambda function in C++?',
    difficulty: 'Hard',
    options: ['[]() {}', '[] {}', '() [] {}', '{}[] ()'],
    answer: '[]() {}',
  },
  {
    question: "Which of the following is true about 'smart pointers' in C++?",
    difficulty: 'Hard',
    options: [
      'Smart pointers automatically manage memory by deleting the object when it is no longer in use.',
      'Smart pointers are a C++11 feature.',
      'Smart pointers can prevent memory leaks and dangling pointers.',
      'All of these options',
    ],
    answer: 'All of these options',
  },
];

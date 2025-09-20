import { useState } from "react";

// Mock quiz database
const quizData = {
  Python: {
    easy: [
      { question: "What symbol is used for comments in Python?", options: ["//", "#", "/* */", "--"], answer: "#" },
      { question: "Which function is used to display output?", options: ["echo()", "print()", "out()", "show()"], answer: "print()" },
      { question: "What is the file extension of Python files?", options: [".js", ".py", ".java", ".cpp"], answer: ".py" },
    ],
    moderate: [
      { question: "Which keyword is used to define a function in Python?", options: ["func", "def", "function", "lambda"], answer: "def" },
      { question: "What does len() function do?", options: ["Length", "Loop", "List", "None"], answer: "Length" },
      { question: "Which of the following is mutable?", options: ["Tuple", "String", "List", "Int"], answer: "List" },
    ],
    difficult: [
      { question: "Which module is used for regular expressions in Python?", options: ["regex", "re", "pyregex", "exp"], answer: "re" },
      { question: "What is the output of 3 * 'abc'?", options: ["abc3", "abcabcabc", "error", "3abc"], answer: "abcabcabc" },
      { question: "Which keyword is used for exception handling?", options: ["catch", "except", "error", "trycatch"], answer: "except" },
    ],
  },

  JavaScript: {
    easy: [
      { question: "Which keyword is used for variable declaration?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
      { question: "Which symbol is used for comments?", options: ["//", "#", "<!--", "%%"], answer: "//" },
      { question: "What is the file extension of JS files?", options: [".java", ".js", ".py", ".html"], answer: ".js" },
    ],
    moderate: [
      { question: "Which method converts JSON to object?", options: ["JSON.stringify", "JSON.parse", "parse.JSON", "objectify"], answer: "JSON.parse" },
      { question: "Which operator is strict equality?", options: ["==", "===", "!=", "!=="], answer: "===" },
      { question: "What will typeof null return?", options: ["null", "object", "undefined", "NaN"], answer: "object" },
    ],
    difficult: [
      { question: "Which event is fired when DOM is fully loaded?", options: ["onload", "DOMContentLoaded", "ready", "domload"], answer: "DOMContentLoaded" },
      { question: "Which concept allows functions inside functions?", options: ["Hoisting", "Closure", "Callback", "Promise"], answer: "Closure" },
      { question: "What is the output of 2 + '2'?", options: ["22", "4", "error", "NaN"], answer: "22" },
    ],
  },
   "HTML/CSS": {
    easy: [
      { question: "Extension for HTML files?", options: [".html", ".htm", "Both", "None"], answer: "Both" },
      { question: "Tag for line break?", options: ["<br>", "<hr>", "<p>", "<lb>"], answer: "<br>" },
      { question: "CSS stands for?", options: ["Cascading Style Sheets", "Computer Style System", "Color Style Syntax", "None"], answer: "Cascading Style Sheets" },
      { question: "Which is block element?", options: ["<span>", "<div>", "<b>", "<i>"], answer: "<div>" },
      { question: "Which sets background color?", options: ["background", "bgcolor", "color", "back"], answer: "background" },
      { question: "Which makes text bold?", options: ["<strong>", "<i>", "<u>", "<em>"], answer: "<strong>" },
    ],
    moderate: [
      { question: "Which is semantic tag?", options: ["<header>", "<div>", "<span>", "<b>"], answer: "<header>" },
      { question: "Which sets border radius?", options: ["border", "radius", "border-radius", "corner"], answer: "border-radius" },
      { question: "Which selector selects id?", options: [".class", "#id", "*", "element"], answer: "#id" },
      { question: "Which CSS unit is relative?", options: ["px", "em", "cm", "mm"], answer: "em" },
      { question: "Which is default HTML5 doctype?", options: ["<!DOCTYPE html>", "<!HTML>", "<!DOCTYPE5>", "<!DTD html>"], answer: "<!DOCTYPE html>" },
      { question: "Which property makes flexbox?", options: ["display: flex", "flex: display", "grid: flex", "layout: flex"], answer: "display: flex" },
    ],
    difficult: [
      { question: "Which pseudo-class selects nth child?", options: [":nth-child()", ":child()", ":nth()", ":select()"], answer: ":nth-child()" },
      { question: "Which property enables grid?", options: ["display: grid", "grid: on", "layout: grid", "grid: flex"], answer: "display: grid" },
      { question: "Which attribute is not global?", options: ["id", "class", "style", "href"], answer: "href" },
      { question: "Which tag supports responsive design?", options: ["<meta>", "<link>", "<style>", "<script>"], answer: "<meta>" },
      { question: "Which CSS function defines variables?", options: ["var()", "def()", "custom()", "set()"], answer: "var()" },
      { question: "Which CSS property controls z-order?", options: ["z-index", "position", "layer", "depth"], answer: "z-index" },
    ],
  },
  
  Java: {
    easy: [
      { question: "Extension for Java files?", options: [".java", ".class", ".jav", ".j"], answer: ".java" },
      { question: "Which method starts execution?", options: ["main()", "start()", "run()", "execute()"], answer: "main()" },
      { question: "Keyword to create object?", options: ["malloc", "new", "create", "alloc"], answer: "new" },
      { question: "Which is not a primitive type?", options: ["int", "boolean", "String", "char"], answer: "String" },
      { question: "Which keyword is used for inheritance?", options: ["this", "super", "extends", "inherits"], answer: "extends" },
      { question: "Which symbol is used for single-line comments?", options: ["//", "#", "/* */", "--"], answer: "//" },
    ],
    moderate: [
      { question: "Default package in Java?", options: ["java.lang", "java.util", "default", "none"], answer: "java.lang" },
      { question: "Which is not OOP?", options: ["Encapsulation", "Abstraction", "Polymorphism", "Compilation"], answer: "Compilation" },
      { question: "Which handles exceptions?", options: ["try-catch", "throw", "error", "except"], answer: "try-catch" },
      { question: "Which creates thread?", options: ["Runnable", "Thread", "Both", "None"], answer: "Both" },
      { question: "Which is wrapper class?", options: ["Integer", "int", "Char", "bool"], answer: "Integer" },
      { question: "Which converts string to int?", options: ["Integer.parseInt()", "toInt()", "parseInt()", "convert()"], answer: "Integer.parseInt()" },
    ],
    difficult: [
      { question: "Which class is parent of all?", options: ["Object", "Base", "Root", "Super"], answer: "Object" },
      { question: "Which keyword prevents inheritance?", options: ["final", "sealed", "private", "stop"], answer: "final" },
      { question: "Which is marker interface?", options: ["Serializable", "Cloneable", "Both", "None"], answer: "Both" },
      { question: "Which memory stores objects?", options: ["Stack", "Heap", "Registers", "Static"], answer: "Heap" },
      { question: "Which is not a valid access modifier?", options: ["public", "protected", "private", "friendly"], answer: "friendly" },
      { question: "Which JVM component executes bytecode?", options: ["JIT", "Interpreter", "Compiler", "Loader"], answer: "Interpreter" },
    ],
  },

  Cpp: {
    easy: [
      { question: "Which extension is used for C++ files?", options: [".c", ".cpp", ".java", ".cs"], answer: ".cpp" },
      { question: "Which symbol is used for single-line comments?", options: ["//", "#", "/* */", "--"], answer: "//" },
      { question: "Which is the insertion operator?", options: ["<<", ">>", "::", "->"], answer: "<<" },
    ],
    moderate: [
      { question: "Which keyword is used to define a class?", options: ["object", "struct", "class", "define"], answer: "class" },
      { question: "Which loop checks condition after execution?", options: ["for", "while", "do-while", "foreach"], answer: "do-while" },
      { question: "Which header file is used for cout?", options: ["<stdio.h>", "<iostream>", "<conio.h>", "<stdlib.h>"], answer: "<iostream>" },
    ],
    difficult: [
      { question: "Which concept is used to achieve runtime polymorphism?", options: ["Function Overloading", "Operator Overloading", "Virtual Functions", "Templates"], answer: "Virtual Functions" },
      { question: "Which keyword prevents class inheritance?", options: ["final", "private", "sealed", "protected"], answer: "final" },
      { question: "Which feature is not part of OOP?", options: ["Encapsulation", "Abstraction", "Polymorphism", "Recursion"], answer: "Recursion" },
    ],
  },
};

export default function QuizApp() {
  const [language, setLanguage] = useState("Python");
  const [level, setLevel] = useState("easy");
  const [quiz, setQuiz] = useState([]);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const getRandomQuestions = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const generateQuiz = () => {
    const questions = quizData[language][level];
    const selectedQuestions = getRandomQuestions(questions, Math.min(6, questions.length));
    setQuiz(selectedQuestions);
    setSelected({});
    setSubmitted(false);
  };

  const handleSelect = (qIndex, option) => {
    if (!submitted) {
      setSelected({ ...selected, [qIndex]: option });
    }
  };

  const submitQuiz = () => setSubmitted(true);

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white flex flex-col items-center p-6">
      <div className="bg-[#1a1a2e] p-6 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.6)] w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-fuchsia-400 mb-2">CodeShastra Quiz</h1>
        <p className="text-gray-400 mb-4">Choose a language & difficulty to test yourself</p>

        <div className="flex gap-4 mb-6 flex-wrap">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-black border border-purple-500 rounded-lg px-3 py-2"
          >
            {Object.keys(quizData).map((lang) => (
              <option key={lang}>{lang}</option>
            ))}
          </select>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-black border border-purple-500 rounded-lg px-3 py-2"
          >
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>

          <button
            onClick={generateQuiz}
            className="bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-2 rounded-xl shadow-lg"
          >
            Generate Quiz
          </button>

          <button
            onClick={() => setQuiz([])}
            className="px-4 py-2 border border-gray-500 rounded-xl"
          >
            Reset
          </button>
        </div>

        {quiz.length > 0 && (
          <div className="space-y-6">
            {quiz.map((q, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#111122] shadow-[0_0_10px_rgba(168,85,247,0.4)]"
              >
                <h2 className="mb-3 font-semibold text-lg">
                  Q{i + 1}. {q.question}
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {q.options.map((opt, j) => {
                    const isSelected = selected[i] === opt;
                    const isCorrect = q.answer === opt;

                    return (
                      <button
                        key={j}
                        onClick={() => handleSelect(i, opt)}
                        className={`px-4 py-2 rounded-lg border 
                          ${
                            submitted
                              ? isCorrect
                                ? "bg-green-600 border-green-400"
                                : isSelected
                                ? "bg-red-600 border-red-400"
                                : "bg-[#1a1a2e] border-purple-400"
                              : isSelected
                              ? "bg-purple-700 border-purple-400"
                              : "bg-[#1a1a2e] border-gray-600"
                          }`}
                      >
                        {String.fromCharCode(65 + j)}. {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {!submitted && (
              <button
                onClick={submitQuiz}
                className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2 rounded-xl shadow-lg"
              >
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

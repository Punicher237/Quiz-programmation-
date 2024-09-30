// Questions pour chaque langage
const questions = {
    python: [
        {
            question: "Quelle fonction utilise-t-on pour afficher du texte en Python ?",
            choices: ["print()", "console.log()", "echo()", "System.out.println()"],
            correctAnswer: 0
        },
        {
            question: "Comment déclare-t-on une liste en Python ?",
            choices: ["list = []", "list = ()", "list = {}", "list = <>"],
            correctAnswer: 0
        },
        {
            question: "Quel mot-clé utilise-t-on pour définir une fonction en Python ?",
            choices: ["function", "def", "fun", "define"],
            correctAnswer: 1
        },
        {
            question: "Comment commence-t-on une boucle 'for' en Python ?",
            choices: ["for (i = 0; i < 10; i++)", "for i in range(10):", "for (i in range(10))", "foreach (i in range(10))"],
            correctAnswer: 1
        },
        {
            question: "Quel est l'opérateur d'exponentiation en Python ?",
            choices: ["^", "**", "^^", "//"],
            correctAnswer: 1
        },
        {
            question: "Quelle méthode utilise-t-on pour ajouter un élément à la fin d'une liste en Python ?",
            choices: ["list.add()", "list.append()", "list.insert()", "list.push()"],
            correctAnswer: 1
        },
        {
            question: "Comment crée-t-on un dictionnaire en Python ?",
            choices: ["dict = {}", "dict = []", "dict = ()", "dict = set()"],
            correctAnswer: 0
        },
        {
            question: "Quel est le résultat de 3 * '7' en Python ?",
            choices: ["21", "777", "Error", "None"],
            correctAnswer: 1
        },
        {
            question: "Quelle fonction utilise-t-on pour obtenir la longueur d'une liste en Python ?",
            choices: ["size()", "length()", "len()", "count()"],
            correctAnswer: 2
        },
        {
            question: "Comment importe-t-on un module nommé 'math' en Python ?",
            choices: ["import math", "include math", "using math", "#include <math>"],
            correctAnswer: 0
        }
    ],
    javascript: [
        {
            question: "Quelle méthode utilise-t-on pour afficher du texte dans la console en JavaScript ?",
            choices: ["print()", "console.log()", "echo()", "System.out.println()"],
            correctAnswer: 1
        },
        {
            question: "Comment déclare-t-on un tableau en JavaScript ?",
            choices: ["array = []", "array = ()", "array = {}", "array = new Array()"],
            correctAnswer: 0
        },
        {
            question: "Quel mot-clé utilise-t-on pour définir une fonction en JavaScript ?",
            choices: ["function", "def", "fun", "define"],
            correctAnswer: 0
        },
        {
            question: "Comment commence-t-on une boucle 'for' en JavaScript ?",
            choices: ["for (let i = 0; i < 10; i++)", "for i in range(10):", "for (i in range(10))", "foreach (i in range(10))"],
            correctAnswer: 0
        },
        {
            question: "Quel est l'opérateur de comparaison stricte en JavaScript ?",
            choices: ["==", "===", "!=", "!=="],
            correctAnswer: 1
        },
        {
            question: "Quelle méthode utilise-t-on pour ajouter un élément à la fin d'un tableau en JavaScript ?",
            choices: ["array.add()", "array.append()", "array.push()", "array.insert()"],
            correctAnswer: 2
        },
        {
            question: "Comment déclare-t-on une variable constante en JavaScript ?",
            choices: ["let", "var", "const", "static"],
            correctAnswer: 2
        },
        {
            question: "Quel est le résultat de typeof null en JavaScript ?",
            choices: ["'null'", "'object'", "'undefined'", "'number'"],
            correctAnswer: 1
        },
        {
            question: "Quelle méthode utilise-t-on pour convertir une chaîne JSON en objet JavaScript ?",
            choices: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"],
            correctAnswer: 0
        },
        {
            question: "Comment déclare-t-on une fonction fléchée à une seule ligne en JavaScript ?",
            choices: ["(a, b) -> a + b", "(a, b) => a + b", "function(a, b) { return a + b; }", "def (a, b): return a + b"],
            correctAnswer: 1
        }
    ],
    c: [
        {
            question: "Quelle fonction utilise-t-on pour afficher du texte en C ?",
            choices: ["print()", "console.log()", "printf()", "cout <<"],
            correctAnswer: 2
        },
        {
            question: "Comment déclare-t-on un tableau en C ?",
            choices: ["int array[]", "array int[]", "int[] array", "array = []"],
            correctAnswer: 0
        },
        {
            question: "Quel est le type de retour d'une fonction qui ne renvoie rien en C ?",
            choices: ["void", "null", "None", "undefined"],
            correctAnswer: 0
        },
        {
            question: "Comment commence-t-on une boucle 'for' en C ?",
            choices: ["for (i = 0; i < 10; i++)", "for i in range(10):", "for (int i = 0; i < 10; i++)", "foreach (i in range(10))"],
            correctAnswer: 2
        },
        {
            question: "Quel est l'opérateur de déréférencement en C ?",
            choices: ["&", "*", "->", "."],
            correctAnswer: 1
        },
        {
            question: "Quelle fonction utilise-t-on pour allouer dynamiquement de la mémoire en C ?",
            choices: ["alloc()", "malloc()", "new()", "create()"],
            correctAnswer: 1
        },
        {
            question: "Comment déclare-t-on un pointeur sur un entier en C ?",
            choices: ["int ptr", "int *ptr", "ptr int", "int &ptr"],
            correctAnswer: 1
        },
        {
            question: "Quelle est l'extension typique d'un fichier source C ?",
            choices: [".cpp", ".c", ".h", ".cs"],
            correctAnswer: 1
        },
        {
            question: "Quel est le résultat de sizeof(char) en C ?",
            choices: ["1", "2", "4", "Dépend de la plateforme"],
            correctAnswer: 0
        },
        {
            question: "Comment inclut-on un fichier d'en-tête standard en C ?",
            choices: ["#include <file.h>", "#import <file.h>", "using file.h;", "import file.h;"],
            correctAnswer: 0
        }
    ],
    java: [
        {
            question: "Quelle méthode utilise-t-on pour afficher du texte en Java ?",
            choices: ["print()", "console.log()", "echo()", "System.out.println()"],
            correctAnswer: 3
        },
        {
            question: "Comment déclare-t-on un tableau en Java ?",
            choices: ["int[] array", "array int[]", "int array[]", "array = []"],
            correctAnswer: 0
        },
        {
            question: "Quel mot-clé utilise-t-on pour définir une classe en Java ?",
            choices: ["class", "def", "function", "object"],
            correctAnswer: 0
        },
        {
            question: "Comment commence-t-on une boucle 'for' en Java ?",
            choices: ["for (i = 0; i < 10; i++)", "for i in range(10):", "for (int i = 0; i < 10; i++)", "foreach (i in range(10))"],
            correctAnswer: 2
        },
        {
            question: "Quel est le mot-clé pour l'héritage en Java ?",
            choices: ["inherits", "extends", "implements", "super"],
            correctAnswer: 1
        },
        {
            question: "Quelle méthode utilise-t-on pour ajouter un élément à la fin d'un ArrayList en Java ?",
            choices: ["add()", "append()", "push()", "insert()"],
            correctAnswer: 0
        },
        {
            question: "Comment déclare-t-on une méthode finale en Java ?",
            choices: ["final void method()", "void final method()", "static void method()", "const void method()"],
            correctAnswer: 0
        },
        {
            question: "Quel mot-clé utilise-t-on pour créer une instance d'une classe en Java ?",
            choices: ["create", "new", "instance", "init"],
            correctAnswer: 1
        },
        {
            question: "Quelle interface doit-on implémenter pour utiliser un objet dans une instruction 'for-each' en Java ?",
            choices: ["Enumerable", "Iterable", "Collection", "List"],
            correctAnswer: 1
        },
        {
            question: "Comment appelle-t-on le constructeur de la classe parente en Java ?",
            choices: ["parent()", "super()", "this()", "base()"],
            correctAnswer: 1
        }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedLanguage = '';
let userAnswers = [];

// Fonction pour mélanger un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.language-btn');
    const languageSelection = document.getElementById('language-selection');
    const startSection = document.getElementById('start');
    const quizSection = document.getElementById('quiz');
    const resultSection = document.getElementById('result');
    const selectedLanguageSpans = document.querySelectorAll('#selected-language, #selected-language-2');
    const startButton = document.getElementById('start-button');
    const submitButton = document.getElementById('submit');
    const restartButton = document.getElementById('restart-button');
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const scoreElement = document.getElementById('score');
    const feedbackElement = document.getElementById('feedback');
    const wrongAnswersList = document.getElementById('wrong-answers-list');

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedLanguage = button.dataset.language;
            selectedLanguageSpans.forEach(span => span.textContent = selectedLanguage);
            languageSelection.classList.add('hidden');
            startSection.classList.remove('hidden');
            currentQuestions = [...questions[selectedLanguage]];
            shuffleArray(currentQuestions);
        });
    });

    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', submitAnswer);
    restartButton.addEventListener('click', restartQuiz);

    function startQuiz() {
        startSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        showQuestion();
    }

    function showQuestion() {
        const question = currentQuestions[currentQuestionIndex];
        questionElement.textContent = question.question;
        choicesElement.innerHTML = '';
        question.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choice');
            button.addEventListener('click', () => selectChoice(button));
            choicesElement.appendChild(button);
        });
        updateProgress();
        submitButton.disabled = true;
    }

    function selectChoice(selectedButton) {
        document.querySelectorAll('.choice').forEach(button => {
            button.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
        submitButton.disabled = false;
    }

    function submitAnswer() {
        const selectedChoice = document.querySelector('.choice.selected');
        if (!selectedChoice) return;

        const selectedAnswer = Array.from(choicesElement.children).indexOf(selectedChoice);
        const question = currentQuestions[currentQuestionIndex];

        userAnswers.push(selectedAnswer);

        if (selectedAnswer === question.correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Question ${currentQuestionIndex + 1} sur ${currentQuestions.length}`;
    }

    function showResult() {
        quizSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        scoreElement.textContent = `${score} / ${currentQuestions.length}`;
        const percentage = (score / currentQuestions.length) * 100;
        
        if (percentage >= 80) {
            feedbackElement.textContent = "Excellent ! Vous maîtrisez bien " + selectedLanguage + ".";
        } else if (percentage >= 60) {
            feedbackElement.textContent = "Bon travail, mais il y a encore place à l'amélioration " + selectedLanguage + ".";
        } else {
            feedbackElement.textContent = "Vous devriez revoir vos connaissances en " + selectedLanguage + ".";
        }

        showWrongAnswers();
    }

    function showWrongAnswers() {
        wrongAnswersList.innerHTML = '';
        currentQuestions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer !== question.correctAnswer) {
                const li = document.createElement('li');
                li.innerHTML = `
                    <p><strong>Question:</strong> ${question.question}</p>
                    <p><strong>Votre réponse:</strong> ${question.choices[userAnswer]}</p>
                    <p><strong>Réponse correcte:</strong> ${question.choices[question.correctAnswer]}</p>
                `;
                wrongAnswersList.appendChild(li);
            }
        });
    }

    function restartQuiz() {
        resultSection.classList.add('hidden');
        languageSelection.classList.remove('hidden');
        shuffleArray(currentQuestions);
    }
});

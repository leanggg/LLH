const quizData = [
    {
        question: 'Which coding languages are used to build this Portfolio Website?',
        a: 'Leang',
        b: 'Long',
        c: 'Huy',
        d: 'Yuth',
        answer: 'a',
    },
    {
        question: 'Why should we make our own portfolio?',
        a: '14',
        b: '15',
        c: '16',
        d: '17',
        answer: 'd',
    },
    {
        question: 'How can we make it?',
        a: 'PhnomPenh',
        b: 'Tokyo',
        c: 'Nagasaki',
        d: 'New York',
        answer: 'a',
    },
];

const answerData = ['01.jpg', '01.jpg', '01.jpg'];
const questionData = ['02.jpg', '02.jpg', '02.jpg'];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let next = false;
let currentQuiz = 0;
let score = 0;
let first = true;

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function loadQuestion() {
    const questionImage = document.getElementById('question-image');
    questionImage.src = questionData[currentQuiz];
}

function loadAnswer() {
    const questionImage = document.getElementById('question-image');
    questionImage.src = answerData[currentQuiz];
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function loadQuiz() {
    deselectAnswers();
    loadQuestion();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    if (first) {
        // Show the quiz on first click
        document.querySelectorAll('.quiz_ul').forEach(function(element) {
            element.style.display = 'block';
        });
        loadQuiz();
        first = false;
    } else if (next) {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].answer) {
                score++;
            }
            currentQuiz++;  // Increment the question index
            next = false; // Reset the flag to show the question next

            if (currentQuiz < quizData.length) {
                loadQuiz();  // Load the next question
            } else {
                // All questions have been answered
                quiz.innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }
    } else {
        loadAnswer();  // Show the answer after the question
        next = true;  // Set flag to move to next question
    }
});

// Hide the quiz initially
document.querySelectorAll('.quiz_ul').forEach(function(element) {
    element.style.display = 'none';
});

questionEl.innerText = 'Bored? Play some game:)';  // Default text before the quiz starts

const quizData = [
    {
        question: 'What is a portfolio?',
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
    {
        question: 'What is the developer job?',
        a: 'Engineer',
        b: 'Mechanic',
        c: 'Teacher',
        d: 'Student',
        answer: 'd',
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
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
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].answer) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById('quiz').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

loadQuiz();
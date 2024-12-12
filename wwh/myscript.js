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
const questionData = ['02.jpg','02.jpg','02.jpg'];

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
    currentQuiz++;
    
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
    const answer = getSelected();

    if (next){

        if (answer) {
            if (answer === quizData[currentQuiz].answer) {
                score++;
            }
            next = false;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                document.getElementById('quiz').innerHTML = `
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }

    } else {
        loadAnswer();
        next = true;
    }

});

loadQuiz();

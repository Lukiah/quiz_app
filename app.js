const correctAnswers = ['C','B','A'];
const quizForm = document.querySelector('.quiz-form');
const quizResult = document.querySelector('.result-box');

quizForm.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const questionPoints = 10;
    const userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value];
    console.log(userAnswers);

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer == correctAnswers[index]){
            score += questionPoints;
        }
    });

    // scroll to score and start animation after a delay
    quizResult.classList.remove('d-none');
    scrollTo(0,0);
    
    let scoreCounter = 0;
    const scoreField = quizResult.querySelector('span');
    setTimeout(() => {
        const animTimer = setInterval(() => {
            if(scoreCounter == score){
                clearInterval(animTimer);
            }
            scoreField.textContent = `${scoreCounter} / ${questionPoints*(userAnswers.length)}`;
            // max score achieved
            if(scoreCounter == questionPoints*(userAnswers.length)){
                scoreField.classList.add("text-success","fw-bold");
            }
            scoreCounter++;
        }, 60);
    }, 500);
    
});
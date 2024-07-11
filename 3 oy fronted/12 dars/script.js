let inputNum = document.querySelector(".number-input");
let randomNum = document.querySelector(".question");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".guess-message");
let checkNum = Math.round(Math.random() * 20 + 1);
let scoreLabel = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let restart = document.querySelector(".again");

let score = 20;
scoreLabel.innerHTML = score;

checkBtn.addEventListener("click", function () {
    if (+inputNum.value === checkNum) {
        randomNum.innerHTML = checkNum;
        document.body.classList.add("body-green");
        message.innerHTML = "Молодец! Ты угадал число";
        if (score > highScore.innerHTML) {
            highScore.innerHTML = score;
        }
    } else if (+inputNum.value > checkNum) {
        message.innerHTML = "Возьми число поменьше";
        scoreLabel.innerHTML = --score;
    } else if (+inputNum.value < checkNum) {
        message.innerHTML = "Возьми число побольше";
        scoreLabel.innerHTML = --score;
    }
});

restart.addEventListener("click", function () {
    score = 20;
    scoreLabel.innerHTML = score;

    document.body.classList.remove("body-green");
    message.innerHTML = "Начни угадывать";
    randomNum.innerHTML = "???";
    inputNum.value = "";
    checkNum = Math.round(Math.random() * 20 + 1);
});
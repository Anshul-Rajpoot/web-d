let gameSequence = [];
let userSequence = [];

let started = false;
let level = 0;
let btns = ["red", "purple", "green", "yellow"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function buttonFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function() {
        btn.classList.remove("user-flash");
    }, 250);
}

function levelUp() {
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomNumber = Math.floor(Math.random() * 4); // Fixed: Now selects 0-3
    let randomColor = btns[randomNumber];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSequence.push(randomColor);
    buttonFlash(randomBtn);
}

function checkAnswer(idx) {
    if (userSequence[idx] !== gameSequence[idx]) { // Fixed: Check for wrong answer first
        h2.innerHTML = `Game Over! your score was <b>${level}</b>Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        resetGame();
        return;
    }
    
    if (userSequence.length === gameSequence.length) {
        setTimeout(levelUp, 1000);
    }
}

function btnpress() {
    let btn = this;
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
    userSequence.push(usercolor);

    checkAnswer(userSequence.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function resetGame() {
    started = false; // Fixed: Allows restarting
    gameSequence = [];
    userSequence = [];
    level = 0;
}
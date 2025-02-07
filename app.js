let h3 = document.querySelector("h3");

// 1. Create two arrays
let gameSequence = [];
let userSequence = [];

// 5. Create a color btn array
let btnList = ["pink", "blue", "green", "orange"];

let started = false;
let level = 0;

// 2. add event listeners

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("Game started.");
    started = true;

    levelUp();
  }
});

// 4. btnFlash function

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

// 3. Level up function

function levelUp() {
  userSequence = [];
  level++;
  h3.innerText = `Level: ${level}`;

  // Generate a random color btn
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btnList[randIdx];

  let randBtn = document.querySelector(`.${randColor}`);
  gameSequence.push(randColor);
  console.log(gameSequence);

  gameFlash(randBtn);
}

function checkAns(idx) {
  if (gameSequence[idx] === userSequence[idx]) {
    if (gameSequence.length == userSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerHTML = `Game over! Your score was <b>${level}</b><br> Press any key to restart the game.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

// 6. buttonPress

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSequence.push(userColor);
  console.log(userSequence);

  checkAns(userSequence.length - 1);
}

// 7. select all btns

let allbtns = document.querySelectorAll(".btn");

for (btns of allbtns) {
  btns.addEventListener("click", btnPress);
}

// 8.reset function()
function reset() {
  userSequence = [];
  gameSequence = [];
  started = false;
  level = 0;
}

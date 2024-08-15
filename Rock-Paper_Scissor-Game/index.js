let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScorePara.innerText = computerScore;
    msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Draw game
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const genCompuChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

// Play Game
const playGame = (userChoice) => {
  //   generate computer choice
  const compChoice = genCompuChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // * scissor paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //*  rock , scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // * rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});

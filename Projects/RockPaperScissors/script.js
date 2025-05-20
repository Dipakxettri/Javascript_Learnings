
const turn = document.querySelector("#turn");
const btns = document.querySelectorAll(".btn");
const seclectionD = document.querySelector(".slections");
const winD = document.querySelector(".win");
const resetB = document.querySelector(".reset");

let computerC = () => {
    const randomNum = Math.floor(Math.random() * 3);
    let choice;
    if (randomNum == 0) {
        choice = "Rock";
    }

    else if (randomNum == 1) {
        choice = "Paper";
    }

    else {
        choice = "Scissors"
    }

    return choice;

};


let reset = () => {

    resetB.addEventListener("click", () => {
        winD.innerHTML = "win:";
        computerC();
        btns.forEach(element => {
            element.style.pointerEvents = "auto"
        });
    })

};

let disableClicks = () => {
    btns.forEach(element => {
        element.style.pointerEvents = "none"
    });
};

let checkAnswer = () => {
    btns.forEach((element) => {
        element.addEventListener("click", (e) => {
            let player = e.target.innerHTML;
            let computer = computerC();
            console.log(player);

            if (
                (player === "Rock" && computer === "Paper") ||
                (player === "Paper" && computer === "Scissors") ||
                (player === "Scissors" && computer === "Rock")
            ) {
                winD.innerHTML = `💻 Computer wins! ${computer} beats ${player}`;
                disableClicks();

            }
            else if ((player === "Rock" && computer === "Scissors") ||
                (player === "Paper" && computer === "Rock") ||
                (player === "Scissors" && computer === "Paper"
                )) {
                winD.innerHTML = `🎉 You wins! ${player} beats ${computer}`;
                disableClicks();

            }

            else {
                winD.innerHTML = `it's a tie!: ${player}, and ${computer}`;
                disableClicks();
            }



        })
    })
};

checkAnswer();
reset();

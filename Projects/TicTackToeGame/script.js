
const fields = document.querySelectorAll(".feild");
const turn = document.querySelector("#turn");
const reset = document.querySelector("#reset");

let checkWinner = () => {
    const values = Array.from(fields).map(el => el.innerHTML);
    console.log(values);

    let combinations = [
        [0, 1, 2], // row 1
        [3, 4, 5], // row 2
        [6, 7, 8], // row 3
        [0, 3, 6], // col 1
        [1, 4, 7], // col 2
        [2, 5, 8], // col 3
        [0, 4, 8], // diag 1
        [2, 4, 6]  // diag 2
    ];

    for (const combo of combinations) {
        let [a,b,c] = combo;
        if(values[a] && values[a] === values[b] && values[b] === values[c]){

            return values[a]
        }

        
    }
    return null;
}


let desableBoard = () => {

    fields.forEach((ele)=> {
        ele.style.pointerEvents = "none";
    })
}

fields.forEach((el) => {

    el.addEventListener("click", (e) => {
        if (e.target.innerHTML == "") {
            if (turn.innerHTML == "X") {
                e.target.innerHTML = "X"
                turn.innerHTML = " O"
            }

            else {
                e.target.innerHTML = "O"
                turn.innerHTML = "X"
            }
        }
        
        let winner = checkWinner();
        if(winner){
           alert(winner + " wins");
           turn.innerHTML = "Game is won by player " + winner;
           desableBoard();
        }
  

    })
})



reset.addEventListener("click", (e) => {
    fields.forEach((el) => {
        el.innerHTML = "";
    })
    turn.innerHTML = "X";
    fields.forEach((ele)=> {
        ele.style.pointerEvents = "auto";
    });
});



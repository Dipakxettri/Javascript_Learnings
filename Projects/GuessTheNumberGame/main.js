const ans = parseInt(Math.random() * 100 + 1); //Generating random number

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const remaning = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseFloat(userInput.value)
        console.log(guess);
        validateGuess(guess);
        
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }else if(guess < 1){
        alert("please enter a number more then 1")
    }else if(guess > 100){
        alert("please enter a number less then 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage("game over Random number was",ans)
            endGame()
        }else{
             displayGuess()
             checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === ans){
        displayMessage("You guess it right")
        endGame()
    }else if (guess < ans){
        displayMessage("number is too low")
    }else if (guess > ans){
        displayMessage("number is too high")
    }
}

function displayGuess(guess){
    userInput.value = ""
    guesses.innerHTML += `${guess}  `
    numGuess++
    remaning.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`

}

function newGame(){

}

function endGame(){

}





// selecting dom elements:
const asked = document.getElementById('input');
const reset_btn = document.getElementById('reset')
const submit_btn = document.getElementById('submit')
const remaningF = document.getElementById('remaning')
const scoreF = document.getElementById('score')
const resultF = document.getElementById('result')

// answer:
let ans = Math.floor(Math.random() * 10) + 1;

// Function to reset the random number to a new value
function resetRandomNumber() {
    ans = Math.floor(Math.random() * 10) + 1;  
}

//handeling submit button :
let ask;
let score = 100;
let attempts = 4;
submit_btn.addEventListener("click", () => {
    ask = asked.value
        if(ask.length > 0){
            if(!isNaN(ask)){
                if(ask <= 10 && ask >=1){
                    if(ask == ans){
                        resultF.textContent = "Result: You Win"
                        scoreF.textContent = `Score: ${score}`
                        asked.disabled = true
                    }
                    else{
                        score = score -25;
                        attempts = attempts - 1
                        resultF.textContent = "Result: Try again"
                        remaningF.textContent = `Attempts: ${attempts}`
                        
                    }
                }
                else{
                    resultF.textContent = "Result: Unexpected number"
                }
            }
            else{
                 resultF.textContent = "Result: Should be number"
            }
        }
    
        else{
            resultF.textContent = "Result: Should not be empity"
        }

        if(attempts == 0){
             resultF.textContent = "Result: You Lost click in restart"
             asked.disabled = true
             scoreF.textContent = `Score: ${score}`
        }
})

// handeling reset button:
reset_btn.addEventListener("click", () => {
    attempts = 4;
    score = 100;
    resultF.textContent = "Result: "
    remaningF.textContent = `Attempts: 4`
     scoreF.textContent = `Score: `
     asked.value = ""
     asked.disabled = false
    resetRandomNumber()
})





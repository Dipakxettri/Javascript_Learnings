

// Selecting elements
const num1F = document.getElementById('num1');
const num2F = document.getElementById('num2');
const operators = document.querySelectorAll('.operator')
const equalB = document.getElementById('equals');
const resultF = document.getElementById('resultt');


// Cheeking which operation button was fired
let oper = 0;
let result;
operators.forEach(button=> {
    button.addEventListener("click",(event) => {
        oper = event.target.dataset.operation
        ;
    })
})


// Condition for results
equalB.addEventListener("click", () => {
    let value1 = Number(num1F.value)
    let value2 = Number(num2F.value)
    if(oper == '+'){
        result = value1 + value2;
    }

    else if(oper == '-'){
        result = value1 - value2;
    }

    else if(oper == '*'){
        result = value1 * value2;
    }

    else if(oper == '/'){
        result = value1 / value2;
    }

    else{
        result = "Error";
    }

    resultF.textContent = `Result: ${result}`;
})







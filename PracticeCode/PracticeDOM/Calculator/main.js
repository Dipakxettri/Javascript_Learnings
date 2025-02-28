const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operation')
const equal = document.getElementById('equals')
const displayS = document.getElementById('display')

let operator;

// checking which operation is clicked!
const checkOperation = () =>{
    operators.forEach(operationB => {
        operationB.addEventListener("click", (event) => {
            operator = event.target.dataset.operation;
            displayS.value = event.target.dataset.operation;  
        })
    })
}
checkOperation();


numbers.forEach(valueB => {
    valueB.addEventListener("click", (event) =>{
        displayS.value = event.target.dataset.operation;
    })
})


const num1F = document.getElementById('num1');
const num2F = document.getElementById('num2');
const btn = document.getElementById('add');
const resultF = document.getElementById('resultt');

let result;
btn.addEventListener('click', () => {
    let value1 = Number(num1F.value)
    let value2 = Number(num2F.value)
    result = value1 + value2;

    resultF.textContent = `Result: ${result}`;
})
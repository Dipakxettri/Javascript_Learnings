
let num1 = Number(prompt("Enter first Number"));
let operation = prompt("Enter operator");
let num2 = Number(prompt("Enter second Number"));

switch(operation){
    case '+':
        console.log(num1 + num2);
        break;

    case '-':
        console.log(num1 - num2);
        break;

    case '*':
        console.log(num1 * num2);
        break;

    case '/':
        console.log(num1 / num2);
        break;

    default:
        console.log("Wrong operaton");
        break;
        
        
        
        
}
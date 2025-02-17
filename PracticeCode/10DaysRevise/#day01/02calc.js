let num1 = Number(prompt("Enter 1st number: "));
let operator = prompt("Enter operator: ");
let num2 = Number(prompt("Enter 2nd number: "));
let ans = 0;

if(operator == "+"){
    ans = num1 + num2
}
else if(operator == "-"){
    ans = num1 - num2;
}

else if(operator == "*"){
    ans = num1 + num2;
}
else if(operator == "/"){
    ans = num1 / num2;
}
else{
    ans = "Error";
}
console.log(ans);
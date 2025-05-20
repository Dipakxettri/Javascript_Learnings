let num = Number(prompt("Enter number"));
let check = num % 2;
switch (check){
    case 0:
        console.log("Even");
        break;

    case 1:
        console.log("odd");
        break;
    
    default:
        console.log("Not a number");    
}
let userName = prompt("Enter a Username:");
const PASS = prompt("Enter Password");

alert(`Welcome to your bank account ${userName}`);
let amount = 100000;
let isRun = true;

while(isRun){
    
    let action = Number(prompt("Enter 1 for displaying current balance. Enter 2 for Deposite. Enter 3 for withdraw and enter 5 to exit an program"));

    switch(action){
        case 1:
            alert(`Current balance is ${amount}`);
            break;
        
        case 2:
            let addBalance = Number(prompt("Enter balance you want to Deposite : "));
            amount+=addBalance;
            break;
        
        case 3:
            let reduceBalance = Number(prompt("Enter balance you want to WithDraw : "));
            if(reduceBalance <= amount){
                amount-=reduceBalance;
            }
            else{
                alert("Unsuffient ammount");
            }
            break;
        case 4:
            isRun = false;
            break;

        default:
            alert("Please Enter right action ");

    }

}

let rating = Number(prompt("Rate Stranger Things netflix series out of 10"));

if(rating<=10 && rating>8){
    console.log("Outstanding");
}

else if(rating<=8 && rating>6){
    console.log("good");
}

else if(rating==6 && rating==5){
    console.log("Normal");
}

else if(rating<5 && rating>1){
    console.log("Bad");
}

else if(rating == 0){
    console.log("Useless");
}

else{
    console.log("Enter in range of 10 to 0");
}
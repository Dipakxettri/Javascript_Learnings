
let month = Number(prompt("Enter month"));
let seasons;

if(month == 12 || month == 1 || month ==2){
    seasons = "Winter"
}

else if(month>= 3 && month <5){
    seasons = "Spring";
}

else if(month>=6 && month < 8){
    seasons = "Summer";
}

else if(month >= 9 && month <= 11){
    seasons = "Autumn";
}

console.log(seasons);


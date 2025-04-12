
let arry = [1,2,3,4];
let isNum = false;

if(arry.length == 0){
    console.log("Empity Array");
}


else{
    for (const indexes of arry) {
        if(!isNaN(indexes)){
            isNum = true;
        }
        else{
            isNum = false;
        }
    }
}

console.log(isNum);

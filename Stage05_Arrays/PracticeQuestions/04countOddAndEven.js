
let arry = [1,2,3,4];
let countE = 0;
let countO = 0;

if(arry.length == 0){
    console.log("Empity Array");
    
}

else{
    for (const indexes of arry) {
        if(indexes%2 == 0){
            countE +=1;
        }
    
        else{
            countO += 1;
        }
    }
}

console.log("Even ",countE);
console.log("Odd ", countO);


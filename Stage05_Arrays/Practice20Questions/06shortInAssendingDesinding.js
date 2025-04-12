
let arry = [10,2,3,4];
let l = arry.length;


for(let i = 0; i < l; i++){
    for(let j = 0; j < l - 1 - i; j++){
        if(arry[j] > arry[j+1]){
            let temp = arry[j];
            arry[j] = arry[j+1];
            arry[j+1] = temp;
        }
    
    }
}

for (const indexes of arry) {
    console.log(indexes);
}




for(let i = 0; i < l; i++){
    for(let j = 0; j < l - 1 - i; j++){
        if(arry[j] < arry[j+1]){
            let temp = arry[j];
            arry[j] = arry[j+1];
            arry[j+1] = temp;
        }
    
    }
}

for (const indexes of arry) {
    console.log(indexes);
}

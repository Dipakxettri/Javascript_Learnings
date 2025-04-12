
let arry = [1,2,3,4,-2,-9];

for (let i = 0; i < arry.length; i++) {
    if(arry[i] < 0){
        arry[i] = 0;
    }
}

for (const indexes of arry) {
    console.log(indexes);
    
}
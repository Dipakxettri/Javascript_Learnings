
let arry = [1,2,2,3,4,2,10];

for(let i = 0; i<arry.length-1;i++){
    for (let j = i+1; j < arry.length; j++) {
        if(arry[j] == arry[i]){
            arry.splice(j,1);
            j--;
        }
    }
}

console.log(arry.toString());



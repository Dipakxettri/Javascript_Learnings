
let arry = [1,2,3,4];
let l = arry.length;
let temp;
let n = l/2;

for(let i = 0; i<n; i++) {
    temp = arry[i];
    arry[i] = arry[l-i-1];
    arry[l-i-1] = temp;
}

for (const indexes of arry) {
    console.log(indexes);
    
}


// optimized with revise() method
let arry2 = [1,2,3,4];
arry2.reverse();

console.log(arry2);


let arry = [1,2,3,4];

let average = 0;
let sum = 0;
let n = arry.length;

for (let i = 0; i<n; i++) {
    sum += arry[i];
    
}
average = sum/n;

console.log(average);

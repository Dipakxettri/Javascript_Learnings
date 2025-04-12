

let arry = [1,2,3,4];
let j = 0;

for(let i = 0; i< arry.length; i++) {
    let square = arry[i] * arry[i];
    arry[j+1] = square;
    j++;
    if(j > arry.length){
        break;
    }
};

for (const indexes of arry) {
    console.log(indexes);
}

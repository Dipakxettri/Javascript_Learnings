
let arry = [1, 2, 3, 4];
let target = 2;
let isExist = false;
let index;

if (arry.length == 0) {
    console.log("Empity Array");
}

else {

    for (let i = 0; i< arry.length; i++) {
        if(arry[i] == target){
            isExist = true;
            index = i;
        }

}
if(isExist){
    console.log(index);
}
else{
    console.log(-1);
}
}


// optimized
console.log(arry.indexOf(target));

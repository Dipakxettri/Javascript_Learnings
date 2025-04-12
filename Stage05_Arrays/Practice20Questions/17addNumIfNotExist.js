
let arry = [1,2,3,4];
let target = 10;
let isExist = false;

let l = arry.length;
arry.forEach(element => {
    if(element == target){
        isExist = true;
    }
});

if(!isExist){
    arry.push(target);
    for (const element of arry) {
        console.log(element);
        
    }
}

else{
    console.log(target," Already exists in an Array");
    
}
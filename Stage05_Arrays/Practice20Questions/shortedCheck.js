// Check if array is shorted or not 

let arry = [1,2,3,4,5,6];
let i = 1;
let isShorted = false;

arry.forEach(element => {
    if(element > arry[i]){
        isShorted = true;
        
    }
    else{
        isShorted = false;
    }
});

if(isShorted){
    console.log("Array is shorted");
}

else{
    console.log("Array is not shorted");
}

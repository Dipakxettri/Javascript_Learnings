// count number of even and odd
let arry = [1,2,3,4,8];
let odd = 0;
let even = 0;

arry.forEach(element => {
    if(element%2 == 0){
        odd+=1;
    }

    else{
        even+=1;
    }
});

console.log("The number of odd values are :",odd);
console.log("The number of even values are :",even);

// merge two arry 
let arry1 = [1,2];
let arry2 = [3,4];
let merged = [...arry1,...arry2]
let stringArry = merged.toString();
console.log(stringArry);

// find the largest number in an array
let arry3 = [1,2,3,4];
let max = -2882822;

arry3.forEach(element => {
    if(element>max){
        max = element;
    }
});

console.log("The max value is : ",max);







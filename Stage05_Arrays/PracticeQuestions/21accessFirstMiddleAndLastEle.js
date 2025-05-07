let arry = [1, 2, 4, 3, 10, 20,40];
let middleIndex = Math.floor(arry.length / 2);//floor removes the point values.

arry.forEach((element,index) => {
    if (index==0) {
        console.log(`the first element is ${element}`);
    }

    else if(index == middleIndex){
        console.log(`the middle element is ${element}`);
    }

    else if(index == arry.length-1){
        console.log(`the last element is ${element}`);
        
    }
    
});
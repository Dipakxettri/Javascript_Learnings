
let arry = [1,2,3,5,6,7,8];
let minV = 1000000;
let maxV = -100000;
let isEmpity = false;


// find min Max
if(arry.length == 0){
    isEmpity = true;
    
}
else{
    for (const indexes of arry) {

        if (indexes < minV){
                minV = indexes;
            }
         if(indexes > maxV){
                maxV = indexes;
            }
        }
        
}

if(isEmpity){
    console.log("Empity Array");
    
}
else{
    console.log(minV);
    console.log(maxV);
}




// optimized using build in methods: 
let arry2 = [1,2,3,5,6,7,8];

// find min Max
if(arry.length == 0){
    console.log("Empity Array"); 
}
else{
    let minV2 = Math.min(...arry2);
    let maxV2 = Math.max(...arry2);
    console.log(minV2);
    console.log(maxV2);
}






function calculateCartPrice(...num1){//Rest Operator
    return num1
}
console.log(calculateCartPrice(200,400,500,600));

// case :
function calculateCartPrice2(num1,num2,num3, ...num4){
    return num4
}
console.log(calculateCartPrice2(200,400,500,600));
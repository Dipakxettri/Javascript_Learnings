const coding = ["java","python","cpp","js"]

// callback function:
coding.forEach( function (item) {
    console.log(item);
    
})

//callback arrow function:
coding.forEach((item) => {
    console.log(item);
})

//another case:
function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)

// callback not only takes a item but also another things
coding.forEach((item,index,arr) => {
    console.log(item, index, arry);
})
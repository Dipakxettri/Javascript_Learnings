
let obj = {
    name:"deepak",
    age:18
}

let cloned = {...obj};
let isEqual = cloned === obj; //false because objects are compare by the refrence.

console.log(isEqual);
console.log(cloned);

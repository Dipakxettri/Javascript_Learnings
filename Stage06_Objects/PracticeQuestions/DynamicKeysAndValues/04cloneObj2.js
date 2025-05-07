

let obj = {
    name:"deepak",
    age:18
}

let cloned = Object.assign({},obj);

let isEqual = cloned === obj;

console.log(isEqual);

console.log(cloned);

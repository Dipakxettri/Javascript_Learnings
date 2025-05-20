
let obj1 = {
    name:"Deepak",
    age:18
};

let obj2 = {
    name2:"Shyam",
    age3:12
};

let merged = {...obj1,...obj2};

console.log(merged);


// another

let merged2 = Object.assign({},{name:"Deepak",age:18}, {n:"Shyam", a:12});
console.log(merged2);


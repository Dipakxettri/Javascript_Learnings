const student = {
    "name": "Deepak Ghimire",
    rollno: 2,
}

// Object.freeze(student)
// student.name = "Dipak Ghimire"
// console.log(student['name']);

// const mySym = Symbol("key1");

// const myObj = {
//     [mySym]: "myKey",
// }

// console.log(myObj[mySym]);
// console.log(typeof myObj[mySym]);

// student.greeting = function(){
//     console.log(`Hello ${this.name}`);
// }

// student.addID = function(idi){
//     student.id = idi;
    
// }

// console.log(student.greeting());
// student.addID(2);

// console.log(student);

const obj1 = {name1:"hari"};
const obj2 = {name2:"shyam"};

const obj3 = {...obj1, ...obj2};
console.log(obj3);
console.log(obj3.name1);
console.log(obj3.name2);
obj3.name1 = "rina";
console.log(obj3.name1);
console.log(obj1.name1);



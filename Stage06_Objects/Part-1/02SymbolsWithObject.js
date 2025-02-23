// symbol Declaration:
const mySym = Symbol("key1");

// using sybol as a key and prining with object:
const myObj = {
    [mySym]: "mykey1",
}

console.log(myObj[mySym]);
console.log(typeof myObj[mySym]);

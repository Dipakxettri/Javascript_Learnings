// merging objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// not recommended:
// const obj3 = {obj1, obj2};
// console.log(obj3);

// not recommended:
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// recommended but do not use:
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// recommended - spreating an objects using ... operator:
const obj3 = {...obj1, ...obj2}
console.log(obj3);



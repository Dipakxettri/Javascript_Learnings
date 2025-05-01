
let obj1 = {
    name:"Deepak"
};

let obj2 = {
    name:"Hari"
};

let mergedObj = {...obj1,...obj2};

for (const key in mergedObj) {
    console.log(key);
}
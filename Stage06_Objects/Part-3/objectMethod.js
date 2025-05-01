
let obj = {
    name: "Deepak",
    id: 12,
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
let arry = Object.entries(obj);

arry.forEach(element => {
    console.log(element);
    
});



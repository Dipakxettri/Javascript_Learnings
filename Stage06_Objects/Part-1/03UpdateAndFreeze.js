// Object allows us to update a value of an keys but we can freeze them now they can't update anymore


// updating:
const myObj = {
    name:"Deepak"
}
// myObj.name = "Dipak";
// console.log(myObj["name"]);


// freezing:
Object.freeze(myObj);
// myObj.name = "Dipak";
// console.log(myObj["name"]);



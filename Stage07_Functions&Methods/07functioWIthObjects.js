const user = {
    username: "Deepak",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(handleObject(user))
// or
handleObject({
    username: "Dipak",
    price:40
})

//Function WIth Arrays:
const myArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray))


let person = {
    name : "Deepak",
    age: 18,
};
let exist = false;

for (const key in person) {
    if(key == "email"){
        exist = true;
        break;
    }
}

if(exist){
    console.log("Exist");
}

else{
    console.log("not Exist");
    
}

